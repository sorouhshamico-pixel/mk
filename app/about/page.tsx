import type { Metadata } from "next";
import Image from "next/image";
import { about, seo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: { title: seo.about.title, description: seo.about.description, url: `${site.url}/about` },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:py-24 md:grid-cols-[240px_1fr]">
        <Image
          src="/mohamed-khalifa.jpg"
          alt={site.name}
          width={240}
          height={240}
          className="h-[240px] w-[240px] rounded-sm object-cover"
          priority
        />

        <div className="flex flex-col gap-10">
          <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
            {about.heading}
          </h1>

          <div className="flex max-w-[640px] flex-col gap-5">
            {about.bio.map((p) => (
              <p key={p} className="text-[15px] leading-[1.7] text-secondary">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Skills.</h2>
            <dl className="grid gap-4 sm:grid-cols-2">
              {about.skills.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 border-t-[0.5px] border-hairline pt-3">
                  <dt className="text-xs text-muted">{s.label}</dt>
                  <dd className="font-mono text-sm text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
