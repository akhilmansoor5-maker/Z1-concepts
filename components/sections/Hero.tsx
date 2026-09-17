"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppHref } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate h-svh min-h-[34rem] overflow-hidden bg-z1-void">
      <Image
        src="/images/z1/maps-shop-2.jpg"
        alt="Z1 Concepts detailing bay in Manjeri with vehicles being washed"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%] sm:object-[center_32%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(225,6,0,0.18),transparent_52%)]" />

      <Container className="relative flex h-full min-h-[34rem] flex-col justify-end pb-[calc(5.75rem+env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pb-20 lg:justify-center lg:pb-24">
        <motion.p
          className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-white/75 sm:mb-7 sm:text-[11px] sm:tracking-[0.38em]"
          initial={reduceMotion ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Z1 Concepts • Manjeri
        </motion.p>

        <motion.h1
          className="max-w-4xl font-display text-[clamp(2.35rem,12vw,6.4rem)] leading-[0.9] font-semibold tracking-tight text-white uppercase text-balance [text-shadow:0_8px_40px_rgba(0,0,0,0.55)]"
          initial={reduceMotion ? false : { y: 22 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: 0.16, ease }}
        >
          Your car.
          <br />
          Redefined.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-md text-base leading-relaxed text-white/72 sm:mt-8 sm:max-w-lg sm:text-lg"
          initial={reduceMotion ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease }}
        >
          Automotive detailing, protection and styling engineered for vehicles
          that deserve more.
        </motion.p>

        <motion.div
          className="mt-7 flex w-full flex-col gap-3 sm:mt-11 sm:max-w-none sm:flex-row sm:items-center"
          initial={reduceMotion ? false : { y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease }}
        >
          <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
            Explore Services
          </Button>
          <Button href={getWhatsAppHref()} external size="lg" className="w-full sm:w-auto">
            <WhatsAppIcon />
            WhatsApp Z1
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
