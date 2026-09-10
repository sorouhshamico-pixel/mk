import { site } from "@/lib/site.ar";
import { getProject } from "@/lib/projects";
import ProjectCover from "@/components/ProjectCover";

type TechNote = { title: string; body: string };

export type ArCaseData = {
  slug: string;
  name: string;
  year: number;
  primaryStack: string;
  link: string;
  title: string;
  subhead: string;
  metrics: { label: string; value: string }[];
  problem: string;
  decision: string;
  technical: TechNote[];
  results: string[];
  learned: string;
};

/** Shared Arabic case-study layout — one per entry in lib/site.ar.ts. */
export default function CaseStudyAr({ data }: { data: ArCaseData }) {
  const project = getProject(data.slug);
  const url = `${site.url}/ar/work/${data.slug}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.subhead,
    url,
    inLanguage: "ar",
    creator: { "@type": "Person", name: site.name, url: site.url },
    dateCreated: String(data.year),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site.url}/ar` },
      { "@type": "ListItem", position: 2, name: "المشاريع", item: `${site.url}/ar/work` },
      { "@type": "ListItem", position: 3, name: data.name, item: url },
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
        <p className="font-mono text-xs text-muted" dir="ltr" style={{ textAlign: "end" }}>
          {data.year} · {data.primaryStack}
        </p>
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">{data.title}</h1>
        <p className="max-w-[640px] text-[15px] leading-[1.8] text-secondary sm:text-lg">{data.subhead}</p>

        <dl className="grid grid-cols-2 gap-6 border-y-[0.5px] border-hairline py-6 sm:grid-cols-4">
          {data.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="text-[11px] uppercase tracking-[0.1em] text-muted">{m.label}</dt>
              <dd className="font-mono text-lg text-ink sm:text-xl" dir="ltr" style={{ textAlign: "end" }}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="overflow-hidden rounded-2xl border-[0.5px] border-hairline shadow-2xl">
          {project ? (
            <ProjectCover project={project} variant="cover" className="w-full" />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center bg-surface">
              <span className="font-mono text-xs text-muted">{data.primaryStack}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-[720px] flex-col gap-14 px-6 pb-24">
        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">المشكلة.</h2>
          <p className="text-[15px] leading-[1.8] text-secondary">{data.problem}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">القرار المحوري.</h2>
          <p className="text-[15px] leading-[1.8] text-secondary">{data.decision}</p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">القرارات التقنية.</h2>
          <ol className="flex flex-col gap-6">
            {data.technical.map((t, i) => (
              <li key={t.title} className="flex gap-4">
                <span className="font-mono text-sm text-muted" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-ink">{t.title}</h3>
                  <p className="text-[15px] leading-[1.8] text-secondary">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">النتيجة.</h2>
          <ul className="flex flex-col gap-2">
            {data.results.map((r) => (
              <li key={r} className="flex gap-3 text-[15px] leading-[1.8] text-secondary">
                <span aria-hidden="true" className="text-accent">
                  ←
                </span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">ما تعلّمته.</h2>
          <p className="text-[15px] leading-[1.8] text-secondary">{data.learned}</p>
        </section>

        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
        >
          زيارة {data.name} ←
        </a>
      </div>
    </article>
  );
}
