import type { Metadata } from "next";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Transformation } from "@/components/sections/Transformation";
import { stylingServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Styling",
  description:
    "Car wrapping, facelifting, body kits, sunfilm and painting at Z1 Concepts, Manjeri.",
};

export default function StylingPage() {
  return (
    <>
      <PageHero
        kicker="Transform"
        title="Styling that changes the look."
        copy="Wrapping, facelifting, body kits, sunfilm and painting — visual work offered at Z1 Concepts."
        image="/images/z1/ig-july09.jpg"
        imageAlt="Body kit laid out in front of a Swift at Z1 Concepts"
      />
      <ServiceGrid
        kicker="The range"
        heading="Styling services."
        copy="These are the styling services published by Z1 Concepts. The studio can advise on what fits the vehicle."
        items={stylingServices}
      />
      <Transformation />
      <FeaturedServices hrefs={["/styling"]} heading="Styling work" />
      <FinalCta />
    </>
  );
}
