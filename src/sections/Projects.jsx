import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  const handleViewDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Selected work across full-stack apps, real-time systems, and data workflows.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card glass">
              <div className="project-card__top">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.shortDescription}</p>
              </div>

              <ul className="tags" aria-label={`${project.title} tech stack`}>
                {project.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="project-card__actions">
                <button
                  type="button"
                  className="btn btn--glass"
                  onClick={() => handleViewDetails(project.id)}
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </button>

                {project.liveUrl ? (
                  <a
                    className="btn btn--primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live preview for ${project.title}`}
                  >
                    Live Preview
                  </a>
                ) : (
                  <span className="project-card__nolink" aria-label="No live preview available">
                    No live link yet
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
