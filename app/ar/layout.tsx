import type { Metadata } from "next";
import Script from "next/script";
import { Inter_Tight, Noto_Kufi_Arabic, JetBrains_Mono } from "next/font/google";
import HeaderAr from "@/components/ar/Header";
import FooterAr from "@/components/ar/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { site, seo } from "@/lib/site.ar";
import "../globals.css";

// This is its own root layout (own <html>/<body>) — a sibling of
// app/(en)/layout.tsx, not nested under it — so dir="rtl" lang="ar" can be
// set here directly. See Next.js "multiple root layouts" for the pattern.
// brand/BRIEF.md §2: the Arabic display face (Noto Kufi Arabic) loads only on
// the Arabic locale — this is that locale.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.home.title, template: `%s | ${site.name}` },
  description: seo.home.description,
  alternates: {
    canonical: `${site.url}/ar`,
    languages: { en: site.url, ar: `${site.url}/ar`, "x-default": site.url },
  },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: `${site.url}/ar`,
    siteName: site.name,
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
  },
};

const themeInitScript = `
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
`;

export default function ArabicRootLayout({ children }: LayoutProps<"/ar">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${interTight.variable} ${notoKufiArabic.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-screen flex-col"
        style={{ fontFamily: "var(--font-noto-kufi-arabic), var(--font-inter-tight), system-ui, sans-serif" }}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <HeaderAr />
        <main className="flex-1">{children}</main>
        <FooterAr />
        <WhatsAppFloat locale="ar" />
        <BackToTop locale="ar" />
      </body>
    </html>
  );
}
