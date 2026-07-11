import { certifications, education } from '../data/content'

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <ul className="plain-list">
        {education.map((item) => (
          <li key={item.program}>
            <div className="list-row">
              <strong>{item.program}</strong>
              <span className="card-dates">{item.dates}</span>
            </div>
            <p className="card-subtitle">{item.school}</p>
          </li>
        ))}
      </ul>

      <h3 className="subsection-heading">Certifications</h3>
      <ul className="plain-list">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  )
}

export default Education
