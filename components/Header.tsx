import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

// Step 1 of the build order (brand/BRIEF.md §7): logo in the header only.
// Nav links are added as each route is built, to avoid dead links.
export default function Header() {
  return (
    <header className="border-b-[0.5px] border-hairline">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <Link href="/" className="text-ink">
          <Logo />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
