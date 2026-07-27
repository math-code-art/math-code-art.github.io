import { defineCollection, z } from 'astro:content';

const book = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // null for front matter / back matter entries, which aren't numbered chapters.
    chapterNumber: z.number().nullable(),
    part: z.enum(['front-matter', 'education', 'creation', 'exploration', 'back-matter']),
    // A short divider/intro page for a Part, distinct from its numbered chapters.
    // Sorts before Ch. 1 of that part rather than after (unlike other null-chapterNumber entries).
    isPartIntro: z.boolean().optional(),
    topicFamily: z.string().optional(),
    // Everyone who contributed to this chapter's text — no lead/contributor distinction,
    // since the same person is often mostly-writing with a little implementation help too.
    // Empty until someone actually writes the chapter.
    writing: z.array(z.string()).optional(),
    // Additional implementation credit beyond the linked tutorial/exhibition/paper's own
    // leads/artists/authors (which are pulled in automatically) — e.g. someone who helped
    // debug the notebook for this book presentation specifically.
    implementation: z.array(z.string()).optional(),
    // Faculty advisors who review/revise both the text and the code.
    editors: z.array(z.string()).optional(),
    // Slugs into src/data/tutorials.ts — resolved at render time for code/notebook links.
    // A chapter can cover more than one tutorial (e.g. a simpler predecessor + its successor).
    sourceTutorials: z.array(z.string()).optional(),
    // Slug into src/data/exhibitions.ts.
    sourceExhibition: z.string().optional(),
    // Key into src/data/research.ts.
    sourceResearch: z.string().optional(),
    // Chapter slugs (content collection ids) this chapter's ideas depend on.
    groundsIn: z.array(z.string()).optional(),
    // Chapter slugs this chapter points forward to (Creation/Exploration follow-ups).
    connections: z.array(z.string()).optional(),
  }),
});

export const collections = { book };
