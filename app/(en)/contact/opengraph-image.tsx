import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact — Mohamed Khalifa";

export default function Image() {
  return renderOgImage("let's talk");
}
