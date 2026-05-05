import { Metadata } from "next";
import Container from "@/components/layout/Container";

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
              PLACE DE LA REPUBLIQUE (Élu Formation)<br />
              SAS au capital de 30 000 euros<br />
              1 Avenue Victor Hugo, 27200 Vernon<br />
              SIRET : 892 385 949 00029<br />
              Email : contact@eluformation.fr
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Données collectées
            </h2>
            <p>
              Nous collectons les données que vous nous transmettez volontairement via nos formulaires de contact et notre simulateur DIFE : nom, prénom, adresse email, numéro de téléphone, fonction élective, commune de rattachement, année d&apos;élection, et le contenu de votre message. Lors de l&apos;utilisation du simulateur DIFE, les données de calcul (type de mandat, montant utilisé, solde estimé) sont traitées pour vous envoyer un récapitulatif par email. Nous collectons également des données de navigation anonymisées (cookies analytiques) pour améliorer le site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Finalités du traitement
            </h2>
            <p>
              Vos données sont utilisées pour : répondre à vos demandes de contact et de rappel ; vous accompagner dans vos démarches DIFE ; gérer votre inscription aux formations ; établir les documents administratifs nécessaires (conventions de formation, attestations de présence, factures) ; vous envoyer des informations sur nos formations si vous y avez consenti ; assurer le suivi qualité de nos prestations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Base légale du traitement
            </h2>
            <p>
              Le traitement de vos données repose sur : votre consentement (formulaire de contact, simulateur DIFE, newsletter) conformément à l&apos;article 6.1.a du RGPD ; l&apos;exécution du contrat de formation (inscription, convention, facturation) conformément à l&apos;article 6.1.b du RGPD ; le respect de nos obligations légales (facturation, déclarations obligatoires) conformément à l&apos;article 6.1.c du RGPD.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Destinataires des données
            </h2>
            <p>
              Vos données sont accessibles uniquement à l&apos;équipe d&apos;Élu Formation en charge du traitement de votre demande. Elles peuvent être transmises à la Caisse des Dépôts et Consignations dans le cadre de la mobilisation de votre DIFE, ainsi qu&apos;à notre prestataire d&apos;emailing (eTarget) pour l&apos;envoi des récapitulatifs de simulation. Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Transferts hors UE
            </h2>
            <p>
              Le site est hébergé par Netlify, Inc. (États-Unis). Les transferts de données vers les États-Unis sont encadrés par les clauses contractuelles types de la Commission européenne. Les données de formulaire et de simulation transitent par des serveurs situés dans l&apos;Union européenne.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Durée de conservation
            </h2>
            <p>
              Vos données de contact sont conservées pendant la durée de la relation commerciale et 3 ans après le dernier contact. Les données de facturation et les documents de formation (conventions, attestations) sont conservés 10 ans conformément aux obligations comptables et fiscales. Les données du simulateur DIFE ne sont pas stockées au-delà de l&apos;envoi de l&apos;email récapitulatif.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants : droit d&apos;accès à vos données ; droit de rectification ; droit à l&apos;effacement (« droit à l&apos;oubli ») ; droit à la limitation du traitement ; droit à la portabilité de vos données ; droit d&apos;opposition au traitement. Pour exercer ces droits, adressez votre demande par email à contact@eluformation.fr ou par courrier à PLACE DE LA REPUBLIQUE, 1 Avenue Victor Hugo, 27200 Vernon. Nous nous engageons à répondre dans un délai d&apos;un mois. En cas de litige, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : www.cnil.fr.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Cookies</h2>
            <p>
              Ce site utilise des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques pour la mesure d&apos;audience. Vous pouvez gérer vos préférences via le bandeau cookies affiché lors de votre première visite. Aucun cookie publicitaire n&apos;est déposé.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Sécurité des données
            </h2>
            <p>
              Nous mettons en oeuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Le site est accessible en HTTPS et les communications avec nos prestataires sont chiffrées.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Contact</h2>
            <p>
              Pour toute question relative à la protection de vos données personnelles : contact@eluformation.fr
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
