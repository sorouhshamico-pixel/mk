import type { Metadata } from "next";
import { site, wazifatk } from "@/lib/site.ar";
import CaseStudyAr from "@/components/ar/CaseStudyAr";

export const metadata: Metadata = {
  title: `${wazifatk.title} | ${site.name}`,
  description: wazifatk.subhead,
  alternates: {
    canonical: `${site.url}/ar/work/wazifatk`,
    languages: {
      en: `${site.url}/work/wazifatk`,
      ar: `${site.url}/ar/work/wazifatk`,
    },
  },
  openGraph: {
    title: `${wazifatk.title} | ${site.name}`,
    description: wazifatk.subhead,
    url: `${site.url}/ar/work/wazifatk`,
  },
};

export default function WazifatkAr() {
  return <CaseStudyAr data={wazifatk} />;
}
