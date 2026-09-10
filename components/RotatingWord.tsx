"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

/** Cycles through `words`, fading/sliding each one in and out. Reduced-
 *  motion visitors get the first word only, no interval — nothing to
 *  distract, nothing that can get stuck mid-transition. */
export default function RotatingWord({
  words,
  className,
  interval = 2400,
  dir,
}: {
  words: string[];
  className?: string;
  interval?: number;
  dir?: "ltr" | "rtl";
}) {
  const [index, setIndex] = useState(0);
  const [entering, setEntering] = useState(true);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const swap = setInterval(() => {
      setEntering(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setEntering(true);
      }, 280);
      return () => clearTimeout(timeout);
    }, interval);
    return () => clearInterval(swap);
  }, [reduced, words.length, interval]);

  return (
    <span
      dir={dir}
      className={`inline-block transition-all duration-300 ease-out ${
        entering ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      } ${className ?? ""}`}
    >
      {words[index]}
    </span>
  );
}
