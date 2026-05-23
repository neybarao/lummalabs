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
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(50px, 9vw, 137px)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(40px, 6vw, 80px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(28px, 3vw, 40px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  manifesto:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
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

Lumma é um estúdio pequeno comunicando-se com negócios pequenos, em português brasileiro, com a calma de quem cobra hora cheia. O sistema visual prova um único ponto: pequeno não é sinônimo de amador. Sans display enorme conduz a emoção, fundo linen quente substitui branco-tela, glow âmbar carrega toda a identidade cromática e só aparece onde precisa pesar. O ritmo entre seções é generoso e sem pressa, mas a opinião é clara: a palavra emocional fecha cada headline em Archivo thin-wide (weight 100, width 125) sobre glow, sparkle de quatro pontas assina os pontos altos, mono pequeno carrega o metadado.

O sistema **rejeita** o que PRODUCT.md chama pelos nomes: agência-speak ("sinergia", "360°", "soluções premium"), SaaS corporativo frio (navy + branco + sans grotesco), estúdio cool genérico (dark mode default + mono em tudo), tech-startup energético (emoji rocket, "vamos revolucionar"), e cold/clinical médico-financeiro (azul + branco + cinza + gold). Lumma é quente, opinativa, pessoa-pra-pessoa.

**Key Characteristics**
- Linen quente como default; branco puro nunca.
- Glow âmbar (#F2A65A) como única cor saturada de identidade.
- Spark (#E94E3B) como faísca rara: alerta, line-through, contraste deliberado.
- Display sans em Archivo thin-wide conduz emoção; mono pequeno conduz metadado.
- Sparkle de quatro pontas como signo da marca, nunca decoração.
- Ritmo: muito branco entre seções, denso dentro de cada uma.
- Flat por padrão; profundidade vem de trocas de fundo (ink ↔ linen ↔ glow), não de sombra.

## 2. Colors

A paleta é **Committed**: o glow âmbar carrega a identidade. Dois fundos (linen + ink) revezam por seção como movimento editorial. Slate é tom secundário; spark só aparece como alerta raro.

### Primary
- **Lumma Glow** (`#F2A65A`): a assinatura. CTA principal, eyebrows do hero, thin-wide em ink, fundo do CTA final, sparkle. É âmbar quente de lampião, não amarelo de aviso. Cobre 30 a 60% da superfície quando ativada (drenched no bloco CTA).

### Accent Colors
- **Spark** (`#E94E3B`): vermelho-coral coral-fired, usado **apenas** para line-through na coluna "Evitamos" da seção Voice e potencialmente erros futuros. Aparece em menos de 1% da superfície. É faísca, não cor de marca.
- **Glow Deep** (`#C8853F`): thin-wide em linen, link revelacional, hover de nav-cta. Mesmo hue do glow, lightness menor, mantém o âmbar legível em texto.
- **Glow Soft** (`#F8D5A8`): hover do botão primary; versão "respirada" do glow.

### Interactive
- **Link Default** em ink: cor herdada do contexto (deep-ink em linen, soft-linen em ink). Não há cor de link saturada; todo link é o próprio texto. Quando precisa "saltar", aparece como `<em>` em Archivo thin-wide (weight 100 + width 125).
- **Link Hover**: aplica `var(--glow-700)` em fundos claros e `var(--lumma-glow)` em fundos escuros. Sem underline default; underline vira sinal de revelação proposital, não affordance.

### Neutral Scale
- **Deep Ink** (`#131211`): texto principal em linen, fundo de seções escuras (manifesto, voice, footer, hero card). Não é preto: chroma 0,005 de calor.
- **Neutral 900** (`#131211`): alias semântico do deep-ink para usos sistêmicos.
- **Neutral 700** (`#3A3A40`): texto de corpo longo em linen. Reduz fadiga vs. ink puro.
- **Cool Slate** (`#5C6677`): texto secundário (eyebrows, mono labels, agenda numbers). Único cinza com viés azulado da paleta.
- **Neutral 300** (`#C9C2B3`): borda quando precisa marcar presença, placeholder de input.
- **Neutral 200** (`#E8E2D6`): `--border-soft`, divisores padrão.

### Surface & Borders
- **Soft Linen** (`#F5F1EA`): fundo padrão de todo o sistema. Substitui branco. Quente, tátil, chroma 0,01.
- **Neutral 50** (`#FAF8F4`): fundo hover de service-row, raised cards na proposta interna.
- **Border Soft** (`#E8E2D6`): hairline divider entre service rows, process steps, agenda rows.

### Named Rules

**The Linen Default Rule.** Onde houver fundo claro, o fundo é Soft Linen (#F5F1EA). Branco puro está banido do sistema, incluindo modal, popover e PDF print. Branco-tela é o aviso de que algo escapou.

**The Glow Scarcity Rule.** Glow é o verbo da marca. Aparece nos pontos onde a marca está dizendo algo: CTA primário, thin-wide de seção, sparkle, link de revelação. Glow espalhado dilui o sistema.

**The One-Saturated-Color Rule.** A paleta tem **uma** cor saturada (glow) e **um** auxiliar de faísca (spark). Qualquer terceira saturada é drift. Se a tentação aparecer, resolva com Archivo thin-wide ou troca ink↔linen.

## 3. Typography Rules

### Font Family

**Display:** `Archivo` (variable, eixos `wght` 100–900 + `wdth` 62–125)
- Sans grotesque humanista com personalidade clara em pesos extremos
- O grau de expansão (`wdth`) é parte do sistema: thin-wide (`wght 100`, `wdth 125`) marca a palavra emocional
- Substitui a antiga serifa italic; Lumma não usa serifa display

**Body:** `Inter` (variable, opsz)
- Sans humanista neutra, leitor invisível
- Pesos 100–900, italic disponível mas não usado em corpo

**Mono / Metadata:** `JetBrains Mono` (variable)
- Mono com fricção tátil de papel datilografado
- Sem virar fantasia de terminal

**Fallback Stack:**
- Display: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- Body: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- Mono: `ui-monospace, 'SF Mono', Menlo, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|---|---|
| Display | Archivo | `clamp(50px, 9vw, 137px)` | 500 | 0.98 | -0.04em | Hero headline. Único uso. `<em>` no final em **thin-wide** (`wght 100`, `wdth 125`) glow. |
| Headline | Archivo | `clamp(40px, 6vw, 80px)` | 500 | 1.04 | -0.03em | Título de cada seção. Fecha em thin-wide glow-700. |
| CTA Title | Archivo | `clamp(48px, 7vw, 96px)` | 500 | 1.0 | -0.035em | Bloco CTA final, fundo glow. `<em>` thin-wide. |
| Manifesto | Archivo | `clamp(26px, 3vw, 40px)` | 400 | 1.35 | -0.015em | Voz contínua na seção manifesto. `<strong>` em glow, `<em>` em thin-wide. |
| Title | Archivo | `clamp(26px, 2.8vw, 36px)` | 500 | 1.1 | -0.025em | Nome de serviço, big footer line. |
| Step Number | Archivo | `clamp(72px, 8vw, 112px)` | 500 | 0.9 | -0.045em | Numerais display da seção Processo, glow. `tnum + ss01`. |
| Lead | Inter | 19px | 400 | 1.55 | 0 | Hero sub, parágrafo de abertura. `text-wrap: pretty`. |
| Body | Inter | 16px | 400 | 1.6 | 0 | Corpo geral. `.service__desc`. Linha 65–75ch. |
| Small | Inter | 14px | 400 | 1.55 | 0 | Step desc, copy de footer link. |
| Eyebrow | Inter | 11px | 600 | 1.4 | 0.16em | Kicker UPPERCASE acima de toda seção. Único por seção. |
| Mono | JetBrains Mono | 11–13px | 400 | 1.5 | 0.04–0.06em | Numeração, datas, footer chrome, agenda labels. |

### Principles

- **Thin-wide carrega emoção.** Archivo `wght 100` + `wdth 125` é reservado para a palavra que fecha a frase ("marca.", "faz.", "começa.", "iluminar?"). Em corpo de texto comum, esse corte é proibido — é gesto, não estilo.
- **Peso é o que cria hierarquia.** Não brincar com mais de duas weights por bloco. Archivo 500 vs 400 (ou 500 vs 100 wide) cria toda a tensão necessária.
- **Mono é metadado, nunca voz.** Numeração, datas, footer chrome, eyebrows técnicos. Nunca corpo, nunca CTA.
- **Eyebrow ganha o lugar.** Um eyebrow por seção, deliberado. Eyebrow repetido como decoração é AI scaffolding banido em outros sistemas; aqui é grammar de seção.
- **Línguas:** todo texto em português brasileiro coloquial. Nada de "Solutions for Small Business" nem mistura corporate.

### Named Rules

**The Thin-Wide-as-Verb Rule.** Archivo `wght 100` + `wdth 125` (com `font-variation-settings: "wdth" 125, "wght" 100`) marca a palavra que carrega a emoção. Em linen recebe glow-700; em ink recebe glow. Esse corte em parágrafo comum é proibido. Italic está **banido** do sistema — Lumma não usa Archivo italic.

**The Widow Defense Rule.** Hero sub usa `text-wrap: pretty` e `&nbsp;` entre as duas últimas palavras. Nenhuma frase importante termina com palavra solitária.

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#F2A65A`
- Text Color: `#131211`
- Font: Inter, 15px, weight 500
- Padding: `14px 22px`
- Border Radius: `12px`
- Border: `1px solid transparent`
- Box Shadow: `none`
- Hover State: Background `#F8D5A8`, micro-lift `translateY(-1px)` via GSAP
- Active State: Background `#F8D5A8`, sem scale-down (POV calma)
- Focus State: `outline: 2px solid #F2A65A; outline-offset: 4px; border-radius: 999px`
- Disabled State: Background `#C9C2B3`, color `#5C6677`, cursor `not-allowed`

**Ghost Ink Button** (CTA secundário em fundo claro)
- Background: `transparent`
- Text Color: `#131211`
- Font: Inter, 15px, weight 500
- Padding: `14px 22px`
- Border Radius: `12px`
- Border: `1px solid #3A3A40`
- Hover State: Background `#FAF8F4`

**Ghost Linen Button** (CTA secundário em fundo escuro, hero card)
- Background: `transparent`
- Text Color: `#F5F1EA`
- Border: `1px solid rgba(245, 241, 234, 0.3)`
- Hover State: Background `rgba(245, 241, 234, 0.06)`

**Dark Button** (CTA em fundo glow, bloco final)
- Background: `#131211`
- Text Color: `#F5F1EA`
- Border: none
- Hover State: Background `#3A3A40`

### Cards & Containers

**Service Row** (afford padrão pra listas editoriais)
- Layout: grid `80px 1fr 2fr 1fr` (num · nome · desc · entregáveis)
- Padding: `36px 0`
- Border bottom: `1px solid #E8E2D6`
- Background: `transparent`
- Hover State: Background `#FAF8F4`, num troca para `#C8853F`
- Mobile: colapsa para `56px 1fr`, desc/deliverables vão pra column 2

**Hero Card** (assinatura do landing)
- Background: `#131211`
- Color: `#F5F1EA`
- Border Radius: `28px`
- Padding: `clamp(48px, 8vw, 120px) clamp(32px, 6vw, 96px)`
- Min Height: `calc(100vh - 116px)`
- Layout: flex, bottom-left aligned
- Overflow: `hidden` (sparkle de fundo respeita o clip)
- Box Shadow: `none` (a moldura linen é a "sombra")
- Mobile: radius `22px`, padding `80px 24px 48px`

**Voice Grid** (composição dual evitamos/preferimos)
- Layout: grid `1fr 1fr`, gap 0
- Border: `1px solid rgba(245, 241, 234, 0.12)`
- Border Radius: `16px`
- Background: herda ink da seção pai
- Divisor central: `border-left: 1px solid rgba(245, 241, 234, 0.12)`
- Mobile: vira coluna única, divisor central vira `border-top`

### Inputs & Forms

> O site atual não tem formulários; este é o spec quando precisarem aparecer (form de contato, proposta editável).

**Text Input (Default)**
- Background: `#FAF8F4`
- Border: `1px solid #C9C2B3`
- Border Radius: `12px`
- Padding: `14px 16px`
- Font: Inter 16px weight 400, color `#131211`
- Placeholder: `#5C6667`
- Focus State: Border `1px solid #F2A65A`, box-shadow `0 0 0 3px rgba(242, 166, 90, 0.15)`, outline `none`
- Hover State: Border `1px solid #3A3A40`
- Error State: Border `1px solid #E94E3B`, helper text `#E94E3B`

**Label**
- Font: Inter 11px weight 600, letter-spacing 0.16em, UPPERCASE
- Color: `#5C6677`
- Margin Bottom: `8px`
- Display: `block`

### Navigation

**Site Header**
- Background: `#F5F1EA`
- Padding: `18px 40px` (desktop), `14px 20px` (mobile)
- Position: `relative` (não fixed — o card escuro do hero não pode ser invadido)
- Display: flex, space-between, align-items center
- Border bottom: none

**Logo**
- SVG wordmark `Logo-lumma-header.svg`
- Height: `64px` desktop, `48px` mobile

**Nav Link (padrão)**
- Font: Inter 14px weight 500
- Color: `#131211`
- Padding: 0
- Hover State: Color `#C8853F`, micro `translateY(-2px)` via GSAP

**Nav CTA (pill)**
- Background: `#131211`
- Color: `#F5F1EA`
- Font: Inter 14px weight 500
- Padding: `10px 16px`
- Border Radius: `999px`
- Hover State: Background `#C8853F`, color permanece `#F5F1EA`
- Mobile: padding `8px 14px`, font 13px; **único link de nav visível**

### Sparkle (signature component)

- Forma: SVG path 4-pontas, `currentColor`
- Tamanho: `clamp(320px, 52vw, 720px)` (hero), `380px` (manifesto), `clamp(280px, 22vw, 480px)` (CTA)
- Opacidade: hero `0.06`, manifesto `0.18`, CTA `0.14`
- Cor: glow no hero+manifesto, ink no CTA (porque o fundo é glow)
- Motion: rotação contínua. Hero 200s, manifesto 140s, CTA 160s. `prefers-reduced-motion` zera.
- **Aparece em três lugares.** Nunca como bullet, separador, ou decoração de bloco menor.

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Scale:** `4px, 8px, 12px, 16px, 24px, 32px, 40px, 64px, 80px, 96px, 120px, 140px`

**Usage Context:**
- `4px`: micro spacing, hairline rules
- `8px`: gap em flex de buttons, gap pequeno
- `12px`: gap de cta-row, gap de buttons nav
- `16px`: padding interno padrão de service row, padding lateral do hero linen frame
- `24px`: gap em two-col, padding compacto
- `32px`: gap em service grid, padding hero mobile
- `40px`: padding lateral default das sections
- `64px`: margin-top de grids dentro de seções
- `80px`: padding vertical de section mobile, margin-top do meta-strip
- `96px`: padding vertical de blocos escuros no mobile
- `120px`: padding vertical default das sections (desktop)
- `140px`: padding vertical de blocos com peso especial (manifesto, CTA final)

### Grid & Container

**Max Width:** `1200px` (section default), `1100px` (manifesto, voice), `880px` (CTA inner), `1368px` reservado pra hero card

**Column Strategy:**
- Desktop (≥881px): `repeat(12, 1fr)` em service grid, `1fr 1fr` em voice e two-col, `repeat(4, 1fr)` em process (legado; atual é flex column com numerais grandes)
- Mobile (≤880px): single column ou `1fr 1fr` para process; service vira 2-col interno

**Section Patterns:**
- Linen frame + dark hero card encaixado
- Linen padrão entre blocos
- Manifesto ink isolado entre dois linens
- Voice ink antes do CTA glow drenched
- Footer ink fecha a página

### Whitespace Philosophy

Whitespace é matéria-prima da marca, não falta de conteúdo. Lumma usa **respiro intencional** para sustentar a postura calma: entre seções, padding vertical mínimo de 80px no mobile, 120px no desktop. Dentro de seções, padding interno generoso (36px em service row, 32px em voice col). Esse respiro é o que faz pequeno parecer profissional sem precisar gritar.

Whitespace não é vazio; é a sombra que o sistema escolheu em vez de box-shadow.

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `sm` | `4px` | Focus rings, micro-elementos |
| `md` | `12px` | Buttons (todos), inputs |
| `lg` | `16px` | Voice grid, cards de informação |
| `xl` | `28px` | Hero card; o radius mais distintivo do sistema |
| `pill` | `999px` | Nav CTA, hero eyebrow dot |
| `0` | — | Footers, blocos full-bleed (sem radius) |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Base) | `box-shadow: none`; fundo sólido | Toda seção e card do site público |
| Linen Float | radius 28px + 16px de margem em linen | Hero card sobre linen frame |
| Page Float (proposta) | `box-shadow: 0 12px 32px rgba(19, 18, 17, 0.12)` | Páginas A4 da proposta interna |
| Toolbar Lift (proposta) | `box-shadow: 0 12px 32px rgba(19, 18, 17, 0.18)` | Sticky toolbar superior |
| Copy Chip (proposta) | `box-shadow: 0 4px 12px rgba(19, 18, 17, 0.12)` | Botão Copy SVG flutuante |

### Shadow Philosophy

O sistema é **flat por padrão, elevado por contraste**. No site cliente (`/`), nenhum elemento usa box-shadow. Profundidade vem de:

1. Troca de fundo entre seções (linen ↔ ink ↔ glow): cria camadas perceptuais por contraste tonal, não por sombra projetada.
2. Hero card com radius 28px + 16px de margin: o linen visível em volta funciona como "sombra negativa", sugerindo "objeto colocado sobre a página".
3. Sticky/floating elements (toolbar, copy chip) carregam sombra **só na proposta interna**, nunca no site cliente.

### Named Rules

**The No-Shadow Site Rule.** No site cliente, nenhum elemento usa box-shadow. Se a hierarquia precisa de mais profundidade, mude o fundo da seção ou aumente o radius.

**The Linen Floats Above Ink Rule.** Quando uma seção escura aparece (manifesto, hero card, voice), o radius e a margem deixam o linen aparecer em volta, criando profundidade sem sombra.

## 7. Do's and Don'ts

### Do

- **Do** usar Soft Linen (`#F5F1EA`) como fundo padrão. Branco puro está banido, incluindo modal, popover e PDF print.
- **Do** reservar Lumma Glow (`#F2A65A`) para os pontos onde a marca está dizendo algo: CTA primário, thin-wide de seção, sparkle, link de revelação.
- **Do** fechar headlines com Archivo thin-wide na palavra que carrega a emoção ("marca.", "faz.", "começa.", "iluminar?").
- **Do** escrever copy em português brasileiro coloquial. "A gente", "sem ping-pong", "no prazo combinado". Tudo, do CTA ao alt text e aria-label.
- **Do** dar tempo ao conteúdo respirar: 120 a 140px de padding vertical entre seções no desktop, 80 a 96 no mobile.
- **Do** preservar `prefers-reduced-motion: reduce` cortando todas as animações GSAP (entrada + rotação infinita dos sparkles).
- **Do** garantir `:focus-visible` em todo elemento interativo: outline 2px `#F2A65A`, offset 3–4px.
- **Do** marcar viúvas tipográficas: `text-wrap: pretty` no hero sub e `&nbsp;` antes da última palavra de frases curtas.
- **Do** usar Spark (`#E94E3B`) apenas como faísca rara: line-through na coluna "Evitamos", erros futuros. Nunca como CTA, badge, ou highlight decorativo.
- **Do** manter tamanho de toque mínimo `44px × 44px` em mobile para qualquer elemento interativo.

### Don't

- **Don't** usar "sinergia", "soluções de comunicação visual sob medida", "estratégia 360°", "potencializamos sua marca", "entregáveis premium". A seção Voice do site lista isso literalmente como anti-padrão.
- **Don't** cair em SaaS corporativo frio: navy + branco + sans grotesco + ilustração 3D isométrica + cards iguais com ícone-título-texto.
- **Don't** cair em editorial-magazine genérico (drop cap + broadsheet grid + Cormorant + italic display). Lumma usou serifa italic no passado; agora é sans grotesco + thin-wide. Italic está banido.
- **Don't** usar dark mode default ou monospace em corpo de texto. Mono é metadado, não personalidade.
- **Don't** usar `border-left` ou `border-right` >1px como acento colorido. Side-stripes estão banidos.
- **Don't** usar gradiente em texto (`background-clip: text`). Hierarquia é peso, tamanho e cor sólida.
- **Don't** introduzir uma terceira cor saturada. Se aparecer tentação, resolva com Archivo thin-wide ou troca ink↔linen.
- **Don't** usar box-shadow no site cliente. Se precisar de profundidade, mude o fundo da seção ou aumente o radius.
- **Don't** animar propriedades de layout (padding, width, margin, top/left). Use `transform` e `opacity`.
- **Don't** usar emoji rocket, "vamos revolucionar", contadores animados, "trusted by" com logos cinza, métricas-hero gigantes.
- **Don't** escrever copy em inglês corporativo. Português brasileiro coloquial em todo lugar, incluindo aria-label e alt text.
- **Don't** repetir eyebrow uppercase dentro de um mesmo bloco. Um eyebrow por seção, deliberado.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|---|
| Mobile | ≤ 880px | Single column, logo encolhe pra 48px, nav comum desaparece (só CTA fica), hero card padding `80px 24px 48px`, radius 22px |
| Desktop | ≥ 881px | Layout cheio, logo 64px, nav completa, hero card padding clamp expansivo, radius 28px |

> Lumma usa **um único breakpoint** (880px). Não há tablet intermediário; a mudança é binária e brutal. Foi escolha consciente para não fragmentar a manutenção do one-pager.

### Touch Targets

- **Minimum:** `44px × 44px` para todo elemento interativo em mobile
- **Spacing:** `8px` mínimo entre touch targets adjacentes
- **Buttons:** padding interno se mantém em `14px 22px` (já confortável em ambos)
- **Nav CTA mobile:** padding `8px 14px` mantém alvo ≥44px por causa da altura mínima do texto + padding

### Collapsing Strategy

- **Hero headline:** scaling fluido via `clamp(50px, 9vw, 137px)`; sem media query
- **Section title:** `clamp(40px, 6vw, 80px)`; sem media query
- **Service row:** desktop `80px 1fr 2fr 1fr` → mobile `56px 1fr`, desc/deliverables descem pra row 2
- **Process list:** desktop flex column com numerais clamp(80, 9vw, 128); mobile mantém estrutura, numerais menores via clamp
- **Voice grid:** desktop `1fr 1fr` com divisor vertical → mobile `1fr` com divisor horizontal
- **Footer:** desktop `2fr 1fr 1fr 1fr` → mobile `1fr` (4 colunas viram 1)
- **Site footer bottom:** desktop flex space-between → mobile column gap 12px

### Image / Asset Strategy

- Logo: SVG vetorial via `next/image`, dimensões intrínsecas 274×64, altura controlada via CSS (64 desktop, 48 mobile)
- Sparkle: SVG inline com `currentColor`; escala via `clamp()` e `transform: rotate()` para motion
- Não há imagens raster no site público (portfolio removido a pedido do owner)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Lumma Glow (`#F2A65A`) para CTA primário, thin-wide de seção, sparkle, link revelacional
- **Background Default:** Soft Linen (`#F5F1EA`); branco puro está banido
- **Background Dark:** Deep Ink (`#131211`) para hero card, manifesto, voice, footer
- **Background CTA:** Lumma Glow drenched no bloco CTA final
- **Text Linen BG:** Deep Ink (`#131211`) headers; Neutral 700 (`#3A3A40`) corpo; Cool Slate (`#5C6677`) eyebrows e mono
- **Text Dark BG:** Soft Linen (`#F5F1EA`) primário; `rgba(linen, 0.62-0.72)` secundário
- **Accent rare:** Spark (`#E94E3B`) só para line-through na coluna "Evitamos" da seção Voice
- **Hover saturação:** Glow Soft (`#F8D5A8`) para primary hover; Glow Deep (`#C8853F`) para nav-cta hover e thin-wide em linen
- **Border:** Border Soft (`#E8E2D6`) para divisores entre service rows e process steps
- **Border Dark:** `rgba(245, 241, 234, 0.12)` em fundos escuros

### Iteration Guide

1. **Color Hierarchy.** Toda decisão de cor passa pela Glow Scarcity Rule: glow só onde a marca está dizendo algo. Nunca como acento decorativo. Spark é faísca rara, jamais cor de marca.

2. **Typography Foundation.** Display é sempre Archivo (variável `wght` + `wdth`). Body é sempre Inter. Mono é sempre JetBrains Mono. Archivo `wght 100` + `wdth 125` (thin-wide) marca a palavra que carrega a emoção, nunca corpo geral. Italic está banido. Hierarquia por peso e largura, com ratio mínimo de 1.25 entre níveis.

3. **Spacing Consistency.** Escala de 4px: `4, 8, 12, 16, 24, 32, 40, 64, 80, 96, 120, 140`. Section padding vertical 120 (default) ou 140 (manifesto, CTA) no desktop, 80–96 no mobile. Service row padding `36px 0`. Hero card padding clamp expansivo. Sem valores arbitrários fora da escala.

4. **Border Radius Logic.** Inputs e buttons `12px`. Voice grid e cards informativos `16px`. Hero card `28px` (assinatura). Nav CTA e dots `999px`. Hero footer mobile e blocos full-bleed `0`. Não excede `28px` exceto para pills.

5. **Dark/Linen Contrast.** Todo par texto-fundo passa WCAG AA (4.5:1 normal, 3:1 large). Hero ink: Soft Linen sobre Deep Ink (~14:1). Linen padrão: Deep Ink ou Neutral 700 sobre Soft Linen. Eyebrow em fundo escuro usa `rgba(linen, 0.55–0.65)` para suavizar sem perder AA.

6. **Shadow Rules.** Site público: zero shadow. Profundidade vem de troca de fundo e radius. Proposta interna: três níveis de shadow definidos (`12px 32px / 0.12`, `12px 32px / 0.18`, `4px 12px / 0.12`). Nunca colored shadow, nunca blur >32px.

7. **Component States.** Todo interativo tem default, hover, focus-visible, active, disabled. Hover anima `y` (-1 a -2px) e/ou cor; focus mostra outline glow 2px offset 4px; active não diminui escala (POV calma rejeita "press in" forte); disabled usa neutral-300 background e cool-slate text.

8. **Responsive Breakpoint.** Um único breakpoint em 880px. Mudança binária: layout cheio acima, layout reduzido abaixo. Não criar breakpoints intermediários.

9. **Whitespace as Design.** Section padding mínimo 80px mobile, 120px desktop. Service row padding interno 36px vertical. Hero card padding clamp(48, 8vw, 120). Respiro é o que carrega a postura calma; reduzir é trair a voz.

10. **Motion Calmness.** GSAP `power3.out` default. Entrance distances no máximo `y: 24` em títulos, `y: 18` em conteúdo, `y: 12` em CTAs. Sparkles giram em 140s, 160s, 200s (lento). Botões fazem hover lift `y: -1` apenas. `prefers-reduced-motion: reduce` corta todas as animações GSAP via `gsap.matchMedia`.

11. **Voice Discipline.** Português brasileiro coloquial em todo texto visível, incluindo aria-label, alt, microcopy de erro. Nunca "Solutions", "Premium", "360°". A seção Voice do site lista os termos banidos literalmente; verificar antes de submeter qualquer copy.

12. **The Sparkle Says Lumma.** Sparkle aparece em três lugares fixos: hero ink (fundo), manifesto (canto inferior direito), CTA final (fundo). Nunca como bullet, separador, ou decoração de seção menor. Nunca dois sparkles na mesma seção.
