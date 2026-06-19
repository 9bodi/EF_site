import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Video, MonitorPlay, Building2 } from "lucide-react";

const offers = [
  {
    icon: Video,
    title: "Formation en visioconférence",
    description:
      "Suivez nos sessions en petit groupe avec des élus de toute la France. 4h de formation + 1h de tutorat individuel. Depuis chez vous, sans déplacement.",
    cta: "Voir les formations",
    href: "/formations",
    badge: "Le plus choisi",
  },
  {
    icon: MonitorPlay,
    title: "Formation en autonomie",
    description:
      "Des modules courts accessibles 24h/24 depuis votre ordinateur ou votre téléphone. Avancez à votre rythme, où que vous soyez.",
    cta: "Découvrir le e-learning",
    href: "/e-learning",
    badge: "Nouveau",
  },
  {
    icon: Building2,
    title: "Séminaire intra-collectivité",
    description:
      "Formez toute votre équipe municipale directement dans votre commune. Formation, cohésion d'équipe et feuille de route sur mesure.",
    cta: "Construire mon séminaire",
    href: "/formations-pour-ma-commune",
    badge: "Sur devis",
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
                {offer.badge && (
                  <span className="text-xs font-medium text-white bg-navy px-3 py-1 rounded-full mb-4">
                    {offer.badge}
                  </span>
                )}
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
