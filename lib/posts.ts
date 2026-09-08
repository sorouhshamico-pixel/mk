// Blog content. Written by Mohamed (via Claude, at his request) to fill the
// blog now that he asked for real posts — see brand/CONTENT.en.md for the
// site's other copy. Topics are chosen from the platforms/skills already
// established elsewhere on the site (WordPress, Salla, Zid, Shopify,
// Laravel, Next.js, technical SEO) — the Wazifatk post restates only facts
// already in brand/projects.ts, nothing new.

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  cover: string; // /blog/<slug>.svg
  seo: { title: string; description: string };
  content: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "technical-seo-checklist-ecommerce",
    title: "The technical SEO checklist every e-commerce store needs",
    excerpt:
      "Most store owners fix SEO by writing more product descriptions. The bigger wins are usually in structure — canonical URLs, faceted navigation, and schema — not copy.",
    category: "Technical SEO",
    date: "2026-08-04",
    readingTime: "6 min read",
    cover: "/blog/technical-seo-checklist-ecommerce.svg",
    seo: {
      title: "The Technical SEO Checklist Every E-commerce Store Needs",
      description:
        "Canonical URLs, faceted navigation, schema, and the other structural fixes that move e-commerce SEO more than copy does.",
    },
    content: [
      {
        type: "p",
        text: "Ask most store owners what to do about SEO and they'll say \"write better product descriptions.\" That helps, but it's rarely the bottleneck. On WordPress, Salla, Zid, or Shopify alike, the bigger wins are almost always structural — decisions made once at the platform level that either compound in your favour on every page, or quietly cap how much of your catalogue Google will ever bother to index.",
      },
      {
        type: "h2",
        text: "1. Fix canonical URLs before anything else",
      },
      {
        type: "p",
        text: "Filters and sort options generate near-duplicate URLs for the same product list — ?sort=price, ?color=red, ?page=2. Without a canonical tag pointing back to the clean category URL, you're asking Google to index dozens of near-identical pages per category and diluting the ranking signal across all of them instead of concentrating it on one.",
      },
      {
        type: "h2",
        text: "2. Let faceted navigation exist without polluting the index",
      },
      {
        type: "p",
        text: "Filters are good for users and bad for crawl budget if every combination gets its own indexable URL. The fix isn't removing filters — it's deciding which filtered views are worth their own indexable page (city + category combinations are, most attribute combinations aren't) and noindexing the rest.",
      },
      {
        type: "h2",
        text: "3. Structured data is the cheapest ranking lever you have",
      },
      {
        type: "p",
        text: "Product schema (price, availability, rating) is what turns a plain blue link into a rich result with stars and a price in the search listing. It doesn't move your ranking position directly, but it moves your click-through rate at whatever position you're already in — often the highest-ROI hour you can spend on an existing store.",
      },
      {
        type: "h2",
        text: "4. Don't let your platform generate thin category pages",
      },
      {
        type: "p",
        text: "A category page with three products and no description is a page Google has little reason to rank. Every category that's meant to capture search traffic needs enough unique content — even two or three genuinely useful paragraphs — to be worth indexing on its own.",
      },
      {
        type: "ul",
        items: [
          "Audit canonical tags on every filtered/sorted URL variant",
          "Decide which faceted combinations deserve to be indexed, noindex the rest",
          "Add Product and BreadcrumbList structured data platform-wide",
          "Write real copy for the category pages that matter for search",
        ],
      },
      {
        type: "p",
        text: "None of this requires a re-platform. It's an afternoon of configuration on Salla or Zid, or a plugin plus some template edits on WordPress — the same category of fix I run early on every content-heavy project, including Wazifatk.",
      },
    ],
  },
  {
    slug: "why-your-salla-store-is-slow",
    title: "Why your Salla store is slow (and how to actually fix it)",
    excerpt:
      "Slow Salla stores almost always trace back to the same three culprits: unoptimised images, app bloat, and a theme doing more work than it needs to.",
    category: "Performance",
    date: "2026-07-18",
    readingTime: "5 min read",
    cover: "/blog/why-your-salla-store-is-slow.svg",
    seo: {
      title: "Why Your Salla Store Is Slow — and How to Fix It",
      description:
        "The three most common causes of a slow Salla or Zid store — images, third-party apps, and theme bloat — and what actually fixes each one.",
    },
    content: [
      {
        type: "p",
        text: "\"Our store feels slow\" is one of the most common briefs I get for Salla and Zid projects, and it's almost never one dramatic problem. It's three ordinary ones stacked on top of each other, each shaving a few hundred milliseconds off your Core Web Vitals until the total is bad enough that customers notice.",
      },
      {
        type: "h2",
        text: "Culprit one: images uploaded at full size",
      },
      {
        type: "p",
        text: "A product photo shot on a modern phone is routinely 4–8MB. Displayed in a 400px-wide grid thumbnail, that's more than 90% wasted bytes on every single page load. The fix is automated resizing and WebP conversion at upload time, not asking whoever manages the catalogue to remember to compress files — that instruction never survives contact with a busy inventory day.",
      },
      {
        type: "h2",
        text: "Culprit two: every app you installed and forgot about",
      },
      {
        type: "p",
        text: "Chat widgets, review plugins, upsell popups, analytics trackers — each one adds its own script, and most load on every page whether or not that page needs them. Six months in, a store can be running fifteen third-party scripts nobody remembers approving. Auditing installed apps quarterly and removing anything that isn't earning its keep is the single highest-leverage performance task most store owners skip.",
      },
      {
        type: "h2",
        text: "Culprit three: a theme rendering more than the page needs",
      },
      {
        type: "p",
        text: "Some themes load the full product-options JavaScript on every page, including the ones with no product options at all. Lazy-loading below-the-fold sections and deferring anything that isn't needed for the first paint usually recovers a full second on mobile — the device most of your traffic is actually on.",
      },
      {
        type: "ul",
        items: [
          "Automate image resizing/WebP conversion at upload, not after the fact",
          "Audit installed apps every quarter, remove what isn't earning its slot",
          "Defer or lazy-load anything not needed for first paint",
          "Measure on mobile — that's where most of your traffic and most of the lag live",
        ],
      },
      {
        type: "p",
        text: "This is the same discipline behind Wazifatk's image pipeline: every upload is converted to WebP at multiple sizes automatically, so performance never depends on someone remembering an extra step.",
      },
    ],
  },
  {
    slug: "wordpress-vs-salla-vs-shopify",
    title: "WordPress, Salla, or Shopify: choosing the right platform",
    excerpt:
      "The right platform depends on who edits the site day-to-day and how much you need to customise — not which one is \"best.\"",
    category: "Platforms",
    date: "2026-06-30",
    readingTime: "5 min read",
    cover: "/blog/wordpress-vs-salla-vs-shopify.svg",
    seo: {
      title: "WordPress vs. Salla vs. Shopify: Choosing the Right Platform",
      description:
        "A practical framework for choosing between WordPress, Salla, Zid, and Shopify based on who runs the store day-to-day, not platform hype.",
    },
    content: [
      {
        type: "p",
        text: "I get asked to compare platforms more than almost anything else, and the honest answer disappoints people looking for a single winner: there isn't one. Each platform trades control for convenience differently, and the right choice depends on who's going to run the store the day after launch — not which platform has the loudest fans.",
      },
      {
        type: "h2",
        text: "Salla and Zid: fastest path to selling in Saudi Arabia",
      },
      {
        type: "p",
        text: "Both are built for the Saudi market specifically — local payment gateways, ZATCA-compliant invoicing, and Arabic-first support out of the box. If you're a merchant who wants to sell products and not manage infrastructure, this is the shortest distance between an idea and a working store. The trade-off is customisation ceiling: past a certain point of bespoke functionality, you're waiting on the platform's roadmap.",
      },
      {
        type: "h2",
        text: "Shopify: the international default",
      },
      {
        type: "p",
        text: "Shopify's app ecosystem is the deepest of any platform here, which matters if you're selling across multiple countries or need a specific integration that already exists as a battle-tested app. You pay for that breadth in monthly fees per app, and heavy customisation still means paying a developer to work inside Shopify's constraints rather than outside them.",
      },
      {
        type: "h2",
        text: "WordPress + WooCommerce: maximum control, maximum responsibility",
      },
      {
        type: "p",
        text: "Nothing else gives you this much control over structure, content, and SEO — which is exactly why it's my default for content-heavy sites where the store is one part of a bigger platform, not the entire product. The cost is real: you (or someone) owns hosting, security updates, and every plugin conflict from here on.",
      },
      {
        type: "ul",
        items: [
          "Selling in Saudi Arabia with minimal ongoing technical overhead → Salla or Zid",
          "Selling internationally, want the deepest app ecosystem → Shopify",
          "Content and SEO matter as much as the store itself → WordPress/WooCommerce",
          "Fully custom logic no platform's app store covers → a bespoke Laravel or Next.js build",
        ],
      },
      {
        type: "p",
        text: "That last row is where Wazifatk lives — a custom Laravel build, because a job platform with five labour-law calculators isn't a shape any store platform's app store was built to hold.",
      },
    ],
  },
  {
    slug: "core-web-vitals-explained",
    title: "Core Web Vitals, explained without the jargon",
    excerpt:
      "LCP, INP, and CLS are just three questions a visitor asks without realising it: is it here yet, does it respond, and does it stop moving.",
    category: "Performance",
    date: "2026-05-22",
    readingTime: "4 min read",
    cover: "/blog/core-web-vitals-explained.svg",
    seo: {
      title: "Core Web Vitals Explained Without the Jargon",
      description:
        "What LCP, INP, and CLS actually measure, why they affect ranking, and the highest-leverage fix for each one.",
    },
    content: [
      {
        type: "p",
        text: "Core Web Vitals sound like abstract Google metrics until you translate them into what a visitor is actually experiencing. Underneath the acronyms, they're three plain questions every visitor asks without consciously noticing: is the content here yet, does the page respond when I touch it, and does it stop moving around while I'm trying to read it.",
      },
      {
        type: "h2",
        text: "LCP — is the content here yet?",
      },
      {
        type: "p",
        text: "Largest Contentful Paint measures how long it takes the biggest visible element — usually a hero image or headline — to render. The single highest-leverage fix is almost always image weight: serve WebP/AVIF, size images for where they're actually displayed, and mark the hero image priority so the browser doesn't discover it late.",
      },
      {
        type: "h2",
        text: "INP — does it respond?",
      },
      {
        type: "p",
        text: "Interaction to Next Paint measures the delay between a tap or click and the page visibly responding. Long JavaScript tasks running on the main thread are the usual cause — a big analytics bundle, an unoptimised search-as-you-type handler. Breaking heavy work into smaller chunks keeps the page responsive between them.",
      },
      {
        type: "h2",
        text: "CLS — does it stop moving?",
      },
      {
        type: "p",
        text: "Cumulative Layout Shift measures how much content jumps around as the page loads — the classic case is an ad or image loading late and pushing the button you were about to tap. Reserving space with explicit width/height (or an aspect-ratio box) before the asset loads eliminates most of it.",
      },
      {
        type: "ul",
        items: [
          "LCP: compress and correctly size the hero image, mark it priority",
          "INP: break up long JavaScript tasks, defer anything non-critical",
          "CLS: reserve space for images and embeds before they load",
        ],
      },
      {
        type: "p",
        text: "These three numbers are also just good manners — a site that's fast to appear, quick to respond, and stable to read is a better site regardless of what Google does with the score.",
      },
    ],
  },
  {
    slug: "building-wazifatk-laravel-nextjs",
    title: "Behind Wazifatk: what actually shipped, and in what order",
    excerpt:
      "The build order behind Wazifatk — and why the tools shipped before the content, not after.",
    category: "Case study",
    date: "2026-09-01",
    readingTime: "5 min read",
    cover: "/blog/building-wazifatk-laravel-nextjs.svg",
    seo: {
      title: "Behind Wazifatk: Building a Job Platform with Laravel",
      description:
        "The build order behind Wazifatk, a Saudi job platform with five labour-law calculators — and why the tools shipped before the content.",
    },
    content: [
      {
        type: "p",
        text: "Wazifatk's case study on this site covers the what and the results. This is the shorter version of the how — the order things actually got built in, since that order is usually the part nobody writes down.",
      },
      {
        type: "h2",
        text: "The schema came before a single page of UI",
      },
      {
        type: "p",
        text: "Cities, sectors, employers, and roles all reference each other — a role belongs to a city and a sector, an employer has many roles, an article can reference a sector. Getting those relationships right in the database first meant every page built afterward — the generated city/sector pages, the employer profiles — was a straightforward query, not a redesign.",
      },
      {
        type: "h2",
        text: "The calculators shipped before the article library",
      },
      {
        type: "p",
        text: "This was the deliberate part. A calculator answers a question someone was already typing into Google — what their end-of-service payout comes to, what their probation period actually allows. That's a visitor who wasn't looking for a job board at all, arriving anyway. Shipping five of them (gratuity, annual leave, probation, net salary, and a CV-to-job match checker) before the article library gave the platform a second acquisition channel that didn't depend on job-board traffic at all.",
      },
      {
        type: "h2",
        text: "SEO was a structural decision, not a plugin",
      },
      {
        type: "p",
        text: "Every city/sector combination generates its own indexable page with its own title and description — hundreds of entry points from Google instead of one search page filtering client-side. That only works if it's designed into the routing and database layer from day one; retrofitting it onto a platform built around a single search page is a much bigger job than building it in from the start.",
      },
      {
        type: "ul",
        items: [
          "Database schema and relationships, before any UI",
          "The five calculators, before the article library",
          "Generated city/sector pages, as structure — not an SEO plugin bolted on later",
          "A real PWA, since most of the audience arrives on mobile from messaging apps",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic — it's the same ordering discipline I bring to a WordPress rebuild or a Salla store: figure out what the data actually looks like before building the screens that display it.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
