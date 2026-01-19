import { Link, useNavigate } from "react-router-dom";

/**
 * NotFound page
 * - Shown when route doesn't match anything
 * - Keeps styling consistent with the rest of the site
 */
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="section" aria-label="Page not found">
      <div className="container">
        <div className="glass details-card">
          <h1 className="details__title">404 — Page not found</h1>
          <p className="details__text">
            The page you’re looking for doesn’t exist (or the link is wrong).
          </p>

          <div className="details-footer">
            <button className="btn btn--primary" onClick={() => navigate("/")}>
              Go Home
            </button>

            <Link className="btn btn--glass" to="/projects/stock-analysis-tool">
              View a Project Example
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
