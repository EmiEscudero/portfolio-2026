import SectionHeader from './SectionHeader'

function Skills({ items, section }) {
  return (
    <section id="skills" className="section">
      <SectionHeader section={section} />
      <div className="card-grid skill-grid">
        {items.map((group, index) => (
          <article key={group.id} className="card skill-card">
            <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{group.category}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
