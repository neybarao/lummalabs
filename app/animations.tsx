"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      gsap.from(".site-header", {
        y: -20,
        opacity: 0,
        duration: 0.7,
        ease,
      });

      gsap.from(".hero-headline", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease,
        delay: 0.15,
      });
      gsap.from(".hero-sub", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease,
      });
      gsap.from(".hero-cta-row > *", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.6,
        stagger: 0.08,
        ease,
      });

      gsap.utils.toArray<HTMLElement>(".section-eyebrow").forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".section-title, .cta-title").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.from(".manifesto-text", {
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease,
        scrollTrigger: { trigger: ".manifesto", start: "top 70%" },
      });
      gsap.to(".manifesto-sparkle", {
        rotate: 360,
        duration: 80,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray<HTMLElement>(".service").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease,
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      gsap.from(".process-list .step", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease,
        scrollTrigger: { trigger: ".process-list", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".step__num").forEach((el) => {
        gsap.from(el, {
          scale: 0.85,
          duration: 0.9,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.from(".voice-col", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease,
        scrollTrigger: { trigger: ".voice-grid", start: "top 80%" },
      });

      gsap.from(".cta-block__inner > *", {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.7,
        ease,
        scrollTrigger: { trigger: ".cta-block", start: "top 75%" },
      });
      gsap.to(".cta-block__sparkle-bg", {
        rotate: -360,
        duration: 100,
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

      const btnHandlers: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];
      document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
        const enter = () =>
          gsap.to(btn, { scale: 1.03, duration: 0.25, ease: "power2.out" });
        const leave = () =>
          gsap.to(btn, { scale: 1, duration: 0.25, ease: "power2.out" });
        btn.addEventListener("mouseenter", enter);
        btn.addEventListener("mouseleave", leave);
        btnHandlers.push({ el: btn, enter, leave });
      });

      const navLinks: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];
      document
        .querySelectorAll<HTMLElement>(".site-nav a:not(.nav-cta)")
        .forEach((link) => {
          const enter = () =>
            gsap.to(link, { y: -2, duration: 0.2, ease: "power2.out" });
          const leave = () =>
            gsap.to(link, { y: 0, duration: 0.2, ease: "power2.out" });
          link.addEventListener("mouseenter", enter);
          link.addEventListener("mouseleave", leave);
          navLinks.push({ el: link, enter, leave });
        });

      return () => {
        btnHandlers.forEach(({ el, enter, leave }) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
        navLinks.forEach(({ el, enter, leave }) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      };
    });

    return () => ctx.revert();
  }, []);

  return null;
}
