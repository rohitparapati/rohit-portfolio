import { useEffect } from "react";

/**
 * Adds a "is-visible" class to elements with [data-reveal]
 * when they enter the viewport.
 *
 * Lightweight IntersectionObserver (no scroll listeners).
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // If user prefers reduced motion, instantly show everything.
    if (reduceMotion) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // reveal once
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
