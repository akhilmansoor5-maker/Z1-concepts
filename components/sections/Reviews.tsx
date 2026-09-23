import Image from "@/components/ui/SiteImage";
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
    <section className="overflow-x-clip border-t border-white/10 bg-z1-black py-8 lg:py-16">
      <Container>
        <p className="z-kicker text-z1-red">
          Google {site.rating.value}★
        </p>
        <h2 className="z-display mt-2 lg:text-[clamp(1.9rem,4vw,2.6rem)] lg:leading-[0.95]">
          Best car wash in Manjeri.
        </h2>
        <p className="z-copy mt-3 max-w-md text-white/60">
          Google rated {site.rating.value} from {site.rating.count} public
          reviews for car wash and detailing at Z1 Concepts.
        </p>
      </Container>

      <div className="mt-5 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[max(1rem,env(safe-area-inset-left))] pb-1 pr-[max(1rem,env(safe-area-inset-right))] [scrollbar-width:none] touch-pan-x lg:hidden [&::-webkit-scrollbar]:hidden">
        {reviews.map((review) => (
          <blockquote
            key={review.quote}
            className="w-[min(20rem,calc(100%-2.75rem))] max-w-[20rem] shrink-0 snap-center border-l-2 border-z1-red bg-z1-charcoal px-4 py-5"
          >
            <p className="z-copy text-white/85">“{review.quote}”</p>
            <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              {review.source}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-6 lg:hidden">
        <Container>
          <p className="z-kicker text-z1-red">Instagram</p>
          <h3 className="z-display mt-2">Follow the work</h3>
        </Container>
        <div className="mt-4 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] [scrollbar-width:none] touch-pan-x [&::-webkit-scrollbar]:hidden">
          {followShots.map((shot) => (
            <div key={shot.src} className="relative h-40 w-[min(10.5rem,42%)] shrink-0 snap-start overflow-hidden">
              <Image src={shot.src} alt={shot.alt} fill sizes="42vw" className="object-cover" />
            </div>
          ))}
        </div>
        <Container className="mt-4">
          <Button href={site.instagram.url} external variant="outline" size="md" className="w-full max-w-xs">
            {site.instagram.handle}
          </Button>
        </Container>
      </div>

      <Container className="hidden lg:block">
        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              Public Google reviews for the best car wash in Manjeri. Rated{" "}
              {site.rating.value} from {site.rating.count} reviews.
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

          <Reveal delay={0.08} className="flex h-full flex-col border border-white/10 bg-z1-charcoal p-6">
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
              <Button href={site.instagram.url} external variant="outline" size="sm">
                {site.instagram.handle}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
