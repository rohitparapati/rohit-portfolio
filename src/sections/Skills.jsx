import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">
          A quick snapshot of what I use to build and ship products.
        </p>

        {/* Grid of categories */}
        <div className="skills-grid">
          {skillsData.map((group) => (
            <article key={group.category} className="skills-card glass">
              <h3 className="skills-card__title">{group.category}</h3>

              {/* Chips */}
              <ul className="skills-chips" aria-label={`${group.category} skills`}>
                {group.items.map((skill) => (
                  <li key={skill} className="skill-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
