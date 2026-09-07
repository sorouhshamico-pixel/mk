import Link from "next/link";
import Image from "next/image";
import {
  Newspaper,
  Calculator,
  SearchCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { hero, whatIDo, workSection, site, contact, stats, blog } from "@/lib/site";
import { readyFeaturedProjects, hasPublicAsset } from "@/lib/projects";
import { otherWork } from "@/lib/other-work";

const icons = { Newspaper, Calculator, SearchCheck };

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.location },
    sameAs: [site.github, site.mostaql],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <StatusBadge />

            <h1 className="text-[clamp(36px,7vw,80px)] font-medium uppercase leading-[1.03] tracking-[-0.02em] text-ink">
              I build web platforms
              <br />
              <span className="text-secondary">
                for the Arabic market<span className="text-accent">.</span>
              </span>
            </h1>

            <p className="max-w-[460px] text-[15px] leading-[1.7] text-secondary sm:text-lg">
              {hero.subhead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={hero.primaryCta.href}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
              >
                {hero.primaryCta.label}
              </a>
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border-[0.5px] border-hairline px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-surface hover:shadow-md"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            <p className="font-mono text-xs text-muted">{hero.stack.join(" · ")}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border-[0.5px] border-hairline shadow-2xl">
              <Image
                src="/mohamed-khalifa.jpg"
                alt={site.name}
                width={720}
                height={720}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-full border-[0.5px] border-hairline bg-paper px-4 py-2 shadow-xl">
              <Sparkles size={14} className="text-accent" />
              <span className="font-mono text-xs text-ink">{site.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="grid grid-cols-2 gap-6 border-y-[0.5px] border-hairline py-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-mono text-2xl text-ink sm:text-3xl">{s.value}</span>
                <span className="text-xs text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* What I do */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 sm:py-24">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Three things I do.</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {whatIDo.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="hover-lift flex h-full flex-col gap-4 rounded-xl border-[0.5px] border-hairline bg-surface p-6 shadow-sm hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg text-ink">{item.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-secondary">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-10 px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-2">
            <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">{workSection.eyebrow}</h2>
            <p className="text-secondary">{workSection.subhead}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {readyFeaturedProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} coverAvailable={hasPublicAsset(project.cover)} />
            </Reveal>
          ))}
        </div>

        {otherWork.length > 0 && (
          <Reveal>
            <div className="flex flex-col gap-4 rounded-xl border-[0.5px] border-hairline bg-surface p-6 shadow-sm">
              <p className="text-xs text-muted">
                Plus {otherWork.length}+ freelance builds — stores, landing pages, corporate sites:
              </p>
              <div className="flex flex-wrap gap-2">
                {otherWork.slice(0, 8).map((w) => (
                  <span
                    key={w.name}
                    className="rounded-full border-[0.5px] border-hairline px-3 py-1.5 text-xs text-secondary transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {w.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Link
          href="/work"
          className="group inline-flex w-fit items-center gap-2 text-sm text-accent hover:text-accent-hover"
        >
          View all work
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Blog teaser */}
      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 pb-16 sm:pb-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border-[0.5px] border-hairline bg-gradient-to-br from-surface to-paper p-8 shadow-lg sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl text-ink">{blog.heading}</h2>
              <p className="max-w-[520px] text-sm text-secondary">{blog.subhead}</p>
            </div>
            <Link
              href="/blog"
              className="shrink-0 rounded-full border-[0.5px] border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-md"
            >
              Visit the blog
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Final CTA */}
      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 pb-24">
          <div className="flex flex-col items-center gap-6 rounded-2xl border-[0.5px] border-hairline bg-ink px-8 py-16 text-center shadow-2xl">
            <h2 className="text-2xl font-medium text-paper sm:text-3xl">{contact.heading}</h2>
            <p className="max-w-[480px] text-[15px] leading-[1.7] text-paper/70">{contact.subhead}</p>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
