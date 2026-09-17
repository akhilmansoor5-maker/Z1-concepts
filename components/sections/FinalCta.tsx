import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/motion/Reveal";
import { getWhatsAppHref, site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden border-t border-white/10">
      <Image
        src="/images/z1/maps-shop-1.jpg"
        alt="Z1 Concepts Auto Detailing studio in Manjeri"
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.18),transparent_55%)]" />

      <Container className="relative flex min-h-[70vh] flex-col items-start justify-center py-24">
        <Reveal>
          <h2 className="max-w-4xl font-display text-[clamp(2.8rem,9vw,6.8rem)] leading-[0.86] font-semibold uppercase tracking-tight">
            Ready to redefine your drive?
          </h2>
          <p className="mt-6 text-lg text-white/70">Bring your car to Z1 Concepts.</p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={getWhatsAppHref()} className="w-full sm:w-auto" size="lg">
              <WhatsAppIcon />
              WhatsApp Z1
            </Button>
            <Button
              href={site.mapsSearchUrl}
              external
              variant="outline"
              className="w-full sm:w-auto"
              size="lg"
            >
              Get Directions
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
