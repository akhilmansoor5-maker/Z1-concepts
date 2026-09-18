"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { asset } from "@/lib/asset";

type BackgroundMediaProps = {
  image: string;
  imageAlt: string;
  videoSrc?: string;
  priority?: boolean;
  className?: string;
};

export function BackgroundMedia({
  image,
  imageAlt,
  videoSrc,
  priority = false,
  className = "object-cover object-[center_35%]",
}: BackgroundMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const showVideo = mounted && Boolean(videoSrc) && !reduceMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!showVideo) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => {
      void video.play().catch(() => undefined);
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [showVideo, videoSrc]);

  return (
    <div className="absolute inset-0">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 1023px) 92vw, 100vw"
        className={className}
      />
      {showVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full ${className}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={asset(image)}
          aria-hidden="true"
          onLoadedData={(event) => {
            event.currentTarget.muted = true;
            void event.currentTarget.play().catch(() => undefined);
          }}
        >
          <source src={videoSrc ? asset(videoSrc) : undefined} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
