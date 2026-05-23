# Redesign de conteúdo Lumma — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trocar todo o conteúdo textual do site one-page conforme a spec [`2026-05-23-redesign-conteudo-design.md`](../specs/2026-05-23-redesign-conteudo-design.md). Manter o tratamento visual do Hero e Serviços. Adicionar 4 seções novas (Para quem, Como trabalhamos, FAQ, CTA+formulário) com estilo funcional usando os tokens existentes. Remover seção Processo. Polimento visual fino é fora de escopo (vai virar plano separado).

**Architecture:** App Next.js 16 com static export (`output: "export"`). Conteúdo vive em `app/page.tsx` como JSX inline; estilos em `app/globals.css`; animações em `app/animations.tsx`; mobile nav em `app/mobile-nav.tsx`. Formulário de contato vira componente cliente novo `app/contact-form.tsx` que envia pro Formspree. Mantém a estrutura monolítica de página por consistência com o que existe.

**Tech Stack:** Next.js 16 (export estático), React 19, GSAP/ScrollTrigger, CSS puro (sem framework), Formspree pro form, GitHub Pages deploy via Actions.

**Decisões de conteúdo já tomadas (vindas da spec):**
- Naming: "Lumma" (sem "Labs")
- Serviços: Marca, Design system, Brand system, Site, Instagram (5, novos nomes)
- Form: Formspree (endpoint vai como placeholder; usuário troca depois de criar conta em formspree.io)
- Footer big phrase: mantém "A luz na medida certa."
- Email: mantém `oi@lummalabs.com.br`

---

## Convenções

- **Verificação**: cada task termina com `npm run build` (deve passar zero erros) + olho rápido no `npm run dev` em `http://localhost:3000`. Não usamos testes unitários — é conteúdo estático.
- **Commits**: um por task. Mensagens em inglês imperativo, curtas, no estilo do log existente (`git log --oneline`).
- **Sparkle**: o componente inline `<Sparkle />` em `page.tsx` continua sendo a única fonte. Se uma seção nova precisar do sparkle, reuso o componente local.
- **Acessibilidade**: cada nova seção precisa de heading hierarchy correto (`h2` pra título de seção), `aria-label` em controles, contraste WCAG AA.

---

## File Structure

- `app/page.tsx` — **modificar pesado**. Hero (copy), remover seção `process`, adicionar `para-quem`, `como-trabalhamos`, `faq`, atualizar `services`, `manifesto`, `cta-block` (vira form), `footer`.
- `app/globals.css` — **modificar**. Remover regras `.process` e `.step*` se não usadas em outro lugar. Adicionar blocos: `.para-quem`, `.formats`, `.faq`, `.contact-form`. Atualizar `.cta-block` pra acomodar pilares + form.
- `app/mobile-nav.tsx` — **modificar**. Atualizar array `LINKS`.
- `app/animations.tsx` — **modificar**. Remover animações de `.process-list` e `.step__num`. Adicionar reveals pra `.para-quem`, `.format`, `.faq__item`, `.pillar`.
- `app/contact-form.tsx` — **criar novo**. Client component com state de loading/success/error, submit pro Formspree.
- `next.config.ts` — sem mudanças.

---

## Task 1: Atualizar navegação (desktop + mobile)

**Files:**
- Modify: `app/page.tsx` (header nav)
- Modify: `app/mobile-nav.tsx` (LINKS array)

Spec §3 muda os itens: sai "Processo" e "Como falamos" do destaque, entram "Como trabalhamos" e "FAQ". Ordem final: Serviços · Como trabalhamos · Manifesto · FAQ · [Conversar].

- [ ] **Step 1: Atualizar nav desktop em `app/page.tsx`**

Localizar bloco `<nav className="site-nav">` (~linha 93) e substituir por:

```tsx
<nav className="site-nav" aria-label="Principal">
  <a href="#servicos">Serviços</a>
  <a href="#como-trabalhamos">Como trabalhamos</a>
  <a href="#manifesto">Manifesto</a>
  <a href="#faq">FAQ</a>
  <a className="nav-cta" href="#contato">Conversar</a>
</nav>
```

- [ ] **Step 2: Atualizar array `LINKS` em `app/mobile-nav.tsx`**

Substituir o array `LINKS` (linhas 5-10) por:

```tsx
const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#faq", label: "FAQ" },
];
```

- [ ] **Step 3: Build + dev check**

```bash
npm run build
```

Esperado: build passa sem erro. Em `npm run dev`, abrir mobile (devtools), confirmar que o menu lista os 5 itens corretos.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/mobile-nav.tsx
git commit -m "Update nav items for new section structure"
```

---

## Task 2: Atualizar Hero (headline + sub + CTAs)

**Files:**
- Modify: `app/page.tsx` (hero section)

Spec §4.1: nova headline "Design e comunicação <em>sem rodeios</em>.", novo sub, novo CTA secundário ("Ver como trabalhamos").

- [ ] **Step 1: Substituir conteúdo do `.hero__inner`**

Localizar (~linhas 107-120) e trocar por:

```tsx
<div className="hero__inner">
  <h1 className="hero-headline">
    Design e comunicação
    <br />
    <em>sem</em> rodeios.
  </h1>
  <p className="hero-sub">
    Criamos marca, design system, site e Instagram com qualidade de grande empresa — pra pequenos negócios que querem ser levados a sério desde o primeiro dia.
  </p>
  <div className="hero-cta-row">
    <a className="btn btn-primary" href="#contato">Começar um projeto</a>
    <a className="btn btn-ghost-linen" href="#como-trabalhamos">Ver como trabalhamos</a>
  </div>
</div>
```

- [ ] **Step 2: Build + dev check**

```bash
npm run build
```

No browser: confirmar que o headline aparece em duas linhas com "sem" em italic glow, e que os dois botões funcionam (scroll pra `#contato` e `#como-trabalhamos`).

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Update hero headline and copy"
```

---

## Task 3: Adicionar seção "Para quem é a Lumma"

**Files:**
- Modify: `app/page.tsx` (adiciona seção depois do Hero)
- Modify: `app/globals.css` (estilos `.para-quem`)

Spec §4.2: 3 cards numerados. Estilo funcional usando tokens existentes — cards linen sobre fundo linen, leves, sem deliverables column.

- [ ] **Step 1: Adicionar data array no topo do `app/page.tsx`** (depois do array `services`)

```tsx
const audiences = [
  {
    num: "01",
    title: "Você tá começando agora",
    desc: "Tem produto ou serviço, mas ainda não tem marca de verdade. Não quer começar com logo no Canva e site de template. Quer começar certo.",
  },
  {
    num: "02",
    title: "Você já existe, mas a marca não acompanha",
    desc: "Seu negócio cresceu mais rápido que sua identidade visual. Cada peça parece de uma empresa diferente. Tá na hora de organizar.",
  },
  {
    num: "03",
    title: "Você quer parecer maior do que é hoje",
    desc: "Sabe que o cliente decide em segundos pela aparência. Quer transmitir confiança antes mesmo de abrir a boca pra vender.",
  },
];
```

- [ ] **Step 2: Inserir markup da seção em `app/page.tsx`** logo depois do `</section>` do Hero e antes da `<section className="manifesto">`:

```tsx
<section className="para-quem section" id="para-quem">
  <div className="section-eyebrow">Para quem · três perfis que a gente atende bem</div>
  <h2 className="section-title">A Lumma faz sentido pra você <em>se…</em></h2>
  <p className="section-lead">A gente não atende todo mundo. Trabalha bem com quem se reconhece aqui.</p>
  <div className="para-quem-grid">
    {audiences.map((a) => (
      <div className="audience" key={a.num}>
        <div className="audience__num">{a.num}</div>
        <h3 className="audience__title">{a.title}</h3>
        <p className="audience__desc">{a.desc}</p>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 3: Adicionar estilos em `app/globals.css`**

Adicionar no final do arquivo (antes do media query @media):

```css
/* Para quem */
.para-quem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-16);
}
.audience {
  background: var(--neutral-50);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-10);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.audience__num {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--cool-slate);
}
.audience__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(22px, 2.2vw, 30px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--deep-ink);
}
.audience__desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-700);
  margin: 0;
}
.section-lead {
  font-size: 19px;
  line-height: 1.55;
  color: var(--neutral-700);
  max-width: 640px;
  margin-top: var(--space-6);
}
@media (max-width: 768px) {
  .para-quem-grid { grid-template-columns: 1fr; gap: var(--space-4); }
  .audience { padding: var(--space-8); }
}
```

- [ ] **Step 4: Build + dev check**

```bash
npm run build
```

No browser: confirmar a seção aparece entre Hero e Manifesto, 3 cards lado a lado em desktop, empilhados em mobile.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "Add Para quem section with three audience profiles"
```

---

## Task 4: Atualizar Serviços (5 itens, copy nova)

**Files:**
- Modify: `app/page.tsx` (data + eyebrow + sub)

Spec §4.3: 5 serviços com nomes novos (Marca, Design system, Brand system, Site, Instagram), novo eyebrow e novo subtítulo. CTA da seção no final.

- [ ] **Step 1: Substituir array `services`** (linhas 16-53) por:

```tsx
const services = [
  {
    num: "01",
    name: ["Marca"],
    desc: "Quando seu negócio precisa de uma identidade que diga quem você é antes de você falar. Não é só um logo bonito — é um sistema visual que aguenta o seu crescimento.",
    deliverables: ["logo · paleta · tipografia", "versões e variações · manual de marca"],
  },
  {
    num: "02",
    name: ["Design", "system"],
    desc: "Quando você quer parar de inventar a roda toda vez que precisa de uma peça nova. Botões, cards, banners, posts — tudo derivado das mesmas regras. Você cresce sem perder consistência.",
    deliverables: ["tokens visuais · componentes", "templates · documentação"],
  },
  {
    num: "03",
    name: ["Brand", "system"],
    desc: "Quando a marca precisa funcionar em mais lugares do que só o logo no site. Define como ela se comporta em cada contexto: tom de voz, fotografia, ilustração, copy, embalagem.",
    deliverables: ["tom de voz · pilares de conteúdo", "diretrizes visuais · guia de aplicação"],
  },
  {
    num: "04",
    name: ["Site"],
    desc: "Quando seu site não comunica o valor do que você vende. Faz o trabalho que um vendedor bom faria: explica, convence, agenda. Rápido, responsivo, fácil de você mesmo atualizar.",
    deliverables: ["institucional · landing · one-page", "design · código · publicação"],
  },
  {
    num: "05",
    name: ["Instagram"],
    desc: "Quando seu Instagram é onde o cliente decide se confia em você. Grid coerente, templates que você replica, linha editorial clara. Sua presença pronta pra começar a postar.",
    deliverables: ["grid · templates · stories", "highlights · linha editorial inicial"],
  },
];
```

- [ ] **Step 2: Atualizar eyebrow + título + subtítulo da seção Serviços** (~linhas 138-141):

```tsx
<section className="services section" id="servicos">
  <div className="section-eyebrow">Serviços · cinco entregas, bem feitas</div>
  <h2 className="section-title">O que a gente <em>faz.</em></h2>
  <p className="section-lead">Cinco entregas que cobrem tudo que um pequeno negócio precisa pra ter presença visual e comunicação consistente. Você contrata a peça que falta — ou o pacote completo.</p>
  <div className="services-grid">
    {/* ...services.map continua igual... */}
  </div>
  <div className="services-cta">
    <a className="btn btn-dark" href="#contato">Quero entender o melhor pacote pra mim</a>
  </div>
</section>
```

- [ ] **Step 3: Adicionar estilo `.services-cta` em `app/globals.css`**

```css
.services-cta {
  margin-top: var(--space-16);
  display: flex;
  justify-content: flex-start;
}
@media (max-width: 768px) {
  .services-cta { margin-top: var(--space-10); }
}
```

- [ ] **Step 4: Build + dev check**

```bash
npm run build
```

Verificar que a grid agora tem 5 cards (não 6), os nomes batem com a spec, o sub aparece abaixo do título, e o botão CTA aparece no fim.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "Update services: rename and reposition to 5 offerings"
```

---

## Task 5: Substituir Processo por "Como trabalhamos"

**Files:**
- Modify: `app/page.tsx` (remove `process` section + `steps` array, adiciona `como-trabalhamos`)
- Modify: `app/globals.css` (pode manter CSS de `.process`/`step` por enquanto — animations limpa depois; adiciona `.formats`)

Spec §4.4: dois cards lado a lado (escopo fechado vs aberto), com listas e CTA da seção.

- [ ] **Step 1: Remover o array `steps`** (linhas 55-76) de `app/page.tsx`.

- [ ] **Step 2: Adicionar novo array `formats`** no mesmo lugar (depois do `services` ou `audiences`):

```tsx
const formats = [
  {
    label: "Formato A",
    title: "Escopo fechado",
    tagline: "Pra quando você já sabe o que precisa.",
    intro: "Você chega com a lista pronta: \"preciso de marca + site + 30 posts pra Instagram\". A gente define entregas, prazos e preço antes de começar. Você sabe exatamente o que vai receber e quando.",
    bullets: [
      "Briefing e proposta em até 5 dias úteis",
      "Entregas em etapas validadas",
      "Preço fechado · prazo fechado",
      "Ideal pra projetos com começo, meio e fim claros",
    ],
    fit: "Marca nova, site institucional, abertura de Instagram, lançamento de produto.",
  },
  {
    label: "Formato B",
    title: "Escopo aberto",
    tagline: "Pra quando você precisa, mas não sabe exatamente o quê.",
    intro: "A gente conversa, entende o contexto, e vai construindo junto. Trabalho contínuo em blocos mensais. Você usa o tempo da equipe pra o que for mais urgente naquela semana.",
    bullets: [
      "Bloco mensal de horas",
      "Você prioriza o que entra na fila",
      "Flexível pra ajustar conforme o negócio muda",
      "Ideal pra quem precisa de design recorrente",
    ],
    fit: "Posts semanais, evolução de marca, materiais de venda, suporte criativo contínuo.",
  },
];
```

- [ ] **Step 3: Substituir a seção `process` inteira** (linhas ~167-185) por:

```tsx
<section className="como-trabalhamos section" id="como-trabalhamos">
  <div className="section-eyebrow">Como trabalhamos · dois formatos</div>
  <h2 className="section-title">
    Dois formatos. Você escolhe
    <br />
    o que <em>combina.</em>
  </h2>
  <p className="section-lead">Não existe um jeito certo de tocar um projeto. Existe o jeito certo pro momento do seu negócio.</p>
  <div className="formats-grid">
    {formats.map((f) => (
      <div className="format" key={f.title}>
        <div className="format__label">{f.label}</div>
        <h3 className="format__title">{f.title}</h3>
        <p className="format__tagline"><em>{f.tagline}</em></p>
        <p className="format__intro">{f.intro}</p>
        <div className="format__bullets-label">Como funciona:</div>
        <ul className="format__bullets">
          {f.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <p className="format__fit"><strong>Quando faz sentido:</strong> {f.fit}</p>
      </div>
    ))}
  </div>
  <div className="services-cta">
    <a className="btn btn-dark" href="#contato">Quero conversar sobre o formato ideal</a>
  </div>
</section>
```

- [ ] **Step 4: Adicionar estilos em `app/globals.css`**

```css
/* Como trabalhamos */
.formats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin-top: var(--space-16);
}
.format {
  background: var(--neutral-50);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-10);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.format__label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--cool-slate);
  text-transform: uppercase;
}
.format__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(24px, 2.5vw, 34px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--deep-ink);
}
.format__tagline {
  font-size: 17px;
  color: var(--glow-700);
  margin: 0;
}
.format__tagline em {
  font-style: normal;
  font-weight: 200;
  font-variation-settings: "wdth" 125, "wght" 200;
}
.format__intro {
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-700);
  margin: 0;
}
.format__bullets-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cool-slate);
  margin-top: var(--space-4);
}
.format__bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.format__bullets li {
  font-size: 15px;
  line-height: 1.5;
  color: var(--neutral-700);
  padding-left: var(--space-4);
  position: relative;
}
.format__bullets li::before {
  content: "·";
  position: absolute;
  left: 0;
  color: var(--lumma-glow);
  font-weight: 700;
}
.format__fit {
  font-size: 14px;
  color: var(--cool-slate);
  margin: var(--space-2) 0 0;
}
@media (max-width: 768px) {
  .formats-grid { grid-template-columns: 1fr; gap: var(--space-4); }
  .format { padding: var(--space-8); }
}
```

- [ ] **Step 5: Build + dev check**

```bash
npm run build
```

Verificar que a seção Processo sumiu, a nova "Como trabalhamos" aparece com 2 cards lado a lado, ancora `#como-trabalhamos` funciona pelo nav.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "Replace Processo section with Como trabalhamos (two formats)"
```

---

## Task 6: Expandir Manifesto

**Files:**
- Modify: `app/page.tsx` (section manifesto)

Spec §4.5: adicionar título de seção, expandir parágrafos, manter sparkle e assinatura.

- [ ] **Step 1: Substituir a seção `manifesto`** atual (~linhas 124-136) por:

```tsx
<section className="manifesto" id="manifesto">
  <div className="manifesto__inner">
    <div className="section-eyebrow">Manifesto</div>
    <h2 className="section-title manifesto-title">
      A Lumma existe pra quem cresce
      <br />
      no <em>detalhe.</em>
    </h2>
    <div className="manifesto-text">
      <p>A gente acredita que <em>pequeno não é sinônimo de amador.</em></p>
      <p>Que o design de um restaurante de bairro pode ser tão refinado quanto o de uma marca global. Que comunicação clara é um direito do cliente, não um luxo. Que iluminar um negócio pequeno com cuidado profissional é trabalho que <strong>merece ser feito bem.</strong></p>
      <p>A gente acredita em fazer com clareza. Em entregar o que foi combinado, no prazo combinado, com a qualidade prometida. Em explicar decisões em vez de impor. Em dizer &ldquo;não sei&rdquo; quando é o caso, e &ldquo;isso aqui pode ficar melhor&rdquo; quando vemos uma chance.</p>
      <p>A gente acredita que ousadia criativa não está em chocar — está em encontrar a solução certa, mesmo quando ela não é óbvia. Que minimalismo não é frieza, é respeito pelo olhar de quem vê. Que humanidade não é falta de rigor, é o que faz o rigor valer a pena.</p>
    </div>
    <p className="manifesto-closing"><em>Iluminar é tornar possível ver.</em></p>
    <div className="manifesto-sig">— Lumma · v. 1.0 · 2026</div>
  </div>
  <Sparkle className="manifesto-sparkle" />
</section>
```

- [ ] **Step 2: Adicionar estilos em `app/globals.css`**

```css
.manifesto-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
.manifesto-text p {
  margin: 0;
}
.manifesto-closing {
  margin-top: var(--space-10);
  font-size: clamp(22px, 2.4vw, 32px);
  line-height: 1.3;
  color: var(--glow-700);
}
.manifesto-closing em {
  font-style: normal;
  font-weight: 200;
  font-variation-settings: "wdth" 125, "wght" 200;
}
.manifesto-title {
  margin-bottom: var(--space-10);
}
```

- [ ] **Step 3: Build + dev check**

```bash
npm run build
```

Verificar: título nova "A Lumma existe pra quem cresce no detalhe", 4 parágrafos, frase de fechamento "Iluminar é tornar possível ver." em glow italic, assinatura mantida.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "Expand manifesto with four paragraphs and closing line"
```

---

## Task 7: Adicionar seção FAQ

**Files:**
- Modify: `app/page.tsx` (adiciona seção entre Voice e CTA)
- Modify: `app/globals.css` (estilos `.faq`)

Spec §4.7: 7 perguntas em accordion nativo (`<details>/<summary>`), sem JS.

- [ ] **Step 1: Adicionar array `faqs` em `app/page.tsx`** (junto com os outros arrays no topo):

```tsx
const faqs = [
  {
    q: "Quanto custa um projeto na Lumma?",
    a: "Depende do escopo. Marca completa começa em uma faixa, site em outra, pacote completo em outra. Na primeira conversa a gente entende o que você precisa e te manda uma proposta direta — sem joguinho de \"fale com nosso consultor\".",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Marca: 2 a 4 semanas. Site: 3 a 6 semanas. Pacote completo (marca + site + Instagram): 6 a 10 semanas. Sempre dependendo do escopo e da agilidade nas validações. A gente é rápido, mas não corta caminho em decisão importante.",
  },
  {
    q: "Eu preciso já ter marca pra contratar?",
    a: "Não. Se você ainda não tem, a gente começa por aí. Se já tem mas quer revisar, a gente avalia se faz sentido manter, refinar ou refazer.",
  },
  {
    q: "E se eu só quiser uma coisa (só o site, só o Instagram)?",
    a: "Pode. A gente trabalha tanto com pacote quanto com peça solta. Mas vale conversar — às vezes o que você acha que precisa não é exatamente o que vai resolver.",
  },
  {
    q: "Depois de pronto, eu mexo sozinho?",
    a: "Sim. Entregamos os arquivos editáveis, templates prontos pra você replicar, e documentação clara. Você não fica refém da gente pra postar um story.",
  },
  {
    q: "Vocês atendem fora do Brasil?",
    a: "Sim. Trabalhamos remoto, com clientes em qualquer lugar. Reuniões por chamada de vídeo, entregas digitais.",
  },
  {
    q: "Como começa?",
    a: "Você manda uma mensagem contando o que precisa. A gente marca uma conversa de 30 minutos pra entender o contexto. Em até 5 dias úteis, você recebe uma proposta. Se fechar, começamos na semana seguinte.",
  },
];
```

- [ ] **Step 2: Inserir markup da seção FAQ** entre a section `.voice` e a section `.cta-block` em `app/page.tsx`:

```tsx
<section className="faq section" id="faq">
  <div className="section-eyebrow">FAQ · perguntas que mais aparecem</div>
  <h2 className="section-title">
    Antes de começar, é normal ter <em>dúvida.</em>
  </h2>
  <p className="section-lead">As perguntas que mais aparecem — respondidas como a gente responderia numa conversa.</p>
  <div className="faq-list">
    {faqs.map((item, i) => (
      <details className="faq__item" key={i} {...(i === 0 ? { open: true } : {})}>
        <summary className="faq__q">
          <span>{item.q}</span>
          <span className="faq__icon" aria-hidden="true">+</span>
        </summary>
        <p className="faq__a">{item.a}</p>
      </details>
    ))}
  </div>
</section>
```

- [ ] **Step 3: Adicionar estilos em `app/globals.css`**

```css
/* FAQ */
.faq-list {
  margin-top: var(--space-16);
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-soft);
}
.faq__item {
  border-bottom: 1px solid var(--border-soft);
}
.faq__q {
  list-style: none;
  cursor: pointer;
  padding: var(--space-6) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-6);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(18px, 1.8vw, 22px);
  line-height: 1.3;
  color: var(--deep-ink);
  transition: color var(--dur-base) var(--ease-out);
}
.faq__q::-webkit-details-marker { display: none; }
.faq__q:hover { color: var(--glow-700); }
.faq__icon {
  flex-shrink: 0;
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 24px;
  color: var(--lumma-glow);
  transition: transform var(--dur-base) var(--ease-out);
}
.faq__item[open] .faq__icon { transform: rotate(45deg); }
.faq__a {
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-700);
  max-width: 720px;
  margin: 0 0 var(--space-6);
}
.faq__item:focus-within .faq__q {
  outline: 2px solid var(--lumma-glow);
  outline-offset: 4px;
  border-radius: 4px;
}
```

- [ ] **Step 4: Build + dev check**

```bash
npm run build
```

Verificar: seção aparece entre Voice e CTA, 7 perguntas clicáveis, primeira aberta por default, símbolo `+` vira `×` (rotacionado 45°) quando expandida. Testar por teclado: Tab pra cada pergunta, Enter abre/fecha.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "Add FAQ section with seven questions using native details"
```

---

## Task 8: Adicionar formulário de contato (componente + integração)

**Files:**
- Create: `app/contact-form.tsx`
- Modify: `app/page.tsx` (substitui o `.cta-block` atual por nova seção com pilares + form)
- Modify: `app/globals.css` (estilos `.contact-form`, `.pillars`)

Spec §4.8: bloco ink final, 3 pilares de reassurance, formulário com 5 campos. Endpoint Formspree (placeholder — usuário substitui depois de criar conta).

- [ ] **Step 1: Criar `app/contact-form.tsx`**

```tsx
"use client";

import { useState, FormEvent } from "react";

// TODO: depois de criar conta em https://formspree.io, substituir "YOUR_FORM_ID" pelo ID real.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const NEED_OPTIONS = [
  "Marca",
  "Design system",
  "Brand system",
  "Site",
  "Instagram",
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
          <span className="contact-form__label">Tipo de negócio</span>
          <input name="business" type="text" required placeholder="Padaria, terapeuta, atelier…" />
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
```

- [ ] **Step 2: Substituir a `<section className="cta-block">` atual** (~linhas 218-248) em `app/page.tsx`:

```tsx
<section className="cta-block" id="contato">
  <div className="cta-block__inner">
    <div className="cta-block__copy">
      <div className="section-eyebrow">Conversa de 30 minutos · sem compromisso</div>
      <h2 className="cta-title">
        Vamos
        <br />
        <em>começar?</em>
      </h2>
      <p className="cta-sub">Não precisa ter tudo pronto. Conta o que você precisa e a gente desenha o caminho com você.</p>
    </div>
    <Sparkle className="cta-block__sparkle" />
  </div>

  <div className="pillars">
    <div className="pillar">
      <h3 className="pillar__title">Resposta em até 24h</h3>
      <p className="pillar__desc">Mensagem recebida vira conversa marcada. Sem ficar esperando.</p>
    </div>
    <div className="pillar">
      <h3 className="pillar__title">Proposta clara em 5 dias</h3>
      <p className="pillar__desc">Você sai da primeira conversa sabendo o que vamos fazer, em quanto tempo e por quanto.</p>
    </div>
    <div className="pillar">
      <h3 className="pillar__title">Sem compromisso na conversa</h3>
      <p className="pillar__desc">A primeira chamada é pra entender se faz sentido pros dois lados. Sem cobrança, sem pressão.</p>
    </div>
  </div>

  <ContactForm />

  <div className="cta-alt">
    <span>Ou se preferir:</span>
    <a className="btn btn-ghost-ink" href="mailto:oi@lummalabs.com.br">oi@lummalabs.com.br</a>
    <a className="btn btn-ghost-ink" href="https://wa.me/5511974613761" target="_blank" rel="noopener noreferrer">WhatsApp · (11) 97461 3761</a>
  </div>
</section>
```

- [ ] **Step 3: Adicionar import no topo de `app/page.tsx`**

```tsx
import ContactForm from "./contact-form";
```

(Posiciona junto com os outros imports — depois de `MobileNav`.)

- [ ] **Step 4: Adicionar estilos em `app/globals.css`**

```css
/* CTA pillars */
.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin: var(--space-16) 0 var(--space-10);
  padding: 0 clamp(var(--space-6), 5vw, var(--space-20));
}
.pillar {
  background: rgba(245, 241, 234, 0.04);
  border: 1px solid var(--border-inverse);
  border-radius: var(--radius-md);
  padding: var(--space-6);
}
.pillar__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 16px;
  margin: 0 0 var(--space-2);
  color: var(--text-on-inverse);
}
.pillar__desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-inverse-2);
  margin: 0;
}

/* Contact form */
.contact-form {
  background: rgba(245, 241, 234, 0.04);
  border: 1px solid var(--border-inverse);
  border-radius: var(--radius-lg);
  padding: clamp(var(--space-8), 4vw, var(--space-16));
  margin: 0 clamp(var(--space-6), 5vw, var(--space-20));
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}
.contact-form__field { display: flex; flex-direction: column; gap: var(--space-2); }
.contact-form__field--full { width: 100%; }
.contact-form__label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-inverse-3);
}
.contact-form__label em { color: var(--text-inverse-3); font-style: italic; font-weight: 400; }
.contact-form input,
.contact-form select,
.contact-form textarea {
  background: transparent;
  border: 1px solid var(--border-inverse);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  color: var(--text-on-inverse);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out);
}
.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--lumma-glow);
}
.contact-form textarea { resize: vertical; min-height: 96px; }
.contact-form__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-4);
}
.contact-form__error {
  font-size: 14px;
  color: var(--spark);
  margin: 0;
}
.contact-form--success {
  text-align: left;
}
.contact-form--success h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(22px, 2.4vw, 32px);
  color: var(--text-on-inverse);
  margin: 0 0 var(--space-4);
}
.contact-form--success p {
  color: var(--text-inverse-2);
  font-size: 16px;
  margin: 0;
}
.contact-form--success a {
  color: var(--lumma-glow);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.cta-alt {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin: var(--space-10) clamp(var(--space-6), 5vw, var(--space-20)) 0;
  flex-wrap: wrap;
}
.cta-alt > span {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-inverse-3);
}

@media (max-width: 768px) {
  .pillars { grid-template-columns: 1fr; gap: var(--space-3); padding: 0 var(--space-4); }
  .contact-form { padding: var(--space-6); margin: 0 var(--space-4); }
  .contact-form__row { grid-template-columns: 1fr; }
  .cta-alt { margin: var(--space-8) var(--space-4) 0; flex-direction: column; align-items: flex-start; }
}
```

- [ ] **Step 5: Build + dev check**

```bash
npm run build
```

No browser: confirmar que aparecem 3 pilares acima do form, formulário ink com 5 campos, botão "Enviar e começar a conversa". Clicar Enviar sem preencher: validação HTML5 acende. Preencher e enviar: vai cair em erro do Formspree porque o ID é placeholder — isso é esperado nesse momento.

- [ ] **Step 6: Commit**

```bash
git add app/contact-form.tsx app/page.tsx app/globals.css
git commit -m "Add contact form with three reassurance pillars"
```

- [ ] **Step 7 (manual, fora do código): instruções pro usuário**

Depois do commit, deixar uma nota no PR ou mensagem final:

> Pra ativar o formulário em produção:
> 1. Criar conta gratuita em https://formspree.io
> 2. Criar um form, copiar o ID (algo como `xyzlbreq`)
> 3. Substituir `YOUR_FORM_ID` em `app/contact-form.tsx` linha 5
> 4. Commit e push — o GitHub Actions faz o deploy.

---

## Task 9: Atualizar footer

**Files:**
- Modify: `app/page.tsx` (footer columns)

Spec §4.9: coluna "Estúdio" precisa refletir os novos itens de nav.

- [ ] **Step 1: Atualizar a `<ul>` da coluna Estúdio** (~linhas 260-265):

```tsx
<div>
  <h4>Estúdio</h4>
  <ul>
    <li><a href="#para-quem">Para quem</a></li>
    <li><a href="#servicos">Serviços</a></li>
    <li><a href="#como-trabalhamos">Como trabalhamos</a></li>
    <li><a href="#manifesto">Manifesto</a></li>
    <li><a href="#voz">Como falamos</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</div>
```

(Demais colunas — Contato e Onde — ficam iguais. Big phrase "A luz na medida certa." permanece.)

- [ ] **Step 2: Build + dev check**

```bash
npm run build
```

Verificar links do footer levam pras seções corretas.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Update footer Estúdio column with new section links"
```

---

## Task 10: Limpar animações antigas + adicionar para seções novas

**Files:**
- Modify: `app/animations.tsx`

Remove animações de `.process-list` e `.step` (seção foi removida). Adiciona reveals discretos pras novas seções pra manter o ritmo de stagger atual.

- [ ] **Step 1: Remover bloco de animações do Processo** em `app/animations.tsx`

Remover linhas 96-111 (o bloco `gsap.from(".process-list .step", …)` e o `forEach` em `.step__num`).

- [ ] **Step 2: Adicionar reveals pras novas seções** logo depois do `.service` (~linha 94, antes do bloco `.voice-col`):

```tsx
gsap.utils.toArray<HTMLElement>(".audience").forEach((el) => {
  gsap.from(el, {
    y: 18,
    opacity: 0,
    duration: 0.7,
    ease,
    scrollTrigger: { trigger: el, start: "top 92%" },
  });
});

gsap.utils.toArray<HTMLElement>(".format").forEach((el) => {
  gsap.from(el, {
    y: 18,
    opacity: 0,
    duration: 0.7,
    ease,
    scrollTrigger: { trigger: el, start: "top 90%" },
  });
});

gsap.from(".faq__item", {
  y: 12,
  opacity: 0,
  duration: 0.6,
  stagger: 0.06,
  ease,
  scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
});

gsap.from(".pillar", {
  y: 14,
  opacity: 0,
  duration: 0.6,
  stagger: 0.08,
  ease,
  scrollTrigger: { trigger: ".pillars", start: "top 85%" },
});

gsap.from(".contact-form", {
  y: 18,
  opacity: 0,
  duration: 0.8,
  ease,
  scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
});
```

- [ ] **Step 3: Build + dev check**

```bash
npm run build
```

No browser, scrollar a página inteira: cada nova seção entra com fade-up suave. `prefers-reduced-motion` desliga tudo (testar em devtools: Rendering > Emulate CSS media feature > reduced motion).

- [ ] **Step 4: Commit**

```bash
git add app/animations.tsx
git commit -m "Update animations for new sections and remove processo"
```

---

## Task 11: Limpar CSS órfão da seção Processo

**Files:**
- Modify: `app/globals.css`

A seção Processo foi removida na Task 5 mas o CSS dela ficou pra trás. Limpar agora pra evitar lixo.

- [ ] **Step 1: Identificar todas as regras CSS de processo**

```bash
grep -n "\.process\|\.step" app/globals.css
```

- [ ] **Step 2: Remover blocos órfãos**

Remover de `app/globals.css` todas as regras que comecem com `.process`, `.step`, ou que tenham `.process` no seletor. (Não remover `.section-eyebrow`, `.section-title`, etc — esses são compartilhados.)

- [ ] **Step 3: Build + dev check**

```bash
npm run build
```

Build deve passar. Visual: nenhuma regressão (a seção `.process` não existe mais no DOM, então remover seu CSS não pode quebrar nada).

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "Remove orphan CSS from removed Processo section"
```

---

## Task 12: Verificação final + smoke test

**Files:** Nenhum.

Esta é uma verificação de fim de feature antes de mergear.

- [ ] **Step 1: Build limpo**

```bash
npm run build
```

Esperado: zero erro, zero warning relevante.

- [ ] **Step 2: Lighthouse / smoke acessibilidade manual**

```bash
npm run dev
```

Em `http://localhost:3000`:

1. **Keyboard nav:** Tab pela página inteira. Cada link/botão recebe foco visível. Esc fecha o mobile nav.
2. **Mobile (devtools, 375px):** todas as seções empilham. FAQ continua expandindo. Form é usável.
3. **prefers-reduced-motion:** ligar em devtools → animações somem mas conteúdo ainda chega.
4. **Contraste:** spot-check com Lighthouse — alvo WCAG AA.
5. **Anchors da nav:** clicar Serviços / Como trabalhamos / Manifesto / FAQ / Conversar — todos vão pra seção correta.
6. **Form:** preencher campos e enviar — deve dar erro de Formspree (esperado, ID é placeholder). Mensagem de erro aparece.

- [ ] **Step 3: Atualizar a nota de TODO do Formspree no PR/descrição**

Garantir que a instrução de trocar `YOUR_FORM_ID` está visível pro usuário antes do deploy.

- [ ] **Step 4: Sem commit nesta task** — é apenas verificação.

---

## Done criteria

1. Todas as 12 tasks completas, cada uma com seu commit.
2. `npm run build` passa.
3. As 8 seções da spec estão presentes na ordem correta (Hero, Para quem, Serviços, Como trabalhamos, Manifesto, Voz, FAQ, CTA+form, Footer).
4. Nav desktop e mobile refletem a nova ordem.
5. Formspree configurado *como código* (com placeholder claro pro usuário trocar antes do deploy).
6. Sem regressão de acessibilidade vs estado anterior.

## Fora deste plano

- **Polimento visual** das novas seções (brainstorm separado depois).
- **Bug do menu hamburger** mobile (task separada).
- **Atualizar `PRODUCT.md`/`DESIGN.md`** pra refletir o reposicionamento de serviços.
- **Migrar pra outro host** (Netlify/Vercel) — Formspree resolve o form sem precisar disso.
