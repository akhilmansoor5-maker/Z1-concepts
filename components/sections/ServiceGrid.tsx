import Image from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { getWhatsAppHref } from "@/lib/site";

type ServiceItem = {
  name: string;
  copy: string;
  image: string;
  imageAlt: string;
};

type ServiceGridProps = {
  kicker: string;
  heading: string;
  copy: string;
  items: readonly ServiceItem[];
};

export function ServiceGrid({ kicker, heading, copy, items }: ServiceGridProps) {
  return (
    <section className="border-t border-white/10 bg-z1-black py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            {kicker}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.9] font-semibold uppercase tracking-tight">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">{copy}</p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.04}>
              <article className="flex h-full flex-col border border-white/10 bg-z1-charcoal">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {item.copy}
                  </p>
                  <div className="mt-6">
                    <Button
                      href={getWhatsAppHref(
                        `Hello Z1 Concepts. I would like to enquire about ${item.name}.`,
                      )}
                      variant="outline"
                      size="sm"
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
