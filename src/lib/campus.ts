export const CAMPUS = {
  url: "https://campus.eluformation.fr",
  loginUrl: "https://campus.eluformation.fr/login",
  dashboardUrl: "https://campus.eluformation.fr/dashboard",
} as const;

/**
 * Génère le lien vers une formation sur le campus.
 * Pour l'instant c'est un lien générique car l'inscription passe par un SAS humain.
 * À terme, on pourra passer le slug de la formation pour un deep link.
 */
export function getCampusFormationUrl(slug: string): string {
  // Phase 1 : redirige vers le contact (SAS humain)
  // Phase 2 : deep link vers campus.eluformation.fr/formations/{slug}
  return `/contact?formation=${slug}`;
}

/**
 * Prépare la structure pour l'affichage d'un aperçu du campus
 * sur les fiches formation du site vitrine.
 */
export interface CampusPreview {
  moduleCount: number;
  totalDuration: string;
  features: string[];
}

export const campusFeatures: CampusPreview = {
  moduleCount: 4,
  totalDuration: "4h en groupe + 1h en autonomie",
  features: [
    "Modules vidéo interactifs",
    "Quiz de validation par module",
    "Suivi de progression en temps réel",
    "Ressources téléchargeables",
    "Attestation de réussite automatique",
    "Accès replay pendant 6 mois",
  ],
};
