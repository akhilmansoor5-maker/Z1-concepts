import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getTelHref, navItems, site } from "@/lib/site";

export function Footer() {
  const tel = getTelHref();

  return (
    <footer className="border-t border-white/10 bg-black py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/brand/z1-logo-trans.png"
              alt="Z1 Concepts"
              width={280}
              height={84}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm uppercase tracking-[0.18em] text-white/50">
              Automotive Detailing
              <br />
              Protection
              <br />
              Styling
            </p>
            <p className="mt-6 text-white">{site.location.fullAddress}</p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
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
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                Instagram{" "}
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-z1-red"
                >
                  {site.instagram.handle}
                </a>
              </li>
              <li>Phone: {tel ? <a href={tel}>{site.phone}</a> : site.phone}</li>
              <li>WhatsApp: {site.whatsapp}</li>
              <li>Hours: {site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Z1 Concepts</p>
          <p>Manjeri, Kerala</p>
        </div>
      </Container>
    </footer>
  );
}
