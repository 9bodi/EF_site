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
  icons: {
  icon: "/favicon.ico",
  apple: "/img/LOGO_ELU-FORMATION_favicon.png",
},

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body text-gray-text bg-white antialiased">
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
