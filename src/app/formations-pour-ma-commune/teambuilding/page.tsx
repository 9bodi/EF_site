import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { Users, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Teambuilding équipe municipale - Cohésion d'équipe pour élus",
  description:
    "Renforcez la cohésion de votre équipe municipale avec une journée de teambuilding conçue pour les élus. Devis gratuit.",
};

export default function TeambuildingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Teambuilding - Soudez votre équipe municipale
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Une journée pour transformer votre conseil municipal en une
                équipe soudée, alignée sur une vision commune et prête à agir
                ensemble pendant 6 ans.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Clock, label: "1 journée", sub: "7h d'ateliers" },
                  { icon: Users, label: "Toute l'équipe", sub: "Élus et adjoints" },
                  { icon: MapPin, label: "Chez vous", sub: "Ou lieu extérieur" },
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
                  src="/img/team-building.png"
                  alt="Teambuilding pour équipe municipale"
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

      {/* Contenu court */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-6">
            Cohésion, vision partagée, efficacité collective
          </h2>
          <p className="text-gray-text leading-relaxed mb-4">
            Ateliers collaboratifs, mises en situation et moments d&apos;échange
            pour apprendre à travailler ensemble. Programme conçu sur mesure
            par un facilitateur expert en action publique locale.
          </p>
          <p className="text-gray-text leading-relaxed">
            Idéal en début de mandat ou pour relancer la dynamique de votre équipe.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-light">
        <Container className="max-w-3xl">
          <Card className="bg-navy text-white border-0 text-center p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
              À partir de 5 000 € HT
            </h2>
            <p className="text-gray-300 mb-6">
              Journée complète - Programme sur mesure - Finançable par le DIFE ou le budget communal
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              subtitle="Devis gratuit - Sans engagement"
            >
              Organiser un teambuilding pour mon équipe
            </Button>
          </Card>
        </Container>
      </section>
    </>
  );
}
