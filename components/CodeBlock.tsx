// brand/BRIEF.md §4.6 — one code block per case study, a real excerpt only.
// Callers must check hasRealSnippet() first; this component doesn't guard
// against placeholder code itself.
export default function CodeBlock({
  caption,
  code,
}: {
  caption: string;
  code: string;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <figcaption className="font-mono text-xs text-muted">{caption}</figcaption>
      <pre className="overflow-x-auto border-[0.5px] border-hairline bg-surface p-4">
        <code className="font-mono text-[13px] leading-[1.7] text-ink">{code}</code>
      </pre>
    </figure>
  );
}
