"use client";

import { useState, type FormEvent } from "react";
import { site as siteEn, contact as contactEn } from "@/lib/site";
import { contact as contactAr } from "@/lib/site.ar";

const fieldClass =
  "border-[0.5px] border-hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-soft)]";

const COPY = {
  en: {
    name: "Name",
    email: "Email",
    projectType: "Project type",
    message: "Message",
    send: "Send",
    sentNote: "Opening your email app with this message filled in — send it from there.",
    idleNote: "Submitting opens your email app with this filled in (no backend yet).",
    subjectPrefix: "New project inquiry",
    fromLabel: "From",
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    projectType: "نوع المشروع",
    message: "الرسالة",
    send: "إرسال",
    sentNote: "تم فتح تطبيق البريد برسالة جاهزة — أرسلها من هناك.",
    idleNote: "الإرسال يفتح تطبيق البريد لديك برسالة جاهزة (لا يوجد اتصال مباشر بعد).",
    subjectPrefix: "استفسار مشروع جديد",
    fromLabel: "من",
  },
};

export default function ContactForm({ locale = "en" }: { locale?: "en" | "ar" }) {
  const t = COPY[locale];
  const projectTypes = locale === "ar" ? contactAr.projectTypes : contactEn.projectTypes;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");
    const email = String(data.get("email") ?? "");

    const subject = `${t.subjectPrefix} — ${projectType}`;
    const body = `${t.fromLabel}: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${siteEn.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs text-muted">
          {t.name}
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs text-muted">
          {t.email}
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} dir="ltr" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className="text-xs text-muted">
          {t.projectType}
        </label>
        <select id="projectType" name="projectType" className={fieldClass}>
          {projectTypes.map((pt) => (
            <option key={pt} value={pt}>
              {pt}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs text-muted">
          {t.message}
        </label>
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </div>
      <button
        type="submit"
        className="w-fit rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
      >
        {t.send}
      </button>
      <p className="text-xs text-muted" role="status">
        {sent ? t.sentNote : t.idleNote}
      </p>
    </form>
  );
}
