import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Shared renderer for every opengraph-image.tsx route, following the layout
// of brand/og-image.svg (paper background, mark, wordmark, accent bar) with
// a page-specific subtitle swapped in for "web developer".
export function renderOgImage(subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 96,
          background: "#F1EFE8",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="62" height="44" viewBox="0 0 62 44" fill="none" style={{ marginBottom: 40 }}>
          <path
            d="M6 37 L6 11 L17 24 L28 11 L28 37"
            stroke="#0C1512"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 11 L36 37 M36 24 L50 11 M36 24 L50 37"
            stroke="#1D9E75"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="57" cy="6" r="3.5" fill="#1D9E75" />
        </svg>
        <div style={{ fontSize: 64, fontWeight: 500, letterSpacing: -1, color: "#0C1512", display: "flex" }}>
          MOHAMED KHALIFA
        </div>
        <div
          style={{ width: 100, height: 5, borderRadius: 3, background: "#1D9E75", margin: "22px 0" }}
        />
        <div style={{ fontSize: 28, color: "#5F5E5A", display: "flex" }}>{subtitle}</div>
      </div>
    ),
    { ...ogSize }
  );
}
