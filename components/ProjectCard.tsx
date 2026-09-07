import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  coverAvailable,
}: {
  project: Project;
  coverAvailable: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="hover-lift group flex flex-col overflow-hidden rounded-xl border-[0.5px] border-hairline bg-surface shadow-md hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {coverAvailable ? (
          <Image
            src={project.cover}
            alt={`${project.name} — ${project.tagline}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface to-surface">
            <span className="font-mono text-xs text-muted">
              {String(project.index).padStart(2, "0")} / {project.primaryStack}
            </span>
          </div>
        )}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-ink">{project.name}</h3>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
        <p className="text-sm text-secondary">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border-[0.5px] border-hairline px-2.5 py-1 font-mono text-[11px] text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
