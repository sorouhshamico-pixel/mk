import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blog, seo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: seo.blog.title,
  description: seo.blog.description,
  alternates: { canonical: `${site.url}/blog` },
  openGraph: { title: seo.blog.title, description: seo.blog.description, url: `${site.url}/blog` },
};

export default function BlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
              {blog.heading}
            </h1>
            <p className="max-w-[560px] text-secondary">{blog.subhead}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl border-[0.5px] border-hairline bg-surface px-8 py-16 text-center shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <PenLine size={22} />
            </div>
            <p className="text-lg text-ink">The first posts are being written.</p>
            <p className="max-w-[420px] text-sm text-secondary">
              Arabic technical SEO, Laravel performance notes, and what building content platforms
              in Arabic actually involves — RTL, slugs, search. Check back soon, or{" "}
              <a href="/contact" className="text-accent hover:text-accent-hover">
                get in touch
              </a>{" "}
              if there&apos;s something specific you&apos;d want covered.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
