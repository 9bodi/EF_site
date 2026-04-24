import { Metadata } from "next";
import Container from "@/components/layout/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
};

export default function CGV() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-navy font-heading mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-6 text-gray-text leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 1 — Objet
            </h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les
              relations contractuelles entre {SITE.legal.entity}, organisme de
              formation agréé, ci-après « Élu Formation », et toute personne
              physique ou morale inscrite à une formation, ci-après « le
              Client ».
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 2 — Inscription
            </h2>
            <p>
              L&apos;inscription à une formation est confirmée après réception du
              formulaire d&apos;inscription complété et, le cas échéant,
              validation de la prise en charge DIFE via Mon Compte Élu ou
              réception du bon de commande de la collectivité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 3 — Tarifs et financement
            </h2>
            <p>
              Les tarifs sont indiqués en euros hors taxes sur les fiches
              formation. La TVA applicable est celle en vigueur au jour de la
              facturation. Les formations peuvent être financées par le DIFE
              individuel de l&apos;élu, le budget formation de la collectivité, ou un
              financement mixte.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 4 — Annulation et report
            </h2>
            <p>
              Toute annulation doit être notifiée par écrit. Si l&apos;annulation
              intervient plus de 10 jours ouvrés avant la session, aucun frais
              n&apos;est retenu. Entre 5 et 10 jours, 50 % du montant est dû.
              Moins de 5 jours, l&apos;intégralité du montant est facturée. Un
              report sur une session ultérieure est toujours possible sans frais.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 5 — Déroulement des formations
            </h2>
            <p>
              Les formations en distanciel se déroulent via une plateforme de
              visioconférence. Un lien de connexion est envoyé 48h avant la
              session. Le participant s&apos;engage à disposer du matériel
              nécessaire (ordinateur, webcam, connexion internet).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 6 — Attestation
            </h2>
            <p>
              Une attestation de participation est délivrée à chaque participant
              dans les 5 jours ouvrés suivant la formation. Un certificat de
              réussite est délivré si les évaluations ont été satisfaites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 7 — Responsabilité
            </h2>
            <p>
              Élu Formation s&apos;engage à mettre en œuvre tous les moyens
              nécessaires à la bonne exécution de la formation. Sa
              responsabilité est limitée au montant de la formation concernée.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 8 — Droit applicable
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, les parties s&apos;engagent à rechercher une solution
              amiable. À défaut, le tribunal compétent sera celui du siège
              social d&apos;Élu Formation.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4">
            [ Ces CGV sont un modèle indicatif. Faites-les valider par votre
            conseil juridique avant publication. ]
          </p>
        </div>
      </Container>
    </section>
  );
}

