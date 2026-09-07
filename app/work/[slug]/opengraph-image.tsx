import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { getProject } from "@/lib/projects";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgImage(project ? project.tagline : "case study");
}
