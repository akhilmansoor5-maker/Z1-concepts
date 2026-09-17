import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { getTelHref, site } from "@/lib/site";

export function LocalSeo() {
  const tel = getTelHref();

  return (
    <section className="border-t border-white/10 bg-z1-charcoal py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            {site.location.region}, India
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] font-semibold uppercase tracking-tight">
            Z1 Concepts — Manjeri
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
                Z1 Concepts is an automotive studio in Manjeri, Kerala for owners
                who want more than a quick wash. The workshop covers automotive
                detailing, car wash and interior cleaning, plus car protection
                such as PPF and ceramic coating, and car styling including wrapping
                and related finish work.
              </p>
              <div className="relative mt-8 min-h-[16rem] overflow-hidden sm:min-h-[20rem]">
                <Image
                  src="/images/z1/maps-shop-5.jpg"
                  alt="Z1 Concepts studio on Manjeri–Pandikkad Road"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Location</p>
              <p className="mt-3 text-xl leading-relaxed text-white">{site.location.fullAddress}</p>
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/45">Phone</p>
              {tel ? (
                <a
                  href={tel}
                  className="mt-3 inline-flex min-h-12 items-center text-xl text-white transition-colors hover:text-z1-red"
                >
                  {site.phone}
                </a>
              ) : (
                <p className="mt-3 text-xl text-white">{site.phone}</p>
              )}
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/45">Hours</p>
              <p className="mt-3 text-xl text-white">{site.hours}</p>
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/45">Instagram</p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-12 items-center break-all text-xl text-white transition-colors hover:text-z1-red"
              >
                {site.instagram.handle}
              </a>
              <a
                href={site.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center text-sm uppercase tracking-[0.18em] text-z1-red hover:text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
