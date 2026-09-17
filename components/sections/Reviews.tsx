import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { reviews, site } from "@/lib/site";

const followShots = [
  {
    src: "/images/z1/ig-june24.jpg",
    alt: "Mercedes-Benz in foam at the Z1 Concepts wash bay",
  },
  {
    src: "/images/z1/ig-july06.jpg",
    alt: "Orange Suzuki Swift in foam during studio work",
  },
  {
    src: "/images/z1/maps-shop-4.jpg",
    alt: "Cars parked in the Z1 Concepts detailing bays",
  },
] as const;

export function Reviews() {
  return (
    <section className="border-t border-white/10 bg-z1-black py-14 sm:py-16">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              Google
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[0.95] font-semibold uppercase tracking-tight">
              {site.rating.value}★ from {site.rating.count} reviews.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
              Public Google reviews for Z1 Concepts in Manjeri.
            </p>
            <div className="mt-6 grid gap-3">
              {reviews.map((review) => (
                <blockquote key={review.quote} className="border border-white/10 px-4 py-4">
                  <p className="text-sm leading-relaxed text-white/80">“{review.quote}”</p>
                  <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                    {review.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex h-full flex-col border border-white/10 bg-z1-charcoal p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              Instagram
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[0.95] font-semibold uppercase tracking-tight">
              Follow the work
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Detailing, protection and styling as it happens at the studio.
            </p>
            <div className="mt-5 grid flex-1 grid-cols-3 gap-2">
              {followShots.map((shot) => (
                <div key={shot.src} className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Button href={site.instagram.url} external variant="outline" size="sm" className="w-full max-w-full tracking-[0.12em] sm:w-auto">
                {site.instagram.handle}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
