import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/motion/Reveal";
import { getWhatsAppHref, site } from "@/lib/site";
import { BackgroundMedia } from "@/components/ui/BackgroundMedia";

type FinalCtaProps = {
  heading: string;
  copy: string;
  image?: string;
  imageAlt?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function FinalCta({
  heading,
  copy,
  image,
  imageAlt = "Z1 Concepts Auto Detailing studio in Manjeri",
  primaryHref = getWhatsAppHref(),
  primaryLabel = "WhatsApp Z1",
  secondaryHref = site.mapsSearchUrl,
  secondaryLabel = "Get Directions",
}: FinalCtaProps) {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/10 bg-z1-charcoal lg:min-h-[38svh]">
      {image ? (
        <>
          <BackgroundMedia
            image={image}
            imageAlt={imageAlt}
            className="hidden object-cover object-[center_40%] lg:block"
          />
          <div className="absolute inset-0 hidden bg-black/78 lg:block" />
        </>
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.14),transparent_55%)]" />

      <Container className="relative flex flex-col items-center py-8 text-center lg:min-h-[38svh] lg:justify-center lg:py-14">
        <Reveal className="flex w-full max-w-2xl flex-col items-center">
          <h2 className="z-display lg:text-[clamp(2rem,4.6vw,2.9rem)] lg:leading-[0.95]">
            {heading}
          </h2>
          <p className="z-copy mt-3 max-w-[16.5rem] text-white/70 sm:max-w-md lg:text-base">
            {copy.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-5 flex w-full max-w-xs flex-col items-stretch justify-center gap-2 sm:max-w-none sm:flex-row sm:items-center lg:mt-7">
            <Button href={primaryHref} external={primaryHref.startsWith("http")} size="md" className="w-full sm:w-auto">
              {primaryHref.includes("wa.me") ? <WhatsAppIcon /> : null}
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              external={secondaryHref.startsWith("http")}
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
