# Math+Code+Art: Learning Mathematics and Computation Through Creative Expression

Status: outline finalized; site scaffolding built (see `src/content/book/`). Chapters are
placeholders — content to be written later.

Implementation: built as new routes inside this Astro repo (not a separate project/tool).
Content lives in `src/content/book/*.mdx` (Astro content collection `book`, schema in
`src/content/config.ts`), rendered through `src/layouts/BookLayout.astro`, routed via
`src/pages/book/index.astro` and `src/pages/book/[...slug].astro`. Math via
remark-math/rehype-katex (added to `astro.config.mjs`). Chapters reference/link out to the
full code in the Math-Code-Art GitHub repo rather than embedding executable notebooks.

## Design principle

Top level = the three pillars, as Parts — this mirrors the site's own nav (Tutorials /
Exhibitions / Research), so the book's structure stays legible against the site a reader
already knows.

Inside each Part, chapters are grouped into **topic families** by shared math/algorithm
(the same families recur across all three Parts):

- **Parametric Curves & Tessellation** — spirographs, Voronoi
- **Learned Visual & Auditory Representations** — style transfer, coordinate networks, CPPNs
- **Optimization-Based Reconstruction** — greedy/TSP/assignment optimization
- **Physical Process** — fluid/marbling (currently a gap — see below)

A chapter in Creation or Exploration tags which topic family it belongs to and which
Education chapter(s) it grounds in, so the book reads as one connected graph even though
the pillars are physically separate Parts.

**Reading-order rule:** within Part I, a chapter must not depend on a technique introduced
in a later chapter. This is why the Voronoi+style-transfer synthesis chapter (Ch. 6) sits
at the *end* of the Learned Representations block rather than at the end of the Parametric
block — it needs both Voronoi (Ch. 2) and neural style transfer (Ch. 3), and by Ch. 6 both
have already been covered.

## Chapter templates

Each Part uses its own template — Education chapters are code-and-math heavy; Creation
chapters center the artist statement; Exploration chapters summarize a research question.
Keep chapters within a Part structurally consistent so readers know what to expect. (Chapter
files are currently stubs — just "Content pending" — but should follow this shape once written.)

**Education chapter template (Part I)**
1. Motivation — why this idea, how it connects to the previous chapter
2. The Idea — the math/algorithm, built up from scratch
3. Implementation — code walkthrough following the source notebook function-by-function
4. Result — the visual/audio output
5. Connections — pointers forward: "developed further in Creation → [exhibition]",
   "extended in Exploration → [paper]" (links only, not the content itself)
6. Notebook & Exercises — Colab link, suggested variations

**Creation chapter template (Part II)**
1. Artist statement (adapted from the exhibition's existing statement)
2. Technical grounding — which Education chapter(s) this builds on, brief recap of the idea
3. Gallery — featured works
4. Creative intent — what changed when the algorithm was pushed with intent (parameter
   choices, curation, emotional/conceptual mapping) beyond what the tutorial demonstrates

**Exploration chapter template (Part III)**
1. The open question — what limitation of the earlier idea motivated the research
2. Technical grounding — which Education chapter(s) this extends
3. The approach — higher-level than the paper itself, but more technical than a gallery piece
4. Results & what's next
5. Link to paper / project page

---

## Front Matter

- **Preface** — follows the outline of [phys-sim-book's preface](https://phys-sim-book.github.io/preface.html):
  - Overview: the three pillars, who the book is for, prerequisites
  - Version History & Authors (Co-authors)
  - BibTeX

## Part I — Education (Tutorials)

### Parametric Curves & Tessellation
**Ch. 1 — Parametric Geometry and Collision-Driven Motion**
`slug: parametric-spirograph` · source: `music-spirograph` (Junhao Jia)

**Ch. 2 — Voronoi Tessellation and Adaptive Sampling**
`slug: voronoi-mosaic` · source: `voronoi-mosaic` (Tucker Nielson)
Connections → Exploration: Ch. 13 (VoroLight)

### Learned Visual & Auditory Representations
**Ch. 3 — Neural Style Transfer: Separating Content and Style**
`slug: neural-style-transfer` · source: `neural-style-transfer` (Weimo Zhu)
Connections → Creation: Ch. 10 (Cellular Impressions)

**Ch. 4 — Coordinate Networks and CPPNs: Audio-Conditioned Image Generation**
`slug: coordinate-networks-cppn` · source: `neural-music-visualizer` (Shanmei Wanyan)
Connections → Exploration: Ch. 14 (Birth of a Painting)

**Ch. 5 — Random-Walk Painting with Neural Guidance**
`slug: random-walk-painting` · sources: `random-walk-neural` (Shanmei Wanyan, Hanyin Coco
Zhang), with `music-painting` (Hanyin Coco Zhang) covered first as the simpler predecessor
(no neural network — plain audio-driven random walk — before the XYSpecNet coordinate-network
variant).
Depends on: the neural variant depends on Ch. 4 (coordinate networks)
Connections → Creation: Ch. 11 (Inner Landscapes) · Exploration: Ch. 14 (Birth of a Painting)

**Ch. 6 — Style Transfer Meets Voronoi Geometry** *(synthesis chapter)*
`slug: voronoi-style-transfer` · source: `style-transfer-voronoi` (Tucker Nielson, Weimo Zhu)
Depends on: Ch. 2 (Voronoi tessellation) and Ch. 3 (neural style transfer) — placed here,
after both, rather than immediately after Ch. 2, so neither prerequisite is forward-referenced.
Connections → Creation: Ch. 10 (Cellular Impressions) · Exploration: Ch. 13 (VoroLight)

### Optimization-Based Reconstruction
**Ch. 7 — Greedy Optimization and String Art**
`slug: string-art` · source: `string-art` (Qiyang (Rosalinda) Chen)

**Ch. 8 — The Travelling Salesman Problem as a Drawing Tool**
`slug: tsp-line-drawing` · source: `tsp-line-drawing` (Dengyuhan Dai)

**Ch. 9 — Algorithmic Photo Collage**
`slug: photo-collage` · source: `photo-collage` (Meichen Wan)

### Physical Process — *gap, no chapter yet*
No tutorial exists for fluid simulation / pattern generation behind the Paper Marbling
exhibition. Write this tutorial before Ch. 12 (Creation) can be properly grounded.

---

## Part II — Creation (Exhibitions)

**Ch. 10 — Cellular Impressions**
`slug: cellular-impressions` · artists: Tucker Nielson, Weimo Zhu, Jiayin Lu, Ying Jiang,
Michael Andrews, Chenfanfu Jiang
Topic families: Parametric Curves & Tessellation, Learned Representations
Grounds in: Ch. 3 (neural style transfer), Ch. 6 (Voronoi + style transfer)

**Ch. 11 — Inner Landscapes**
`slug: inner-landscapes` · artists: Shanmei Wanyan, Jiayin Lu, Hanyin Zhang, Ying Jiang,
Yue Sun, Wanxi Yang, Yumeng He, Chenfanfu Jiang
Topic family: Learned Visual & Auditory Representations
Grounds in: Ch. 4 (CPPN / coordinate networks), Ch. 5 (random-walk painting)

**Ch. 12 — Paper Marbling**
`slug: paper-marbling` · artists: Math+Code+Art Initiative
Topic family: Physical Process
**Blocked:** no Education chapter grounds this yet (see gap above). Can still be drafted
from the existing artist statement, but the "Technical grounding" section stays a stub
until the tutorial exists.

---

## Part III — Exploration (Research)

**Ch. 13 — VoroLight: Learning Voronoi Surface Meshes via Sphere Intersection**
`slug: vorolight` · authors: Jiayin Lu, Ying Jiang, Yumeng He, Yin Yang, Chenfanfu Jiang
Topic family: Parametric Curves & Tessellation
Grounds in: Ch. 2 (Voronoi tessellation), Ch. 6 (Voronoi + style transfer)

**Ch. 14 — Birth of a Painting: Differentiable Brushstroke Reconstruction**
`slug: birth-of-a-painting` · authors: Ying Jiang, Jiayin Lu, Yunuo Chen, Yumeng He, Kui Wu,
Yin Yang, Chenfanfu Jiang
Topic family: Learned Visual & Auditory Representations
Grounds in: Ch. 4 (Neural Music Visualizer / CPPN) and Ch. 5 (Music Painting / random-walk
painting) — matches the site's existing Research page, which ties stroke-based rendering to
both tutorials at a conceptual level.

---

## Back Matter

- Bibliography

(Glossary, Appendix, Contributing, Citation, and Acknowledgments were dropped as separate
back-matter pages — Contributing/Citation/Acknowledgments already overlapped with the
Preface's own Version History & Authors / BibTeX sections. Bibliography is the one thing
that didn't have a home there: a references list for works cited across chapters.)

---

## Open questions to resolve before/while writing

- **Title.** Confirmed: "Math+Code+Art: Learning Mathematics and Computation Through
  Creative Expression".
- **Physical Process gap.** Needs a marbling tutorial/notebook before Ch. 12 can be fully
  grounded — currently the only exhibition without a backing Education chapter.
- **Chapter numbering.** Numbered continuously 1–14 across all three Parts, matching
  phys-sim-book's scheme rather than restarting per Part.

## Change log

- Removed the standalone "Foundations" chapter and topic family (shared audio/image signal
  preprocessing). Chapters that used audio features (Ch. 1, Ch. 4, Ch. 5) now cover whatever
  preprocessing they need inline instead of referencing a shared chapter. All subsequent
  chapters renumbered down by one (old Ch. 2–15 → new Ch. 1–14).

## Consistency check log

Verified against `src/data/tutorials.ts`, `src/data/exhibitions.ts`, and `src/pages/research.astro`:
- All 10 tutorials covered exactly once (Ch. 5 covers two: music-painting + random-walk-neural).
- All 3 exhibitions and both research papers covered exactly once.
- All 14 slugs unique; chapter numbers 1–14 continuous with no gaps or duplicates.
- Every Part I chapter's prerequisites are satisfied by chapters that precede it (Ch. 6
  depends on Ch. 2 and Ch. 3, both of which precede it).
- Every Part II/III "Grounds in" reference points at a real, correctly-numbered Part I chapter,
  and matches the connections already implied by the site's own exhibition text and the
  Research page's "connection to tutorials" note.
- Contributor names match source data verbatim (Qiyang (Rosalinda) Chen).
