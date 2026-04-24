import { Metadata } from "next";
import Container from "@/components/layout/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function Confidentialite() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-navy font-heading mb-8">
          Politique de confidentialité
        </h1>

        <div className="space-y-6 text-gray-text leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Responsable du traitement
            </h2>
            <p>
              {SITE.legal.entity}<br />
              {SITE.address}<br />
              {SITE.email}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Données collectées
            </h2>
            <p>
              Nous collectons les données que vous nous transmettez
              volontairement via nos formulaires : nom, prénom, adresse email,
              numéro de téléphone, fonction élective, commune, et le contenu de
              votre message. Nous collectons également des données de navigation
              anonymisées (cookies analytiques) pour améliorer le site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Finalités du traitement
            </h2>
            <p>
              Vos données sont utilisées pour répondre à vos demandes de
              contact, vous accompagner dans vos démarches DIFE, gérer votre
              inscription aux formations, vous envoyer des informations sur nos
              formations (si vous y avez consenti), et établir les documents
              administratifs (conventions, attestations, factures).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre consentement
              (formulaire de contact, newsletter) et sur l&apos;exécution du contrat
              de formation (inscription, facturation).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Durée de conservation
            </h2>
            <p>
              Vos données sont conservées pendant la durée de la relation
              commerciale et 3 ans après le dernier contact. Les données de
              facturation sont conservées 10 ans conformément aux obligations
              légales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression, de portabilité de vos données, et
              d&apos;un droit d&apos;opposition au traitement. Pour exercer ces droits,
              contactez-nous à {SITE.email}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Cookies</h2>
            <p>
              Ce site utilise des cookies strictement nécessaires au
              fonctionnement du site et des cookies analytiques (mesure
              d&apos;audience). Vous pouvez gérer vos préférences via le bandeau
              cookies affiché lors de votre première visite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Contact</h2>
            <p>
              Pour toute question relative à la protection de vos données :{" "}
              {SITE.email}
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4">
            [ Cette politique est un modèle indicatif. Faites-la valider par
            votre DPO ou conseil juridique avant publication. ]
          </p>
        </div>
      </Container>
    </section>
  );
}

