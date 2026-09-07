import { Mail, Briefcase } from "lucide-react";
import Logo from "./Logo";
import GithubIcon from "./icons/GithubIcon";
import { site, contact } from "@/lib/site";

const icons = { Mail, Github: GithubIcon, Briefcase };

// brand/BRIEF.md §4.7 — logo mark, one line of copy, links, year in mono.
export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = contact.links.filter((l) => ["Mail", "Github", "Briefcase"].includes(l.icon));

  return (
    <footer className="border-t-[0.5px] border-hairline">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo variant="mark" className="h-6 w-auto text-ink" />
          <p className="text-sm text-secondary">Built and shipped by one developer.</p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((l) => {
            const Icon = icons[l.icon as keyof typeof icons];
            return (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={l.label}
                className="text-secondary transition-colors hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
          <p className="font-mono text-xs text-muted">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
