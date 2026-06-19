import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { CheckCircle, HelpCircle, CreditCard, Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Financer ma formation d'élu",
  description:
    "Votre formation peut être prise en charge. Mon Compte Élu ou financement collectivité : découvrez les solutions et laissez-vous accompagner.",
};

const stepsCompteElu = [
  {
    title: "Je me connecte à Mon Compte Formation",
    text: "Accédez à votre espace personnel. Vous pourrez consulter le montant disponible pour financer vos formations d'élu.",
  },
  {
    title: "J'active Mon Identité Numérique si nécessaire",
    text: "Pour sécuriser votre inscription, Mon Compte Formation demande une vérification de votre identité. Si vous n'avez jamais utilisé ce service, prévoyez de l'activer avant votre inscription. Vous aurez besoin d'une pièce d'identité valide, de votre téléphone et de quelques minutes.",
  },
  {
    title: "Je choisis ma formation",
    text: "Sélectionnez votre formation Élu Formation. Pour simplifier votre inscription, nous pouvons aussi vous transmettre directement le bon lien.",
  },
  {
    title: "Je valide ma demande",
    text: "Confirmez votre inscription depuis votre espace personnel. Une fois votre demande acceptée, votre place est réservée.",
  },
];

const stepsCollectivite = [
  {
    title: "Je choisis ma formation",
    text: "Sélectionnez la formation adaptée à votre mandat.",
  },
  {
    title: "Élu Formation prépare votre dossier",
    text: "Nous vous transmettons les documents nécessaires : programme de formation, proposition financière et convention de formation.",
  },
  {
    title: "Ma collectivité valide la prise en charge",
    text: "Vous transmettez votre demande selon l'organisation de votre collectivité : maire, direction générale des services, secrétariat de mairie ou service formation. Après validation, votre inscription est confirmée.",
  },
];

const tableData = [
  { situation: "Je souhaite utiliser mes droits personnels", solution: "Mon Compte Élu" },
  { situation: "Je veux gérer directement mon inscription", solution: "Mon Compte Élu" },
  { situation: "Je préfère demander une prise en charge par ma commune", solution: "Collectivité" },
  { situation: "Plusieurs élus souhaitent suivre la même formation", solution: "Collectivité" },
  { situation: "Nous voulons organiser une journée adaptée à notre équipe", solution: "Collectivité" },
];

const faq = [
  {
    q: "Je n'ose pas demander une formation, cela va coûter à ma commune",
    a: "C'est une question que beaucoup d'élus se posent. La formation des élus est un droit prévu pendant le mandat. Les collectivités disposent d'un budget destiné à accompagner leurs élus dans leurs missions. Comme une commune investit dans ses équipements ou ses services, elle peut aussi investir dans les compétences de ses élus. Un élu formé comprend mieux ses dossiers, sécurise ses décisions et agit plus efficacement pour son territoire.",
  },
  {
    q: "Quelle est la différence entre Mon Compte Élu et le financement collectivité ?",
    a: "Mon Compte Élu correspond à vos droits personnels de formation. Vous choisissez votre formation et réalisez votre inscription directement depuis votre espace. Le financement collectivité utilise le budget formation prévu par votre commune ou intercommunalité. Dans les deux cas, l'objectif est le même : vous permettre de progresser dans l'exercice de votre mandat.",
  },
  {
    q: "Ma collectivité peut-elle financer uniquement des formations de groupe ?",
    a: "Non. Le budget formation peut financer la formation d'un seul élu ou une formation organisée pour plusieurs élus.",
  },
  {
    q: "Je bloque avec Mon Identité Numérique, que faire ?",
    a: "Cette étape peut être compliquée lors d'une première utilisation. Élu Formation peut vous accompagner pour créer votre accès, retrouver votre compte ou finaliser votre inscription.",
  },
  {
    q: "Je ne sais pas quelle solution utiliser",
    a: "Expliquez-nous simplement votre situation. Nous vous aidons à choisir le financement adapté et à réaliser les démarches nécessaires.",
  },
];

export default function FinancementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Financer ma formation d&apos;élu
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Vous souhaitez suivre une formation mais vous ne savez pas comment
              financer votre inscription ? En tant qu&apos;élu local, vous disposez
              de solutions dédiées pour développer vos compétences tout au long
              de votre mandat.
            </p>
            <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-white font-semibold mb-3">Votre formation peut être financée :</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    <strong className="text-white">Avec Mon Compte Élu</strong> — vous utilisez vos droits personnels à la formation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    <strong className="text-white">Avec votre collectivité</strong> — votre commune ou votre intercommunalité prend en charge votre formation grâce au budget dédié aux élus.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-400">
              Vous ne savez pas quelle solution choisir ? Notre équipe vous accompagne pour identifier la solution adaptée et faciliter vos démarches.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Trouver mon financement
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution 1 : Mon Compte Élu */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium text-white bg-navy px-3 py-1 rounded-full">Solution 1</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-4">
            J&apos;utilise mes droits Mon Compte Élu
          </h2>
          <p className="text-gray-text leading-relaxed mb-6">
            Votre mandat vous donne accès à des droits personnels pour vous former.
            Avec Mon Compte Élu, vous choisissez votre formation et réalisez votre
            inscription directement en ligne.
          </p>

          <div className="bg-gray-warm rounded-xl p-6 border border-gray-200 mb-8">
            <h3 className="font-bold text-navy mb-4">Les avantages</h3>
            <div className="space-y-3">
              {[
                "Vous choisissez librement votre formation",
                "Vous utilisez votre enveloppe personnelle disponible",
                "Vous réalisez votre demande en autonomie",
                "Vous pouvez vous former sans solliciter le budget de votre collectivité",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-text">
                  <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-navy font-heading mb-6">Comment utiliser Mon Compte Élu ?</h3>
          <div className="space-y-6 mb-8">
            {stepsCompteElu.map((s, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center shrink-0 text-lg">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-1">{s.title}</h4>
                  <p className="text-gray-text leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-warm rounded-xl p-5 border border-gray-200 mb-6">
            <p className="text-sm text-gray-text">
              <strong className="text-navy">Vous êtes bloqué(e) ?</strong> Notre équipe peut vous guider pour créer votre accès, retrouver votre compte ou finaliser votre inscription.
            </p>
          </div>
        </Container>
      </section>

      {/* Solution 2 : Collectivité */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium text-white bg-navy px-3 py-1 rounded-full">Solution 2</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-4">
            Je fais financer ma formation par ma collectivité
          </h2>
          <p className="text-gray-text leading-relaxed mb-4">
            Votre commune ou votre intercommunalité dispose d&apos;un budget destiné à la
            formation de ses élus. Ce budget existe pour une raison simple : permettre
            aux élus d&apos;acquérir les connaissances nécessaires pour exercer pleinement
            leur mandat.
          </p>
          <p className="text-gray-text leading-relaxed mb-4">
            Une collectivité qui forme ses élus investit dans les compétences de celles
            et ceux qui prennent des décisions pour le territoire. La formation n&apos;est pas
            une dépense personnelle demandée à la commune. C&apos;est un droit prévu pour
            accompagner les élus dans leurs responsabilités.
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <h3 className="font-bold text-navy mb-4">Ce financement peut permettre :</h3>
            <div className="space-y-3">
              {[
                "À un élu de suivre une formation individuelle",
                "À plusieurs élus de participer à une même formation",
                "D'organiser une formation sur mesure directement dans votre collectivité",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-text">
                  <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-navy font-heading mb-6">Comment demander une prise en charge ?</h3>
          <div className="space-y-6 mb-8">
            {stepsCollectivite.map((s, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center shrink-0 text-lg">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-1">{s.title}</h4>
                  <p className="text-gray-text leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contacter mon conseiller Élu Formation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Préparer ma demande de prise en charge
            </Button>
          </div>
        </Container>
      </section>

      {/* Tableau comparatif */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy font-heading mb-8">Quelle solution choisir ?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold rounded-tl-xl">Votre situation</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold rounded-tr-xl">Solution adaptée</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-warm" : "bg-white"}>
                    <td className="px-6 py-4 text-sm text-gray-text">{row.situation}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-navy">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy font-heading mb-8">Questions fréquentes</h2>
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <h3 className="font-bold text-navy">{item.q}</h3>
                </div>
                <p className="text-gray-text leading-relaxed ml-8">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-12 md:py-16 bg-navy text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white font-heading mb-6">
            Besoin d&apos;aide pour financer votre formation ?
          </h2>
          <p className="text-gray-300 mb-8">
            Expliquez-nous simplement votre situation. Nous vous aidons à choisir
            le financement adapté et à réaliser les démarches nécessaires.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Être accompagné dans mon financement
          </Button>
        </Container>
      </section>
    </>
  );
}
