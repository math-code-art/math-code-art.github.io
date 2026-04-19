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
  year: number;
  tutorialSlug: string;
  coverSrc: string;      // filename inside public/exhibitions/{slug}/
  statement: string[];   // paragraphs
  medium: string;
  works: ExhibitionWork[];
}

export const exhibitions: Exhibition[] = [
  {
    slug: 'cellular-impressions',
    title: 'Cellular Impressions',
    subtitle: 'Portraits Reimagined Through Algorithms',
    artists: ['Tucker Nielson', 'Weimo Zhu', 'Jiayin Lu', 'Ying Jiang', 'Michael Andrews', 'Chenfanfu Jiang'],
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
];
