"use client";

import { useState, type FormEvent } from "react";
import { site, contact } from "@/lib/site";

const fieldClass =
  "border-[0.5px] border-hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-soft)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");
    const email = String(data.get("email") ?? "");

    const subject = `New project inquiry — ${projectType}`;
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs text-muted">
          Name
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs text-muted">
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} />
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
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </div>
      <button
        type="submit"
        className="w-fit rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
      >
        Send
      </button>
      <p className="text-xs text-muted" role="status">
        {sent
          ? "Opening your email app with this message filled in — send it from there."
          : "Submitting opens your email app with this filled in (no backend yet)."}
      </p>
    </form>
  );
}
