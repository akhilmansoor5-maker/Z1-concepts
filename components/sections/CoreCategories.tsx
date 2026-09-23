"use client";

import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { categories } from "@/lib/site";

export function CoreCategories() {
  return (
    <>
      <section className="overflow-x-clip border-t border-white/10 bg-z1-black py-8 lg:hidden">
        <Container>
          <p className="z-kicker text-z1-red">The range</p>
          <h2 className="z-display mt-2">Swipe the work.</h2>
        </Container>
        <div className="mt-5 flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[max(1rem,env(safe-area-inset-left))] pb-2 pr-[max(1rem,env(safe-area-inset-right))] [scrollbar-width:none] touch-pan-x [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="relative h-[min(22rem,52svh)] w-[min(19rem,calc(100%-2.75rem))] max-w-[19rem] shrink-0 snap-center overflow-hidden border border-white/15"
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="z-kicker text-z1-red">{category.index}</p>
                <h3 className="z-display mt-2 text-white">{category.title}</h3>
                <p className="z-copy mt-2 text-white/70">
                  {category.items.slice(0, 3).join(" · ")}
                </p>
                <span className="z-chip mt-4 w-fit text-white backdrop-blur-sm">View</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="hidden border-t border-white/10 lg:block">
        {categories.map((category, index) => {
          const reverse = index % 2 === 1;
          return (
            <section key={category.id} className="border-b border-white/10 bg-z1-black">
              <div
                className={cn(
                  "grid lg:grid-cols-2",
                  reverse && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative min-h-[56svh] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <Container className="flex flex-col justify-center py-16 lg:max-w-none">
                  <Reveal>
                    <p className="z-kicker text-z1-red">{category.index}</p>
                    <h2 className="z-display mt-3 text-white lg:text-[clamp(2.2rem,6vw,4rem)]">
                      {category.title}
                    </h2>
                    <ul className="mt-8 space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="text-base uppercase tracking-[0.18em] text-white/65"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href={category.href} variant="outline">
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
    </>
  );
}
