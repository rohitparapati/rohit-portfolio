import { useEffect, useState } from "react";

/**
 * Simple typewriter effect (no libraries)
 * - Types characters one-by-one on mount
 * - Respects prefers-reduced-motion
 * - Shows shimmer only AFTER typing finishes (so it looks premium, not messy)
 */
export default function Hero() {
  const fullName = "ROHIT REDDY PARAPATI";

  const [typedName, setTypedName] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Respect reduced motion: instantly show the full name
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      setTypedName(fullName);
      setIsDone(true);
      return;
    }

    let i = 0;
    const speedMs = 70; // typing speed (lower = faster)

    const timer = setInterval(() => {
      i += 1;
      setTypedName(fullName.slice(0, i));

      if (i >= fullName.length) {
        clearInterval(timer);
        setIsDone(true);
      }
    }, speedMs);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="section hero" aria-label="Hero">
      <div className="container hero__inner">
        <p className="hero__kicker">Hi, I’m</p>

        {/* Typewriter title */}
        <h1 className="hero__title hero__title--type">
          {/* The typed text */}
          <span className="hero__titleText">{typedName}</span>

          {/* Blinking caret while typing */}
          {!isDone && <span className="type-caret" aria-hidden="true" />}

          {/* Shimmer overlay ONLY after typing completes */}
          {isDone && (
            <span className="hero__titleShimmer" aria-hidden="true">
              {fullName}
            </span>
          )}
        </h1>

        <p className="hero__tagline">Software Engineer | Data Engineer | Full Stack</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--glass" href="#contact">
            Let’s Connect
          </a>
        </div>
      </div>

      <div className="bg-blob bg-blob--1" aria-hidden="true" />
      <div className="bg-blob bg-blob--2" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
    </section>
  );
}
