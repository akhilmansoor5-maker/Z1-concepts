import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function AboutIntro() {
  return (
    <section className="border-t border-white/10 bg-z1-black py-8 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="z-kicker text-z1-red">The studio</p>
            <h2 className="z-display mt-3 max-w-md lg:text-[clamp(1.9rem,4vw,2.75rem)] lg:leading-[0.95]">
              Detail, protect and transform in Manjeri.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="z-copy max-w-xl text-white/65">
              Google rated 4.6. Z1 Concepts is an automotive studio on
              Manjeri-Pandikkad Road, Kizhakkethala, near Madheena Hotel. The
              public range covers car wash and detailing, paint protection film
              and coatings, plus wrapping, facelifting, body kits, sunfilm and
              painting.
            </p>
            <p className="z-copy mt-4 max-w-xl text-white/65">
              Work is matched to the vehicle in the bay. WhatsApp or visit to
              ask what suits the car, rather than a generic package list.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
