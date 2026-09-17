"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppHref } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);
  const imageScale = useTransform(scrollY, [0, 600], [1.08, 1.18]);

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-z1-void">
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
        initial={reduceMotion ? false : { scale: 1.12 }}
        animate={reduceMotion ? undefined : { scale: 1.08 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src="/images/z1/maps-shop-2.jpg"
          alt="Z1 Concepts detailing bay in Manjeri with vehicles being washed"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(225,6,0,0.18),transparent_52%)]" />

      <Container className="relative flex min-h-dvh flex-col justify-end pb-28 pt-28 sm:pb-24 lg:justify-center lg:pb-24 lg:pt-28">
        <motion.p
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.38em] text-white/75 sm:mb-7 sm:text-[11px]"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Z1 Concepts • Manjeri
        </motion.p>

        <motion.h1
          className="max-w-4xl font-display text-[clamp(3.4rem,13vw,7.75rem)] leading-[0.86] font-semibold tracking-tight text-white uppercase [text-shadow:0_8px_40px_rgba(0,0,0,0.55)]"
          initial={{ y: 22 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: 0.16, ease }}
        >
          Your car.
          <br />
          Redefined.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-base leading-relaxed text-white/72 sm:mt-8 sm:max-w-lg sm:text-lg"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease }}
        >
          Automotive detailing, protection and styling engineered for vehicles
          that deserve more.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center"
          initial={{ y: 14 }}
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

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-3 text-white/40">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
