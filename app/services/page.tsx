import type { Metadata } from "next";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { detailingServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Car washing, detailing, polishing, interior cleaning, AC treatment, glass coating, underbody coating and silencer coating at Z1 Concepts, Manjeri.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Detail"
        title="Automotive detailing in Manjeri."
        copy="Wash, detail, polish and interior care at the Z1 Concepts studio — plus glass, underbody and silencer coating as listed in the public service range."
        image="/images/z1/ig-jeep.jpg"
        imageAlt="Land Rover Defender under foam at the Z1 Concepts wash bay"
      />
      <ServiceGrid
        kicker="The range"
        heading="Detailing services."
        copy="These are the detailing services published by Z1 Concepts. Ask the studio which combination suits your vehicle."
        items={detailingServices}
      />
      <FeaturedServices hrefs={["/services"]} heading="In the bay" />
      <FinalCta />
    </>
  );
}
