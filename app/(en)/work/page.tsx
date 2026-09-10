import type { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";
import Reveal from "@/components/Reveal";
import { seo, site } from "@/lib/site";
import { readyProjects } from "@/lib/projects";
import { otherWork } from "@/lib/other-work";

export const metadata: Metadata = {
  title: seo.work.title,
  description: seo.work.description,
  alternates: {
    canonical: `${site.url}/work`,
    languages: { en: `${site.url}/work`, ar: `${site.url}/ar/work` },
  },
  openGraph: { title: seo.work.title, description: seo.work.description, url: `${site.url}/work` },
};

export default function WorkPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
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
              Selected work.
            </h1>
            <p className="text-secondary">Real projects, live and in use.</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 sm:gap-24">
          {readyProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectShowcase
                index={i + 1}
                flip={i % 2 === 1}
                href={`/work/${project.slug}`}
                item={{
                  slug: project.slug,
                  name: project.name,
                  tagline: project.tagline,
                  year: project.year,
                  status: project.status,
                  stack: project.stack,
                  liveUrl: project.links.live,
                }}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col gap-6 border-t-[0.5px] border-hairline pt-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">More client work.</h2>
              <p className="max-w-[520px] text-sm text-secondary">
                {otherWork.length}+ freelance builds — stores, landing pages, corporate sites for
                clients across Saudi Arabia, Turkey, Qatar, Morocco, and Tunisia. Verified on{" "}
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
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
