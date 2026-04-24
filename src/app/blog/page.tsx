import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog & Ressources — Actualités pour élus locaux",
  description:
    "Guides, conseils et actualités pour les élus locaux. DIFE, prise de parole, budget municipal, droits et devoirs... Ressources gratuites par Élu Formation.",
};

const articles = [
  {
    slug: "guide-nouvel-elu-2026",
    title:
      "Nouvel élu municipal en 2026 : tout ce que vous devez savoir pour démarrer votre mandat",
    excerpt:
      "Droits à la formation, responsabilités, premiers pas au conseil... Notre guide complet pour les nouveaux élus des municipales de mars 2026.",
    category: "Guide",
    date: "Avril 2026",
    readTime: "8 min",
  },
  {
    slug: "dife-elu-tout-comprendre-financer-formation",
    title:
      "DIFE élu : qu'est-ce que c'est et comment financer votre formation en 2026 ?",
    excerpt:
      "Le DIFE vous donne 800 euros de budget formation. Découvrez comment l'utiliser pas à pas pour financer votre prochaine formation d'élu local.",
    category: "Financement",
    date: "Avril 2026",
    readTime: "6 min",
  },
  {
    slug: "prise-de-parole-en-public-elu-local",
    title:
      "Comment un élu local peut améliorer sa prise de parole en public : conseils et formation",
    excerpt:
      "Discours de vœux, conseil municipal, inauguration... Découvrez les techniques pour gagner en assurance et convaincre.",
    category: "Compétences",
    date: "Avril 2026",
    readTime: "5 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
            Blog & Ressources
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Guides pratiques, décryptages et conseils pour les élus locaux qui
            veulent exercer leur mandat avec efficacité.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gray-warm">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
                  <div className="aspect-[16/9] rounded-lg bg-white border border-gray-200 mb-4 flex items-center justify-center group-hover:bg-gray-light transition-colors">
                    <p className="text-gray-400 text-xs text-center px-4">
                      [ Visuel article ]
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="info">{article.category}</Badge>
                    <span className="text-xs text-gray-text">
                      {article.date} · {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-navy font-heading mb-2 group-hover:text-red transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-text leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <span className="text-sm font-semibold text-red mt-4 inline-block">
                    Lire l&apos;article →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

