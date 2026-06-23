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

      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .from(".hero__top > *", { y: 14, opacity: 0, duration: 0.8, stagger: 0.1, ease })
        .from(".hero-headline", { y: 34, opacity: 0, duration: 1.1, ease }, "-=0.4")
        .fromTo(
          ".hero-cta-row .btn",
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease,
            onComplete: () => gsap.set(".hero-cta-row .btn", { clearProps: "all" }),
          },
          "-=0.6",
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
