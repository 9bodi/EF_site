import { Metadata } from "next";
import Container from "@/components/layout/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegales() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-navy font-heading mb-8">
          Mentions légales
        </h1>

        <div className="space-y-6 text-gray-text leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Éditeur du site</h2>
            <p>
              {SITE.legal.entity}<br />
              {SITE.address}<br />
              Email : {SITE.email}<br />
              Téléphone : {SITE.phone[0]}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Directeur de la publication
            </h2>
            <p>[ Nom du dirigeant — à compléter ]</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Hébergement</h2>
            <p>
              [ Nom de l&apos;hébergeur — à compléter ]<br />
              [ Adresse de l&apos;hébergeur ]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Numéro de déclaration d&apos;activité
            </h2>
            <p>
              Organisme de formation enregistré sous le numéro{" "}
              {SITE.legal.qualiopi} auprès du Préfet de région de Normandie.
              <br />
              Code NAF : {SITE.legal.naf}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              vidéos) est protégé par le droit d&apos;auteur. Toute reproduction,
              même partielle, est interdite sans autorisation écrite préalable
              d&apos;Élu Formation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Crédits photographiques
            </h2>
            <p>[ À compléter lors de l&apos;intégration des visuels définitifs ]</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

