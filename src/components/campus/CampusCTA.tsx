import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { getCampusFormationUrl } from "@/lib/campus";
import { GraduationCap, ArrowRight } from "lucide-react";

interface CampusCTAProps {
  formationSlug?: string;
}

export default function CampusCTA({ formationSlug }: CampusCTAProps) {
  const href = formationSlug
    ? getCampusFormationUrl(formationSlug)
    : "/contact";

  return (
    <section className="py-12 bg-gradient-to-r from-navy via-navy-light to-navy">
      <Container className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-red flex items-center justify-center shrink-0">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white font-heading">
              Formez-vous en ligne sur notre plateforme e-learning
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Modules interactifs, quiz de validation, suivi de progression et
              attestation de réussite — tout est intégré dans votre espace
              personnel sur campus.eluformation.fr
            </p>
          </div>

          <Button
            href={href}
            variant="primary"
            size="lg"
            className="shrink-0"
          >
            <span className="flex items-center gap-2">
              S&apos;inscrire <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

