import { BrandStatement } from "@/components/sections/BrandStatement";
import { CoreCategories } from "@/components/sections/CoreCategories";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <CoreCategories />
      <Gallery
        heading="From the studio."
        limit={6}
        ctaHref="/gallery"
        ctaLabel="Open gallery"
      />
      <Reviews />
      <FinalCta />
    </>
  );
}
