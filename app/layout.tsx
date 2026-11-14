import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import ConsentBanner from "./consent-banner";
import LoadingScreen from "./loading-screen";
import {
  DESCRIPTION,
  EMAIL,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  TAGLINE,
  TITLE,
  faqs,
  services,
} from "./content";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light",
};

// Imagem de compartilhamento como .png estático: o GitHub Pages define o tipo do arquivo
// pela extensão, e a rota /opengraph-image (sem extensão) não saía como image/png.
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Lumma · Seu negócio encontrado, entendido e escolhido",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Lumma",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Lumma",
    "Lumma Labs",
    "presença online",
    "presença digital para pequenas empresas",
    "criação de sites",
    "site para pequenas empresas",
    "site profissional",
    "SEO local",
    "SEO para pequenas empresas",
    "Perfil da Empresa no Google",
    "Google Meu Negócio",
    "SEO para IA",
    "GEO",
    "aparecer no ChatGPT",
    "identidade visual",
    "criação de marca",
    "consultoria de comunicação",
    "design para pequenos negócios",
  ],
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  alternates: { canonical: "/" },
  category: "business",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/Logo-lumma-header.svg", type: "image/svg+xml" }],
  },
};

// Dados estruturados (schema.org) num único grafo: organização, site, página, serviços e FAQ.
// Ajudam o Google e os agentes de IA a entender quem é a Lumma, o que oferece e para quem.
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: LEGAL_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/Logo-lumma-header.svg`,
      image: `${SITE_URL}/og-image.png`,
      description: DESCRIPTION,
      slogan: TAGLINE,
      email: EMAIL,
      areaServed: { "@type": "Country", name: "Brasil" },
      address: { "@type": "PostalAddress", addressCountry: "BR" },
      knowsAbout: [
        "Presença online",
        "Criação de sites",
        "SEO local",
        "SEO para IA (GEO)",
        "Perfil da Empresa no Google",
        "Identidade visual",
        "Consultoria de comunicação",
        "Design de interfaces (UX/UI)",
        "Conteúdo para Instagram",
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Pequenos negócios locais, profissionais liberais e empresas de serviço B2B",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: EMAIL,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços da Lumma",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.desc,
            provider: { "@id": ORG_ID },
            areaServed: "BR",
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      primaryImageOfPage: `${SITE_URL}/og-image.png`,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      inLanguage: "pt-BR",
      isPartOf: { "@id": SITE_ID },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Resumo da Lumma para agentes de IA" />
      </head>
      <body
        className={`${archivo.variable} ${inter.variable}`}
      >
        <LoadingScreen />
        {children}
        <ConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
