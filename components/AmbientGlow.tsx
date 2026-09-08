type Blob = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  opacity?: string;
  delay?: string;
};

/** Reused across the home page so the same soft accent glow threads
 *  through every section instead of living only in the hero — the
 *  thing that makes the page read as one continuous canvas. */
export default function AmbientGlow({ blobs }: { blobs: Blob[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`animate-blob absolute rounded-full bg-accent blur-3xl ${b.opacity ?? "opacity-15"}`}
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            bottom: b.bottom,
            left: b.left,
            right: b.right,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
