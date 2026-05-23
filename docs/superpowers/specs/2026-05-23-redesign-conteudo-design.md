# Redesign do conteúdo do site Lumma — Spec

> Spec apenas de **conteúdo e estrutura**. Decisões visuais (layout das seções novas, fidelidade, motion) ficam pra um brainstorm separado depois que o conteúdo estiver fechado.

**Fonte de conteúdo:** `lumma-site-outline.md` (v1.0).
**Data:** 2026-05-23.

---

## 1. Objetivo

Trocar o conteúdo do site one-page mantendo o visual do Hero e da seção "O que a gente faz" (Serviços) — os dois pedaços que o usuário aprovou. Todas as outras seções recebem conteúdo novo, novas seções são adicionadas (Para quem, Como trabalhamos com formatos, FAQ, formulário) e algumas saem (Por que Lumma, Projetos sem portfólio).

O sucesso continua sendo o mesmo do PRODUCT.md: uma mensagem no WhatsApp/email pedindo a primeira conversa, vinda de alguém que se identificou com o jeito Lumma de comunicar.

---

## 2. Estratégia de voz

**Decisão: mistura intencional.**

- **Voz Lumma poética** (frases curtas, "a gente acredita", calorosa, editorial): Hero (sub), Manifesto, Voice section ("Como a gente fala"), CTA de fechamento, Footer.
- **Voz direta tipo Insany** (funcional, padrão "Quando X, [solução]", claro, declarativo): Para quem, Serviços, Como trabalhamos, FAQ.

A hierarquia de leitura prevista no outline funciona porque os títulos e o manifesto ficam poéticos (quem só rola lê a alma) e os subtítulos/bullets ficam funcionais (quem para pra entender, entende rápido).

PRODUCT.md atual continua válido pro tom Lumma. Não precisa reescrever — só vamos aplicar a voz direta nas seções funcionais sem violar a personalidade da marca.

---

## 3. Estrutura da página

Ordem final (opção B do brainstorm — funil-clássico com manifesto como pausa reflexiva):

| # | Seção | ID | Voz | Origem |
|---|---|---|---|---|
| 1 | Hero | `top` | Poética | Visual mantido, headline e sub novos |
| 2 | Para quem é a Lumma | `para-quem` | Direta | NOVA |
| 3 | Serviços (O que a gente faz) | `servicos` | Direta | Visual mantido, copy + lista de 5 novos |
| 4 | Como a gente trabalha | `como-trabalhamos` | Direta | NOVA (substitui o "Processo" atual) |
| 5 | Manifesto | `manifesto` | Poética | Copy expandido (outline traz versão mais longa) |
| 6 | Como a gente fala | `voz` | Poética | Mantida como está hoje |
| 7 | FAQ | `faq` | Direta | NOVA |
| 8 | CTA + formulário | `contato` | Poética (CTA) + funcional (form) | Expande o bloco CTA atual |
| 9 | Footer | — | Mistura | Estrutura mantida, links revisados |

**Seções removidas em relação ao site atual:** Processo (substituída por "Como trabalhamos"), bloco CTA atual (expandido).

**Seções do outline descartadas:** "Por que Lumma" (redundância com Manifesto + Para quem) e "Projetos" (sem portfólio ainda — adicionar quando tiver 2-3 cases).

**Nav (header):** Serviços · Como trabalhamos · Manifesto · FAQ · [Começar projeto]. Item "Processo" sai, "Como trabalhamos" e "FAQ" entram.

---

## 4. Conteúdo seção por seção

### 4.1 Hero

**Eyebrow/meta (canto superior direito):** `001 · 2026 · Estúdio independente · Brasil` *(mantém)*

**Headline:** Design e comunicação <em>sem rodeios.</em>
*(Italic glow no "sem".)*

**Sub:** Criamos marca, design system, site e Instagram com qualidade de grande empresa — pra pequenos negócios que querem ser levados a sério desde o primeiro dia.

**CTAs:**
- Primário: "Começar um projeto" → `#contato`
- Secundário: "Ver como trabalhamos" → `#como-trabalhamos`

---

### 4.2 Para quem é a Lumma

**Eyebrow:** `Para quem · três perfis que a gente atende bem`

**Título:** A Lumma faz sentido pra você <em>se…</em>

**Subtítulo:** A gente não atende todo mundo. Trabalha bem com quem se reconhece aqui.

**Três blocos (cards):**

| Num | Título | Descrição |
|---|---|---|
| 01 | Você tá começando agora | Tem produto ou serviço, mas ainda não tem marca de verdade. Não quer começar com logo no Canva e site de template. Quer começar certo. |
| 02 | Você já existe, mas a marca não acompanha | Seu negócio cresceu mais rápido que sua identidade visual. Cada peça parece de uma empresa diferente. Tá na hora de organizar. |
| 03 | Você quer parecer maior do que é hoje | Sabe que o cliente decide em segundos pela aparência. Quer transmitir confiança antes mesmo de abrir a boca pra vender. |

---

### 4.3 Serviços

**Eyebrow:** `Serviços · cinco entregas, bem feitas` *(antes: "seis coisas")*

**Título:** O que a gente <em>faz.</em> *(mantém)*

**Subtítulo (novo, antes não tinha):** Cinco entregas que cobrem tudo que um pequeno negócio precisa pra ter presença visual e comunicação consistente. Você contrata a peça que falta — ou o pacote completo.

**Cinco serviços** (substituem os 6 atuais — `Identidade visual / Design / Redes sociais / Websites / Aplicativos / Manual de comunicação`):

| Num | Nome | Quando | Aplicações |
|---|---|---|---|
| 01 | Marca | Quando seu negócio precisa de uma identidade que diga quem você é antes de você falar. Não é só um logo bonito — é um sistema visual que aguenta o seu crescimento. | Logo · Paleta · Tipografia · Versões e variações · Manual de marca |
| 02 | Design system | Quando você quer parar de inventar a roda toda vez que precisa de uma peça nova. Botões, cards, banners, posts — tudo derivado das mesmas regras. | Tokens visuais · Componentes · Templates · Documentação |
| 03 | Brand system | Quando a marca precisa funcionar em mais lugares do que só o logo no site. Define como ela se comporta em cada contexto: tom de voz, fotografia, ilustração, copy, embalagem. | Tom de voz · Pilares de conteúdo · Diretrizes visuais · Guia de aplicação |
| 04 | Site | Quando seu site não comunica o valor do que você vende. Faz o trabalho que um vendedor bom faria: explica, convence, agenda. | Site institucional · Landing page · One-page · Portfólio |
| 05 | Instagram | Quando seu Instagram é onde o cliente decide se confia em você. Grid coerente, templates que você replica, linha editorial clara. | Grid e templates · Posts e stories · Highlights e capa · Linha editorial inicial |

**Mudança de posicionamento implícita** (flagar pro usuário no review): saem "Aplicativos" e "Design (impressão)". Entram "Design system" e "Brand system" como serviços nomeados. Isso reposiciona a Lumma de "estúdio multidisciplinar" pra "estúdio de identidade + sistema". Confirmar antes de implementar.

**CTA da seção:** "Quero entender o melhor pacote pra mim" → `#contato`

---

### 4.4 Como a gente trabalha

**Eyebrow:** `Como trabalhamos · dois formatos`

**Título:** Dois formatos. Você escolhe o que <em>combina.</em>

**Subtítulo:** Não existe um jeito certo de tocar um projeto. Existe o jeito certo pro momento do seu negócio.

**Dois blocos lado a lado:**

**A) Escopo fechado** — *Pra quando você já sabe o que precisa.*

Você chega com a lista pronta: "preciso de marca + site + 30 posts pra Instagram". A gente define entregas, prazos e preço antes de começar. Você sabe exatamente o que vai receber e quando.

Como funciona:
- Briefing e proposta em até 5 dias úteis
- Entregas em etapas validadas
- Preço fechado · prazo fechado
- Ideal pra projetos com começo, meio e fim claros

*Quando faz sentido:* Marca nova, site institucional, abertura de Instagram, lançamento de produto.

**B) Escopo aberto** — *Pra quando você sabe que precisa, mas não sabe exatamente o quê.*

A gente conversa, entende o contexto, e vai construindo junto. Trabalho contínuo em blocos mensais. Você usa o tempo da equipe pra o que for mais urgente naquela semana.

Como funciona:
- Bloco mensal de horas
- Você prioriza o que entra na fila
- Flexível pra ajustar conforme o negócio muda
- Ideal pra quem precisa de design recorrente

*Quando faz sentido:* Posts semanais, evolução de marca, materiais de venda, suporte criativo contínuo.

**CTA da seção:** "Quero conversar sobre o formato ideal" → `#contato`

---

### 4.5 Manifesto

**Eyebrow:** `Manifesto`

**Título da seção (novo, hoje não tem):** A Lumma existe pra quem cresce <em>no detalhe.</em>

**Texto (expansão do atual, vindo do outline §7):**

A gente acredita que pequeno não é sinônimo de amador.

Que o design de um restaurante de bairro pode ser tão refinado quanto o de uma marca global. Que comunicação clara é um direito do cliente, não um luxo. Que iluminar um negócio pequeno com cuidado profissional é trabalho que merece ser feito bem.

A gente acredita em fazer com clareza. Em entregar o que foi combinado, no prazo combinado, com a qualidade prometida. Em explicar decisões em vez de impor. Em dizer "não sei" quando é o caso, e "isso aqui pode ficar melhor" quando vemos uma chance.

A gente acredita que ousadia criativa não está em chocar — está em encontrar a solução certa, mesmo quando ela não é óbvia. Que minimalismo não é frieza, é respeito pelo olhar de quem vê. Que humanidade não é falta de rigor, é o que faz o rigor valer a pena.

**Fechamento (italic, glow):** *Iluminar é tornar possível ver.*

**Assinatura:** — Lumma · v. 1.0 · 2026 *(mantém)*

---

### 4.6 Como a gente fala (Voice)

Mantida exatamente como está hoje. Eyebrow `Como a gente fala`, título `Sem jargão. Sem sinergia. Sem 360°.`, duas colunas "Evitamos / Preferimos" com os 4 itens atuais. Nada muda.

---

### 4.7 FAQ

**Eyebrow:** `FAQ · perguntas que mais aparecem`

**Título:** Antes de começar, é normal ter <em>dúvida.</em>

**Subtítulo:** As perguntas que mais aparecem — respondidas como a gente responderia numa conversa.

**Sete perguntas** (texto literal do outline, copiado pra não perder fidelidade):

1. **Quanto custa um projeto na Lumma?**
   Depende do escopo. Marca completa começa em uma faixa, site em outra, pacote completo em outra. Na primeira conversa a gente entende o que você precisa e te manda uma proposta direta — sem joguinho de "fale com nosso consultor".

2. **Em quanto tempo fica pronto?**
   Marca: 2 a 4 semanas. Site: 3 a 6 semanas. Pacote completo (marca + site + Instagram): 6 a 10 semanas. Sempre dependendo do escopo e da agilidade nas validações. A gente é rápido, mas não corta caminho em decisão importante.

3. **Eu preciso já ter marca pra contratar?**
   Não. Se você ainda não tem, a gente começa por aí. Se já tem mas quer revisar, a gente avalia se faz sentido manter, refinar ou refazer.

4. **E se eu só quiser uma coisa (só o site, só o Instagram)?**
   Pode. A gente trabalha tanto com pacote quanto com peça solta. Mas vale conversar — às vezes o que você acha que precisa não é exatamente o que vai resolver.

5. **Depois de pronto, eu mexo sozinho?**
   Sim. Entregamos os arquivos editáveis, templates prontos pra você replicar, e documentação clara. Você não fica refém da gente pra postar um story.

6. **Vocês atendem fora do Brasil?**
   Sim. Trabalhamos remoto, com clientes em qualquer lugar. Reuniões por chamada de vídeo, entregas digitais.

7. **Como começa?**
   Você manda uma mensagem contando o que precisa. A gente marca uma conversa de 30 minutos pra entender o contexto. Em até 5 dias úteis, você recebe uma proposta. Se fechar, começamos na semana seguinte.

---

### 4.8 CTA + Formulário

**Eyebrow:** `Conversa de 30 minutos · sem compromisso`

**Título:** Vamos <em>começar?</em>

**Subtítulo:** Não precisa ter tudo pronto. Conta o que você precisa e a gente desenha o caminho com você.

**Três pilares de reassurance:**

- **Resposta em até 24h.** Mensagem recebida vira conversa marcada. Sem ficar esperando.
- **Proposta clara em 5 dias.** Você sai da primeira conversa sabendo o que vamos fazer, em quanto tempo e por quanto.
- **Sem compromisso na conversa inicial.** A primeira chamada é pra entender se faz sentido pros dois lados. Sem cobrança, sem pressão.

**Formulário — campos:**

1. Nome *(text, required)*
2. Email ou WhatsApp *(text, required)*
3. Tipo de negócio *(text curto, required)*
4. O que você precisa? *(select com: Marca · Design system · Site · Instagram · Brand system · Não sei ainda · Outro)*
5. Conta um pouco mais *(textarea, opcional)*

**CTA do formulário:** Enviar e começar a conversa

**Alternativas de contato (abaixo do form, igual hoje):**
- WhatsApp: (11) 97461 3761
- Email: oi@lummalabs.com.br

---

### 4.9 Footer

Estrutura atual mantida (big phrase + 3 colunas: Estúdio · Contato · Onde + bottom bar).

**Mudanças:**
- Big phrase: manter "A luz na medida certa." *(opcional — outline sugere "Iluminar é tornar possível ver" mas isso já fica no manifesto)*
- Coluna "Estúdio" — adicionar links das seções novas: Serviços · Como trabalhamos · Manifesto · FAQ · Como falamos
- Manter contato (email + WhatsApp + site)
- Bottom: `© Lumma · 2026 · lummalabs.com.br` + `Feito com calma` *(mantém)*

---

## 5. Decisões em aberto (pedir feedback no review)

1. **"Lumma" vs "Lumma Labs".** Outline usa "Lumma Labs" no nav/footer e "Lumma" no corpo. Site atual usa só "Lumma". Padronizar pra "Lumma" (recomendo) ou adotar a diferenciação?
2. **Reposicionamento de serviços.** Saem "Aplicativos" e "Design (impressão)". Entram "Design system" e "Brand system". Confirmar que a Lumma agora se posiciona como estúdio de identidade + sistema, não como multidisciplinar com impressão e apps.
3. **Backend do formulário.** O site é static export (GitHub Pages). Opções:
   a. Formspree (gratuito até 50 envios/mês, recomendo)
   b. Manter só links pra email/WhatsApp (sem form, mais simples)
   c. Migrar pra Netlify/Vercel pra usar Forms nativos
4. **Big phrase do footer.** Manter "A luz na medida certa." ou trocar pra "Iluminar é tornar possível ver." (mais alinhada ao manifesto)?
5. **Email de contato.** Outline usa `ola@lummalabs.com` — site usa `oi@lummalabs.com.br`. Manter `oi@`?

---

## 6. Fora de escopo deste spec

- **Decisões visuais** das seções novas (Para quem, Como trabalhamos, FAQ, CTA+form) — brainstorm separado depois.
- **Bug do menu hamburger mobile** mencionado pelo usuário — task separada.
- **Implementação técnica** (componentes React, animações GSAP, responsive) — plano vem depois.
- **Adicionar seção "Projetos"** — quando tiver 2-3 cases reais, fazer brainstorm próprio.
- **Revisão do PRODUCT.md / DESIGN.md** pra refletir mudanças — task separada se necessário.

---

## 7. Critério de sucesso do redesign

1. Todas as 8 seções (+ nav + footer) presentes com o conteúdo aprovado neste spec.
2. Voz consistente por seção conforme decisão B (poética nas culturais, direta nas funcionais).
3. Headline "Design e comunicação sem rodeios." aplicada com tratamento tipográfico do Hero atual.
4. Hero e Serviços mantêm o tratamento visual atual (tipografia, ritmo, cards). Mudanças permitidas: copy, número de cards de Serviços (de 6 pra 5).
5. Formulário funcional ou (alternativa) CTAs claros pra email/WhatsApp.
6. Site continua passando WCAG AA (manter o nível atual).
