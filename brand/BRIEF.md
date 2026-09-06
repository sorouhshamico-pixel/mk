# Build brief — Mohamed Khalifa portfolio

Everything needed to build the site. Read this first, then `CONTENT.en.md` for copy
and `projects.ts` for project data.

| File | What it holds |
|---|---|
| `BRIEF.md` | This file. Design language, structure, component specs. |
| `CONTENT.en.md` | All English copy, ready to paste. Primary locale. |
| `CONTENT.ar.md` | Arabic copy. Phase two. |
| `projects.ts` | Project data. Single source of truth for the index, case studies, and SEO. |
| `README.md` | Logo usage rules and Tailwind colour config. |
| `brand-tokens.css` | Colour and font variables, both modes. |
| `Logo.tsx` | Logo component. |
| `logo/` | SVG assets and favicon. |

---

## 1. Positioning

A full-stack developer who builds Arabic-language content platforms. The site speaks
English to reach international clients, and the Arabic specialism is the differentiator,
not a limitation. Everything on the page should support one claim: this person ships
platforms that are fast and that get found.

---

## 2. Design language

Dark, technical, restrained. The reference point is a developer dashboard, not an agency
site. Density and precision over decoration.

**Non-negotiables**

- Dark mode is the default. A light toggle exists but dark is what a first-time visitor sees.
- Hairline borders at 0.5px. Nothing heavier.
- No gradients, no coloured shadows, no glow, no blur. This is the single rule that
  separates this aesthetic from a gaming poster.
- The accent colour covers no more than 5% of any screen.
- Two font weights only: 400 and 500. Never 600 or 700.
- Every motion respects `prefers-reduced-motion`.

**Colour** — from `brand-tokens.css`, dark values as the base

| Token | Value | Use |
|---|---|---|
| Page | `#0C1512` | Background |
| Surface | `#14201C` | Raised panels, hover states |
| Border | `#253430` | Every hairline |
| Text primary | `#F1EFE8` | Headings, body |
| Text secondary | `#9A9A93` | Supporting copy |
| Text muted | `#5F5E5A` | Labels, metadata, the second hero line |
| Accent | `#35B98C` | The dot, links, one primary button, live numbers |

**Type**

- `Inter Tight` for all Latin text. `JetBrains Mono` for anything technical.
- Display headings: uppercase, `letter-spacing: -0.02em`, weight 500. `clamp(40px, 8vw, 96px)`.
- Section headings: sentence case, ending with a full stop, weight 500, 28px to 36px.
- Body: 16px, `line-height: 1.7`, `--text-secondary`.
- Mono is mandatory for years, stack names, metric values, and URL paths. It is the
  strongest signal that this is a developer's site, and it costs nothing.
- `IBM Plex Sans Arabic` loads only on the Arabic locale in phase two.

**Layout**

- Content column 1200px, generous vertical rhythm: 96px between sections on desktop,
  56px on mobile.
- Build with logical properties (`inline-start`, `inline-end`, `margin-inline`) rather
  than `left` and `right`, so the Arabic locale mirrors without a rewrite.

---

## 3. Page structure

```
/                 Home
/work             All projects
/work/[slug]      Case study
/about            About
/contact          Contact
/not-found        404
```

Phase two adds `/ar` as a second locale with `hreflang` linking both directions.

---

## 4. Component specs

### 4.1 Status badge

Sits above the hero headline. A pill with a 0.5px border, a 7px accent dot, and the text
"Available for work". The dot pulses once every three seconds, a slow opacity fade from
1 to 0.4 and back. No scale, no glow ring. If Mohamed is not taking work, the label
changes and the dot goes muted grey rather than disappearing.

### 4.2 Hero

Two display lines. The first in `--text-primary`, the second in `--text-muted`, ending
with a full stop in the accent colour. Subhead below at 15px to 18px, capped at 460px
wide. Two buttons: one accent-filled, one outlined. Nothing else competes for attention.

### 4.3 Metrics strip

Four figures directly under the hero, separated from it by a hairline. Mono numerals at
22px to 32px, an 11px muted label beneath each. The final figure takes the accent colour.

**Only real, verifiable numbers.** Projects shipped, pages indexed on Wazifatk, tools
built, Lighthouse score. If a figure cannot be defended, delete the whole strip. A padded
number in a developer's portfolio is caught in seconds and takes the rest of the page
down with it.

### 4.4 Project index

The centrepiece. A list of rows, not a grid of cards.

Each row carries: a mono index number, the project name at 18px to 24px, the tagline in
secondary text, the primary stack in mono, the year in mono, and an arrow. Rows are
separated by 0.5px hairlines with no card, border box, or shadow anywhere.

On hover: the row background lifts to `--surface`, the arrow shifts 4px toward the reading
direction, and a 240px thumbnail follows the cursor with a spring easing and a slight lag.
On touch devices the thumbnail sits inline within the row instead. Under
`prefers-reduced-motion` the cursor tracking is disabled entirely and the thumbnail
appears in a fixed position.

Adding a project means adding one object to `projects.ts`. The layout must hold at three
projects and at thirty.

### 4.5 Section headers

Every section opens with a small uppercase muted eyebrow at 11px with wide letter spacing,
followed by a sentence-case heading that ends with a full stop. "Selected work.",
"Three things I do.", "Let's talk."

### 4.6 Case study

A facts strip at the top drawn from `metrics` in `projects.ts`, then the cover image,
then the body: problem, the key decision, technical decisions as a numbered list, results,
and what I learned.

One code block per case study, rendered as a visual element with a mono caption above it
and a hairline border. It must contain a real excerpt from the project. Placeholder or
invented code is worse than no code block.

### 4.7 Footer

Logo mark, one line of copy, links, and the year in mono. No newsletter, no social wall,
no badge farm.

---

## 5. SEO requirements

- `metadata` export on every page, pulled from the SEO table in `CONTENT.en.md` and from
  `projects.ts` for case studies.
- Dynamic OG images per case study via `next/og`, following `og-image.svg` as the template.
- JSON-LD: `Person` on the home page, `CreativeWork` on each case study,
  `BreadcrumbList` on nested pages.
- `sitemap.ts` and `robots.ts` generated from the routes and the projects array.
- Semantic HTML. One `h1` per page. Real `<nav>`, `<main>`, `<article>`.
- Images through `next/image`, AVIF and WebP, explicit dimensions, `priority` on the
  hero only.
- Target: green Core Web Vitals across the board. The site's own Lighthouse score is
  itself a portfolio item.

---

## 6. What Mohamed still needs to supply

- [ ] Real figures for the metrics strip
- [ ] Wazifatk numbers: roles published, employers, articles, timeline
- [ ] A real code excerpt from the gratuity calculator
- [ ] Screenshots for `thumb.webp` and `cover.webp`
- [ ] Two more projects filled into `projects.ts`
- [ ] Email, GitHub, LinkedIn
- [ ] Year he started building for the web
- [ ] CV as PDF

---

## 7. Build order

1. Project scaffold, tokens, fonts, dark mode, logo in the header.
2. Home page: hero, status badge, metrics strip, project index with hover preview.
3. Case study template, wired to `projects.ts`, with Wazifatk as the first entry.
4. About and contact.
5. SEO layer, OG images, structured data, sitemap.
6. Accessibility and performance pass, then deploy.

Stop for review after each step. Do not run ahead.
