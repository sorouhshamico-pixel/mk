/** A numbered section label — ties the whole home page together as one
 *  designed sequence instead of a stack of unrelated blocks. Reuses the
 *  mono/eyebrow vocabulary already established by the status badge and
 *  project index rows. */
export default function SectionMark({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft font-mono text-[10px] text-accent">
        {index}
      </span>
      <span className="text-[11px] uppercase tracking-[0.14em] text-muted">{label}</span>
    </div>
  );
}
