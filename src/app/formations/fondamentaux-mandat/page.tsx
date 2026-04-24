import { Metadata } from "next";
import { getFormationBySlug } from "@/data/formations";
import FormationPage from "@/components/formations/FormationPage";
import { notFound } from "next/navigation";

const formation = getFormationBySlug("fondamentaux-mandat");

export const metadata: Metadata = {
  title: formation?.metaTitle,
  description: formation?.metaDescription,
};

export default function Page() {
  if (!formation) return notFound();
  return <FormationPage formation={formation} />;
}
