import type { Metadata } from "next";
import Link from "next/link";
import { Languages } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site, blog, seo } from "@/lib/site.ar";

export const metadata: Metadata = {
  title: seo.blog.title,
  description: seo.blog.description,
  alternates: { canonical: `${site.url}/ar/blog` },
  openGraph: { title: seo.blog.title, description: seo.blog.description, url: `${site.url}/ar/blog` },
};

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

        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl border-[0.5px] border-hairline bg-surface px-8 py-16 text-center shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Languages size={22} />
            </div>
            <p className="text-lg text-ink">المقالات الإنجليزية جاهزة الآن.</p>
            <p className="max-w-[420px] text-sm text-secondary">
              النسخة العربية من المدونة قيد الإعداد. تقدر تقرأ المقالات المتوفرة حالياً بالإنجليزية، أو{" "}
              <Link href="/ar/contact" className="text-accent hover:text-accent-hover">
                تتواصل معي
              </Link>{" "}
              لو محتاج موضوع معيّن بالعربية.
            </p>
            <Link
              href="/blog"
              className="mt-2 rounded-full border-[0.5px] border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-md"
            >
              English blog
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
