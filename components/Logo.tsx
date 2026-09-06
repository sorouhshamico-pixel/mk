type LogoProps = {
  variant?: "full" | "mark" | "badge";
  className?: string;
};

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 62 44"
      className={className}
      fill="none"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 37 L6 11 L17 24 L28 11 L28 37" className="stroke-ink" />
      <path d="M36 11 L36 37" className="stroke-accent" />
      <path d="M36 24 L50 11" className="stroke-accent" />
      <path d="M36 24 L50 37" className="stroke-accent" />
      <circle cx="57" cy="6" r="3.5" className="fill-accent" stroke="none" />
    </svg>
  );
}

export default function Logo({ variant = "full", className }: LogoProps) {
  if (variant === "badge") {
    return (
      <svg viewBox="0 0 64 64" className={className} role="img" aria-label="MK">
        <rect width="64" height="64" rx="14" className="fill-accent" />
        <g
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 43 L15 21 L24 32 L33 21 L33 43" />
          <path d="M39 21 L39 43" />
          <path d="M39 32 L49 21" />
          <path d="M39 32 L49 43" />
        </g>
      </svg>
    );
  }

  if (variant === "mark") {
    return <Mark className={className} />;
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Mark className="h-8 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-medium tracking-[0.08em] text-ink">
          M. KHALIFA
        </span>
        <span className="mt-1 text-[11px] tracking-[0.18em] text-muted">
          web developer
        </span>
      </span>
      <span className="sr-only">Mohamed Khalifa, web developer</span>
    </span>
  );
}
