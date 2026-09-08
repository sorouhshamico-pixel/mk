"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { site } from "@/lib/site";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_GREEN_DARK = "#1DA851";

/** A floating WhatsApp button, bottom-right, on every page. Two pulsing
 *  sonar rings behind it (motion-safe only), a one-time greeting bubble a
 *  couple of seconds after the page settles, and the icon itself wiggles
 *  on hover/focus — no expanding label, just that one animation. */
export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => setShowBubble(true), 2200);
    const closeTimer = setTimeout(() => setShowBubble(false), 9000);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const href = `https://wa.me/${site.phone.replace("+", "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showBubble && !dismissed && (
        <div
          className="fade-up-in flex max-w-[220px] items-start gap-2 rounded-2xl rounded-br-sm border-[0.5px] border-hairline bg-surface px-4 py-3 text-sm text-ink shadow-2xl"
          role="status"
        >
          <span>👋 Have a project? Message me on WhatsApp.</span>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
            className="shrink-0 text-muted hover:text-ink"
          >
            ×
          </button>
        </div>
      )}

      <div className="group relative h-14 w-14">
        {/* sonar rings */}
        <span
          aria-hidden="true"
          className="motion-safe:animate-ping-slow pointer-events-none absolute inset-0 rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN, opacity: 0.55 }}
        />
        <span
          aria-hidden="true"
          className="motion-safe:animate-ping-slower pointer-events-none absolute inset-0 rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN, opacity: 0.35 }}
        />

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp — ${site.phoneDisplay}`}
          onMouseEnter={() => setDismissed(true)}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-shadow hover:shadow-[0_0_0_6px_rgba(37,211,102,0.18)]"
          style={{ background: `linear-gradient(135deg, ${WHATSAPP_GREEN}, ${WHATSAPP_GREEN_DARK})` }}
        >
          <span className="motion-safe:group-hover:animate-icon-wiggle motion-safe:group-focus-within:animate-icon-wiggle">
            <WhatsAppIcon size={26} />
          </span>
          <span
            aria-hidden="true"
            className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-lime-400"
          />
        </a>
      </div>
    </div>
  );
}
