import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Let’s Connect" },
    ],
    []
  );

  // Close mobile menu if window becomes wide
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Scroll spy only on the Home route (because sections exist there)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navItems.map((n) => n.id);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
         root: null,
        rootMargin: "-64px 0px -55% 0px",
         threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems, location.pathname]);

  const handleNavClick = (id) => {
    setMenuOpen(false);

    // If we're NOT on the home page, go home and request a scroll
    if (location.pathname !== "/") {
      setActiveId(id);
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    // Already on home: just scroll
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Primary navigation">
        <button
          type="button"
          className="navbar__brand"
          onClick={() => handleNavClick("home")}
          aria-label="Go to home section"
        >
          RR
        </button>

        <div className="navbar__links" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeId === item.id ? "is-active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-link ${activeId === item.id ? "is-active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
