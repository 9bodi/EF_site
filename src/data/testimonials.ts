export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  commune: string;
  formation?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "La formation sur le budget municipal m'a donné les clés pour comprendre vraiment ce que vote mon conseil. Je me sens enfin légitime en séance.",
    name: "Marie-Christine T.",
    role: "Adjointe aux finances",
    commune: "Commune de 4 200 hab. (Eure)",
    formation: "budget-municipal",
  },
  {
    quote:
      "En 4 heures de visioconférence, j'ai appris plus sur la prise de parole qu'en 6 ans de mandat. Et tout a été financé par mon DIFE.",
    name: "Jean-Paul M.",
    role: "Maire",
    commune: "Commune de 1 800 hab. (Sarthe)",
    formation: "prise-de-parole",
  },
  {
    quote:
      "La formation sur les réseaux sociaux nous a permis, à moi et à mon équipe, de structurer notre communication locale. Très concret, très adapté.",
    name: "Sophie L.",
    role: "1ère adjointe",
    commune: "Commune de 12 000 hab. (Nord)",
    formation: "reseaux-sociaux",
  },
  {
    quote:
      "Nous avons organisé un séminaire de lancement pour les 15 élus de notre nouvelle équipe en mai 2026. Deux jours de formation intense qui ont soudé notre équipe et clarifié les rôles de chacun. Indispensable pour démarrer un mandat dans de bonnes conditions.",
    name: "Sylvain B.",
    role: "Maire",
    commune: "Commune de 7 800 hab. (Loire-Atlantique)",
    formation: "intra",
  },
  {
    quote:
      "La formation intra sur le budget municipal a transformé notre façon de travailler en conseil. Les élus posent maintenant les bonnes questions aux services. Le maire est ravi.",
    name: "Nathalie F.",
    role: "DGS",
    commune: "Commune de 4 200 hab. (Var)",
    formation: "intra",
  },
];
