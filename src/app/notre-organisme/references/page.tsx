import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { STATS } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos références — Communes et élus qui nous font confiance",
  description:
    "Plus de 500 élus et 200 collectivités formés depuis 2020. Découvrez les témoignages et les communes partenaires d'Élu Formation.",
};

export default function ReferencesPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Nos références — Ils nous font confiance
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Depuis 2020, Élu Formation accompagne des élus et des collectivités
              dans toute la France. Voici quelques chiffres et témoignages.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-light">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-gray-text mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle title="Témoignages" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gray-warm">
        <Container>
          <SectionTitle title="Communes partenaires" centered />
          <div className="max-w-3xl mx-auto flex items-end justify-center gap-4 mb-6">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/img/map.avif"
                alt="Carte de France métropolitaine des collectivités partenaires"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
            <div className="max-w-[100px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/map2.avif"
                alt="Carte des DOM-TOM — collectivités partenaires"
                width={100}
                height={200}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-sm text-gray-text text-center">
            + de 200 collectivités partenaires dans toute la France et les outre-mer.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-navy text-center">
        <Container className="max-w-2xl">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            subtitle="Rappel sous 24h"
          >
            Rejoindre nos références
          </Button>
        </Container>
      </section>
    </>
  );
}
