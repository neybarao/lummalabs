import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Lumma · Seu negócio encontrado, entendido e escolhido";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          color: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#50F160",
          }}
        >
          LUMMA
        </div>
        <div
          style={{
            fontSize: 80,
            lineHeight: 1.0,
            fontWeight: 600,
            letterSpacing: -3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Seu negócio encontrado,</span>
          <span>
            entendido e{" "}
            <span style={{ color: "#50F160" }}>escolhido.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(245,245,245,0.62)",
          }}
        >
          <span>Marca · site · Google · SEO para IA</span>
          <span>lummalabs.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
