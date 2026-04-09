import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => setNavOpen(false);

  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header premium-header">
      <div className="container header-inner premium-header-inner">
        <NavLink
          to="/"
          className="logo premium-logo"
          aria-label="Onoprichuk Web Studio home"
          onClick={closeMenu}
        >
          <img
            src="/logo_dark.png"
            alt="Onoprichuk Web Studio"
            className="site-logo premium-site-logo"
          />

          <div className="logo-text-lockup">
            <span className="logo-kicker">Orlando Web Studio</span>
            <span className="logo-name">Onoprichuk Web Studio</span>
          </div>
        </NavLink>

        <nav className="nav premium-nav">
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            ☰
          </button>

          <ul
            className={`nav-links premium-nav-links ${navOpen ? "show" : ""}`}
          >
            <li>
              <NavLink to="/work" className={getNavClass} onClick={closeMenu}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={getNavClass}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getNavClass} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={getNavClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-cta premium-nav-cta"
                onClick={closeMenu}
              >
                Start a Project
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
