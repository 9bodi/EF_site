import { Metadata } from "next";
import Container from "@/components/layout/Container";

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
              Article 1 - Identification de l&apos;organisme
            </h2>
            <p>
              PLACE DE LA REPUBLIQUE, SAS au capital de 30 000 euros, dont le siège social est situé 1 Avenue Victor Hugo, 27200 Vernon, immatriculée au RCS d&apos;Evreux sous le numéro 892 385 949, N° TVA intracommunautaire FR54892385949, ci-après dénommée "Élu Formation". Organisme de formation enregistré sous le numéro de déclaration d&apos;activité 32591105559 auprès du Préfet de région de Normandie. Cette déclaration ne vaut pas agrément de l&apos;État.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 2 - Objet et champ d&apos;application
            </h2>
            <p>
              Les présentes Conditions Générales de Vente s&apos;appliquent à l&apos;ensemble des prestations de formation professionnelle continue proposées par Élu Formation aux élus locaux, collectivités territoriales et à toute personne physique ou morale (ci-après "le Client"). Toute inscription à une formation implique l&apos;acceptation sans réserve des présentes CGV.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 3 - Inscription et convention de formation
            </h2>
            <p>
              L&apos;inscription à une formation est considérée comme définitive à réception par Élu Formation du bulletin d&apos;inscription complété et signé, ou de la convention de formation signée, accompagné(e) le cas échéant de l&apos;accord de prise en charge (DIFE via la Caisse des Dépôts, collectivité, OPCO ou autre organisme financeur). Élu Formation adresse au Client une confirmation d&apos;inscription par email. Élu Formation se réserve le droit de reporter ou d&apos;annuler une session si le nombre minimum de participants n&apos;est pas atteint, et en informera le Client au moins 7 jours ouvrés avant la date prévue.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 4 - Tarifs et modalités de paiement
            </h2>
            <p>
              Les tarifs des formations sont indiqués en euros hors taxes sur le site eluformation.fr et dans les propositions commerciales. TVA non applicable, article 293 B du CGI, sauf mention contraire. Les tarifs sont révisables à tout moment ; les tarifs applicables sont ceux en vigueur au jour de l&apos;inscription. Le paiement est dû à réception de la facture, sauf accord de prise en charge par un organisme financeur (Caisse des Dépôts pour le DIFE, collectivité, OPCO). En cas de prise en charge partielle, le solde reste à la charge du Client. En cas de retard de paiement, des pénalités de retard seront appliquées au taux de trois fois le taux d&apos;intérêt légal en vigueur, conformément à l&apos;article L.441-10 du Code de commerce. Une indemnité forfaitaire de 40 euros pour frais de recouvrement sera également due (article D.441-5 du Code de commerce).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 5 - Droit de rétractation
            </h2>
            <p>
              Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client personne physique qui contracte à des fins n&apos;entrant pas dans le cadre de son activité professionnelle dispose d&apos;un délai de 14 jours à compter de la signature de la convention pour exercer son droit de rétractation, sans pénalité et sans motif. Ce droit ne s&apos;applique pas aux formations dont l&apos;exécution a commencé avec l&apos;accord du Client avant l&apos;expiration du délai de rétractation. Les collectivités territoriales et personnes morales ne bénéficient pas de ce droit de rétractation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 6 - Annulation et report
            </h2>
            <p>
              Toute annulation par le Client doit être notifiée par écrit (email à contact@eluformation.fr). En cas d&apos;annulation reçue plus de 14 jours ouvrés avant le début de la formation, aucun frais n&apos;est dû. En cas d&apos;annulation entre 7 et 14 jours ouvrés avant la formation, 50 % du montant total est facturé. En cas d&apos;annulation moins de 7 jours ouvrés avant la formation ou en cas d&apos;absence non signalée, la totalité du montant est due. Le remplacement d&apos;un participant par un autre élu de la même collectivité est accepté sans frais jusqu&apos;à la veille de la formation, sous réserve de notification écrite. En cas de financement DIFE, les conditions d&apos;annulation de la Caisse des Dépôts s&apos;appliquent en complément.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 7 - Déroulement des formations
            </h2>
            <p>
              Les formations se déroulent en présentiel (intra-collectivité), en distanciel (visioconférence) ou en e-learning selon le programme choisi. Élu Formation met à disposition les moyens pédagogiques et techniques nécessaires. Le Client s&apos;engage à respecter le règlement intérieur de l&apos;organisme de formation, communiqué en amont de la formation. Une feuille d&apos;émargement est signée par demi-journée pour les formations en présentiel et en distanciel synchrone.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 8 - Attestation de formation
            </h2>
            <p>
              À l&apos;issue de chaque formation, Élu Formation délivre au participant une attestation de fin de formation mentionnant les objectifs, la nature, la durée de l&apos;action et les résultats de l&apos;évaluation des acquis, conformément à l&apos;article L.6353-1 du Code du travail.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 9 - Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des supports pédagogiques, documents, contenus e-learning et ressources remis au Client dans le cadre des formations sont la propriété exclusive d&apos;Élu Formation. Ils ne peuvent être reproduits, diffusés ou utilisés en dehors du cadre de la formation sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 10 - Responsabilité
            </h2>
            <p>
              Élu Formation s&apos;engage à mettre en oeuvre tous les moyens nécessaires à la bonne exécution des prestations de formation. Il s&apos;agit d&apos;une obligation de moyens et non de résultat. La responsabilité d&apos;Élu Formation ne saurait être engagée en cas de force majeure (au sens de l&apos;article 1218 du Code civil), de fait d&apos;un tiers ou de faute du Client. En tout état de cause, la responsabilité d&apos;Élu Formation est limitée au montant de la formation concernée.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 11 - Protection des données personnelles
            </h2>
            <p>
              Les données personnelles collectées dans le cadre de l&apos;inscription et du suivi des formations sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). Pour en savoir plus, consultez notre <a href="/confidentialite" className="text-red hover:underline">Politique de confidentialité</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 12 - Réclamations et médiation
            </h2>
            <p>
              Toute réclamation relative à une formation doit être adressée par écrit à contact@eluformation.fr. Élu Formation s&apos;engage à accuser réception sous 48 heures et à apporter une réponse sous 15 jours ouvrés. Conformément aux articles L.611-1 et suivants du Code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu. Le médiateur compétent est : Médiation de la consommation (les coordonnées précises du médiateur seront communiquées sur demande).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Article 13 - Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;engagent à rechercher une solution amiable. À défaut, le litige sera porté devant le Tribunal compétent du ressort du siège social d&apos;Élu Formation (Tribunal de commerce d&apos;Evreux), sauf dispositions d&apos;ordre public contraires applicables au Client consommateur.
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
