import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { formations } from "@/data/formations";
import { Clock, Monitor } from "lucide-react";
import Image from "next/image";

export default function FeaturedFormations() {
  const featured = formations.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          title="Vos prochaines sessions de formation"
          subtitle="Toutes nos formations sont finançables par votre DIFE — éligibles Mon Compte Élu"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((formation) => (
            <Card
              key={formation.slug}
              className="flex flex-col hover:shadow-lg transition-shadow group"
            >
              {/* Image formation */}
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-warm">
                {formation.image ? (
                  <Image
                    src={formation.image}
                    alt={formation.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Monitor className="w-10 h-10 text-gray-300" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Badge variant="dife">DIFE éligible</Badge>
                {formation.tag && (
                  <Badge variant="highlight">{formation.tag}</Badge>
                )}
              </div>

              <h3 className="text-lg font-bold text-navy font-heading mb-2 group-hover:text-red transition-colors">
                {formation.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-text mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {formation.duree}
                </span>
                <span className="flex items-center gap-1">
                  <Monitor className="w-3.5 h-3.5" />
                  Distanciel
                </span>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <Button
                  href={`/formations/${formation.slug}`}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Découvrir et s&apos;inscrire
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/formations" variant="outline" size="lg">
            Voir toutes les dates et formations disponibles
          </Button>
        </div>
      </Container>
    </section>
  );
}
