"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Movimento calmo: eases longos, deslocamentos pequenos, nada que esconda conteúdo
// se a animação for interrompida. Tudo some com prefers-reduced-motion.
export default function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const cleanups: Array<() => void> = [];

    // ---------- barra de progresso de leitura no header (sempre ativa, não é movimento decorativo)
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    if (bar) {
      let ticking = false;
      const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ease = "power3.out";
      const introDelay = 1.05; // espera a tela de carregamento sair

      gsap.from(".site-header", { y: -12, opacity: 0, duration: 0.7, ease, delay: introDelay - 0.3 });

      // Título do hero sobe palavra por palavra, de dentro de uma máscara (só transform).
      gsap.fromTo(
        ".hero-headline .w > span",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.06, ease: "power4.out", delay: introDelay, clearProps: "transform" },
      );
      gsap.fromTo(
        ".hero__label, .hero-sub, .hero-cta-row",
        { y: 18 },
        { y: 0, duration: 0.9, stagger: 0.1, ease, delay: introDelay + 0.35, clearProps: "transform" },
      );

      // Revelação genérica ao rolar
      ScrollTrigger.batch(".reveal", {
        start: "top 88%",
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease, overwrite: true }),
      });

      // Títulos de seção: a palavra em destaque "acende" depois do resto
      gsap.utils.toArray<HTMLElement>(".section-title em, .manifesto__title em, .cta-title em").forEach((em) => {
        gsap.fromTo(
          em,
          { opacity: 0.25, filter: "blur(4px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
            clearProps: "filter,opacity",
            scrollTrigger: { trigger: em, start: "top 85%", once: true },
          },
        );
      });

      // Tríptico: imagens entram com um leve zoom-out dentro da moldura
      gsap.utils.toArray<HTMLElement>(".figure img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom 60%", scrub: true },
          },
        );
      });

      // Faixa "Iluminar": parallax suave da vitrine e o texto entrando
      gsap.fromTo(
        ".break__media img",
        { scale: 1.08, xPercent: 2 },
        {
          scale: 1,
          xPercent: 0,
          ease: "none",
          scrollTrigger: { trigger: ".break", start: "top bottom", end: "bottom top", scrub: true },
        },
      );

      // Manifesto: cada parágrafo acende conforme chega ao centro da tela
      gsap.utils.toArray<HTMLElement>(".manifesto__body p").forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0.3 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: p, start: "top 85%", end: "top 55%", scrub: true },
          },
        );
      });
      gsap.to(".manifesto__media", {
        rotate: 25,
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "bottom top", scrub: true },
      });

      // Números do método sobem de leve, um depois do outro
      gsap.fromTo(
        ".method__num",
        { yPercent: 40, opacity: 0.2 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: ".method-grid", start: "top 80%", once: true },
        },
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    // ---------- interações de ponteiro: só em mouse/trackpad, sem movimento reduzido
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const offs: Array<() => void> = [];

      // Luz que segue o cursor nos cards
      document.querySelectorAll<HTMLElement>(".why-card, .method").forEach((card) => {
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        card.addEventListener("pointermove", move);
        offs.push(() => card.removeEventListener("pointermove", move));
      });

      // Botões principais levemente "magnéticos"
      document.querySelectorAll<HTMLElement>(".btn-accent, .nav-cta").forEach((btn) => {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.18);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        offs.push(() => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
          gsap.set(btn, { x: 0, y: 0 });
        });
      });

      // Miniatura do serviço inclina na direção do cursor
      document.querySelectorAll<HTMLElement>(".svc").forEach((row) => {
        const thumb = row.querySelector<HTMLElement>(".svc__thumb img");
        if (!thumb) return;
        const rTo = gsap.quickTo(thumb, "rotate", { duration: 0.6, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = row.getBoundingClientRect();
          rTo(((e.clientX - r.left) / r.width - 0.5) * 16);
        };
        const leave = () => rTo(0);
        row.addEventListener("pointermove", move);
        row.addEventListener("pointerleave", leave);
        offs.push(() => {
          row.removeEventListener("pointermove", move);
          row.removeEventListener("pointerleave", leave);
        });
      });

      return () => offs.forEach((f) => f());
    });

    return () => {
      cleanups.forEach((f) => f());
      mm.revert();
    };
  }, []);

  return null;
}
