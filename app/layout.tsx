import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter Tight — اللاتيني، الأوزان 400/500 فقط (brand/README.md)
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// IBM Plex Sans Arabic — العربي، الأوزان 400/500 فقط (brand/README.md)
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500"],
  display: "swap",
});

// JetBrains Mono — للأكواد والأرقام التقنية (brand/README.md)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Khalifa — Web Developer",
  description: "Portfolio of Mohamed Khalifa, web developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${interTight.variable} ${ibmPlexSansArabic.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
