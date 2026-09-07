"use client";

import { useRef, useState, useSyncExternalStore, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToQuery(query: string) {
  return (callback: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
  };
}

const subscribeFine = subscribeToQuery(FINE_POINTER_QUERY);
const subscribeReducedMotion = subscribeToQuery(REDUCED_MOTION_QUERY);

function getFineSnapshot() {
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}
function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
// Assume a hover-capable, motion-safe desktop on the server; corrected on
// the client's first paint via useSyncExternalStore (no setState-in-effect).
function getFineServerSnapshot() {
  return true;
}
function getReducedMotionServerSnapshot() {
  return false;
}

function Thumbnail({ project, available }: { project: Project; available: boolean }) {
  if (available) {
    return (
      <Image
        src={project.thumbnail}
        alt={`${project.name} — ${project.tagline}`}
        width={240}
        height={150}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface" aria-hidden="true">
      <span className="font-mono text-xs text-muted">
        {String(project.index).padStart(2, "0")} / {project.primaryStack}
      </span>
    </div>
  );
}

// brand/BRIEF.md §4.4 — cursor-following thumbnail with a spring-ish lag on
// hover-capable/fine-pointer devices; a fixed-position thumbnail under
// prefers-reduced-motion (no cursor tracking); an inline thumbnail on touch.
// `thumbAvailable` is resolved server-side (fs) by the caller — see
// lib/projects.ts#hasPublicAsset — since this component ships to the client.
export default function ProjectRow({
  project,
  thumbAvailable,
}: {
  project: Project;
  thumbAvailable: boolean;
}) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const fine = useSyncExternalStore(subscribeFine, getFineSnapshot, getFineServerSnapshot);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const mode: "track" | "fixed" | "inline" = !fine ? "inline" : reduced ? "fixed" : "track";

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (mode !== "track") return;
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div className="border-b-[0.5px] border-hairline">
      <Link
        ref={rowRef}
        href={`/work/${project.slug}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="group relative flex items-center gap-4 px-4 py-5 transition-colors hover:bg-surface sm:px-6"
      >
        <span className="w-6 shrink-0 font-mono text-xs text-muted">
          {String(project.index).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg text-ink sm:text-xl">{project.name}</span>
          <span className="block text-sm text-secondary">{project.tagline}</span>
        </span>
        <span className="hidden shrink-0 font-mono text-xs text-muted sm:block">
          {project.primaryStack}
        </span>
        <span className="hidden shrink-0 font-mono text-xs text-muted md:block">{project.year}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-secondary transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>

        {mode !== "inline" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute z-10 h-[150px] w-[240px] overflow-hidden border-[0.5px] border-hairline bg-surface"
            style={
              mode === "track"
                ? {
                    left: pos.x + 24,
                    top: pos.y - 75,
                    opacity: hovering ? 1 : 0,
                    transition: "opacity 300ms ease-out, left 220ms ease-out, top 220ms ease-out",
                  }
                : {
                    right: 24,
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: hovering ? 1 : 0,
                    transition: "opacity 200ms ease-out",
                  }
            }
          >
            <Thumbnail project={project} available={thumbAvailable} />
          </span>
        )}
      </Link>

      {mode === "inline" && (
        <div className="px-4 pb-5 sm:px-6">
          <div className="aspect-[16/10] w-full">
            <Thumbnail project={project} available={thumbAvailable} />
          </div>
        </div>
      )}
    </div>
  );
}
