import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-warm">
      <Container>
        <SectionTitle
          title="Élu Formation intervient dans toute la France"
          subtitle="+ de 200 collectivités partenaires — Formations 100 % en distanciel ou dans votre commune"
        />

       {/* Cartes */}
<div className="max-w-3xl mx-auto flex items-end justify-center gap-4 mb-8">
  {/* France métropolitaine */}
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-sm">
    <Image
      src="/img/map.avif"
      alt="Carte de France métropolitaine des collectivités partenaires"
      width={400}
      height={400}
      className="w-full h-auto object-contain"
      
    />
  </div>

  {/* DOM-TOM */}
  <div className="max-w-[100px] rounded-xl overflow-hidden shadow-sm">

    <Image
      src="/img/map2.avif"
      alt="Carte des DOM-TOM — collectivités partenaires"
      width={160}
      height={300}
      className="w-full h-auto object-contain"
      
    />
  </div>
</div>


        <p className="text-center text-gray-text mb-6">
          Votre commune n&apos;est pas encore partenaire ? Rejoignez le réseau
          Élu Formation.
        </p>

        <div className="text-center">
          <Button href="/contact" variant="outline" size="lg">
            Contactez-nous pour votre commune
          </Button>
        </div>
      </Container>
    </section>
  );
}
