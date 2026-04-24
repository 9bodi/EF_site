export interface Formation {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  accroche: string;
  pourquoi?: string;
  format: string;
  duree: string;
  financement: string;
  tarif: string;
  objectifs: string[];
  programme: { title: string; duree?: string }[];
  formateur: string;
  tag?: string;
  image?: string;
  infos?: {
    public: string;
    prerequis: string;
    modalites: string;
    methodes: string[];
    evaluation: string[];
    accessibilite: string;
  };
}

export const formations: Formation[] = [
  {
    slug: "prise-de-parole",
    image: "/img/formations/prise-de-parole.png",
    title: "Prendre la parole en public",
    shortTitle: "Prise de parole",
    h1: "Prendre la parole en public",
    metaTitle:
      "Formation prise de parole en public pour élus locaux | Élu Formation",
    metaDescription:
      "Maîtrisez les clés pour gagner en aisance à l'oral et articuler des messages rapidement, simplement et efficacement. Éligible DIFE.",
    accroche:
      "Maîtrisez les clés pour gagner en aisance à l'oral et pour articuler des messages rapidement, simplement et efficacement.",
    pourquoi:
      "Formation essentielle pour sécuriser et améliorer votre action d'élu.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Évaluer ses qualités d'orateur",
      "Améliorer ses capacités à la prise de parole en public",
      "Savoir capter l'attention de l'auditoire pour communiquer vos idées et vos messages de façon spontanée ou dans le cadre d'un discours",
      "Développer son potentiel d'orateur et mieux gérer son trac et ses émotions à l'oral",
    ],
    programme: [
      { title: "Transmettre efficacement ses idées" },
      { title: "Faire coïncider langage corporel et propos tenus" },
      { title: "Développer son potentiel d'orateur" },
      { title: "Travailler sa technique d'orateur (voix, respiration, articulation)" },
      { title: "Mieux gérer son trac et ses émotions à l'oral" },
    ],
    formateur:
      "Coach en communication publique, ancien directeur de cabinet et formateur certifié en prise de parole.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "budget-municipal",
    image: "/img/formations/budget-municipal.png",
    title: "Bien comprendre le budget et les finances locales",
    shortTitle: "Budget municipal",
    h1: "Bien comprendre le budget et les finances locales",
    metaTitle:
      "Formation budget municipal pour élus locaux — Comprendre les finances de votre commune | Élu Formation",
    metaDescription:
      "Prenez des décisions financières éclairées en maîtrisant les notions essentielles de la procédure budgétaire. Éligible DIFE.",
    accroche:
      "Prenez des décisions financières éclairées en maîtrisant les notions essentielles de la procédure budgétaire.",
    pourquoi:
      "Prenez des décisions financières éclairées en maîtrisant les notions essentielles de la procédure budgétaire.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Disposer de bonnes bases en finances publiques locales",
      "Comprendre et analyser les enjeux liés au budget municipal",
      "Prendre des bonnes décisions sur la base des informations essentielles",
    ],
    programme: [
      { title: "Principes des finances publiques locales : les fondamentaux" },
      { title: "Identifier les postes comptables : principales recettes et dépenses locales" },
      { title: "Lire les résultats et analyser les tendances" },
      { title: "Piloter son budget communal" },
      { title: "Le vote du budget" },
    ],
    formateur:
      "Directeur financier de collectivité, expert-comptable spécialisé secteur public local.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "urbanisme",
    image: "/img/formations/urbanisme.png",
    title: "Urbanisme : appréhender le cadre légal et les responsabilités de l'élu local",
    shortTitle: "Urbanisme",
    h1: "Urbanisme : appréhender le cadre légal et les responsabilités de l'élu local",
    metaTitle:
      "Formation urbanisme pour élus locaux — Cadre légal et responsabilités | Élu Formation",
    metaDescription:
      "Comprenez les règles et évitez les risques juridiques pour prendre des décisions pertinentes et sécurisées en matière d'urbanisme. Éligible DIFE.",
    accroche:
      "Comprenez les règles et évitez les risques juridiques pour prendre des décisions pertinentes et sécurisées en matière d'urbanisme.",
    pourquoi:
      "Formation essentielle pour sécuriser et améliorer votre action d'élu.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Comprendre le contexte de l'urbanisme et le rôle des différents acteurs (ville, EPCI, autres collectivités, État, bailleurs...)",
      "Connaître les obligations réglementaires qui s'imposent à la collectivité",
      "Analyser pour décider efficacement",
      "Identifier les différents documents d'urbanisme et leur interdépendance",
      "Se repérer dans les différentes phases de l'instruction d'un dossier",
    ],
    programme: [
      { title: "Les enjeux et le contexte de l'urbanisme" },
      { title: "Intégrer les obligations imposées par le « zéro artificialisation nette (ZAN) »" },
      { title: "Les différents documents d'urbanisme : SCoT, PLUi, PLU, carte communale, RNU" },
      { title: "Le lien entre les différents documents d'urbanisme" },
      { title: "Les trois niveaux de compétence en urbanisme" },
      { title: "Le champ d'application des autorisations d'urbanisme : permis ou déclaration ?" },
      { title: "Les enjeux du certificat d'urbanisme (CU)" },
      { title: "Le rôle de la collectivité dans les différentes phases de l'instruction" },
      { title: "La décision et ses prolongements" },
    ],
    formateur:
      "Juriste spécialiste du droit de l'urbanisme, ancien instructeur des autorisations d'urbanisme en collectivité.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "decentralisation",
    image: "/img/formations/decentralisation.png",
    title: "Déchiffrer le mille-feuille de la décentralisation",
    shortTitle: "Décentralisation",
    h1: "Déchiffrer le mille-feuille de la décentralisation et comprendre le fonctionnement des collectivités territoriales",
    metaTitle:
      "Formation décentralisation et collectivités territoriales pour élus | Élu Formation",
    metaDescription:
      "S'orienter dans le mille-feuille territorial, comprendre le fonctionnement des collectivités et décrypter le système pour agir efficacement. Éligible DIFE.",
    accroche:
      "Une formation essentielle pour s'orienter, comprendre le fonctionnement des collectivités territoriales, connaître vos partenaires et décrypter le système pour agir efficacement.",
    pourquoi:
      "Une formation essentielle pour s'orienter, comprendre le fonctionnement des collectivités territoriales, connaître vos partenaires et décrypter le système pour agir efficacement.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Se repérer dans le mille-feuille de la décentralisation",
      "Comprendre l'organisation des collectivités territoriales",
      "Positionner la commune dans cette organisation",
      "Connaître les compétences clés des acteurs (commune, EPCI, département, région, État, opérateurs)",
      "Appréhender les enjeux et les relations entre ces différents niveaux de responsabilité",
    ],
    programme: [
      { title: "Le cadre général de l'action des collectivités territoriales (décentralisation, CGCT)" },
      { title: "Les différents niveaux de collectivité (commune, intercommunalité, département, région)" },
      { title: "La répartition des compétences et les moyens d'action" },
      { title: "Les relations institutionnelles et financières entre collectivités et État" },
      { title: "Les acteurs du développement des territoires (Banque des territoires, SEM/SPL, réseaux consulaires…)" },
    ],
    formateur:
      "Expert en administration territoriale, ancien directeur général des services de collectivité.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "ia-pour-elus",
    image: "/img/formations/ia-pour-elus.png",
    title: "Gagner en efficacité avec l'intelligence artificielle générative",
    shortTitle: "IA pour les élus",
    h1: "Gagner en efficacité avec l'intelligence artificielle générative en tant qu'élus locaux",
    metaTitle:
      "Formation IA pour élus locaux — Intelligence artificielle générative | Élu Formation",
    metaDescription:
      "Comprendre les fondamentaux de l'IA générative, utiliser des outils IA dans vos missions quotidiennes et améliorer votre action d'élu. Éligible DIFE.",
    accroche:
      "Une formation essentielle pour comprendre les fondamentaux de l'IA générative, utiliser des outils IA dans vos missions quotidiennes et améliorer votre action d'élu.",
    pourquoi:
      "Une formation essentielle pour comprendre les fondamentaux de l'IA générative, utiliser des outils IA dans vos missions quotidiennes et améliorer votre action d'élu.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Comprendre le fonctionnement de l'intelligence artificielle générative et ses usages concrets",
      "Identifier les outils d'IA pour booster vos tâches du quotidien",
      "Utiliser l'IA pour améliorer votre production de contenus (visuels, textes, vidéos)",
      "Utiliser l'IA pour simplifier et clarifier la complexité",
      "Comprendre les avantages et les limites de l'IA",
    ],
    programme: [
      { title: "Définitions et mécanismes (IA, IA générative, machine learning)" },
      { title: "Panorama des usages publics et privés (chat conversationnel, génération d'images, assistant de recherche/synthèse)" },
      { title: "Savoir rédiger un prompt avec méthode" },
      { title: "Comment l'IA peut résumer un dossier, traduire en langage clair, ou proposer un argumentaire adapté" },
      { title: "Comprendre les risques et les limites (RGPD, biais, fiabilité)" },
      { title: "Risques éthiques (confidentialité, transparence)" },
      { title: "Check-list de vigilance pour élus (confidentialité, biais, vérifiabilité, traçabilité, RGPD)" },
      { title: "Identifier les tâches du mandat que vous pourriez améliorer avec l'IA" },
    ],
    formateur:
      "Expert en transformation numérique des collectivités territoriales, chargé de cours en gouvernance algorithmique.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "gestion-conflits",
    image: "/img/formations/gestion-conflits.png",
    title: "Gestion des conflits",
    shortTitle: "Gestion des conflits",
    h1: "Formation gestion des conflits pour élus — Faire face aux tensions dans votre commune",
    metaTitle:
      "Formation gestion des conflits pour élus — Faire face aux tensions dans votre commune | Élu Formation",
    metaDescription:
      "Riverains en colère, tensions au sein du conseil, relations difficiles avec des agents ou des associations... Formation éligible DIFE.",
    accroche:
      "Riverains en colère, tensions au sein du conseil, relations difficiles avec des agents ou des associations... La gestion des conflits est l'une des compétences les plus demandées — et les moins formées — des élus locaux.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Comprendre les mécanismes du conflit et ses étapes",
      "Adopter une posture de médiateur sans perdre son autorité",
      "Désamorcer une tension avant qu'elle ne devienne une crise",
      "Gérer les situations de tensions avec les administrés en réunions publiques",
    ],
    programme: [
      { title: "Anatomie du conflit — pourquoi ça explose et comment l'anticiper" },
      { title: "Les outils de la communication non-violente pour l'élu" },
      { title: "Mises en situation : réunion publique houleuse, conflit au conseil" },
      { title: "Construire sa propre boîte à outils anti-conflit" },
    ],
    formateur:
      "Médiateur professionnel certifié et formateur en gestion de crise, ancien secrétaire général de mairie.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "fondamentaux-mandat",
    image: "/img/formations/fondamentaux-mandat.png",
    title: "Fondamentaux du mandat",
    shortTitle: "Fondamentaux du mandat",
    h1: "Formation fondamentaux du mandat pour nouveaux élus — Comprendre son rôle et ses responsabilités",
    metaTitle:
      "Formation fondamentaux du mandat pour nouveaux élus | Élu Formation",
    metaDescription:
      "Vous venez d'être élu(e) en mars 2026. Droits, devoirs, fonctionnement du conseil municipal... La formation de démarrage. Éligible DIFE.",
    accroche:
      "Vous venez d'être élu(e) en mars 2026. Bienvenue dans l'une des aventures civiques les plus exigeantes et les plus enrichissantes qui soit. Cette formation est votre point de départ.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    tag: "RECOMMANDÉ pour les élus 2026",
    objectifs: [
      "Connaître les droits et devoirs de l'élu local",
      "Comprendre l'organisation de la commune et les acteurs clés",
      "Maîtriser les bases du fonctionnement du conseil municipal",
      "Identifier les responsabilités juridiques et les risques du mandat",
    ],
    programme: [
      { title: "Qui fait quoi ? Le maire, les adjoints, le conseil, les services" },
      { title: "Vos droits en tant qu'élu : rémunération, formation, absences" },
      { title: "Vos responsabilités : juridiques, civiles, pénales" },
      { title: "Les 10 erreurs du nouvel élu — et comment les éviter" },
    ],
    formateur:
      "Juriste spécialiste du droit des collectivités territoriales, ancien directeur général des services.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
  {
    slug: "communication-elu",
    image: "/img/formations/communication-elu.png",
    title: "Communication de l'élu",
    shortTitle: "Communication",
    h1: "Formation communication de l'élu local",
    metaTitle: "Formation communication de l'élu local | Élu Formation",
    metaDescription:
      "Apprenez à structurer et diffuser votre communication d'élu local. Formation éligible DIFE.",
    accroche:
      "Informer, expliquer, convaincre, rassurer : la communication est un levier essentiel du mandat d'élu. Cette formation vous donne les méthodes pour communiquer efficacement.",
    format: "Distanciel ou présentiel",
    duree: "4h + 1h en tutorat",
    financement: "Éligible DIFE — Mon Compte Élu",
    tarif: "Prise en charge à 100 % via le DIFE ou la collectivité",
    objectifs: [
      "Définir sa stratégie de communication d'élu",
      "Rédiger des messages clairs et adaptés à chaque canal",
      "Gérer les relations avec la presse locale",
      "Communiquer en situation de crise",
    ],
    programme: [
      { title: "Les fondamentaux de la communication publique locale" },
      { title: "Rédiger pour informer : bulletins, courriers, communiqués" },
      { title: "Relations presse et interviews : les bons réflexes" },
      { title: "Communication de crise : méthode et mise en situation" },
    ],
    formateur:
      "Consultant en communication publique, ancien directeur de la communication d'une collectivité territoriale.",
    infos: {
      public: "Élus locaux",
      prerequis: "Aucun",
      modalites: "Inscription via Élu Formation — Accès sous 7 jours après validation",
      methodes: ["Cas concrets", "Mises en situation", "Échanges entre pairs", "Supports fournis"],
      evaluation: ["Quiz", "Mise en situation", "Attestation de formation"],
      accessibilite: "Formation accessible aux personnes en situation de handicap (adaptations possibles)",
    },
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}
