"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/cn";
import { getWhatsAppHref, navItems, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] pt-[env(safe-area-inset-top)] transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open
            ? "border-b border-white/10 bg-black/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/80 via-black/40 to-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-3 sm:h-[72px] lg:h-20">
          <Link
            href="/"
            className="relative z-10 inline-flex min-h-11 min-w-11 shrink-0 items-center"
            onClick={() => setOpen(false)}
            aria-label="Z1 Concepts home"
          >
            <Image
              src="/brand/z1-logo-trans.png"
              alt="Z1 Concepts"
              width={400}
              height={120}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10" aria-label="Primary">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.24em] transition-colors",
                    active ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href={getWhatsAppHref()} external size="sm">
              Book Now
            </Button>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 min-w-12 items-center justify-center text-[#25D366] active:opacity-70"
              aria-label="WhatsApp Z1"
            >
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </a>
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 flex-col items-center justify-center gap-[6px] active:opacity-70"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={cn(
                  "h-px w-5 bg-white transition-transform duration-200",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-white transition-transform duration-200",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-black lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="flex h-dvh flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))]">
              <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto" aria-label="Mobile">
                {navItems.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.28 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-14 items-center font-display text-[clamp(1.85rem,8vw,2.75rem)] uppercase tracking-wide",
                          active ? "text-z1-red" : "text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <Button href={getWhatsAppHref()} external className="w-full" size="lg">
                <WhatsAppIcon />
                WhatsApp Z1
              </Button>
              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-white/45">
                {site.location.city}, {site.location.region}
              </p>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
