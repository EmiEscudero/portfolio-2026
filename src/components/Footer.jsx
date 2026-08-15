function Footer({ footer, profile }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
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
