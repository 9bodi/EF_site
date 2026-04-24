import Hero from "@/components/sections/Hero";
import ReassuranceBanner from "@/components/sections/ReassuranceBanner";
import ElectionBanner from "@/components/sections/ElectionBanner";
import OffersGrid from "@/components/sections/OffersGrid";
import FeaturedFormations from "@/components/sections/FeaturedFormations";
import DifeBlock from "@/components/sections/DifeBlock";
import Testimonials from "@/components/sections/Testimonials";
import MapSection from "@/components/sections/MapSection";
import OrganismePreview from "@/components/sections/OrganismePreview";
import Newsletter from "@/components/sections/Newsletter";
import Partners from "@/components/sections/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReassuranceBanner />
      <ElectionBanner />
      <OffersGrid />
      <FeaturedFormations />
      <DifeBlock />
      <Testimonials />
      <MapSection />
      <OrganismePreview />
      <Partners />
      <Newsletter />
    </>
  );
}
