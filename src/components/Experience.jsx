import { experience } from '../data/content'

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experience.map((job) => (
        <article key={job.role + job.org} className="card">
          <div className="card-header">
            <h3>{job.role}</h3>
            <span className="card-dates">{job.dates}</span>
          </div>
          <p className="card-subtitle">
            {job.org} · {job.location}
          </p>
          <ul>
            {job.bullets.map((bullet) => (
              <li key={bullet.slice(0, 20)}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Experience
