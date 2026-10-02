import type { Metadata } from "next";
import Script from "next/script";
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
  icons: {
    icon: "/favicon.ico",
    apple: "/img/LOGO_ELU-FORMATION_favicon.png",
  },
  verification: {
    google: "Yr9F5IzhSfgcMml1XSo_xHAL2MshOXOX3B3pc5IIzdc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NXMLSY8WND"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NXMLSY8WND');
          `}
        </Script>
      </head>
      <body className="font-body text-gray-text bg-white antialiased">
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
