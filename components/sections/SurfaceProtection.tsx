import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { coatings, getWhatsAppHref } from "@/lib/site";

export function SurfaceProtection() {
  return (
    <section className="overflow-hidden border-t border-white/10 bg-z1-black">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="/images/z1/ig-june26.jpg"
            alt="Finished vehicle after coating and studio work at Z1 Concepts"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-z1-black/80 max-lg:bg-gradient-to-t max-lg:from-z1-black" />
        </div>

        <Container className="py-20 lg:max-w-none lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              Surface protection
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] font-semibold uppercase tracking-tight">
              Coatings, chosen with care.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
              Z1 Concepts offers ceramic and advanced coating options. The right
              system depends on the vehicle and how it is used — the studio can
              advise in person rather than overselling a single formula.
            </p>
          </Reveal>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {coatings.map((coating, index) => (
              <Reveal key={coating.name} delay={index * 0.05}>
                <div className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr] sm:items-baseline">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-tight">
                      {coating.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {coating.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Button
              href={getWhatsAppHref(
                "Hello Z1 Concepts — I would like to enquire about ceramic or advanced coatings.",
              )}
              variant="outline"
            >
              Get a Quote
            </Button>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
