import type { Metadata } from "next";
import { site, hassanHaj } from "@/lib/site.ar";
import CaseStudyAr from "@/components/ar/CaseStudyAr";

export const metadata: Metadata = {
  title: `${hassanHaj.title} | ${site.name}`,
  description: hassanHaj.subhead,
  alternates: {
    canonical: `${site.url}/ar/work/hassan-haj`,
    languages: {
      en: `${site.url}/work/hassan-haj`,
      ar: `${site.url}/ar/work/hassan-haj`,
    },
  },
  openGraph: {
    title: `${hassanHaj.title} | ${site.name}`,
    description: hassanHaj.subhead,
    url: `${site.url}/ar/work/hassan-haj`,
  },
};

export default function HassanHajAr() {
  return <CaseStudyAr data={hassanHaj} />;
}
