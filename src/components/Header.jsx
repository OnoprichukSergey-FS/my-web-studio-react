import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => setNavOpen(false);

  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="site-header premium-header">
      <div className="container header-inner premium-header-inner">
        <Link
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
        </Link>

        <nav className="nav premium-nav" aria-label="Main navigation">
          <button
            className={`nav-toggle ${navOpen ? "open" : ""}`}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
            type="button"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul
            id="primary-navigation"
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

            <li className="nav-cta-item">
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
