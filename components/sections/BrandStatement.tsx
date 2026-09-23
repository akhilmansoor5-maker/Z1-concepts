"use client";

import Image from "@/components/ui/SiteImage";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function BrandStatement() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 bg-z1-black"
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="px-[max(1rem,env(safe-area-inset-left))] pt-3 pr-[max(1rem,env(safe-area-inset-right))] lg:hidden">
          <div className="relative h-[min(18rem,40svh)] overflow-hidden border border-white/15">
            <Image
              src="/images/z1/ig-tagged.jpg"
              alt="Red BMW at Z1 Concepts, the Google rated 4.6 car wash in Manjeri"
              fill
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-z1-black via-transparent to-black/20" />
          </div>
        </div>
        <Container className="flex flex-col justify-center py-8 lg:max-w-none lg:py-20">
          <Reveal>
            <p className="z-kicker mb-5 text-z1-red">Google 4.6★ · Manjeri</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="z-display max-w-xl text-white lg:text-[clamp(2.4rem,6vw,5rem)]">
              More than
              <br />
              a wash.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex max-w-lg gap-5 sm:mt-10">
              <span className="mt-1.5 hidden h-12 w-px shrink-0 bg-z1-red sm:block" />
              <p className="z-copy text-white/68 lg:text-lg">
                Google rated 4.6. Best car wash in Manjeri for detailing,
                protection and styling, with wash, PPF, coatings and wrapping
                under one roof.
              </p>
            </div>
          </Reveal>
        </Container>

        <div className="relative hidden min-h-[56svh] overflow-hidden lg:block">
          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { scale: imageScale }}
          >
            <Image
              src="/images/z1/ig-tagged.jpg"
              alt="Red BMW at Z1 Concepts, the Google rated 4.6 car wash in Manjeri"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_40%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-z1-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-z1-black/80 lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
