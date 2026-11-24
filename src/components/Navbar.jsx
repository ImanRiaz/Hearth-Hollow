import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Leaf, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="site-navbar" aria-label="Primary navigation">
      <div className="navbar-inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Hearth & Hollow home">
          <span className="brand-mark"><Leaf size={18} /></span>
          Hearth &amp; Hollow
        </Link>
        <button className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Discover</NavLink>
          <NavLink to="/stays" onClick={closeMenu}>Find a stay</NavLink>
          <NavLink className="nav-cta" to="/plan" onClick={closeMenu}>Plan a trip</NavLink>
        </div>
      </div>
    </nav>
  )
}
