import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mon Compte Élu — Accéder à vos droits DIFE en ligne",
  description:
    "Tutoriel pas à pas pour accéder à Mon Compte Élu sur moncompteformation.gouv.fr. Créez votre identité numérique et mobilisez vos 800€ de DIFE.",
};

const steps = [
  {
    step: "1",
    title: "Créez votre Identité Numérique La Poste",
    text: "Rendez-vous sur lidentitenumerique.laposte.fr. La création est gratuite et prend environ 10 minutes. Vous aurez besoin de votre pièce d'identité et de votre smartphone. Vous pouvez aussi vous faire aider dans n'importe quel bureau de poste.",
  },
  {
    step: "2",
    title: "Connectez-vous à Mon Compte Élu",
    text: "Allez sur moncompteformation.gouv.fr et cliquez sur « Mon espace Élu » ou « Compte Élu ». Connectez-vous avec votre Identité Numérique La Poste. Lors de votre première connexion, vous devrez renseigner votre mandat (commune, fonction).",
  },
  {
    step: "3",
    title: "Consultez votre solde DIFE",
    text: "Une fois connecté, votre solde DIFE apparaît sur votre tableau de bord. Vous disposez de 800 € par année de mandat, cumulables. Si vous venez d'être élu en mars 2026, votre compteur est déjà alimenté.",
  },
  {
    step: "4",
    title: "Recherchez une formation",
    text: "Utilisez le moteur de recherche pour trouver les formations Élu Formation. Tapez « Élu Formation » ou le nom de la formation souhaitée. Toutes nos formations apparaissent avec le badge « Éligible DIFE ».",
  },
  {
    step: "5",
    title: "Inscrivez-vous et validez",
    text: "Sélectionnez la session qui vous convient, vérifiez le montant pris en charge par votre DIFE, et validez votre inscription. La prise en charge est automatique — vous n'avez rien à avancer.",
  },
];

export default function MonCompteEluPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Mon Compte Élu — Tutoriel pas à pas
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Mon Compte Élu est le portail officiel qui vous permet de
                consulter vos droits DIFE et de vous inscrire à une formation
                agréée. Voici comment y accéder en 5 étapes.
              </p>
              <p className="mt-4 text-red font-semibold">
                Besoin d&apos;aide ? Nos conseillers vous guident par téléphone
                à chaque étape.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-xs bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
                <Image
                  src="/img/dife-logo.png"
                  alt="DIFE — Mon Compte Élu"
                  width={250}
                  height={250}
                  className="w-auto h-auto max-h-40 object-contain mb-6"
                  priority
                  
                />
                <p className="text-4xl font-bold text-navy font-heading">
                  800&nbsp;€
                </p>
                <p className="text-sm text-gray-text mt-2 text-center">
                  par an et par élu, cumulables
                </p>
                <p className="text-xs text-gray-400 mt-1 text-center">
                  moncompteformation.gouv.fr
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionTitle title="Accéder à Mon Compte Élu en 5 étapes" />
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-red text-white font-bold flex items-center justify-center shrink-0 text-lg">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-gray-light">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy font-heading mb-3">
            Vous bloquez sur une étape ?
          </h2>
          <p className="text-gray-text mb-6">
            Nos conseillers vous accompagnent gratuitement par téléphone pour
            créer votre identité numérique et valider votre inscription.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            subtitle="Rappel sous 24h — Gratuit"
          >
            Me faire accompagner par un conseiller
          </Button>
        </Container>
      </section>
    </>
  );
}
