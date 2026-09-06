// معاينة مؤقتة للخطوة 2: ألوان الهوية + الخطوط عبر next/font.
// هذه الصفحة placeholder وستُستبدل ببنية الموقع الكاملة في الخطوة 4.

const swatches = [
  { name: "ink", className: "bg-ink" },
  { name: "accent", className: "bg-accent" },
  { name: "accent-hover", className: "bg-accent-hover" },
  { name: "accent-soft", className: "bg-accent-soft" },
  { name: "paper", className: "bg-paper border border-hairline" },
  { name: "muted", className: "bg-muted" },
  { name: "hairline", className: "bg-hairline" },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-ink font-latin">
          Brand check — Mohamed Khalifa
        </h1>
        <p className="text-muted">
          معاينة مؤقتة لألوان الهوية والخطوط قبل بناء هيكل الموقع.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted font-latin">
          Colors
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div className={`h-16 w-full rounded-md ${s.className}`} />
              <span className="text-xs text-muted font-mono">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-md border border-hairline bg-white p-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted font-latin">
          Fonts
        </h2>
        <p className="font-latin text-lg text-ink">
          Inter Tight — Web Developer &amp; Portfolio 400/500
        </p>
        <p className="text-lg text-ink" dir="rtl">
          آي بي إم بلكس سانس عربي — مطوّر ويب وبورتفوليو شخصي ٤٠٠/٥٠٠
        </p>
        <p className="font-mono text-sm text-accent-hover">
          JetBrains Mono — const dev = &quot;Mohamed Khalifa&quot;;
        </p>
      </section>

      <button
        type="button"
        className="w-fit rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        زر بلون accent
      </button>
    </main>
  );
}
