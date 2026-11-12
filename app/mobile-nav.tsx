"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#o-que-resolvemos", label: "O que resolvemos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como funciona" },
  { href: "#por-que", label: "Por que a Lumma" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" className={`mobile-nav__icon${open ? " is-open" : ""}`}>
          <span />
          <span />
        </span>
      </button>

      <div
        id="mobile-nav-panel"
        className={`mobile-nav__panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Menu principal"
      >
        <nav className="mobile-nav__list" aria-label="Principal">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav__link"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s" }}
            >
              <span className="mobile-nav__link-num">0{i + 1}</span>
              <span className="mobile-nav__link-label">{link.label}</span>
            </a>
          ))}
          <a
            href="#contato"
            className="mobile-nav__cta"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${0.05 + LINKS.length * 0.04}s` : "0s" }}
          >
            Pedir meu Raio-X
          </a>
        </nav>
        <div className="mobile-nav__foot">
          <span>oi@lummalabs.com.br</span>
        </div>
      </div>
    </>
  );
}
