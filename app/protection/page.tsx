import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { SurfaceProtection } from "@/components/sections/SurfaceProtection";
import { getWhatsAppHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "PPF & Ceramic Coating in Manjeri",
  description:
    "PPF, ceramic, graphene, borophene and nanodiamond at Z1 Concepts, the Google rated 4.6 car wash and protection studio in Manjeri.",
};

export default function ProtectionPage() {
  return (
    <>
      <PageHero
        kicker="Protect"
        title={"Paint protection.\nDone with care."}
        copy="PPF and surface coatings, ceramic, graphene, borophene and nanodiamond, offered at the Manjeri studio."
        image="/images/z1/ig-june26.jpg"
        imageAlt="Finished teal Suzuki Swift after studio work at Z1 Concepts"
      />
      <SurfaceProtection />
      <FinalCta
        heading="Ask about PPF and coatings."
        copy="Film and surface protection, chosen for the vehicle rather than a single formula."
        primaryHref={getWhatsAppHref(
          "Hello Z1 Concepts. I would like to enquire about PPF or coatings.",
        )}
        primaryLabel="WhatsApp protection"
      />
    </>
  );
}
