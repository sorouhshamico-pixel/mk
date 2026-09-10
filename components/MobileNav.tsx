"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

export default function MobileNav({
  items,
  langHref,
  langLabel,
}: {
  items: NavItem[];
  langHref: string;
  langLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-8 w-8 items-center justify-center text-ink"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[72px] z-30 border-b-[0.5px] border-hairline bg-paper shadow-xl">
          <nav className="flex flex-col px-6 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b-[0.5px] border-hairline py-3 text-sm text-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={langHref}
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm text-secondary transition-colors hover:text-ink"
            >
              {langLabel}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
