import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const homeTestimonials = testimonials.filter(
    (t) => t.formation !== "intra"
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle title="Ce que disent les élus que nous avons formés" />

        <div className="grid md:grid-cols-3 gap-8">
          {homeTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

