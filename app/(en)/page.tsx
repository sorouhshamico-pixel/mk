import Link from "next/link";
import Image from "next/image";
import { Newspaper, Calculator, SearchCheck, ArrowRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import ProjectShowcase from "@/components/ProjectShowcase";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";
import HeroPortrait from "@/components/HeroPortrait";
import AmbientGlow from "@/components/AmbientGlow";
import SectionMark from "@/components/SectionMark";
import { hero, whatIDo, workSection, site, contact, stats, blog, intro } from "@/lib/site";
import { readyFeaturedProjects } from "@/lib/projects";
import { otherWork } from "@/lib/other-work";
import { sortedPosts } from "@/lib/posts";

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
    sameAs: [site.linkedin, site.github, site.mostaql],
  };

  const [featureItem, ...restItems] = whatIDo;
  const FeatureIcon = icons[featureItem.icon as keyof typeof icons];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* One continuous glow runs the full height of the page — the thread
          that ties the hero to the closing CTA instead of four disconnected
          sections each doing their own thing. */}
      <div className="relative">
        <AmbientGlow
          blobs={[
            { top: "-8rem", right: "-10%", size: 480, opacity: "opacity-20", delay: "0s" },
            { top: "35rem", left: "-12%", size: 420, opacity: "opacity-10", delay: "3s" },
            { top: "85rem", right: "-8%", size: 460, opacity: "opacity-10", delay: "6s" },
            { top: "130rem", left: "-10%", size: 380, opacity: "opacity-15", delay: "1.5s" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-7">
              <StatusBadge />

              <h1 className="text-[clamp(36px,7vw,80px)] font-medium uppercase leading-[1.03] tracking-[-0.02em] text-ink">
                {hero.lead}
                <br />
                <RotatingWord words={hero.roles} className="text-accent" />
                <br />
                <span className="text-secondary">{hero.tail}</span>
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

            <HeroPortrait />
          </div>
        </section>

        {/* Intro + Stats */}
        <section className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <SectionMark index="01" label="Intro" />
          </Reveal>
          <Reveal delay={80}>
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <p className="text-2xl font-medium tracking-[-0.01em] text-ink sm:text-3xl md:w-[280px]">
                {intro.lead}
              </p>
              <div className="flex flex-col gap-4">
                <p className="max-w-[620px] text-[15px] leading-[1.8] text-secondary sm:text-lg">
                  {intro.paragraph}
                </p>
                <Link
                  href={intro.cta.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-accent hover:text-accent-hover"
                >
                  {intro.cta.label}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-6 border-y-[0.5px] border-hairline py-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-mono text-2xl text-ink sm:text-3xl">{s.value}</span>
                  <span className="text-xs text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* What I do — bento */}
        <section className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <SectionMark index="02" label="Three things I do." />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="md:col-span-2">
              <div className="hover-lift relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border-[0.5px] border-hairline bg-surface p-8 shadow-sm hover:shadow-xl sm:flex-row sm:items-center">
                <FeatureIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 -right-8 text-accent opacity-[0.06]"
                  size={220}
                />
                <div className="relative flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <FeatureIcon size={20} />
                  </div>
                  <h3 className="text-xl text-ink sm:text-2xl">{featureItem.title}</h3>
                  <p className="max-w-[440px] text-[15px] leading-[1.7] text-secondary">
                    {featureItem.body}
                  </p>
                </div>
              </div>
            </Reveal>

            {restItems.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <Reveal key={item.title} delay={(i + 1) * 100}>
                  <div className="hover-lift flex h-full flex-col gap-4 rounded-2xl border-[0.5px] border-hairline bg-surface p-6 shadow-sm hover:shadow-xl">
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
        <section id="work" className="relative mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-col gap-2">
              <SectionMark index="03" label={workSection.eyebrow} />
              <p className="pl-9 text-secondary">{workSection.subhead}</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-16 sm:gap-24">
            {readyFeaturedProjects.map((project, i) => (
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
            className="group inline-flex w-fit items-center gap-2 pl-9 text-sm text-accent hover:text-accent-hover"
          >
            View all work
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>

        {/* Blog */}
        <section className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-col gap-2">
              <SectionMark index="04" label={blog.heading} />
              <p className="pl-9 text-secondary">{blog.subhead}</p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {sortedPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover-lift group flex h-full flex-col overflow-hidden rounded-xl border-[0.5px] border-hairline bg-surface shadow-sm hover:border-accent/40 hover:shadow-xl"
                >
                  <div className="relative aspect-[1200/630] w-full overflow-hidden">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="font-mono text-[11px] text-accent">{post.category}</span>
                    <h3 className="text-sm leading-snug text-ink">{post.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-2 pl-9 text-sm text-accent hover:text-accent-hover"
          >
            Read all posts
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>

        {/* Final CTA */}
        <Reveal>
          <section className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-10">
            <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-hairline bg-ink px-8 py-16 text-center shadow-2xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--color-accent) 25%, transparent), transparent)",
                }}
              />
              <div className="relative flex flex-col items-center gap-6">
                <h2 className="text-2xl font-medium text-paper sm:text-3xl">{contact.heading}</h2>
                <p className="max-w-[480px] text-[15px] leading-[1.7] text-paper/70">{contact.subhead}</p>
                <Link
                  href="/contact"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
