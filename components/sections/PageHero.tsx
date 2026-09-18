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
  imageClassName?: string;
  size?: "default" | "tall";
};

export function PageHero({
  kicker,
  title,
  copy,
  image,
  imageAlt,
  videoSrc,
  imageClassName = "object-cover object-[center_42%]",
}: PageHeroProps) {
  return (
    <>
      <section className="z-hero-screen flex flex-col bg-z1-void px-[max(1rem,env(safe-area-inset-left))] py-3 pr-[max(1rem,env(safe-area-inset-right))] lg:hidden">
        <div className="relative min-h-0 flex-1 overflow-hidden border border-white/15">
          <BackgroundMedia
            image={image}
            imageAlt={imageAlt}
            priority
            className={imageClassName}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-5 pt-14 text-center">
            <span className="mb-3 block h-[3px] w-8 bg-z1-red" />
            <p className="z-kicker text-z1-red">{kicker}</p>
            <h1 className="z-display mt-2 w-full text-balance text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.55)]">
              {title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="z-copy mt-3 w-full text-pretty text-white/78">{copy}</p>
          </div>
        </div>
      </section>

      <section className="relative isolate hidden h-svh min-h-[34rem] overflow-hidden bg-z1-void lg:block">
        <BackgroundMedia
          image={image}
          imageAlt={imageAlt}
          videoSrc={videoSrc}
          priority
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        <Container className="relative flex h-full min-h-[34rem] flex-col justify-end pb-20 pt-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-z1-red">
              {kicker}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,3.4rem)] leading-[0.95] font-semibold uppercase tracking-tight text-white text-balance">
              {title.replace(/\n/g, " ")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              {copy}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
