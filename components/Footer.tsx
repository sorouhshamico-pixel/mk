import Logo from "./Logo";

// brand/BRIEF.md §4.7 — logo mark, one line of copy, links, year in mono.
// No newsletter, no social wall, no badge farm.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[0.5px] border-hairline">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo variant="mark" className="h-6 w-auto text-ink" />
        <p className="text-sm text-secondary">Built and shipped by one developer.</p>
        <p className="font-mono text-xs text-muted">© {year}</p>
      </div>
    </footer>
  );
}
