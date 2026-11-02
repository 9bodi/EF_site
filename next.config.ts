import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Anciennes URL : redirections permanentes (308) pour transmettre leur référencement
  async redirects() {
    return [
      { source: "/financement-formation-elu/collectivite", destination: "/financement-formation-elu", permanent: true },
      { source: "/financement-formation-elu/mon-compte-elu", destination: "/financement-formation-elu", permanent: true },
      { source: "/formations-pour-ma-commune/intra", destination: "/formations-pour-ma-commune", permanent: true },
      { source: "/formations-pour-ma-commune/teambuilding", destination: "/formations-pour-ma-commune", permanent: true },
      { source: "/notre-organisme/formateurs", destination: "/notre-organisme", permanent: true },
      { source: "/services/conseil", destination: "/services/assurance-elu#conseil", permanent: true },
      { source: "/services/recrutement", destination: "/services/assurance-elu#recrutement", permanent: true },
    ];
  },
};

export default nextConfig;
