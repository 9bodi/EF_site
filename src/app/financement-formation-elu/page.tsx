import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { CheckCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "DIFE élu — Financement de votre formation",
  description:
    "Tout comprendre sur le Droit Individuel à la Formation d'Élu (DIFE). Simulez vos droits, mobilisez votre budget formation, inscrivez-vous. Conseiller dédié.",
};

const difeInfo = [
  {
    q: "Qui est concerné ?",
    a: "Tous les élus locaux : maires, adjoints, conseillers municipaux, conseillers départementaux et régionaux. Élus indemnisés ou non.",
  },
  {
    q: "Quel montant ?",
    a: "800 euros par année de mandat. Droits capitalisés et utilisables cumulativement au fil du mandat.",
  },
  {
    q: "Qui finance ?",
    a: "La Caisse des Dépôts et Consignations via les cotisations DIFE. Ce n'est pas prélevé sur le budget communal.",
  },
  {
    q: "Qu'est-ce que ça couvre ?",
    a: "Les frais pédagogiques de formation, les frais de déplacement et d'hébergement sous conditions, les certifications.",
  },
  {
    q: "Jusqu'à quand ?",
    a: "Les droits DIFE sont utilisables pendant le mandat et jusqu'à 6 mois après sa fin.",
  },
  {
    q: "Comment mobiliser ?",
    a: "Via le portail Mon Compte Élu sur moncompteformation.gouv.fr — nos conseillers vous guident.",
  },
];

const steps = [
  {
    title: "Simuler vos droits",
    text: "Contactez notre conseiller formation : il vérifie votre solde DIFE, la disponibilité de la session et confirme l'éligibilité de la formation. C'est gratuit et sans engagement.",
  },
  {
    title: "Choisir votre formation",
    text: "Consultez notre catalogue et choisissez la formation qui correspond à vos besoins actuels. Votre conseiller peut aussi vous guider selon votre profil.",
  },
  {
    title: "Valider sur Mon Compte Élu",
    text: "Connectez-vous sur moncompteformation.gouv.fr avec votre identité numérique La Poste. Notre équipe vous accompagne pas à pas si besoin.",
  },
  {
    title: "Suivre la formation",
    text: "Le jour J, rejoignez la session en visioconférence. Vous recevez votre attestation de réussite dans les 5 jours ouvrés suivants.",
  },
];

const faq = [
  {
    q: "Je suis nouveau conseiller municipal non indemnisé. Ai-je quand même des droits DIFE ?",
    a: "Oui. Le DIFE s'applique à tous les élus locaux, qu'ils soient indemnisés ou non. Quel que soit votre niveau de responsabilité dans le conseil municipal, vous bénéficiez de 800 euros de droits à la formation par an.",
  },
  {
    q: "Ma commune peut-elle financer ma formation en plus du DIFE ?",
    a: "Oui. Les deux financements sont cumulables. Si le coût de la formation dépasse votre crédit DIFE, la commune peut prendre en charge le surplus dans le cadre de son budget formation — c'est une dépense obligatoire prévue par le Code général des collectivités territoriales.",
  },
  {
    q: "Je n'ai pas d'identité numérique La Poste. Comment faire ?",
    a: "Pas de panique. La création d'une identité numérique La Poste est gratuite et prend environ 10 minutes. Nos conseillers vous guident à travers la procédure lors de votre appel de simulation. Vous pouvez aussi vous faire aider dans un bureau de poste.",
  },
  {
    q: "Est-ce que toutes les formations Élu Formation sont bien éligibles au DIFE ?",
    a: "Oui. Élu Formation est agréé par le Ministère de l'Intérieur et certifié Qualiopi. L'ensemble de nos formations est éligible au financement DIFE via Mon Compte Élu.",
  },
];

export default function FinancementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Vos droits à la formation d&apos;élu — Le DIFE expliqué simplement
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Depuis 2022, chaque élu local — qu&apos;il soit indemnisé ou non —
                dispose d&apos;un Droit Individuel à la Formation (DIFE). Ce budget
                formation est financé par la Caisse des Dépôts et Consignations,
                indépendamment du budget de votre commune. Pourtant, la majorité
                des élus ne savent pas qu&apos;ils l&apos;ont — ou ne savent pas comment
                l&apos;utiliser.
              </p>
              <p className="mt-4 text-red font-semibold text-lg">
                Cette page vous explique tout en 5 minutes.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/finance1.png"
                  alt="Financement DIFE pour les élus locaux"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Qu'est-ce que le DIFE */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle title="Qu'est-ce que le DIFE élu ?" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {difeInfo.map((item) => (
              <div
                key={item.q}
                className="bg-gray-warm rounded-xl p-6 border border-gray-200"
              >
                <p className="font-bold text-navy text-sm mb-2">{item.q}</p>
                <p className="text-sm text-gray-text leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4 étapes */}
      <section className="py-16 md:py-24 bg-gray-light">
        <Container className="max-w-3xl">
          <SectionTitle title="Comment utiliser votre DIFE en 4 étapes" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-red text-white font-bold flex items-center justify-center shrink-0 text-lg">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
  href="/financement-formation-elu/simulateur"
  variant="primary"
  size="lg"
  subtitle="Un conseiller vous rappelle sous 24h"
>
  Simuler mes droits DIFE gratuitement
</Button>

          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionTitle title="FAQ Financement" />
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.q}>
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <h3 className="font-bold text-navy">{item.q}</h3>
                </div>
                <p className="text-gray-text leading-relaxed ml-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
