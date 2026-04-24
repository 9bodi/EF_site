import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { SITE } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Formation équipe municipale — Séminaire élus intra-collectivité",
  description:
    "Organisez la formation de toute votre équipe d'élus. Séminaires sur mesure, intra-collectivité, en présentiel ou distanciel. Organisme agréé. Devis gratuit.",
};

const formats = [
  {
    title: "Séminaire de lancement",
    href: "/formations-pour-ma-commune",
    image: "/img/seminaire.png",
    description:
      "1 journée (7h) pour lancer le mandat de votre nouvelle équipe. Cohésion, rôles, vision commune, droits et devoirs. Idéal dans les premiers mois après l'élection.",
    price: "À partir de 2 900 € HT",
  },
  {
    title: "Formation intra thématique",
    href: "/formations-pour-ma-commune/intra",
    image: "/img/intra.png",
    description:
      "Une demi-journée (4h) sur un sujet précis pour votre conseil : budget, communication, urbanisme, développement économique... Adapté à votre réalité territoriale.",
    price: "À partir de 1 600 € HT",
  },
  {
    title: "Team building & cohésion d'équipe",
    href: "/formations-pour-ma-commune/teambuilding",
    image: "/img/team-building.png",
    description:
      "Un accompagnement dédié à la cohésion de votre équipe municipale : ateliers collaboratifs, mises en situation, renforcement du collectif.",
    price: "Sur devis — À partir de 5 000 € HT / an",
  },
];

const steps = [
  "Vous nous contactez — notre conseiller vous rappelle sous 24h pour comprendre vos besoins.",
  "Nous concevons un programme sur mesure adapté à votre équipe, votre territoire et vos enjeux.",
  "Vous recevez un devis et une convention de formation sous 48h.",
  "Nous animons la session selon les modalités validées ensemble.",
  "Vous recevez les attestations de participation pour chaque élu — valables pour le DIFE ou le budget communal.",
];

const financements = [
  "Par le DIFE de chaque élu participant (jusqu'à 800 € par élu) — financement le plus courant",
  "Par le budget formation de la collectivité (dépense obligatoire prévue par le CGCT)",
  "Par un financement mixte DIFE + budget communal pour les sessions les plus longues",
];

export default function FormationsCommunePage() {
  const intraTestimonials = testimonials.filter((t) => t.formation === "intra");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Formez toute votre équipe municipale — Séminaires et formations
                intra-collectivité
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Votre nouvelle équipe municipale vient de prendre ses fonctions.
                Maires, adjoints, conseillers : chacun arrive avec son parcours,
                ses forces, ses questions. La formation collective est le levier
                le plus puissant pour créer une équipe soudée, efficace et à
                l&apos;aise dans son mandat.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Élu Formation organise des sessions de formation dédiées à votre
                conseil municipal : dans votre commune, dans nos locaux, ou en
                distanciel. Programme conçu sur mesure selon les besoins de
                votre équipe.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/seminaire.png"
                  alt="Séminaire de formation pour élus municipaux"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 formats */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle title="3 formats pour votre commune" />
          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format) => (
              <Link key={format.title} href={format.href} className="group">
                <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  {format.image && (
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-warm">
                      <Image
                        src={format.image}
                        alt={format.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-navy font-heading mb-3 group-hover:text-red transition-colors">
                    {format.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6 flex-1">
                    {format.description}
                  </p>
                  <p className="text-red font-bold">{format.price}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-red group-hover:underline">
                    En savoir plus →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Comment ça se passe */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <SectionTitle title="Comment ça se passe ?" />
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-red text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-text leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Financement */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionTitle title="Financement d'une formation intra" />
          <p className="text-gray-text leading-relaxed mb-6 text-center">
            Une formation intra-collectivité peut être financée de 3 manières :
          </p>
          <div className="space-y-3">
            {financements.map((item, i) => (
              <div
                key={i}
                className="bg-gray-light rounded-xl p-4 border border-rose-light"
              >
                <p className="text-sm text-navy">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-text text-center mt-6">
            Nos conseillers vous guident dans le montage du financement — c&apos;est
            inclus dans notre service.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-navy text-center">
        <Container className="max-w-2xl">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            subtitle="Rappel conseiller sous 24h — Sans engagement"
          >
            Demander un devis gratuit pour ma commune
          </Button>
          <p className="mt-4 text-gray-400 text-sm">
            ou appelez-nous directement : {SITE.phone[0]} — {SITE.phone[1]}
          </p>
        </Container>
      </section>

      {/* Témoignages */}
      {intraTestimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-warm">
          <Container>
            <SectionTitle title="Communes qui nous font confiance" />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {intraTestimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
