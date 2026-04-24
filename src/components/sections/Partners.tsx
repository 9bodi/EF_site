"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const partners = [
  { name: "Partenaire 1", logo: "/img/partners/partner1.png", size: "h-8 md:h-12" },
  { name: "Partenaire 2", logo: "/img/partners/partner2.png", size: "h-16 md:h-24" },
  { name: "Partenaire 3", logo: "/img/partners/partner3.png", size: "h-12 md:h-16" },
  { name: "Partenaire 4", logo: "/img/partners/partner4.png", size: "h-16 md:h-24" },
  { name: "Partenaire 5", logo: "/img/partners/partner5.png", size: "h-12 md:h-16" },
  { name: "Partenaire 6", logo: "/img/partners/partner6.png", size: "h-12 md:h-16" },
  { name: "Partenaire 7", logo: "/img/partners/partner7.png", size: "h-12 md:h-16" },
  { name: "Partenaire 8", logo: "/img/partners/partner8.png", size: "h-16 md:h-24" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionTitle
          title="Nos partenaires et soutiens"
          subtitle="Ils nous font confiance pour la formation des élus locaux"
          centered
        />

        {/* Carrousel infini */}
        <div className="mt-12 overflow-hidden relative">
          {/* Masques dégradés gauche/droite */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-16 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double la liste pour l'effet infini */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${partner.size} w-auto object-contain`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
