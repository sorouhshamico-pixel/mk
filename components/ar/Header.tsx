import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import { nav } from "@/lib/site.ar";

export default function HeaderAr() {
  return (
    <header className="sticky top-0 z-40 border-b-[0.5px] border-hairline bg-paper/90 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link href="/ar" className="shrink-0 text-ink">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-secondary transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-full border-[0.5px] border-hairline px-2.5 py-1 font-mono text-xs text-secondary transition-colors hover:border-accent/40 hover:text-ink"
          >
            EN
          </Link>
          <ThemeToggle />
          <MobileNav items={nav} langHref="/" langLabel="English" />
        </div>
      </div>
    </header>
  );
}
