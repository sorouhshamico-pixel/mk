# Site content — Mohamed Khalifa

> Anything in `[ ]` needs Mohamed's real figures before launch.
> This is the primary locale (English, LTR). The Arabic version lives in `CONTENT.ar.md`
> and ships in a second phase.

---

## Home — hero

**H1:**
I build web platforms for the Arabic market

**Subhead:**
Full-stack developer. I ship content platforms and interactive tools in Arabic that load fast, rank well, and install on a phone like an app.

**Buttons:**
- View work (primary, anchors to `#work`)
- Get in touch (secondary, links to `/contact`)

**Stack strip:**
Laravel · Next.js · PHP · TypeScript · Tailwind · MySQL

---

## What I do

Three short blocks below the hero.

**Content platforms**
Sites that publish thousands of pages and stay fast, structured, and legible to search engines.

**Interactive tools**
Calculators and utilities that solve a real problem for the visitor and earn search traffic on their own.

**Technical SEO**
Semantic markup, structured data, and load times measured in Core Web Vitals rather than in impressions.

---

## Work

**Section heading:** Selected work
**Subhead:** Real projects, live and in use.

### 01 — Wazifatk

| Field | Value |
|---|---|
| Name | Wazifatk |
| Short description | Saudi job platform |
| Year | 2026 |
| Primary stack | Laravel |
| Link | https://wazifatk.com |
| Role | Sole developer, database through interface |

---

## Case study — Wazifatk

**Title:** A job platform that calculates, not just lists

**Deck:** A full build of an Arabic content platform combining job listings, career articles, and five labour-law calculators, with technical SEO designed in from the first commit.

**Facts card:**
- Role: Sole developer. Planning, database, interface, SEO, launch.
- Timeline: `[number of months]`
- Stack: Laravel, MySQL, Tailwind CSS, Spatie Media Library, PWA
- Live: wazifatk.com

### The problem

Job seekers in Saudi Arabia hop between Telegram channels and scattered social posts, and most of what they find is duplicated or already closed. The established sites are either translated from English and miss the local context, or heavy enough that they stall on a mobile connection. And the questions people actually ask, like what their end-of-service payout comes to or what lands in their account after deductions, have no trustworthy answer in one place.

### The key decision

Rather than build another job board, I built three layers that feed each other:

1. **Listings** sorted across 19 cities and 11 sectors, with a dedicated page per role and per employer.
2. **Articles** covering CVs, interviews, and how the Saudi labour market actually works.
3. **Tools**: five calculators built on Saudi labour law. End-of-service gratuity, annual leave balance, probation period, net salary, and a CV-to-job match checker.

The third layer is what makes the difference. A calculator answers a question people search for every month, so it brings in a visitor who was not looking for a job at all, then introduces them to the platform. It also gives them a reason to come back long after they have been hired.

### Technical decisions

**Generated pages for every city and sector.** Each city and sector combination is its own indexable page with its own title and description. Instead of one search page, the platform has hundreds of entry points from Google.

**Automated image handling via Spatie Media Library.** Every employer logo and article image is converted to WebP at multiple sizes on upload, so site performance does not depend on whoever is publishing that day remembering to compress a file.

**A real PWA.** The platform installs to the home screen and opens as an app. Most of the audience arrives from messaging channels on mobile, and installation turns a one-off visit into a permanent channel.

**SEO as structure, not as a later pass.** Canonical URLs, per-page Open Graph and Twitter metadata, structured data, a generated sitemap, and internal linking that ties each role to its city, its sector, and the article that answers the question behind it.

**Distribution built into the product.** WhatsApp, Telegram, and email capture sit inside the pages rather than only in the footer. In this market the first wave of reach comes from channels; search compounds afterwards.

### Results

- `[number]` roles published across `[number]` employers
- `[number]` career articles indexed
- 5 interactive tools running fully client-side
- `[number]` Saudi cities covered
- Core Web Vitals: `[score]`
- `[add monthly traffic or growth rate if you have it]`

### What I learned

Building Arabic content forces decisions that never come up in English projects. RTL touches every component, not just the typeface. Generating URL slugs from Arabic headlines needs its own handling. And a gratuity calculator built on Saudi labour law means reading the law itself rather than copying a formula off another site. The most useful thing I got right: shipping the tools before the content. The tools bring the visitor in, and the content is what keeps them.

---

## About

**Heading:** I've been building for the web since 2018

**Bio:**
I'm Mohamed Khalifa, a web developer based in Riyadh. I build fast, fully integrated websites — content platforms, e-commerce stores, and interactive tools — and I care most about the seam where engineering meets discoverability. A fast site nobody can find is not a finished project, and a visible site that takes six seconds to paint loses its reader before the first sentence.

I'm currently a web developer at Rabit Information Technology in Riyadh, and I've taken freelance work through Hsoub since 2019 — dozens of WordPress and e-commerce builds across the Gulf. My most recent platform build is Wazifatk, a Saudi job board with five labour-law calculators, built alone from the database schema to the last detail of the interface.

**Background (from Mohamed's LinkedIn):**
- Studied Geographic Information Science & Cartography at Assiut University (2009–2014)
- GIS Specialist, Orascom Construction, Egypt (2016–2018) — spatial data, maps, small interactive tools
- Web Developer, Manarat for Digital Solutions (2018–2021, remote, part-time)
- Freelance WordPress developer via Hsoub (2019–present)
- Web Developer, Rabit Information Technology, Riyadh (2025–present)

**Skills:**
- Frontend: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Sass, Bootstrap
- Backend: PHP, Laravel, MySQL, REST APIs, Python
- Platforms: WordPress, WooCommerce, Shopify, Salla, Zid, Webflow
- Performance and SEO: Core Web Vitals, structured data, PWA, technical SEO
- Design & tooling: Figma, Adobe XD, Elementor, Git, Linux

---

## Contact

**Heading:** Have a project? Let's talk
**Subhead:** I reply within one business day. Describe the idea in two lines and I'll tell you honestly whether I'm the right person for it.

**Form fields:** Name, email, project type (content platform / store / tool / other), message.

**Links:** mmd1790@gmail.com · WhatsApp +966 53 271 9336 · linkedin.com/in/mohamed-khalifa-6a6b5b189 · github.com/mgkh286 · mostaql.com/u/M1_m2

---

## SEO copy

| Page | Title | Description |
|---|---|---|
| Home | Mohamed Khalifa — Web Developer | Full-stack web developer building fast, search-optimised content platforms and interactive tools for the Arabic market. |
| Work | Work — Mohamed Khalifa | Live web projects: Arabic content platforms and interactive tools, built for speed and discoverability. |
| Wazifatk | Wazifatk, a Saudi job platform \| Mohamed Khalifa | How I built a Saudi job platform with five labour-law calculators and full technical SEO using Laravel. |
| About | About — Mohamed Khalifa | Full-stack developer specialising in Arabic content platforms, performance, and technical SEO. |
| Contact | Contact — Mohamed Khalifa | Have a web project? I reply within one business day. |

---

## Phase two: Arabic

Arabic copy is ready in `CONTENT.ar.md`. When the English build is signed off:

- English stays at `/`, Arabic moves to `/ar`
- `dir` and `lang` switch per locale; layout mirrors rather than being rebuilt
- `hreflang` tags link the two locales in both directions
- The Arabic locale loads Noto Kufi Arabic; English loads Inter Tight
