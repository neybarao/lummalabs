import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Lumma — Estúdio de design, multimídia e comunicação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#131211",
          color: "#F5F1EA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#F2A65A",
            fontFamily: "sans-serif",
          }}
        >
          LUMMA
        </div>
        <div
          style={{
            fontSize: 96,
            lineHeight: 1.0,
            fontWeight: 600,
            letterSpacing: -2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>A luz que falta</span>
          <span>
            na sua{" "}
            <span style={{ color: "#F2A65A", fontStyle: "italic" }}>marca.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(245,241,234,0.65)",
            fontFamily: "sans-serif",
          }}
        >
          <span>Design · multimídia · comunicação</span>
          <span>lummalabs.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
