import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, Calculator, SearchCheck, ArrowLeft } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";
import HeroPortrait from "@/components/HeroPortrait";
import AmbientGlow from "@/components/AmbientGlow";
import SectionMark from "@/components/SectionMark";
import ProjectShowcase from "@/components/ProjectShowcase";
import { site, hero, statusBadge, whatIDo, workSection, intro, contact, stats, seo, blog, arProjects } from "@/lib/site.ar";
import { sortedPostsAr } from "@/lib/posts.ar";

const icons = { Newspaper, Calculator, SearchCheck };

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: {
    canonical: `${site.url}/ar`,
    languages: { en: site.url, ar: `${site.url}/ar`, "x-default": site.url },
  },
  openGraph: { title: seo.home.title, description: seo.home.description, url: `${site.url}/ar` },
};

export default function HomeAr() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "مطوّر ويب",
    url: `${site.url}/ar`,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.locationAr },
    worksFor: { "@type": "Organization", name: "Rabit Information Technology" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Assiut University" },
    sameAs: [site.linkedin, site.github, site.mostaql],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="relative">
        <AmbientGlow
          blobs={[
            { top: "-8rem", left: "-10%", size: 480, opacity: "opacity-20", delay: "0s" },
            { top: "35rem", right: "-12%", size: 420, opacity: "opacity-10", delay: "3s" },
            { top: "85rem", left: "-8%", size: 460, opacity: "opacity-10", delay: "6s" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-7">
              <StatusBadge label={statusBadge.label} unavailableLabel={statusBadge.unavailableLabel} />

              <h1 className="text-[clamp(32px,6.5vw,72px)] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                {hero.lead}
                <br />
                <RotatingWord words={hero.roles} className="text-accent" dir="ltr" />
                <br />
                <span className="text-secondary">{hero.tail}</span>
              </h1>

              <p className="max-w-[480px] text-[15px] leading-[1.8] text-secondary sm:text-lg">
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

              <p className="font-mono text-xs text-muted" dir="ltr" style={{ textAlign: "end" }}>
                {hero.stack.join(" · ")}
              </p>
            </div>

            <HeroPortrait name={site.name} location={site.locationAr} />
          </div>
        </section>

        {/* Intro + Stats */}
        <section className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <SectionMark index="٠١" label="نبذة" />
          </Reveal>
          <Reveal delay={80}>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div className="flex flex-col gap-4 md:order-1">
                <p className="max-w-[620px] text-[15px] leading-[1.9] text-secondary sm:text-lg">
                  {intro.paragraph}
                </p>
                <Link
                  href={intro.cta.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-accent hover:text-accent-hover"
                >
                  {intro.cta.label}
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
              <p className="text-2xl font-medium tracking-[-0.01em] text-ink sm:text-3xl md:order-2 md:w-[260px]">
                {intro.lead}
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-6 border-y-[0.5px] border-hairline py-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-mono text-2xl text-ink sm:text-3xl" dir="ltr">
                    {s.value}
                  </span>
                  <span className="text-xs text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* What I do */}
        <section className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <SectionMark index="٠٢" label="ثلاثة أشياء أفعلها." />
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
        <section id="work" className="relative mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-col gap-2">
              <SectionMark index="٠٣" label={workSection.eyebrow} />
              <p className="ps-9 text-secondary">{workSection.subhead}</p>
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

          <Link
            href="/ar/work"
            className="group inline-flex w-fit items-center gap-2 ps-9 text-sm text-accent hover:text-accent-hover"
          >
            عرض كل الأعمال
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </section>

        {/* Blog */}
        <section className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-col gap-2">
              <SectionMark index="٠٤" label={blog.heading} />
              <p className="ps-9 text-secondary">{blog.subhead}</p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {sortedPostsAr.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/ar/blog/${post.slug}`}
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
            href="/ar/blog"
            className="group inline-flex w-fit items-center gap-2 ps-9 text-sm text-accent hover:text-accent-hover"
          >
            اقرأ كل المقالات
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
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
                  href="/ar/contact"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
                >
                  تحدّث معي
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
