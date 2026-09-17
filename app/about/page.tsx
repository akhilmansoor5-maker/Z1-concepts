import type { Metadata } from "next";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { Transformation } from "@/components/sections/Transformation";

export const metadata: Metadata = {
  title: "About",
  description:
    "Z1 Concepts is an automotive detailing, protection and styling studio on Manjeri–Pandikkad Road, Kizhakkethala.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A studio for cars that deserve more."
        copy="Z1 Concepts is an automotive detailing, protection and styling studio in Manjeri — wash bays, coatings, wrapping and related finish work under one roof."
        image="/images/z1/maps-shop-5.jpg"
        imageAlt="Z1 Concepts studio on Manjeri–Pandikkad Road"
      />
      <BrandStatement />
      <Transformation />
      <Process />
      <FinalCta />
    </>
  );
}
