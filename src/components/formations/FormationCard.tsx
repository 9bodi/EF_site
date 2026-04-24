import Link from "next/link";
import Image from "next/image";
import { Formation } from "@/data/formations";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Clock, Monitor } from "lucide-react";

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
    <Link href={`/formations/${formation.slug}`}>
      <Card className="flex flex-col h-full hover:shadow-lg transition-shadow group">
        {/* Image formation */}
        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-warm">
          {formation.image ? (
            <Image
              src={formation.image}
              alt={formation.title}
              width={600}
              height={338}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center group-hover:bg-gray-light transition-colors">
              <Monitor className="w-10 h-10 text-gray-300" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant="dife">DIFE éligible</Badge>
          {formation.tag && <Badge variant="highlight">{formation.tag}</Badge>}
        </div>

        <h3 className="text-lg font-bold text-navy font-heading mb-2 group-hover:text-red transition-colors">
          {formation.title}
        </h3>

        <p className="text-sm text-gray-text leading-relaxed mb-4 flex-1 line-clamp-2">
          {formation.accroche}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-text mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {formation.duree}
          </span>
          <span className="flex items-center gap-1">
            <Monitor className="w-3.5 h-3.5" />
            Distanciel
          </span>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-red">
            Découvrir et s&apos;inscrire →
          </span>
        </div>
      </Card>
    </Link>
  );
}
