import { Link } from "react-router-dom";

function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-left">
            <p className="eyebrow">Freelance Web Developer · Orlando, FL</p>

            <h1>
              I design and build clean, modern websites for small businesses.
            </h1>

            <p className="hero-copy">
              Professional websites that look polished, work on every screen,
              and help your business make a stronger first impression online.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/work" className="btn btn-secondary">
                View Work
              </Link>
            </div>

            <div className="hero-points">
              <span>Custom small business websites</span>
              <span>Responsive design</span>
              <span>Fast and modern builds</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-panel">
              <p className="panel-label">Currently available for</p>

              <ul className="panel-list">
                <li>Business websites</li>
                <li>Landing pages</li>
                <li>Website redesigns</li>
                <li>Portfolio sites</li>
              </ul>

              <div className="panel-divider" />

              <p className="panel-contact">Best contact</p>

              <a
                href="mailto:hello@onoprichukwebstudio.com"
                className="panel-email"
              >
                hello@onoprichukwebstudio.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="featured-work">
        <div className="container">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">
            Recent projects and client-ready builds
          </h2>
          <p className="section-subtitle">
            A selection of small business websites built with a focus on strong
            presentation, clean structure, and a more polished online presence.
          </p>

          <div className="work-list">
            <article className="project-card">
              <div className="project-image">
                <img
                  src="/screenshots/torqueforge-home.png"
                  alt="TorqueForge Auto website preview"
                />
              </div>

              <div className="project-content">
                <p className="project-type">Client Project</p>
                <h3>TorqueForge Auto</h3>
                <p>
                  A bold auto body and collision repair website designed to feel
                  strong, trustworthy, and focused on leads.
                </p>

                <div className="project-tags">
                  <span>Automotive</span>
                  <span>Lead Focused</span>
                  <span>Custom Design</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://torqueforge-auto.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    View Project
                  </a>

                  <Link to="/contact" className="btn btn-primary btn-sm">
                    Request Similar
                  </Link>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img
                  src="/screenshots/orlando-beauty-home.png"
                  alt="Orlando Beauty Studio website preview"
                />
              </div>

              <div className="project-content">
                <p className="project-type">Client Project</p>
                <h3>Orlando Beauty Studio</h3>
                <p>
                  A soft, refined beauty website with elegant visuals, service
                  pages, and booking-focused navigation.
                </p>

                <div className="project-tags">
                  <span>Beauty Brand</span>
                  <span>Elegant Layout</span>
                  <span>Booking Ready</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://orlando-beauty-studio.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    View Project
                  </a>

                  <Link to="/contact" className="btn btn-primary btn-sm">
                    Request Similar
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="work-cta">
            <Link to="/work" className="btn btn-secondary">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-kicker">Services</p>
          <h2 className="section-title">What I can help you with</h2>

          <div className="services-grid">
            <article className="info-card">
              <span className="card-number">01</span>
              <h3>Small Business Websites</h3>
              <p>
                Custom websites for businesses that need a professional online
                presence and a clear place for customers to learn more or reach
                out.
              </p>
              <Link to="/services" className="card-link">
                View Services
              </Link>
            </article>

            <article className="info-card">
              <span className="card-number">02</span>
              <h3>Landing Pages</h3>
              <p>
                Focused single-page websites for new offers, promotions,
                services, or personal brands.
              </p>
              <Link to="/services" className="card-link">
                View Services
              </Link>
            </article>

            <article className="info-card">
              <span className="card-number">03</span>
              <h3>Website Refreshes</h3>
              <p>
                Design cleanups and layout improvements for websites that feel
                outdated, cluttered, or weak on mobile.
              </p>
              <Link to="/services" className="card-link">
                View Services
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Process</p>
          <h2 className="section-title">Simple and client-friendly</h2>

          <div className="process-list">
            <div className="process-item">
              <span>01</span>
              <div>
                <h3>Quick conversation</h3>
                <p>
                  You tell me what your business needs, what style you like, and
                  what pages or features you want.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>02</span>
              <div>
                <h3>Plan and quote</h3>
                <p>
                  I send a clear outline with scope, pricing, and timeline so
                  everything feels straightforward.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>03</span>
              <div>
                <h3>Build and review</h3>
                <p>
                  I design and build the website, then share it with you for
                  review and revisions.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>04</span>
              <div>
                <h3>Launch</h3>
                <p>
                  Once approved, I help launch the site and make sure it is
                  ready to be shared with customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
