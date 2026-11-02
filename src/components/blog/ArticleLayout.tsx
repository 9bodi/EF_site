import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

interface ArticleLayoutProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  // Consigne interne pour la future photo (non affichée)
  photoNote: string;
  image?: { src: string; alt: string };
  children: React.ReactNode;
  cta: {
    label: string;
    subtitle: string;
    href: string;
  };
}

export default function ArticleLayout({
  category,
  date,
  readTime,
  title,
  image,
  children,
  cta,
}: ArticleLayoutProps) {
  return (
    <>
      {/* Hero article */}
      <section className="bg-navy text-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="info">{category}</Badge>
            <span className="text-sm text-gray-400">
              {date} · {readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
            {title}
          </h1>
        </Container>
      </section>

      {/* Image bannière : affichée seulement quand une vraie photo est fournie */}
      {image && (
        <section className="bg-white border-b border-gray-200">
          <Container className="max-w-3xl py-8">
            <div className="relative aspect-[16/7] rounded-2xl overflow-hidden border border-gray-200">
              <Image src={image.src} alt={image.alt} fill className="object-cover" priority />
            </div>
          </Container>
        </section>
      )}

      {/* Corps article */}
      <section className="py-12 md:py-16 bg-white">
        <Container className="max-w-3xl">
          <div className="prose prose-lg prose-navy max-w-none text-gray-text leading-relaxed">
            {children}
          </div>
        </Container>
      </section>

      {/* CTA fin article */}
      <section className="py-12 md:py-16 bg-gray-light">
        <Container className="max-w-2xl text-center">
          <Button href={cta.href} variant="primary" size="lg" subtitle={cta.subtitle}>
            {cta.label}
          </Button>
        </Container>
      </section>
    </>
  );
}

