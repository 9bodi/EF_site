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
      { label: "Communication de l'élu", href: "/formations/communication-elu" },
      { label: "Réseaux sociaux", href: "/formations/reseaux-sociaux" },
      { label: "Fondamentaux du mandat", href: "/formations/fondamentaux-mandat" },
      { label: "E-learning : Bien gérer son image et sa communication", href: "/e-learning", highlight: "orange" as const },
      { label: "Voir toutes les formations", href: "/formations", featured: true },
    ],
  },
  {
    label: "Pour ma commune",
    href: "/formations-pour-ma-commune",
  },
  {
    label: "Financement",
    href: "/financement-formation-elu",
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
];

export const ctaNav = {
  label: "Simuler mes droits",
  href: "/financement-formation-elu/simulateur",
} as const;
