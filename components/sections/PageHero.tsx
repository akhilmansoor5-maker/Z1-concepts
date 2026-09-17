import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { BackgroundMedia } from "@/components/ui/BackgroundMedia";

type PageHeroProps = {
  kicker: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  videoSrc?: string;
};

export function PageHero({
  kicker,
  title,
  copy,
  image,
  imageAlt,
  videoSrc,
}: PageHeroProps) {
  return (
    <section className="relative isolate h-svh min-h-[34rem] overflow-hidden bg-z1-void">
      <BackgroundMedia
        image={image}
        imageAlt={imageAlt}
        videoSrc={videoSrc}
        priority
        className="object-cover object-[center_32%] sm:object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
      <Container className="relative flex h-full min-h-[34rem] flex-col justify-end pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pb-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
            {kicker}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(1.85rem,8.4vw,3.4rem)] leading-[0.95] font-semibold uppercase tracking-tight text-white text-balance">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {copy}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
