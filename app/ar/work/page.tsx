import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectShowcase from "@/components/ProjectShowcase";
import { site, seo, arProjects } from "@/lib/site.ar";
import { otherWork } from "@/lib/other-work";

export const metadata: Metadata = {
  title: seo.work.title,
  description: seo.work.description,
  alternates: { canonical: `${site.url}/ar/work` },
  openGraph: { title: seo.work.title, description: seo.work.description, url: `${site.url}/ar/work` },
};

export default function WorkAr() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site.url}/ar` },
      { "@type": "ListItem", position: 2, name: "المشاريع", item: `${site.url}/ar/work` },
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
              مشاريع مختارة.
            </h1>
            <p className="text-secondary">أعمال حقيقية تعمل الآن ويستخدمها الناس.</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 sm:gap-24">
          {arProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectShowcase
                index={i + 1}
                flip={i % 2 === 1}
                href={`/ar/work/${p.slug}`}
                caseStudyLabel="مشاهدة دراسة الحالة"
                item={p}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col gap-6 border-t-[0.5px] border-hairline pt-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">أعمال أخرى مع عملاء.</h2>
              <p className="max-w-[560px] text-sm text-secondary">
                {otherWork.length}+ مشروع فريلانس — متاجر، صفحات هبوط، مواقع تعريفية لعملاء في السعودية
                وتركيا وقطر والمغرب وتونس. موثّقة على{" "}
                <a
                  href={site.mostaql}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover"
                >
                  Mostaql
                </a>
                .
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" dir="ltr">
              {otherWork.map((w) => (
                <div
                  key={w.name}
                  className="hover-lift flex items-center justify-between gap-3 rounded-lg border-[0.5px] border-hairline bg-surface px-4 py-3 shadow-sm hover:shadow-md"
                >
                  <span className="text-sm text-ink">{w.name}</span>
                  <span className="font-mono text-[11px] text-muted">{w.platform}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
