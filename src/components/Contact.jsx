import { useEffect, useRef, useState } from 'react'
import { LuCheck, LuCopy } from 'react-icons/lu'
import SectionHeader from './SectionHeader'
import { SocialIcon } from './Icons'

function Contact({ contact, profile, section }) {
  const [copyState, setCopyState] = useState('idle')
  const resetTimerRef = useRef(null)

  useEffect(
    () => () => {
      window.clearTimeout(resetTimerRef.current)
    },
    [],
  )

  const handleCopyEmail = async () => {
    window.clearTimeout(resetTimerRef.current)

    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    resetTimerRef.current = window.setTimeout(() => setCopyState('idle'), 2400)
  }

  const copyStatus =
    copyState === 'copied'
      ? contact.copyEmailSuccess
      : copyState === 'error'
        ? contact.copyEmailError
        : ''

  return (
    <section id="contact" className="section section-contact">
      <div className="contact-glow" aria-hidden="true" />
      <SectionHeader section={section} />
      <div className="contact-layout">
        <p>{contact.body}</p>
        <div className="contact-connect">
          <div className="contact-actions">
            <div className="email-action-group">
              <a className="button button-primary email-link" href={`mailto:${profile.email}`}>
                <span>
                  <small>{contact.emailAction}</small>
                  {profile.email}
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                className="copy-email-button"
                aria-label={contact.copyEmailAction}
                title={copyState === 'copied' ? contact.copyEmailSuccess : contact.copyEmailAction}
                onClick={handleCopyEmail}
              >
                {copyState === 'copied' ? (
                  <LuCheck aria-hidden="true" focusable="false" />
                ) : (
                  <LuCopy aria-hidden="true" focusable="false" />
                )}
              </button>
            </div>
            <span className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
              {copyStatus}
            </span>
          </div>

          <div className="social-media">
            <p className="social-media-title">{contact.socialTitle}</p>
            <ul className="social-list">
              {profile.socials.map((social) => (
                <li key={social.id}>
                  {social.href ? (
                    <a
                      className="social-link"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} — ${contact.opensNewTab}`}
                    >
                      <SocialIcon id={social.id} />
                      <span>{social.label}</span>
                    </a>
                  ) : (
                    <span className="social-link social-link-unavailable" title={contact.socialUnavailable}>
                      <SocialIcon id={social.id} />
                      <span>{social.label}</span>
                      <span className="visually-hidden"> — {contact.socialUnavailable}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
