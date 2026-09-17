import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { SurfaceProtection } from "@/components/sections/SurfaceProtection";
import { getWhatsAppHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Protection",
  description:
    "Paint Protection Film, ceramic, graphene, borophene and nanodiamond coatings at Z1 Concepts, Manjeri.",
};

export default function ProtectionPage() {
  return (
    <>
      <PageHero
        kicker="Protect"
        title="Paint protection, done with care."
        copy="PPF and surface coatings — ceramic, graphene, borophene and nanodiamond — offered at the Manjeri studio."
        image="/images/z1/ig-july08.jpg"
        imageAlt="Finished black Ford at a Z1 Concepts detailing bay"
      />
      <SurfaceProtection />
      <FinalCta
        heading="Ask about PPF and coatings."
        copy="Film and surface protection, chosen for the vehicle rather than a single formula."
        primaryHref={getWhatsAppHref(
          "Hello Z1 Concepts — I would like to enquire about PPF or coatings.",
        )}
        primaryLabel="WhatsApp protection"
      />
    </>
  );
}
