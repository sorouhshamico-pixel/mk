import type { Metadata } from "next";
import Script from "next/script";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// Inter Tight — all Latin text, weights 400/500 only (brand/BRIEF.md §2).
// IBM Plex Sans Arabic loads only on the Arabic locale in phase two.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// JetBrains Mono — years, stack names, metric values, URL paths.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Khalifa — Web Developer",
  description:
    "Full-stack web developer building fast, search-optimised content platforms and interactive tools for the Arabic market.",
};

// Dark is the default (brand/BRIEF.md §2) — the base CSS already renders it
// with no class on <html>. This blocking script only ever needs to *add*
// `.light` for a visitor who explicitly chose it on a previous visit, so
// there is nothing to flash for the (default) dark case.
const themeInitScript = `
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
