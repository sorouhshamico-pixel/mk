import type { Metadata } from "next";
import { Mail, MessageCircle, Briefcase } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import GithubIcon from "@/components/icons/GithubIcon";
import { contact, seo, site } from "@/lib/site";

const icons = { Mail, MessageCircle, Github: GithubIcon, Briefcase };

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
      <section className="mx-auto grid max-w-[1200px] gap-14 px-6 py-16 sm:py-24 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
                {contact.heading}
              </h1>
              <p className="text-[15px] leading-[1.7] text-secondary">{contact.subhead}</p>
            </div>

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
                    <span className="text-sm text-ink">{l.label}</span>
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
