import Link from "next/link";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Root-level fallback for URLs that match no route in either the (en) or the
// /ar tree. With multiple root layouts there is no shared layout to inherit
// from, so this file carries its own <html>/<body>.
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
      <body
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center font-sans"
        suppressHydrationWarning
      >
        <p className="font-mono text-xs text-muted">404</p>
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="max-w-[420px] text-[15px] leading-[1.7] text-secondary">
          The link may be broken, or the page may have moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Home
          </Link>
          <Link
            href="/ar"
            className="rounded-full border-[0.5px] border-hairline px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            العربية
          </Link>
        </div>
      </body>
    </html>
  );
}
