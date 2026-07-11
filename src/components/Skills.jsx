import { skills } from '../data/content'

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="card-grid">
        {skills.map((group) => (
          <div key={group.category} className="card">
            <h3>{group.category}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
