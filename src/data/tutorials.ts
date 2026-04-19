const REPO = 'https://github.com/jiayinlu19960224/Math-Code-Art/blob/main';
const TREE = 'https://github.com/jiayinlu19960224/Math-Code-Art/tree/main';

// Local gallery files live in public/gallery/.
// Prefix local filenames with "local:" — gallery.astro resolves them to ${base}gallery/*.
// Full https:// URLs are used as-is.
export interface GalleryItem {
  kind: 'image' | 'video';
  src: string;       // "local:filename.ext" or full https:// URL
  caption?: string;
}

export interface Tutorial {
  slug: string;
  title: string;
  leads: string[];
  tagline: string;
  description: string;
  concepts: string[];
  tags: string[];
  youtube?: string;
  githubUrl?: string;
  exhibitionSlug?: string;
  notebooks: { label: string; url: string }[];
  gallery: GalleryItem[];
}

export const tutorials: Tutorial[] = [
  {
    slug: 'music-spirograph',
    title: 'Music Spirograph',
    leads: ['Junhao Jia'],
    tagline: 'Parametric geometry driven by audio features',
    description:
      'A music-reactive spirograph renderer driven by audio analysis. Four moving entities trace synchronized geometric patterns using invisible circular colliders, producing smooth motion rendered frame-by-frame into video.',
    concepts: ['Audio feature extraction', 'Parametric curves', 'Collision geometry', 'Video synthesis'],
    tags: ['Audio', 'Geometry', 'Animation'],
    githubUrl: `${TREE}/music-spirograph`,
    notebooks: [{ label: 'Spiro_Tutorial.ipynb', url: `${REPO}/music-spirograph/Spiro_Tutorial.ipynb` }],
    gallery: [
      { kind: 'video', src: 'local:spirograph.mp4' },
    ],
  },
  {
    slug: 'music-painting',
    title: 'Music Painting',
    leads: ['Hanyin Coco Zhang'],
    tagline: 'Mapping audio features to color and brushstroke via random walk',
    description:
      'Maps spectral features extracted from music into continuously varying RGB colors via a custom mixing function. A random walk algorithm generates brush strokes whose width and direction shift with the underlying audio, producing paintings unique to each piece of music.',
    concepts: ['Mel spectrogram', 'Spectral feature analysis', 'Random walk', 'Color mapping'],
    tags: ['Audio', 'Painting', 'Randomness'],
    githubUrl: `${TREE}/music-painting`,
    notebooks: [{ label: 'Music_Painting.ipynb', url: `${REPO}/music-painting/Music_Painting.ipynb` }],
    gallery: [
      { kind: 'video', src: 'https://github.com/user-attachments/assets/8b28a778-db88-442d-8daf-68f07567e7cd', caption: 'Animation 1' },
      { kind: 'video', src: 'https://github.com/user-attachments/assets/5d2092c0-f2c3-4d4c-a548-3b112ce29254', caption: 'Animation 2' },
    ],
  },
  {
    slug: 'neural-music-visualizer',
    title: 'Neural Music Visualizer',
    leads: ['Shanmei Wanyan'],
    tagline: 'CPPN-generated animation conditioned on audio features',
    description:
      'Uses Compositional Pattern-Producing Networks (CPPNs) to create music-conditioned animated artwork. The network learns the color structure of a reference image and generates video frames whose visual character evolves with the audio.',
    concepts: ['CPPNs', 'Neural animation', 'Audio conditioning', 'Generative models'],
    tags: ['Neural Networks', 'Audio', 'Animation'],
    githubUrl: `${TREE}/visualizing-music-neural-network`,
    notebooks: [{ label: 'visualizing_music_neural_network.ipynb', url: `${REPO}/visualizing-music-neural-network/visualizing_music_neural_network.ipynb` }],
    gallery: [
      { kind: 'video', src: 'local:cppn-audio1.mp4', caption: 'Audio track 1' },
      { kind: 'video', src: 'local:cppn-audio2.mp4', caption: 'Audio track 2' },
      { kind: 'video', src: 'local:cppn-audio3.mp4', caption: 'Audio track 3' },
    ],
  },
  {
    slug: 'random-walk-neural',
    title: 'Random Walk + Neural Networks',
    leads: ['Shanmei Wanyan', 'Hanyin Coco Zhang'],
    tagline: 'Random walk drawing with a coordinate network and audio modulation',
    description:
      'Combines random-walk drawing with a coordinate-based neural network that learns the color structure of a reference image. Audio features modulate the walk\'s dynamics, producing animated paintings that blend the reference image\'s palette with the music\'s rhythm.',
    concepts: ['XYSpecNet architecture', 'Coordinate networks', 'Stochastic path generation', 'Audio-visual coupling'],
    tags: ['Neural Networks', 'Audio', 'Painting', 'Randomness'],
    githubUrl: `${TREE}/visualizing-music-random-walk-neural`,
    notebooks: [{ label: 'random_walk_image.ipynb', url: `${REPO}/visualizing-music-random-walk-neural/random_walk_image.ipynb` }],
    gallery: [
      { kind: 'video', src: 'local:rw-city-of-stars.mp4', caption: 'City of Stars' },
      { kind: 'video', src: 'local:rw-liability.mp4',     caption: 'Liability' },
      { kind: 'video', src: 'local:rw-one-last-kiss.mp4', caption: 'One Last Kiss' },
    ],
  },
  {
    slug: 'neural-style-transfer',
    title: 'Neural Style Transfer',
    leads: ['Weimo Zhu'],
    tagline: 'Separating content and style using VGG19 feature maps',
    description:
      'Applies Neural Style Transfer using a pre-trained VGG19 network. Unlike typical deep learning, NST optimizes pixel values rather than weights — minimizing a combined content and style loss to produce images that carry one image\'s structure and another\'s texture.',
    concepts: ['VGG19 feature maps', 'Gram matrices', 'Gradient-based pixel optimization', 'Content vs. style loss'],
    tags: ['Neural Networks', 'Image Processing', 'Style'],
    githubUrl: `${TREE}/style-transfer`,
    notebooks: [{ label: 'tutorial_NST.ipynb', url: `${REPO}/style-transfer/tutorial_NST.ipynb` }],
    gallery: [
      { kind: 'image', src: 'local:nst-1.png' },
      { kind: 'image', src: 'local:nst-2.png' },
      { kind: 'image', src: 'local:nst-3.png' },
      { kind: 'image', src: 'local:nst-4.png' },
      { kind: 'image', src: 'local:nst-5.png' },
      { kind: 'image', src: 'local:nst-6.png' },
    ],
  },
  {
    slug: 'voronoi-mosaic',
    title: 'Voronoi Photo Mosaic',
    leads: ['Tucker Nielson'],
    tagline: 'Voronoi tessellation over sampled image points',
    description:
      'Samples a set of points across an image, computes a Voronoi tessellation over them, and fills each cell with the average color of its underlying image region. The result is a geometric mosaic that preserves large-scale structure while abstracting fine detail.',
    concepts: ['Voronoi diagrams', 'Adaptive sampling', 'Computational geometry', 'Color averaging'],
    tags: ['Geometry', 'Image Processing', 'Mosaic'],
    githubUrl: `${TREE}/voronoi-photo-mosaic`,
    notebooks: [
      { label: 'adaptive_sampling_art.ipynb', url: `${REPO}/voronoi-photo-mosaic/adaptive_sampling_art.ipynb` },
      { label: 'intro_sam_point_prompt.ipynb', url: `${REPO}/voronoi-photo-mosaic/intro_sam_point_prompt.ipynb` },
    ],
    gallery: [
      { kind: 'image', src: 'local:voronoi-bird.png',      caption: 'Bird' },
      { kind: 'image', src: 'local:voronoi-peach.png',     caption: 'Peach' },
      { kind: 'image', src: 'local:voronoi-butterfly.png', caption: 'Butterfly' },
    ],
  },
  {
    slug: 'style-transfer-voronoi',
    title: 'Style Transfer Voronoi',
    leads: ['Tucker Nielson', 'Weimo Zhu'],
    tagline: 'Voronoi mosaic with neural style transfer applied',
    description:
      'Combines Voronoi tessellation with Neural Style Transfer to produce stylized geometric mosaics. A photo is first decomposed into a Voronoi diagram whose cells are filled with averaged color, then Neural Style Transfer is applied to blend artistic texture into the geometric structure.',
    concepts: ['Voronoi tessellation', 'Neural style transfer', 'Gram matrices', 'Color averaging'],
    tags: ['Geometry', 'Neural Networks', 'Style', 'Mosaic'],
    githubUrl: `${TREE}/style-transfer-voronoi-mosaic`,
    exhibitionSlug: 'cellular-impressions',
    notebooks: [],
    gallery: [
      { kind: 'image', src: '/exhibitions/cellular-impressions/light-marble-1.jpg' },
    ],
  },
  {
    slug: 'photo-collage',
    title: 'Algorithmic Photo Collage',
    leads: ['Meichen Wan'],
    tagline: 'Assembling a target image from a library of tile images',
    description:
      'Algorithmically assembles photo collages by decomposing a target image and filling regions with best-matching tiles from an image library. Mathematical optimization governs placement, scale, and blending for a coherent result.',
    concepts: ['Image decomposition', 'Tile matching', 'Optimization', 'Blending'],
    tags: ['Image Processing', 'Optimization', 'Collage'],
    githubUrl: 'https://github.com/jiayinlu19960224/Math-Code-Art/tree/main/photo-collage',
    notebooks: [],
    gallery: [],
  },
  {
    slug: 'tsp-line-drawing',
    title: 'TSP Line Drawing',
    leads: ['Dengyuhan Dai'],
    tagline: 'Image-to-point sampling and TSP optimization for single-line drawing',
    description:
      'Converts an image into thousands of 2D points via density-driven sampling and Floyd-Steinberg dithering, then solves a large-scale Travelling Salesman Problem with the LKH-3 heuristic to produce a single unbroken line that renders the full image. SAM-based segmentation enables color-consistent multi-region drawings.',
    concepts: ['Floyd-Steinberg dithering', 'TSP heuristics (LKH-3)', 'Density-based sampling', 'SAM segmentation', 'Parallel processing'],
    tags: ['Optimization', 'Geometry', 'Line Art', 'AI'],
    githubUrl: `${TREE}/image-point-traveling-salesman`,
    notebooks: [{ label: 'LKH-3_SAM_demo.ipynb', url: `${REPO}/image-point-traveling-salesman/LKH-3_SAM_demo.ipynb` }],
    gallery: [
      { kind: 'image', src: 'https://github.com/user-attachments/assets/eec8228d-74d7-45ea-a923-db622e9d080f', caption: 'Portrait' },
      { kind: 'image', src: 'https://github.com/user-attachments/assets/e0690a6f-06c9-42f7-a79c-80595e91fad9', caption: 'Hamuko' },
      { kind: 'image', src: 'https://github.com/user-attachments/assets/63e0ecea-7c53-4be5-9045-0288d39c1f4a', caption: 'Kinkakuji' },
    ],
  },
];
