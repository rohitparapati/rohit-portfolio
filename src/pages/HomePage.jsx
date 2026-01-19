import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Enables section reveal animations
  useRevealOnScroll();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Clear so it doesn't stick around
      navigate("/", { replace: true, state: {} });
    });
  }, [location.state, navigate]);

  return (
    <>
      {/* Hero typically should appear instantly (no reveal needed) */}
      <Hero />

      {/* These will animate in */}
      <div data-reveal>
        <Skills />
      </div>

      <div data-reveal>
        <Projects />
      </div>

      <div data-reveal>
        <Contact />
      </div>
    </>
  );
}
