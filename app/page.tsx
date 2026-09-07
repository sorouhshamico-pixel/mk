import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import ProjectRow from "@/components/ProjectRow";
import { hero, whatIDo, workSection, site, contact } from "@/lib/site";
import { readyFeaturedProjects, hasPublicAsset } from "@/lib/projects";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    sameAs: contact.links.map((l) => l.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16 sm:py-24">
        <StatusBadge />

        <h1 className="text-[clamp(40px,8vw,96px)] font-medium uppercase leading-[1.02] tracking-[-0.02em] text-ink">
          I build web platforms
          <br />
          <span className="text-muted">
            for the Arabic market<span className="text-accent">.</span>
          </span>
        </h1>

        <p className="max-w-[460px] text-[15px] leading-[1.7] text-secondary sm:text-lg">
          {hero.subhead}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-hover"
          >
            {hero.primaryCta.label}
          </a>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-sm border-[0.5px] border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <p className="font-mono text-xs text-muted">{hero.stack.join(" · ")}</p>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-24">
        <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Three things I do.</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {whatIDo.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h3 className="text-lg text-ink">{item.title}</h3>
              <p className="text-[15px] leading-[1.7] text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto flex max-w-[1200px] scroll-mt-20 flex-col gap-10 px-6 py-14 sm:py-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">{workSection.eyebrow}</h2>
          <p className="text-secondary">{workSection.subhead}</p>
        </div>
        <div className="border-t-[0.5px] border-hairline">
          {readyFeaturedProjects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              thumbAvailable={hasPublicAsset(project.thumbnail)}
            />
          ))}
        </div>
        <Link href="/work" className="w-fit text-sm text-accent hover:text-accent-hover">
          View all work →
        </Link>
      </section>
    </>
  );
}
