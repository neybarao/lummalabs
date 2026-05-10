import Image from "next/image";
import Animations from "./animations";

const SPARKLE_PATH =
  "M45.7 360.4C19.8 350.8 0 327.7 0 300C0 272.3 19.8 249.2 45.7 239.6L48.3 238.7C138 209 209 138 238.7 48.3C247.7 21.1 271.4 0 300 0C328.6 0 352.3 21.1 361.3 48.3C391 138 462 209 551.8 238.7L554.3 239.6C580.2 249.2 600 272.3 600 300C600 327.7 580.2 350.8 554.3 360.4L551.8 361.3C462 391 391 462 361.3 551.7C352.3 578.9 328.6 600 300 600C271.4 600 247.7 578.9 238.7 551.7C209 462 138 391 48.3 361.3L45.7 360.4Z";

function Sparkle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 600 600" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d={SPARKLE_PATH} />
    </svg>
  );
}

const services = [
  {
    num: "01",
    name: ["Identidade", "visual"],
    desc: "Logo, paleta, tipografia e regras de uso. A base sobre a qual tudo o mais se apoia. Trabalhamos próximo, com 2 a 3 rodadas de revisão.",
    deliverables: ["logo principal · variações", "guia de marca · arquivos abertos", "4 a 6 semanas"],
  },
  {
    num: "02",
    name: ["Design"],
    desc: "Cardápio, embalagem, sinalização, material impresso, peças avulsas. Levamos a identidade pra dentro de cada detalhe da operação.",
    deliverables: ["arte final pra impressão", "versões editáveis · social", "1 a 4 semanas"],
  },
  {
    num: "03",
    name: ["Redes", "sociais"],
    desc: "Templates de feed, story e carrossel. Tom de voz, cronograma editorial e instruções claras pra você ou pra quem cuidar das redes.",
    deliverables: ["10 a 20 templates", "guia editorial", "2 a 3 semanas"],
  },
  {
    num: "04",
    name: ["Websites"],
    desc: "Site institucional, landing page ou loja simples. Carrega rápido, fácil de atualizar, claro pra quem chega. Nada de plugin que ninguém entende.",
    deliverables: ["design · código · publicação", "treinamento de uso", "3 a 8 semanas"],
  },
  {
    num: "05",
    name: ["Aplicativos"],
    desc: "Quando o seu negócio precisa de algo mais que um site. Desenho UX/UI, protótipos navegáveis e acompanhamento técnico até o app no ar.",
    deliverables: ["protótipo · design system", "handoff de desenvolvimento", "8 a 16 semanas"],
  },
  {
    num: "06",
    name: ["Manual de", "comunicação"],
    desc: "Define como a empresa fala — interna e externamente. Quem comunica, o quê, quando e por qual canal. Tom de voz, mensagens-chave, regras de crise e fluxos para time, clientes e imprensa.",
    deliverables: ["tom de voz · vocabulário", "matriz quem-fala-o-quê", "playbooks por canal", "2 a 4 semanas"],
  },
];

const steps = [
  {
    num: "01",
    title: "Conversa",
    desc: "30 minutos pra entender o seu negócio, o que está funcionando e o que está te incomodando. Sem compromisso, sem vendinha.",
  },
  {
    num: "02",
    title: "Proposta",
    desc: "Mandamos um documento com escopo, prazo e investimento. Tudo escrito em português, sem letra miúda.",
  },
  {
    num: "03",
    title: "Trabalho",
    desc: "Você acompanha o que está sendo feito em pontos de checagem combinados. Revisões claras, sem ping-pong.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "No prazo combinado, com a qualidade prometida. Arquivos abertos, treinamento curto e um período de ajuste pós-entrega.",
  },
];

export default function Home() {
  return (
    <>
      <Animations />
      <header className="site-header" id="top">
        <a className="site-header__logo" href="#top">
          <Image
            src="/Logo-lumma-header.svg"
            alt="Lumma"
            width={274}
            height={64}
            className="site-header__logo-img"
            priority
          />
        </a>
        <nav className="site-nav">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#manifesto">Manifesto</a>
          <a className="nav-cta" href="#contato">Conversar</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__card">
          <div className="hero__inner">
            <h1 className="hero-headline">
              A luz que falta
              <br />
              na sua <em>marca.</em>
            </h1>
            <p className="hero-sub">
              Design, multimídia e comunicação pra negócios pequenos que querem ser vistos como o que realmente&nbsp;são.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-primary" href="#contato">Começar uma conversa</a>
              <a className="btn btn-ghost-linen" href="#servicos">Ver serviços</a>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto__inner">
          <div className="section-eyebrow">Manifesto</div>
          <p className="manifesto-text">
            A gente acredita que <em>pequeno não é sinônimo de amador.</em>{" "}
            Que o design de um restaurante de bairro pode ser tão refinado quanto o de uma marca global.{" "}
            Que comunicação clara é direito do cliente, não luxo.{" "}
            Que iluminar um negócio pequeno com cuidado profissional é trabalho que <strong>merece ser bem feito.</strong>
          </p>
          <div className="manifesto-sig">— Lumma · v. 1.0 · 2026</div>
        </div>
        <Sparkle className="manifesto-sparkle" />
      </section>

      <section className="services section" id="servicos">
        <div className="section-eyebrow">Serviços · seis coisas, bem feitas</div>
        <h2 className="section-title">O que a gente <em>faz.</em></h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service" key={s.num}>
              <div className="service__num">{s.num}</div>
              <div className="service__name">
                {s.name.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < s.name.length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="service__desc">{s.desc}</div>
              <div className="service__deliverables">
                {s.deliverables.map((d, i) => (
                  <span key={i}>
                    {d}
                    {i < s.deliverables.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process section" id="processo">
        <div className="section-eyebrow">Processo · quatro etapas, sem mistério</div>
        <h2 className="section-title">
          Como a gente
          <br />
          <em>trabalha.</em>
        </h2>
        <div className="process-list">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__num">{s.num}</div>
              <div className="step__title">{s.title}</div>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="voice" id="voz">
        <div className="voice__inner">
          <div className="section-eyebrow">Como a gente fala</div>
          <h2 className="section-title">
            Sem jargão. Sem
            <br />
            <em>sinergia.</em> Sem 360°.
          </h2>
          <div className="voice-grid">
            <div className="voice-col bad">
              <div className="voice-col__label bad">— Evitamos</div>
              <div className="voice-col__list">
                <div className="voice-col__item">Soluções de comunicação visual sob medida</div>
                <div className="voice-col__item">Potencializamos sua marca no mercado</div>
                <div className="voice-col__item">Entregáveis com qualidade premium</div>
                <div className="voice-col__item">Estratégia 360° de comunicação</div>
              </div>
            </div>
            <div className="voice-col good">
              <div className="voice-col__label good">+ Preferimos</div>
              <div className="voice-col__list">
                <div className="voice-col__item">Logos, sites e vídeos pra quem está começando</div>
                <div className="voice-col__item">Fazemos seu negócio aparecer melhor</div>
                <div className="voice-col__item">O que combinamos, no prazo, bem feito</div>
                <div className="voice-col__item">Identidade, site e redes — tudo conversando entre si</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-block" id="contato">
        <div className="cta-block__inner">
          <div className="section-eyebrow">Conversa de 30 minutos · sem compromisso</div>
          <h2 className="cta-title">
            Tem um negócio
            <br />
            pra <em>iluminar?</em>
          </h2>
          <p className="cta-sub">
            Conta um pouco do que você precisa. A gente lê tudo e responde em até 1 dia útil.
          </p>
          <div className="cta-row">
            <a className="btn btn-dark" href="mailto:oi@lummalabs.com.br">
              oi@lummalabs.com.br
            </a>
            <a
              className="btn btn-ghost-ink"
              href="https://wa.me/5511974613761"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · (11) 97461 3761
            </a>
          </div>
        </div>
        <Sparkle className="cta-block__sparkle-bg" />
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__big">
            A luz na medida
            <br />
            <em>certa.</em>
          </div>
          <div>
            <h4>Estúdio</h4>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#manifesto">Manifesto</a></li>
              <li><a href="#voz">Como falamos</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:oi@lummalabs.com.br">oi@lummalabs.com.br</a></li>
              <li>
                <a href="https://wa.me/5511974613761" target="_blank" rel="noopener noreferrer">
                  (11) 97461 3761
                </a>
              </li>
              <li><a href="https://lummalabs.com.br">lummalabs.com.br</a></li>
            </ul>
          </div>
          <div>
            <h4>Onde</h4>
            <ul>
              <li>Brasil · remoto</li>
              <li>Atende em todo lugar</li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© Lumma · 2026 · lummalabs.com.br</span>
          <span>Feito com calma</span>
        </div>
      </footer>
    </>
  );
}
