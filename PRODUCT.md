# Product

## Register

brand

## Users

Donos de pequenos negócios brasileiros (padaria, terapeuta, confeitaria, café, atelier, escritório de engenharia local) que precisam aparecer com a qualidade visual que o trabalho deles merece, mas não falam "design speak" e não confiam em agências grandes.

Contexto de uso: vêm pelo celular ou desktop, em momentos curtos, depois de uma indicação ou de uma busca por "estúdio de design pra meu negócio". Chegam cautelosos, com orçamento finito. O job to be done é decidir, em 2 a 3 minutos de leitura, se vale conversar com a Lumma sobre identidade, site ou comunicação.

Emoções a evocar: confiança calma, sensação de que "esse pessoal trabalha com cuidado", reconhecimento ("falam comigo, não com uma persona corporativa").

## Product Purpose

Site institucional one-page que faz pequenos negócios entenderem o que a Lumma faz, como trabalha, e marca uma conversa de 30 minutos. Não vende: convida. O sucesso é uma mensagem no WhatsApp ou e-mail pedindo a primeira conversa, vinda de alguém que se identificou com o jeito Lumma de comunicar.

O sub-projeto `/proposta/rucad` é uma ferramenta interna que exporta propostas comerciais como SVG editável para o Figma. Não faz parte da experiência do cliente.

## Brand Personality

Calma e cuidadosa, editorial e tipográfica, próxima e direta, calorosa. Quatro palavras que andam juntas: a serifa italic grande, o tom linen quente, o glow âmbar e o jeito de escrever ("a gente acredita", "sem ping-pong", "no prazo combinado") são a mesma decisão expressa em quatro lugares diferentes.

Voz: primeira pessoa do plural informal brasileira. Frases curtas, vírgula no lugar de travessão, números escritos por extenso quando soa mais humano. Confiança sem hype, autoridade sem jargão. Diz "não sei" quando é o caso.

## Anti-references

- **Agência-speak**: "soluções de comunicação visual sob medida", "potencializamos sua marca", "estratégia 360°", "entregáveis premium", "sinergia". A seção Voz do site lista isto literalmente como o que evitar.
- **SaaS corporativo frio**: navy + branco + sans grotesque, ilustrações 3D isométricas, cards iguais com ícone + título + texto repetidos.
- **Estúdio cool genérico**: monospace em tudo, dark mode default, gradientes neon, hero com métrica gigante.
- **Tech-startup energético**: emoji rocket, "vamos revolucionar", contadores animados, "trusted by" com logos cinza.
- **Cold/clinical** azul + branco saúde, ou cinza + gold finance. Lumma é quente, não institucional.

## Design Principles

1. **Pequeno não é amador.** Cada decisão visual prova que cuidado profissional cabe em escala pequena. Tipografia grande, ritmo respirado, atenção ao detalhe que costuma ser luxo de marca global.
2. **Mostrar, não declarar.** O site é o portfólio. Se a gente promete "design refinado", o próprio site precisa entregar refinamento antes da primeira palavra ser lida.
3. **Calma é uma postura, não uma desculpa.** Animações lentas, eases longos, espaço em branco generoso. Mas sem timidez: a serifa é enorme, o glow é vibrante, a opinião é clara.
4. **Português de verdade.** Nada de "Solutions for Small Business". Tudo em português brasileiro coloquial, do título do hero até o copy do botão. Quando precisa traduzir um termo técnico, traduz.
5. **Sparkle como assinatura.** O símbolo da estrela de quatro pontas aparece com intenção (hero, manifesto, CTA), nunca como decoração espalhada. Quando aparece, está dizendo "Lumma".

## Accessibility & Inclusion

WCAG 2.1 AA como mínimo.

- Contraste 4.5:1 para texto corpo, 3:1 para texto grande (≥18pt ou ≥14pt bold). Combinações críticas a verificar: `var(--soft-linen)` sobre `var(--deep-ink)` no hero ink, `var(--neutral-700)` sobre `var(--soft-linen)` no corpo, `var(--cool-slate)` sobre `var(--soft-linen)` em eyebrows e mono small.
- Foco visível em todos os elementos interativos, sem `outline: none` sem substituto.
- `prefers-reduced-motion: reduce` deve cortar as animações GSAP de entrada e o spin contínuo do sparkle do manifesto e do CTA.
- Navegação por teclado: ordem lógica, skip link opcional para `#contato`, hover states acompanham focus states.
- `lang="pt-BR"` no `<html>` (já presente). Alt em imagens (já no logo).
