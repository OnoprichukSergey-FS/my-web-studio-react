import { Link } from "react-router-dom";

function Services() {
  return (
    <main id="top">
      <section className="page-hero services-page-hero">
        <div className="container services-hero-layout">
          <div className="services-hero-copy">
            <p className="section-kicker">Services</p>
            <h1 className="section-title">
              Websites built to make your business look more established
            </h1>
            <p className="section-subtitle">
              Every project is designed to improve how your business is
              presented online — with clearer structure, stronger visuals, and a
              more professional first impression.
            </p>
          </div>

          <div className="services-hero-side">
            <div className="services-hero-note">
              <span className="services-note-label">What this means</span>
              <p>
                Better presentation, more trust, easier navigation, and a site
                that feels like it matches the quality of your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-editorial-section">
        <div className="container">
          <article className="editorial-service">
            <div className="editorial-service-number">01</div>

            <div className="editorial-service-main">
              <p className="editorial-service-label">Core Service</p>
              <h2>Small Business Websites</h2>
              <p className="editorial-service-lead">
                A complete website tailored to your business, designed to
                clearly explain what you do, present your services well, and
                make a much stronger first impression.
              </p>

              <div className="editorial-service-points">
                <div>
                  <span className="editorial-point-title">Best for</span>
                  <p>
                    Local businesses, service providers, studios, shops, and
                    brands that need a real professional online presence.
                  </p>
                </div>

                <div>
                  <span className="editorial-point-title">Includes</span>
                  <p>
                    Custom homepage design, service pages, contact sections,
                    mobile-friendly layout, and a cleaner overall presentation.
                  </p>
                </div>
              </div>

              <ul className="editorial-service-list">
                <li>Custom homepage design</li>
                <li>Mobile-friendly layout</li>
                <li>Service and contact pages</li>
                <li>Clear, modern structure</li>
              </ul>
            </div>
          </article>

          <article className="editorial-service">
            <div className="editorial-service-number">02</div>

            <div className="editorial-service-main">
              <p className="editorial-service-label">Focused Offer</p>
              <h2>Landing Pages</h2>
              <p className="editorial-service-lead">
                Focused pages built around one service, offer, or campaign —
                designed to guide visitors quickly and turn attention into real
                inquiries.
              </p>

              <div className="editorial-service-points">
                <div>
                  <span className="editorial-point-title">Best for</span>
                  <p>
                    Promotions, new offers, ad traffic, seasonal services, or
                    businesses that need a simpler website structure.
                  </p>
                </div>

                <div>
                  <span className="editorial-point-title">Includes</span>
                  <p>
                    A strong call-to-action structure, focused content flow, and
                    a cleaner path from interest to contact.
                  </p>
                </div>
              </div>

              <ul className="editorial-service-list">
                <li>Simple, high-conversion layout</li>
                <li>Strong call-to-action sections</li>
                <li>Fast and distraction-free experience</li>
                <li>Great for ads or promotions</li>
              </ul>
            </div>
          </article>

          <article className="editorial-service">
            <div className="editorial-service-number">03</div>

            <div className="editorial-service-main">
              <p className="editorial-service-label">Refinement</p>
              <h2>Website Refreshes</h2>
              <p className="editorial-service-lead">
                Improve your current website without starting from scratch.
                Ideal for businesses that already have a site but need it to
                feel more modern, more polished, and more trustworthy.
              </p>

              <div className="editorial-service-points">
                <div>
                  <span className="editorial-point-title">Best for</span>
                  <p>
                    Websites that feel outdated, cluttered, weak on mobile, or
                    no longer reflect the quality of the business behind them.
                  </p>
                </div>

                <div>
                  <span className="editorial-point-title">Includes</span>
                  <p>
                    Layout cleanup, stronger typography, better spacing, visual
                    polish, and mobile-focused improvements.
                  </p>
                </div>
              </div>

              <ul className="editorial-service-list">
                <li>Layout and spacing improvements</li>
                <li>Typography and visual cleanup</li>
                <li>Mobile optimization</li>
                <li>Stronger overall presentation</li>
              </ul>
            </div>
          </article>

          <div className="services-editorial-cta">
            <p className="section-kicker">Next step</p>
            <h2 className="services-cta-title">
              Let’s build something that fits your business properly
            </h2>
            <p className="section-subtitle">
              Whether you need a full website, a focused landing page, or a
              stronger redesign, I can help you create something that feels
              clear, modern, and more credible.
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
