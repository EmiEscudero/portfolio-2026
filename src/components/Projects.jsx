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
            {project.context && <div className="project-context">{project.context}</div>}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.contribution && (
              <div className="project-contribution">
                <h4>{section.contributionLabel}</h4>
                <p>{project.contribution}</p>
              </div>
            )}
            <div className="project-meta">
              <ul className="tag-list">
                {project.stack.map((tech) => (
                  <li key={tech.id}>
                    <TechnologyIcon id={tech.id} />
                    <span>{tech.label}</span>
                  </li>
                ))}
              </ul>
              <div className="project-links">
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
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    className="project-repository-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
