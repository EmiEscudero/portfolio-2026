import { useState } from 'react'
import { navLinks, profile } from '../data/content'

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          {profile.name.split(' ').slice(0, 2).join(' ')}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'nav-links nav-links-open' : 'nav-links'}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav
