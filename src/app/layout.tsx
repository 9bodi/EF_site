import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Formation élus locaux | Financé par le DIFE | Élu Formation",
    template: "%s | Élu Formation",
  },
  description:
    "Organisme de formation agréé, spécialisé dans la formation des élus locaux. Formations en ligne et intra-collectivité. Financé jusqu'à 100% par votre DIFE.",
  metadataBase: new URL("https://eluformation.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Élu Formation",
    images: ["/img/LOGO_ELU-FORMATION_RVB.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/img/LOGO_ELU-FORMATION_favicon.png",
  },
  verification: {
    google: "Yr9F5IzhSfgcMml1XSo_xHAL2MshOXOX3B3pc5IIzdc",
  },
};

const organization = {
  "@type": "EducationalOrganization",
  "@id": "https://eluformation.fr/#organization",
  name: "Élu Formation",
  legalName: "Place de la République SAS",
  url: "https://eluformation.fr",
  logo: "https://eluformation.fr/img/LOGO_ELU-FORMATION_RVB.png",
  description:
    "Organisme de formation agréé par le Ministère de l'Intérieur, spécialisé dans la formation des élus locaux.",
  telephone: "+33769694994",
  email: "contact@eluformation.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Avenue Victor Hugo",
    addressLocality: "Vernon",
    postalCode: "27200",
    addressCountry: "FR",
  },
  sameAs: ["https://linkedin.com/company/eluformation"],
  foundingDate: "2020",
  taxID: "FR54892385949",
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "WebSite",
      "@id": "https://eluformation.fr/#website",
      url: "https://eluformation.fr",
      name: "Élu Formation",
      inLanguage: "fr",
      publisher: { "@id": "https://eluformation.fr/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N9NWSDNFXH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N9NWSDNFXH');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-body text-gray-text bg-white antialiased">
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
