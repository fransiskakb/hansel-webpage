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
          background: "#faf7f2",
          color: "#161513",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: -0.5 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -1.2, maxWidth: 1000 }}>
          {SITE_TAGLINE}
        </div>
        <div style={{ fontSize: 28, color: "#6b6058" }}>hansel.ai</div>
      </div>
    ),
    size,
  );
}
