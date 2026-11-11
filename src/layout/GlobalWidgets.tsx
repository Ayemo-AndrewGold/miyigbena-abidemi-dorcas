"use client";

import ScrollToTop from "@/ui/ScrollToTop";
import WhatsAppButton from "@/ui/WhatsAppButton";
/**
 * GlobalWidgets
 * Renders floating UI features that appear on all public pages.
 * - ScrollToTop: appears after 400px scroll
 * - WhatsAppButton: always visible floating WhatsApp CTA
 *   (replaces the AI chat widget per client requirement)
 *
 * This wrapper exists so the root layout.tsx (server component)
 * only needs a single import instead of multiple client imports.
 */





export default function GlobalWidgets() {
  return (
    <>

      <ScrollToTop />
      <WhatsAppButton />  
    </>
  );
}
