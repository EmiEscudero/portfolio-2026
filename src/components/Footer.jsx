import { profile } from '../data/content'

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}

export default Footer
