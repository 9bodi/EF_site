import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { CheckCircle, Users, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Formation intra sur mesure pour équipe municipale",
  description:
    "Une formation dédiée à votre conseil municipal, sur un thème de votre choix, adaptée à votre territoire. En présentiel ou distanciel. Devis gratuit sous 48h.",
};

const themes = [
  "Budget municipal et finances locales",
  "Prise de parole et communication",
  "Urbanisme et aménagement du territoire",
  "Développement économique local",
  //"Gestion des conflits et médiation",
  "Réseaux sociaux et communication numérique",
  "Intelligence artificielle pour les élus",
  "Fondamentaux du mandat et responsabilités",
];

const avantages = [
  "Programme 100 % adapté à votre réalité territoriale",
  "Cas pratiques tirés de votre commune",
  "Confidentialité des échanges entre élus de la même équipe",
  "Dates et horaires choisis par vous",
  "Formateur expert dédié à votre session",
  "Attestations individuelles pour chaque élu participant",
];

export default function IntraPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Formation intra sur mesure - Une session dédiée à votre équipe
                municipale
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Vous choisissez le thème, nous concevons le programme. Une
                demi-journée (4h) de formation exclusive pour votre conseil
                municipal, adaptée à vos enjeux locaux et animée par un expert de
                l&apos;action publique.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Clock, label: "4h de formation", sub: "Demi-journée" },
                  { icon: Users, label: "Jusqu'à 20 élus", sub: "Votre équipe" },
                  { icon: MapPin, label: "Chez vous ou en ligne", sub: "Au choix" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-4 border border-white/10 text-center">
                    <item.icon className="w-6 h-6 text-red mx-auto mb-2" />
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/intra.png"
                  alt="Formation intra-collectivité pour élus municipaux"
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

      <section className="py-16 md:py-24 bg-white">
  <Container>
    <SectionTitle title="Choisissez votre thématique" subtitle="Ou proposez-nous un sujet sur mesure" />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {themes.map((theme) => (
        <a
          key={theme}
          href={`/contact?sujet=${encodeURIComponent(theme)}`}
          className="group bg-white rounded-xl p-5 border border-gray-200 text-center hover:border-red hover:shadow-md transition-all duration-300"
        >
          <p className="text-sm font-semibold text-navy group-hover:text-red transition-colors">
            {theme}
          </p>
          <span className="block mt-3 text-xs text-gray-400 group-hover:text-red transition-colors">
            Demander un devis →
          </span>
        </a>
      ))}
    </div>
  </Container>
</section>


      <section className="py-16 md:py-24 bg-gray-light">
        <Container className="max-w-3xl">
          <SectionTitle title="Pourquoi choisir une formation intra ?" />
          <div className="space-y-4">
            {avantages.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-dife shrink-0 mt-0.5" />
                <p className="text-gray-text leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <Card className="bg-navy text-white border-0 text-center p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
              À partir de 1 600 € HT
            </h2>
            <p className="text-gray-300 mb-2">
              Finançable par le DIFE de chaque élu participant et/ou le budget formation de la collectivité
            </p>
            <div className="mt-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                subtitle="Devis sous 48h - Sans engagement"
              >
                Demander un devis pour ma commune
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
