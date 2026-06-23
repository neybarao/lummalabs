"use client";

import { useState, FormEvent } from "react";

// TODO: depois de criar conta em https://formspree.io, substituir "YOUR_FORM_ID" pelo ID real.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const NEED_OPTIONS = [
  "Web design e site",
  "Design de produto (UX/UI)",
  "Estratégia e estrutura",
  "Prototipagem",
  "Design system",
  "Identidade e marca",
  "Não sei ainda",
  "Outro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error || "Não conseguimos enviar. Tenta de novo ou nos chama no WhatsApp.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Sem conexão. Tenta de novo ou nos chama no WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form contact-form--success" role="status" aria-live="polite">
        <h3>Recebido. A gente responde em até um dia útil.</h3>
        <p>Enquanto isso, se preferir falar direto: <a href="https://wa.me/5511974613761">WhatsApp</a> ou <a href="mailto:oi@lummalabs.com.br">oi@lummalabs.com.br</a>.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <label className="contact-form__field">
          <span className="contact-form__label">Nome</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="contact-form__field">
          <span className="contact-form__label">Email ou WhatsApp</span>
          <input name="contact" type="text" required autoComplete="email" />
        </label>
      </div>
      <div className="contact-form__row">
        <label className="contact-form__field">
          <span className="contact-form__label">Empresa e segmento</span>
          <input name="business" type="text" required placeholder="Nome da empresa, área de atuação" />
        </label>
        <label className="contact-form__field">
          <span className="contact-form__label">O que você precisa?</span>
          <select name="need" required defaultValue="">
            <option value="" disabled>Escolher…</option>
            {NEED_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="contact-form__field contact-form__field--full">
        <span className="contact-form__label">Conta um pouco mais <em>(opcional)</em></span>
        <textarea name="message" rows={4} />
      </label>
      <div className="contact-form__actions">
        <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando…" : "Enviar e começar a conversa"}
        </button>
        {status === "error" && (
          <p className="contact-form__error" role="alert">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}
