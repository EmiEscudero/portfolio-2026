import SectionHeader from './SectionHeader'

function Experience({ items, section }) {
  return (
    <section id="experience" className="section">
      <SectionHeader section={section} />
      <div className="experience-list">
        {items.map((job) => (
          <article key={job.id} className="card experience-card">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="card-header">
              <div>
                <h3>{job.role}</h3>
                <p className="card-subtitle">
                  {job.org}
                  {' · '}
                  {job.location}
                </p>
              </div>
              <span className="card-dates">{job.dates}</span>
            </div>
            <ul className="experience-bullets">
              {job.bullets.map((bullet, index) => (
                <li key={`${job.id}-${index}`}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
