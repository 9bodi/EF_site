import { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";

export const metadata: Metadata = {
  title:
    "Nouvel élu municipal en 2026 : tout ce que vous devez savoir pour démarrer votre mandat",
  description:
    "Vous venez d'être élu(e) lors des municipales de mars 2026. Droits à la formation, responsabilités, premiers pas au conseil... Notre guide complet pour les nouveaux élus.",
};

export default function GuideNouvelElu() {
  return (
    <ArticleLayout
      category="Guide"
      date="Avril 2026"
      readTime="8 min"
      title="Nouvel élu municipal en 2026 : tout ce que vous devez savoir pour démarrer votre mandat"
      photoNote="Photo : nouveau maire ou adjoint qui prend ses marques, lit un document officiel, ambiance premier jour"
      cta={{
        label: "Découvrir la formation Fondamentaux du mandat",
        subtitle: "100 % financé par votre DIFE - 4h en visioconférence",
        href: "/formations/fondamentaux-mandat",
      }}
    >
      <p>
        Les résultats sont tombés. Vous avez été élu(e) en mars dernier. Après
        la joie et les félicitations, vient maintenant l&apos;heure des premières
        responsabilités. Conseil municipal d&apos;installation, prise de fonction,
        découverte des dossiers en cours... Le calendrier s&apos;emballe vite.
      </p>
      <p>
        Mais par où commencer ? Quels sont vos droits ? Vos obligations ? Qui
        peut vous aider ? Ce guide a été écrit pour les nouveaux élus qui
        veulent démarrer leur mandat du bon pied - sans perdre de temps en
        questions sans réponses.
      </p>

      <h2>1. Votre première semaine comme élu : ce qui se passe</h2>
      <p>
        Après les élections, chaque commune est tenue d&apos;organiser un conseil
        municipal d&apos;installation dans les 8 jours suivant le dernier tour de
        scrutin. C&apos;est lors de cette séance que le maire est élu parmi les
        membres du conseil, et que les adjoints sont nommés.
      </p>
      <p>
        Pour vous, nouvel élu, cette séance est fondatrice. Elle marque
        officiellement le début de votre mandat de 6 ans et de vos
        responsabilités civiques. Venez préparé : lisez l&apos;ordre du jour, posez
        vos questions au secrétaire de mairie en amont.
      </p>

      <h2>2. Vos droits fondamentaux en tant qu&apos;élu local</h2>
      <p>
        Beaucoup de nouveaux élus ignorent les droits auxquels ils ont accès.
        Voici les principaux :
      </p>
      <p>
        <strong>Droit à la formation :</strong> 800 euros de budget formation
        par an, financé par la Caisse des Dépôts (DIFE). Disponible pour tous
        les élus, même non indemnisés.
      </p>
      <p>
        <strong>Droit à l&apos;information :</strong> vous avez le droit de
        consulter tous les documents préparés pour les séances du conseil, dans
        un délai raisonnable avant la réunion.
      </p>
      <p>
        <strong>Droit d&apos;expression :</strong> vous pouvez vous exprimer lors
        des séances du conseil dans le respect du règlement intérieur.
      </p>
      <p>
        <strong>Indemnités de fonction :</strong> si votre commune a plus de
        1 000 habitants, vous pouvez bénéficier d&apos;indemnités de fonction selon
        un barème fixé par la loi.
      </p>
      <p>
        <strong>Protection fonctionnelle :</strong> en cas de mise en cause dans
        l&apos;exercice de vos fonctions, la commune est tenue de vous défendre.
      </p>

      <h2>3. Vos responsabilités : ce qu&apos;on ne vous dit pas toujours</h2>
      <p>
        Le mandat d&apos;élu est gratifiant. Il est aussi responsabilisant. En tant
        que membre du conseil municipal, vous pouvez engager votre
        responsabilité civile, voire pénale, dans certaines décisions.
      </p>
      <p>
        Les domaines les plus sensibles pour un élu local sont l&apos;urbanisme
        (autorisation de construire, permis), la commande publique (marchés,
        appels d&apos;offres), la sécurité des équipements publics, et la gestion
        des subventions.
      </p>
      <p>
        Ce n&apos;est pas pour vous faire peur - c&apos;est pour vous inciter à vous
        former et à poser les bonnes questions avant de voter.
      </p>

      <h2>4. Comprendre le fonctionnement de la commune</h2>
      <p>
        La commune est organisée en deux sphères qui ne se confondent pas. La
        sphère politique - le conseil municipal (vous), le maire, les adjoints -
        délibère, vote et décide. La sphère administrative - les agents
        communaux (secrétaire de mairie, DGS, services techniques) - exécute et
        conseille.
      </p>
      <p>
        Un élu efficace sait se positionner dans l&apos;une et comprendre l&apos;autre.
        Ne cherchez pas à « faire le travail des agents » - concentrez-vous sur
        la prise de décision et le contrôle.
      </p>

      <h2>5. Vos droits à la formation : le DIFE expliqué en 2 minutes</h2>
      <p>
        Parmi tous vos droits, le DIFE (Droit Individuel à la Formation d&apos;Élu)
        est celui dont vous entendrez le plus parler - et que vous devriez
        utiliser en priorité.
      </p>
      <p>
        800 euros par an, financés par la Caisse des Dépôts. Pas un centime du
        budget communal. Utilisables pour toutes les formations agréées par le
        Ministère de l&apos;Intérieur. Cumulables d&apos;une année sur l&apos;autre.
      </p>
      <p>
        En pratique : vous vous inscrivez via Mon Compte Élu
        (moncompteformation.gouv.fr), vous choisissez votre formation, et le
        financement est versé directement à l&apos;organisme. Élu Formation vous
        accompagne dans chaque étape.
      </p>

      <h2>6. Les 5 premiers sujets à maîtriser dans votre mandat</h2>
      <p>
        Vous ne pouvez pas tout savoir d&apos;entrée. Mais vous pouvez prioriser.
        Les cinq compétences les plus utiles pour démarrer efficacement sont le
        budget communal (savoir lire, comprendre et voter un budget), la prise
        de parole (vous allez parler en public très souvent), la communication
        locale (tenir vos administrés informés est un droit et une obligation
        démocratique) et le droit
        des collectivités (connaître vos droits et vos limites vous protège).
      </p>

      <h2>Conclusion</h2>
      <p>
        Démarrer un mandat d&apos;élu local, c&apos;est embarquer dans une aventure
        civique exigeante mais profondément utile. Vous avez les droits, les
        outils, et les formations pour y réussir. Ne les laissez pas
        inexploités.
      </p>
      <p>
        Élu Formation vous accompagne depuis les premières semaines de votre
        mandat jusqu&apos;à son terme. Découvrez notre formation « Fondamentaux du
        mandat municipal » - conçue spécialement pour les nouveaux élus des
        élections de mars 2026.
      </p>
    </ArticleLayout>
  );
}

