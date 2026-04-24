import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function OrganismePreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo équipe */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/organisme-preview.png"
              alt="L'équipe Élu Formation"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              
            />
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading leading-tight">
              Un organisme pensé pour et par des professionnels de l&apos;action
              publique locale
            </h2>

            <div className="mt-6 space-y-4 text-gray-text leading-relaxed">
              <p>
                Élu Formation est né en 2020 d&apos;un constat simple : les élus
                locaux manquent d&apos;outils de formation vraiment adaptés à leurs
                contraintes — le temps disponible, les sujets prioritaires, et
                la spécificité du mandat électif.
              </p>
              <p>
                Nous avons construit une méthode : des formations courtes (4h),
                100&nbsp;% orientées pratique, animées par des formateurs issus du
                monde de l&apos;action publique locale — anciens élus, directeurs de
                collectivités, experts juridiques et financiers.
              </p>
              <p className="font-medium text-navy">
                Agréé par l&apos;État (Ministère de l&apos;Intérieur), certifié Qualiopi,
                éligible DIFE : Élu Formation est l&apos;organisme de référence pour
                les élus qui veulent agir efficacement.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/notre-organisme" variant="outline" size="lg">
                Découvrir notre organisme
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
