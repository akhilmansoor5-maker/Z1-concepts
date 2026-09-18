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
    <section className="overflow-x-clip border-t border-white/10 bg-z1-black py-8 lg:py-16">
      <Container>
        <Reveal>
          <p className="z-kicker text-z1-red">{kicker}</p>
          <h2 className="z-display mt-2 lg:text-[clamp(1.9rem,4vw,2.75rem)] lg:leading-[0.95]">
            {heading}
          </h2>
        </Reveal>
      </Container>

      <div className="mt-5 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[max(1rem,env(safe-area-inset-left))] pb-1 pr-[max(1rem,env(safe-area-inset-right))] [scrollbar-width:none] touch-pan-x md:hidden [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <figure
            key={`${item.src}-${item.label}`}
            className="relative h-[17.5rem] w-[min(16.5rem,calc(100%-2.75rem))] max-w-[16.5rem] shrink-0 snap-center overflow-hidden border border-white/15"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="75vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <Container className="hidden md:block">
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
      </Container>

      <Container>
        {ctaHref ? (
          <div className="mt-6">
            <Button href={ctaHref} variant="outline" size="md" className="w-full max-w-xs md:w-auto">
              {ctaLabel}
            </Button>
          </div>
        ) : null}
        {showCredit ? (
          <p className="mt-4 text-xs tracking-wide text-white/35">
            Photographs from Z1 Concepts on Instagram and Google Maps.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
