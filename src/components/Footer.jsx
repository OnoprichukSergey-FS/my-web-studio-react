import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Onoprichuk Web Studio</p>

        <div className="footer-links">
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
