import { Metadata } from "next";
import { getFormationBySlug } from "@/data/formations";
import FormationPage from "@/components/formations/FormationPage";
import { notFound } from "next/navigation";

const formation = getFormationBySlug("ia-pour-elus");

export const metadata: Metadata = {
  alternates: { canonical: "/formations/ia-pour-elus" },
  title: formation?.metaTitle,
  description: formation?.metaDescription,
};

export default function Page() {
  if (!formation) return notFound();
  return <FormationPage formation={formation} />;
}
