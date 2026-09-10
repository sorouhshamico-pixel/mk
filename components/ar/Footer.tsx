import { Mail, Briefcase } from "lucide-react";
import Logo from "@/components/Logo";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { site, contact } from "@/lib/site.ar";

const icons = { Mail, Github: GithubIcon, Linkedin: LinkedinIcon, Briefcase };

export default function FooterAr() {
  const year = new Date().getFullYear();
  const socialLinks = contact.links.filter((l) =>
    ["Mail", "Github", "Linkedin", "Briefcase"].includes(l.icon)
  );

  return (
    <footer className="border-t-[0.5px] border-hairline">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo variant="mark" className="h-6 w-auto text-ink" />
          <p className="text-sm text-secondary">بُني وأُطلق بواسطة مطوّر واحد.</p>
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
