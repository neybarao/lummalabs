import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://lummalabs.com.br";
const SITE_NAME = "Lumma";
const TITLE = "Lumma — Estúdio de design, multimídia e comunicação";
const DESCRIPTION =
  "Design, multimídia e comunicação pra negócios pequenos que querem ser vistos como o que realmente são. Identidade visual, websites, redes sociais, aplicativos e manual de comunicação.";

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
    "identidade visual",
    "design para pequenos negócios",
    "websites",
    "design de redes sociais",
    "manual de comunicação",
    "branding",
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
      "Identidade visual",
      "Design",
      "Redes sociais",
      "Websites",
      "Aplicativos",
      "Manual de comunicação",
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
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
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
