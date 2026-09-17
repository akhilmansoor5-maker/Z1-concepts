import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type PageHeroProps = {
  kicker: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ kicker, title, copy, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-z1-void">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
      <Container className="relative flex min-h-[70vh] flex-col justify-end pb-16 pt-28 sm:pb-20 lg:justify-end">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            {kicker}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,10vw,6.8rem)] leading-[0.88] font-semibold uppercase tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {copy}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
