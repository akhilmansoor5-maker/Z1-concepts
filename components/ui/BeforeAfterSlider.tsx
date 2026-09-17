"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={frameRef}
      className="relative aspect-[16/10] touch-none cursor-ew-resize overflow-hidden select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Image src={afterSrc} alt={afterAlt} fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill sizes="100vw" className="object-cover" />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-px bg-white"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/75">
          <span className="font-mono text-[9px] tracking-[0.18em] text-white">DRAG</span>
        </div>
      </div>

      <span className="pointer-events-none absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/85">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/85">
        After
      </span>

      <label className="sr-only" htmlFor="before-after">
        Compare before and after
      </label>
      <input
        id="before-after"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-0 bottom-3 z-20 mx-auto h-11 w-[min(90%,36rem)] cursor-pointer accent-white"
      />
    </div>
  );
}
