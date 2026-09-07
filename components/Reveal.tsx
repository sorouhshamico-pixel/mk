import type { ReactNode } from "react";

/** Fade-up entrance on paint, via a pure CSS animation (see .fade-up-in in
 *  app/globals.css) — no IntersectionObserver, so nothing can end up stuck
 *  invisible if it renders below the fold or JS never touches it. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`fade-up-in ${className ?? ""}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
