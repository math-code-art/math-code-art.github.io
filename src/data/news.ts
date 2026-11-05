export type NewsType = 'Talk' | 'Exhibition' | 'Publication' | 'New Tutorial';

export interface NewsItem {
  date: string;       // ISO date: 'YYYY-MM-DD'
  dateLabel?: string; // shown instead of date, for ranges and upcoming items
  title: string;
  description: string;
  type: NewsType;
  imageSrc?: string;        // flyer / cover — portrait-oriented
  photoSrc?: string;        // speaker photo — landscape-oriented
  link?: string;
  linkLabel?: string;
  slidesEmbedUrl?: string;  // URL to embed in iframe (PDF path or Google Slides /embed URL)
  slidesDownloadUrl?: string; // URL for download button (PDFs only)
}

// Latest date first
export const news: NewsItem[] = [
  {
    date: '2028-03-01', // placeholder for ordering: after the exhibitions, no publication date yet
    dateLabel: 'Upcoming',
    title: 'Upcoming Book with World Scientific',
    description: 'The Math+Code+Art public-education book is forthcoming, under contract with World Scientific.',
    type: 'Publication',
  },
  {
    date: '2027-11-01',
    dateLabel: 'November 2027',
    title: 'Upcoming Exhibition: Cellular Impressions at the Arts Visalia Visual Art Center',
    description: 'Cellular Impressions will be on view at the Arts Visalia Visual Art Center in November 2027.',
    type: 'Exhibition',
    link: '/exhibitions/cellular-impressions',
    linkLabel: 'View exhibition',
  },
  {
    date: '2027-08-01',
    dateLabel: 'August 2027 – February 2028',
    title: 'Upcoming Exhibition: Algorithmic Forms at the Oceanside Museum of Art',
    description: 'Algorithmic Forms will be on view at the Oceanside Museum of Art from August 2027 to February 2028.',
    type: 'Exhibition',
  },
  {
    date: '2026-11-12',
    dateLabel: 'November 12–15, 2026',
    title: 'Special Session at SIGCSE Virtual 2026',
    description: 'Math+Code+Art is a special session at SIGCSE Virtual 2026, with student talks by Dengyuhan Dai (The Traveling Salesman Problem as Line Art), Shanmei Wanyan (Inner Landscapes), and Meichen Wan (Whisper of Nature).',
    type: 'Talk',
    link: '/papers/sigcse-2026-math-code-art.pdf',
    linkLabel: 'Read the proposal',
  },
  {
    date: '2026-03-11',
    title: 'Talk: Traveling Salesman Problem — From Mathematics to Art',
    description: 'Dengyuhan Dai presented at the UCLA PIC Spotlight Seminar, showing how the Travelling Salesman Problem can be used to convert images into single-line drawings through density-based sampling and LKH-3 optimization.',
    type: 'Talk',
    imageSrc: '/news/dyh_talk_flyer.jpg',
    photoSrc: '/news/dyh_talk.jpg',
    link: 'https://datax.ucla.edu/news-events/events/program-computing-pic-spotlight-3',
    linkLabel: 'Event page',
    slidesEmbedUrl: '/slides/tsp-mathematics-to-art.pdf',
    slidesDownloadUrl: '/slides/tsp-mathematics-to-art.pdf',
  },
  {
    date: '2026-01-21',
    title: 'Talk: Visualizing Music with Neural Networks',
    description: 'Shanmei Wanyan presented at the UCLA PIC Spotlight Seminar, demonstrating how Compositional Pattern-Producing Networks (CPPNs) can generate music-conditioned animated artwork.',
    type: 'Talk',
    imageSrc: '/news/sm_talk_flyer.jpg',
    photoSrc: '/news/sm_talk.jpg',
    link: 'https://datax.ucla.edu/news-events/events/program-computing-pic-spotlight-seminar',
    linkLabel: 'Event page',
    slidesEmbedUrl: 'https://docs.google.com/presentation/d/1Hg_42fuAY2x005NzKeN8bncvfeTdRKEZfJ0N40eAGRA/embed?start=false&loop=false',
  },
  {
    date: '2026-01-01',
    title: 'Cellular Impressions',
    description: 'An exhibition of portrait artworks created using neural style transfer and Voronoi geometry, by Tucker Nielson, Weimo Zhu, Jiayin Lu, Ying Jiang, Michael Andrews, and Chenfanfu Jiang.',
    type: 'Exhibition',
    imageSrc: '/exhibitions/cellular-impressions/light-marble-1.jpg',
    link: '/exhibitions/cellular-impressions',
    linkLabel: 'View exhibition',
  },
];
