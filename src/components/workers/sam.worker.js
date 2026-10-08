// SlimSAM segmentation worker (Phase 2).
// Loads the model once, encodes an image once (the expensive step), then decodes
// a point prompt into a mask on each click. Runs off the main thread so the UI
// never freezes. Weights are fetched from the Hugging Face CDN at runtime.
import { env, SamModel, AutoProcessor, RawImage, Tensor } from '@huggingface/transformers';

env.allowLocalModels = false;   // always fetch from the HF CDN, don't probe a local /models path

const MODEL_ID = 'Xenova/slimsam-77-uniform';
let model = null, processor = null, imageInputs = null, imageEmbeddings = null;

async function load() {
  processor = await AutoProcessor.from_pretrained(MODEL_ID);
  const opts = {
    progress_callback: (p) => {
      if (p && p.status === 'progress') {
        self.postMessage({ type: 'progress', loaded: p.loaded, total: p.total, file: p.file });
      }
    },
  };
  const useGpu = (typeof navigator !== 'undefined') && ('gpu' in navigator) && !!navigator.gpu;
  try {
    model = await SamModel.from_pretrained(MODEL_ID, { ...opts, device: useGpu ? 'webgpu' : 'wasm' });
  } catch (e) {
    model = await SamModel.from_pretrained(MODEL_ID, opts); // last-resort default device/dtype
  }
  self.postMessage({ type: 'ready' });
}

async function encode(data, width, height) {
  const image = new RawImage(new Uint8ClampedArray(data), width, height, 4).rgb();
  imageInputs = await processor(image);
  imageEmbeddings = await model.get_image_embeddings(imageInputs);
  self.postMessage({ type: 'encoded' });
}

async function decode(nx, ny, label) {
  // Points are given in the reshaped (model input) space: normalized * reshaped size.
  const reshaped = imageInputs.reshaped_input_sizes[0]; // [h, w]
  const input_points = new Tensor('float32', new Float32Array([nx * reshaped[1], ny * reshaped[0]]), [1, 1, 1, 2]);
  const input_labels = new Tensor('int64', new BigInt64Array([BigInt(label == null ? 1 : label)]), [1, 1, 1]);

  const outputs = await model({ ...imageEmbeddings, input_points, input_labels });
  const masks = await processor.post_process_masks(outputs.pred_masks, imageInputs.original_sizes, imageInputs.reshaped_input_sizes);

  const m = masks[0];                       // Tensor, dims [..., nmasks, H, W]
  const dims = m.dims;
  const Wd = dims[dims.length - 1], H = dims[dims.length - 2], nmasks = dims[dims.length - 3];
  const scores = outputs.iou_scores.data;   // one score per candidate mask
  let best = 0;
  for (let i = 1; i < scores.length; i++) if (scores[i] > scores[best]) best = i;

  const md = m.data;
  const out = new Uint8Array(H * Wd);
  const off = best * H * Wd;
  for (let i = 0; i < H * Wd; i++) out[i] = md[off + i] ? 1 : 0;
  self.postMessage({ type: 'mask', data: out.buffer, width: Wd, height: H, score: scores[best] }, [out.buffer]);
}

self.onmessage = async (e) => {
  const msg = e.data;
  try {
    if (msg.type === 'load') await load();
    else if (msg.type === 'encode') await encode(msg.data, msg.width, msg.height);
    else if (msg.type === 'decode') await decode(msg.nx, msg.ny, msg.label);
  } catch (err) {
    self.postMessage({ type: 'error', message: String((err && err.message) || err) });
  }
};
