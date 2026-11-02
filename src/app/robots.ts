import { MetadataRoute } from "next";

// Robots des moteurs IA autorisés explicitement (recherche et réponses générées)
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: aiBots,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://eluformation.fr/sitemap.xml",
  };
}
