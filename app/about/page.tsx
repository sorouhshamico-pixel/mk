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
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { about, seo, site } from "@/lib/site";

const icons = { Server, Code2, ShoppingBag, Gauge, PenTool, Languages };

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: { title: seo.about.title, description: seo.about.description, url: `${site.url}/about` },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:py-24 md:grid-cols-[280px_1fr]">
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

        <div className="flex flex-col gap-12">
          <Reveal>
            <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
              {about.heading}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex max-w-[640px] flex-col gap-5">
              {about.bio.map((p) => (
                <p key={p} className="text-[15px] leading-[1.7] text-secondary">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-4">
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Skills.</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {about.skillGroups.map((group) => {
                  const Icon = icons[group.icon as keyof typeof icons];
                  return (
                    <div
                      key={group.label}
                      className="hover-lift flex flex-col gap-3 rounded-xl border-[0.5px] border-hairline bg-surface p-5 shadow-sm hover:shadow-lg"
                    >
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
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h2 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
                  <Briefcase size={13} /> Experience.
                </h2>
                <ol className="flex flex-col gap-5 border-s-[0.5px] border-hairline">
                  {about.experience.map((e) => (
                    <li key={e.org} className="flex flex-col gap-0.5 ps-5">
                      <span className="text-sm text-ink">{e.role}</span>
                      <span className="text-sm text-secondary">{e.org}</span>
                      <span className="font-mono text-xs text-muted">{e.period}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
                  <GraduationCap size={13} /> Education.
                </h2>
                <ol className="flex flex-col gap-5 border-s-[0.5px] border-hairline">
                  {about.education.map((e) => (
                    <li key={e.title} className="flex flex-col gap-0.5 ps-5">
                      <span className="text-sm text-ink">{e.title}</span>
                      <span className="text-sm text-secondary">{e.org}</span>
                      <span className="font-mono text-xs text-muted">{e.period}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
