import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/"><span className="brand-mark"><Leaf size={18} /></span>Hearth &amp; Hollow</Link>
            <p>Exceptional stays, naturally connected.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <Link to="/stays">All stays</Link>
              <Link to="/plan">Plan a trip</Link>
            </div>
          </div>
          <div>
            <h4>Our values</h4>
            <div className="footer-links">
              <Link to="/#nature">Nature first</Link>
              <Link to="/#hosts">Thoughtful hosts</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Hearth &amp; Hollow. Crafted for meaningful escapes.</div>
      </div>
    </footer>
  )
}
