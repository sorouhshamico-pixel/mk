import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { readyProjects } from "@/lib/projects";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/work", "/blog", "/about", "/contact"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes: MetadataRoute.Sitemap = readyProjects.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  // Arabic locale (brand/BRIEF.md §3 phase two).
  const arabicRoutes: MetadataRoute.Sitemap = [
    "/ar",
    "/ar/about",
    "/ar/work",
    "/ar/work/wazifatk",
    "/ar/work/suruh-concrete",
    "/ar/work/hassan-haj",
    "/ar/contact",
    "/ar/blog",
  ].map((route) => ({ url: `${site.url}${route}`, lastModified: new Date() }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes, ...arabicRoutes];
}
