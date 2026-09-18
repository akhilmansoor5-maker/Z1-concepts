import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Studio photographs from Z1 Concepts, the Google rated 4.6 car wash in Manjeri. Instagram and Google Maps shots of the bays and vehicles.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title={"The work,\nas it happens."}
        copy="Photographs from Z1 Concepts on Instagram and Google Maps: the studio, the bays and vehicles in progress."
        image="/images/z1/ig-tagged.jpg"
        imageAlt="Red BMW being hand-washed in front of the Z1 Concepts studio wall"
      />
      <Gallery heading="Studio photographs." />
      <FinalCta
        heading="See it in person."
        copy="These photographs are from the Manjeri studio. Come by, or WhatsApp Z1 before you visit."
      />
    </>
  );
}
