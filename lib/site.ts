// Site-wide copy and constants.
// Base copy comes from brand/CONTENT.en.md. Contact info, work history, and
// the Mostaql stats below are pulled from Mohamed's own public profiles —
// https://mostaql.com/u/M1_m2 and https://mohamedkhalifa.netlify.app — at
// his request, since brand/BRIEF.md §6 listed them as still missing.

export const site = {
  name: "Mohamed Khalifa",
  role: "Web Developer",
  url: "https://mohamedkhalifa.dev", // matches brand/og-image.svg; update if the real domain differs
  email: "mmd1790@gmail.com",
  phone: "+966532719336",
  location: "Cairo, Egypt",
  github: "https://github.com/mgkh286",
  mostaql: "https://mostaql.com/u/M1_m2",
  // Freelancing professionally since the Hsoub/Mostaql years began (source:
  // mohamedkhalifa.netlify.app work history). Confirm/adjust if this isn't
  // the year you'd want quoted.
  startYear: 2018,
};

export const nav = [
  { href: "/work", label: "Projects" },
  { href: "/blog", label: "Blog" },
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

export const about = {
  heading: `I've been building for the web since ${site.startYear}`,
  bio: [
    "I'm Mohamed Khalifa, a full-stack web developer based in Cairo. I work on content platforms and interactive tools in Arabic, and I care most about the seam where engineering meets discoverability. A fast site nobody can find is not a finished project, and a visible site that takes six seconds to paint loses its reader before the first sentence.",
    "My most recent launch is Wazifatk, a Saudi job platform I built alone from the database schema to the last detail of the interface. Before that, I spent years freelancing across the MENA region — e-commerce stores, landing pages, and corporate sites for clients in Saudi Arabia, Turkey, Qatar, Morocco, and Tunisia — and three years as an in-house web developer at Manarat.",
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
      items: ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS"],
    },
    {
      label: "Platforms",
      icon: "ShoppingBag",
      items: ["WordPress", "WooCommerce", "Shopify", "Salla", "Webflow"],
    },
    {
      label: "Performance & SEO",
      icon: "Gauge",
      items: ["Core Web Vitals", "Structured data", "PWA", "Technical SEO"],
    },
    {
      label: "Design & tooling",
      icon: "PenTool",
      items: ["Figma", "Git", "Linux", "Elementor"],
    },
    {
      label: "Languages",
      icon: "Languages",
      items: ["Arabic", "English", "French"],
    },
  ],
  // Source: mohamedkhalifa.netlify.app
  experience: [
    {
      role: "Web Developer",
      org: "Manarat Co",
      period: "2021 — present",
    },
    {
      role: "Freelance Web Developer",
      org: "Hsoub / Mostaql",
      period: "2018 — 2021",
    },
    {
      role: "GIS Specialist",
      org: "Orascom Construction",
      period: "2016 — 2018",
    },
  ],
  education: [
    {
      title: "Advanced Web Development Path",
      org: "Lynda",
      period: "2020 — 2021",
    },
    {
      title: "Egfwd Web Development Scholarship",
      org: "Udacity",
      period: "2017 — 2018",
    },
    {
      title: "B.Sc. Geographic Information Systems",
      org: "Assiut University",
      period: "2011 — 2014",
    },
  ],
};

export const contact = {
  heading: "Have a project? Let's talk",
  subhead:
    "I reply within one business day. Describe the idea in two lines and I'll tell you honestly whether I'm the right person for it.",
  projectTypes: ["Content platform", "Store", "Tool", "Other"],
  links: [
    { label: "Email", href: `mailto:${site.email}`, icon: "Mail" },
    { label: "WhatsApp", href: `https://wa.me/${site.phone.replace("+", "")}`, icon: "MessageCircle" },
    { label: "GitHub", href: site.github, icon: "Github" },
    { label: "Mostaql", href: site.mostaql, icon: "Briefcase" },
  ],
};

export const blog = {
  heading: "Notes on Arabic content platforms.",
  subhead:
    "Writing about technical SEO, Laravel performance, and the specifics of building for Arabic — RTL, slugs, search. First posts landing soon.",
};

// brand/CONTENT.en.md — "SEO copy" table, extended with Blog.
export const seo = {
  home: {
    title: "Mohamed Khalifa — Web Developer",
    description:
      "Full-stack web developer building fast, search-optimised content platforms and interactive tools for the Arabic market.",
  },
  work: {
    title: "Projects — Mohamed Khalifa",
    description:
      "Live web projects: Arabic content platforms and interactive tools, built for speed and discoverability.",
  },
  blog: {
    title: "Blog — Mohamed Khalifa",
    description: "Notes on Arabic content platforms, technical SEO, and shipping fast with Laravel and Next.js.",
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
