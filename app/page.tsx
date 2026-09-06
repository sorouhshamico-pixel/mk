// Step 1 checkpoint (brand/BRIEF.md §7): scaffold, tokens, fonts, dark mode,
// logo in the header. Replaced by the real hero/index in step 2.

const swatches = [
  { name: "paper", className: "bg-paper border-[0.5px] border-hairline" },
  { name: "surface", className: "bg-surface border-[0.5px] border-hairline" },
  { name: "hairline", className: "bg-hairline" },
  { name: "ink", className: "bg-ink" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "accent-hover", className: "bg-accent-hover" },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 py-16">
      <header className="flex flex-col gap-3">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Step 1 checkpoint</p>
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink">
          Tokens, fonts, dark mode, logo.
        </h1>
        <p className="max-w-[460px] text-[15px] leading-[1.7] text-secondary">
          Dark is the default — toggle the sun/moon icon in the header to switch to
          light and back. The choice is remembered on this device.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Colour</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div className={`h-16 w-full rounded-sm ${s.className}`} />
              <span className="font-mono text-xs text-secondary">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 border-[0.5px] border-hairline bg-surface p-6">
        <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">Type</h2>
        <p className="text-lg text-ink">Inter Tight — weights 400 and 500 only.</p>
        <p className="font-mono text-sm text-accent">
          JetBrains Mono — const stack = [&quot;Laravel&quot;, &quot;Next.js&quot;];
        </p>
        <p className="text-[15px] leading-[1.7] text-secondary">
          Supporting copy sits in <span className="text-secondary">secondary</span>, and
          the quietest labels — like{" "}
          <span className="text-muted">this line</span> — sit in muted.
        </p>
      </section>
    </main>
  );
}
