"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { site } from "@/lib/site";

/** The hero photo: a slowly rotating accent ring behind it, a subtle
 *  cursor-tracked 3D tilt, and a light sweep on hover. Falls back to a
 *  static (still shadowed/ringed) card under prefers-reduced-motion or
 *  on touch, since there's no cursor to tilt toward. */
export default function HeroPortrait({
  name = site.name,
  location = site.location,
}: {
  name?: string;
  location?: string;
} = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 12 });
  }

  function reset() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div className="relative mx-auto w-full max-w-[360px]" style={{ perspective: "1000px" }}>
      {/* rotating accent ring */}
      <div
        aria-hidden="true"
        className="animate-spin-slow motion-reduce:animate-none pointer-events-none absolute -inset-5 rounded-[2.25rem] opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-accent) 0deg, transparent 110deg, transparent 250deg, var(--color-accent) 360deg)",
          filter: "blur(18px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl"
      />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="group relative overflow-hidden rounded-[1.75rem] border-[0.5px] border-hairline shadow-2xl transition-transform duration-200 ease-out motion-reduce:transform-none"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transformStyle: "preserve-3d" }}
      >
        <Image
          src="/mohamed-khalifa.jpg"
          alt={name}
          width={720}
          height={720}
          priority
          className="aspect-square w-full object-cover"
        />
        {/* light sweep on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      </div>

      <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-full border-[0.5px] border-hairline bg-paper px-4 py-2 shadow-xl">
        <Sparkles size={14} className="text-accent" />
        <span className="font-mono text-xs text-ink">{location}</span>
      </div>
    </div>
  );
}
