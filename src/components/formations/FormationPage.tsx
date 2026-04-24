import { Formation } from "@/data/formations";
import FormationHeader from "./FormationHeader";
import FormationProgram from "./FormationProgram";
import FormationCTA from "./FormationCTA";
import FormationTestimonial from "./FormationTestimonial";
import FormationFAQ from "./FormationFAQ";
import Container from "@/components/layout/Container";

export default function FormationPage({ formation }: { formation: Formation }) {
  return (
    <>
      <FormationHeader formation={formation} />
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <FormationProgram formation={formation} />
        </Container>
      </section>
      <FormationTestimonial slug={formation.slug} />
      <FormationCTA formateur={formation.formateur} />
      <FormationFAQ />
    </>
  );
}
