import "./sistema.css";
import ThemeToggle from "./theme-toggle";

const SPARKLE_PATH =
  "M45.7 360.4C19.8 350.8 0 327.7 0 300C0 272.3 19.8 249.2 45.7 239.6L48.3 238.7C138 209 209 138 238.7 48.3C247.7 21.1 271.4 0 300 0C328.6 0 352.3 21.1 361.3 48.3C391 138 462 209 551.8 238.7L554.3 239.6C580.2 249.2 600 272.3 600 300C600 327.7 580.2 350.8 554.3 360.4L551.8 361.3C462 391 391 462 361.3 551.7C352.3 578.9 328.6 600 300 600C271.4 600 247.7 578.9 238.7 551.7C209 462 138 391 48.3 361.3L45.7 360.4Z";

function Sparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 600 600" fill="currentColor" style={style} aria-hidden="true">
      <path d={SPARKLE_PATH} />
    </svg>
  );
}

const COLORS = [
  { name: "--lumma-glow", value: "#F2A65A", role: "Primary · CTA, thin-wide, sparkle, signature" },
  { name: "--glow-50", value: "#FDF4E8", role: "Surface · raised hover sobre linen" },
  { name: "--glow-200", value: "#F8D5A8", role: "Primary hover · botão primary" },
  { name: "--glow-700", value: "#C8853F", role: "Italic em linen, hover de nav-cta" },
  { name: "--glow-900", value: "#7A4F22", role: "Reservado pra texto sobre glow drenched" },
  { name: "--deep-ink", value: "#131211", role: "Texto principal, fundo escuro" },
  { name: "--neutral-700", value: "#3A3A40", role: "Corpo longo sobre linen" },
  { name: "--cool-slate", value: "#5C6677", role: "Texto secundário, eyebrows, mono" },
  { name: "--neutral-300", value: "#C9C2B3", role: "Borda forte, placeholder" },
  { name: "--neutral-200", value: "#E8E2D6", role: "Border soft · divisor padrão" },
  { name: "--neutral-50", value: "#FAF8F4", role: "Surface hover" },
  { name: "--soft-linen", value: "#F5F1EA", role: "Background default" },
  { name: "--spark", value: "#E94E3B", role: "Faísca rara · line-through, erro" },
];

const TYPE = [
  { role: "Display", sample: "A luz que falta na sua marca.", meta: { fam: "Inter", size: "clamp(50px, 9vw, 137px)", weight: 500, lh: "0.98", ls: "-0.04em" }, note: "Hero headline. Uso único." },
  { role: "Headline", sample: "Tudo aberto, tudo combinado.", meta: { fam: "Inter", size: "clamp(40px, 6vw, 80px)", weight: 500, lh: "1.04", ls: "-0.03em" }, note: "Título de cada seção." },
  { role: "CTA Title", sample: "Tem um negócio pra iluminar?", meta: { fam: "Inter", size: "clamp(48px, 7vw, 96px)", weight: 500, lh: "1.0", ls: "-0.035em" }, note: "Bloco CTA final." },
  { role: "Manifesto", sample: "Pequeno não é sinônimo de amador.", meta: { fam: "Inter", size: "clamp(26px, 3vw, 40px)", weight: 400, lh: "1.35", ls: "-0.015em" }, note: "Voz contínua, ink." },
  { role: "Title", sample: "Manual de comunicação", meta: { fam: "Inter", size: "clamp(26px, 2.8vw, 36px)", weight: 500, lh: "1.1", ls: "-0.025em" }, note: "Nome de serviço, footer big." },
  { role: "Step Number", sample: "01", meta: { fam: "Inter", size: "clamp(72px, 8vw, 112px)", weight: 500, lh: "0.9", ls: "-0.045em" }, note: "Numerais display, processo. tnum + ss01." },
  { role: "Lead", sample: "Design, multimídia e comunicação pra negócios pequenos.", meta: { fam: "Inter", size: "19px", weight: 400, lh: "1.55" }, note: "Hero sub, parágrafo de abertura." },
  { role: "Body", sample: "Logo, paleta, tipografia e regras de uso. A base sobre a qual tudo o mais se apoia.", meta: { fam: "Inter", size: "16px", weight: 400, lh: "1.6" }, note: "Corpo geral." },
  { role: "Small", sample: "30 minutos pra entender o seu negócio.", meta: { fam: "Inter", size: "14px", weight: 400, lh: "1.55" }, note: "Process desc, footer link." },
  { role: "Eyebrow", sample: "SERVIÇOS · SEIS COISAS, BEM FEITAS", meta: { fam: "Inter", size: "11px", weight: 600, lh: "1.4", ls: "0.16em" }, note: "Kicker. Único por seção." },
  { role: "Mono", sample: "001 / 008 · 2026-05-10", meta: { fam: "JetBrains Mono", size: "12px", weight: 400, lh: "1.5", ls: "0.04em" }, note: "Metadado: numeração, datas, footer chrome." },
];

const SPACING = [
  { name: "--space-1", value: "4px" },
  { name: "--space-2", value: "8px" },
  { name: "--space-3", value: "12px" },
  { name: "--space-4", value: "16px" },
  { name: "--space-6", value: "24px" },
  { name: "--space-8", value: "32px" },
  { name: "--space-10", value: "40px" },
  { name: "--space-16", value: "64px" },
  { name: "--space-20", value: "80px" },
  { name: "--space-24", value: "96px" },
  { name: "--space-30", value: "120px" },
  { name: "--space-35", value: "140px" },
];

const RADIUS = [
  { name: "sm", value: "4px" },
  { name: "md", value: "12px" },
  { name: "lg", value: "16px" },
  { name: "xl", value: "28px" },
  { name: "pill", value: "999px" },
];

const MOTION = [
  { name: "--dur-fast", value: "140ms", note: "Menor feedback de interação." },
  { name: "--dur-base", value: "220ms", note: "Hover transitions, color shifts." },
  { name: "--dur-slow", value: "420ms", note: "Section entrances pareadas com stagger." },
  { name: "--ease-out", value: "cubic-bezier(0.22, 1, 0.36, 1)", note: "Default deceleration." },
  { name: "--ease-in-out", value: "cubic-bezier(0.65, 0, 0.35, 1)", note: "Entradas + saídas pareadas." },
  { name: "GSAP ease", value: "power3.out", note: "Reveals por scroll." },
  { name: "Sparkle hero", value: "rotate 200s linear infinite", note: "Lento, ambiente, periferia." },
  { name: "Sparkle manifesto", value: "rotate 140s linear infinite", note: "Acento glow rotativo." },
  { name: "Sparkle CTA", value: "rotate 160s contra-horário", note: "Ink sobre fundo glow." },
  { name: "Hero card entrance", value: "headline y:32 / sub y:16 / CTAs y:12", note: "Distâncias curtas, ease longo." },
  { name: "Reveal default", value: "section-title y:24 / eyebrow y:10 / content y:18", note: "Stagger 0.08–0.12s." },
  { name: "Button hover", value: "translateY(-1px) · 250ms power2.out", note: "Sem scale-down no active." },
];

const NAMED_RULES = [
  { name: "The Linen Default Rule", body: "Fundo claro é Soft Linen (#F5F1EA). Branco puro está banido — incluindo modal, popover e PDF print." },
  { name: "The Glow Scarcity Rule", body: "Glow é o verbo da marca. Aparece nos pontos onde a marca está dizendo algo: CTA primário, thin-wide de seção, sparkle, link de revelação." },
  { name: "The One-Saturated-Color Rule", body: "A paleta tem uma cor saturada (glow) e um auxiliar de faísca (spark). Qualquer terceira saturada é drift." },
  { name: "The Thin-Wide-as-Verb Rule", body: "Archivo wght 100 + wdth 125 marca a palavra que carrega a emoção. Em linen recebe glow-700; em ink recebe glow. Esse corte em parágrafo comum é proibido. Italic está banido." },
  { name: "The Eyebrow Earns Its Place Rule", body: "Toda seção tem um eyebrow, único, com função de kicker editorial. Nada de eyebrows aninhados ou decorativos." },
  { name: "The Widow Defense Rule", body: "Frases curtas importantes usam text-wrap: pretty e &nbsp; antes da última palavra. Nada de palavra solitária em fim de bloco." },
  { name: "The No-Shadow Site Rule", body: "No site cliente, zero box-shadow. Hierarquia vem de bloco de cor ou aumento de radius." },
  { name: "The Linen Floats Above Ink Rule", body: "Quando uma seção escura aparece, o radius e a margem deixam linen visível em volta. Esse respiro é a sombra do sistema." },
  { name: "The Sparkle Says Lumma Rule", body: "Sparkle aparece em três lugares fixos (hero, manifesto, CTA). Nunca como bullet, separador, ou decoração menor." },
];

const DOS = [
  "Usar Soft Linen como fundo padrão.",
  "Reservar glow para os pontos onde a marca está dizendo algo.",
  "Fechar headlines com Archivo thin-wide (wght 100, wdth 125) na palavra emocional.",
  "Escrever copy em português brasileiro coloquial.",
  "Dar respiro: 120–140px de padding vertical entre seções no desktop.",
  "Preservar prefers-reduced-motion cortando todas as animações GSAP.",
  "Garantir :focus-visible em todo interativo.",
  "Marcar viúvas com text-wrap: pretty e &nbsp; estratégico.",
];

const DONTS = [
  "Usar agência-speak: 'sinergia', '360°', 'soluções premium'.",
  "Cair em SaaS frio: navy + branco + sans grotesco.",
  "Cair em editorial-magazine genérico: drop cap + broadsheet.",
  "Usar dark mode default ou monospace em corpo de texto.",
  "Border-left/right >1px como acento colorido.",
  "Gradiente em texto (background-clip: text).",
  "Introduzir uma terceira cor saturada.",
  "Box-shadow no site cliente.",
  "Animar padding, width, margin, top, left.",
  "Emoji rocket, 'vamos revolucionar', métricas-hero gigantes.",
  "Copy em inglês corporativo.",
];

const SECTIONS = [
  { id: "cores", label: "Cores" },
  { id: "tipo", label: "Tipografia" },
  { id: "espaco", label: "Espaçamento" },
  { id: "radius", label: "Radius" },
  { id: "motion", label: "Motion" },
  { id: "componentes", label: "Componentes" },
  { id: "badge", label: "Badge" },
  { id: "cards", label: "Cards" },
  { id: "fields", label: "Form Fields" },
  { id: "alerts", label: "Alerts" },
  { id: "regras", label: "Regras" },
];

const BADGES = [
  { variant: "default", label: "novo · default", dot: false },
  { variant: "ink", label: "ink", dot: false },
  { variant: "glow", label: "destaque · glow", dot: true },
  { variant: "critical", label: "evitar · critical", dot: true },
];

const CARDS = [
  { variant: "default", title: "Card · default", body: "Fundo linen com borda soft. Usado pra blocos editoriais inline." },
  { variant: "raised", title: "Card · raised", body: "Surface neutral-50 sem borda. Hover de service row vive aqui." },
  { variant: "ink", title: "Card · ink", body: "Bloco escuro. A versão linen aparece em volta como respiro." },
  { variant: "glow", title: "Card · glow", body: "Drench. Único bloco onde o glow pode cobrir 100% da superfície." },
];

const ALERTS = [
  { variant: "info", mark: "i", title: "Atualização disponível", text: "Vamos refazer o exercício de tom de voz na próxima sprint." },
  { variant: "success", mark: "✓", title: "Combinado", text: "Cronograma da Rucad confirmado. Primeira checagem na semana 2." },
  { variant: "critical", mark: "!", title: "Validade vencendo", text: "Esta proposta vence em 3 dias. Renovar antes do envio." },
];

export default function SistemaPage() {
  return (
    <div className="sys-root">
      <header className="sys-head">
        <div className="sys-eyebrow">Sistema · v.1 · 2026-05-10</div>
        <h1 className="sys-title">
          O sistema visual da <em>Lumma.</em>
        </h1>
        <p className="sys-lead">
          Storybook interno. Tokens, tipografia, espaçamento, motion e
          componentes em todos os estados. Use como referência ao evoluir o
          design.
        </p>
        <ThemeToggle />
        <nav className="sys-toc" aria-label="Índice">
          {SECTIONS.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}>
              {String(i + 1).padStart(2, "0")} · {s.label}
            </a>
          ))}
        </nav>
      </header>

      {/* 01 · Cores */}
      <section className="sys-section" id="cores">
        <header className="sys-section__head">
          <span className="sys-section__num">01</span>
          <h2 className="sys-section__title">Cores</h2>
        </header>
        {COLORS.map((c) => (
          <div className="sys-row" key={c.name}>
            <span className="sys-row__name">{c.name}</span>
            <div className="sys-row__preview">
              <span
                className={`sys-swatch${c.value === "#F5F1EA" || c.value === "#FAF8F4" || c.value === "#FDF4E8" ? " sys-swatch--linen" : ""}`}
                style={{ background: c.value }}
              />
              <span style={{ fontSize: 13, color: "var(--neutral-700)" }}>{c.role}</span>
            </div>
            <span className="sys-row__value">{c.value}</span>
          </div>
        ))}
      </section>

      {/* 02 · Tipografia */}
      <section className="sys-section" id="tipo">
        <header className="sys-section__head">
          <span className="sys-section__num">02</span>
          <h2 className="sys-section__title">Tipografia</h2>
        </header>
        {TYPE.map((t, i) => (
          <div className="sys-spec" key={t.role}>
            <span className="sys-spec__index">{`0${i + 1}`}</span>
            <div className="sys-spec__body">
              <div
                className="sys-type-sample"
                style={{
                  fontFamily: t.meta.fam.includes("Mono") ? "var(--font-mono)" : "var(--font-body)",
                  fontSize: t.meta.size,
                  fontWeight: t.meta.weight,
                  lineHeight: t.meta.lh,
                  letterSpacing: t.meta.ls,
                }}
              >
                {t.sample}
              </div>
              <div className="sys-type-meta">
                <span>{t.role}</span>
                <span>{t.meta.fam}</span>
                <span>{t.meta.size}</span>
                <span>weight {t.meta.weight}</span>
                <span>lh {t.meta.lh}</span>
                {t.meta.ls && <span>ls {t.meta.ls}</span>}
              </div>
              <p style={{ fontSize: 13, color: "var(--neutral-700)", marginTop: 4 }}>{t.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 03 · Espaçamento */}
      <section className="sys-section" id="espaco">
        <header className="sys-section__head">
          <span className="sys-section__num">03</span>
          <h2 className="sys-section__title">Espaçamento</h2>
        </header>
        <p style={{ fontSize: 14, color: "var(--neutral-700)", marginBottom: 24, maxWidth: 560 }}>
          Base 4px. Section padding 120–140 desktop, 80–96 mobile. Service row interno 36px vertical.
        </p>
        {SPACING.map((s) => {
          const px = parseInt(s.value, 10);
          const widthPct = Math.min((px / 140) * 100, 100);
          return (
            <div className="sys-space" key={s.name}>
              <span className="sys-row__name">{s.name}</span>
              <span className="sys-space__bar" style={{ width: `${widthPct}%` }} />
              <span className="sys-row__value">{s.value}</span>
            </div>
          );
        })}
      </section>

      {/* 04 · Radius */}
      <section className="sys-section" id="radius">
        <header className="sys-section__head">
          <span className="sys-section__num">04</span>
          <h2 className="sys-section__title">Border radius</h2>
        </header>
        <div className="sys-radius">
          {RADIUS.map((r) => (
            <div className="sys-radius__item" key={r.name}>
              <div className="sys-radius__shape" style={{ borderRadius: r.value }} />
              <span className="sys-radius__label">
                {r.name}
                <br />
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 05 · Motion */}
      <section className="sys-section" id="motion">
        <header className="sys-section__head">
          <span className="sys-section__num">05</span>
          <h2 className="sys-section__title">Motion</h2>
        </header>
        <p style={{ fontSize: 14, color: "var(--neutral-700)", marginBottom: 16, maxWidth: 640 }}>
          Tudo respeita <code style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>prefers-reduced-motion</code> via gsap.matchMedia + CSS global.
        </p>
        <div className="sys-motion">
          {MOTION.map((m) => (
            <div className="sys-motion__card" key={m.name}>
              <span className="sys-motion__name">{m.name}</span>
              <span className="sys-motion__value">{m.value}</span>
              <span className="sys-motion__note">{m.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 06 · Componentes */}
      <section className="sys-section" id="componentes">
        <header className="sys-section__head">
          <span className="sys-section__num">06</span>
          <h2 className="sys-section__title">Componentes</h2>
        </header>

        {/* Buttons */}
        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Button · Primary</span>
            <span className="sys-component__note">CTA principal. Único botão que carrega o glow.</span>
          </div>
          <div className="sys-component__demo">
            <div>
              <div className="sys-state-label">Default · Hover · Focus · Disabled</div>
              <div className="sys-component__strip">
                <button className="btn btn-primary" type="button">Começar uma conversa</button>
                <button className="btn btn-primary" type="button" style={{ background: "var(--glow-200)" }}>Hover</button>
                <button className="btn btn-primary" type="button" style={{ outline: "2px solid var(--lumma-glow)", outlineOffset: 4, borderRadius: 999 }}>Focus</button>
                <button className="btn btn-primary" type="button" disabled style={{ background: "var(--neutral-300)", color: "var(--cool-slate)", cursor: "not-allowed" }}>Disabled</button>
              </div>
            </div>
          </div>
        </div>

        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Button · Ghost Ink</span>
            <span className="sys-component__note">CTA secundário em fundo linen.</span>
          </div>
          <div className="sys-component__demo">
            <div className="sys-component__strip">
              <button className="btn btn-ghost-ink" type="button">Ver serviços</button>
              <button className="btn btn-ghost-ink" type="button" style={{ background: "var(--neutral-50)" }}>Hover</button>
            </div>
          </div>
        </div>

        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Button · Ghost Linen</span>
            <span className="sys-component__note">CTA secundário em fundo escuro (hero card).</span>
          </div>
          <div className="sys-component__demo">
            <div className="sys-component__strip sys-component__strip--ink">
              <button className="btn btn-ghost-linen" type="button">Ver serviços</button>
              <button className="btn btn-ghost-linen" type="button" style={{ background: "rgba(245,241,234,0.06)" }}>Hover</button>
            </div>
          </div>
        </div>

        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Button · Dark</span>
            <span className="sys-component__note">CTA em fundo glow (bloco final).</span>
          </div>
          <div className="sys-component__demo">
            <div className="sys-component__strip sys-component__strip--glow">
              <button className="btn btn-dark" type="button">oi@lummalabs.com.br</button>
              <button className="btn btn-dark" type="button" style={{ background: "var(--neutral-700)" }}>Hover</button>
            </div>
          </div>
        </div>

        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Nav · CTA Pill</span>
            <span className="sys-component__note">Único link de nav pill. Ink sobre linen.</span>
          </div>
          <div className="sys-component__demo">
            <div className="sys-component__strip">
              <a className="nav-cta" href="#" style={{ background: "var(--deep-ink)", color: "var(--soft-linen)", padding: "10px 16px", borderRadius: 999, fontSize: 14, fontWeight: 500 }}>Conversar</a>
              <a className="nav-cta" href="#" style={{ background: "var(--glow-700)", color: "var(--soft-linen)", padding: "10px 16px", borderRadius: 999, fontSize: 14, fontWeight: 500 }}>Hover</a>
            </div>
          </div>
        </div>

        {/* Service Row */}
        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Service Row</span>
            <span className="sys-component__note">Lista editorial. Hover muda fundo e número.</span>
          </div>
          <div className="sys-component__demo">
            <div className="services-grid" style={{ marginTop: 0, border: "1px solid var(--border-soft)", borderTop: "1px solid var(--border-soft)" }}>
              <div className="service">
                <div className="service__num">01</div>
                <div className="service__name">Identidade<br />visual</div>
                <div className="service__desc">Logo, paleta, tipografia e regras de uso. A base sobre a qual tudo o mais se apoia.</div>
                <div className="service__deliverables">logo + variações<br />guia de marca<br />4 a 6 semanas</div>
              </div>
              <div className="service" style={{ background: "var(--neutral-50)" }}>
                <div className="service__num" style={{ color: "var(--glow-700)" }}>02</div>
                <div className="service__name">Design</div>
                <div className="service__desc">Cardápio, embalagem, sinalização, material impresso. Aqui o serviço está em estado hover.</div>
                <div className="service__deliverables">arte final<br />versões editáveis<br />1 a 4 semanas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Section · Eyebrow + Title</span>
            <span className="sys-component__note">Grammar de seção. Um eyebrow por seção.</span>
          </div>
          <div className="sys-component__demo">
            <div className="section-eyebrow">Capítulo 03 · Serviços</div>
            <h3 className="section-title" style={{ marginTop: 16 }}>
              O que a gente <em>faz.</em>
            </h3>
          </div>
        </div>

        {/* Hero card */}
        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Hero Card (mini)</span>
            <span className="sys-component__note">Forma assinatura: ink + radius 28 + bottom-left anchor.</span>
          </div>
          <div className="sys-component__demo">
            <div className="sys-hero-mini">
              <div className="sys-hero-mini__head">
                A luz que falta
                <br />
                na sua <em>marca.</em>
              </div>
            </div>
          </div>
        </div>

        {/* Voice grid */}
        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Voice Grid</span>
            <span className="sys-component__note">Composição dual evitamos/preferimos. Line-through em spark.</span>
          </div>
          <div className="sys-component__demo">
            <div style={{ background: "var(--deep-ink)", padding: 24, borderRadius: 16 }}>
              <div className="voice-grid" style={{ marginTop: 0 }}>
                <div className="voice-col bad">
                  <div className="voice-col__label bad">— Evitamos</div>
                  <div className="voice-col__list">
                    <div className="voice-col__item">Soluções de comunicação 360°</div>
                    <div className="voice-col__item">Entregáveis premium</div>
                  </div>
                </div>
                <div className="voice-col good">
                  <div className="voice-col__label good">+ Preferimos</div>
                  <div className="voice-col__list">
                    <div className="voice-col__item">Logos, sites e vídeos pra quem está começando</div>
                    <div className="voice-col__item">O que combinamos, no prazo, bem feito</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sparkle */}
        <div className="sys-component">
          <div className="sys-component__label">
            <span className="sys-component__name">Sparkle · signature</span>
            <span className="sys-component__note">Aparece em três fundos. Sempre rotação lenta.</span>
          </div>
          <div className="sys-component__demo">
            <div className="sys-sparkle-grid">
              <div className="sys-sparkle-cell sys-sparkle-cell--ink">
                <span className="sys-sparkle-cell__caption" style={{ color: "rgba(245,241,234,0.55)" }}>Hero · ink + glow 0.06</span>
                <Sparkle style={{ color: "var(--lumma-glow)", opacity: 0.6 }} />
              </div>
              <div className="sys-sparkle-cell sys-sparkle-cell--linen">
                <span className="sys-sparkle-cell__caption" style={{ color: "var(--cool-slate)" }}>Manifesto · 0.18</span>
                <Sparkle style={{ color: "var(--lumma-glow)" }} />
              </div>
              <div className="sys-sparkle-cell sys-sparkle-cell--glow">
                <span className="sys-sparkle-cell__caption" style={{ color: "var(--deep-ink)" }}>CTA · ink 0.14</span>
                <Sparkle style={{ color: "var(--deep-ink)", opacity: 0.14 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · Badge */}
      <section className="sys-section" id="badge">
        <header className="sys-section__head">
          <span className="sys-section__num">07</span>
          <h2 className="sys-section__title">Badge</h2>
        </header>
        <div className="sys-showcase">
          <div className="sys-showcase__label">
            <span className="sys-showcase__name">Variantes</span>
            <span className="sys-showcase__note">Pill com 4 tons. Glow só onde a marca está dizendo algo.</span>
          </div>
          <div className="sys-showcase__demo">
            <div className="sys-showcase__strip">
              {BADGES.map((b) => (
                <span key={b.variant} className={`badge badge--${b.variant}`}>
                  {b.dot && <span className="badge__dot" />}
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 · Cards */}
      <section className="sys-section" id="cards">
        <header className="sys-section__head">
          <span className="sys-section__num">08</span>
          <h2 className="sys-section__title">Cards</h2>
        </header>
        <div className="sys-showcase">
          <div className="sys-showcase__label">
            <span className="sys-showcase__name">Surfaces</span>
            <span className="sys-showcase__note">Container editorial. Sem sombra. Profundidade via fundo + radius.</span>
          </div>
          <div className="sys-showcase__demo">
            <div className="sys-cards-grid">
              {CARDS.map((c) => (
                <article key={c.variant} className={`card card--${c.variant}`}>
                  <span className="card__eyebrow">{c.variant}</span>
                  <h3 className="card__title">{c.title}</h3>
                  <p className="card__body">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 · Form Fields */}
      <section className="sys-section" id="fields">
        <header className="sys-section__head">
          <span className="sys-section__num">09</span>
          <h2 className="sys-section__title">Form Fields</h2>
        </header>
        <div className="sys-showcase">
          <div className="sys-showcase__label">
            <span className="sys-showcase__name">Input · estados</span>
            <span className="sys-showcase__note">Hover, focus, filled, disabled, error. Focus ring em glow.</span>
          </div>
          <div className="sys-showcase__demo">
            <div className="sys-cards-grid">
              <label className="field">
                <span className="field__label">E-mail · default</span>
                <input className="field__input" type="email" placeholder="voce@empresa.com.br" />
              </label>
              <label className="field">
                <span className="field__label">Empresa · filled</span>
                <input className="field__input" type="text" defaultValue="Rucad Engenharia" />
              </label>
              <label className="field field--error">
                <span className="field__label">Telefone · erro</span>
                <input className="field__input" type="tel" defaultValue="abc" aria-invalid="true" />
                <span className="field__help">Formato esperado: (11) 99999-9999</span>
              </label>
              <label className="field field--disabled">
                <span className="field__label">CNPJ · disabled</span>
                <input className="field__input" type="text" defaultValue="00.000.000/0000-00" disabled />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · Alerts */}
      <section className="sys-section" id="alerts">
        <header className="sys-section__head">
          <span className="sys-section__num">10</span>
          <h2 className="sys-section__title">Alerts</h2>
        </header>
        <div className="sys-showcase">
          <div className="sys-showcase__label">
            <span className="sys-showcase__name">Info · Success · Critical</span>
            <span className="sys-showcase__note">Spark só no critical. Success usa glow-50 + glow-200.</span>
          </div>
          <div className="sys-showcase__demo">
            {ALERTS.map((a) => (
              <div key={a.variant} className={`alert alert--${a.variant}`} role="status">
                <span className="alert__mark" aria-hidden>{a.mark}</span>
                <div className="alert__body">
                  <span className="alert__title">{a.title}</span>
                  <span className="alert__text">{a.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · Regras */}
      <section className="sys-section" id="regras">
        <header className="sys-section__head">
          <span className="sys-section__num">11</span>
          <h2 className="sys-section__title">Regras nomeadas</h2>
        </header>
        <div className="sys-rules">
          {NAMED_RULES.map((r) => (
            <div className="sys-rule" key={r.name}>
              <span className="sys-rule__name">{r.name}</span>
              <p className="sys-rule__body">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="sys-dolist" style={{ marginTop: 56 }}>
          <div className="sys-dolist__col do">
            <div className="sys-dolist__head">+ Fazer</div>
            <div className="sys-dolist__list">
              {DOS.map((d) => (
                <div className="sys-dolist__item" key={d}>{d}</div>
              ))}
            </div>
          </div>
          <div className="sys-dolist__col dont">
            <div className="sys-dolist__head">— Não fazer</div>
            <div className="sys-dolist__list">
              {DONTS.map((d) => (
                <div className="sys-dolist__item" key={d}>{d}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
