export const mainNav = [
  {
    label: "Formations",
    href: "/formations",
    children: [
      { label: "Prise de parole en public", href: "/formations/prise-de-parole" },
      { label: "Budget et finances locales", href: "/formations/budget-municipal" },
      { label: "Urbanisme", href: "/formations/urbanisme" },
      { label: "Décentralisation", href: "/formations/decentralisation" },
      { label: "IA pour les élus", href: "/formations/ia-pour-elus" },
      { label: "Gestion des conflits", href: "/formations/gestion-conflits" },
      { label: "Communication de l'élu", href: "/formations/communication-elu" },
      { label: "Fondamentaux du mandat", href: "/formations/fondamentaux-mandat" },
      { label: "E-learning : Image & Communication", href: "/e-learning" },
      { label: "Voir toutes les formations", href: "/formations", featured: true },
    ],
  },
  {
    label: "Pour ma commune",
    href: "/formations-pour-ma-commune",
    children: [
      { label: "Séminaires équipe municipale", href: "/formations-pour-ma-commune" },
      { label: "Formation intra sur mesure", href: "/formations-pour-ma-commune/intra" },
      { label: "Teambuilding d'équipe", href: "/formations-pour-ma-commune/teambuilding" },
    ],
  },
  {
    label: "Financement",
    href: "/financement-formation-elu",
    children: [
      { label: "Mes droits DIFE", href: "/financement-formation-elu" },
      { label: "Mon Compte Élu", href: "/financement-formation-elu/mon-compte-elu" },
      { label: "Financement par la collectivité", href: "/financement-formation-elu/collectivite" },
    ],
  },
  {
    label: "Autres services",
    href: "/services/assurance-elu",
    children: [
      { label: "Assurance élu", href: "/services/assurance-elu" },
      { label: "Recrutement & RH", href: "/services/assurance-elu#recrutement" },
      { label: "Conseil & Expertise", href: "/services/assurance-elu#conseil" },
    ],
  },
  {
    label: "Notre organisme",
    href: "/notre-organisme",
    children: [
      { label: "Qui sommes-nous", href: "/notre-organisme" },
      { label: "Nos références", href: "/notre-organisme/references" },
      { label: "Blog & Ressources", href: "/blog" },
    ],
  },
] as const;

export const ctaNav = {
  label: "Simuler mes droits",
  href: "/financement-formation-elu/simulateur",
} as const;

