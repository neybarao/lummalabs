---
name: Lumma
description: Estúdio brasileiro de design, multimídia e comunicação.
colors:
  accent: "#50F160"
  accent-700: "#3bd44a"
  accent-dark: "#093417"
  paper: "#ffffff"
  paper-2: "#f5f4f2"
  ink: "#000000"
  ink-2: "#6b6b68"
  ink-3: "#9a9a96"
  on-dark: "#f5f5f5"
  on-dark-2: "rgba(245, 245, 245, 0.64)"
  on-dark-3: "rgba(245, 245, 245, 0.42)"
  line: "rgba(13, 13, 13, 0.12)"
  line-2: "rgba(13, 13, 13, 0.07)"
  line-dark: "rgba(245, 245, 245, 0.16)"
  line-dark-2: "rgba(245, 245, 245, 0.09)"
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
rounded:
  sm: "4px"
  lg: "8px"
  xl: "24px"
  pill: "999px"
spacing:
  pad-x: "40px"
  pad-x-mobile: "24px"
  wrap: "1280px"
  section-y: "128px"
  section-y-mobile: "88px"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-dark}"
    rounded: "var(--radius-pill)"
    padding: "14px 22px"
  button-ghost-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "var(--radius-pill)"
    padding: "14px 22px"
    border: "1px solid var(--ink)"
  button-ghost-light:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "var(--radius-pill)"
    padding: "14px 22px"
    border: "1px solid rgba(245,245,245,0.3)"
  nav-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-dark}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
---

# Design System: Lumma

## 1. Overview

Lumma usa uma paleta editorial em preto e branco com accent verde (#50F160). O fundo default e branco puro (#ffffff), o texto principal e preto, e o verde aparece nos CTAs e em pontos de destaque.

O site e um one-pager estatico em Next.js 15 com App Router (output: "export"). Animacoes via GSAP + ScrollTrigger. Fontes: Archivo (display) + Inter (body).

**Key Characteristics**
- Fundo branco (#ffffff) como default.
- Verde (#50F160) como accent de identidade, com contraste escuro (#093417) para texto sobre verde.
- Header branco sticky com logo preta e nav CTA verde.
- Hero dark (#0a0a0a) com border-radius 24px, contido em wrapper com padding lateral.
- Mark pentagonal com estrela (hero-mark.svg) no canto inferior direito do hero, girando devagar (12s).
- Radius 24px nos blocos principais (hero, why-cards, method, case).
- Flat por padrao; profundidade vem de troca de fundo, nao de sombra.

## 2. Colors

### Primary
- **Accent** (`#50F160`): verde vibrante. CTAs, icones why-card, nav CTA, focus rings.
- **Accent Dark** (`#093417`): texto sobre fundo verde. Garante contraste.
- **Accent 700** (`#3bd44a`): hover do accent.

### Surfaces
- **Paper** (`#ffffff`): fundo default do site.
- **Paper 2** (`#f5f4f2`): fundo de hover, cards internos.
- **Ink** (`#000000`): texto principal, logo.
- **Ink 2** (`#6b6b68`): texto secundario.
- **Ink 3** (`#9a9a96`): texto terciario, placeholders.

### Dark Surfaces (hero, CTA, footer)
- **On Dark** (`#f5f5f5`): texto principal em fundo escuro.
- **On Dark 2** (`rgba(245,245,245,0.64)`): texto secundario em fundo escuro.
- **On Dark 3** (`rgba(245,245,245,0.42)`): texto terciario em fundo escuro.

### Borders
- **Line** (`rgba(13,13,13,0.12)`): bordas em fundo claro.
- **Line 2** (`rgba(13,13,13,0.07)`): bordas sutis em fundo claro.
- **Line Dark** (`rgba(245,245,245,0.16)`): bordas em fundo escuro.

## 3. Typography

### Font Families
- **Display:** Archivo (variable weight/width)
- **Body:** Inter (variable)

### Hierarchy
| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display | Archivo | `clamp(50px, 9vw, 137px)` | 600 | Hero headline |
| Headline | Archivo | `clamp(40px, 6vw, 80px)` | 600 | Section titles |
| Title | Archivo | `clamp(28px, 3vw, 40px)` | 600 | Card titles |
| Lead | Inter | 19px | 400 | Hero sub, intro paragraphs |
| Body | Inter | 16px | 400 | General text |
| Small | Inter | 14px | 400 | Descriptions, footer links |
| Eyebrow | Inter | 11px | 600 | Section labels, uppercase, ls 0.16em |

## 4. Component Stylings

### Buttons

**Accent Button** (primary CTA)
- Background: `var(--accent)` (#50F160)
- Text: `var(--accent-dark)` (#093417)
- Border Radius: `var(--radius-pill)` (999px)
- Padding: `14px 22px`

**Ghost Ink Button** (secondary, light bg)
- Background: transparent
- Text: `var(--ink)`
- Border: `1px solid var(--ink)`
- Border Radius: `var(--radius-pill)`

**Ghost Light Button** (secondary, dark bg)
- Background: transparent
- Text: `var(--on-dark)`
- Border: `1px solid rgba(245,245,245,0.3)`

### Hero
- Wrapper: `padding: 0 16px` (creates inset effect)
- Background: `#0a0a0a`
- Border Radius: `24px`
- Min Height: `90vh`
- Content: aligned with header logo (no `.wrap` class, uses `padding: 120px var(--pad-x)`)
- Mark: absolute positioned bottom-right, 72x71px, CSS rotation 12s infinite
- Mobile: wrapper padding `0 var(--pad-x)`, content padding `72px var(--pad-x) var(--pad-x)`

### Navigation
- Header: `position: sticky; top: 0; background: var(--paper)` (white)
- Logo: `Logo-lumma-header.svg`, 101x32px, text fill black, sparkle fill green
- Nav links: `color: var(--ink)`, Inter 14px weight 500
- Nav CTA: `background: var(--accent); color: var(--accent-dark)`, pill shape

### Cards
- **Why Cards**: radius 24px, icon with `background: var(--accent); color: var(--accent-dark)`
- **Method Cards**: radius 24px
- **Case Cards**: media and panel both radius 24px, image matches panel height

### Why Card Icon
- Default: green background (#50F160) with dark icon (#093417)
- Border: `1px solid transparent`

## 5. Layout

### Spacing
- `--wrap: 1280px` max content width
- `--pad-x: 40px` horizontal padding (24px on mobile)
- Section padding: `128px` top/bottom desktop, `88px` mobile
- Statement padding: `120px` top, `96px` bottom (desktop); `80px` top, `64px` bottom (mobile)

### Grid
- One breakpoint at `860px`
- Desktop: multi-column grids per section
- Mobile: single column

### Border Radius
| Value | Use |
|-------|-----|
| `4px` | Default radius, focus rings |
| `8px` | Larger interactive elements |
| `24px` | Hero, why-cards, method, case blocks |
| `999px` | Buttons, nav CTA |

## 6. Responsive (860px breakpoint)

- `--pad-x` drops from 40px to 24px
- Section padding drops from 128px to 88px
- Hero wrapper: `padding: 0 var(--pad-x)` (margin from viewport)
- Single column for all grids (why, method, triptych, pillars)
- Nav hidden, hamburger menu shown
- Footer: single column, padding `64px var(--pad-x) 32px`

### Padding rules
All section vertical padding uses `padding-top` / `padding-bottom` separately (never shorthand `padding: Xpx 0`) to preserve horizontal padding from `.wrap`.

## 7. Animations

- GSAP + ScrollTrigger for scroll-triggered reveals (`.reveal` class, opacity 0 to 1, y offset)
- Hero entrance: headline, sub, cta-row animate in sequence
- Hero mark: CSS `@keyframes spin-mark` 12s linear infinite rotation
- `prefers-reduced-motion: reduce` disables all animations

## 8. LGPD Compliance

Google Analytics (G-3G49BN4MCD) must NOT load until the user explicitly clicks "Aceitar" on the cookie consent banner. No GA scripts in the HTML until consent is given.

## 9. Assets

- `Logo-lumma-header.svg`: 101x32, text black, sparkle green (#50F160), inner star dark (#093417)
- `hero-mark.svg`: 72x71, pentagon green (#50F160), inner star dark (#093417)
- `hero-starfish.jpg`: dark starfish background image for hero, optimized ~150KB
