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
    alt: "Z1 Concepts studio on Manjeri–Pandikkad Road",
    label: "Outside",
  },
] as const;

export function Transformation() {
  return (
    <section id="difference" className="border-t border-white/10 bg-z1-charcoal py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            The studio
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.88] font-semibold uppercase tracking-tight">
            Built for the work.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
            The Manjeri studio — wash bays, signage and the street front on
            Pandikkad Road, photographed from Google Maps.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {shots.map((shot, index) => (
            <Reveal key={shot.src} delay={index * 0.08}>
              <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem]">
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
