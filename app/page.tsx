import { Fragment } from "react";
import Image from "next/image";
import Animations from "./animations";
import MobileNav from "./mobile-nav";
import StarBackground from "./star-background";
import {
  EMAIL,
  differentials,
  faqs,
  manifesto,
  marqueeItems,
  methods,
  services,
  verbs,
} from "./content";

function IconBusca() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </svg>
  );
}

function IconConversa() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12c0 4.1-3.6 7.5-8 7.5-1.2 0-2.4-.3-3.4-.7L4 20l1.2-3.6C4.4 15.1 4 13.6 4 12c0-4.1 3.6-7.5 8-7.5s8 3.4 8 7.5z" />
      <path d="M9 11h6M9 14h3.5" />
    </svg>
  );
}

function IconEscolha() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.3 2.6 2.6 5-5.4" />
    </svg>
  );
}

const verbIcons = { encontrado: IconBusca, entendido: IconConversa, escolhido: IconEscolha };

// Cada palavra numa máscara, para o título subir palavra por palavra sem esconder o texto.
function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="w">
            <span>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className="btn__arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Animations />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header" id="top">
        <a className="site-header__logo" href="#top" aria-label="Lumma, ir para o topo">
          <Image
            src="/Logo-lumma-header-light.svg"
            alt="Lumma"
            width={101}
            height={32}
            className="site-header__logo-img"
            priority
          />
        </a>
        <nav className="site-nav" aria-label="Principal">
          <a href="#o-que-resolvemos">O que resolvemos</a>
          <a href="#servicos">Serviços</a>
          <a href="#como-trabalhamos">Como funciona</a>
          <a href="#por-que">Por que a Lumma</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href="#contato">Pedir Raio-X</a>
        </nav>
        <MobileNav />
        <span className="scroll-progress" aria-hidden="true" />
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <StarBackground />
          <div className="hero__content">
            <span className="label hero__label">Presença online para pequenos negócios</span>
            <h1 className="hero-headline display" id="hero-title">
              <Words text="Seu negócio encontrado," />
              <br />
              <Words text="entendido e" /> <em><Words text="escolhido." /></em>
            </h1>
            <p className="hero-sub">
              Marca, site, Google e conteúdo pensados juntos, com qualidade de empresa grande, para <strong>pequenos negócios e profissionais</strong> que trabalham bem e precisam parecer, online, tão bons quanto são.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-accent" href="#contato">
                Pedir meu Raio-X
                <ArrowIcon />
              </a>
              <a className="btn btn-ghost-light" href="#como-trabalhamos">Ver como funciona</a>
            </div>
          </div>
        </section>

        <section className="statement wrap" id="para-quem" aria-labelledby="para-quem-title">
          <div className="statement__grid">
            <h2 className="statement__big" id="para-quem-title">
              Presença online para quem merece ser <em>visto.</em>
            </h2>
            <div className="statement__side">
              <p>
                A Lumma trabalha com <strong>negócios locais</strong>, como clínicas, estúdios, restaurantes e lojas, e com <strong>profissionais e empresas de serviço</strong>, como escritórios de advocacia, engenharia, arquitetura e consultoria.
              </p>
              <p>
                Gente que já tem clientes e sabe o que vende, mas não aparece no Google, tem um Instagram parado ou uma imagem que não faz jus ao tamanho do trabalho. <strong>Não prometemos atalho.</strong> Fazemos o básico muito bem feito, do jeito que empresa grande faz.
              </p>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span className="marquee__item" key={i}>{item}</span>
            ))}
          </div>
        </div>

        <section className="triptych wrap section--tight" aria-label="Trabalhos recentes">
          <div className="triptych__grid">
            <figure className="figure figure--tall reveal">
              <img src="/trip-interface.png" alt="Site institucional criado para uma empresa de engenharia elétrica, exibido em um notebook" loading="lazy" />
              <figcaption className="figure__tag">Site</figcaption>
            </figure>
            <figure className="figure figure--tall reveal">
              <img src="/trip-produto.png" alt="Tela de abertura de um aplicativo de banco digital, exibida em um celular" loading="lazy" />
              <figcaption className="figure__tag">Produto digital</figcaption>
            </figure>
            <figure className="figure figure--tall reveal">
              <img src="/trip-identidade.png" alt="Identidade visual de uma empresa de engenharia aplicada na lateral de uma caminhonete" loading="lazy" />
              <figcaption className="figure__tag">Marca</figcaption>
            </figure>
          </div>
        </section>

        <section className="section wrap" id="o-que-resolvemos" aria-labelledby="verbos-title">
          <div className="why-head section-head">
            <div>
              <span className="label">O que a gente resolve</span>
              <h2 className="section-title" id="verbos-title" style={{ marginTop: 26 }}>
                Do jeito que seu cliente <em>decide.</em>
              </h2>
            </div>
            <p className="lead" style={{ marginTop: 0 }}>
              Antes de te chamar, seu cliente procura, tenta entender o que você faz e compara. A Lumma cuida das três etapas, juntas.
            </p>
          </div>
          <div className="why-grid">
            {verbs.map((v) => {
              const Icon = verbIcons[v.key];
              return (
                <article className="why-card reveal" key={v.key}>
                  <div className="why-card__icon"><Icon /></div>
                  <h3 className="why-card__title">{v.title}</h3>
                  <p className="why-card__pain">{v.pain}</p>
                  <p className="why-card__desc">{v.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section wrap" id="servicos" aria-labelledby="servicos-title">
          <div className="section-head">
            <span className="label">Serviços · do diagnóstico ao acompanhamento</span>
            <h2 className="section-title" id="servicos-title" style={{ marginTop: 26 }}>
              O que a gente <em>faz.</em>
            </h2>
            <p className="lead">
              Poucos serviços, com escopo claro. Você começa pelo diagnóstico, segue para o projeto que faz sentido e, se quiser, a gente mantém tudo funcionando depois.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <article className="svc reveal" key={s.num}>
                <span className="svc__num">{s.num}</span>
                <div className="svc__thumb">
                  <img src={s.img} alt="" aria-hidden="true" width={320} height={320} loading="lazy" />
                </div>
                <div className="svc__main">
                  <h3 className="svc__name">{s.name}</h3>
                  <p className="svc__desc">{s.desc}</p>
                </div>
                <span className="svc__apps">{s.apps}</span>
              </article>
            ))}
          </div>
          <div className="services-cta">
            <a className="btn btn-ink" href="#contato">
              Quero entender o melhor caminho para mim
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="break dark" aria-label="Assinatura da marca">
          <div className="break__media">
            <img src="/break-luz.webp" alt="" aria-hidden="true" width={1915} height={821} loading="lazy" />
          </div>
          <div className="break__quote">
            <div className="wrap">
              <p className="break__text reveal">
                Iluminar é tornar possível <em>ver.</em>
              </p>
            </div>
          </div>
        </section>

        <section className="section wrap" id="como-trabalhamos" aria-labelledby="como-title">
          <div className="section-head">
            <span className="label">Como funciona · três etapas</span>
            <h2 className="section-title" id="como-title" style={{ marginTop: 26 }}>
              Diagnóstico, projeto e <em>acompanhamento.</em>
            </h2>
            <p className="lead">
              Você sabe o que vai receber, quando e quanto vai investir antes de começar. Sem surpresa no meio do caminho.
            </p>
          </div>
          <div className="method-grid">
            {methods.map((m) => (
              <article className="method reveal" key={m.num}>
                <div className="method__num">{m.num}</div>
                <h3 className="method__title">{m.title}</h3>
                <p className="method__tagline">{m.tagline}</p>
                <p className="method__intro">{m.intro}</p>
                <ul className="method__bullets">
                  {m.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <p className="method__fit"><strong>Quando faz sentido:</strong> {m.fit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="por-que" aria-labelledby="por-que-title">
          <div className="section-head">
            <span className="label">Por que a Lumma</span>
            <h2 className="section-title" id="por-que-title" style={{ marginTop: 26 }}>
              Qualidade de empresa grande, linguagem de <em>gente.</em>
            </h2>
            <p className="lead">
              Pequeno negócio raramente tem acesso a esse nível de cuidado. A Lumma existe para mudar isso.
            </p>
          </div>
          <div className="case reveal">
            <div className="case__media">
              <img src="/hero-starfish.jpg" alt="" aria-hidden="true" loading="lazy" />
              <span className="case__meta-tag">Lumma</span>
            </div>
            <div className="case__panel">
              {differentials.map((d) => (
                <div className="case__block" key={d.label}>
                  <h3 className="case__block-label">{d.label}</h3>
                  <p className="case__block-text">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="manifesto dark" id="manifesto" aria-labelledby="manifesto-title">
          <div className="wrap manifesto__grid">
            <div className="manifesto__head">
              <span className="label">Manifesto</span>
              <h2 className="manifesto__title" id="manifesto-title">
                {manifesto.title} <em>{manifesto.highlight}</em>
              </h2>
              <img
                className="manifesto__media"
                src="/manifesto-esferas.webp"
                alt=""
                aria-hidden="true"
                width={900}
                height={900}
                loading="lazy"
              />
            </div>
            <div className="manifesto__body">
              {manifesto.paragraphs.map((p, i) => (
                <p className="reveal" key={i}>{p}</p>
              ))}
              <p className="manifesto__closing reveal">
                {manifesto.closing} <em>{manifesto.closingHighlight}</em>
              </p>
            </div>
          </div>
        </section>

        <section className="section wrap" id="faq" aria-labelledby="faq-title">
          <div className="faq-grid">
            <div className="section-head">
              <span className="label">Perguntas frequentes</span>
              <h2 className="section-title" id="faq-title" style={{ marginTop: 26 }}>
                Antes de começar, é normal ter <em>dúvida.</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <details className="faq__item" key={i} {...(i === 0 ? { open: true } : {})}>
                  <summary className="faq__q">
                    <h3>{item.q}</h3>
                    <span className="faq__icon" aria-hidden="true" />
                  </summary>
                  <p className="faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta section dark" id="contato" aria-labelledby="contato-title">
          <div className="wrap">
            <div className="cta__head">
              <span className="label">Vamos conversar · sem compromisso</span>
              <h2 className="cta-title" id="contato-title">
                Pronto para ser
                <br />
                <em>visto?</em>
              </h2>
              <p className="cta__sub">
                Não precisa ter tudo pronto. Conta como seu negócio aparece hoje e a gente mostra por onde começar.
              </p>
            </div>

            <div className="pillars">
              <div className="pillar reveal">
                <h3 className="pillar__title">Resposta em até 1 dia útil</h3>
                <p className="pillar__desc">Mensagem recebida vira conversa marcada. Sem ficar esperando.</p>
              </div>
              <div className="pillar reveal">
                <h3 className="pillar__title">Próximos passos claros</h3>
                <p className="pillar__desc">Você sai da conversa sabendo o que fazer primeiro, e por quê.</p>
              </div>
              <div className="pillar reveal">
                <h3 className="pillar__title">Sem compromisso na conversa</h3>
                <p className="pillar__desc">A primeira chamada é pra entender se faz sentido pros dois lados. Sem pressão.</p>
              </div>
            </div>

            <div className="cta-alt">
              <span>Fale com a gente:</span>
              <a className="btn btn-accent" href={`mailto:${EMAIL}`}>
                {EMAIL}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__big">
            Encontrado, entendido
            <br />
            e <em>escolhido.</em>
          </div>
          <div>
            <h4>Lumma</h4>
            <ul>
              <li><a href="#o-que-resolvemos">O que resolvemos</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-trabalhamos">Como funciona</a></li>
              <li><a href="#por-que">Por que a Lumma</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href="https://lummalabs.com.br">lummalabs.com.br</a></li>
            </ul>
          </div>
          <div>
            <h4>Onde</h4>
            <ul>
              <li>Brasil · remoto</li>
              <li>Atendemos todo o país</li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© Lumma Labs · 2026 · lummalabs.com.br</span>
          <span>Iluminar é tornar possível ver.</span>
        </div>
      </footer>
    </>
  );
}
