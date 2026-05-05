import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Assurance élu, recrutement et conseil pour collectivités",
  description:
    "Au-delà de la formation : assurance protection de l'élu, appui au recrutement de cadres territoriaux, conseil en gestion locale. Contactez nos experts.",
};

const assurancePoints = [
  "Comprendre vos droits à la protection fonctionnelle (prise en charge des frais de défense)",
  "Identifier les couvertures dont vous bénéficiez via votre commune",
  "Évaluer votre besoin de couverture complémentaire",
  "Vous orienter vers les contrats adaptés à votre situation",
];

const recrutementServices = [
  "Appui à la définition de poste et à la rédaction de la fiche de mission",
  "Diffusion de l'offre sur les supports adaptés (Emploi Territorial, La Gazette, etc.)",
  "Présélection des candidatures et organisation des entretiens",
  "Évaluation des compétences et aide à la décision",
  "Intégration et accompagnement du nouveau collaborateur",
];

const conseilMissions = [
  "Diagnostic organisationnel et plan d'actions",
  "Accompagnement à l'élaboration du projet de mandat",
  "Appui à la préparation des conseils municipaux",
  "Médiation et gestion des situations conflictuelles",
  "Audit de communication et plan de communication locale",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight max-w-4xl">
            Au-delà de la formation : des services complets pour accompagner
            votre mandat
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Réussir son mandat ne se limite pas à se former. Les élus locaux
            font face à des enjeux juridiques, administratifs et humains qui
            nécessitent un accompagnement spécifique. Élu Formation a développé
            une gamme de services complémentaires pour vous accompagner de
            l&apos;élection à la fin du mandat.
          </p>
        </Container>
      </section>

      {/* Assurance */}
      <section className="py-16 md:py-24 bg-white" id="assurance">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red" />
                <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading">
                  Votre mandat vous expose. Êtes-vous suffisamment protégé ?
                </h2>
              </div>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  L&apos;élu local prend des décisions qui peuvent être contestées.
                  Risques de mise en cause personnelle, protection juridique en
                  cas de litige, couverture des accidents en mission... Le cadre
                  juridique de l&apos;élu est complexe, et les garanties offertes par
                  votre commune peuvent être insuffisantes.
                </p>
                <p className="font-medium text-navy">
                  Élu Formation vous aide à :
                </p>
                <ul className="space-y-2">
                  {assurancePoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  href="/contact"
                  variant="primary"
                  subtitle="Entretien conseil gratuit"
                >
                  Évaluer ma couverture d&apos;élu
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/assurance.png"
                  alt="Conseil en assurance pour élu local"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recrutement */}
      <section className="py-16 md:py-24 bg-gray-warm" id="recrutement">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block order-first">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/recrutement.png"
                  alt="Recrutement de cadres territoriaux"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-4">
                Trouver et fidéliser les bons profils pour votre collectivité
              </h2>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  La qualité de votre équipe administrative conditionne
                  directement l&apos;efficacité de votre mandat. Secrétaire de
                  mairie, directeur général des services, cadre territorial...
                  Recruter dans le secteur public local requiert une méthode et
                  une connaissance des spécificités statutaires.
                </p>
                <p className="font-medium text-navy">
                  Nos services RH pour collectivités :
                </p>
                <ul className="space-y-2">
                  {recrutementServices.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Nous parler de mon besoin de recrutement
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Conseil */}
      <section className="py-16 md:py-24 bg-white" id="conseil">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-4">
                Un regard expert sur vos projets et vos décisions
              </h2>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  Parfois, vous avez besoin d&apos;un regard extérieur. Un projet
                  d&apos;aménagement, une réorganisation des services, un budget sous
                  tension, une crise à gérer... Nos experts en gestion publique
                  locale vous apportent un appui opérationnel sur mesure.
                </p>
                <p className="font-medium text-navy">
                  Nos missions de conseil :
                </p>
                <ul className="space-y-2">
                  {conseilMissions.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  href="/contact"
                  variant="primary"
                  subtitle="Entretien exploratoire offert - 30 minutes"
                >
                  Décrire mon besoin de conseil
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/conseil.png"
                  alt="Conseil en gestion publique locale"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
