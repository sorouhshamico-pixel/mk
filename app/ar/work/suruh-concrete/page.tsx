import type { Metadata } from "next";
import { site, suruh } from "@/lib/site.ar";
import CaseStudyAr from "@/components/ar/CaseStudyAr";

export const metadata: Metadata = {
  title: `${suruh.title} | ${site.name}`,
  description: suruh.subhead,
  alternates: {
    canonical: `${site.url}/ar/work/suruh-concrete`,
    languages: {
      en: `${site.url}/work/suruh-concrete`,
      ar: `${site.url}/ar/work/suruh-concrete`,
    },
  },
  openGraph: {
    title: `${suruh.title} | ${site.name}`,
    description: suruh.subhead,
    url: `${site.url}/ar/work/suruh-concrete`,
  },
};

export default function SuruhAr() {
  return <CaseStudyAr data={suruh} />;
}
