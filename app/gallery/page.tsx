import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Studio photography from Z1 Concepts in Manjeri — Instagram and Google Maps photographs of the shop and vehicles.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="The work, as it happens."
        copy="Photographs from Z1 Concepts on Instagram and Google Maps — the studio, the bays and vehicles in progress."
        image="/images/z1/ig-tagged.jpg"
        imageAlt="Red BMW being hand-washed in front of the Z1 Concepts studio wall"
      />
      <Gallery heading="Studio photographs." />
      <FinalCta />
    </>
  );
}
