import { MetadataRoute } from "next";
import { formations } from "@/data/formations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eluformation.fr";

  const staticPages = [
    "",
    "/formations",
    "/e-learning",
    "/formations-pour-ma-commune",
    "/financement-formation-elu",
    "/financement-formation-elu/simulateur",
    "/notre-organisme",
    "/contact",
    "/cgv",
    "/mentions-legales",
    "/confidentialite",
    "/blog",
    "/blog/guide-nouvel-elu-2026",
    "/blog/dife-elu-tout-comprendre-financer-formation",
    "/blog/prise-de-parole-en-public-elu-local",
        "/blog/dife-2026-montant-calcul-mode-emploi",
    "/blog/reseaux-sociaux-elus-par-ou-commencer",

  ];

  const formationPages = formations.map((f) => `/formations/${f.slug}`);

  const allPages = [...staticPages, ...formationPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/formations/") || path === "/e-learning" ? 0.8 : path.startsWith("/blog") ? 0.7 : 0.6,
  }));
}
