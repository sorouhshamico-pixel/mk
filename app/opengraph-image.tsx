import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Mohamed Khalifa, web developer";

export default function Image() {
  return renderOgImage("web developer");
}
