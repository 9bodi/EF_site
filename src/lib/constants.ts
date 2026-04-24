export const SITE = {
  name: "Élu Formation",
  url: "https://eluformation.fr",
  campus: "https://campus.eluformation.fr",
  description:
    "Organisme de formation agréé, spécialisé dans la formation des élus locaux.",
  phone: ["09 85 03 01 36", "07 69 69 49 94"],
  email: "contact@eluformation.fr",
  address: "1 Avenue Victor Hugo — 27200 Vernon",
  hours: "Lundi - Vendredi : 9h00 - 18h00",
  social: {
    linkedin: "https://linkedin.com/company/eluformation",
    facebook: "https://facebook.com/eluformation",
  },
  legal: {
    entity: "Place de la République SAS",
    qualiopi: "28 27 02957 27",
    naf: "8559A",
  },
} as const;

export const STATS = [
  { value: "100 %", label: "agréé par le Ministère de l'Intérieur" },
  { value: "95 %", label: "d'élus satisfaits de nos formations" },
  { value: "+ de 500", label: "élus formés depuis 2020" },
  { value: "DIFE", label: "financé jusqu'à 100 % de votre formation" },
] as const;
