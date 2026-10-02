import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simuler mes droits DIFE | Calculez vos droits à la formation",
  description:
    "Estimez en 2 minutes le montant de votre DIFE (600 €/an, plafond 1 200 € depuis décembre 2026). Gratuit et sans engagement.",
};

export default function SimulateurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
