import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ quote, name, role, commune }: Testimonial) {
  return (
    <blockquote className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <p className="text-gray-text italic leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <footer>
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-gray-400">{role} - {commune}</p>
      </footer>
    </blockquote>
  );
}

