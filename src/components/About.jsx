import { about } from '../data/content'

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about-text">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
