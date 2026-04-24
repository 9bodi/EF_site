import { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";

export const metadata: Metadata = {
  title:
    "DIFE élu : qu'est-ce que c'est et comment financer votre formation en 2026 ?",
  description:
    "Le DIFE (Droit Individuel à la Formation d'Élu) vous donne 800 euros de budget formation. Découvrez comment l'utiliser pas à pas.",
};

export default function DifeToutComprendre() {
  return (
    <ArticleLayout
      category="Financement"
      date="Avril 2026"
      readTime="6 min"
      title="DIFE élu : qu'est-ce que c'est et comment financer votre formation en 2026 ?"
      photoNote="Capture d'écran stylisée de l'interface Mon Compte Élu ou illustration vectorielle d'un téléphone"
      cta={{
        label: "Simuler mes droits DIFE — Gratuit",
        subtitle: "Un conseiller vous rappelle sous 24h",
        href: "/contact",
      }}
    >
      <p>
        Vous avez des droits à la formation que vous ignorez peut-être. Depuis
        2022, chaque élu local — qu&apos;il soit maire ou simple conseiller,
        indemnisé ou non — bénéficie chaque année d&apos;un budget de 800 euros pour
        se former. Ce dispositif s&apos;appelle le DIFE : Droit Individuel à la
        Formation d&apos;Élu.
      </p>
      <p>
        Problème : la majorité des élus ne savent pas qu&apos;ils l&apos;ont, ou ne
        savent pas comment l&apos;utiliser. Cet article vous explique tout —
        simplement, sans jargon administratif.
      </p>

      <h2>Le DIFE, c&apos;est quoi exactement ?</h2>
      <p>
        Le DIFE est un crédit formation accordé à chaque élu local dans le cadre
        de la loi du 27 décembre 2019 relative à l&apos;engagement dans la vie
        locale et à la proximité de l&apos;action publique.
      </p>
      <p>
        Concrètement : chaque année de mandat, 800 euros sont crédités sur votre
        compte formation personnel. Ces fonds sont gérés par la Caisse des
        Dépôts et Consignations (CDC) et ne proviennent PAS du budget de votre
        commune. Ils sont financés par une cotisation versée par les communes sur
        les indemnités de leurs élus.
      </p>
      <p>
        Même si vous n&apos;êtes pas indemnisé (situation fréquente dans les petites
        communes), vous bénéficiez quand même du DIFE.
      </p>

      <h2>Qui peut utiliser le DIFE ?</h2>
      <p>
        Le DIFE concerne tous les conseillers municipaux (majorité et
        opposition), tous les maires et adjoints, les conseillers départementaux
        et régionaux, les conseillers des EPCI, et aussi bien les élus
        indemnisés que ceux qui ne perçoivent pas d&apos;indemnités.
      </p>

      <h2>Que peut-on financer avec le DIFE ?</h2>
      <p>
        Le DIFE finance exclusivement les formations en lien avec l&apos;exercice du
        mandat d&apos;élu. Plus précisément : les formations dispensées par des
        organismes agréés par le Ministère de l&apos;Intérieur (comme Élu
        Formation), les frais pédagogiques (inscription, accès à la plateforme,
        matériel), les frais de déplacement et d&apos;hébergement sous certaines
        conditions, et les formations nécessaires à la réinsertion
        professionnelle dans les 6 mois après la fin du mandat.
      </p>

      <h2>Comment accéder à son DIFE — le tutoriel pas à pas</h2>
      <p>
        Rendez-vous sur moncompteformation.gouv.fr. Cliquez sur « Mon espace
        Élu » ou « Compte Élu ». Connectez-vous avec votre identité numérique
        La Poste (création gratuite si vous ne l&apos;avez pas). Consultez votre
        solde DIFE et les formations disponibles. Sélectionnez une formation Élu
        Formation et validez votre inscription. La prise en charge est
        automatique — vous n&apos;avez rien à avancer.
      </p>

      <h2>Et si je n&apos;ai pas d&apos;identité numérique La Poste ?</h2>
      <p>
        La Poste propose une identité numérique gratuite et sécurisée. Vous
        pouvez la créer en ligne en 10 minutes, ou vous faire aider dans
        n&apos;importe quel bureau de poste. Nos conseillers peuvent aussi vous
        guider par téléphone lors de votre premier contact.
      </p>

      <h2>Quelle formation choisir en priorité en 2026 ?</h2>
      <p>
        Si vous êtes un nouvel élu des élections de mars 2026, nous vous
        recommandons de commencer par la formation « Fondamentaux du mandat
        municipal ». En 4 heures, vous comprendrez votre rôle, vos droits, vos
        responsabilités — une base solide pour tout le reste.
      </p>
      <p>
        Si vous êtes un élu confirmé, les formations les plus demandées en 2026
        sont la prise de parole, le budget municipal, et l&apos;IA pour les élus.
      </p>

      <h2>Conclusion</h2>
      <p>
        Le DIFE est l&apos;un de vos droits les plus concrets et les moins utilisés.
        En 2025, seulement un élu sur quatre avait mobilisé ses droits DIFE. En
        2026, avec l&apos;ouverture des nouvelles élections, c&apos;est le moment idéal
        pour découvrir ce dispositif et investir dans votre formation.
      </p>
      <p>
        Élu Formation vous accompagne gratuitement dans toute la démarche DIFE.
        Appelez-nous ou remplissez le formulaire — un conseiller vous rappelle
        sous 24h.
      </p>
    </ArticleLayout>
  );
}

