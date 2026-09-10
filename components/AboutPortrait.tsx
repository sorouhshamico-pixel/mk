import Image from "next/image";

/** About-page portrait. Editorial monochrome with a faint brand wash and a
 *  fade into the page at the base, so the subject reads as part of the layout
 *  rather than a pasted-in snapshot. Eases to full colour on hover. */
export default function AboutPortrait({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px] md:mx-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-2xl"
      />
      <div className="group relative overflow-hidden rounded-[1.5rem] border-[0.5px] border-hairline shadow-2xl">
        <Image
          src="/mohamed-khalifa.jpg"
          alt={alt}
          width={640}
          height={800}
          priority
          className="aspect-[4/5] w-full scale-[1.04] object-cover object-[50%_22%] grayscale contrast-[1.08] brightness-[0.98] transition-[filter,transform] duration-700 ease-out group-hover:scale-100 group-hover:grayscale-0"
        />
        {/* brand wash — ties the photo to the accent without tinting skin heavily */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-accent/15 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* base fade into the page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-paper via-paper/25 to-transparent"
        />
        {/* inner hairline highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/[0.06]"
        />
      </div>
    </div>
  );
}
