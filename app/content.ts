// Conteúdo do site. Fonte única para a página e para os dados estruturados (JSON-LD),
// assim o que o Google e as IAs leem é exatamente o que a pessoa vê.

export const SITE_URL = "https://lummalabs.com.br";
export const SITE_NAME = "Lumma";
export const LEGAL_NAME = "Lumma Labs";
export const TAGLINE = "Iluminar é tornar possível ver.";
export const EMAIL = "oi@lummalabs.com.br";

export const TITLE = "Lumma · Presença online, sites e SEO para pequenos negócios";
export const DESCRIPTION =
  "Marca, site, Google e SEO para IA pensados juntos. A Lumma ajuda pequenos negócios e profissionais a serem encontrados, entendidos e escolhidos online.";

export const verbs = [
  {
    key: "encontrado",
    title: "Ser encontrado",
    pain: "“Ninguém me acha no Google, no Maps, nem quando pergunta pro ChatGPT.”",
    desc: "A gente cuida do SEO técnico e local, do Perfil da Empresa no Google e prepara seu negócio para aparecer nas respostas de IA.",
  },
  {
    key: "entendido",
    title: "Ser entendido",
    pain: "“As pessoas não entendem o que eu faço, ou acham que sou amador.”",
    desc: "Mensagem clara, identidade visual e comunicação que explicam o seu valor em poucos segundos.",
  },
  {
    key: "escolhido",
    title: "Ser escolhido",
    pain: "“Me acham, mas não me chamam.”",
    desc: "Site que passa confiança e leva ao contato, conteúdo que mostra autoridade e prova social no lugar certo.",
  },
] as const;

export const services = [
  {
    num: "001",
    name: "Raio-X de Presença",
    desc: "Para saber onde você está antes de investir. Analisamos como seu negócio aparece no Google, no Maps, nas respostas de IA, no site e no Instagram, e entregamos 10 ações em ordem de prioridade, com um vídeo explicando cada uma.",
    apps: "Diagnóstico · ponto de partida",
    img: "/servicos/raio-x.webp",
  },
  {
    num: "002",
    name: "Marca Essencial",
    desc: "Quando sua imagem não está à altura do seu trabalho. Posicionamento e mensagem, logo, cores, tipografia, guia de marca e kit para as redes sociais.",
    apps: "Ser entendido",
    img: "/servicos/marca.webp",
  },
  {
    num: "003",
    name: "Site Essencial",
    desc: "Quando te procuram e não encontram nada que passe confiança. Site com texto escrito pela Lumma, SEO técnico e local, Perfil da Empresa no Google configurado e base pronta para as IAs.",
    apps: "Ser encontrado · ser escolhido",
    img: "/servicos/site.webp",
  },
  {
    num: "004",
    name: "Presença Completa",
    desc: "Marca e site pensados juntos, com o primeiro mês de acompanhamento incluso. O caminho mais direto para parecer, online, o negócio que você já é.",
    apps: "Encontrado · entendido · escolhido",
    img: "/servicos/presenca-completa.webp",
  },
  {
    num: "005",
    name: "Plano Visível",
    desc: "Para a sua presença não envelhecer. Manutenção do site, Perfil da Empresa no Google ativo, resposta a avaliações e um teste mensal de como você aparece no Google e nas IAs.",
    apps: "Mensal · ser encontrado",
    img: "/servicos/plano-visivel.webp",
  },
  {
    num: "006",
    name: "Plano Presença",
    desc: "Tudo do Plano Visível, mais conteúdo para o Instagram todo mês, com calendário editorial e uma reunião mensal de direção.",
    apps: "Mensal · ser escolhido",
    img: "/servicos/plano-presenca.webp",
  },
] as const;

export const methods = [
  {
    num: "01",
    title: "Raio-X",
    tagline: "Antes de investir, entender.",
    intro: "Olhamos a sua presença do jeito que o seu cliente olha: no Google, no Maps, nas IAs, no site e no Instagram.",
    bullets: [
      "Documento curto com 10 ações priorizadas",
      "Vídeo explicando cada ponto, para ver quando quiser",
      "Valor abatido se você fechar um projeto em até 30 dias",
    ],
    fit: "Quem quer saber por onde começar sem comprar no escuro.",
  },
  {
    num: "02",
    title: "Projeto",
    tagline: "Escopo fechado, prazo combinado.",
    intro: "Marca, site ou os dois. Escopo, prazo e valor por escrito antes de começar, e um projeto por vez, com atenção total.",
    bullets: [
      "Proposta clara logo depois da primeira conversa",
      "Etapas validadas com você, com rodadas de ajuste definidas",
      "Arquivos e acessos entregues, tudo fica com você",
    ],
    fit: "Quem precisa construir ou refazer a base: marca, site e Google.",
  },
  {
    num: "03",
    title: "Acompanhamento",
    tagline: "Presença não se faz uma vez só.",
    intro: "Planos mensais para manter site, Google e Instagram vivos, ou um bloco de consultoria para quem já tem equipe e quer direção.",
    bullets: [
      "Teste mensal de como você aparece no Google e nas IAs",
      "Relatório curto, em português claro",
      "No bloco de consultoria, você decide o que entra na fila",
    ],
    fit: "Quem já tem a base e quer continuar sendo encontrado.",
  },
] as const;

export const differentials = [
  {
    label: "Senioridade acessível",
    text: "Quem cuida do seu projeto tem mais de 17 anos desenhando interfaces, 8 em UX e certificação Nielsen Norman Group. O mesmo rigor usado em produtos de empresas grandes.",
  },
  {
    label: "Tudo conectado",
    text: "Marca, site, Google e conteúdo pensados juntos, pela mesma cabeça. Sem três fornecedores que não conversam entre si.",
  },
  {
    label: "Pronto para IA desde o começo",
    text: "Seu site nasce rastreável, com dados estruturados e respostas diretas, do jeito que o Google e as IAs leem. Sem promessa mágica.",
  },
  {
    label: "Clareza e previsibilidade",
    text: "Escopo, prazo e valor definidos antes de começar. Resposta em até 1 dia útil e prazo combinado é prazo cumprido.",
  },
] as const;

export const faqs = [
  {
    q: "Para que tipo de negócio a Lumma trabalha?",
    a: "Negócios locais, como clínicas, estúdios, restaurantes, lojas e escritórios, e profissionais ou empresas de serviço, como advocacia, engenharia, arquitetura e consultoria. O ponto em comum: já têm clientes e querem parecer, online, tão bons quanto são de verdade.",
  },
  {
    q: "O que é o Raio-X de Presença?",
    a: "É o nosso diagnóstico. Analisamos como seu negócio aparece no Google, no Maps, nas respostas de IA como ChatGPT e Gemini, no seu site e no Instagram. Você recebe um documento com 10 ações em ordem de prioridade e um vídeo explicando tudo. Se fechar um projeto em até 30 dias, o valor do Raio-X é abatido.",
  },
  {
    q: "Vocês fazem SEO para IA? Meu negócio vai aparecer no ChatGPT?",
    a: "A gente prepara seu negócio para aparecer no Google e nas respostas de IA, sem promessa de atalho. Na prática, é SEO bem feito: site rastreável, dados estruturados, perguntas respondidas de forma direta, Perfil da Empresa no Google completo e informações iguais em todo lugar. Ninguém sério pode garantir posição no Google ou citação numa IA, e a gente não garante.",
  },
  {
    q: "Como funciona o valor?",
    a: "Cada projeto tem escopo e valor fechados antes de começar, sem cobrança por hora. Depois da primeira conversa, você recebe uma proposta por escrito e decide com calma.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Depende do projeto. O prazo vem por escrito na proposta, antes de começar, e a gente trabalha um projeto por vez para cumprir o que combinou.",
  },
  {
    q: "O que a Lumma não faz?",
    a: "Tráfego pago e gestão de anúncios, resposta diária a comentários e mensagens, fotografia e vídeo presencial, lojas virtuais complexas e sistemas sob medida. Quando for o caso, indicamos parceiros.",
  },
  {
    q: "Depois do projeto, o que foi criado é meu?",
    a: "Sim. Marca, arquivos editáveis e acessos ficam com você. Você não fica preso à Lumma para continuar.",
  },
  {
    q: "Vocês atendem a minha cidade?",
    a: "Sim. O trabalho é remoto e atendemos negócios em todo o Brasil, com reuniões por vídeo e o resto por mensagem e vídeo gravado.",
  },
  {
    q: "Como a gente começa?",
    a: "Você manda uma mensagem contando o que precisa. Marcamos uma conversa rápida, sem compromisso, para entender o contexto. Se fizer sentido, o próximo passo costuma ser o Raio-X.",
  },
] as const;

export const marqueeItems = [
  "Marca",
  "Site",
  "SEO local",
  "Perfil da Empresa no Google",
  "SEO para IA",
  "Conteúdo",
  "Comunicação",
];

export const manifesto = {
  title: "Pequeno não é sinônimo de",
  highlight: "amador.",
  paragraphs: [
    "Tem muito negócio bom que ninguém vê. A clínica que atende como poucas e não aparece no Google. O escritório que entrega como empresa grande e se apresenta como improviso. O café que todo mundo indica e ninguém encontra no mapa.",
    "A gente acredita que cuidado não depende de tamanho. Marca clara, site honesto e presença bem feita não deveriam ser privilégio de quem tem orçamento de multinacional.",
    "Por isso a Lumma existe: para levar o rigor das grandes empresas a quem está construindo algo do próprio jeito. Sem atalho, sem promessa mágica, sem palavra difícil.",
  ],
  closing: "Seu trabalho já fala por você. A gente só acende a",
  closingHighlight: "luz.",
} as const;
