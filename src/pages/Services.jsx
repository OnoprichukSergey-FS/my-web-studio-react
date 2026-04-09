import { Link } from "react-router-dom";

function Services() {
  return (
    <main id="top">
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Services</p>
          <h1 className="section-title">Clean websites for small businesses</h1>
          <p className="section-subtitle">
            Simple, polished web design focused on clarity, responsiveness, and
            a professional first impression.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-stack">
            <article className="service-block">
              <div className="service-block-top">
                <span className="service-number">01</span>
                <h2>Small Business Websites</h2>
              </div>

              <p className="service-lead">
                A full website for your business with the pages you need, a
                clear layout, and a more professional online presence.
              </p>

              <ul className="service-list">
                <li>Custom homepage design</li>
                <li>Mobile-friendly layout</li>
                <li>Service and contact pages</li>
                <li>Clean, modern presentation</li>
              </ul>
            </article>

            <article className="service-block">
              <div className="service-block-top">
                <span className="service-number">02</span>
                <h2>Landing Pages</h2>
              </div>

              <p className="service-lead">
                A focused page for a single offer, promotion, service, or local
                campaign that helps turn visitors into leads.
              </p>

              <ul className="service-list">
                <li>Single-page structure</li>
                <li>Strong call-to-action sections</li>
                <li>Fast and simple experience</li>
                <li>Great for ads or service offers</li>
              </ul>
            </article>

            <article className="service-block">
              <div className="service-block-top">
                <span className="service-number">03</span>
                <h2>Website Refreshes</h2>
              </div>

              <p className="service-lead">
                Improvements for websites that feel outdated, cluttered, or weak
                on mobile, without fully starting over.
              </p>

              <ul className="service-list">
                <li>Layout cleanup</li>
                <li>Better spacing and typography</li>
                <li>Mobile improvements</li>
                <li>Stronger visual presentation</li>
              </ul>
            </article>
          </div>

          <div className="services-cta-box">
            <p className="section-kicker">Need something similar?</p>
            <h2 className="services-cta-title">
              Let’s figure out what fits your business best.
            </h2>
            <p className="section-subtitle">
              If you already know what you need, great. If not, I can help you
              choose the right direction based on your business and goals.
            </p>

            <div className="services-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/work" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
