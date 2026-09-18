"use client";

import { useRef } from "react";
import Image from "next/image";
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

type ServiceCarouselProps = {
  kicker: string;
  heading: string;
  copy: string;
  items: readonly ServiceItem[];
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6 9 12l6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ServiceCarousel({ kicker, heading, copy, items }: ServiceCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const root = scrollerRef.current;
    if (!root) return;
    const card = root.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.getBoundingClientRect().width + 12 : root.clientWidth * 0.7;
    root.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="overflow-x-clip border-t border-white/10 bg-z1-black py-8 sm:py-16">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="z-kicker text-z1-red">{kicker}</p>
            <h2 className="z-display mt-2 max-w-xl lg:text-[clamp(1.9rem,6vw,2.75rem)] lg:leading-[0.95]">
              {heading}
            </h2>
            <p className="z-copy mt-3 max-w-lg text-white/60">{copy}</p>
          </Reveal>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous services"
              className="inline-flex min-h-12 min-w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-white hover:bg-white/5 active:bg-white/10"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next services"
              className="inline-flex min-h-12 min-w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-white hover:bg-white/5 active:bg-white/10"
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-7 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] touch-pan-x [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, itemIndex) => (
            <article
              key={item.name}
              data-card
              className="w-[min(18rem,calc(100%-1.25rem))] max-w-[18rem] shrink-0 snap-start overflow-hidden border border-white/15 bg-z1-charcoal sm:w-[calc((100%-0.75rem)/2)] sm:max-w-none lg:w-[calc((100%-1.5rem)/3)]"
            >
              <div className="relative h-40 overflow-hidden sm:aspect-[16/10] sm:h-auto">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="z-kicker text-white/35">0{itemIndex + 1}</p>
                <h3 className="mt-2 font-display text-[1.35rem] leading-[0.95] font-semibold uppercase tracking-tight sm:text-xl">
                  {item.name}
                </h3>
                <p className="z-copy mt-2 text-white/55">{item.copy}</p>
                <div className="mt-4 sm:mt-5">
                  <Button
                    href={getWhatsAppHref(
                      `Hello Z1 Concepts. I would like to enquire about ${item.name}.`,
                    )}
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
