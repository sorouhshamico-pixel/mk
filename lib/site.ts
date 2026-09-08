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
  lead: "I build",
  // Cycles in the animated word slot — components/RotatingWord.tsx.
  rotating: ["content platforms", "interactive tools", "job platforms", "e-commerce stores"],
  tail: "that win in Arabic search.",
  subhead:
    "Full-stack developer based in Cairo. Eight years turning briefs into fast, Arabic-first products — from a Saudi job platform with five labour-law calculators to dozens of stores and corporate sites across the Gulf.",
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
    "I'm Mohamed Khalifa, a full-stack web developer based in Cairo. I work on content platforms and interactive tools in Arabic, and I care most about the seam where engineering meets discoverability.",
    "My most recent launch is Wazifatk, a Saudi job platform I built alone from the database schema to the last detail of the interface.",
  ],
  // Real chronology (mohamedkhalifa.netlify.app) narrated in full — not new
  // facts, just the story the timeline below only shows as dates.
  story: [
    "I didn't start in code. I studied Geographic Information Systems at Assiut University, and spent the next couple of years mapping infrastructure for Orascom Construction — work that has more in common with structured data and spatial logic than it looks like from the outside.",
    "Somewhere in the middle of that job, I picked up a web development scholarship and started teaching myself to build for the browser in whatever hours were left in the day. By 2018 the self-taught skill had become the actual job: I went freelance, and spent the next few years building stores, landing pages, and corporate sites for clients across Saudi Arabia, Turkey, Qatar, Morocco, and Tunisia.",
    "Freelancing at that pace teaches you the constraint that matters most — at the end of every project, someone with a real budget has to see it working. I kept sharpening the craft through more training, then moved in-house at Manarat in 2021 to build depth instead of breadth for a while.",
    "Wazifatk is where those two instincts met: the GIS-trained comfort with structured, spatial data, and years of shipping to real deadlines for real clients. It's a job platform with five labour-law calculators and a fully generated set of city and sector pages — planned, built, and shipped by one person.",
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
