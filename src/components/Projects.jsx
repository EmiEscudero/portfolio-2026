import { projects } from '../data/content'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
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
