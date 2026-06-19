import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { CheckCircle, Users, Clock, MapPin, Building2, UserPlus, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Séminaire intra-collectivité - Formation-action pour élus municipaux",
  description:
    "Formez vos élus, soudez votre équipe et construisez votre feuille de route du mandat. Séminaire sur mesure dans votre commune. Organisme agréé.",
};

const formationsExemples = [
  "Réussir sa prise de fonction d'élu municipal",
  "Comprendre le rôle du maire, des adjoints et conseillers",
  "Maîtriser le budget communal",
  "Communiquer efficacement auprès des habitants",
  "Gérer les situations difficiles",
  "Utiliser l'intelligence artificielle dans son mandat",
];

const cohesionPoints = [
  "Mieux connaître le fonctionnement de chacun",
  "Définir les rôles dans l'équipe municipale",
  "Améliorer les échanges entre élus",
  "Partager une méthode de travail commune",
];

const programme = [
  {
    moment: "Matin",
    title: "Formation : réussir ses premiers mois d'élu",
    description: "Comprendre son rôle, ses responsabilités et les règles essentielles du mandat.",
  },
  {
    moment: "Déjeuner",
    title: "Temps d'échange avec l'équipe municipale",
    description: "Un moment pour renforcer les liens entre élus.",
  },
  {
    moment: "Après-midi",
    title: "Atelier formation-action",
    description: "Vos élus travaillent ensemble sur l'organisation de l'équipe, les priorités 2026-2032 et les méthodes de fonctionnement.",
  },
];

const situations = [
  {
    icon: Users,
    title: "Nouvelle équipe élue",
    description: "Installez rapidement une organisation efficace.",
  },
  {
    icon: UserPlus,
    title: "Nouveaux élus à intégrer",
    description: "Permettez à chacun de trouver sa place.",
  },
  {
    icon: RefreshCw,
    title: "Équipe reconduite",
    description: "Prenez du recul et préparez votre nouveau mandat.",
  },
];

const accompagnement = [
  "Analyse des besoins de votre équipe",
  "Création du programme personnalisé",
  "Organisation dans votre commune",
  "Mobilisation des solutions de financement",
];

export default function FormationsCommunePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Séminaire intra-collectivité
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Formez vos élus, soudez votre équipe et construisez votre feuille de route du mandat
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Les premiers mois du mandat sont le moment idéal pour installer les bonnes méthodes :
                comprendre les responsabilités de chacun, organiser le travail collectif et transformer
                votre projet municipal en actions.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Avec Élu Formation, organisez directement dans votre commune une journée sur mesure
                mêlant formation des élus, cohésion d&apos;équipe et atelier formation-action.
              </p>

              <div className="mt-6 space-y-2">
                {[
                  "Une équipe qui maîtrise les fondamentaux du mandat",
                  "Des élus qui apprennent à travailler ensemble",
                  "Des priorités claires pour démarrer 2026-2032",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Construire mon séminaire sur mesure
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
                <span>⭐ 95 % d&apos;élus satisfaits</span>
                <span>🏛 Institut de formation agréé par l&apos;État</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/seminaire.png"
                  alt="Séminaire intra-collectivité pour élus municipaux"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Votre séminaire construit autour de vos objectifs */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading text-center mb-16">
            Votre séminaire construit autour de vos objectifs
          </h2>

          {/* Formation intra */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-light flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">
                  Formation intra : faire monter en compétence votre équipe
                </h3>
              </div>
              <p className="text-gray-text leading-relaxed mb-6">
                Chaque commune est différente. Nous adaptons le contenu au profil de vos élus.
              </p>
              <p className="text-sm font-semibold text-navy mb-4">Exemples de formations :</p>
              <div className="space-y-2">
                {formationsExemples.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-text">
                    <span className="text-red font-bold mt-0.5">-</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-text mt-4 italic">
                Des contenus pratiques, directement reliés à vos réalités locales.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/intra.png"
                alt="Formation intra-collectivité"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cohésion */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-light flex items-center justify-center">
                  <Users className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">
                  Cohésion d&apos;équipe : mieux fonctionner pendant le mandat
                </h3>
              </div>
              <p className="text-gray-text leading-relaxed mb-6">
                Une équipe municipale réunit des parcours différents. Notre séminaire aide vos élus à :
              </p>
              <div className="space-y-2">
                {cohesionPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-text">
                    <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-navy mt-4">
                Objectif : transformer un collectif d&apos;élus en véritable équipe municipale.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg lg:order-1">
              <Image
                src="/img/team-building.png"
                alt="Cohésion d'équipe municipale"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Formation-action */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-light flex items-center justify-center">
                <MapPin className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">
                Formation-action : passer du projet aux réalisations
              </h3>
            </div>
            <p className="text-gray-text leading-relaxed mb-4">
              Parce qu&apos;un programme municipal doit maintenant devenir une feuille de route.
              Nous animons avec vos élus un travail collectif autour de vos priorités de mandat,
              l&apos;organisation des délégations et le suivi des projets.
            </p>
            <p className="text-sm text-gray-text italic">
              À l&apos;issue du séminaire, vous repartez avec une synthèse des échanges et des décisions travaillées.
            </p>
          </div>
        </Container>
      </section>

      {/* Exemple de journée */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy font-heading text-center mb-10">
            Exemple : votre journée de lancement de mandat 2026
          </h2>
          <div className="space-y-6">
            {programme.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <span className="text-xs font-semibold text-red uppercase tracking-wide">{item.moment}</span>
                <h3 className="text-lg font-bold text-navy mt-2 mb-1">{item.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Situations */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy font-heading text-center mb-10">
            Un séminaire adapté à votre situation
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {situations.map((s) => (
              <div key={s.title} className="text-center bg-gray-warm rounded-xl p-8 border border-gray-200">
                <s.icon className="w-8 h-8 text-navy mx-auto mb-4" />
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-text">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Organisation clé en main */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy font-heading text-center mb-8">
            Une organisation clé en main
          </h2>
          <p className="text-gray-text text-center mb-8">
            Votre conseiller Élu Formation vous accompagne :
          </p>
          <div className="space-y-3 max-w-lg mx-auto">
            {accompagnement.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-text">
                <span className="text-red font-bold">-</span>
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Financement */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy font-heading text-center mb-8">
            Votre séminaire peut être financé
          </h2>
          <p className="text-gray-text text-center mb-6">
            Votre équipe peut mobiliser les dispositifs dédiés :
          </p>
          <div className="space-y-3 max-w-lg mx-auto mb-6">
            {[
              "Budget formation des élus de la collectivité",
              "Droit Individuel à la Formation des Élus (DIFE)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-text">
                <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-text text-center italic">
            Nous vous accompagnons dans les démarches.
          </p>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-12 md:py-16 bg-navy text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white font-heading mb-4">
            Lancez votre mandat avec une équipe prête à agir
          </h2>
          <p className="text-gray-300 mb-8">
            Construisons ensemble votre séminaire intra-collectivité.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Planifier mon séminaire
          </Button>
        </Container>
      </section>
    </>
  );
}
