import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Blog — Mohamed Khalifa";

export default function Image() {
  return renderOgImage("blog");
}
