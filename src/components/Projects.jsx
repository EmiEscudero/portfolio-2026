import SectionHeader from './SectionHeader'
import { SocialIcon, TechnologyIcon } from './Icons'

function Projects({ items, section }) {
  return (
    <section id="projects" className="section">
      <SectionHeader section={section} />
      <div className="card-grid project-grid">
        {items.map((project) => (
          <article key={project.id} className="card project-card">
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-signal" aria-hidden="true" />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-meta">
              <ul className="tag-list">
                {project.stack.map((tech) => (
                  <li key={tech.id}>
                    <TechnologyIcon id={tech.id} />
                    <span>{tech.label}</span>
                  </li>
                ))}
              </ul>
              {project.repository && (
                <a
                  className="project-repository-link"
                  href={project.repository.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.repository.ariaLabel}
                >
                  <SocialIcon id="github" />
                  <span>{project.repository.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
