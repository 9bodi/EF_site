import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { Monitor, Clock, Award, Play } from "lucide-react";
import Link from "next/link";


const points = [
  { icon: Monitor, text: "100 % en ligne - à votre rythme" },
  { icon: Clock, text: "≈ 3h de formation en 11 modules" },
  { icon: Award, text: "Attestation de réussite délivrée" },
  { icon: Play, text: "Vidéos, quiz et mises en situation" },
];

export default function ElearningPreview() {
  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-3">
              Nouveau - E-learning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
              Bien gérer son image et sa communication en tant qu&apos;élu
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Maîtrisez votre image, communiquez efficacement avec vos administrés
              et les médias, et valorisez votre action d&apos;élu local. Une formation
              complète, accessible 24h/24 depuis votre espace en ligne.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {points.map((point) => (
                <div key={point.text} className="flex items-start gap-3">
                  <point.icon className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{point.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                href="/e-learning"
                variant="primary"
                size="lg"
              >
                Découvrir le programme
              </Button>
              <Button
                href="/financement-formation-elu"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Finançable par le DIFE
              </Button>
            </div>
          </div>

                    {/* Visuel */}
          <Link href="/e-learning" className="hidden lg:flex items-center justify-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 w-full max-w-md text-center group-hover:bg-white/15 transition-colors cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-orange-400/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-400/30 transition-colors">
                <Play className="w-10 h-10 text-orange-400" />
              </div>
              <p className="text-2xl font-bold font-heading">11 modules</p>
              <p className="text-gray-400 mt-2">Vidéos, quiz et exercices pratiques</p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-3xl font-bold text-orange-400">≈ 3h</p>
                <p className="text-sm text-gray-400 mt-1">À votre rythme - accessible 24h/24</p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
