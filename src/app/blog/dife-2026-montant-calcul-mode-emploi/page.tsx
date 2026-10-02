import { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";

export const metadata: Metadata = {
  title: "DIFE 2026 : nouveaux montants, calcul et mode d'emploi pour les élus locaux",
  description:
    "Réforme DIFE décembre 2026 : 600 € par an, plafond 1 200 €. Tout savoir sur les nouveaux montants, le calcul selon votre situation et les démarches.",
};

export default function Dife2026MontantCalcul() {
  return (
    <ArticleLayout
      category="Financement"
      date="Octobre 2026"
      readTime="8 min"
      title="DIFE 2026 : nouveaux montants, calcul et mode d'emploi pour les élus locaux"
      photoNote="Illustration d'un élu consultant son solde DIFE sur Mon Compte Élu"
      cta={{
        label: "Simuler mes droits DIFE en 1 minute",
        subtitle: "Résultat immédiat, gratuit et sans engagement",
        href: "/financement-formation-elu/simulateur",
      }}
    >
      <p>
        Vous avez été élu(e) ou réélu(e) en mars 2026. Vous savez peut-être que
        vous disposez d&apos;un droit à la formation, mais combien avez-vous
        exactement sur votre compte ? Comment le montant est-il calculé ? Et
        surtout, qu&apos;est-ce qui change avec la réforme qui entre en vigueur
        le 1er décembre 2026 ? On fait le point.
      </p>

      <h2>Ce qui change au 1er décembre 2026</h2>
      <p>
        L&apos;arrêté du 28 août 2026, publié au Journal officiel le 16 septembre,
        modifie en profondeur les paramètres du DIFE. Voici les nouveaux
        montants qui s&apos;appliquent à compter du 1er décembre 2026 :
      </p>
      <p>
        <strong>Crédit annuel : 600 € par an</strong> (contre 400 € jusqu&apos;au
        30 novembre 2026).
      </p>
      <p>
        <strong>Plafond cumulé : 1 200 €</strong> (contre 800 € auparavant).
      </p>
      <p>
        <strong>Coût horaire maximal : 100 € HT</strong> (contre 80 € HT
        auparavant).
      </p>
      <p>
        Les droits augmentent de 50 %, mais le coût horaire maximal augmente
        aussi de 25 %. En pratique, le gain réel en heures de formation est
        d&apos;environ 20 % : un élu pourra financer environ 6 heures de
        formation par an au lieu de 5, et 12 heures avec un compte au plafond
        au lieu de 10.
      </p>

      <h2>Et pour 2026, année de transition ?</h2>
      <p>
        Les élus dont le mandat a débuté en mars 2026 ont reçu un premier
        crédit de 400 € selon l&apos;ancien barème. L&apos;arrêté prévoit un
        complément de 200 € pour porter le crédit 2026 à 600 €. Les modalités
        exactes de ce versement complémentaire doivent encore être précisées
        par la Caisse des Dépôts et Consignations. Nous mettrons cet article
        à jour dès que les informations seront disponibles.
      </p>

      <h2>Le DIFE : rappel du principe</h2>
      <p>
        Le DIFE (Droit Individuel à la Formation des Élus) est un crédit
        personnel accordé à chaque élu local pour financer ses formations liées
        au mandat. Il est alimenté chaque année par la Caisse des Dépôts et
        Consignations, pas par le budget de votre commune. Tous les élus y ont
        droit, y compris les conseillers non indemnisés.
      </p>

      <h2>Combien ai-je sur mon compte selon ma situation ?</h2>

      <h3>Nouvel élu en mars 2026</h3>
      <p>
        Votre compte a été crédité de 400 € à l&apos;ouverture de votre mandat.
        Un complément de 200 € devrait être versé suite à la réforme, portant
        votre crédit 2026 à 600 €. En 2027, vous recevrez un nouveau crédit de
        600 €, pour atteindre le plafond de 1 200 €. Si vous n&apos;avez jamais
        été élu(e) auparavant, vous partez de zéro — pas de droits antérieurs.
      </p>

      <h3>Réélu(e) en mars 2026</h3>
      <p>
        Vos droits non utilisés du mandat 2020-2026 ont été conservés, dans la
        limite de l&apos;ancien plafond de 800 €. Un crédit de 400 € (bientôt
        complété à 600 €) s&apos;y ajoute au début du nouveau mandat. À
        compter de décembre 2026, le nouveau plafond de 1 200 € s&apos;applique,
        ce qui laisse de la place pour accumuler davantage de droits.
      </p>
      <p>
        Si vous aviez utilisé une partie de vos droits (par exemple 400 € pour
        une formation), votre solde est remonté grâce au nouveau crédit, et le
        plafond supérieur vous permet de cumuler davantage.
      </p>

      <h3>Non réélu(e)</h3>
      <p>
        Vos droits acquis pendant le mandat précédent restent disponibles
        pendant <strong>6 mois après la fin de votre mandat</strong>. Passé ce
        délai, les droits non utilisés sont définitivement perdus. Si vous avez
        quitté vos fonctions en mars 2026, vous avez donc jusqu&apos;à septembre
        2026 pour utiliser votre solde.
      </p>

      <h2>Tableau récapitulatif avant / après réforme</h2>
      <p>
        <strong>Jusqu&apos;au 30 novembre 2026 :</strong> crédit annuel 400 €,
        plafond 800 €, coût horaire max 80 € HT.
      </p>
      <p>
        <strong>À partir du 1er décembre 2026 :</strong> crédit annuel 600 €,
        plafond 1 200 €, coût horaire max 100 € HT.
      </p>

      <h2>Comment consulter mon solde DIFE ?</h2>
      <p>
        Connectez-vous sur moncompteformation.gouv.fr, rubrique « Mon Compte
        Élu ». Vous y trouverez votre solde disponible, l&apos;historique de vos
        crédits et de vos formations passées. Si vous n&apos;avez jamais activé
        votre compte, vous aurez besoin de créer une identité numérique La Poste
        — c&apos;est gratuit et cela prend une dizaine de minutes.
      </p>
      <p>
        Vous pouvez aussi utiliser notre simulateur en ligne pour obtenir une
        estimation immédiate de votre solde, sans créer de compte.
      </p>

      <h2>Que puis-je financer avec mon DIFE ?</h2>
      <p>
        Le DIFE finance les formations dispensées par des organismes agréés par
        le Ministère de l&apos;Intérieur. Cela couvre les frais pédagogiques
        (inscription, supports, accès plateforme), et sous certaines conditions
        les frais de déplacement et d&apos;hébergement.
      </p>
      <p>
        Chez Élu Formation, toutes nos formations sont éligibles au DIFE :
        formations en visioconférence (prise de parole, budget, urbanisme, IA,
        réseaux sociaux…) et notre formation e-learning « Bien gérer son image
        et sa communication ». Avec les nouveaux montants, vous pouvez financer
        davantage de formations sur un même mandat.
      </p>

      <h2>DIFE ou financement collectivité : quelle différence ?</h2>
      <p>
        Le DIFE est votre enveloppe personnelle. Vous l&apos;utilisez librement,
        sans demander l&apos;accord de votre maire ou de votre collectivité.
        Le financement par la collectivité utilise un autre budget : celui que
        chaque commune doit prévoir pour la formation de ses élus. Les deux
        dispositifs sont complémentaires. Si votre DIFE ne couvre pas la
        totalité d&apos;une formation, votre collectivité peut prendre en charge
        le complément.
      </p>

      <h2>Les erreurs les plus fréquentes</h2>
      <p>
        Beaucoup d&apos;élus pensaient que le DIFE était crédité de 800 € par
        an. C&apos;était faux avec l&apos;ancien barème (400 €/an, plafond 800 €)
        et ça le reste avec le nouveau (600 €/an, plafond 1 200 €). Le crédit
        annuel et le plafond sont deux choses différentes. D&apos;autres pensent
        que leurs droits sont perdus en cas de réélection — c&apos;est
        l&apos;inverse, ils sont conservés. Enfin, certains élus non réélus
        ignorent qu&apos;ils disposent encore de 6 mois pour utiliser leur
        solde.
      </p>

      <h2>Conclusion</h2>
      <p>
        La réforme de décembre 2026 est une bonne nouvelle pour les élus : plus
        de droits, un plafond plus élevé, davantage de possibilités de
        formation. Mais elle ne change rien au principal frein : le non-recours.
        La majorité des élus n&apos;utilisent toujours pas leurs droits, faute
        d&apos;information ou d&apos;accompagnement dans les démarches.
      </p>
      <p>
        Élu Formation vous accompagne dans toutes les étapes : simulation de
        vos droits, choix de la formation, inscription sur Mon Compte Élu.
        Utilisez notre simulateur en ligne ou appelez-nous — un conseiller vous
        rappelle sous 24h.
      </p>
    </ArticleLayout>
  );
}
