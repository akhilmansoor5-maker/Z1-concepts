import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { Transformation } from "@/components/sections/Transformation";

export const metadata: Metadata = {
  title: "About the Manjeri Studio",
  description:
    "Best car wash in Manjeri. Z1 Concepts is a Google rated 4.6 detailing, protection and styling studio on Manjeri-Pandikkad Road, Kizhakkethala.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={"A studio for cars\nthat deserve more."}
        copy="Z1 Concepts is an automotive detailing, protection and styling studio in Manjeri, with wash bays, coatings, wrapping and related finish work under one roof."
        image="/images/z1/maps-shop-5.jpg"
        imageAlt="Z1 Concepts studio on Manjeri-Pandikkad Road"
      />
      <AboutIntro />
      <Transformation />
      <Process />
      <FinalCta
        heading="Meet the studio."
        copy="On Manjeri-Pandikkad Road, Kizhakkethala, near Madheena Hotel. Open Maps or message before you come."
      />
    </>
  );
}
