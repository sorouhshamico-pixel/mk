// Site-wide copy and constants, transcribed from brand/CONTENT.en.md.
// Do not invent copy here — add to CONTENT.en.md first, then mirror it.

export const site = {
  name: "Mohamed Khalifa",
  role: "Web Developer",
  url: "https://mohamedkhalifa.dev", // matches brand/og-image.svg; update if the real domain differs
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const hero = {
  h1: "I build web platforms for the Arabic market",
  subhead:
    "Full-stack developer. I ship content platforms and interactive tools in Arabic that load fast, rank well, and install on a phone like an app.",
  primaryCta: { label: "View work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "/contact" },
  stack: ["Laravel", "Next.js", "PHP", "TypeScript", "Tailwind", "MySQL"],
};

// brand/BRIEF.md §4.1 — literal component copy, not placeholder data.
export const statusBadge = {
  available: true,
  label: "Available for work",
  unavailableLabel: "Not taking new work right now",
};

export const whatIDo = [
  {
    title: "Content platforms",
    body: "Sites that publish thousands of pages and stay fast, structured, and legible to search engines.",
  },
  {
    title: "Interactive tools",
    body: "Calculators and utilities that solve a real problem for the visitor and earn search traffic on their own.",
  },
  {
    title: "Technical SEO",
    body: "Semantic markup, structured data, and load times measured in Core Web Vitals rather than in impressions.",
  },
];

export const workSection = {
  eyebrow: "Selected work.",
  subhead: "Real projects, live and in use.",
};

export const about = {
  // [year] is unfilled — brand/BRIEF.md §6. Shown as-is rather than invented.
  heading: "I've been building for the web since [year]",
  bio: [
    "I'm Mohamed Khalifa, a full-stack web developer. I work on content platforms and interactive tools in Arabic, and I care most about the seam where engineering meets discoverability. A fast site nobody can find is not a finished project, and a visible site that takes six seconds to paint loses its reader before the first sentence.",
    "My most recent launch is Wazifatk, a Saudi job platform I built alone from the database schema to the last detail of the interface.",
  ],
  skills: [
    { label: "Backend", value: "PHP, Laravel, MySQL, REST APIs" },
    { label: "Frontend", value: "JavaScript, TypeScript, Next.js, Tailwind CSS" },
    { label: "Performance and SEO", value: "Core Web Vitals, structured data, PWA" },
    // "[add what you use]" left as-is — brand/BRIEF.md §6.
    { label: "Tooling", value: "Git, Linux, [add what you use]" },
  ],
};

export const contact = {
  heading: "Have a project? Let's talk",
  subhead:
    "I reply within one business day. Describe the idea in two lines and I'll tell you honestly whether I'm the right person for it.",
  projectTypes: ["Content platform", "Store", "Tool", "Other"],
  // email / GitHub / LinkedIn are still missing (brand/BRIEF.md §6) — only
  // list the link that's actually live rather than rendering a dead href.
  links: [{ label: "Mostaql", href: "https://mostaql.com/u/M1_m2/portfolio" }],
};

// brand/CONTENT.en.md — "SEO copy" table.
export const seo = {
  home: {
    title: "Mohamed Khalifa — Web Developer",
    description:
      "Full-stack web developer building fast, search-optimised content platforms and interactive tools for the Arabic market.",
  },
  work: {
    title: "Work — Mohamed Khalifa",
    description:
      "Live web projects: Arabic content platforms and interactive tools, built for speed and discoverability.",
  },
  about: {
    title: "About — Mohamed Khalifa",
    description:
      "Full-stack developer specialising in Arabic content platforms, performance, and technical SEO.",
  },
  contact: {
    title: "Contact — Mohamed Khalifa",
    description: "Have a web project? I reply within one business day.",
  },
};
