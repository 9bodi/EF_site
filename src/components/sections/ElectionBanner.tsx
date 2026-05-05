import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ElectionBanner() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo élections */}
          <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/elections.png"
              alt="Salle de conseil municipal"
              width={800}
              height={500}
              className="w-full h-full object-cover"
              
            />
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading leading-tight">
              Vous avez été élu(e) en mars 2026 - votre mandat de 6 ans
              commence.
            </h2>

            <div className="mt-6 space-y-4 text-gray-text leading-relaxed">
  <p>
    Des milliers de nouveaux maires, maires adjoints et conseillers
    municipaux entrent en fonction en ce printemps 2026. Avec
    l&apos;enthousiasme vient aussi la réalité d&apos;un rôle complexe : gérer
    un budget, prendre la parole en public, piloter des projets,
    faire face aux conflits... tout en continuant souvent son
    activité professionnelle.
  </p>
  <p>
    La bonne nouvelle : vous avez des droits à la formation. Chaque élu peut :
  </p>
  <ul className="space-y-2 ml-4">
    <li className="flex items-start gap-2">
      <span className="text-red font-bold mt-0.5">•</span>
      <span>Mobiliser directement son <strong className="text-navy">Droit Individuel à la Formation (DIFE)</strong>, d&apos;un montant de 800&nbsp;euros au démarrage de la mandature et réabondé chaque année par la Caisse des Dépôts et Consignations.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-red font-bold mt-0.5">•</span>
      <span>Bénéficier des crédits obligatoires pour la formation des élus que sa collectivité doit inscrire au budget.</span>
    </li>
  </ul>
  <p className="font-medium text-navy">
    Élu Formation est l&apos;organisme agréé qui vous aide à en profiter
    sans perdre de temps.
  </p>
</div>


            <div className="mt-8">
              <Button
  href="/financement-formation-elu"
  variant="primary"
  size="lg"
>
  Je découvre mon DIFE élu
</Button>


            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
