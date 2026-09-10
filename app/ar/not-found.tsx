import Link from "next/link";

export default function NotFoundAr() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-24 sm:py-32">
      <p className="font-mono text-xs text-muted" dir="ltr">
        404
      </p>
      <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
        هذه الصفحة غير موجودة.
      </h1>
      <p className="max-w-[460px] text-[15px] leading-[1.8] text-secondary">
        الرابط قد يكون معطوباً، أو الصفحة انتقلت. جرّب الرئيسية أو فهرس المشاريع.
      </p>
      <div className="flex gap-4">
        <Link
          href="/ar"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
        >
          الرئيسية
        </Link>
        <Link
          href="/ar/work"
          className="rounded-full border-[0.5px] border-hairline px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-surface hover:shadow-md"
        >
          المشاريع
        </Link>
      </div>
    </section>
  );
}
