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
      {/* slow accent halo — a soft breathing glow, not a hard rotating arc */}
      <div
        aria-hidden="true"
        className="animate-spin-slow motion-reduce:animate-none pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-30"
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-accent) 0deg, transparent 120deg, transparent 240deg, var(--color-accent) 360deg)",
          filter: "blur(30px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-2xl"
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
          height={900}
          priority
          className="aspect-[4/5] w-full scale-[1.04] object-cover object-[50%_22%] grayscale contrast-[1.08] brightness-[0.98] transition-[filter,transform] duration-700 ease-out group-hover:scale-100 group-hover:grayscale-0"
        />
        {/* brand wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-accent/15 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* base fade into the page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-paper via-paper/20 to-transparent"
        />
        {/* inner hairline highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/[0.06]"
        />
        {/* light sweep on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      </div>

      <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-full border-[0.5px] border-hairline bg-paper px-4 py-2 shadow-xl">
        <Sparkles size={14} className="text-accent" />
        <span className="font-mono text-xs text-ink">{location}</span>
      </div>
    </div>
  );
}
