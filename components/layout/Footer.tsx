import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getTelHref, navItems, site } from "@/lib/site";

export function Footer() {
  const tel = getTelHref();

  return (
    <footer className="border-t border-white/10 bg-black py-12 pb-[calc(6.75rem+env(safe-area-inset-bottom))] sm:py-14 lg:pb-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12">
          <div>
            <Image
              src="/brand/z1-logo-trans.png"
              alt="Z1 Concepts"
              width={280}
              height={84}
              className="h-10 w-auto sm:h-12"
            />
            <p className="mt-6 max-w-sm text-sm uppercase tracking-[0.18em] text-white/50">
              Automotive Detailing
              <br />
              Protection
              <br />
              Styling
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-white sm:text-base">
              {site.location.fullAddress}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              Navigate
            </p>
            <ul className="mt-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              Contact
            </p>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-white hover:text-z1-red"
                >
                  {site.instagram.handle}
                </a>
              </li>
              <li>
                {tel ? (
                  <a href={tel} className="inline-flex min-h-11 items-center text-white hover:text-z1-red">
                    {site.phone}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center">{site.phone}</span>
                )}
              </li>
              <li className="inline-flex min-h-11 items-center">WhatsApp: {site.whatsapp}</li>
              <li className="inline-flex min-h-11 items-center">Hours: {site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Z1 Concepts</p>
          <p>Manjeri, Kerala</p>
        </div>
      </Container>
    </footer>
  );
}
