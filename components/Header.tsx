import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b-[0.5px] border-hairline">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link href="/" className="shrink-0 text-ink">
          <Logo />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-secondary transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
