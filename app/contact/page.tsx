import type { Metadata } from "next";
import { Mail, Briefcase, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StatusBadge from "@/components/StatusBadge";
import Reveal from "@/components/Reveal";
import GithubIcon from "@/components/icons/GithubIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { contact, seo, site, stats } from "@/lib/site";

const icons = { Mail, WhatsApp: WhatsAppIcon, Github: GithubIcon, Briefcase };

const trust = [
  { icon: Clock, label: "Replies within 1 business day" },
  ...stats.filter((s) => s.label === "Client rehire rate" || s.label === "Communication rating"),
];

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: `${site.url}/contact` },
  openGraph: { title: seo.contact.title, description: seo.contact.description, url: `${site.url}/contact` },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -top-32 right-[-15%] h-[440px] w-[440px] rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -bottom-32 left-[-15%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-16 sm:py-24">
          <Reveal>
            <StatusBadge />
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[clamp(36px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              Have a project?
              <br />
              <span className="text-accent">Let&apos;s talk.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="max-w-[520px] text-[15px] leading-[1.7] text-secondary sm:text-lg">
              {contact.subhead}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3 pt-2">
              {trust.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 rounded-full border-[0.5px] border-hairline bg-surface px-4 py-2 text-xs text-secondary shadow-sm"
                >
                  {"icon" in t ? (
                    <t.icon size={13} className="text-accent" />
                  ) : (
                    <span className="font-mono text-ink">{t.value}</span>
                  )}
                  {t.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Links + form */}
      <section className="mx-auto grid max-w-[1200px] gap-14 px-6 pb-16 sm:pb-24 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Reach me directly.</h2>
            <div className="flex flex-col gap-2">
              {contact.links.map((l) => {
                const Icon = icons[l.icon as keyof typeof icons];
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover-lift flex items-center gap-3 rounded-lg border-[0.5px] border-hairline bg-surface px-4 py-3 shadow-sm hover:border-accent/40 hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Icon size={15} />
                    </div>
                    <span className="flex flex-col">
                      <span className="text-sm text-ink">{l.label}</span>
                      <span className="font-mono text-xs text-secondary">{l.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border-[0.5px] border-hairline bg-surface p-6 shadow-lg sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
