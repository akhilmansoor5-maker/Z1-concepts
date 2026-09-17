import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { Transformation } from "@/components/sections/Transformation";
import { getWhatsAppHref, stylingServices } from "@/lib/site";

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
      <ServiceCarousel
        kicker="The range"
        heading="Styling services."
        copy="Swipe through wrapping, kits, sunfilm and paint. The studio can advise on what fits the vehicle."
        items={stylingServices}
      />
      <Transformation />
      <FinalCta
        heading="Change the look."
        copy="Wrapping, facelifting, body kits, sunfilm and painting — talk to the studio about the car."
        image="/images/z1/ig-july09.jpg"
        imageAlt="Body kit laid out in front of a Swift at Z1 Concepts"
        primaryHref={getWhatsAppHref(
          "Hello Z1 Concepts — I would like to enquire about wrapping or styling.",
        )}
        primaryLabel="WhatsApp styling"
      />
    </>
  );
}
