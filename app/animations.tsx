"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ease = "power3.out";

      gsap.from(".site-header", { y: -12, opacity: 0, duration: 0.7, ease });

      // Subtle, transform-only hero entrance (never gates visibility on opacity,
      // so the hero can't get stuck invisible if the tween is interrupted).
      gsap.fromTo(
        ".hero-headline, .hero-sub, .hero-cta-row",
        { y: 18 },
        { y: 0, duration: 0.9, stagger: 0.08, ease, delay: 0.15, clearProps: "transform" },
      );

      ScrollTrigger.batch(".reveal", {
        start: "top 88%",
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease,
            overwrite: true,
          }),
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
