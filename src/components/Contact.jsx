import { profile } from '../data/content'

function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <h2>Contact</h2>
      <p>Open to roles in data science, ML, and LLM/GenAI engineering.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a
          className="button button-secondary"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
