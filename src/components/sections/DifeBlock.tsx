import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const covers = [
  "Les frais pédagogiques de formation",
  "Les frais de connexion (distanciel)",
  "Les certifications de compétences",
];

const steps = [
  "Simulez vos droits avec votre conseiller",
  "Choisissez votre formation",
  "Validez en ligne sur Mon Compte Élu",
];

export default function DifeBlock() {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading leading-tight">
              Votre formation peut être entièrement gratuite.
            </h2>

            <div className="mt-6 space-y-4 text-gray-text leading-relaxed">
              <p>
                Depuis 2022, chaque élu local dispose d&apos;un{" "}
                <strong className="text-navy">
                  Droit Individuel à la Formation (DIFE) de 800&nbsp;euros
                </strong>
                , mobilisable directement sur Mon Compte Élu
                (moncompteformation.gouv.fr). Ce droit est financé par la Caisse
                des Dépôts, indépendamment du budget de votre commune.
              </p>
              <p>
                Toutes nos formations sont éligibles au DIFE. Notre équipe de
                conseillers vous guide pas à pas pour mobiliser vos droits et
                vous inscrire en quelques minutes.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {/* Colonne gauche */}
              <div>
                <h3 className="font-bold text-navy mb-3">
                  Votre DIFE peut couvrir
                </h3>
                <ul className="space-y-2">
                  {covers.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-text">
                      <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne droite */}
              <div>
                <h3 className="font-bold text-navy mb-3">
                  Comment ça marche ?
                </h3>
                <ol className="space-y-2">
                  {steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-gray-text">
                      <span className="w-5 h-5 rounded-full bg-red text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-8">
              <Button
  href="/financement-formation-elu/simulateur"
  variant="primary"
  size="lg"
  subtitle="Gratuit et sans engagement"
>
  Simuler mes droits DIFE
</Button>

            </div>
          </div>

          {/* Visuel DIFE */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-6">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-lg p-8 flex flex-col items-center text-center">
              <Image
                src="/img/dife-logo.png"
                alt="DIFE — Droit Individuel à la Formation des Élus"
                width={280}
                height={280}
                className="w-auto h-auto max-h-48 object-contain mb-6"
                unoptimized
              />
              <p className="text-4xl font-bold text-navy font-heading">
                800&nbsp;€
              </p>
              <p className="text-sm text-gray-text mt-2">
                par an et par élu, cumulables
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Financé par la Caisse des Dépôts
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
