---
name: Lumma
description: Estúdio brasileiro de design, multimídia e comunicação para pequenos negócios.
colors:
  glow: "#F2A65A"
  glow-50: "#FDF4E8"
  glow-200: "#F8D5A8"
  glow-700: "#C8853F"
  glow-900: "#7A4F22"
  deep-ink: "#131211"
  soft-linen: "#F5F1EA"
  cool-slate: "#5C6677"
  spark: "#E94E3B"
  neutral-50: "#FAF8F4"
  neutral-200: "#E8E2D6"
  neutral-300: "#C9C2B3"
  neutral-700: "#3A3A40"
typography:
  display:
    fontFamily: "Fraunces, 'Times New Roman', Georgia, serif"
    fontSize: "clamp(50px, 9vw, 137px)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, 'Times New Roman', Georgia, serif"
    fontSize: "clamp(40px, 6vw, 80px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Fraunces, 'Times New Roman', Georgia, serif"
    fontSize: "clamp(28px, 3vw, 40px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  manifesto:
    fontFamily: "Fraunces, 'Times New Roman', Georgia, serif"
    fontSize: "clamp(28px, 3.4vw, 44px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  eyebrow:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "12px"
  lg: "16px"
  xl: "28px"
  pill: "999px"
spacing:
  hairline: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-y: "120px"
  section-y-dense: "140px"
components:
  button-primary:
    backgroundColor: "{colors.glow}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.glow-200}"
    textColor: "{colors.deep-ink}"
  button-ghost-ink:
    backgroundColor: "transparent"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-ghost-linen:
    backgroundColor: "transparent"
    textColor: "{colors.soft-linen}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-dark:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.soft-linen}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  nav-cta:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.soft-linen}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  nav-cta-hover:
    backgroundColor: "{colors.glow-700}"
    textColor: "{colors.soft-linen}"
---

# Design System: Lumma

## 1. Overview

**Creative North Star: "A luz na medida certa."**

Lumma é um estúdio pequeno comunicando-se com negócios pequenos, em português brasileiro, com a calma de quem cobra hora cheia. Cada decisão visual prova um único ponto: pequeno não é amador. A serifa display é enorme. O fundo é linen quente, nunca branco-tela. O glow âmbar carrega 100% do peso de identidade e só aparece onde precisa pesar. O ritmo entre seções é generoso, sem pressa, sem hype. Tudo o que está aqui foi escolhido por nome (Fraunces, Inter, JetBrains Mono) e por intenção (italic para emoção, mono para metadado, glow para verbo).

O sistema rejeita o que PRODUCT.md chamou pelos nomes: agência-speak ("sinergia", "360°", "soluções premium"), SaaS corporativo frio (navy + branco + sans grotesco), estúdio cool genérico (dark mode + monospace em tudo), tech-startup energético (emoji rocket, "vamos revolucionar"), e cold/clinical médico-financeiro (azul + branco + cinza + gold). Lumma é quente, opinativa, pessoa-pra-pessoa.

**Key Characteristics:**
- Linen quente como default, não branco-tela.
- Glow âmbar como única assinatura cromática.
- Display serif italic conduz a emoção; mono pequeno conduz o metadado.
- Sparkle de quatro pontas como signo, nunca decoração.
- Ritmo: muito branco entre seções, condensado dentro de cada uma.

## 2. Colors

A paleta é **Committed**: o glow âmbar carrega a identidade. Dois fundos (linen + ink) revezam por seção como movimento editorial. Slate é tom secundário; spark só aparece como alerta raro.

### Primary
- **Lumma Glow** (`#F2A65A`): a assinatura. CTA principal, eyebrows do hero, italic em ink, fundo do CTA final, sparkle. É o âmbar quente de luz de lampião, não amarelo de aviso.

### Secondary
- **Glow Deep** (`#C8853F`): italic em linen, hover de CTA, link sublinhado conceitual. Mesmo hue, lightness menor, mantém o âmbar mesmo em texto pequeno.
- **Glow Soft** (`#F8D5A8`): hover do botão primary; uma versão "respirada" do glow.

### Tertiary
- **Spark** (`#E94E3B`): vermelho-coral usado **só** para `voice-col--bad` (line-through nas frases que evitamos) e potencialmente erros. Aparece menos de 1% da superfície.

### Neutral
- **Deep Ink** (`#131211`): fundo das seções escuras (manifesto, voice, footer, hero card), texto principal sobre linen. Tem 0,005 de chroma de calor: é ink, não preto.
- **Soft Linen** (`#F5F1EA`): fundo padrão de toda a interface. Substitui branco. Quente, tátil, com chroma 0,01.
- **Cool Slate** (`#5C6677`): texto secundário (eyebrows, mono labels, agenda numbers). Único cinza com viés azulado da paleta: contraste suficiente para AA em mono pequeno.
- **Neutral 50** (`#FAF8F4`): fundo hover de service-row, raised cards na proposta.
- **Neutral 200** (`#E8E2D6`): border-soft padrão.
- **Neutral 300** (`#C9C2B3`): border quando precisa marcar presença.
- **Neutral 700** (`#3A3A40`): texto de corpo em linen (não usa ink puro para corpo longo; reduz fadiga).

### Named Rules

**The Linen Default Rule.** Onde houver fundo claro, o fundo é `--soft-linen` (#F5F1EA). Nunca `#fff`. Nem em modal, nem em popover, nem em PDF print. Branco-tela é o aviso de que algo escapou do sistema.

**The Glow Scarcity Rule.** O glow é o verbo da marca. Aparece em pontos onde a marca está dizendo algo: CTA primário, italic de seção, sparkle, link de revelação. Em qualquer tela com mais de 10% de superfície em glow, ou o CTA final está presente (pode), ou o sistema está vazando.

**The One-Saturated-Color Rule.** A paleta tem **uma** cor saturada (glow) e **um** auxiliar de alerta (spark). Qualquer terceira cor saturada é drift. Se a tentação aparecer, resolva com Fraunces italic ou com ink+linen.

## 3. Typography

**Display Font:** Fraunces (variable, com eixos SOFT + WONK + opsz). Fallback: Times New Roman, Georgia.
**Body Font:** Inter (variable, opsz). Fallback: system-ui.
**Label/Mono Font:** JetBrains Mono (variable). Fallback: ui-monospace, SF Mono.

**Character.** Fraunces é uma serifa de "transition" com personalidade italic forte; usada aqui em cortes display (`opsz` automático) para ganhar a tensão de letra de revista. Inter é o trabalhador silencioso para corpo. JetBrains Mono carrega o metadado (numeração, datas, footer chrome) com a fricção tátil do papel datilografado, sem virar fantasia de terminal.

> Nota de identidade: Fraunces e Inter são "reflex-reject" no impeccable/brand.md. A combinação já estava no design system Lumma antes desta sessão, é parte da identidade da marca. Identidade preservada vence o reflex-reject quando a marca já comprometeu. Trocar agora seria descontinuidade, não polish.

### Hierarchy

- **Display** (Fraunces 600, `clamp(50px, 9vw, 137px)`, line-height 0.96, letter-spacing -0.025em): só o headline do hero. `<em>` no final em italic glow.
- **Headline** (Fraunces 600, `clamp(40px, 6vw, 80px)`, 1.02, -0.018em): título de cada seção (`.section-title`). Termina em italic glow-700.
- **CTA Title** (Fraunces 500, `clamp(48px, 7vw, 96px)`, 1.0, -0.022em): bloco de CTA final, fundo glow. `<em>` 600 italic.
- **Manifesto** (Fraunces 400, `clamp(28px, 3.4vw, 44px)`, 1.25, -0.005em): peso menor que headline, mais "voz contínua" que título. `<strong>` em glow.
- **Title** (Fraunces 600, `clamp(28px, 3vw, 40px)`, 1.05, -0.01em): nome de serviço, etapa de processo, big footer.
- **Lead** (Inter 400, 19px, 1.55): hero sub, parágrafo de abertura. `text-wrap: pretty` para evitar viúvas.
- **Body** (Inter 400, 16px, 1.6): corpo geral. `.service__desc`.
- **Small** (Inter 400, 14px, 1.55): step descs, copy de footer link.
- **Eyebrow** (Inter 600, 11px, line-height 1.4, letter-spacing 0.16em, UPPERCASE): kicker acima de todo título de seção. Cool-slate em linen, rgba(linen, 0.55) em ink.
- **Mono** (JetBrains Mono 400, 11–13px, letter-spacing 0.04em–0.06em, UPPERCASE quando label): números de seção, datas, meta de rodapé, agenda da proposta.

### Named Rules

**The Italic-as-Verb Rule.** Italic Fraunces é reservada para a palavra que carrega a emoção da frase ("marca.", "faz.", "começa.", "iluminar?"). Em linen recebe `glow-700`; em ink recebe `glow`. Nunca italic em corpo de texto comum.

**The Eyebrow Earns Its Place Rule.** Toda seção tem **um** eyebrow, único, com função de kicker editorial. Não há eyebrows aninhados, eyebrows de bloco interno, ou eyebrows como decoração de card. Repetir kicker minúsculo como "AI scaffolding" é o que impeccable/brand.md proíbe; aqui o eyebrow é sistema deliberado.

**The Widow Defense Rule.** Hero sub usa `text-wrap: pretty` e `&nbsp;` entre as duas últimas palavras. Nenhuma frase do hero termina com palavra solitária.

## 4. Elevation

O sistema é **flat por padrão, elevado pelo contraste**. Não há `box-shadow` no site público. A profundidade vem de:

1. Trocas de fundo entre seções (linen ↔ ink ↔ glow) criam camadas perceptuais por contraste tonal, não por sombra.
2. O hero card escuro flutua sobre o linen via border-radius 28px + 16px de margem visível, sugerindo "objeto colocado em cima da página" sem precisar de sombra projetada.
3. Sticky/floating elements (proposal toolbar, copy button) carregam shadow só na proposta interna, nunca no site cliente.

### Shadow Vocabulary (escopo: proposta interna `/proposta/rucad`)

- **Page float** (`box-shadow: 0 12px 32px rgba(19,18,17,0.12)`): cada página A4 da proposta sobre o fundo neutral-200.
- **Toolbar lift** (`box-shadow: 0 12px 32px rgba(19,18,17,0.18)`): toolbar sticky superior da proposta.
- **Copy chip** (`box-shadow: 0 4px 12px rgba(19,18,17,0.12)`): botão Copiar SVG flutuante.

### Named Rules

**The No-Shadow Site Rule.** No site cliente (`/`), nenhum elemento usa box-shadow. Se você se vê alcançando uma sombra para criar hierarquia, pare e use bloco de cor (ink ou glow) ou cresça o radius.

**The Linen Floats Above Ink Rule.** Quando uma seção escura vem entre duas claras, o radius 28px do bloco escuro fica visível: linen aparece nas laterais e topo/base, ink aparece centrado. Esse "respiro" é a sombra do sistema.

## 5. Components

### Buttons

- **Shape:** retângulo arredondado, `border-radius: 12px`. Padding `14px 22px`. Inter 500, 15px. Inline-flex com gap 10px para ícone opcional.
- **Primary:** fundo `--lumma-glow`, texto `--deep-ink`. Único botão que carrega o glow. Hover muda fundo para `--glow-200`.
- **Ghost Ink:** transparente, texto `--deep-ink`, borda `--neutral-700`. Fundo do hover: `--neutral-50`. Para CTAs secundários em linen.
- **Ghost Linen:** transparente, texto `--soft-linen`, borda `rgba(linen, 0.3)`. Hover: `rgba(linen, 0.06)`. Para CTAs secundários em ink (hero card).
- **Dark:** fundo `--deep-ink`, texto `--soft-linen`. Hover: `--neutral-700`. Para CTAs em fundo glow (bloco final).
- **Focus:** `:focus-visible` mostra outline 2px `--lumma-glow` com offset 4px, border-radius 999px (override pill). Nunca `outline: none` sem substituto.
- **Motion:** hover/focus dispara `scale: 1.03` via GSAP (220ms, power2.out). Reduzido para zero sob `prefers-reduced-motion`.

### Nav

- **Estilo:** flex row, gap 32px no desktop. Links sem decoração, Inter 500 14px, ink.
- **Hover de link comum:** cor muda para `--glow-700`. Micro-lift de -2px via GSAP no mouseenter (não para nav-cta).
- **CTA (`.nav-cta`):** pill `border-radius: 999px`, padding `10px 16px`, fundo ink, texto linen. Hover muda fundo para `--glow-700`.
- **Mobile (≤880px):** links comuns escondem (`display: none`). Apenas logo + CTA pill permanecem visíveis. Logo encolhe para 48px. Sem hamburger; o one-pager se navega scrollando.

### Service Row

- **Shape:** linha horizontal full-width, grid `80px 1fr 2fr 1fr` (num + nome + desc + entregáveis). 1px border-bottom soft entre linhas. Padding `36px 16px`.
- **Default:** fundo transparente, num em mono cool-slate, nome em Fraunces 600.
- **Hover:** fundo `--neutral-50`, num troca para `--glow-700`. Transição só de background (220ms) — sem animar padding, sem layout shift.
- **Mobile:** colapsa para `56px 1fr`, desc + deliverables vão para column 2, padding `28px 12px`.

### Voice Grid

- **Shape:** dois cols 1:1, border 1px `rgba(linen, 0.12)`, radius 16px, divisor central de 1px.
- **Bad column:** copy line-through em `--spark` (1px de espessura), texto a 55% opacity. É deliberadamente menos legível — performa o que evitamos.
- **Good column:** copy em linen 100%, weight 500.
- **Mobile:** vira coluna única, divisor central vira border-top.

### Process Step

- **Shape:** card sem fundo. Number gigante (Fraunces 600, 96px, glow), título Inter 600 18px, descrição 14px neutral-700.
- **Grid:** 4 colunas no desktop, 2 no mobile.
- **Motion:** entrada com fade+slide y=30 em stagger 0.1s; number recebe scale 0.85 → 1 em power3.out 0.9s.

### Hero Card

- **Shape:** retângulo `--deep-ink` com `border-radius: 28px`, margem 16px nos lados/base, padding interno `clamp(48px, 8vw, 120px)`. `min-height: calc(100vh - 116px)`. Sem sombra.
- **Layout:** conteúdo ancorado bottom-left (`align-items: flex-end`, `justify-content: flex-start`).
- **Mobile:** radius 22px, padding `56px 28px`.

### Sparkle (signature component)

- SVG quatro-pontas com `currentColor`. Usado como:
  - Fundo gigante do bloco CTA final (`.cta-block__sparkle-bg`, 440×440, 8% opacity, ink, girando -360° em 100s).
  - Acento do manifesto (`.manifesto-sparkle`, 380×380, 25% opacity, glow, girando 360° em 80s).
- Sob `prefers-reduced-motion`, as rotações param.
- **The Sparkle Says Lumma Rule.** Aparece em três lugares no site (hero ink, manifesto, CTA), nunca como bullet, separador ou decoração de seção qualquer.

## 6. Do's and Don'ts

### Do:

- **Do** usar `--soft-linen` (#F5F1EA) como fundo padrão. Branco puro nunca.
- **Do** reservar o glow âmbar para os pontos onde a marca está dizendo algo (CTA, italic, sparkle, link conceitual). Glow espalhado dilui o sistema.
- **Do** fechar headlines com Fraunces italic na palavra que carrega a emoção ("marca.", "iluminar?"). Italic em parágrafo comum é proibido.
- **Do** escrever copy em português brasileiro coloquial: "a gente", "sem ping-pong", "no prazo combinado". Tudo, do CTA ao alt text.
- **Do** dar tempo ao conteúdo respirar: 120–140px de padding vertical entre seções no desktop, 80–96 no mobile.
- **Do** preservar `prefers-reduced-motion: reduce` cortando todas as animações GSAP (entrada + rotação infinita).
- **Do** garantir `:focus-visible` em todo elemento interativo. Outline 2px glow, offset 3–4px.
- **Do** marcar viúvas tipográficas: `text-wrap: pretty` no hero sub e `&nbsp;` antes da última palavra de frases curtas.

### Don't:

- **Don't** usar "sinergia", "soluções de comunicação visual sob medida", "estratégia 360°", "potencializamos sua marca", "entregáveis premium". A seção Voice do site lista isso literalmente como anti-padrão.
- **Don't** cair em SaaS corporativo frio: navy + branco + sans grotesco + ilustração 3D isométrica + cards iguais com ícone-título-texto.
- **Don't** cair em editorial-magazine genérico do impeccable/brand.md: drop cap + broadsheet grid + Cormorant. Lumma usa serifa display, mas a voz é estúdio brasileiro próximo, não Klim/Stripe-adjacent.
- **Don't** usar dark mode default ou monospace em corpo de texto. Mono é metadado, não personalidade.
- **Don't** usar `border-left` ou `border-right` >1px como acento colorido. Side-stripes são proibidos em todo o sistema.
- **Don't** usar gradiente em texto (`background-clip: text`). Hierarquia é peso e tamanho.
- **Don't** introduzir uma terceira cor saturada. Se aparecer tentação, resolva com Fraunces italic ou troca ink↔linen.
- **Don't** usar box-shadow no site cliente. Se a hierarquia precisa de mais profundidade, mude o fundo da seção ou aumente o radius.
- **Don't** animar propriedades de layout (padding, width, margin, top/left). Use `transform` e `opacity`. Service row, em particular, jamais anima padding em hover.
- **Don't** usar emoji rocket, "vamos revolucionar", contadores animados, "trusted by [logos cinza]" e métricas-hero gigantes. Não é a categoria.
- **Don't** escrever copy em inglês corporativo ("Solutions for Small Business"). Português brasileiro coloquial em todo lugar, incluindo aria-label e alt.
