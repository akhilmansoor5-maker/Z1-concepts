import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="overflow-x-clip border-t border-white/10 bg-z1-charcoal py-8 sm:py-16">
      <Container>
        <Reveal>
          <p className="z-kicker text-z1-red">Studio flow</p>
          <h2 className="z-display mt-3 max-w-2xl lg:text-[clamp(1.9rem,4vw,2.75rem)] lg:leading-[0.95]">
            How a visit typically unfolds.
          </h2>
          <p className="z-copy mt-4 max-w-xl text-white/50">
            A general studio sequence, not a claim about Z1’s exact internal
            process until that is confirmed.
          </p>
        </Reveal>
      </Container>

      <div className="mt-6 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[max(1rem,env(safe-area-inset-left))] pb-1 pr-[max(1rem,env(safe-area-inset-right))] [scrollbar-width:none] touch-pan-x lg:hidden [&::-webkit-scrollbar]:hidden">
        {processSteps.map((step) => (
          <article
            key={step.index}
            className="w-[min(18rem,calc(100%-2.75rem))] max-w-[18rem] shrink-0 snap-center border border-white/15 bg-z1-black px-4 py-5"
          >
            <p className="z-kicker text-z1-red">{step.index}</p>
            <h3 className="mt-3 font-display text-[1.35rem] leading-[0.95] font-semibold uppercase tracking-tight">
              {step.title}
            </h3>
            <p className="z-copy mt-3 text-white/55">{step.copy}</p>
          </article>
        ))}
      </div>

      <Container className="hidden lg:block">
        <div className="mt-8 grid gap-0 border-t border-white/10 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.index}
              delay={index * 0.06}
              className="border-b border-white/10 py-6 lg:border-r lg:border-b-0 lg:px-5 lg:py-10 last:lg:border-r-0"
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
