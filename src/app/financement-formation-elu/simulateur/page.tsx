"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { Euro, Calendar, Info, CheckCircle, ArrowRight } from "lucide-react";

const mandatOptions = [
  { label: "Conseiller·ère municipal·e", value: "municipal" },
  { label: "Maire", value: "maire" },
  { label: "Adjoint·e au maire", value: "adjoint" },
  { label: "Conseiller·ère départemental·e", value: "departemental" },
  { label: "Conseiller·ère régional·e", value: "regional" },
];

const anneeElectionOptions = [
  { label: "Mars 2026 (nouveau mandat)", value: 2026 },
  { label: "Mars 2020 (mandat en cours)", value: 2020 },
  { label: "Juin 2021 (départementales / régionales)", value: 2021 },
];

function calculerDIFE(anneeElection: number, montantUtilise: number): {
  totalAcquis: number;
  soldeEstime: number;
  anneeProchainCredit: number;
  detail: string[];
} {
  const plafond = 800;
  const creditAnnuel = 400;
  const anneeActuelle = 2026;
  const detail: string[] = [];

  let totalAcquis = 0;

  if (anneeElection === 2026) {
    // Nouveau mandat 2026
    totalAcquis = creditAnnuel; // Premier crédit au 30 mars 2026
    detail.push("30 mars 2026 : +400 € (1ère année de mandat)");
    detail.push("30 mars 2027 : +400 € → plafond de 800 € atteint");
  } else if (anneeElection === 2020) {
    // Mandat municipal 2020 — fin de mandat mars 2026
    // 2020: 300€ (conversion heures), 2021: +400€ = 700€ (plafond ancien)
    // 2023: plafond relevé à 800€, +400€ mais plafonné
    // En pratique, un élu 2020 qui n'a rien utilisé est à 800€
    totalAcquis = plafond;
    detail.push("Mandat 2020-2026 : droits accumulés jusqu'au plafond de 800 €");
    detail.push("Attention : si vous avez été réélu en 2026, vos droits non utilisés sont conservés");
    detail.push("Les droits restent utilisables jusqu'à 6 mois après la fin du mandat précédent");
  } else if (anneeElection === 2021) {
    // Départementales/régionales 2021
    // 2021: 400€, 2022: +300€ = 700€ (ancien plafond), 2023: plafond à 800€ → +100€
    // 2024: +400€ mais plafonné à 800€
    totalAcquis = plafond;
    detail.push("Mandat depuis 2021 : droits accumulés jusqu'au plafond de 800 €");
    detail.push("Alimentation chaque année au 5 juillet (date anniversaire)");
  }

  const soldeEstime = Math.min(totalAcquis - montantUtilise, plafond);
  const anneeProchainCredit = anneeElection === 2026 ? 2027 : anneeActuelle + 1;

  return {
    totalAcquis: Math.min(totalAcquis, plafond),
    soldeEstime: Math.max(soldeEstime, 0),
    anneeProchainCredit,
    detail,
  };
}

export default function SimulateurPage() {
  const [step, setStep] = useState<"form" | "email" | "result">("form");
  const [mandat, setMandat] = useState("");
  const [anneeElection, setAnneeElection] = useState<number>(2026);
  const [montantUtilise, setMontantUtilise] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [resultat, setResultat] = useState<ReturnType<typeof calculerDIFE> | null>(null);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mandat) return;
    setStep("email");
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  const result = calculerDIFE(anneeElection, montantUtilise);
  setResultat(result);
  setStep("result");

  // Envoi du mail via eTarget
  try {
    await fetch("/api/simulateur", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        mandat: mandatOptions.find((o) => o.value === mandat)?.label || mandat,
        soldeEstime: result.soldeEstime,
        totalAcquis: result.totalAcquis,
        detail: result.detail,
      }),
    });
  } catch (err) {
    console.error("Erreur envoi email:", err);
  }
};


  const reset = () => {
    setStep("form");
    setMandat("");
    setAnneeElection(2026);
    setMontantUtilise(0);
    setEmail("");
    setResultat(null);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container className="max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
            Simulez vos droits DIFE en 1 minute
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Estimez le montant de vos droits à la formation d&apos;élu (DIFE)
            en répondant à 3 questions simples. Résultat immédiat.
          </p>
        </Container>
      </section>

      {/* Simulateur */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-2xl">

          {/* Étape 1 : Formulaire */}
          {step === "form" && (
            <form onSubmit={handleSubmitForm} className="space-y-8">
              <div className="bg-gray-warm rounded-2xl p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-navy font-heading mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Vos informations de mandat
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Votre fonction
                    </label>
                    <select
                      value={mandat}
                      onChange={(e) => setMandat(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Sélectionnez votre fonction</option>
                      {mandatOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Date de votre élection
                    </label>
                    <select
                      value={anneeElection}
                      onChange={(e) => setAnneeElection(Number(e.target.value))}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {anneeElectionOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Montant DIFE déjà utilisé (€)
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={800}
                      step={10}
                      value={montantUtilise}
                      onChange={(e) => setMontantUtilise(Number(e.target.value))}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0 si vous n'avez jamais utilisé vos droits"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Laissez 0 si vous n&apos;avez jamais suivi de formation avec votre DIFE
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
                >
                  Continuer
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}

          {/* Étape 2 : Email */}
          {step === "email" && (
            <form onSubmit={handleSubmitEmail} className="space-y-8">
              <div className="bg-gray-warm rounded-2xl p-8 border border-gray-200 text-center">
                <h2 className="text-xl font-bold text-navy font-heading mb-3">
                  Dernière étape — Recevez votre simulation
                </h2>
                <p className="text-gray-text mb-6">
                  Entrez votre adresse e-mail pour accéder à votre résultat et
                  recevoir un récapitulatif avec les prochaines étapes.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-md mx-auto rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-center"
                  placeholder="votre@email.fr"
                  required
                />
                <p className="text-xs text-gray-400 mt-2">
                  Nous ne partagerons jamais votre adresse. Politique de confidentialité.
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="text-sm text-gray-text hover:text-navy transition-colors"
                >
                  ← Modifier mes réponses
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
                >
                  Voir mon résultat
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}

          {/* Étape 3 : Résultat */}
          {step === "result" && resultat && (
            <div className="space-y-8">
              {/* Carte résultat */}
              <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
                  Votre solde DIFE estimé
                </p>
                <p className="text-6xl md:text-7xl font-bold font-heading">
                  {resultat.soldeEstime}&nbsp;€
                </p>
                <p className="text-gray-300 mt-3">
                  sur un plafond de 800 € — droits acquis : {resultat.totalAcquis} €
                </p>
              </div>

              {/* Détail */}
              <div className="bg-gray-warm rounded-2xl p-8 border border-gray-200">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Détail du calcul
                </h3>
                <ul className="space-y-3">
                  {resultat.detail.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                      <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ce que vous pouvez financer */}
              <div className="bg-gray-warm rounded-2xl p-8 border border-gray-200">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-primary" />
                  Avec {resultat.soldeEstime} € vous pouvez financer
                </h3>
                <div className="space-y-3">
                  {resultat.soldeEstime >= 400 && (
                    <div className="flex items-start gap-2 text-sm text-gray-text">
                      <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                      Au moins 1 formation en visioconférence (4h + 1h tutorat)
                    </div>
                  )}
                  {resultat.soldeEstime >= 800 && (
                    <div className="flex items-start gap-2 text-sm text-gray-text">
                      <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                      2 formations ou 1 formation + le e-learning Image & Communication
                    </div>
                  )}
                  {resultat.soldeEstime > 0 && resultat.soldeEstime < 400 && (
                    <div className="flex items-start gap-2 text-sm text-gray-text">
                      <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                      Un complément peut être pris en charge par votre collectivité
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-sm text-gray-text">
                    <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                    Le e-learning &quot;Bien gérer son image et sa communication d&apos;élu local&quot; (~3h)
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  subtitle="Un conseiller vous rappelle sous 24h"
                >
                  Être accompagné pour utiliser mes droits
                </Button>
                <div className="flex justify-center gap-6">
                  <Button href="/formations" variant="outline" size="sm">
                    Voir les formations
                  </Button>
                  <button
                    onClick={reset}
                    className="text-sm text-gray-text hover:text-navy transition-colors"
                  >
                    Refaire une simulation
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                Cette simulation est une estimation basée sur les règles en vigueur
                (400 €/an, plafond 800 €). Le montant exact de vos droits est
                consultable sur{" "}
                <a
                  href="https://www.moncompteformation.gouv.fr/espace-public/mon-compte-elu-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mon Compte Élu
                </a>
                . Élu Formation ne peut être tenu responsable d&apos;un écart entre
                l&apos;estimation et le solde réel.
              </p>
            </div>
          )}

        </Container>
      </section>
    </>
  );
}
