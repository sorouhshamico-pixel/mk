import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hasPublicAsset } from "@/lib/projects";

export type ShowcaseItem = {
  slug: string;
  name: string;
  tagline: string;
  year: number;
  status: string;
  stack: string[];
  liveUrl?: string;
};

/** A project shown as an angled device mock-up (desktop browser frame with
 *  an overlapping phone) next to its meta — the "UI-kit showcase" layout.
 *  `flip` alternates which side the mock-up sits on. */
export default function ProjectShowcase({
  item,
  index,
  href,
  caseStudyLabel = "View case study",
  flip = false,
}: {
  item: ShowcaseItem;
  index: number;
  href: string;
  caseStudyLabel?: string;
  flip?: boolean;
}) {
  const desktopSrc = `/work/${item.slug}/desktop.webp`;
  const mobileSrc = `/work/${item.slug}/mobile.webp`;
  const hasDesktop = hasPublicAsset(desktopSrc);
  const hasMobile = hasPublicAsset(mobileSrc);

  // Gentle tilt on phones; full angled mock-up from md up; straightens on hover.
  const frameCls = flip
    ? "[transform:rotateX(3deg)] md:[transform:perspective(1600px)_rotateX(6deg)_rotateY(12deg)_rotateZ(-1deg)] group-hover:md:[transform:perspective(1600px)_rotateX(2deg)_rotateY(2deg)_rotateZ(0deg)]"
    : "[transform:rotateX(3deg)] md:[transform:perspective(1600px)_rotateX(6deg)_rotateY(-12deg)_rotateZ(1deg)] group-hover:md:[transform:perspective(1600px)_rotateX(2deg)_rotateY(-2deg)_rotateZ(0deg)]";

  const phoneCls = flip
    ? "left-1 [transform:rotateZ(4deg)] sm:-left-5"
    : "right-1 [transform:rotateZ(-4deg)] sm:-right-5";

  return (
    <Link href={href} className="group grid items-center gap-12 md:grid-cols-2 md:gap-16">
      {/* Mock-up */}
      <div className={`relative ${flip ? "md:order-2" : "md:order-1"}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-8 rounded-full bg-accent/12 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        />

        {/* browser frame */}
        <div
          className={`relative overflow-hidden rounded-xl border-[0.5px] border-hairline bg-surface shadow-2xl transition-transform duration-500 ease-out will-change-transform ${frameCls}`}
        >
          <div className="flex h-7 items-center gap-1.5 border-b-[0.5px] border-hairline bg-paper/60 px-3">
            <span className="h-2 w-2 rounded-full bg-hairline" />
            <span className="h-2 w-2 rounded-full bg-hairline" />
            <span className="h-2 w-2 rounded-full bg-hairline" />
            <span className="ms-3 truncate font-mono text-[10px] text-muted" dir="ltr">
              {item.liveUrl?.replace(/^https?:\/\//, "") ?? item.slug}
            </span>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
            {hasDesktop ? (
              <Image
                src={desktopSrc}
                alt={`${item.name} — desktop`}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface to-surface">
                <span className="font-mono text-xs text-muted">{item.stack[0]}</span>
              </div>
            )}
          </div>
        </div>

        {/* phone frame */}
        {hasMobile && (
          <div
            className={`absolute -bottom-5 w-[84px] rounded-[1.2rem] border-[0.5px] border-hairline bg-paper p-[5px] shadow-2xl sm:w-[112px] ${phoneCls}`}
          >
            <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[0.95rem]">
              <Image
                src={mobileSrc}
                alt={`${item.name} — mobile`}
                fill
                sizes="120px"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className={`flex flex-col gap-4 ${flip ? "md:order-1" : "md:order-2"}`}>
        <div className="flex items-center gap-3 font-mono text-xs text-muted" dir="ltr">
          <span className="text-accent">{String(index).padStart(2, "0")}</span>
          <span aria-hidden="true">/</span>
          <span>{item.year}</span>
        </div>

        <h3 className="text-2xl font-medium tracking-[-0.01em] text-ink sm:text-3xl">{item.name}</h3>
        <p className="text-[15px] leading-[1.7] text-secondary">
          {item.tagline} · <span className="text-muted">{item.status}</span>
        </p>

        <div className="flex flex-wrap gap-2 pt-1" dir="ltr">
          {item.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border-[0.5px] border-hairline px-2.5 py-1 font-mono text-[11px] text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-2 inline-flex w-fit items-center gap-2 text-sm text-accent transition-colors group-hover:text-accent-hover">
          {caseStudyLabel}
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
