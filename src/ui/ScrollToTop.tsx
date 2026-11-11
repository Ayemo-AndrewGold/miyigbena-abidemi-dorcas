"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const isHidden = SITE_CONFIG.hiddenWidgetPaths.some((p) =>
    pathname.startsWith(p)
  );

  useEffect(() => {
    if (isHidden) return;
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHidden]);

  if (isHidden) return null;

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed z-50 flex items-center justify-center transition-[background-color,transform] hover:scale-105 hover:bg-[var(--accent)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      style={{
        right: "1.25rem",
        bottom: "6.5rem",
        width: "2.5rem",
        height: "2.5rem",
        backgroundColor: "var(--ink)",
        color: "#fff",
        border: "none",
        borderRadius: "2px",
        cursor: "pointer",
        boxShadow: "0 4px 16px rgb(28 48 44 / 22%)",
      }}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 19V5m-6 6 6-6 6 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
