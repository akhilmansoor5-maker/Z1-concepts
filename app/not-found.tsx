import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center bg-z1-black pt-28">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
          404
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-semibold uppercase tracking-tight">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md text-white/60">
          That route does not exist. Return home or open the services list.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back home</Button>
          <Button href="/services" variant="outline">
            View services
          </Button>
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-block text-sm uppercase tracking-[0.18em] text-white/45 hover:text-white"
        >
          Contact
        </Link>
      </Container>
    </section>
  );
}
