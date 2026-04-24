import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface ArticleLayoutProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  photoNote: string;
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
  photoNote,
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

      {/* Image bannière */}
      <section className="bg-white border-b border-gray-200">
        <Container className="max-w-3xl py-8">
          <div className="aspect-[16/7] rounded-2xl bg-gray-warm border border-gray-200 flex items-center justify-center">
            <p className="text-gray-400 text-sm text-center px-8">
              [ {photoNote} ]
            </p>
          </div>
        </Container>
      </section>

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

