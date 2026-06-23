"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-3G49BN4MCD";
const STORAGE_KEY = "lumma-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __lummaGaLoaded?: boolean;
  }
}

function loadAnalytics() {
  if (typeof window === "undefined" || window.__lummaGaLoaded) return;
  window.__lummaGaLoaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch {
      choice = null;
    }
    if (choice === "granted") {
      loadAnalytics();
      return;
    }
    if (choice === "denied") return;
    const raf = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  function decide(value: "granted" | "denied") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage failures
    }
    if (value === "granted") loadAnalytics();
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="consent" role="dialog" aria-label="Aviso de privacidade">
      <p className="consent__text">
        A gente usa cookies pra entender como o site é usado e melhorar a experiência. Você escolhe.
      </p>
      <div className="consent__actions">
        <button type="button" className="consent__btn consent__btn--ghost" onClick={() => decide("denied")}>
          Recusar
        </button>
        <button type="button" className="consent__btn consent__btn--accent" onClick={() => decide("granted")}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
