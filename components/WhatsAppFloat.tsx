"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { site } from "@/lib/site";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_GREEN_DARK = "#1DA851";

/** A floating WhatsApp button, bottom-right, on every page. Two pulsing
 *  sonar rings behind it (motion-safe only), a one-time greeting bubble a
 *  couple of seconds after the page settles, and a label that slides out
 *  on hover/focus — rather than a plain green circle. */
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

      <div className="group relative h-14">
        {/* sonar rings — fixed to the icon's own footprint, so they read as
            a pulse around the button even while the pill expands beside them */}
        <span
          aria-hidden="true"
          className="motion-safe:animate-ping-slow pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN, opacity: 0.55 }}
        />
        <span
          aria-hidden="true"
          className="motion-safe:animate-ping-slower pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN, opacity: 0.35 }}
        />

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp — ${site.phoneDisplay}`}
          onMouseEnter={() => setDismissed(true)}
          className="relative z-10 flex h-14 items-center overflow-hidden rounded-full text-white shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${WHATSAPP_GREEN}, ${WHATSAPP_GREEN_DARK})` }}
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-sm font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-[10rem] group-hover:pl-4 group-hover:opacity-100 group-focus-within:max-w-[10rem] group-focus-within:pl-4 group-focus-within:opacity-100">
            Chat on WhatsApp
          </span>
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <WhatsAppIcon size={26} />
            <span
              aria-hidden="true"
              className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-lime-400"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
