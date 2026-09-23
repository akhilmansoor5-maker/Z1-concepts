import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getTelHref, navItems, site } from "@/lib/site";

export function Footer() {
  const tel = getTelHref();

  return (
    <footer className="border-t border-white/10 bg-black py-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:py-14 lg:pb-14">
      <Container>
        <div className="hidden gap-12 lg:grid lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/brand/z1-logo-trans.png"
              alt="Z1 Concepts"
              width={280}
              height={84}
              className="h-12 w-auto max-w-[12rem]"
            />
            <p className="mt-6 max-w-sm text-sm uppercase tracking-[0.18em] text-white/50">
              Automotive Detailing
              <br />
              Protection
              <br />
              Styling
            </p>
            <p className="mt-6 text-base leading-relaxed text-white">
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

        <div className="lg:hidden">
          <Image
            src="/brand/z1-logo-trans.png"
            alt="Z1 Concepts"
            width={280}
            height={84}
            className="h-7 w-auto max-w-[7rem]"
          />
          <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-white/45">
            Detailing · Protection · Styling
            <br />
            Google 4.6★ car wash in Manjeri
          </p>
          <p className="mt-2 max-w-[20rem] text-[12px] leading-snug text-white/70">
            {site.location.fullAddress}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-7 items-center text-[10px] uppercase tracking-[0.14em] text-white/60"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-1 text-[11px] leading-relaxed text-white/55">
              {tel ? <a href={tel}>{site.phone}</a> : <span>{site.phone}</span>}
              <span>WhatsApp {site.whatsapp}</span>
              <span>{site.hours}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.16em] text-white/35 lg:mt-10 lg:pt-5 lg:text-xs lg:tracking-[0.18em]">
          <p>© {new Date().getFullYear()} Z1 Concepts</p>
          <p>Manjeri, Kerala</p>
        </div>
      </Container>
    </footer>
  );
}
