import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />

      <Container className="relative py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Vous venez d&apos;être élu(e).
              <br />
              <span className="text-red">Votre mandat commence maintenant.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Prise de parole, budget municipal, communication, développement
              local... Maîtriser votre mandat, c&apos;est servir vos concitoyens plus
              efficacement. Élu Formation vous accompagne avec des formations
              conçues pour les élus, animées par des experts de l&apos;action publique
              locale — et finançables jusqu&apos;à 100&nbsp;% par votre DIFE élu.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
  href="/financement-formation-elu/simulateur"
  variant="primary"
  size="lg"
  subtitle="Gratuit — Réponse en 5 minutes"
>
  Découvrir mes droits à la formation
</Button>


              <Button
                href="/formations"
                variant="outline"
                size="lg"
                subtitle="8 thématiques — Distanciel — Éligible DIFE"
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
