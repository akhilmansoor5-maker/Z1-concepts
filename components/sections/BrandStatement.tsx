"use client";

import Image from "next/image";
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
        <Container className="flex flex-col justify-center py-20 sm:py-28 lg:max-w-none lg:py-36">
          <Reveal>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.38em] text-z1-red sm:text-[11px]">
              Automotive studio
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-xl font-display text-[clamp(3.2rem,9vw,7rem)] leading-[0.86] font-semibold tracking-tight text-white uppercase">
              More than
              <br />
              a wash.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex max-w-lg gap-5 sm:mt-10">
              <span className="mt-1.5 hidden h-12 w-px shrink-0 bg-z1-red sm:block" />
              <p className="text-base leading-relaxed text-white/68 sm:text-lg">
                From meticulous detailing to advanced vehicle protection and
                styling, Z1 Concepts brings multiple layers of automotive care
                under one roof.
              </p>
            </div>
          </Reveal>
        </Container>

        <div className="relative min-h-[52vh] overflow-hidden lg:min-h-full">
          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { scale: imageScale }}
          >
            <Image
              src="/images/z1/ig-tagged.jpg"
              alt="Red BMW being hand-washed in front of the Z1 Concepts studio wall"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-z1-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-z1-black/80 lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
