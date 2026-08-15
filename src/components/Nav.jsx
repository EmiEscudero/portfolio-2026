import { useEffect, useRef, useState } from 'react'

function Nav({
  controls,
  language,
  navLinks,
  onLanguageToggle,
  onThemeToggle,
  profile,
  theme,
}) {
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef(null)
  const menuButtonRef = useRef(null)
  const menuLabel = open ? controls.closeMenu : controls.openMenu
  const languageLabel =
    language === 'en' ? controls.languageToSpanish : controls.languageToEnglish
  const themeLabel = theme === 'light' ? controls.themeToDark : controls.themeToLight

  useEffect(() => {
    if (!open) return undefined

    firstLinkRef.current?.focus()

    const handleEscape = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          href="#top"
          className="nav-brand"
          aria-label={profile.shortName}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            EE
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav
          id="primary-navigation"
          aria-label={controls.navigationLabel}
          className={open ? 'nav-links nav-links-open' : 'nav-links'}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : null}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="preference-controls">
            <button
              type="button"
              className="preference-toggle language-toggle"
              aria-label={languageLabel}
              title={languageLabel}
              onClick={onLanguageToggle}
            >
              <span className={language === 'en' ? 'toggle-choice toggle-choice-active' : 'toggle-choice'}>
                {controls.english}
              </span>
              <span className="toggle-divider" aria-hidden="true">
                /
              </span>
              <span className={language === 'es' ? 'toggle-choice toggle-choice-active' : 'toggle-choice'}>
                {controls.spanish}
              </span>
            </button>

            <button
              type="button"
              className="preference-toggle theme-toggle"
              aria-label={themeLabel}
              title={themeLabel}
              onClick={onThemeToggle}
            >
              <span className={theme === 'light' ? 'toggle-choice toggle-choice-active' : 'toggle-choice'}>
                {controls.light}
              </span>
              <span className="toggle-divider" aria-hidden="true">
                /
              </span>
              <span className={theme === 'dark' ? 'toggle-choice toggle-choice-active' : 'toggle-choice'}>
                {controls.dark}
              </span>
            </button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={open ? 'nav-toggle nav-toggle-open' : 'nav-toggle'}
            aria-label={menuLabel}
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Nav
