import { profile } from '../data/content'

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">{profile.title} · {profile.location}</p>
      <h1>{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a
          className="button button-secondary"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="button button-secondary" href="#projects">
          See projects
        </a>
      </div>
    </section>
  )
}

export default Hero
