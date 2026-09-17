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
  const columns = items.length > 6 ? "lg:grid-cols-5" : "lg:grid-cols-3";

  return (
    <section className="border-t border-white/10 bg-z1-black py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            {kicker}
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] font-semibold uppercase tracking-tight">
            {heading}
          </h2>
        </Reveal>

        <div className={cn("mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3", columns)}>
          {items.map((item, index) => (
            <Reveal
              key={`${item.src}-${item.label}`}
              delay={index * 0.03}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white sm:bottom-3 sm:left-3 sm:text-[10px] sm:tracking-[0.28em]">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
        {ctaHref ? (
          <div className="mt-8">
            <Button href={ctaHref} variant="outline" size="sm">
              {ctaLabel}
            </Button>
          </div>
        ) : null}
        {showCredit ? (
          <p className="mt-5 text-xs tracking-wide text-white/35">
            Photographs from Z1 Concepts on Instagram and Google Maps.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
