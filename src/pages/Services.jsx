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
                that feels like it properly reflects the quality of your
                business.
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
                present your services clearly, improve trust, and make a much
                stronger first impression online.
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
                  <span className="editorial-point-title">What improves</span>
                  <p>
                    Clearer structure, stronger service presentation, better
                    mobile experience, and a more polished overall brand feel.
                  </p>
                </div>
              </div>

              <ul className="editorial-service-list">
                <li>Custom homepage design</li>
                <li>Service and contact pages</li>
                <li>Mobile-friendly layout</li>
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
                designed to guide attention quickly and turn interest into real
                inquiries.
              </p>

              <div className="editorial-service-points">
                <div>
                  <span className="editorial-point-title">Best for</span>
                  <p>
                    Promotions, new offers, seasonal services, ad traffic, or
                    businesses that need a simpler but stronger online presence.
                  </p>
                </div>

                <div>
                  <span className="editorial-point-title">What improves</span>
                  <p>
                    Stronger calls to action, clearer content flow, and a more
                    direct path from visitor interest to contact.
                  </p>
                </div>
              </div>

              <ul className="editorial-service-list">
                <li>Simple, high-conversion layout</li>
                <li>Focused service messaging</li>
                <li>Fast and distraction-free experience</li>
                <li>Great for campaigns and promotions</li>
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
                feel more modern, more polished, and easier to trust.
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
                  <span className="editorial-point-title">What improves</span>
                  <p>
                    Layout clarity, spacing, typography, visual polish, and the
                    overall way your business is perceived online.
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
            <p className="section-kicker">Next Step</p>
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
