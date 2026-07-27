export interface ExhibitionWork {
  title: string;
  year: number;
  src: string;         // filename inside public/exhibitions/cellular-impressions/
  portraitSrc?: string;
  styleSrc?: string;
}

export interface Exhibition {
  slug: string;
  title: string;
  subtitle: string;
  artists: string[];
  // Subset of `artists` credited as lead(s) for this exhibition — falls back to
  // artists[0] if omitted. Order doesn't need to match `artists`.
  leads?: string[];
  year: number;
  tutorialSlug?: string;
  coverSrc?: string;     // filename inside public/exhibitions/{slug}/ — omit if no image uploaded yet
  statement: string[];   // paragraphs
  medium: string;
  works: ExhibitionWork[];
}

export const exhibitions: Exhibition[] = [
  {
    slug: 'cellular-impressions',
    title: 'Cellular Impressions',
    subtitle: 'Portraits Reimagined Through Algorithms',
    artists: ['Tucker Nielson', 'Jiayin Lu', 'Weimo Zhu', 'Ying Jiang', 'Michael Andrews', 'Chenfanfu Jiang'],
    leads: ['Tucker Nielson', 'Jiayin Lu'],
    year: 2026,
    tutorialSlug: 'style-transfer-voronoi',
    coverSrc: 'light-marble-1.jpg',
    statement: [
      'Cellular Impressions explores identity and the formation of visual impressions. Each work begins with a photographic portrait. The image is then transformed using neural style transfer, which introduces visual textures and color patterns drawn from other images. After that, adaptive Voronoi tessellation divides the image into geometric cells, fragmenting the portrait while still preserving its overall structure.',
      'The resulting images appear both familiar and abstract. From a distance, viewers recognize the person in the portrait. Up close, the image dissolves into geometric regions and painterly textures. This layered transformation reflects how impressions of people are often formed through interpretation rather than direct perception.',
      'By combining facial expression with contrasting visual styles, the series invites viewers to think about where a person\'s identity seems to reside — in the face itself, in the artistic interpretation, or in the viewer\'s perception.',
      'Mathematics and code serve as creative media in this work. Through geometric partitioning and neural style transfer, computational processes translate abstract ideas about identity and perception into visual form.',
    ],
    medium: 'Digital print. Portrait photograph, neural style transfer, Voronoi tessellation.',
    works: [
      {
        title: 'Sand Memory',
        year: 2026,
        src: 'sand-memory.jpg',
        portraitSrc: 'sand-memory-portrait.jpg',
        styleSrc: 'sand-memory-style.jpg',
      },
      {
        title: 'Ocean Breeze',
        year: 2026,
        src: 'ocean-breeze.jpg',
        portraitSrc: 'ocean-breeze-portrait.jpg',
        styleSrc: 'ocean-breeze-style.jpg',
      },
      {
        title: 'Carefree',
        year: 2026,
        src: 'carefree.jpg',
        portraitSrc: 'carefree-portrait.jpg',
        styleSrc: 'carefree-style.jpg',
      },
      {
        title: 'Laughter I',
        year: 2026,
        src: 'laughter-1.jpg',
        portraitSrc: 'laughter-portrait.jpg',
        styleSrc: 'laughter-1-style.jpg',
      },
      {
        title: 'Laughter II',
        year: 2026,
        src: 'laughter-2.jpg',
        portraitSrc: 'laughter-portrait.jpg',
        styleSrc: 'laughter-2-style.jpg',
      },
      {
        title: 'Star Sprinkles I',
        year: 2026,
        src: 'star-sprinkles-1.jpg',
        portraitSrc: 'star-sprinkles-portrait.jpg',
        styleSrc: 'star-sprinkles-1-style.jpg',
      },
      {
        title: 'Star Sprinkles II',
        year: 2026,
        src: 'star-sprinkles-2.jpg',
        portraitSrc: 'star-sprinkles-portrait.jpg',
        styleSrc: 'star-sprinkles-2-style.jpg',
      },
      {
        title: 'Light and Marble I',
        year: 2026,
        src: 'light-marble-1.jpg',
        portraitSrc: 'light-marble-portrait.jpg',
        styleSrc: 'light-marble-2-style.jpg',
      },
      {
        title: 'Light and Marble II',
        year: 2026,
        src: 'light-marble-2.jpg',
        portraitSrc: 'light-marble-portrait.jpg',
        styleSrc: 'light-marble-1-style.jpg',
      },
      {
        title: 'Untitled I',
        year: 2026,
        src: 'untitled-face-1.jpg',
        portraitSrc: 'untitled-face-portrait.jpg',
        styleSrc: 'untitled-face-2-style.jpg',
      },
      {
        title: 'Untitled II',
        year: 2026,
        src: 'untitled-face-2.jpg',
        portraitSrc: 'untitled-face-portrait.jpg',
        styleSrc: 'untitled-face-1-style.jpg',
      },
      {
        title: 'Cozy Dreams I',
        year: 2026,
        src: 'cozy-dreams-1.jpg',
        portraitSrc: 'cozy-dreams-portrait.jpg',
        styleSrc: 'cozy-dreams-1-style.jpg',  // warm petal brushstrokes
      },
      {
        title: 'Cozy Dreams II',
        year: 2026,
        src: 'cozy-dreams-2.jpg',
        portraitSrc: 'cozy-dreams-portrait.jpg',
        styleSrc: 'cozy-dreams-2-style.jpg',  // blue ocean painting
      },
      {
        title: 'Untitled III',
        year: 2026,
        src: 'untitled-child-1.jpg',
        portraitSrc: 'untitled-child-portrait.jpg',
        styleSrc: 'untitled-child-1-style.jpg',
      },
      {
        title: 'Untitled IV',
        year: 2026,
        src: 'untitled-child-2.jpg',
        portraitSrc: 'untitled-child-portrait.jpg',
        styleSrc: 'untitled-child-2-style.jpg',
      },
      {
        title: 'In the Field I',
        year: 2026,
        src: 'in-the-field-1.jpg',
        portraitSrc: 'in-the-field-portrait.jpg',
        styleSrc: 'in-the-field-1-style.jpg',
      },
      {
        title: 'In the Field II',
        year: 2026,
        src: 'in-the-field-2.jpg',
        portraitSrc: 'in-the-field-portrait.jpg',
        styleSrc: 'in-the-field-2-style.jpg',
      },
    ],
  },
  {
    slug: 'paper-marbling',
    title: 'Paper Marbling',
    subtitle: 'Where Historical Craft Meets Contemporary Computation',
    artists: ['Yue Sun'],
    leads: ['Yue Sun'],
    year: 2026,
    // No cover image uploaded yet — omit coverSrc rather than reference a missing file.
    statement: [
      'Paper marbling is one of the oldest decorative arts, producing swirling, fluid patterns by floating pigments on water and transferring them to paper. This exhibition places hand-made marbled papers in direct dialogue with digitally generated marbling, asking what is preserved and what is lost as a physical craft becomes a computational process.',
      'The digital works are produced through fluid simulation, pattern design algorithms, and interactive parameter exploration. By varying viscosity, flow velocity, and pigment interaction rules, the algorithm generates marbled patterns that echo the organic unpredictability of the physical medium — yet can be reproduced, transformed, and animated in ways the craft cannot.',
      'Displayed side by side, physical and digital works reveal how mathematics and art can describe the same flowing phenomena across fundamentally different media. The exhibition invites viewers to look for the shared language of pattern and structure beneath the surface of each piece.',
    ],
    medium: 'Hand-made marbled paper and digital print. Fluid simulation, pattern design algorithms.',
    works: [],
  },
  {
    slug: 'inner-landscapes',
    title: 'Inner Landscapes',
    subtitle: 'Sound, Image, and Emotion Through Neural Networks',
    artists: ['Shanmei Wanyan', 'Jiayin Lu', 'Hanyin Zhang', 'Ying Jiang', 'Yue Sun', 'Wanxi Yang', 'Yumeng He', 'Chenfanfu Jiang'],
    leads: ['Shanmei Wanyan', 'Jiayin Lu'],
    year: 2026,
    coverSrc: 'cover.png',
    statement: [
      'Artist Statement',
      'Inner Landscapes is a series of abstract dynamic paintings that explores emotion as a hidden structure unfolding across sound and image over time. Rather than depicting recognizable scenes or objects, each work invites viewers to experience emotion through evolving patterns of color, motion, and texture. As the paintings continuously grow and transform, viewers are encouraged to interpret their own emotional associations within these shifting visual landscapes.',
      'Inspired by emotions such as calm, anxiety, nostalgia, grief, and joy, the series investigates how emotional meaning can emerge through cross-modal associations between music and visual form. Each piece begins with a reference image selected to represent an emotional state. Language model assistance recommends candidate images based on visual composition, atmosphere, and semantic associations, after which the artist selects the final reference image.',
      'Each dynamic painting expresses a distinct emotional landscape. Calm unfolds through gentle movement and cool tones, anxiety through unstable branching and flickering intensity, nostalgia through fading and re-emerging traces, grief through dimming and dissolution, and joy through expanding forms and radiant color.',
      'Mathematics, machine learning, computer vision, and stochastic processes function as artistic media. Through computational processes that translate between sound, image, motion, and meaning, the series reveals how neural networks can generate abstract yet recognizable emotional landscapes through cross-modal associations.',
      'Technical Details',
      'A coordinate-based neural network learns a continuous representation of the reference image from pixel coordinates while receiving the music spectrogram of the current time frame as input. The network is trained simultaneously across multiple zoom levels, allowing it to represent both broad compositional forms and fine-scale details. Different spectrogram thresholds emphasize different visual scales, causing the learned representation to continuously shift between larger and smaller structures. As the music evolves, the imagery appears to expand, contract, and breathe in response to changes in rhythm, intensity, and frequency.',
      'To preserve visually significant features, an edge-based density map assigns greater training importance to regions with strong structural detail, while Fourier coordinate encoding enables the network to capture high-frequency image information. Together, these techniques create a balance between sharp, focused details and larger, softer painterly forms, producing a visual effect similar to selective focus.',
      'The learned representation is rendered through a stochastic random-walk painting process. Strokes accumulate on a digital canvas while music intensity and emotion-specific styles influence their length, width, transparency, and directional randomness. The result is an evolving painting in which sound directly shapes motion, color, and structure.',
    ],
    medium: 'Dynamic video painting. Neural image representations, audio-conditioned generation, stochastic painting process.',
    works: [
      { title: 'Calm', year: 2026, src: 'calm.mp4' },
      { title: 'Anxiety', year: 2026, src: 'anxiety.mp4' },
      { title: 'Nostalgia', year: 2026, src: 'nostalgia.mp4' },
      { title: 'Grief', year: 2026, src: 'grief.mp4' },
      { title: 'Joy', year: 2026, src: 'joy.mp4' },
    ],
  },
];
