import { Metadata } from "next";
import Container from "@/components/layout/Container";

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
              PLACE DE LA REPUBLIQUE<br />
              SAS au capital de 30 000 euros<br />
              1 Avenue Victor Hugo, 27200 Vernon<br />
              SIREN : 892 385 949 - SIRET : 892 385 949 00029<br />
              RCS Evreux<br />
              N° TVA intracommunautaire : FR54892385949<br />
              Email : contact@eluformation.fr<br />
              Téléphone : 07 69 69 49 94
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Directeur de la publication
            </h2>
            <p>Alexandre Huau-Armani, en qualité de représentant légal de la société EUREKA CONCEPT INNOVATION, Présidente de PLACE DE LA REPUBLIQUE.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Hébergement</h2>
            <p>
              Netlify, Inc.<br />
              512 2nd Street, Suite 200<br />
              San Francisco, CA 94107, États-Unis<br />
              Site : https://www.netlify.com
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Organisme de formation
            </h2>
            <p>
              Organisme de formation enregistré sous le numéro de déclaration d&apos;activité 32591105559 auprès du Préfet de région de Normandie. Cette déclaration ne vaut pas agrément de l&apos;État.<br />
              Code NAF : 8559A - Formation continue d&apos;adultes
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, vidéos, supports pédagogiques) est la propriété exclusive de PLACE DE LA REPUBLIQUE ou de ses partenaires et est protégé par le droit d&apos;auteur (articles L.111-1 et suivants du Code de la propriété intellectuelle). Toute reproduction, représentation, modification ou exploitation, même partielle, est interdite sans autorisation écrite préalable d&apos;Élu Formation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Marque déposée
            </h2>
            <p>
              "Élu Formation" est une marque déposée auprès de l&apos;INPI sous le numéro FR4878219 (enregistrée le 19 juin 2022, classes 16, 35, 41, 42).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Crédits photographiques
            </h2>
            <p>
              Photographies : Élu Formation, Adobe Stock, Unsplash. Toute utilisation sans autorisation est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-2">
              Données personnelles
            </h2>
            <p>
              Pour toute information relative à la collecte et au traitement de vos données personnelles, consultez notre <a href="/confidentialite" className="text-red hover:underline">Politique de confidentialité</a>.
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
