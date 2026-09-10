import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-24 sm:py-32">
      <p className="font-mono text-xs text-muted">404</p>
      <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-[460px] text-[15px] leading-[1.7] text-secondary">
        The link might be broken, or the page moved. Try the homepage or the work index.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-hover"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="rounded-sm border-[0.5px] border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
        >
          Work
        </Link>
      </div>
    </section>
  );
}
