import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About — Mohamed Khalifa";

export default function Image() {
  return renderOgImage("about");
}
