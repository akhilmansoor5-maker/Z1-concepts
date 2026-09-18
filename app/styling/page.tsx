import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { Transformation } from "@/components/sections/Transformation";
import { getWhatsAppHref, stylingServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Wrapping & Styling in Manjeri",
  description:
    "Car wrapping, facelifting, body kits, sunfilm and painting at Z1 Concepts in Manjeri, Google rated 4.6 for car wash, detailing and styling.",
};

export default function StylingPage() {
  return (
    <>
      <PageHero
        kicker="Transform"
        title={"Styling that\nchanges the look."}
        copy="Wrapping, facelifting, body kits, sunfilm and painting. Visual work offered at Z1 Concepts."
        image="/images/z1/ig-july09.jpg"
        imageAlt="Body kit laid out in front of a Swift at Z1 Concepts"
      />
      <ServiceCarousel
        kicker="The range"
        heading="Styling services."
        copy="Swipe through wrapping, kits, sunfilm and paint. The studio can advise on what fits the vehicle."
        items={stylingServices}
      />
      <Transformation />
      <FinalCta
        heading="Change the look."
        copy="Wrapping, facelifting, body kits, sunfilm and painting. Talk to the studio about the car."
        image="/images/z1/ig-july09.jpg"
        imageAlt="Body kit laid out in front of a Swift at Z1 Concepts"
        primaryHref={getWhatsAppHref(
          "Hello Z1 Concepts. I would like to enquire about wrapping or styling.",
        )}
        primaryLabel="WhatsApp styling"
      />
    </>
  );
}
