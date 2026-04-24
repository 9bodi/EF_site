import { CAMPUS } from "@/lib/campus";
import Container from "@/components/layout/Container";
import { GraduationCap, ExternalLink } from "lucide-react";

export default function CampusBanner() {
  return (
    <div className="bg-navy-light border-b border-white/10">
      <Container className="py-2">
        <a
          href={CAMPUS.dashboardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Déjà inscrit ? Accédez à votre espace formation</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </Container>
    </div>
  );
}

