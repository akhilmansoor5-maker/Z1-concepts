"use client";

import { useEffect, useState } from "react";
import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/cn";
import { getWhatsAppHref, navItems } from "@/lib/site";

const mobileLinks = [{ label: "Home", href: "/" }, ...navItems] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[70] w-full max-w-full border-b border-white/10 bg-black pt-[env(safe-area-inset-top)] lg:transition-[background-color,border-color,backdrop-filter] lg:duration-300",
        scrolled
          ? "lg:border-white/10 lg:bg-black/90 lg:backdrop-blur-md"
          : "lg:border-transparent lg:bg-gradient-to-b lg:from-black/80 lg:via-black/40 lg:to-transparent",
      )}
    >
      <Container className="flex h-14 min-w-0 items-center justify-between gap-3 lg:h-20">
        <Link
          href="/"
          className="relative z-10 inline-flex min-h-11 max-w-[8rem] shrink-0 items-center lg:max-w-[10rem]"
          aria-label="Z1 Concepts home"
        >
          <Image
            src="/brand/z1-logo-trans.png"
            alt="Z1 Concepts"
            width={400}
            height={120}
            priority
            className="h-7 w-auto max-w-[8rem] lg:h-10 lg:max-w-[10rem]"
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

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 min-w-12 items-center justify-center text-[#25D366] active:opacity-70"
            aria-label="WhatsApp Z1"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 flex-col items-center justify-center gap-[5px]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "h-px w-5 bg-white transition-transform duration-200",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-white transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-white transition-transform duration-200",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Site"
            className="overflow-hidden border-t border-white/10 bg-black lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] py-2">
              {mobileLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center border-b border-white/10 text-[13px] font-medium uppercase tracking-[0.18em] last:border-b-0",
                      active ? "text-z1-red" : "text-white/80",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
