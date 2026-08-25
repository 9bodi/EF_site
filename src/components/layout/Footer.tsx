import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { SITE } from "@/lib/constants";

const footerFormations = [
  { label: "Prise de parole en public", href: "/formations/prise-de-parole" },
  { label: "Budget et finances locales", href: "/formations/budget-municipal" },
  { label: "Urbanisme", href: "/formations/urbanisme" },
  { label: "Décentralisation", href: "/formations/decentralisation" },
  { label: "IA pour les élus", href: "/formations/ia-pour-elus" },
  { label: "Communication de l'élu", href: "/formations/communication-elu" },
  { label: "Réseaux sociaux", href: "/formations/reseaux-sociaux" },
  { label: "Fondamentaux du mandat", href: "/formations/fondamentaux-mandat" },
  { label: "E-learning : Image & Communication", href: "/e-learning" },
  { label: "Voir tout le catalogue", href: "/formations" },
];

const footerLinks = [
  { label: "Séminaire intra-collectivité", href: "/formations-pour-ma-commune" },
  { label: "Financer ma formation", href: "/financement-formation-elu" },
  { label: "Simuler mes droits DIFE", href: "/financement-formation-elu/simulateur" },
  { label: "Notre organisme", href: "/notre-organisme" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Marque */}
          <div>
            <Image
              src="/img/LOGO_ELU-FORMATION_BLANC100.png"
              alt="Élu Formation"
              width={160}
              height={42}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Organisme de formation des élus agréé par l&apos;État depuis 2020.
            </p>
            <div className="text-sm text-gray-300 space-y-1">
              <p>{SITE.address}</p>
              <p>{SITE.email}</p>
              <p>{SITE.phone[0]}</p>
            </div>
          </div>

          {/* Col 2 - Formations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Formations</h3>
            <ul className="space-y-2">
              {footerFormations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Liens utiles */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Certifications */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Certifications</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Agréé Ministère de l&apos;Intérieur</li>
              <li>Éligible DIFE</li>
              <li>Formation continue ({SITE.legal.naf})</li>
              <li>N° déclaration : {SITE.legal.qualiopi}</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400">
            <p>© 2026 Élu Formation - Place de la République SAS</p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
              <Link href="/cgv" className="hover:text-white">CGV</Link>
              <Link href="/confidentialite" className="hover:text-white">Politique de confidentialité</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
