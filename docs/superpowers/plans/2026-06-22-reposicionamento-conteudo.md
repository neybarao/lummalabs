# Reposicionamento de conteúdo da Lumma — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescrever o conteúdo do site da Lumma para falar com empresas de médio e grande porte, posicionando o estúdio como parceiro de design e prototipagem (não de desenvolvimento full-stack), seguindo o spec `docs/superpowers/specs/2026-06-22-reposicionamento-conteudo-design.md`.

**Architecture:** Mudança de conteúdo e estrutura de seções num site Next.js (App Router) estático. O design system visual (tokens, tipografia, animações em `globals.css`) permanece. Reusamos classes CSS existentes onde a estrutura bate (`.audience` para "Por que a Lumma", `.format` para "Método") e adicionamos CSS novo só para a seção "Experiência" (case + depoimento). Removemos as seções Manifesto e Voz.

**Tech Stack:** Next.js 15 (App Router), React, TypeScript, CSS puro (`app/globals.css`), GSAP (animações existentes, não tocadas).

**Regra de estilo (obrigatória em todo o copy):** Nada de travessão (—), seta (→) ou hífen como pausa. Usar vírgula, ponto, dois-pontos e parênteses. O ponto médio (·) em eyebrows e listas de aplicação é elemento de design existente e pode ficar.

**Sobre testes:** Este projeto não tem framework de teste unitário. A verificação de cada task é: `npm run lint`, `npm run build` (quando aplicável) e um grep que garante ausência de caracteres proibidos. A verificação visual final é feita na Task 8.

---

## File Structure

- `PRODUCT.md` — documento de produto; atualizar público, propósito e anti-referências. (Task 1)
- `app/layout.tsx` — metadata SEO, Open Graph, JSON-LD. (Task 2)
- `app/opengraph-image.tsx` — imagem OG gerada. (Task 3)
- `app/page.tsx` — arrays de dados + JSX de todas as seções. (Tasks 4, 5, 6)
- `app/mobile-nav.tsx` — links do menu mobile. (Task 5)
- `app/globals.css` — CSS novo para a seção "Experiência". (Task 7)

---

## Task 1: Atualizar PRODUCT.md

**Files:**
- Modify: `PRODUCT.md` (seções Users, Product Purpose, Anti-references)

- [ ] **Step 1: Substituir a seção `## Users`**

Trocar o bloco atual (linhas que descrevem "Donos de pequenos negócios brasileiros...") pelo texto abaixo:

```markdown
## Users

Decisores de empresas de médio e grande porte (head de produto, head de marketing, CEO, gestor de tecnologia) que precisam criar, evoluir ou destravar um produto digital e buscam um parceiro de design com visão estratégica e execução afiada.

Contexto de uso: chegam pelo desktop ou celular, geralmente depois de uma indicação ou de uma busca por estúdio de design de produto. Avaliam se a Lumma transmite maturidade e capacidade de entrega. O job to be done é decidir, em poucos minutos de leitura, se vale marcar uma conversa sobre um projeto de design.

Emoções a evocar: confiança na competência, sensação de estar diante de um parceiro estratégico (não um fornecedor de telas), reconhecimento de que a Lumma entende o problema de negócio antes de desenhar.
```

- [ ] **Step 2: Substituir a seção `## Product Purpose`**

```markdown
## Product Purpose

Site institucional one-page que posiciona a Lumma como estúdio de design e prototipagem de produtos digitais para empresas de médio e grande porte. A Lumma idealiza, desenha e prototipa (sites, interfaces de SaaS, apps, plataformas, design systems e identidade), entregando design e protótipos navegáveis. O desenvolvimento fica com o time do cliente. O sucesso é uma conversa marcada por alguém que reconheceu maturidade e clareza na comunicação.

O sub-projeto `/proposta/rucad` é uma ferramenta interna que exporta propostas comerciais como SVG editável para o Figma. Não faz parte da experiência do cliente.
```

- [ ] **Step 3: Atualizar a seção `## Anti-references`**

Manter os itens existentes, mas substituir a primeira linha (a referência a "pequenos negócios"/agência-speak) por:

```markdown
- **Agência-speak**: "soluções de comunicação visual sob medida", "potencializamos sua marca", "estratégia 360°", "entregáveis premium", "sinergia". Evitar mesmo falando com empresas maiores: autoridade vem da clareza, não do jargão.
- **Prometer o que não entregamos**: a Lumma faz design e protótipo, não desenvolvimento full-stack. Nunca prometer "construímos seu SaaS" ou "entregamos o produto no ar em produção". Posicionar como "idealizar, desenhar, prototipar".
```

- [ ] **Step 4: Verificar ausência de caracteres proibidos no texto novo**

Run: `grep -nP '\x{2014}|\x{2192}' PRODUCT.md`
Expected: nenhuma linha nova introduzida nos steps acima deve aparecer. (O arquivo pode ter travessões antigos em outras seções não tocadas; confirmar apenas que os blocos reescritos estão limpos.)

- [ ] **Step 5: Commit**

```bash
git add PRODUCT.md
git commit -m "docs: reposicionar PRODUCT.md para empresas medio/grande porte"
```

---

## Task 2: Atualizar metadata em layout.tsx

**Files:**
- Modify: `app/layout.tsx:24-123`

- [ ] **Step 1: Atualizar TITLE e DESCRIPTION**

Substituir as linhas 26-28:

```tsx
const TITLE = "Lumma · Estúdio de design e produto digital";
const DESCRIPTION =
  "Ajudamos empresas a idealizar, desenhar e prototipar produtos digitais. Sites, SaaS, aplicativos, plataformas, design systems e identidade. Do conceito ao protótipo navegável.";
```

- [ ] **Step 2: Atualizar `keywords`**

Substituir o array `keywords` (linhas 38-49) por:

```tsx
  keywords: [
    "Lumma",
    "Lumma Labs",
    "estúdio de design",
    "design de produto",
    "UX UI",
    "design de SaaS",
    "prototipagem",
    "design system",
    "websites",
    "design Brasil",
  ],
```

- [ ] **Step 3: Atualizar `hasOfferCatalog` no JSON-LD**

Substituir o array de serviços (linhas 113-118) por:

```tsx
      "Web design e sites",
      "Design de produto (UX/UI)",
      "Estratégia e estrutura de produto",
      "Prototipagem",
      "Design System",
      "Identidade e marca",
```

- [ ] **Step 4: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 5: Verificar caracteres proibidos**

Run: `grep -nP '\x{2014}|\x{2192}' app/layout.tsx`
Expected: nenhuma linha.

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: atualizar metadata SEO para novo posicionamento"
```

---

## Task 3: Atualizar opengraph-image.tsx

**Files:**
- Modify: `app/opengraph-image.tsx:5,46-61`

- [ ] **Step 1: Atualizar o `alt`**

Substituir a linha 5:

```tsx
export const alt = "Lumma · Estúdio de design e produto digital";
```

- [ ] **Step 2: Atualizar a headline da imagem**

Substituir o bloco das linhas 46-50 por:

```tsx
          <span>Design que dá</span>
          <span>
            forma à sua{" "}
            <span style={{ color: "#F2A65A", fontWeight: 100, fontVariationSettings: '"wdth" 125, "wght" 100' }}>ideia.</span>
          </span>
```

- [ ] **Step 3: Atualizar a tagline inferior**

Substituir a linha 61:

```tsx
          <span>Design · produto · prototipagem</span>
```

- [ ] **Step 4: Build (gera a imagem OG estática)**

Run: `npm run build`
Expected: build conclui sem erro; rota `opengraph-image` gerada.

- [ ] **Step 5: Verificar caracteres proibidos**

Run: `grep -nP '\x{2014}|\x{2192}' app/opengraph-image.tsx`
Expected: nenhuma linha.

- [ ] **Step 6: Commit**

```bash
git add app/opengraph-image.tsx
git commit -m "feat: atualizar imagem Open Graph para novo posicionamento"
```

---

## Task 4: Reescrever os arrays de dados em page.tsx

**Files:**
- Modify: `app/page.tsx:17-126` (arrays `services`, `formats`, `audiences`, `faqs`)

- [ ] **Step 1: Substituir o array `services` (linhas 17-48)**

```tsx
const services = [
  {
    num: "01",
    name: ["Web design", "e sites"],
    desc: "Quando seu site não comunica valor. Desenhamos e entregamos experiências digitais, do conceito ao site no ar.",
    deliverables: ["institucionais · landing pages", "one-pages"],
  },
  {
    num: "02",
    name: ["Design de", "produto"],
    desc: "Quando você tem uma ideia de produto e precisa dar forma a ela. Desenhamos a interface e a experiência de SaaS, apps e plataformas.",
    deliverables: ["SaaS · aplicativos", "plataformas · sistemas internos"],
  },
  {
    num: "03",
    name: ["Estratégia e", "estrutura"],
    desc: "Quando falta clareza sobre o que fazer. Estruturamos o produto, organizamos a arquitetura de informação e definimos prioridades.",
    deliverables: ["novos produtos · redesign", "diagnóstico de produto"],
  },
  {
    num: "04",
    name: ["Prototipagem"],
    desc: "Quando você precisa ver e testar antes de investir em desenvolvimento. Protótipos navegáveis que validam a ideia com usuários reais.",
    deliverables: ["provas de conceito · validação", "protótipo para pitch"],
  },
  {
    num: "05",
    name: ["Design", "system"],
    desc: "Quando o produto cresce sem consistência. Estruturamos sistemas que padronizam decisões e preparam o produto pra escalar.",
    deliverables: ["tokens · componentes", "documentação"],
  },
  {
    num: "06",
    name: ["Identidade", "e marca"],
    desc: "Quando o produto precisa de uma identidade à altura. Marca como sistema que sustenta o crescimento.",
    deliverables: ["identidade visual · diretrizes", "guia de aplicação"],
  },
];
```

- [ ] **Step 2: Substituir o array `formats` (linhas 50-77)**

O "Método" agora tem três itens. Renomeamos o array para refletir o conteúdo, mas mantemos a chave `formats` para não quebrar o JSX que itera sobre ele. Substituir por:

```tsx
const formats = [
  {
    label: "Formato A",
    title: "Escopo fechado",
    tagline: "Quando o escopo é claro desde o início.",
    intro: "Definimos entregáveis, prazos e critérios de validação antes de começar. Você sabe exatamente o que vai receber e quando.",
    bullets: [
      "Briefing e proposta logo na primeira semana",
      "Entregas em etapas validadas",
      "Prazo e critérios de aceite definidos",
      "Ideal para projetos com começo, meio e fim claros",
    ],
    fit: "Redesign de site, nova interface de produto, identidade, design system pontual.",
  },
  {
    label: "Formato B",
    title: "Escopo aberto",
    tagline: "Uma necessidade clara, mas sem todas as respostas.",
    intro: "Exploramos, priorizamos e ajustamos o plano conforme o projeto ganha forma. Trabalho contínuo, com direção a cada etapa.",
    bullets: [
      "Descoberta antes de definir o caminho",
      "Prioridades revistas a cada ciclo",
      "Flexível para ajustar conforme o produto evolui",
      "Ideal para quem está estruturando um produto novo",
    ],
    fit: "Novos produtos, evolução de plataforma, projetos de descoberta.",
  },
  {
    label: "Formato C",
    title: "Extensão de time",
    tagline: "Um time de design à sua disposição.",
    intro: "A Lumma entra em cena para acelerar, otimizar e manter consistência nas entregas, integrada ao seu time interno.",
    bullets: [
      "Bloco mensal de dedicação",
      "Você prioriza o que entra na fila",
      "Consistência mantida ao longo do produto",
      "Ideal para quem precisa de design recorrente",
    ],
    fit: "Times de produto sem capacidade de design, evolução contínua de interface.",
  },
];
```

- [ ] **Step 3: Substituir o array `audiences` (linhas 79-95)**

Reaproveitamos a estrutura (num, title, desc) para os três eixos de "Por que a Lumma":

```tsx
const audiences = [
  {
    num: "01",
    title: "Tempo",
    desc: "Seu time é ótimo, mas está sem tempo. Faz sentido quando falta espaço na agenda pra evoluir o produto com consistência.",
  },
  {
    num: "02",
    title: "Custo",
    desc: "Falta agilidade e assertividade? Faz sentido quando o que mais custa é demora, retrabalho e decisão sem clareza.",
  },
  {
    num: "03",
    title: "Entrega",
    desc: "Sente que as entregas poderiam ser melhores? Faz sentido quando você precisa de design bem pensado, do briefing à interface final.",
  },
];
```

- [ ] **Step 4: Substituir o array `faqs` (linhas 97-126)**

```tsx
const faqs = [
  {
    q: "Quanto tempo leva pra dar forma ao meu produto?",
    a: "Depende da complexidade, mas a gente não enrola: assim que entendemos o escopo, damos um prazo realista logo na primeira conversa.",
  },
  {
    q: "Que tipo de trabalho a Lumma faz?",
    a: "Design de sites, produtos digitais e identidade, do conceito ao protótipo navegável. Desenhamos SaaS, apps, plataformas, sites e qualquer interface que seu negócio precisar.",
  },
  {
    q: "Como funciona o processo?",
    a: "Colaborativo e dividido em etapas. Antes da mão na massa, um onboarding claro alinhando entregas e prazos. Construímos validando em cada fase antes de seguir.",
  },
  {
    q: "O que eu preciso pra começar?",
    a: "Um problema e vontade de resolvê-lo. A gente conversa, entende o contexto e entrega uma proposta direta e alinhada com o que o negócio precisa.",
  },
  {
    q: "Depois do projeto, tenho acesso ao que foi criado?",
    a: "Claro. O projeto é seu. Entregamos os arquivos editáveis, os protótipos e a documentação pra seu time seguir com independência.",
  },
  {
    q: "A Lumma trabalha como extensão do nosso time?",
    a: "Sim. Esse é um dos formatos: um time especialista de design à disposição, integrado ao seu, pra acelerar e manter consistência.",
  },
];
```

- [ ] **Step 5: Adicionar o objeto de dados do case (após o array `faqs`, antes de `export default`)**

Exemplo fictício plausível, claramente substituível pelo cliente real:

```tsx
const featuredCase = {
  client: "Norvex Logística",
  segment: "Plataforma B2B · logística",
  challenge: "Tinham um sistema interno difícil de usar, que afastava clientes novos e gerava chamados de suporte sem parar.",
  work: "Redesenhamos a experiência da plataforma e entregamos um protótipo navegável, validado com usuários reais antes do desenvolvimento.",
  result: "O time aprovou a nova direção em uma única rodada e seguiu pro desenvolvimento com clareza do que construir.",
  quote: "A Lumma entendeu nosso problema antes de desenhar qualquer tela. O protótipo deu segurança pra todo mundo seguir.",
  author: "Camila Ferraz",
  role: "Head de Produto, Norvex",
};
```

- [ ] **Step 6: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 7: Verificar caracteres proibidos**

Run: `grep -nP '\x{2014}|\x{2192}' app/page.tsx`
Expected: nenhuma linha.

- [ ] **Step 8: Commit**

```bash
git add app/page.tsx
git commit -m "feat: reescrever dados de servicos, metodo, eixos, faq e case"
```

---

## Task 5: Reescrever o JSX das seções em page.tsx

**Files:**
- Modify: `app/page.tsx` (header nav, hero, para-quem, manifesto, services, como-trabalhamos, voice, faq, cta, footer)
- Modify: `app/mobile-nav.tsx:8`

- [ ] **Step 1: Atualizar a nav do header (linhas 143-149)**

Remover os links para `#manifesto` e adicionar `#experiencia`. Substituir o `<nav>` por:

```tsx
        <nav className="site-nav" aria-label="Principal">
          <a href="#servicos">Serviços</a>
          <a href="#como-trabalhamos">Como trabalhamos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href="#contato">Conversar</a>
        </nav>
```

- [ ] **Step 2: Atualizar o hero (linhas 154-173)**

Substituir a `<section className="hero">` inteira por:

```tsx
      <section className="hero">
        <div className="hero__card">
          <Sparkle className="hero__sparkle" />
          <div className="hero__meta">001 · 2026 · Estúdio de design e produto digital · Brasil</div>
          <div className="hero__inner">
            <h1 className="hero-headline">
              Design que dá forma
              <br />
              à sua <em>ideia.</em>
            </h1>
            <p className="hero-sub">
              Ajudamos empresas a idealizar, desenhar e prototipar produtos digitais, de sites a plataformas e aplicativos. Visão estratégica, execução afiada e foco total na experiência, do conceito ao protótipo navegável.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-primary" href="#contato">Começar um projeto</a>
              <a className="btn btn-ghost-linen" href="#como-trabalhamos">Ver como trabalhamos</a>
            </div>
          </div>
        </div>
      </section>
```

- [ ] **Step 3: Transformar a seção "para-quem" em "Por que a Lumma" (linhas 175-188)**

Substituir a `<section className="para-quem section" id="para-quem">` inteira por (mantém as classes `.audience` para reaproveitar o CSS, muda id para `por-que`):

```tsx
      <section className="para-quem section" id="por-que">
        <div className="section-eyebrow">Por que nos escolher</div>
        <h2 className="section-title">Quando a Lumma faz <em>sentido.</em></h2>
        <p className="section-lead">Criar, evoluir ou destravar um produto digital. Quando isso vira um problema, a Lumma faz sentido. Simples assim.</p>
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

- [ ] **Step 4: Remover a seção Manifesto inteira (linhas 190-208)**

Apagar todo o bloco `<section className="manifesto" id="manifesto"> ... </section>` incluindo o `<Sparkle className="manifesto-sparkle" />` interno.

- [ ] **Step 5: Atualizar o eyebrow e lead da seção Serviços (linhas 211-213)**

Substituir:

```tsx
        <div className="section-eyebrow">Serviços · o que fazemos</div>
        <h2 className="section-title">O que a gente <em>faz.</em></h2>
        <p className="section-lead">Seis frentes de design que cobrem o ciclo de um produto digital, da ideia ao protótipo. Você contrata a frente que falta ou o trabalho completo.</p>
```

(O `.services-grid` que itera sobre `services` não muda; só passa a renderizar 6 itens.)

- [ ] **Step 6: Atualizar a CTA da seção Serviços (linha 239)**

Substituir o texto do botão:

```tsx
          <a className="btn btn-dark" href="#contato">Quero conversar sobre meu projeto</a>
```

- [ ] **Step 7: Atualizar título, lead e eyebrow da seção "Como trabalhamos" (linhas 244-250)**

Substituir:

```tsx
        <div className="section-eyebrow">Como trabalhamos · três formatos</div>
        <h2 className="section-title">
          Método claro,
          <br />
          <em>adaptado</em> ao seu contexto.
        </h2>
        <p className="section-lead">Menos fórmula. Mais leitura de cenário. Não existe um único jeito de trabalhar. Existe o jeito certo pro contexto do seu negócio.</p>
```

(O `.formats-grid` que itera sobre `formats` não muda; passa a renderizar 3 itens.)

- [ ] **Step 8: Atualizar a CTA da seção "Como trabalhamos" (linha 267)**

```tsx
          <a className="btn btn-dark" href="#contato">Quero conversar sobre o formato ideal</a>
```

- [ ] **Step 9: Remover a seção Voz inteira (linhas 271-300)**

Apagar todo o bloco `<section className="voice" id="voz"> ... </section>`.

- [ ] **Step 10: Inserir a seção "Experiência" no lugar da Voz removida**

No ponto onde estava a seção Voz (entre "Como trabalhamos" e "FAQ"), inserir:

```tsx
      <section className="experiencia section" id="experiencia">
        <div className="section-eyebrow">Experiência · um projeto, contado de perto</div>
        <h2 className="section-title">Não temos volume. Temos <em>profundidade.</em></h2>
        <p className="section-lead">Cada projeto recebe atenção total. Esse é o tipo de trabalho que entregamos.</p>
        <div className="case">
          <div className="case__body">
            <div className="case__meta">{featuredCase.client} · {featuredCase.segment}</div>
            <div className="case__block">
              <span className="case__label">O desafio</span>
              <p className="case__text">{featuredCase.challenge}</p>
            </div>
            <div className="case__block">
              <span className="case__label">O que fizemos</span>
              <p className="case__text">{featuredCase.work}</p>
            </div>
            <div className="case__block">
              <span className="case__label">O resultado</span>
              <p className="case__text">{featuredCase.result}</p>
            </div>
          </div>
          <blockquote className="case__quote">
            <p className="case__quote-text">&ldquo;{featuredCase.quote}&rdquo;</p>
            <footer className="case__quote-author">
              {featuredCase.author}, {featuredCase.role}
            </footer>
          </blockquote>
        </div>
      </section>
```

- [ ] **Step 11: Atualizar a CTA principal (linhas 321-330)**

Substituir o bloco `<div className="cta-block__copy"> ... </div>` por:

```tsx
          <div className="cta-block__copy">
            <div className="section-eyebrow">Vamos conversar · sem compromisso</div>
            <h2 className="cta-title">
              Pronto para o
              <br />
              <em>primeiro passo?</em>
            </h2>
            <p className="cta-sub">Não precisa ter tudo pronto. Conta o que tá travando e a gente destrava junto.</p>
          </div>
```

- [ ] **Step 12: Atualizar os links do footer (linhas 369-376)**

Substituir a `<ul>` da coluna "Estúdio" por:

```tsx
            <ul>
              <li><a href="#por-que">Por que a Lumma</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-trabalhamos">Como trabalhamos</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
```

- [ ] **Step 13: Atualizar o link do menu mobile (`app/mobile-nav.tsx:8`)**

Substituir a linha 8:

```tsx
  { href: "#experiencia", label: "Experiência" },
```

- [ ] **Step 14: Lint**

Run: `npm run lint`
Expected: sem erros (atenção a `audiences`, `formats`, `services`, `faqs`, `featuredCase` todos usados).

- [ ] **Step 15: Verificar caracteres proibidos**

Run: `grep -nP '\x{2014}|\x{2192}' app/page.tsx app/mobile-nav.tsx`
Expected: nenhuma linha.

- [ ] **Step 16: Commit**

```bash
git add app/page.tsx app/mobile-nav.tsx
git commit -m "feat: reescrever JSX das secoes, remover manifesto e voz, add experiencia"
```

---

## Task 6: Adicionar CSS da seção "Experiência" (case)

**Files:**
- Modify: `app/globals.css` (adicionar bloco novo; remover regras órfãs de manifesto/voz é opcional e fica fora de escopo para não arriscar regressões)

- [ ] **Step 1: Adicionar o bloco CSS da seção `.experiencia` / `.case`**

Inserir após o bloco `.voice` existente (em torno da linha 304, depois da última regra `.voice-col.good`):

```css
/* ---------- Experiência (case) ------------------------------ */
.case {
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 0;
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  overflow: hidden;
}
.case__body { padding: 40px; display: flex; flex-direction: column; gap: 28px; }
.case__meta { font-family: var(--font-mono); font-size: 13px; color: var(--cool-slate); }
.case__block { display: flex; flex-direction: column; gap: 8px; }
.case__label {
  font-family: var(--font-mono); font-size: 12px; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--glow-700);
}
.case__text { font-size: 16px; line-height: 1.55; color: var(--neutral-700); }
.case__quote {
  margin: 0; padding: 40px;
  background: var(--surface-inverse); color: var(--text-on-inverse);
  display: flex; flex-direction: column; justify-content: center; gap: 24px;
}
.case__quote-text {
  font-family: var(--font-display); font-weight: 500;
  font-size: clamp(20px, 2vw, 26px); line-height: 1.3; letter-spacing: -0.02em;
}
.case__quote-author { font-family: var(--font-mono); font-size: 13px; color: var(--text-inverse-3); }

@media (max-width: 860px) {
  .case { grid-template-columns: 1fr; }
  .case__body { padding: 28px; }
  .case__quote { padding: 28px; }
}
```

- [ ] **Step 2: Build (valida CSS e geração estática)**

Run: `npm run build`
Expected: build conclui sem erro.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: adicionar CSS da secao experiencia (case)"
```

---

## Task 7: Verificação final integrada

**Files:** nenhum (verificação)

- [ ] **Step 1: Lint completo**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 2: Build completo**

Run: `npm run build`
Expected: build conclui; todas as rotas geradas sem erro.

- [ ] **Step 3: Varredura final de caracteres proibidos em todo o app**

Run: `grep -rnP '\x{2014}|\x{2192}' app/*.tsx PRODUCT.md`
Expected: nenhuma linha nos arquivos modificados (page, layout, opengraph-image, mobile-nav e nos blocos reescritos de PRODUCT.md).

- [ ] **Step 4: Conferir ausência de referências às seções removidas**

Run: `grep -rn "manifesto\|#voz\|voice\|para-quem" app/page.tsx app/mobile-nav.tsx`
Expected: nenhuma referência a `manifesto`, `#voz` ou `voice` em `page.tsx`/`mobile-nav.tsx`. (A classe `para-quem` PODE permanecer, pois foi reaproveitada para a seção "Por que a Lumma" com `id="por-que"`.)

- [ ] **Step 5: Verificação visual**

Usar a skill `run` (ou `npm run dev`) para abrir o site e conferir visualmente:
- Hero com nova headline "Design que dá forma à sua ideia."
- Serviços com 6 itens, sem Instagram.
- Seção "Por que a Lumma" com Tempo/Custo/Entrega.
- Método com 3 formatos (incluindo Extensão de time).
- Seção "Experiência" renderizando o case + depoimento com o CSS novo.
- FAQ e CTA atualizados.
- Manifesto e Voz ausentes.
- Navegação (desktop e mobile) com os links corretos, âncoras funcionando.

- [ ] **Step 6: Commit final (se houver ajustes da verificação visual)**

```bash
git add -A
git commit -m "fix: ajustes da verificacao visual do reposicionamento"
```

---

## Self-Review (preenchido pelo autor do plano)

**Spec coverage:**
- Hero → Task 5 Step 2 ✓
- Serviços (6, sem Instagram) → Task 4 Step 1, Task 5 Steps 5-6 ✓
- Por que a Lumma (3 eixos, sem métricas) → Task 4 Step 3, Task 5 Step 3 ✓
- Método (3 formatos) → Task 4 Step 2, Task 5 Steps 7-8 ✓
- Experiência (case + depoimento) → Task 4 Step 5, Task 5 Step 10, Task 6 ✓
- FAQ → Task 4 Step 4 ✓
- CTA → Task 5 Step 11 ✓
- Remover Manifesto e Voz → Task 5 Steps 4, 9 ✓
- Nota de estilo (sem travessão/seta) → grep em todas as tasks ✓
- Arquivos afetados (page, layout, opengraph, PRODUCT) → Tasks 1-7 ✓

**Type consistency:** Arrays mantêm as chaves que o JSX já consome (`services`: num/name[]/desc/deliverables[]; `audiences`: num/title/desc; `formats`: label/title/tagline/intro/bullets[]/fit; `faqs`: q/a). `featuredCase` é novo e suas chaves batem com o JSX da Task 5 Step 10. Ids de âncora consistentes entre nav, footer, mobile-nav e seções (`#por-que`, `#servicos`, `#como-trabalhamos`, `#experiencia`, `#faq`, `#contato`).

**Placeholder scan:** O case usa exemplo fictício completo (não é placeholder vazio), claramente substituível. Sem TODO/TBD no plano.
