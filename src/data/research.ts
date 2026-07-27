export interface Paper {
  key: string;
  title: string;
  subtitle: string;
  authors: string[];
  // Subset of `authors` credited as lead(s) — falls back to authors[0] if omitted.
  leads?: string[];
  venue: string;
  year: number;
  arxiv: string;
  url: string;
  linkLabel: string;
  description: string;
  tags: string[];
}

export const papers: Paper[] = [
  {
    key: 'birth-of-a-painting',
    title: 'Birth of a Painting',
    subtitle: 'Differentiable Brushstroke Reconstruction',
    authors: ['Ying Jiang', 'Jiayin Lu', 'Yunuo Chen', 'Yumeng He', 'Kui Wu', 'Yin Yang', 'Chenfanfu Jiang'],
    leads: ['Ying Jiang', 'Jiayin Lu', 'Yunuo Chen'],
    venue: 'arXiv preprint',
    year: 2025,
    arxiv: 'arXiv:2511.13191',
    url: 'https://yingjiang96.github.io/DiffPaintWebsite/',
    linkLabel: 'Project page',
    description:
      'Tackles the challenge of making a computer paint — not just generate an image, but build it up stroke by stroke, as a human would. The method optimizes Bézier strokes using a differentiable paint renderer, incorporates a texture stage driven by a StyleGAN prior, and applies a differentiable smudge renderer that blends neighboring strokes naturally. The result faithfully reproduces the look and feel of oil, watercolor, ink, and digital painting.',
    tags: ['Rendering', 'Optimization', 'Generative Models'],
  },
  {
    key: 'vorolight',
    title: 'VoroLight',
    subtitle: 'Learning Voronoi Surface Meshes via Sphere Intersection',
    authors: ['Jiayin Lu', 'Ying Jiang', 'Yumeng He', 'Yin Yang', 'Chenfanfu Jiang'],
    leads: ['Jiayin Lu', 'Ying Jiang', 'Yumeng He'],
    venue: 'arXiv preprint',
    year: 2026,
    arxiv: 'arXiv:2512.12984',
    url: 'https://jiayinlu19960224.github.io/vorolight/',
    linkLabel: 'Project page',
    description:
      'Asks what it takes to learn a smooth Voronoi surface from data. Standard differentiable Voronoi methods tend to produce locally jagged geometry. VoroLight addresses this by associating a trainable sphere with each surface vertex and introducing a sphere-intersection loss that encourages smooth, higher-order configurations. The result reconstructs clean, watertight meshes from point clouds, images, or implicit fields, and extends naturally to volumetric meshes ready for 3D printing.',
    tags: ['Geometry', 'Mesh Reconstruction', 'Voronoi', '3D Printing'],
  },
];
