import Container from "@/components/layout/Container";
import { STATS } from "@/lib/constants";
import { ShieldCheck, ThumbsUp, Users, Euro } from "lucide-react";

const icons = [ShieldCheck, ThumbsUp, Users, Euro];

export default function ReassuranceBanner() {
  return (
    <section className="bg-gray-light border-y border-rose-light">
      <Container className="py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-center gap-3 justify-center text-center lg:text-left">
                <Icon className="w-8 h-8 text-red shrink-0 hidden sm:block" />
                <div>
                  <p className="text-lg font-bold text-navy">{stat.value}</p>
                  <p className="text-xs text-gray-text">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

