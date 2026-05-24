import Image from "next/image";
import Animations from "./animations";
import MobileNav from "./mobile-nav";
import ContactForm from "./contact-form";

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
    name: ["Marca"],
    desc: "Quando seu negócio precisa de uma identidade que diga quem você é antes de você falar. Não é só um logo bonito, é um sistema visual que aguenta o seu crescimento.",
    deliverables: ["logo · paleta · tipografia", "versões e variações · manual de marca"],
  },
  {
    num: "02",
    name: ["Design", "system"],
    desc: "Quando você quer parar de inventar a roda toda vez que precisa de uma peça nova. Botões, cards, banners, posts, tudo derivado das mesmas regras. Você cresce sem perder consistência.",
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

const faqs = [
  {
    q: "Quanto custa um projeto na Lumma?",
    a: "Depende do escopo. Marca completa começa em uma faixa, site em outra, pacote completo em outra. Na primeira conversa a gente entende o que você precisa e te manda uma proposta direta, sem joguinho de \"fale com nosso consultor\".",
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
    a: "Pode. A gente trabalha tanto com pacote quanto com peça solta. Mas vale conversar, às vezes o que você acha que precisa não é exatamente o que vai resolver.",
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
            className="site-header__logo-img site-header__logo-img--dark"
            priority
          />
          <Image
            src="/Logo-lumma-header-light.svg"
            alt=""
            width={140}
            height={60}
            className="site-header__logo-img site-header__logo-img--light"
            aria-hidden="true"
          />
        </a>
        <nav className="site-nav" aria-label="Principal">
          <a href="#servicos">Serviços</a>
          <a href="#como-trabalhamos">Como trabalhamos</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href="#contato">Conversar</a>
        </nav>
        <MobileNav />
      </header>

      <main>
        <section className="hero">
          <div className="hero__card">
            {/* <Sparkle className="hero__sparkle" /> */}
            <div className="hero__grid">
              <div className="hero__lead">
                <h1 className="hero-headline">
                  Design e comunicação
                  <br />
                  <em>sem</em> rodeios.
                </h1>
                <p className="hero-sub">
                  Criamos marca, design system, site e Instagram com qualidade de grande empresa, pra pequenos negócios que querem ser levados a sério desde o primeiro dia.
                </p>
                <div className="hero-cta-row">
                  <a className="btn btn-primary" href="#contato">Começar um projeto</a>
                  <a className="btn btn-ghost-ink" href="#como-trabalhamos">Ver como trabalhamos</a>
                </div>
                <ul className="hero__tags" aria-label="O que fazemos">
                  <li>Marca</li>
                  <li>Design system</li>
                  <li>Brand system</li>
                  <li>Site</li>
                  <li>Instagram</li>
                </ul>
              </div>
              <div className="hero__visual">
                <div className="hero__visual-chip">Conheça a Lumma ✦</div>
                <div className="hero__visual-frame" role="img" aria-label="Imagem em breve">
                  <span className="hero__visual-placeholder">Imagem · 1:1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__mosaic" aria-hidden="true">
            <div className="hero__mosaic-tile" data-ratio="portrait">
              <span>Imagem · 3:4</span>
            </div>
            <div className="hero__mosaic-tile" data-ratio="square">
              <span>Imagem · 1:1</span>
            </div>
            <div className="hero__mosaic-tile" data-ratio="portrait">
              <span>Imagem · 3:4</span>
            </div>
            <div className="hero__mosaic-tile" data-ratio="square">
              <span>Imagem · 1:1</span>
            </div>
            <div className="hero__mosaic-tile" data-ratio="portrait">
              <span>Imagem · 3:4</span>
            </div>
          </div>
        </section>

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

        <section className="services section section--dark" id="servicos">
          <div className="section-eyebrow">Serviços · cinco entregas, bem feitas</div>
          <h2 className="section-title">O que a gente <em>faz.</em></h2>
          <p className="section-lead">Cinco entregas que cobrem tudo que um pequeno negócio precisa pra ter presença visual e comunicação consistente. Você contrata a peça que falta, ou o pacote completo.</p>
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
          <div className="services-cta">
            <a className="btn btn-primary" href="#contato">Quero entender o melhor pacote pra mim</a>
          </div>
        </section>

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
                  <div className="voice-col__item">Identidade, site e redes, tudo conversando entre si</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-eyebrow">FAQ · perguntas que mais aparecem</div>
          <h2 className="section-title">
            Antes de começar, é normal ter <em>dúvida.</em>
          </h2>
          <p className="section-lead">As perguntas que mais aparecem, respondidas como a gente responderia numa conversa.</p>
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
      </main>

      <footer className="site-footer">
        <div className="site-footer__grain" aria-hidden="true" />
        <div className="site-footer__inner">
          <div className="site-footer__lead">
            <h2 className="site-footer__big">
              A luz na medida
              <br />
              <em>certa.</em>
            </h2>
          </div>

          <nav className="site-footer__col" aria-label="Estúdio">
            <h4>Estúdio</h4>
            <ul>
              <li><a href="#para-quem">Para quem</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-trabalhamos">Como trabalhamos</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>

          <div className="site-footer__col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/lummalabs" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511974613761" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:oi@lummalabs.com.br">oi@lummalabs.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div>
            <span className="site-footer__bottom-label">© Lumma · 2026</span>
            <span className="site-footer__bottom-value">Feito com calma</span>
          </div>
          <div>
            <span className="site-footer__bottom-label">Instagram</span>
            <a
              className="site-footer__bottom-value"
              href="https://www.instagram.com/lummalabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lummalabs
            </a>
          </div>
          <div>
            <span className="site-footer__bottom-label">Onde</span>
            <span className="site-footer__bottom-value">Brasil · remoto</span>
          </div>
          <div>
            <span className="site-footer__bottom-label">Tipografia</span>
            <span className="site-footer__bottom-value">Archivo · Inter · JetBrains Mono</span>
          </div>
        </div>
      </footer>
    </>
  );
}
