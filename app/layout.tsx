import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-3G49BN4MCD";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const SITE_URL = "https://lummalabs.com.br";
const SITE_NAME = "Lumma";
const TITLE = "Lumma · Estúdio de design e produto digital";
const DESCRIPTION =
  "Ajudamos empresas a idealizar, desenhar e prototipar produtos digitais. Sites, SaaS, aplicativos, plataformas, design systems e identidade. Do conceito ao protótipo navegável.";

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
    "estúdio de design",
    "design de produto",
    "UX UI",
    "design de SaaS",
    "prototipagem",
    "design system",
    "websites",
    "design Brasil",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  category: "design",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/Logo-lumma-header.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  legalName: "Lumma Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo-lumma-header.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  email: "oi@lummalabs.com.br",
  telephone: "+55-11-97461-3761",
  areaServed: "BR",
  inLanguage: "pt-BR",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-97461-3761",
    contactType: "customer service",
    email: "oi@lummalabs.com.br",
    areaServed: "BR",
    availableLanguage: ["Portuguese"],
  },
  sameAs: ["https://wa.me/5511974613761"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: [
      "Web design e sites",
      "Design de produto (UX/UI)",
      "Estratégia e estrutura de produto",
      "Prototipagem",
      "Design System",
      "Identidade e marca",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body
        className={`${archivo.variable} ${inter.variable}`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
