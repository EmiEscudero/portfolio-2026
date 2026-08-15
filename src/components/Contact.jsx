import SectionHeader from './SectionHeader'

function Contact({ contact, profile, section }) {
  return (
    <section id="contact" className="section section-contact">
      <div className="contact-glow" aria-hidden="true" />
      <SectionHeader section={section} />
      <div className="contact-layout">
        <p>{contact.body}</p>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            <span>
              <small>{contact.emailAction}</small>
              {profile.email}
            </span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button-secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {contact.linkedinAction}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
