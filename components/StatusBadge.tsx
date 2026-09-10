import { statusBadge } from "@/lib/site";

// brand/BRIEF.md §4.1 — pill, 0.5px border, 7px accent dot pulsing opacity
// 1 -> 0.4 -> 1 every 3s (pure CSS, respects prefers-reduced-motion via the
// animate-none fallback below). Muted grey dot + different label when not
// available, rather than hiding the badge.
export default function StatusBadge({
  label: labelOverride,
  unavailableLabel: unavailableOverride,
}: {
  label?: string;
  unavailableLabel?: string;
} = {}) {
  const { available, label, unavailableLabel } = statusBadge;

  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border-[0.5px] border-hairline px-3 py-1.5">
      <span
        aria-hidden="true"
        className={`h-[7px] w-[7px] rounded-full motion-safe:animate-status-pulse ${
          available ? "bg-accent" : "bg-secondary"
        }`}
      />
      <span className="text-[13px] text-secondary">
        {available ? (labelOverride ?? label) : (unavailableOverride ?? unavailableLabel)}
      </span>
    </div>
  );
}
