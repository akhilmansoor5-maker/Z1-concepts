import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { reviews, site } from "@/lib/site";

export function Reviews() {
  return (
    <section className="border-t border-white/10 bg-z1-black py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              Google
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.9] font-semibold uppercase tracking-tight">
              {site.rating.value}★ from {site.rating.count} reviews.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Public Google reviews for Z1 Concepts in Manjeri.
            </p>
            <div className="mt-8 space-y-4">
              {reviews.map((review) => (
                <blockquote
                  key={review.quote}
                  className="border border-white/10 px-6 py-7"
                >
                  <p className="text-lg leading-relaxed text-white/80">
                    “{review.quote}”
                  </p>
                  <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                    {review.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-[0.9] uppercase tracking-tight">
              Follow the work
            </p>
            <p className="mt-4 text-white/55">
              Detailing, protection and styling as it happens at the studio.
            </p>
            <div className="mt-8">
              <Button href={site.instagram.url} external variant="outline">
                {site.instagram.handle}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
