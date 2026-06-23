import Image from "next/image";
import Animations from "./animations";
import MobileNav from "./mobile-nav";

const IMG = "https://picsum.photos/seed";

function IconTempo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

function IconCusto() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 8V7c0-1.7-1.3-3-3-3H6C4.3 4 3 5.3 3 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-1" />
      <path d="M21 12.5v-1c0-.8-.7-1.5-1.5-1.5H17c-1.4 0-2.5 1.1-2.5 2.5S15.6 15 17 15h2.5c.8 0 1.5-.7 1.5-1.5z" />
      <path d="M16.7 12.5h.1" />
    </svg>
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

function IconEntrega() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 7.5 12 12l8.5-4.5" />
      <path d="M12 12v9" />
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
    </svg>
  );
}

const whys = [
  {
    Icon: IconTempo,
    title: "Tempo",
    desc: "Seu time é ótimo, mas está sem tempo. Faz sentido quando falta espaço na agenda pra evoluir o produto com consistência.",
  },
  {
    Icon: IconCusto,
    title: "Custo",
    desc: "Falta agilidade e assertividade? Faz sentido quando o que mais custa é demora, retrabalho e decisão sem clareza.",
  },
  {
    Icon: IconEntrega,
    title: "Entrega",
    desc: "Sente que as entregas poderiam ser melhores? Faz sentido quando você precisa de design bem pensado, do briefing à interface final.",
  },
];

const services = [
  {
    num: "001",
    name: "Web design e sites",
    desc: "Quando seu site não comunica valor. Desenhamos e entregamos experiências digitais, do conceito ao site no ar.",
    apps: "Institucionais · landing pages · one-pages",
    img: "lumma-svc-web",
  },
  {
    num: "002",
    name: "Design de produto",
    desc: "Quando você tem uma ideia de produto e precisa dar forma a ela. Desenhamos a interface e a experiência de SaaS, apps e plataformas.",
    apps: "SaaS · aplicativos · plataformas",
    img: "lumma-svc-produto",
  },
  {
    num: "003",
    name: "Estratégia e estrutura",
    desc: "Quando falta clareza sobre o que fazer. Estruturamos o produto, organizamos a arquitetura de informação e definimos prioridades.",
    apps: "Novos produtos · redesign · diagnóstico",
    img: "lumma-svc-estrategia",
  },
  {
    num: "004",
    name: "Prototipagem",
    desc: "Quando você precisa ver e testar antes de investir em desenvolvimento. Protótipos navegáveis que validam a ideia com usuários reais.",
    apps: "Provas de conceito · validação · pitch",
    img: "lumma-svc-proto",
  },
  {
    num: "005",
    name: "Design system",
    desc: "Quando o produto cresce sem consistência. Estruturamos sistemas que padronizam decisões e preparam o produto pra escalar.",
    apps: "SaaS · plataformas · apps",
    img: "lumma-svc-ds",
  },
  {
    num: "006",
    name: "Identidade e marca",
    desc: "Quando o produto precisa de uma identidade à altura. Marca como sistema que sustenta o crescimento.",
    apps: "Identidade · diretrizes · aplicação",
    img: "lumma-svc-marca",
  },
];

const methods = [
  {
    num: "01",
    title: "Escopo fechado",
    tagline: "Quando o escopo é claro desde o início.",
    intro: "Definimos entregáveis, prazos e critérios de validação antes de começar. Você sabe exatamente o que vai receber e quando.",
    bullets: [
      "Briefing e proposta logo na primeira semana",
      "Entregas em etapas validadas",
      "Prazo e critérios de aceite definidos",
    ],
    fit: "Redesign de site, nova interface de produto, identidade, design system pontual.",
  },
  {
    num: "02",
    title: "Escopo aberto",
    tagline: "Uma necessidade clara, mas sem todas as respostas.",
    intro: "Exploramos, priorizamos e ajustamos o plano conforme o projeto ganha forma. Trabalho contínuo, com direção a cada etapa.",
    bullets: [
      "Descoberta antes de definir o caminho",
      "Prioridades revistas a cada ciclo",
      "Flexível para ajustar conforme o produto evolui",
    ],
    fit: "Novos produtos, evolução de plataforma, projetos de descoberta.",
  },
  {
    num: "03",
    title: "Extensão de time",
    tagline: "Um time de design à sua disposição.",
    intro: "A Lumma entra em cena para acelerar, otimizar e manter consistência nas entregas, integrada ao seu time interno.",
    bullets: [
      "Bloco mensal de dedicação",
      "Você prioriza o que entra na fila",
      "Consistência mantida ao longo do produto",
    ],
    fit: "Times de produto sem capacidade de design, evolução contínua de interface.",
  },
];

const featuredCase = {
  client: "Norvex Logística · Plataforma B2B",
  challenge: "Tinham um sistema interno difícil de usar, que afastava clientes novos e gerava chamados de suporte sem parar.",
  work: "Redesenhamos a experiência da plataforma e entregamos um protótipo navegável, validado com usuários reais antes do desenvolvimento.",
  result: "O time aprovou a nova direção em uma única rodada e seguiu pro desenvolvimento com clareza do que construir.",
  quote: "A Lumma entendeu nosso problema antes de desenhar qualquer tela. O protótipo deu segurança pra todo mundo seguir.",
  author: "Camila Ferraz, Head de Produto",
};

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

const marqueeItems = [
  "Design de produto",
  "Prototipagem",
  "Web design",
  "Design system",
  "Estratégia",
  "Interface",
  "Identidade",
];

export default function Home() {
  return (
    <>
      <Animations />
      <header className="site-header" id="top">
        <a className="site-header__logo" href="#top" aria-label="Lumma, ir para o topo">
          <Image
            src="/Logo-lumma-header.svg"
            alt="Lumma"
            width={101}
            height={32}
            className="site-header__logo-img"
            priority
          />
        </a>
        <nav className="site-nav" aria-label="Principal">
          <a href="#servicos">Serviços</a>
          <a href="#por-que">Por que a Lumma</a>
          <a href="#como-trabalhamos">Como trabalhamos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href="#contato">Conversar</a>
        </nav>
        <MobileNav />
      </header>

      <main>
        <div className="hero-wrapper">
          <section className="hero">
            <video
              className="hero__bg"
              src="/hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
            <div className="hero__content">
              <h1 className="hero-headline display">
                Design de produto que
                <br />
                dá forma à sua <em>ideia</em>
              </h1>
              <p className="hero-sub">
                Ajudamos empresas a idealizar, desenhar e prototipar <strong>produtos digitais</strong>, do conceito ao protótipo navegável.
              </p>
              <div className="hero-cta-row">
                <a className="btn btn-accent" href="#contato">
                  Começar um projeto
                  <ArrowIcon />
                </a>
                <a className="btn btn-ghost-light" href="#como-trabalhamos">Ver como trabalhamos</a>
              </div>
            </div>

            <svg className="hero__mark" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_370_2)">
                <path d="M52.6521 63.3079C46.668 67.6563 43.676 69.8306 40.404 70.6709C37.5165 71.4127 34.4869 71.4127 31.5951 70.6709C28.3231 69.8306 25.3311 67.6563 19.3471 63.3079L13.5344 59.0861C7.55037 54.7376 4.55834 52.5634 2.74893 49.7109C1.14845 47.1924 0.212399 44.3111 0.0243532 41.3341C-0.184586 37.9629 0.956242 34.4448 3.24204 27.4084L5.46097 20.5779C7.74677 13.5417 8.89176 10.0235 11.0438 7.42065C12.9452 5.12235 15.3981 3.3416 18.1687 2.24355C21.3111 0.999996 25.0094 1 32.41 1H39.5892C46.9898 1 50.688 1 53.8305 2.24355C56.601 3.3416 59.054 5.12235 60.9553 7.42065C63.1074 10.0235 64.2524 13.5417 66.5382 20.5779L68.7571 27.4085C71.0429 34.4448 72.1879 37.9629 71.9748 41.3341C71.7868 44.3111 70.8507 47.1924 69.2544 49.7109C67.4408 52.5634 64.4488 54.7376 58.4648 59.0861L52.6521 63.3079Z" fill="#50F160" />
                <path className="hero__mark2" d="M40.8979 29.2784L53.8564 26.9777C54.2826 26.9021 54.4958 26.8643 54.6796 26.9123C54.8426 26.9547 54.993 27.0431 55.1058 27.1671C55.2354 27.3078 55.3023 27.5135 55.436 27.9249L56.489 31.1559C56.6228 31.5676 56.6896 31.7734 56.6645 31.9635C56.6478 32.1311 56.581 32.2894 56.4723 32.4197C56.3511 32.5674 56.1547 32.662 55.7661 32.8513L43.9318 38.6038L50.1247 50.2136C50.3295 50.5955 50.4298 50.7861 50.4423 50.977C50.4507 51.1454 50.4131 51.313 50.3295 51.4601C50.2376 51.6268 50.062 51.7539 49.711 52.0084L46.9656 54.0054C46.6145 54.2599 46.4391 54.3873 46.251 54.425C46.0839 54.4584 45.9125 54.4433 45.7579 54.3815C45.5782 54.3117 45.4278 54.1554 45.1269 53.8437L36.0004 44.3649L26.8739 53.8437C26.5731 54.1554 26.4226 54.3117 26.2471 54.3815C26.0883 54.4433 25.917 54.4584 25.7498 54.425C25.566 54.3873 25.3905 54.2603 25.0394 54.0058L22.2898 52.0079C21.9388 51.7539 21.7633 51.6268 21.6713 51.4601C21.5878 51.313 21.5501 51.1454 21.5585 50.977C21.571 50.7861 21.6713 50.5951 21.8761 50.2136L28.0649 38.6038L16.2347 32.8511C15.8461 32.6619 15.6497 32.5673 15.5285 32.4196C15.424 32.2895 15.3572 32.1312 15.3363 31.9637C15.3154 31.7738 15.3823 31.568 15.516 31.1565L16.5648 27.9256C16.6986 27.514 16.7654 27.3082 16.895 27.1674C17.0078 27.0433 17.1541 26.9548 17.317 26.9124C17.5051 26.8644 17.7182 26.9022 18.1444 26.9779L31.0987 29.2784L32.9123 16.2483C32.9708 15.8197 33 15.6054 33.1045 15.4442C33.1964 15.302 33.326 15.1891 33.4764 15.1189C33.6519 15.0392 33.8692 15.0392 34.2997 15.0392H37.697C38.1316 15.0392 38.3489 15.0392 38.5202 15.1189C38.6748 15.1892 38.8044 15.3021 38.8963 15.4442C38.9966 15.6055 39.0259 15.8199 39.0885 16.2486L40.8979 29.2784Z" fill="#093417" />
              </g>
              <defs>
                <clipPath id="clip0_370_2">
                  <rect width="72" height="72" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </section>
        </div>

        <section className="statement wrap" aria-label="Posicionamento">
          <div className="statement__grid">
            <p className="statement__big">
              Visão estratégica, execução afiada e foco total na <em>experiência.</em>
            </p>
            <div className="statement__side">
              <p>
                Trabalhamos com empresas que querem criar, evoluir ou destravar um produto digital. Da primeira ideia ao protótipo que dá segurança pra investir.
              </p>
              <p>
                <strong>Não prometemos atalho.</strong> Entendemos o problema de negócio antes de desenhar qualquer tela, e entregamos design que seu time consegue tocar com independência.
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

        <section className="triptych wrap section--tight" aria-label="Trabalho">
          <div className="triptych__grid">
            <div className="figure figure--tall reveal">
              <img src={`${IMG}/lumma-trip-1/900/1100`} alt="Amostra de trabalho da Lumma" loading="lazy" />
              <span className="figure__tag">Interface</span>
            </div>
            <div className="figure figure--tall reveal">
              <img src={`${IMG}/lumma-trip-2/900/1100`} alt="Amostra de trabalho da Lumma" loading="lazy" />
              <span className="figure__tag">Produto</span>
            </div>
            <div className="figure figure--tall reveal">
              <img src={`${IMG}/lumma-trip-3/900/1100`} alt="Amostra de trabalho da Lumma" loading="lazy" />
              <span className="figure__tag">Identidade</span>
            </div>
          </div>
        </section>

        <section className="section wrap" id="por-que">
          <div className="why-head section-head">
            <div>
              <span className="label">Por que nos escolher</span>
              <h2 className="section-title" style={{ marginTop: 26 }}>
                Quando a Lumma faz <em>sentido.</em>
              </h2>
            </div>
            <p className="lead" style={{ marginTop: 0 }}>
              Criar, evoluir ou destravar um produto digital. Quando isso vira um problema, a Lumma faz sentido. Simples assim.
            </p>
          </div>
          <div className="why-grid">
            {whys.map((w) => (
              <div className="why-card reveal" key={w.title}>
                <div className="why-card__icon"><w.Icon /></div>
                <h3 className="why-card__title">{w.title}</h3>
                <p className="why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap" id="servicos">
          <div className="section-head">
            <span className="label">Serviços · o que fazemos</span>
            <h2 className="section-title" style={{ marginTop: 26 }}>
              O que a gente <em>faz.</em>
            </h2>
            <p className="lead">
              Seis frentes de design que cobrem o ciclo de um produto digital, da ideia ao protótipo. Você contrata a frente que falta ou o trabalho completo.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="svc reveal" key={s.num}>
                <span className="svc__num">{s.num}</span>
                <div className="svc__thumb">
                  <img src={`${IMG}/${s.img}/240/240`} alt="" aria-hidden="true" loading="lazy" />
                </div>
                <div className="svc__main">
                  <h3 className="svc__name">{s.name}</h3>
                  <p className="svc__desc">{s.desc}</p>
                </div>
                <span className="svc__apps">{s.apps}</span>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <a className="btn btn-ink" href="#contato">
              Quero conversar sobre meu projeto
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="break dark" aria-label="Imagem">
          <div className="break__media">
            <img src={`${IMG}/lumma-break/2000/1100`} alt="" aria-hidden="true" loading="lazy" />
          </div>
          <div className="break__quote">
            <div className="wrap">
              <p className="break__text reveal">
                Bom design não é como fica. É como <em>funciona</em> quando alguém precisa decidir.
              </p>
            </div>
          </div>
        </section>

        <section className="section wrap" id="como-trabalhamos">
          <div className="section-head">
            <span className="label">Como trabalhamos · três formatos</span>
            <h2 className="section-title" style={{ marginTop: 26 }}>
              Método claro, <em>adaptado</em> ao seu contexto.
            </h2>
            <p className="lead">
              Menos fórmula. Mais leitura de cenário. Não existe um único jeito de trabalhar. Existe o jeito certo pro contexto do seu negócio.
            </p>
          </div>
          <div className="method-grid">
            {methods.map((m) => (
              <div className="method reveal" key={m.num}>
                <div className="method__num">{m.num}</div>
                <h3 className="method__title">{m.title}</h3>
                <p className="method__tagline">{m.tagline}</p>
                <p className="method__intro">{m.intro}</p>
                <ul className="method__bullets">
                  {m.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <p className="method__fit"><strong>Quando faz sentido:</strong> {m.fit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap" id="experiencia">
          <div className="section-head">
            <span className="label">Experiência · um projeto, contado de perto</span>
            <h2 className="section-title" style={{ marginTop: 26 }}>
              Não temos volume. Temos <em>profundidade.</em>
            </h2>
            <p className="lead">
              Cada projeto recebe atenção total. Esse é o tipo de trabalho que entregamos.
            </p>
          </div>
          <div className="case reveal">
            <div className="case__media">
              <img src={`${IMG}/lumma-case/1200/900`} alt="Projeto em destaque da Lumma" loading="lazy" />
              <span className="case__meta-tag">Plataforma · 2026</span>
            </div>
            <div className="case__panel">
              <span className="case__client">{featuredCase.client}</span>
              <div className="case__block">
                <span className="case__block-label">O desafio</span>
                <p className="case__block-text">{featuredCase.challenge}</p>
              </div>
              <div className="case__block">
                <span className="case__block-label">O que fizemos</span>
                <p className="case__block-text">{featuredCase.work}</p>
              </div>
              <div className="case__block">
                <span className="case__block-label">O resultado</span>
                <p className="case__block-text">{featuredCase.result}</p>
              </div>
              <blockquote className="case__quote">
                <p>&ldquo;{featuredCase.quote}&rdquo;</p>
                <footer>{featuredCase.author}</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section wrap" id="faq">
          <div className="faq-grid">
            <div className="section-head">
              <span className="label">FAQ</span>
              <h2 className="section-title" style={{ marginTop: 26 }}>
                Antes de começar, é normal ter <em>dúvida.</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <details className="faq__item" key={i} {...(i === 0 ? { open: true } : {})}>
                  <summary className="faq__q">
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </summary>
                  <p className="faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta section dark" id="contato">
          <div className="wrap">
            <div className="cta__head">
              <span className="label">Vamos conversar · sem compromisso</span>
              <h2 className="cta-title">
                Pronto para o
                <br />
                <em>primeiro passo?</em>
              </h2>
              <p className="cta__sub">
                Não precisa ter tudo pronto. Conta o que tá travando e a gente destrava junto.
              </p>
            </div>

            <div className="pillars">
              <div className="pillar reveal">
                <h3 className="pillar__title">Resposta em até 24h</h3>
                <p className="pillar__desc">Mensagem recebida vira conversa marcada. Sem ficar esperando.</p>
              </div>
              <div className="pillar reveal">
                <h3 className="pillar__title">Próximos passos claros</h3>
                <p className="pillar__desc">Você sai da conversa sabendo o que vamos fazer, em quanto tempo e por quanto.</p>
              </div>
              <div className="pillar reveal">
                <h3 className="pillar__title">Sem compromisso na conversa</h3>
                <p className="pillar__desc">A primeira chamada é pra entender se faz sentido pros dois lados. Sem pressão.</p>
              </div>
            </div>

            <div className="cta-alt">
              <span>Ou se preferir:</span>
              <a className="btn btn-ghost-light" href="mailto:oi@lummalabs.com.br">oi@lummalabs.com.br</a>
              <a className="btn btn-ghost-light" href="https://wa.me/5511974613761" target="_blank" rel="noopener noreferrer">WhatsApp · (11) 97461 3761</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__big">
            Design que dá forma
            <br />
            à sua <em>ideia.</em>
          </div>
          <div>
            <h4>Estúdio</h4>
            <ul>
              <li><a href="#por-que">Por que a Lumma</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-trabalhamos">Como trabalhamos</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:oi@lummalabs.com.br">oi@lummalabs.com.br</a></li>
              <li><a href="https://wa.me/5511974613761" target="_blank" rel="noopener noreferrer">(11) 97461 3761</a></li>
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
          <span>Estúdio de design e produto digital</span>
        </div>
      </footer>
    </>
  );
}
