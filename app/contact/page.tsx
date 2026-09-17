import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { LocalSeo } from "@/components/sections/LocalSeo";
import { PageHero } from "@/components/sections/PageHero";
import { Reviews } from "@/components/sections/Reviews";
import { getTelHref, getWhatsAppHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Z1 Concepts on Manjeri–Pandikkad Road, near Madheena Hotel, Kizhakkethala. Call +91 86064 64006 or WhatsApp +91 85905 98812.",
};

export default function ContactPage() {
  const tel = getTelHref() ?? getWhatsAppHref();

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Visit the studio."
        copy="Manjeri–Pandikkad Road, near Madheena Hotel, Kizhakkethala. WhatsApp, call or open Google Maps for directions."
        image="/images/z1/maps-shop-1.jpg"
        imageAlt="Z1 Concepts Auto Detailing studio frontage in Manjeri"
      />
      <LocalSeo />
      <Reviews />
      <FinalCta
        heading="Message Z1."
        copy="WhatsApp the studio, call the listed number, or open Google Maps for the Manjeri bay."
        image="/images/z1/maps-shop-1.jpg"
        imageAlt="Z1 Concepts Auto Detailing studio frontage in Manjeri"
        primaryHref={getWhatsAppHref()}
        primaryLabel="WhatsApp Z1"
        secondaryHref={tel}
        secondaryLabel="Call the studio"
      />
    </>
  );
}
