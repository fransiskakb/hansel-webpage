import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#0f1b2e",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: -0.5, color: "#1b4b91", fontWeight: 600 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -1.2, maxWidth: 1000, fontWeight: 700 }}>
          {SITE_TAGLINE}
        </div>
        <div style={{ fontSize: 28, color: "#5b6473" }}>hansel.ai</div>
      </div>
    ),
    size,
  );
}
