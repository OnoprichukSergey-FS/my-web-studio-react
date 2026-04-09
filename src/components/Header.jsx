import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => setNavOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Onoprichuk Web Studio home">
          <img
            src="/logo_dark.png"
            alt="Onoprichuk Web Studio"
            className="site-logo"
          />
        </Link>

        <nav className="nav">
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            ☰
          </button>

          <ul className={`nav-links ${navOpen ? "show" : ""}`}>
            <li>
              <Link to="/work" onClick={closeMenu}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-cta" onClick={closeMenu}>
                Start a Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
