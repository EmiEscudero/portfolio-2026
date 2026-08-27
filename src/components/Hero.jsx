function Hero({ hero, profile }) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <p className="hero-discipline">
            {profile.title}
            {' · '}
            {hero.eyebrow}
          </p>
          <h1 id="hero-title">
            <span>{profile.nameLines[0]}</span>
            <span className="hero-name-accent">{profile.nameLines[1]}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {hero.projectsAction}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="hero-console" aria-label={hero.panelLabel}>
          <div className="console-header">
            <span className="console-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{hero.panelFile}</span>
            <span className="console-connection" aria-hidden="true" />
          </div>
          <div className="console-body">
            <p className="console-comment">{hero.panelComment}</p>
            <dl className="console-signals">
              {hero.signals.map((signal) => (
                <div key={signal.id} className="console-row">
                  <dt>{signal.label}</dt>
                  <dd>
                    {signal.active && <span className="console-live-dot" aria-hidden="true" />}
                    {signal.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="signal-bars" aria-hidden="true">
              {[34, 58, 46, 76, 64, 88, 54, 72, 94, 66, 82, 100].map((height, index) => (
                <span key={`${height}-${index}`} style={{ '--signal-height': `${height}%` }} />
              ))}
            </div>
            <p className="console-footer">
              <span>01</span>
              {hero.panelFooter}
            </p>
          </div>
        </aside>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>{hero.scrollLabel}</span>
        <i />
      </div>
    </section>
  )
}

export default Hero
