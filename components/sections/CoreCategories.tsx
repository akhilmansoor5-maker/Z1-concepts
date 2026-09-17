"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { categories } from "@/lib/site";

export function CoreCategories() {
  return (
    <div className="border-t border-white/10">
      {categories.map((category, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={category.id}
            className="border-b border-white/10 bg-z1-black"
          >
            <div
              className={cn(
                "grid lg:grid-cols-2",
                reverse && "lg:[&>*:first-child]:order-2",
              )}
            >
              <div className="relative min-h-[38svh] overflow-hidden lg:min-h-[56svh]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <Container className="flex flex-col justify-center py-10 lg:max-w-none lg:py-16">
                <Reveal>
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
                    {category.index}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(2rem,10vw,4rem)] leading-[0.9] font-semibold uppercase tracking-tight text-white">
                    {category.title}
                  </h2>
                  <ul className="mt-8 space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm uppercase tracking-[0.18em] text-white/65 sm:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={category.href} variant="outline" className="w-full sm:w-auto">
                      {category.cta}
                    </Button>
                  </div>
                </Reveal>
              </Container>
            </div>
          </section>
        );
      })}
    </div>
  );
}
