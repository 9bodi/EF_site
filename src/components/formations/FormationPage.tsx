import { Formation } from "@/data/formations";
import FormationHeader from "./FormationHeader";
import FormationProgram from "./FormationProgram";
import FormationCTA from "./FormationCTA";
import FormationTestimonial from "./FormationTestimonial";
import FormationFAQ from "./FormationFAQ";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function FormationPage({ formation }: { formation: Formation }) {
  return (
    <>
      <FormationHeader formation={formation} />

      {/* Double CTA après le hero */}
      <section className="py-8 bg-white border-b border-gray-200">
        <Container className="max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Je souhaite m&apos;inscrire à une prochaine session
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Demander un renseignement
            </Button>
          </div>
        </Container>
      </section>

      {/* Programme */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <FormationProgram formation={formation} />
        </Container>
      </section>

      <FormationTestimonial slug={formation.slug} />

      {/* Bloc financement avant CTA final */}
      <section className="py-12 bg-white">
        <Container className="max-w-3xl">
          <div className="bg-gray-warm rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-navy mb-3">
              Votre formation peut être prise en charge
            </h3>
            <p className="text-sm text-gray-text leading-relaxed mb-4">
              Se former fait partie de l&apos;exercice du mandat. Chaque élu dispose de droits
              dédiés à la formation pour développer ses compétences au service de sa collectivité.
              Selon votre situation, plusieurs solutions de financement existent :
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-sm text-gray-text">
                <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                Le budget formation obligatoire prévu par votre collectivité
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-text">
                <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                Votre Droit Individuel à la Formation des Élus (DIFE)
              </div>
            </div>
            <p className="text-sm text-gray-text">
              Notre équipe vous accompagne dans le choix du financement adapté et dans vos démarches d&apos;inscription.
            </p>
            <div className="mt-4">
              <Button href="/contact" variant="outline" size="sm">
                Être accompagné dans mon inscription
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FormationCTA formateur={formation.formateur} />
      <FormationFAQ />

      {/* Bandeau intra-collectivité */}
      <section className="py-10 bg-gray-warm border-t border-gray-200">
        <Container className="max-w-3xl text-center">
          <h3 className="text-lg font-bold text-navy mb-2">
            Vous représentez une commune ou une intercommunalité ?
          </h3>
          <p className="text-sm text-gray-text mb-4">
            Organisez cette formation directement dans votre collectivité pour votre équipe d&apos;élus.
          </p>
          <Button href="/formations-pour-ma-commune" variant="outline" size="sm">
            Organiser une formation intra-collectivité
          </Button>
        </Container>
      </section>
    </>
  );
}
