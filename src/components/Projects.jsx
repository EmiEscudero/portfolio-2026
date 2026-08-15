import SectionHeader from './SectionHeader'

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
            <ul className="tag-list">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
