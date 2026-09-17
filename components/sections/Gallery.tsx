import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { galleryItems } from "@/lib/site";

type GalleryProps = {
  kicker?: string;
  heading?: string;
  limit?: number;
  showCredit?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function Gallery({
  kicker = "Gallery",
  heading = "The work.",
  limit,
  showCredit = true,
  ctaHref,
  ctaLabel = "View gallery",
}: GalleryProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section className="border-t border-white/10 bg-z1-black py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            {kicker}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.88] font-semibold uppercase tracking-tight">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[12rem] gap-3 sm:auto-rows-[16rem] sm:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={`${item.src}-${item.label}`}
              delay={index * 0.04}
              className={cn("group relative overflow-hidden", item.span)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
        {ctaHref ? (
          <div className="mt-10">
            <Button href={ctaHref} variant="outline">
              {ctaLabel}
            </Button>
          </div>
        ) : null}
        {showCredit ? (
          <p className="mt-6 text-xs tracking-wide text-white/35">
            Photographs from Z1 Concepts on Instagram and Google Maps.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
