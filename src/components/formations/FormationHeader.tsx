import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { Formation } from "@/data/formations";
import { Clock, Monitor, Euro, Award } from "lucide-react";
import Image from "next/image";

export default function FormationHeader({ formation }: { formation: Formation }) {
  const infos = [
    { icon: Monitor, label: "Format", value: formation.format },
    { icon: Clock, label: "Durée", value: formation.duree },
    { icon: Euro, label: "Financement", value: formation.financement },
    { icon: Award, label: "Tarif", value: formation.tarif },
  ];

  return (
    <section className="bg-navy text-white py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Colonne gauche — texte */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="green">DIFE éligible</Badge>
              {formation.tag && <Badge variant="light">{formation.tag}</Badge>}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 leading-tight">
              {formation.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {formation.accroche || formation.metaDescription}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {infos.map((info, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <info.icon className="w-4 h-4 text-rose-light" />
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </span>
                  </div>
                  <span className="text-sm font-semibold">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — photo */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {formation.image ? (
                <Image
                  src={formation.image}
                  alt={formation.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo/30 to-navy-light flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <Monitor className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-sm">Photo à ajouter</p>
                    <p className="text-xs mt-1 text-white/25">
                      /img/formations/{formation.slug}.png
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
