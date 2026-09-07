import Image from "next/image";
import { hasPublicAsset, type Project } from "@/lib/projects";

/** Renders the real screenshot when it exists in public/, otherwise a
 * branded placeholder (mono index + name) instead of a broken next/image
 * request. brand/BRIEF.md §6: thumb.webp/cover.webp haven't been supplied
 * for any project yet. */
export default function ProjectCover({
  project,
  variant,
  className,
}: {
  project: Project;
  variant: "thumbnail" | "cover";
  className?: string;
}) {
  const src = variant === "thumbnail" ? project.thumbnail : project.cover;
  const sizes = variant === "thumbnail" ? { width: 640, height: 400 } : { width: 1600, height: 900 };

  if (hasPublicAsset(src)) {
    return (
      <Image
        src={src}
        alt={`${project.name} — ${project.tagline}`}
        width={sizes.width}
        height={sizes.height}
        className={`object-cover ${className ?? ""}`}
      />
    );
  }

  return (
    <div
      className={`flex aspect-[16/10] items-center justify-center bg-surface ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="font-mono text-xs text-muted">
        {String(project.index).padStart(2, "0")} / {project.primaryStack}
      </span>
    </div>
  );
}
