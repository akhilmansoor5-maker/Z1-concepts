import type { Metadata } from "next";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { PpfFeature } from "@/components/sections/PpfFeature";
import { SurfaceProtection } from "@/components/sections/SurfaceProtection";

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
      <PpfFeature />
      <SurfaceProtection />
      <FeaturedServices hrefs={["/protection"]} heading="Protection work" />
      <FinalCta />
    </>
  );
}
