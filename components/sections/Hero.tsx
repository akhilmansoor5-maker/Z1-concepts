"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { categories, getWhatsAppHref } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="z-hero-screen flex flex-col bg-z1-void px-[max(1rem,env(safe-area-inset-left))] py-3 pr-[max(1rem,env(safe-area-inset-right))] lg:hidden">
        <div className="relative min-h-0 flex-1 overflow-hidden border border-white/15">
          <Image
            src="/images/z1/hero-studio.jpg"
            alt="Z1 Concepts, Google rated 4.6 best car wash in Manjeri, with cars in the studio bays"
            fill
            priority
            sizes="(max-width: 1023px) 92vw, 100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />

          <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-5 pt-14 text-center">
            <span className="mb-3 block h-[3px] w-8 bg-z1-red" />
            <p className="z-kicker text-white/70">Google 4.6★ · Manjeri</p>
            <h1 className="z-display mt-2 w-full text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.55)]">
              Your car.
              <br />
              Redefined.
            </h1>
            <p className="z-copy mt-3 w-full max-w-[17rem] text-white/78">
              Best car wash in Manjeri. Detail, protect, style.
            </p>

            <div className="mt-5 grid w-full grid-cols-3 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="z-chip text-white backdrop-blur-sm active:bg-white/10"
                >
                  {category.title}
                </Link>
              ))}
            </div>

            <div className="mt-3 w-full">
              <Button href={getWhatsAppHref()} external className="w-full" size="md">
                <WhatsAppIcon />
                WhatsApp Z1
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate hidden h-svh min-h-[34rem] overflow-hidden bg-z1-void lg:block">
        <Image
          src="/images/z1/hero-studio.jpg"
          alt="Z1 Concepts, Google rated 4.6 best car wash in Manjeri, with cars in the studio bays"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(225,6,0,0.18),transparent_52%)]" />
        <Container className="relative flex h-full min-h-[34rem] flex-col justify-center pb-24 pt-28">
          <motion.p
            className="mb-7 font-mono text-[11px] uppercase tracking-[0.38em] text-white/75"
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            Z1 Concepts • Google 4.6★ Manjeri
          </motion.p>
          <motion.h1
            className="max-w-4xl font-display text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.88] font-semibold tracking-tight text-white uppercase [text-shadow:0_8px_40px_rgba(0,0,0,0.55)]"
            initial={reduceMotion ? false : { y: 22 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease }}
          >
            Your car.
            <br />
            Redefined.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-white/72"
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.26, ease }}
          >
            Best car wash in Manjeri. Automotive detailing, protection and
            styling for vehicles that deserve more.
          </motion.p>
          <motion.div
            className="mt-11 flex flex-row items-center gap-3"
            initial={reduceMotion ? false : { y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
          >
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
            <Button href={getWhatsAppHref()} external size="lg">
              <WhatsAppIcon />
              WhatsApp Z1
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
