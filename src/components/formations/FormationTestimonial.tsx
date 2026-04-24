import Container from "@/components/layout/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function FormationTestimonial({ slug }: { slug: string }) {
  const testimonial =
    testimonials.find((t) => t.formation === slug) ??
    testimonials[0];

  return (
    <section className="py-12 bg-gray-warm">
      <Container className="max-w-2xl">
        <TestimonialCard {...testimonial} />
      </Container>
    </section>
  );
}

