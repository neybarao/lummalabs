import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Lumma · Estúdio de design e produto digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0D0D0D",
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
            color: "#FF332C",
          }}
        >
          LUMMA
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1.0,
            fontWeight: 600,
            letterSpacing: -3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Design que dá</span>
          <span>
            forma à sua{" "}
            <span style={{ color: "#FF332C" }}>ideia.</span>
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
          <span>Design · produto · prototipagem</span>
          <span>lummalabs.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
