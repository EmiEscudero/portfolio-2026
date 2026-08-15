import SectionHeader from './SectionHeader'

function Education({ certifications, items, section }) {
  return (
    <section id="education" className="section">
      <SectionHeader section={section} />
      <div className="education-layout">
        <ol className="education-list">
          {items.map((item, index) => (
            <li key={item.id}>
              <span className="education-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="education-content">
                <div className="list-row">
                  <h3>{item.program}</h3>
                  <span className="card-dates">{item.dates}</span>
                </div>
                <p className="card-subtitle">{item.school}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="certification-panel">
          <p className="certification-label">{section.certificationsTitle}</p>
          <ul>
            {certifications.map((cert) => (
              <li key={cert.id}>
                <span aria-hidden="true">↗</span>
                {cert.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Education
