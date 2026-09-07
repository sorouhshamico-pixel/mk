import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCover from "@/components/ProjectCover";
import CodeBlock from "@/components/CodeBlock";
import { site } from "@/lib/site";
import { readyProjects, getProject, hasRealSnippet } from "@/lib/projects";

export function generateStaticParams() {
  return readyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `${site.url}/work/${project.slug}`;
  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: url },
    openGraph: { title: project.seo.title, description: project.seo.description, url },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.slug.startsWith("[")) notFound();

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.seo.description,
    url: `${site.url}/work/${project.slug}`,
    creator: { "@type": "Person", name: site.name, url: site.url },
    dateCreated: String(project.year),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${site.url}/work/${project.slug}` },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 pt-16 sm:pt-24">
        <p className="font-mono text-xs text-muted">
          {String(project.index).padStart(2, "0")} · {project.year} · {project.primaryStack}
        </p>
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
          {project.name}
        </h1>
        <p className="max-w-[640px] text-[15px] leading-[1.7] text-secondary sm:text-lg">
          {project.seo.description}
        </p>

        {/* facts strip — brand/BRIEF.md §4.6, drawn from projects.ts metrics */}
        <dl className="grid grid-cols-2 gap-6 border-y-[0.5px] border-hairline py-6 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="text-[11px] uppercase tracking-[0.1em] text-muted">{m.label}</dt>
              <dd className="font-mono text-lg text-ink sm:text-xl">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="overflow-hidden rounded-2xl border-[0.5px] border-hairline shadow-2xl">
          <ProjectCover project={project} variant="cover" className="w-full" />
        </div>
      </div>

      <div className="mx-auto flex max-w-[720px] flex-col gap-14 px-6 pb-24">
        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">The problem.</h2>
          <p className="text-[15px] leading-[1.7] text-secondary">{project.problem}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">The key decision.</h2>
          <p className="text-[15px] leading-[1.7] text-secondary">{project.decision}</p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Technical decisions.</h2>
          <ol className="flex flex-col gap-6">
            {project.technical.map((t, i) => (
              <li key={t.title} className="flex gap-4">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-ink">{t.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-secondary">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {hasRealSnippet(project) && project.snippet && (
          <CodeBlock caption={project.snippet.caption} code={project.snippet.code} />
        )}

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Results.</h2>
          <ul className="flex flex-col gap-2">
            {project.results.map((r) => (
              <li key={r} className="flex gap-3 text-[15px] leading-[1.7] text-secondary">
                <span aria-hidden="true" className="text-accent">
                  →
                </span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">What I learned.</h2>
          <p className="text-[15px] leading-[1.7] text-secondary">{project.learned}</p>
        </section>

        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
          >
            Visit {project.name} →
          </a>
        )}
      </div>
    </article>
  );
}
