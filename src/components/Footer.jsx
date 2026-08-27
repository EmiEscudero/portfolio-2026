function Footer({ footer, profile }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-signature">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <span
            className="footer-easter-egg"
            role="img"
            aria-label={footer.easterEggLabel}
            title={footer.easterEggLabel}
          >
            <span aria-hidden="true">|</span>
            <span aria-hidden="true">-</span>
            <span aria-hidden="true">/</span>
          </span>
        </div>
        <p>{footer.note}</p>
        <a href="#top">
          {footer.backToTop}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
