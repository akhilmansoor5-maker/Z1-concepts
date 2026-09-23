import Image from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { getWhatsAppHref } from "@/lib/site";

export function PpfFeature() {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden border-t border-white/10">
      <Image
        src="/images/z1/maps-shop-3.jpg"
        alt="Z1 Concepts studio frontage with vehicles outside"
        fill
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(225,6,0,0.16),transparent_50%)]" />

      <Container className="relative flex min-h-[80vh] flex-col justify-end py-20 lg:justify-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            Paint protection film
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,8vw,6.2rem)] leading-[0.88] font-semibold uppercase tracking-tight">
            Protection that stays invisible.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Paint Protection Film is a clear layer applied over vehicle paint to
            help guard against everyday marks and debris. The finish is designed
            to stay discreet, so the car still looks like the car.
          </p>
          <div className="mt-10">
            <Button
              href={getWhatsAppHref(
                "Hello Z1 Concepts. I would like to enquire about Paint Protection Film (PPF).",
              )}
            >
              Explore PPF
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
