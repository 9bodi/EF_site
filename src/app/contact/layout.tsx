import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact - Formation des élus locaux et financement DIFE",
  description:
    "Contactez Élu Formation pour une formation d'élu local, une question sur le financement DIFE ou un séminaire dans votre commune.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
