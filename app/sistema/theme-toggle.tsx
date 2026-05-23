"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.querySelector(".sys-root") as HTMLElement | null;
    if (!root) return;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <div className="sys-toggle" role="group" aria-label="Tema">
      <button
        type="button"
        className={`sys-toggle__btn${theme === "light" ? " is-active" : ""}`}
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        type="button"
        className={`sys-toggle__btn${theme === "dark" ? " is-active" : ""}`}
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
}
