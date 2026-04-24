"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQ: FAQItem[] = [
  {
    question:
      "Le financement DIFE couvre-t-il l'intégralité de cette formation ?",
    answer:
      "Oui, dans la grande majorité des cas. Votre DIFE élu vous donne droit à 800 euros de formation par an. Le tarif de cette session étant inférieur ou égal à ce montant, elle peut être prise en charge à 100 % via Mon Compte Élu. Notre équipe vous accompagne dans toutes les démarches.",
  },
  {
    question:
      "Ai-je besoin d'un matériel particulier pour suivre la formation en distanciel ?",
    answer:
      "Il vous suffit d'un ordinateur ou d'une tablette avec connexion internet et caméra. Nous utilisons une plateforme de visioconférence professionnelle (type Zoom ou Teams). Un guide de connexion vous sera envoyé avant la session.",
  },
  {
    question: "Est-ce que je reçois une attestation de formation ?",
    answer:
      "Oui. À l'issue de la formation, vous recevez une attestation de participation et un certificat de réussite si vous avez satisfait aux évaluations. Ces documents sont exigés pour la prise en charge DIFE.",
  },
];

export default function FormationFAQ({ faq }: { faq?: FAQItem[] }) {
  const items = faq ?? defaultFAQ;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading text-center mb-10">
          Questions fréquentes
        </h2>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-warm rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
              >
                <span className="font-semibold text-navy text-sm md:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-red shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-text text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

