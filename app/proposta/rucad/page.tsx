"use client";

import { useRef, useState, type ReactNode } from "react";
import { elementToSVG, inlineResources } from "dom-to-svg";
import "./proposal.css";

const SPARKLE_PATH =
  "M45.7 360.4C19.8 350.8 0 327.7 0 300C0 272.3 19.8 249.2 45.7 239.6L48.3 238.7C138 209 209 138 238.7 48.3C247.7 21.1 271.4 0 300 0C328.6 0 352.3 21.1 361.3 48.3C391 138 462 209 551.8 238.7L554.3 239.6C580.2 249.2 600 272.3 600 300C600 327.7 580.2 350.8 554.3 360.4L551.8 361.3C462 391 391 462 361.3 551.7C352.3 578.9 328.6 600 300 600C271.4 600 247.7 578.9 238.7 551.7C209 462 138 391 48.3 361.3L45.7 360.4Z";

function Sparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 600" fill="currentColor" {...props}>
      <path d={SPARKLE_PATH} />
    </svg>
  );
}

function PageHead({ chapter }: { chapter: string }) {
  return (
    <div className="prop-head">
      <span className="prop-logo">
        <Sparkle />
        <span>Lumma</span>
      </span>
      <span>{chapter}</span>
    </div>
  );
}

function PageFoot({ left, page }: { left: string; page: string }) {
  return (
    <div className="prop-foot">
      <span>{left}</span>
      <span>{page}</span>
    </div>
  );
}

type CopyState = "idle" | "copying" | "ok" | "err";

function CopyButton({ targetRef }: { targetRef: React.RefObject<HTMLElement | null> }) {
  const [state, setState] = useState<CopyState>("idle");

  async function handle() {
    const node = targetRef.current;
    if (!node) return;
    try {
      setState("copying");
      const svgDoc = elementToSVG(node);
      await inlineResources(svgDoc.documentElement);
      const svgString = new XMLSerializer().serializeToString(svgDoc);

      const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
      const textBlob = new Blob([svgString], { type: "text/plain" });
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/svg+xml": svgBlob,
            "text/plain": textBlob,
          }),
        ]);
      } catch {
        await navigator.clipboard.writeText(svgString);
      }
      setState("ok");
      setTimeout(() => setState("idle"), 1500);
    } catch (err) {
      console.error(err);
      setState("err");
      setTimeout(() => setState("idle"), 2000);
    }
  }

  const label =
    state === "copying"
      ? "Copiando…"
      : state === "ok"
        ? "✓ Copiado · cole no Figma"
        : state === "err"
          ? "Erro · tentar de novo"
          : "Copiar SVG";

  return (
    <button
      className="prop-copy"
      onClick={handle}
      data-state={state}
      type="button"
    >
      {label}
    </button>
  );
}

function ProposalPage({
  ink = false,
  children,
}: {
  ink?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  return (
    <div className="prop-wrap">
      <section
        ref={ref}
        className={`prop-page${ink ? " prop-page--ink" : ""}`}
      >
        {children}
      </section>
      <CopyButton targetRef={ref} />
    </div>
  );
}

export default function RucadProposalPage() {
  return (
    <div className="prop-root">
      <div className="prop-toolbar">
        <span>Proposta · Rucad Engenharia</span>
        <span className="prop-toolbar__hint">
          clique em <strong>Copiar PNG</strong> e cole no Figma
        </span>
      </div>

      {/* PAGE 1 — COVER */}
      <ProposalPage ink>
        <Sparkle className="prop-cover-art" aria-hidden />
        <PageHead chapter="Proposta · 001 / 2026" />
        <div style={{ marginTop: "12mm", position: "relative" }}>
          <div className="prop-eyebrow">Proposta de identidade e site</div>
          <h1 className="prop-h1" style={{ fontSize: 80, lineHeight: 0.95 }}>
            Rucad
            <br />
            <em>Engenharia.</em>
          </h1>
          <p
            className="prop-lead"
            style={{ marginTop: 28, maxWidth: 360 }}
          >
            Uma identidade visual e um site que mostram a Rucad como ela é:
            técnica, próxima e confiável — sem o ruído visual que sobra no
            setor.
          </p>
        </div>
        <div className="prop-cover-meta">
          <div>
            <div className="prop-cover-meta__label">Para</div>
            <div className="prop-cover-meta__value">Rucad Engenharia</div>
          </div>
          <div>
            <div className="prop-cover-meta__label">De</div>
            <div className="prop-cover-meta__value">Lumma · Estúdio</div>
          </div>
          <div>
            <div className="prop-cover-meta__label">Data</div>
            <div className="prop-cover-meta__value">9 de maio · 2026</div>
          </div>
        </div>
      </ProposalPage>

      {/* PAGE 2 — ÍNDICE */}
      <ProposalPage>
        <PageHead chapter="Rucad · proposta 001/2026" />
        <div className="prop-eyebrow">Índice</div>
        <h2 className="prop-h1" style={{ fontSize: 56 }}>
          O que tem
          <br />
          aqui <em>dentro.</em>
        </h2>
        <div className="prop-agenda">
          {[
            ["01", "Sobre a Lumma", "p. 03"],
            ["02", "O que entendemos do seu projeto", "p. 04"],
            ["03", "Escopo do trabalho", "p. 05"],
            ["04", "Cronograma", "p. 06"],
            ["05", "Investimento", "p. 07"],
            ["06", "Próximos passos", "p. 08"],
          ].map(([num, name, page]) => (
            <div key={num} className="prop-agenda__row">
              <div className="prop-agenda__num">{num}</div>
              <div className="prop-agenda__name">{name}</div>
              <div className="prop-agenda__page">{page}</div>
            </div>
          ))}
        </div>
        <PageFoot left="Lumma · oi@lumma.studio" page="02 / 08" />
      </ProposalPage>

      {/* PAGE 3 — SOBRE */}
      <ProposalPage>
        <PageHead chapter="01 · Sobre · p. 03/08" />
        <div className="prop-eyebrow">Capítulo 01 · Sobre a Lumma</div>
        <h2 className="prop-h1" style={{ fontSize: 56 }}>
          Estúdio pequeno,
          <br />
          cuidado <em>grande.</em>
        </h2>
        <div className="prop-two-col" style={{ marginTop: 28 }}>
          <div>
            <p className="prop-lead">
              A Lumma é um estúdio de design, multimídia e comunicação.
              Trabalhamos com pequenos negócios e empreendedores que querem ser
              vistos como o que realmente são.
            </p>
            <p style={{ marginTop: 16 }}>
              Acreditamos que pequeno não é sinônimo de amador. Que comunicação
              clara é direito do cliente, não luxo. Que o design de um
              escritório de engenharia de bairro pode ser tão refinado quanto o
              de uma marca global.
            </p>
            <p>
              Trabalhamos próximo, sem intermediário, com método: conversa,
              proposta, trabalho, entrega — no prazo combinado, com a qualidade
              prometida.
            </p>
          </div>
          <div>
            <h3 className="prop-h3" style={{ marginTop: 4 }}>
              Como a gente trabalha
            </h3>
            <p>
              Sem agência: você fala direto com quem está fazendo. Sem
              ping-pong: revisões em pontos combinados.
            </p>
            <h3 className="prop-h3" style={{ marginTop: 18 }}>
              O que é importante
            </h3>
            <p>
              Cumprir o que foi combinado. Explicar decisões. Dizer “não sei”
              quando é o caso. Dizer “isso aqui pode ficar melhor” quando vemos
              uma chance.
            </p>
            <h3 className="prop-h3" style={{ marginTop: 18 }}>
              Onde já trabalhamos
            </h3>
            <p>
              Padaria, terapeuta, confeitaria, pousada, café, atelier de
              costura. Pequenos negócios reais, com gente real do outro lado.
            </p>
          </div>
        </div>
        <PageFoot left="Lumma · oi@lumma.studio" page="03 / 08" />
      </ProposalPage>

      {/* PAGE 4 — ENTENDIMENTO */}
      <ProposalPage>
        <PageHead chapter="02 · Entendimento · p. 04/08" />
        <div className="prop-eyebrow">
          Capítulo 02 · O que entendemos do projeto
        </div>
        <h2 className="prop-h1" style={{ fontSize: 56 }}>
          A Rucad merece
          <br />
          aparecer <em>melhor.</em>
        </h2>
        <div style={{ marginTop: 28 }}>
          <p className="prop-lead" style={{ maxWidth: 560 }}>
            Pelo que conversamos, a Rucad faz um trabalho técnico sério e tem
            clientes recorrentes — mas a comunicação visual ainda não conta
            essa história com a mesma clareza do serviço.
          </p>
        </div>
        <div className="prop-two-col" style={{ marginTop: 32 }}>
          <div>
            <h3 className="prop-h3">O que está bom</h3>
            <p>
              Reputação técnica consolidada · clientes voltam · time enxuto e
              próximo · entregas no prazo.
            </p>
            <h3 className="prop-h3" style={{ marginTop: 16 }}>
              O que está incomodando
            </h3>
            <p>
              Logo antiga, sem versões para diferentes usos · site
              desatualizado, lento no celular · materiais comerciais soltos,
              cada um num estilo · dificuldade em mostrar portfólio de obras.
            </p>
          </div>
          <div>
            <h3 className="prop-h3">O que vamos resolver</h3>
            <p style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--deep-ink)" }}>
                Identidade nova
              </strong>{" "}
              — calma, técnica, com personalidade. Funciona em capacete, em
              cartão e em apresentação.
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--deep-ink)" }}>
                Site institucional
              </strong>{" "}
              — claro pra quem chega, com seção de obras e formulário de
              contato.
            </p>
            <p>
              <strong style={{ color: "var(--deep-ink)" }}>
                Kit comercial
              </strong>{" "}
              — apresentação, proposta-modelo e assinatura de e-mail, todos
              conversando entre si.
            </p>
          </div>
        </div>
        <PageFoot left="Lumma · oi@lumma.studio" page="04 / 08" />
      </ProposalPage>

      {/* PAGE 5 — ESCOPO */}
      <ProposalPage>
        <PageHead chapter="03 · Escopo · p. 05/08" />
        <div className="prop-eyebrow">Capítulo 03 · Escopo</div>
        <h2 className="prop-h1" style={{ fontSize: 56 }}>
          O que está
          <br />
          na <em>mesa.</em>
        </h2>
        <div className="prop-scope-list">
          {[
            [
              "01",
              "Identidade visual",
              "Logo principal e variações · paleta · tipografia · regras de uso. Inclui aplicação em uniforme, capacete, placa de obra e cartão.",
              "5 semanas",
            ],
            [
              "02",
              "Site institucional",
              "7 páginas: home, sobre, serviços, obras (galeria), processo, blog técnico, contato. Mobile-first, fácil de atualizar, painel de admin treinado.",
              "6 semanas",
            ],
            [
              "03",
              "Kit comercial",
              "Template de apresentação institucional, modelo de proposta editável, assinatura de e-mail HTML e cartão de visita digital.",
              "2 semanas",
            ],
            [
              "04",
              "Acompanhamento pós-entrega",
              "30 dias de ajustes pequenos sem custo adicional, pra garantir que tudo está rodando bem na rotina da Rucad.",
              "— incluso",
            ],
          ].map(([num, name, desc, weeks]) => (
            <div key={num} className="prop-scope-item">
              <div className="prop-scope-item__num">{num}</div>
              <div className="prop-scope-item__name">{name}</div>
              <div className="prop-scope-item__desc">{desc}</div>
              <div className="prop-scope-item__weeks">{weeks}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 24,
            padding: "16px 20px",
            background: "var(--neutral-50)",
            borderRadius: 12,
            border: "1px solid var(--border-soft)",
          }}
        >
          <p
            style={{ margin: 0, fontSize: 11, color: "var(--neutral-700)" }}
          >
            <strong style={{ color: "var(--deep-ink)" }}>
              Fora do escopo desta proposta:
            </strong>{" "}
            redes sociais (cronograma, conteúdo, posts) · vídeo · fotografia de
            obra. Tudo isso pode entrar numa segunda fase, com proposta
            separada.
          </p>
        </div>
        <PageFoot left="Lumma · oi@lumma.studio" page="05 / 08" />
      </ProposalPage>

      {/* PAGE 6 — CRONOGRAMA */}
      <ProposalPage>
        <PageHead chapter="04 · Cronograma · p. 06/08" />
        <div className="prop-eyebrow">Capítulo 04 · Cronograma</div>
        <h2 className="prop-h1" style={{ fontSize: 56 }}>
          Oito semanas,
          <br />
          sem <em>surpresa.</em>
        </h2>
        <p className="prop-lead" style={{ marginTop: 24, maxWidth: 540 }}>
          A entrega final acontece na semana 8. Ao longo do caminho, três
          pontos de checagem com você — para olhar com calma, opinar e seguir.
        </p>
        <div className="prop-timeline">
          <div className="prop-tl-head" />
          {["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"].map((s) => (
            <div key={`h-${s}`} className="prop-tl-head">
              {s}
            </div>
          ))}

          <div className="prop-tl-row-label">Identidade</div>
          <Cell bar="glow" left={2} right={2} />
          <Cell bar="glow" />
          <Cell bar="glow" />
          <Cell bar="glow" />
          <Cell bar="glow" right="50%" />
          <Cell />
          <Cell />
          <Cell />

          <div className="prop-tl-row-label">Site</div>
          <Cell />
          <Cell />
          <Cell bar="ink" left="50%" />
          <Cell bar="ink" />
          <Cell bar="ink" />
          <Cell bar="ink" />
          <Cell bar="ink" />
          <Cell bar="ink" right="50%" />

          <div className="prop-tl-row-label">Kit comercial</div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell bar="linen" left="50%" />
          <Cell bar="linen" />
        </div>
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {[
            [
              "Checagem 01 · S2",
              "Conceito de identidade. Direção de logo, paleta e tipografia.",
            ],
            [
              "Checagem 02 · S5",
              "Identidade fechada + arquitetura do site e wireframes.",
            ],
            [
              "Checagem 03 · S7",
              "Site quase pronto + revisão final do kit comercial.",
            ],
          ].map(([title, desc]) => (
            <div key={title}>
              <h3 className="prop-h3">{title}</h3>
              <p style={{ fontSize: 11 }}>{desc}</p>
            </div>
          ))}
        </div>
        <PageFoot left="Lumma · oi@lumma.studio" page="06 / 08" />
      </ProposalPage>

      {/* PAGE 7 — INVESTIMENTO */}
      <ProposalPage>
        <PageHead chapter="05 · Investimento · p. 07/08" />
        <div className="prop-eyebrow">Capítulo 05 · Investimento</div>
        <h2 className="prop-h1" style={{ fontSize: 56 }}>
          Tudo aberto,
          <br />
          tudo <em>combinado.</em>
        </h2>
        <table className="prop-invest-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Inclui</th>
              <th style={{ textAlign: "right" }}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Identidade visual",
                "Logo, paleta, tipografia, guia de marca, aplicações principais",
                "R$ 12.800",
              ],
              [
                "Site institucional",
                "Design, código, publicação, painel de admin, treinamento",
                "R$ 18.500",
              ],
              [
                "Kit comercial",
                "Apresentação, modelo de proposta, assinatura de e-mail",
                "R$ 4.200",
              ],
              [
                "Acompanhamento",
                "30 dias de ajustes pós-entrega",
                "incluso",
              ],
            ].map(([name, includes, price]) => (
              <tr key={name}>
                <td className="prop-name">{name}</td>
                <td>{includes}</td>
                <td className="prop-price">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="prop-invest-total">
          <span className="prop-invest-total__label">Investimento total</span>
          <span className="prop-invest-total__value">R$ 35.500</span>
        </div>
        <p className="prop-invest-note">
          <strong style={{ color: "var(--deep-ink)" }}>
            Forma de pagamento:
          </strong>{" "}
          40% no início (R$ 14.200) · 30% na checagem 02 (R$ 10.650) · 30% na
          entrega (R$ 10.650).
          <br />
          <strong style={{ color: "var(--deep-ink)" }}>
            Validade:
          </strong>{" "}
          esta proposta vale por 21 dias a partir de 9 de maio de 2026.
          <br />
          <strong style={{ color: "var(--deep-ink)" }}>
            Hospedagem e domínio:
          </strong>{" "}
          não incluso. Recomendamos opções a partir de R$ 35/mês — explicamos
          com calma se precisar.
        </p>
        <PageFoot left="Lumma · oi@lumma.studio" page="07 / 08" />
      </ProposalPage>

      {/* PAGE 8 — PRÓXIMOS PASSOS */}
      <ProposalPage ink>
        <Sparkle className="prop-close-art" aria-hidden />
        <PageHead chapter="06 · Próximos passos · p. 08/08" />
        <div className="prop-eyebrow">Capítulo 06 · Próximos passos</div>
        <h2 className="prop-h1" style={{ fontSize: 64 }}>
          Se topar,
          <br />
          a gente <em>começa.</em>
        </h2>
        <div style={{ marginTop: 32, maxWidth: 520, position: "relative" }}>
          <p className="prop-lead">
            Pode responder esta proposta com a mensagem <em>“vamos lá”</em>,
            alguma dúvida ou ajuste que você queira fazer. A partir do aceite,
            abrimos a primeira semana imediatamente.
          </p>
          <p style={{ marginTop: 16 }}>
            Se algum ponto não fechou, marque uma segunda conversa — preferimos
            ajustar antes do que prometer e mudar depois.
          </p>
        </div>
        <div className="prop-signature-box">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245,241,234,.5)",
                  marginBottom: 6,
                }}
              >
                Pela Lumma
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                  marginTop: 6,
                }}
              >
                Equipe Lumma
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(245,241,234,.55)",
                  marginTop: 6,
                }}
              >
                oi@lumma.studio
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245,241,234,.5)",
                  marginBottom: 6,
                }}
              >
                Pela Rucad
              </div>
              <div
                style={{
                  borderBottom: "1px solid rgba(245,241,234,.25)",
                  height: 28,
                  marginTop: 6,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(245,241,234,.55)",
                  marginTop: 8,
                }}
              >
                assinatura · data
              </div>
            </div>
          </div>
        </div>
        <PageFoot
          left="oi@lumma.studio · resposta em até 1 dia útil"
          page="08 / 08"
        />
      </ProposalPage>
    </div>
  );
}

function Cell({
  bar,
  left = 0,
  right = 0,
}: {
  bar?: "glow" | "ink" | "linen";
  left?: number | string;
  right?: number | string;
}) {
  return (
    <div className="prop-tl-cell">
      {bar && (
        <div
          className={`prop-tl-bar prop-tl-bar--${bar}`}
          style={{ left, right }}
        />
      )}
    </div>
  );
}
