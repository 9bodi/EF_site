import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />

      <Container className="relative py-6 md:py-10 lg:py-14">


        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading leading-tight">

  Nouveaux élu.e.s :
  <br />
  <span className="text-red">formez-vous maintenant pour bien commencer votre mandat.</span>
</h1>


            <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">

              Prise de parole, budget municipal, communication, développement
              local... Maîtriser votre mandat, c&apos;est servir vos concitoyens plus
              efficacement. Élu Formation vous accompagne avec des formations
              conçues pour les élus, animées par des experts de l&apos;action publique
              locale - et finançables jusqu&apos;à 100&nbsp;% par votre DIFE élu.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">

              <Button
  href="/financement-formation-elu/simulateur"
  variant="primary"
  size="lg"
  subtitle="Gratuit - Réponse en 5 minutes"
>
  Découvrir mes droits à la formation
</Button>


              <Button
                href="/formations"
                variant="outline"
                size="lg"
                subtitle="8 thématiques - Distanciel - Éligible DIFE"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Voir toutes les formations
              </Button>
            </div>
          </div>

          {/* Photo hero */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/hero.png"
                alt="Maire devant sa mairie"
                width={500}
                height={625}
                className="w-full h-full object-cover"
                priority
                
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
