import type { Metadata } from "next";
import { contact, seo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: `${site.url}/contact` },
  openGraph: { title: seo.contact.title, description: seo.contact.description, url: `${site.url}/contact` },
};

const fieldClass =
  "border-[0.5px] border-hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent";

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
      <section className="mx-auto flex max-w-[640px] flex-col gap-10 px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
            {contact.heading}
          </h1>
          <p className="text-[15px] leading-[1.7] text-secondary">{contact.subhead}</p>
        </div>

        {/* Email isn't set up yet (brand/BRIEF.md §6), so the form can't
            submit anywhere real. Fields are built to spec; submit is
            disabled rather than pretending to work. Update lib/site.ts's
            `contact.links` and wire a real action once the address exists. */}
        <form className="flex flex-col gap-5" aria-describedby="contact-form-note">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs text-muted">
              Name
            </label>
            <input id="name" name="name" type="text" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs text-muted">
              Email
            </label>
            <input id="email" name="email" type="email" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="projectType" className="text-xs text-muted">
              Project type
            </label>
            <select id="projectType" name="projectType" className={fieldClass}>
              {contact.projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs text-muted">
              Message
            </label>
            <textarea id="message" name="message" rows={5} className={fieldClass} />
          </div>
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="w-fit cursor-not-allowed rounded-sm bg-accent/40 px-5 py-2.5 text-sm font-medium text-paper"
          >
            Send
          </button>
          <p id="contact-form-note" className="text-xs text-muted">
            This form isn&apos;t wired up to an inbox yet — use the link below for now.
          </p>
        </form>

        <div className="flex flex-col gap-2 border-t-[0.5px] border-hairline pt-6">
          {contact.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-accent hover:text-accent-hover"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
