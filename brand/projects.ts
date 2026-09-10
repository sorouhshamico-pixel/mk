export type Metric = {
  label: string;
  value: string;
};

export type TechNote = {
  title: string;
  body: string;
};

export type Project = {
  /** URL segment: /work/[slug] */
  slug: string;
  /** Order in the index list. 1 is newest. */
  index: number;
  name: string;
  /** Three or four words. Shown on the index row. */
  tagline: string;
  year: number;
  /** Single word shown on the index row. */
  primaryStack: string;
  stack: string[];
  role: string;
  timeline: string;
  status: "live" | "archived" | "in-progress";
  /** Show on the home page index. */
  featured: boolean;
  links: {
    live?: string;
    repo?: string;
  };
  /** 16:10, WebP, 640px wide. Used for the cursor-following hover preview. */
  thumbnail: string;
  /** 16:9, WebP, 1600px wide. Header of the case study page. */
  cover: string;
  /** Facts strip at the top of the case study. */
  metrics: Metric[];
  /** Case study body. Keep each field to two or three paragraphs. */
  problem: string;
  decision: string;
  technical: TechNote[];
  results: string[];
  learned: string;
  /** Optional real snippet from the project, rendered as the visual code block. */
  snippet?: {
    language: string;
    caption: string;
    code: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

export const projects: Project[] = [
  {
    slug: "wazifatk",
    index: 1,
    name: "Wazifatk",
    tagline: "Saudi job platform",
    year: 2026,
    primaryStack: "Laravel",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Spatie Media Library", "PWA"],
    role: "Sole developer",
    timeline: "[number of months]",
    status: "live",
    featured: true,
    links: {
      live: "https://wazifatk.com",
    },
    thumbnail: "/work/wazifatk/thumb.webp",
    cover: "/work/wazifatk/cover.webp",
    metrics: [
      { label: "Role", value: "Sole developer" },
      { label: "Timeline", value: "[months]" },
      { label: "Cities covered", value: "4" },
      { label: "Tools built", value: "5" },
    ],
    problem:
      "Job seekers in Saudi Arabia hop between Telegram channels and scattered social posts, and most of what they find is duplicated or already closed. The established sites are either translated from English and miss the local context, or heavy enough that they stall on a mobile connection. And the questions people actually ask, like what their end-of-service payout comes to or what lands in their account after deductions, have no trustworthy answer in one place.",
    decision:
      "Rather than build another job board, I built three layers that feed each other. Listings sorted across cities and sectors, with a dedicated page per role and per employer. Articles covering CVs, interviews, and how the Saudi labour market actually works. And five calculators built on Saudi labour law: end-of-service gratuity, annual leave balance, probation period, net salary, and a CV-to-job match checker. The third layer is what makes the difference. A calculator answers a question people search for every month, so it brings in a visitor who was not looking for a job at all, then introduces them to the platform. It also gives them a reason to come back long after they have been hired.",
    technical: [
      {
        title: "Generated pages for every city and sector",
        body: "Each city and sector combination is its own indexable page with its own title and description. Instead of one search page, the platform has hundreds of entry points from Google.",
      },
      {
        title: "Automated image handling",
        body: "Every employer logo and article image is converted to WebP at multiple sizes on upload through Spatie Media Library, so site performance does not depend on whoever is publishing that day remembering to compress a file.",
      },
      {
        title: "A real PWA",
        body: "The platform installs to the home screen and opens as an app. Most of the audience arrives from messaging channels on mobile, and installation turns a one-off visit into a permanent channel.",
      },
      {
        title: "SEO as structure, not a later pass",
        body: "Canonical URLs, per-page Open Graph and Twitter metadata, structured data, a generated sitemap, and internal linking that ties each role to its city, its sector, and the article that answers the question behind it.",
      },
      {
        title: "Distribution built into the product",
        body: "WhatsApp, Telegram, and email capture sit inside the pages rather than only in the footer. In this market the first wave of reach comes from channels; search compounds afterwards.",
      },
    ],
    results: [
      "11 roles published across 16 employers",
      "28+ career articles indexed",
      "5 interactive tools running fully client-side",
      "4 Saudi cities covered",
    ],
    learned:
      "Building Arabic content forces decisions that never come up in English projects. RTL touches every component, not just the typeface. Generating URL slugs from Arabic headlines needs its own handling. And a gratuity calculator built on Saudi labour law means reading the law itself rather than copying a formula off another site. The most useful thing I got right: shipping the tools before the content. The tools bring the visitor in, and the content is what keeps them.",
    snippet: {
      language: "php",
      caption: "End-of-service gratuity, Saudi Labour Law articles 84 and 85",
      code: "[paste a real 10-15 line excerpt from the calculator here]",
    },
    seo: {
      title: "Wazifatk, a Saudi job platform | Mohamed Khalifa",
      description:
        "How I built a Saudi job platform with five labour-law calculators and full technical SEO using Laravel.",
    },
  },

  {
    slug: "suruh-concrete",
    index: 2,
    // Surooh Al-Shami Company Ltd. (صروح الشامي) — trades online as "Suruh Concrete".
    name: "Suruh Concrete",
    tagline: "Ready-mix concrete supplier",
    year: 2025, // [confirm launch year]
    primaryStack: "WordPress",
    stack: ["WordPress", "Elementor", "Blocksy", "PHP", "MySQL"],
    role: "Sole developer", // [confirm — full build, or front end only?]
    timeline: "[weeks or months]",
    status: "live",
    featured: true,
    links: {
      live: "https://suruhconcrete.com",
    },
    thumbnail: "/work/suruh-concrete/thumb.webp",
    cover: "/work/suruh-concrete/cover.webp",
    metrics: [
      { label: "Role", value: "Sole developer" },
      { label: "Timeline", value: "[duration]" },
      { label: "Platform", value: "WordPress" },
      { label: "Direction", value: "RTL / Arabic" },
    ],
    problem:
      "Surooh Al-Shami supplies ready-mix concrete and runs general-contracting projects across Riyadh, but had no owned presence online — enquiries came only through phone and scattered WhatsApp forwards. In a market where contractors vet a supplier's scale and past work before requesting a quote, that meant losing jobs before a conversation ever started.",
    decision:
      "Build the site as a lead engine, not a brochure. Every page ends in the same two actions — request a quote, or open WhatsApp — and the project portfolio is treated as the primary sales asset: real site photos, location, and scope for each completed job, so a contractor can judge capability at a glance and arrive at the quote form already convinced.",
    technical: [
      {
        title: "WordPress + Elementor on the Blocksy theme",
        body: "A page-builder stack the client's own team can extend — adding a project or a blog post is a form, not a deploy — without giving up control of the templates or the markup that search engines read.",
      },
      {
        title: "Arabic-first, RTL throughout",
        body: "Layout, navigation, and typography are built right-to-left from the start rather than mirrored after the fact, so the Arabic reading order holds on every breakpoint.",
      },
      {
        title: "WhatsApp as a first-class channel",
        body: "A floating WhatsApp button and inline contact CTAs sit on every template. In Saudi B2B construction the first contact almost always happens on WhatsApp, so the site is built to hand the visitor straight to it.",
      },
      {
        title: "LiteSpeed caching and lazy media",
        body: "Server-side caching plus lazy-loaded images keep a photo-heavy portfolio site fast on a mobile connection, which is where most site managers open it.",
      },
    ],
    results: [
      "Full bilingual (Arabic-first) marketing site — home, about, services, projects, FAQ, blog, contact",
      "Project portfolio with a dedicated case entry per completed job",
      "Quote-request and WhatsApp CTAs on every page",
      "[add: enquiries or traffic before/after, if the client shares it]",
    ],
    learned:
      "On a page-builder handover the real deliverable is the editing model, not the pixels: spend the time making 'add a project' genuinely one screen and the client keeps the site alive; leave it fiddly and it goes stale in a month. Next time I'd lock the portfolio content type down even tighter before styling anything on top of it.",
    seo: {
      title: "Suruh Concrete, a ready-mix concrete supplier site | Mohamed Khalifa",
      description:
        "An Arabic-first WordPress marketing site for a Riyadh ready-mix concrete and contracting company, built as a lead engine around a project portfolio.",
    },
  },

  {
    slug: "[project-slug-2]",
    index: 3,
    name: "[Project name]",
    tagline: "[three or four words]",
    year: 2025,
    primaryStack: "[tech]",
    stack: ["[tech]", "[tech]"],
    role: "[your role]",
    timeline: "[duration]",
    status: "live",
    featured: false,
    links: { live: "[https://...]" },
    thumbnail: "/work/[slug-2]/thumb.webp",
    cover: "/work/[slug-2]/cover.webp",
    metrics: [
      { label: "Role", value: "[your role]" },
      { label: "Timeline", value: "[duration]" },
    ],
    problem: "[...]",
    decision: "[...]",
    technical: [{ title: "[Decision]", body: "[...]" }],
    results: ["[...]"],
    learned: "[...]",
    seo: {
      title: "[Project name] | Mohamed Khalifa",
      description: "[...]",
    },
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.index - b.index);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
