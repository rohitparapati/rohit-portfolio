import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => projectsData.find((p) => p.id === id), [id]);

  if (!project) {
    return (
      <section className="section" aria-label="Project not found">
        <div className="container">
          <div className="glass details-card">
            <h1 className="details__title">Project not found</h1>
            <p className="details__text">
              The project ID <strong>{id}</strong> doesn’t exist in your data yet.
            </p>
            <button className="btn btn--glass" onClick={() => navigate("/", { state: { scrollTo: "home" } })}>
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  const { title, tech, liveUrl, repoUrl, details } = project;

  return (
    <section className="section" aria-label={`Project details: ${title}`}>
      <div className="container">
        <div className="details-header">
          {/* Back to Home should go to TOP, not Skills */}
          <button
            className="btn btn--glass"
            onClick={() => navigate("/", { state: { scrollTo: "home" } })}
            aria-label="Go back to home"
          >
            ← Back
          </button>

          <div className="details-actions">
            {liveUrl ? (
              <a className="btn btn--primary" href={liveUrl} target="_blank" rel="noreferrer">
                Live Preview
              </a>
            ) : null}

            {repoUrl ? (
              <a className="btn btn--glass" href={repoUrl} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            ) : null}
          </div>
        </div>

        <article className="glass details-card">
          <h1 className="details__title">{title}</h1>

          <ul className="tags" aria-label={`${title} tech stack`}>
            {tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          <div className="details-grid">
            <div className="details-block">
              <h2 className="details__h2">Problem</h2>
              <p className="details__text">{details?.problem}</p>
            </div>

            <div className="details-block">
              <h2 className="details__h2">Solution</h2>
              <p className="details__text">{details?.solution}</p>
            </div>

            <div className="details-block details-block--full">
              <h2 className="details__h2">Key Features</h2>
              <ul className="details-list">
                {(details?.features || []).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {details?.images && details.images.length > 0 ? (
  <div className="details-block details-block--full">
    <h2 className="details__h2">Screenshots</h2>

    <div className="details-images-grid">
      {details.images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} screenshot ${index + 1}`}
          loading="lazy"
          className="details-image"
        />
      ))}
    </div>
  </div>
) : null}

          </div>
        </article>

        <div className="details-footer">
          {/* Back to home top */}
          <button className="btn btn--glass" onClick={() => navigate("/", { state: { scrollTo: "home" } })}>
            Back to Home
          </button>

          {/* See all projects should go to projects section */}
          <button className="btn btn--glass" onClick={() => navigate("/", { state: { scrollTo: "projects" } })}>
            See all projects
          </button>
        </div>
      </div>
    </section>
  );
}
