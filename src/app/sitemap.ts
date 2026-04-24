import { MetadataRoute } from "next";
import { formations } from "@/data/formations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eluformation.fr";

  const staticPages = [
    "",
    "/formations",
    "/e-learning",
    "/formations-pour-ma-commune",
    "/formations-pour-ma-commune/intra",
    "/formations-pour-ma-commune/teambuilding",
    "/financement-formation-elu",
    "/financement-formation-elu/mon-compte-elu",
    "/financement-formation-elu/collectivite",
    "/services/assurance-elu",
    "/notre-organisme",
    "/notre-organisme/formateurs",
    "/notre-organisme/references",
    "/blog",
    "/blog/guide-nouvel-elu-2026",
    "/blog/dife-elu-tout-comprendre-financer-formation",
    "/blog/prise-de-parole-en-public-elu-local",
    "/contact",
  ];

  const formationPages = formations.map((f) => `/formations/${f.slug}`);

  const allPages = [...staticPages, ...formationPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/formations/") || path === "/e-learning" ? 0.8 : 0.6,
  }));
}
