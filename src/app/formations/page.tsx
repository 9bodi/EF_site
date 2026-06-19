import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FormationCard from "@/components/formations/FormationCard";
import { formations } from "@/data/formations";
import { Clock, Monitor, Play, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Formations élus locaux - Éligible DIFE",
  description:
    "Des formations à votre rythme, pour réussir votre mandat d'élu local. Courtes, concrètes, 100 % à distance. En groupe ou en autonomie.",
};

export default function FormationsPage() {
  return (
    <>
      {/* Hero catalogue */}
      <section className="bg-navy text-white py-16 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight max-w-4xl">
            Des formations à votre rythme, pour réussir votre mandat d&apos;élu local
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Développez vos compétences, gagnez en confiance dans vos décisions et disposez
            d&apos;outils concrets pour agir au quotidien dans votre collectivité.
          </p>
          <p className="mt-3 text-gray-400 max-w-3xl leading-relaxed">
            Courtes, concrètes, 100 % à distance. En groupe ou en autonomie, nos formations
            s&apos;inscrivent dans votre agenda d&apos;élu. De la prise de parole au budget municipal,
            nos formations vous accompagnent à chaque étape de votre mandat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Échanger avec un conseiller Élu Formation
            </Button>
            <Button
              href="#formations"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              M&apos;inscrire à une prochaine session
            </Button>
          </div>
        </Container>
      </section>

      {/* Bloc financement */}
      <section className="py-10 bg-white border-b border-gray-200">
        <Container className="max-w-3xl">
          <div className="bg-gray-warm rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold text-navy mb-3">
              Votre formation d&apos;élu peut être prise en charge
            </h2>
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
            <p className="text-sm text-gray-text mb-4">
              Notre équipe vous accompagne dans le choix du financement adapté et dans vos démarches d&apos;inscription.
            </p>
            <Button href="/contact" variant="outline" size="sm">
              Être accompagné dans mon inscription
            </Button>
          </div>
        </Container>
      </section>

      {/* E-learning mis en avant */}
      <section className="py-12 bg-gray-light border-b border-gray-200">
        <Container>
          <Link href="/e-learning">
            <div className="bg-navy rounded-2xl p-6 md:p-8 text-white hover:shadow-xl transition-shadow group">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="dife">DIFE éligible</Badge>
                    <Badge variant="highlight">E-learning</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading group-hover:text-rose transition-colors">
                    Bien gérer son image et sa communication d&apos;élu
                  </h2>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    Formation complète en e-learning : 11 modules + introduction.
                    Maîtrisez votre communication, votre image publique et vos
                    prises de parole. 100 % en ligne, à votre rythme.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Monitor className="w-4 h-4" /> 100% en ligne
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> ~3h au total
                    </span>
                    <span className="flex items-center gap-1">
                      <Play className="w-4 h-4" /> 11 modules + intro
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Play className="w-12 h-12 text-red" />
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-4">
                <span className="inline-flex items-center gap-2 text-red font-semibold group-hover:text-rose transition-colors">
                  Découvrir le programme complet →
                </span>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* Grille formations */}
      <section id="formations" className="py-16 md:py-24 bg-gray-light">
        <Container>
          <h2 className="text-2xl font-bold text-navy font-heading mb-8">
            Formations en visioconférence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation) => (
              <FormationCard key={formation.slug} formation={formation} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bandeau bas */}
      <section className="py-12 bg-white border-t border-gray-200">
        <Container className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-navy font-heading">
            Vous ne trouvez pas la formation qui vous correspond ?
          </h2>
          <p className="mt-3 text-gray-text">
            Nos conseillers peuvent construire un programme sur mesure pour vous
            ou pour l&apos;ensemble de votre équipe municipale.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Parler à un conseiller formation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
