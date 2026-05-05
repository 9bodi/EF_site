import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { UserCircle } from "lucide-react";

export default function FormationCTA({ formateur }: { formateur: string }) {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Formateur */}
          <div className="bg-white rounded-xl p-6 border border-rose-light mb-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-warm flex items-center justify-center shrink-0">
                <UserCircle className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-red font-semibold uppercase tracking-wide mb-1">
                  Votre formateur
                </p>
                <p className="text-gray-text leading-relaxed">{formateur}</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
              Prêt(e) à vous former ?
            </h2>
            <p className="mt-3 text-gray-300">
              Inscription en ligne ou rappel par un conseiller - c&apos;est vous qui
              choisissez.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                subtitle="Financé par mon DIFE - Confirmation immédiate"
              >
                Je m&apos;inscris à cette formation
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                subtitle="Réponse sous 24h - Gratuit"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Être rappelé par un conseiller
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

