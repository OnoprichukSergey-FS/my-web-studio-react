import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta-panel reveal-up">
          <div className="footer-cta-copy">
            <p className="footer-kicker">Onoprichuk Web Studio</p>
            <h2>
              Built for businesses that want to be taken seriously online.
            </h2>
            <p>
              Clean design, stronger structure, and a more polished first
              impression for businesses that need a better online presence.
            </p>
          </div>

          <div className="footer-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link to="/work" className="btn btn-secondary">
              View Work
            </Link>
          </div>
        </div>

        <div className="footer-inner">
          <div className="footer-brand">
            <p className="footer-brand-name">© {year} Onoprichuk Web Studio</p>
            <p className="footer-brand-location">Orlando, Florida</p>
            <a
              href="https://onoprichukwebstudio.com"
              target="_blank"
              rel="noreferrer"
              className="footer-site-link"
            >
              onoprichukwebstudio.com
            </a>
          </div>

          <div className="footer-links-wrap">
            <div className="footer-links">
              <Link to="/work">Work</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="#top">Back to top</a>
            </div>

            <p className="footer-credit">
              Websites designed to elevate how businesses are seen online.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
