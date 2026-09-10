import type { Metadata } from "next";
import Image from "next/image";
import {
  Server,
  Code2,
  ShoppingBag,
  Gauge,
  PenTool,
  Languages,
  Briefcase,
  GraduationCap,
  Quote,
  Rocket,
  SearchCheck,
  Layers,
  Gamepad2,
  Tent,
  BookOpen,
  Waves,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { site, about, seo } from "@/lib/site.ar";

const skillIcons = { Server, Code2, ShoppingBag, Gauge, PenTool, Languages };
const philosophyIcons = [Rocket, Gauge, SearchCheck, Layers];
const interestIcons = { Gamepad2, Tent, BookOpen, Waves };
const storyEras = ["٢٠٠٩ – ٢٠١٤", "٢٠١٦ – ٢٠١٨", "٢٠١٨ – ٢٠٢٥", "٢٠٢٥ – الآن"];

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: `${site.url}/ar/about` },
  openGraph: { title: seo.about.title, description: seo.about.description, url: `${site.url}/ar/about` },
};

export default function AboutAr() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site.url}/ar` },
      { "@type": "ListItem", position: 2, name: "من أنا", item: `${site.url}/ar/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:py-24 md:grid-cols-[280px_1fr] md:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[280px] md:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent/5 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border-[0.5px] border-hairline shadow-2xl">
                <Image
                  src="/mohamed-khalifa.jpg"
                  alt={site.name}
                  width={560}
                  height={560}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{about.eyebrow}</p>
              <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
                {about.heading}
              </h1>
              <div className="flex flex-col gap-1 font-mono text-xs text-secondary">
                <span>{site.locationAr}</span>
                <span>مطوّر ويب</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-[900px] px-6 pb-16 sm:pb-24">
          <div className="flex flex-col items-start gap-4 border-e-2 border-accent pe-6 text-end">
            <Quote size={28} className="scale-x-[-1] text-accent" />
            <p className="text-xl leading-[1.7] text-ink sm:text-2xl">{about.pullQuote}</p>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto flex max-w-[900px] flex-col gap-10 px-6 pb-16 sm:pb-24">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">كيف وصلت هنا.</h2>
        </Reveal>
        <div className="flex flex-col gap-10">
          {about.story.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 80}>
              <div className="grid grid-cols-[1fr_90px] gap-4 sm:grid-cols-[1fr_120px] sm:gap-8">
                <p className="text-[15px] leading-[1.9] text-secondary sm:text-base">{paragraph}</p>
                <span className="pt-1 text-end font-mono text-xs text-muted" dir="ltr">
                  {storyEras[i]}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-16 sm:pb-24">
        <Reveal>
          <div className="flex flex-col gap-2">
            <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">كيف أعمل.</h2>
            <p className="text-secondary">أربعة مبادئ عمل، لا كلام تسويقي.</p>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {about.philosophy.map((p, i) => {
            const Icon = philosophyIcons[i];
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div className="hover-lift flex h-full flex-col gap-4 rounded-xl border-[0.5px] border-hairline bg-surface p-6 shadow-sm hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg text-ink">{p.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-secondary">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-16 sm:pb-24">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">المهارات.</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.skillGroups.map((group, i) => {
            const Icon = skillIcons[group.icon as keyof typeof skillIcons];
            return (
              <Reveal key={group.label} delay={i * 60}>
                <div className="hover-lift flex h-full flex-col gap-3 rounded-xl border-[0.5px] border-hairline bg-surface p-5 shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm text-ink">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border-[0.5px] border-hairline px-2.5 py-1 font-mono text-[11px] text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-6 pb-16 sm:grid-cols-2 sm:pb-24">
        <Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
              <Briefcase size={13} /> الخبرة.
            </h2>
            <ol className="flex flex-col gap-5 border-e-[0.5px] border-hairline">
              {about.experience.map((e) => (
                <li key={e.org} className="relative flex flex-col gap-0.5 pe-5">
                  <span
                    aria-hidden="true"
                    className="absolute -end-[3px] top-1.5 h-[5px] w-[5px] rounded-full bg-accent"
                  />
                  <span className="text-sm text-ink">{e.role}</span>
                  <span className="text-sm text-secondary" dir="ltr" style={{ textAlign: "end" }}>
                    {e.org}
                  </span>
                  <span className="font-mono text-xs text-muted" dir="ltr" style={{ textAlign: "end" }}>
                    {e.period}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
              <GraduationCap size={13} /> التعليم.
            </h2>
            <ol className="flex flex-col gap-5 border-e-[0.5px] border-hairline">
              {about.education.map((e) => (
                <li key={e.title} className="relative flex flex-col gap-0.5 pe-5">
                  <span
                    aria-hidden="true"
                    className="absolute -end-[3px] top-1.5 h-[5px] w-[5px] rounded-full bg-accent"
                  />
                  <span className="text-sm text-ink">{e.title}</span>
                  <span className="text-sm text-secondary">{e.org}</span>
                  <span className="font-mono text-xs text-muted" dir="ltr" style={{ textAlign: "end" }}>
                    {e.period}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 pb-24">
          <div className="flex flex-col gap-6 rounded-2xl border-[0.5px] border-hairline bg-gradient-to-br from-surface to-paper p-8 shadow-lg">
            <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">خارج الشاشة.</h2>
            <div className="flex flex-wrap gap-4">
              {about.interests.map((item) => {
                const Icon = interestIcons[item.icon as keyof typeof interestIcons];
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-full border-[0.5px] border-hairline bg-paper px-4 py-2 text-sm text-secondary shadow-sm"
                  >
                    <Icon size={15} className="text-accent" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
