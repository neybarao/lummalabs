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

      gsap.from(".site-header", {
        y: -12,
        opacity: 0,
        duration: 0.7,
        ease,
      });

      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .from(".hero-headline", {
          y: 32,
          opacity: 0,
          duration: 1.1,
          ease,
        })
        .from(
          ".hero-sub",
          { y: 16, opacity: 0, duration: 0.9, ease },
          "-=0.7",
        )
        .fromTo(
          ".hero-cta-row .btn",
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease,
            onComplete: () => {
              gsap.set(".hero-cta-row .btn", { clearProps: "all" });
            },
          },
          "-=0.5",
        );

      gsap.utils.toArray<HTMLElement>(".section-eyebrow").forEach((el) => {
        gsap.from(el, {
          y: 10,
          opacity: 0,
          duration: 0.6,
          ease,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".section-title, .cta-title").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.from(".manifesto-text", {
        opacity: 0,
        y: 24,
        duration: 1.0,
        ease,
        scrollTrigger: { trigger: ".manifesto", start: "top 70%" },
      });
      gsap.to(".manifesto-sparkle", {
        rotate: 360,
        duration: 140,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray<HTMLElement>(".service").forEach((el) => {
        gsap.from(el, {
          y: 18,
          opacity: 0,
          duration: 0.7,
          ease,
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      gsap.from(".process-list .step", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease,
        scrollTrigger: { trigger: ".process-list", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".step__num").forEach((el) => {
        gsap.from(el, {
          scale: 0.92,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.from(".voice-col", {
        opacity: 0,
        y: 14,
        duration: 0.8,
        stagger: 0.12,
        ease,
        scrollTrigger: { trigger: ".voice-grid", start: "top 80%" },
      });

      gsap.from(".cta-block__inner > *", {
        opacity: 0,
        y: 18,
        stagger: 0.08,
        duration: 0.7,
        ease,
        scrollTrigger: { trigger: ".cta-block", start: "top 75%" },
      });
      gsap.to(".cta-block__sparkle", {
        rotate: -360,
        duration: 160,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".hero__sparkle", {
        rotate: 360,
        duration: 200,
        ease: "none",
        repeat: -1,
      });

      gsap.from(".site-footer__big, .site-footer h4, .site-footer ul", {
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 0.7,
        ease,
        scrollTrigger: { trigger: ".site-footer", start: "top 85%" },
      });

      const cleanups: Array<() => void> = [];
      document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
        const enter = () =>
          gsap.to(btn, { y: -1, duration: 0.25, ease: "power2.out" });
        const leave = () =>
          gsap.to(btn, { y: 0, duration: 0.25, ease: "power2.out" });
        const down = () =>
          gsap.to(btn, { y: 0, duration: 0.08, ease: "power2.out" });
        btn.addEventListener("mouseenter", enter);
        btn.addEventListener("mouseleave", leave);
        btn.addEventListener("focus", enter);
        btn.addEventListener("blur", leave);
        btn.addEventListener("mousedown", down);
        btn.addEventListener("mouseup", enter);
        cleanups.push(() => {
          btn.removeEventListener("mouseenter", enter);
          btn.removeEventListener("mouseleave", leave);
          btn.removeEventListener("focus", enter);
          btn.removeEventListener("blur", leave);
          btn.removeEventListener("mousedown", down);
          btn.removeEventListener("mouseup", enter);
        });
      });

      document
        .querySelectorAll<HTMLElement>(".site-nav a:not(.nav-cta)")
        .forEach((link) => {
          const enter = () =>
            gsap.to(link, { y: -2, duration: 0.2, ease: "power2.out" });
          const leave = () =>
            gsap.to(link, { y: 0, duration: 0.2, ease: "power2.out" });
          link.addEventListener("mouseenter", enter);
          link.addEventListener("mouseleave", leave);
          link.addEventListener("focus", enter);
          link.addEventListener("blur", leave);
          cleanups.push(() => {
            link.removeEventListener("mouseenter", enter);
            link.removeEventListener("mouseleave", leave);
            link.removeEventListener("focus", enter);
            link.removeEventListener("blur", leave);
          });
        });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
