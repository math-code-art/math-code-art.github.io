import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://math-code-art.github.io',
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  vite: {
    // transformers.js (used by the SAM worker) ships large prebuilt bundles;
    // leave it out of dep pre-bundling and build module workers as ES.
    optimizeDeps: { exclude: ['@huggingface/transformers'] },
    worker: { format: 'es' },
  },
});
