import type { Metadata } from "next";
import ProjectRow from "@/components/ProjectRow";
import { seo, site } from "@/lib/site";
import { readyProjects, hasPublicAsset } from "@/lib/projects";

export const metadata: Metadata = {
  title: seo.work.title,
  description: seo.work.description,
  alternates: { canonical: `${site.url}/work` },
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
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
            Selected work.
          </h1>
          <p className="text-secondary">Real projects, live and in use.</p>
        </div>
        <div className="border-t-[0.5px] border-hairline">
          {readyProjects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              thumbAvailable={hasPublicAsset(project.thumbnail)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
