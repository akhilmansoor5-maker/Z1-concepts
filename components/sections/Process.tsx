import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="border-t border-white/10 bg-z1-charcoal py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            Studio flow
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.9] font-semibold uppercase tracking-tight">
            How a visit typically unfolds.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50">
            A general studio sequence — not a claim about Z1’s exact internal
            process until that is confirmed.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-0 border-t border-white/10 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.index}
              delay={index * 0.06}
              className="border-b border-white/10 py-8 md:border-r md:border-b-0 md:px-5 md:py-10 last:md:border-r-0"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-z1-red">
                {step.index}
              </p>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {step.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
