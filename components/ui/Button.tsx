"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "border-transparent bg-z1-red text-white shadow-[0_0_24px_rgba(225,6,0,0.28)] hover:bg-z1-red-bright hover:shadow-[0_0_32px_rgba(225,6,0,0.4)] active:bg-z1-red-bright",
  outline:
    "border-white/25 bg-transparent text-white hover:border-white hover:bg-white/5 active:bg-white/10",
  ghost: "border-transparent bg-white/5 text-white hover:bg-white/10 active:bg-white/15",
  whatsapp: "border-transparent bg-[#25D366] text-z1-void hover:bg-[#2fe072] active:bg-[#2fe072]",
} as const;

const sizes = {
  xs: "min-h-10 px-4 text-[10px]",
  sm: "min-h-11 px-4 text-[11px]",
  md: "min-h-12 px-6 text-[12px]",
  lg: "min-h-14 px-6 text-[12px] sm:px-8 sm:text-[13px]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
    external?: never;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClass =
  "inline-flex touch-manipulation items-center justify-center gap-2 border font-sans font-medium uppercase tracking-[0.22em] transition-colors duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-40";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const classes = cn(baseClass, variants[variant], sizes[size], className);
  const motionProps =
    !mounted || reduceMotion
      ? {}
      : {
          whileHover: { y: -1 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const },
        };

  if ("href" in props && props.href) {
    const { href, external } = props;
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    if (href.includes("#")) {
      return (
        <motion.a href={href} className={classes} {...motionProps}>
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <motion.button type={buttonProps.type ?? "button"} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
