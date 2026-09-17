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
    <section className="relative isolate min-h-[38svh] overflow-hidden border-t border-white/10 bg-z1-charcoal">
      {image ? (
        <>
          <BackgroundMedia image={image} imageAlt={imageAlt} className="object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-black/78" />
        </>
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.14),transparent_55%)]" />

      <Container className="relative flex min-h-[38svh] flex-col items-center justify-center py-12 pb-[max(3rem,env(safe-area-inset-bottom))] text-center sm:py-14">
        <Reveal className="flex w-full max-w-2xl flex-col items-center">
          <h2 className="font-display text-[clamp(1.7rem,4.6vw,2.9rem)] leading-[0.95] font-semibold uppercase tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            {copy}
          </p>
          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
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
