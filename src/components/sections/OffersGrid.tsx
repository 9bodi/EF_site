import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { BookOpen, Building2, Briefcase } from "lucide-react";

const offers = [
  {
    icon: BookOpen,
    title: "Formations en ligne",
    description:
      "Suivez nos sessions avec d'autres élus de toute la France. 4h en groupe + 1h en autonomie. Depuis votre bureau ou votre domicile.",
    cta: "Voir les formations",
    href: "/formations",
  },
  {
    icon: Building2,
    title: "Pour ma commune",
    description:
      "Nous organisons la formation de toute votre équipe municipale. Sur mesure, dans votre commune ou en ligne. Idéal pour les nouvelles équipes.",
    cta: "Demander un devis",
    href: "/formations-pour-ma-commune",
  },
  {
    icon: Briefcase,
    title: "Autres services",
    description:
      "Assurance élu, appui au recrutement, conseil en gestion locale. Un accompagnement complet pour réussir votre mandat.",
    cta: "Découvrir les services",
    href: "/services/assurance-elu",
  },
];

export default function OffersGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-warm">
      <Container>
       <SectionTitle
  title="Formations sur-mesure et adaptées à l'agenda des élus"
/>


        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card
                key={offer.title}
                className="flex flex-col items-start hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy font-heading mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-text leading-relaxed mb-6 flex-1">
                  {offer.description}
                </p>
                <Button href={offer.href} variant="outline" size="sm">
                  {offer.cta}
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

