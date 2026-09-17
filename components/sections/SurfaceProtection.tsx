import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { coatings, getWhatsAppHref } from "@/lib/site";

export function SurfaceProtection() {
  return (
    <section className="overflow-hidden border-t border-white/10 bg-z1-black">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[38svh] lg:min-h-[56svh]">
          <Image
            src="/images/z1/ig-july08.jpg"
            alt="Finished vehicle after protection work at Z1 Concepts"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-z1-black/80 max-lg:bg-gradient-to-t max-lg:from-z1-black" />
        </div>

        <Container className="py-12 lg:max-w-none lg:py-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              PPF and coatings
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] font-semibold uppercase tracking-tight">
              Film and coatings.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65">
              Paint Protection Film is a clear layer over paint to help guard
              against everyday marks. Coatings sit on top of that range —
              ceramic, graphene, borophene and nanodiamond. The studio can advise
              which combination suits the vehicle.
            </p>
          </Reveal>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {coatings.map((coating, index) => (
              <Reveal key={coating.name} delay={index * 0.04}>
                <div className="grid gap-2 py-4 sm:grid-cols-[6.5rem_1fr] sm:items-baseline">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-tight">
                      {coating.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {coating.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Button
              href={getWhatsAppHref(
                "Hello Z1 Concepts — I would like to enquire about PPF or coatings.",
              )}
              variant="outline"
              size="sm"
            >
              Ask about protection
            </Button>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
