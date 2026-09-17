"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppHref } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-z1-void shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 active:scale-95 lg:hidden"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, calc(env(safe-area-inset-bottom) + 0.85rem))",
      }}
      aria-label="WhatsApp Z1"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
