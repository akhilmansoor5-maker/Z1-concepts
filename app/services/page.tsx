import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { detailingServices, getWhatsAppHref } from "@/lib/site";

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
        image="/images/z1/ig-tagged.jpg"
        imageAlt="Red BMW being detailed at the Z1 Concepts studio"
        videoSrc="/videos/detailing.mp4"
      />
      <ServiceCarousel
        kicker="The range"
        heading="Detailing services."
        copy="Swipe through the detailing list. Ask the studio which combination suits your vehicle."
        items={detailingServices}
      />
      <FinalCta
        heading="Book a detailing visit."
        copy="Wash, polish, interior care and related finishing — message the studio with the vehicle."
        image="/images/z1/maps-shop-2.jpg"
        imageAlt="BMW models being washed inside the Z1 Concepts detailing bay"
        primaryHref={getWhatsAppHref(
          "Hello Z1 Concepts — I would like to enquire about detailing for my car.",
        )}
        primaryLabel="WhatsApp detailing"
      />
    </>
  );
}
