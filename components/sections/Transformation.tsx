import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const shots = [
  {
    src: "/images/z1/maps-shop-2.jpg",
    alt: "Inside the Z1 Concepts wash and detailing bays",
    label: "Inside",
  },
  {
    src: "/images/z1/maps-shop-5.jpg",
    alt: "Z1 Concepts studio on Manjeri-Pandikkad Road",
    label: "Outside",
  },
] as const;

export function Transformation() {
  return (
    <section id="difference" className="border-t border-white/10 bg-z1-charcoal py-8 sm:py-16">
      <Container>
        <Reveal>
          <p className="z-kicker text-z1-red">The studio</p>
          <h2 className="z-display mt-3 lg:text-[clamp(1.9rem,4vw,2.75rem)] lg:leading-[0.95]">
            Built for the work.
          </h2>
          <p className="z-copy mt-4 max-w-lg text-white/60">
            The Manjeri studio: wash bays, signage and the street front on
            Pandikkad Road, photographed from Google Maps.
          </p>
        </Reveal>
        <div className="mt-6 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] touch-pan-x md:hidden [&::-webkit-scrollbar]:hidden">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="relative h-56 w-[min(20rem,calc(100%-1.25rem))] shrink-0 snap-center overflow-hidden border border-white/15"
            >
              <Image src={shot.src} alt={shot.alt} fill sizes="82vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 hidden gap-3 md:grid md:grid-cols-2">
          {shots.map((shot, index) => (
            <Reveal key={shot.src} delay={index * 0.08}>
              <div className="relative aspect-[4/3] overflow-hidden sm:min-h-[22rem] sm:aspect-auto">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                  {shot.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
