import fs from "fs";
import path from "path";
import { projects, getProject, type Project } from "@/brand/projects";

export type { Project };
export { getProject };

/** A project object is still a template until its slug is filled in. */
function isPlaceholder(p: Project) {
  return p.slug.startsWith("[");
}

/** Real projects only — excludes unfilled template entries in projects.ts.
 *  See brand/BRIEF.md §6 "What Mohamed still needs to supply". */
export const readyProjects = projects
  .filter((p) => !isPlaceholder(p))
  .sort((a, b) => a.index - b.index);

export const readyFeaturedProjects = readyProjects.filter((p) => p.featured);

/** True if the given case's code snippet is real (not a `[bracketed]`
 *  instruction to paste one in). brand/BRIEF.md §4.6: placeholder or
 *  invented code is worse than no code block. */
export function hasRealSnippet(p: Project) {
  return Boolean(p.snippet && !p.snippet.code.trim().startsWith("["));
}

/** True if a public/ asset referenced by projects.ts actually exists on
 *  disk. Screenshots (thumb.webp / cover.webp) haven't been supplied yet
 *  for any project, so callers fall back to a styled placeholder cover
 *  instead of a broken next/image request. */
export function hasPublicAsset(relPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relPath));
  } catch {
    return false;
  }
}
