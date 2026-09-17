import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function AboutIntro() {
  return (
    <section className="border-t border-white/10 bg-z1-black py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              The studio
            </p>
            <h2 className="mt-3 max-w-md font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] font-semibold uppercase tracking-tight">
              Detail, protect and transform — in Manjeri.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Z1 Concepts is an automotive studio on Manjeri–Pandikkad Road,
              Kizhakkethala, near Madheena Hotel. The public range covers
              washing and detailing, paint protection film and coatings, plus
              wrapping, facelifting, body kits, sunfilm and painting.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Work is matched to the vehicle in the bay. WhatsApp or visit to
              ask what suits the car — rather than a generic package list.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
