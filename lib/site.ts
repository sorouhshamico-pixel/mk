// Site-wide copy and constants.
// Base copy comes from brand/CONTENT.en.md. Contact info, work history,
// education, and the Mostaql stats below are pulled from Mohamed's own
// profiles at his request, since brand/BRIEF.md §6 listed them as still
// missing — the experience/education chronology now follows his LinkedIn
// (linkedin.com/in/mohamed-khalifa-6a6b5b189), which supersedes the older
// mohamedkhalifa.netlify.app timeline.

export const site = {
  name: "Mohamed Khalifa",
  role: "Web Developer",
  url: "https://mohamedkhalifa.dev", // matches brand/og-image.svg; update if the real domain differs
  email: "mmd1790@gmail.com",
  phone: "+966532719336",
  phoneDisplay: "+966 53 271 9336",
  // Current residence, per Mohamed directly (supersedes the Cairo address
  // on mohamedkhalifa.netlify.app, which is now out of date).
  location: "Riyadh, Saudi Arabia",
  github: "https://github.com/mgkh286",
  mostaql: "https://mostaql.com/u/M1_m2",
  linkedin: "https://www.linkedin.com/in/mohamed-khalifa-6a6b5b189/",
  // Freelancing professionally since the Hsoub/Mostaql years began (source:
  // mohamedkhalifa.netlify.app work history). Confirm/adjust if this isn't
  // the year you'd want quoted.
  startYear: 2018,
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const hero = {
  // Original big-headline format restored — lead / rotating word / tail,
  // same as the first version — with the rotating slot now cycling the
  // real platforms Mohamed builds on instead of content-type words, and
  // no Arabic-specific framing.
  lead: "I'm Mohamed Khalifa —",
  roles: ["WordPress", "Salla", "Zid", "Shopify"],
  tail: "developer.",
  subhead:
    "Full-stack developer based in Riyadh. I turn briefs into fast, dependable products — from a Saudi job platform built solo to dozens of stores and corporate sites across the Gulf.",
  primaryCta: { label: "View work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "/contact" },
  stack: ["Laravel", "Next.js", "PHP", "TypeScript", "Tailwind", "MySQL"],
};

export const statusBadge = {
  available: true,
  label: "Available for work",
  unavailableLabel: "Not taking new work right now",
};

// Real, sourced numbers only (mostaql.com/u/M1_m2, fetched live) — no
// invented traffic/revenue figures.
export const stats = [
  { label: "Years shipping for the web", value: `${new Date().getFullYear() - site.startYear}+` },
  { label: "Projects on Mostaql", value: "28+" },
  { label: "Client rehire rate", value: "100%" },
  { label: "Communication rating", value: "5.0/5" },
];

export const whatIDo = [
  {
    icon: "Newspaper",
    title: "Content platforms",
    body: "Sites that publish thousands of pages and stay fast, structured, and legible to search engines.",
  },
  {
    icon: "Calculator",
    title: "Interactive tools",
    body: "Calculators and utilities that solve a real problem for the visitor and earn search traffic on their own.",
  },
  {
    icon: "SearchCheck",
    title: "Technical SEO",
    body: "Semantic markup, structured data, and load times measured in Core Web Vitals rather than in impressions.",
  },
];

export const workSection = {
  eyebrow: "Selected work.",
  subhead: "Real projects, live and in use.",
};

// Homepage-only condensed version of the About page's story — same real
// facts (GIS background, self-taught, freelance across the Gulf, Wazifatk),
// written shorter and punchier for a skim, linking out to the full version.
export const intro = {
  lead: "I didn't start in code.",
  paragraph:
    "I started in Geographic Information Systems, then taught myself to build for the browser one freelance project at a time. Eight years and dozens of client sites across the Gulf later, that self-taught instinct became Wazifatk — a Saudi job platform built alone, from the database schema to the shipped product.",
  cta: { label: "Read the full story", href: "/about" },
};

export const about = {
  eyebrow: "About",
  heading: `I've been building for the web since ${site.startYear}`,
  // The line the page opens on — pulled out and set large. Real words from
  // the bio below, not new copy.
  pullQuote:
    "A fast site nobody can find is not a finished project, and a visible site that takes six seconds to paint loses its reader before the first sentence.",
  bio: [
    "I'm Mohamed Khalifa, a web developer based in Riyadh. I build fast, fully integrated websites — content platforms, e-commerce stores, and interactive tools — and I care most about the seam where engineering meets discoverability.",
    "I'm currently a web developer at Rabit Information Technology, and I've taken freelance work through Hsoub since 2019 — dozens of WordPress and e-commerce builds across the Gulf. My most recent platform build is Wazifatk, a Saudi job board with five labour-law calculators, built alone from the database schema to the last detail of the interface.",
  ],
  // Real chronology, following Mohamed's LinkedIn — not new facts, just the
  // story the timeline below only shows as dates.
  story: [
    "I didn't start in code. I studied Geographic Information Science and Cartography at Assiut University — years of turning messy real-world space into structured, queryable data, a discipline with far more in common with database design and semantic markup than the job title suggests.",
    "My first job out of university was as a GIS specialist at Orascom Construction: collecting and analysing spatial data, producing maps, and building small interactive tools for project teams. That's where I first wrote code to make data useful to other people — and decided I wanted to do it full-time.",
    "So I taught myself the browser. I joined Manarat for Digital Solutions in 2018, building and maintaining responsive sites alongside their design and content teams, and in 2019 I started taking freelance work through Hsoub. Over the next few years that became the main thing: dozens of WordPress builds, e-commerce stores on Salla, Zid, Shopify, and WooCommerce, landing pages, speed rescues, and design-to-code work for clients across Saudi Arabia and the wider region. Freelancing at that volume teaches you the one constraint that matters — at the end of every project, someone with a real budget has to see it working.",
    "In 2025 I moved to Riyadh and joined Rabit Information Technology as a web developer, building fully integrated sites for clients across industries — from requirements and UI through responsive front-end, technical SEO, system integration, and post-launch support. Wazifatk is the project where the two halves of that path finally met: the GIS-trained instinct for structured data, and years of shipping to real deadlines for real clients.",
  ],
  // Working principles, drawn from how the case studies on this site are
  // actually described — not aspirational copy invented for this page.
  philosophy: [
    {
      title: "Ship the tool before the content.",
      body: "A calculator or utility answers a question people are already searching for. It brings in a visitor who wasn't looking for the rest of the site — then the content is what keeps them.",
    },
    {
      title: "Fast is a feature, not a nice-to-have.",
      body: "Core Web Vitals aren't a report to run after launch. A slow site loses its reader before the first sentence, no matter how good that sentence is.",
    },
    {
      title: "SEO is structure, not a later pass.",
      body: "Canonical URLs, semantic markup, and internal linking get decided at the schema stage — bolting search on at the end always shows.",
    },
    {
      title: "Own the whole thing when you can.",
      body: "Database schema to the last pixel. Fewer handoffs means fewer places for a project to quietly go wrong.",
    },
  ],
  // mohamedkhalifa.netlify.app — listed as personal interests there.
  interests: [
    { icon: "Gamepad2", label: "Gaming" },
    { icon: "Tent", label: "Camping" },
    { icon: "BookOpen", label: "Reading" },
    { icon: "Waves", label: "Swimming" },
  ],
  skillGroups: [
    {
      label: "Backend",
      icon: "Server",
      items: ["PHP", "Laravel", "MySQL", "REST APIs", "Python"],
    },
    {
      label: "Frontend",
      icon: "Code2",
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Sass", "Bootstrap"],
    },
    {
      label: "Platforms",
      icon: "ShoppingBag",
      items: ["WordPress", "WooCommerce", "Shopify", "Salla", "Zid", "Webflow"],
    },
    {
      label: "Performance & SEO",
      icon: "Gauge",
      items: ["Core Web Vitals", "Structured data", "PWA", "Technical SEO"],
    },
    {
      label: "Design & tooling",
      icon: "PenTool",
      items: ["Figma", "Adobe XD", "Elementor", "Git", "Linux"],
    },
    {
      label: "Languages",
      icon: "Languages",
      items: ["Arabic", "English", "French"],
    },
  ],
  // Source: Mohamed's LinkedIn (linkedin.com/in/mohamed-khalifa-6a6b5b189).
  experience: [
    {
      role: "Web Developer",
      org: "Rabit Information Technology",
      period: "2025 — present",
    },
    {
      role: "Freelance WordPress Developer",
      org: "Hsoub",
      period: "2019 — present",
    },
    {
      role: "Web Developer",
      org: "Manarat for Digital Solutions",
      period: "2018 — 2021",
    },
    {
      role: "GIS Specialist",
      org: "Orascom Construction",
      period: "2016 — 2018",
    },
  ],
  // Source: Mohamed's LinkedIn — degree plus the two named LinkedIn Learning
  // certifications (11 listed in total).
  education: [
    {
      title: "BA, Geographic Information Science & Cartography",
      org: "Assiut University",
      period: "2009 — 2014",
    },
    {
      title: "WordPress 5 Essential Training",
      org: "LinkedIn Learning",
      period: "2022",
    },
    {
      title: "Learning Python",
      org: "LinkedIn Learning",
      period: "2020",
    },
  ],
};

export const contact = {
  heading: "Have a project? Let's talk",
  subhead:
    "I reply within one business day. Describe the idea in two lines and I'll tell you honestly whether I'm the right person for it.",
  projectTypes: ["Content platform", "Store", "Tool", "Other"],
  links: [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "Mail" },
    {
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: `https://wa.me/${site.phone.replace("+", "")}`,
      icon: "WhatsApp",
    },
    { label: "LinkedIn", value: "in/mohamed-khalifa", href: site.linkedin, icon: "Linkedin" },
    { label: "GitHub", value: "@mgkh286", href: site.github, icon: "Github" },
    { label: "Mostaql", value: "28+ projects", href: site.mostaql, icon: "Briefcase" },
  ],
};

export const blog = {
  heading: "Notes on building fast web products.",
  subhead:
    "Technical SEO, performance, and platform choices — written from actual client work, not theory.",
};

// brand/CONTENT.en.md — "SEO copy" table, extended with Blog.
export const seo = {
  home: {
    title: "Mohamed Khalifa — Web Developer",
    description:
      "Full-stack web developer building fast, search-optimised content platforms, e-commerce stores, and interactive tools.",
  },
  work: {
    title: "Projects — Mohamed Khalifa",
    description:
      "Live web projects: content platforms, e-commerce stores, and interactive tools, built for speed and discoverability.",
  },
  blog: {
    title: "Blog — Mohamed Khalifa",
    description: "Notes on technical SEO, performance, and shipping fast with WordPress, Salla, Shopify, Laravel, and Next.js.",
  },
  about: {
    title: "About — Mohamed Khalifa",
    description:
      "Full-stack developer specialising in fast, search-optimised web products — content platforms, e-commerce stores, and interactive tools.",
  },
  contact: {
    title: "Contact — Mohamed Khalifa",
    description: "Have a web project? I reply within one business day.",
  },
};
