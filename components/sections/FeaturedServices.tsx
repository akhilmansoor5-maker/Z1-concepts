import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { featuredServices, getWhatsAppHref } from "@/lib/site";

type FeaturedServicesProps = {
  hrefs?: readonly string[];
  heading?: string;
};

export function FeaturedServices({
  hrefs,
  heading = "Featured services",
}: FeaturedServicesProps) {
  const items = hrefs
    ? featuredServices.filter((service) => hrefs.includes(service.href))
    : featuredServices;

  return (
    <section className="border-t border-white/10 bg-z1-charcoal py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            Selected work
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.9] font-semibold uppercase tracking-tight">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {items.map((service, index) => (
            <article
              key={service.name}
              className="grid items-center gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr_auto] lg:gap-12 lg:py-14"
            >
              <Reveal className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.06}>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase tracking-tight sm:text-4xl">
                  {service.name}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                  {service.description}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="lg:justify-self-end">
                <Button
                  href={getWhatsAppHref(
                    `Hello Z1 Concepts. I would like to enquire about ${service.name}.`,
                  )}
                  variant="outline"
                  size="sm"
                >
                  Get a Quote
                </Button>
              </Reveal>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
