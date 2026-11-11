"use client";

import { useEffect, useRef } from "react";
import type { LummaStarBGInstance, LummaStarBGOptions } from "./lib/lumma-star-bg";

// Config aprovada para o header (11/11/2026) é o padrão do componente.
// Em telas em retrato (celular), a estrela sobe e fica menor para não brigar com o texto.
const PORTRAIT: LummaStarBGOptions = { size: 0.95, x: 0.8, y: 0.17, particles: 0.5 };
const LANDSCAPE: LummaStarBGOptions = { size: 1.4, x: 0.73, y: 0.61, particles: 0.65 };

export default function StarBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let bg: LummaStarBGInstance | null = null;
    let cancelled = false;
    const mq = window.matchMedia("(orientation: portrait) and (max-width: 860px)");
    const apply = () => bg?.set(mq.matches ? PORTRAIT : LANDSCAPE);

    import("./lib/lumma-star-bg.js").then(() => {
      const Ctor = window.LummaStarBG;
      if (cancelled || !ref.current || !Ctor) return;
      try {
        bg = new Ctor(ref.current, mq.matches ? PORTRAIT : LANDSCAPE);
        if (bg.supported) ref.current.classList.add("is-ready");
      } catch {
        ref.current.classList.add("no-webgl2");
      }
    });

    mq.addEventListener("change", apply);
    return () => {
      cancelled = true;
      mq.removeEventListener("change", apply);
      bg?.destroy();
    };
  }, []);

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />;
}
