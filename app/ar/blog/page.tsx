import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site, blog, seo } from "@/lib/site.ar";
import { sortedPostsAr } from "@/lib/posts.ar";

export const metadata: Metadata = {
  title: seo.blog.title,
  description: seo.blog.description,
  alternates: {
    canonical: `${site.url}/ar/blog`,
    languages: { en: `${site.url}/blog`, ar: `${site.url}/ar/blog`, "x-default": `${site.url}/blog` },
  },
  openGraph: { title: seo.blog.title, description: seo.blog.description, url: `${site.url}/ar/blog` },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogAr() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site.url}/ar` },
      { "@type": "ListItem", position: 2, name: "المدونة", item: `${site.url}/ar/blog` },
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

        <div className="grid gap-8 sm:grid-cols-2">
          {sortedPostsAr.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/ar/blog/${post.slug}`}
                className="hover-lift group flex h-full flex-col overflow-hidden rounded-xl border-[0.5px] border-hairline bg-surface shadow-md hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="relative aspect-[1200/630] w-full overflow-hidden">
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3 font-mono text-xs text-muted">
                    <span className="text-accent">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-lg text-ink">{post.title}</h2>
                  <p className="text-sm leading-[1.8] text-secondary">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
