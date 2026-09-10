import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { getPost } from "@/lib/posts";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOgImage(post ? post.category : "blog");
}
