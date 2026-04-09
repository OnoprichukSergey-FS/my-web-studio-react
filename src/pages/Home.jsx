import { Link } from "react-router-dom";

function Home() {
  return (
    <main id="top">
      <section className="hero hero-premium">
        <div className="container hero-premium-layout">
          <div className="hero-premium-copy">
            <p className="eyebrow">Freelance Web Studio · Orlando, FL</p>

            <div className="hero-badge-row">
              <span className="hero-badge">Client-focused websites</span>
              <span className="hero-badge">Modern design</span>
            </div>

            <h1>
              Websites that make your business feel
              <span className="hero-highlight"> more established</span>
            </h1>

            <p className="hero-copy">
              I design and build polished websites for small businesses that
              want to look professional, earn trust faster, and turn more
              visitors into real inquiries.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>

              <Link to="/work" className="btn btn-secondary">
                View Work
              </Link>
            </div>

            <div className="hero-stat-row">
              <div className="hero-stat-card">
                <strong>Small business focus</strong>
                <span>Built for service-based brands and local businesses</span>
              </div>

              <div className="hero-stat-card">
                <strong>Modern presentation</strong>
                <span>Clear structure, mobile-friendly, polished visuals</span>
              </div>
            </div>
          </div>

          <div className="hero-premium-visual">
            <div className="hero-showcase-card hero-showcase-main">
              <div className="hero-showcase-top">
                <span className="hero-window-dot" />
                <span className="hero-window-dot" />
                <span className="hero-window-dot" />
              </div>

              <div className="hero-showcase-content">
                <p className="hero-showcase-label">Featured build</p>
                <h3>Modern websites for real businesses</h3>
                <p>
                  Clean design, stronger trust, and a more professional online
                  presence.
                </p>

                <div className="hero-mini-tags">
                  <span>Custom-built</span>
                  <span>Responsive</span>
                  <span>Lead-focused</span>
                </div>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-one">
              <span className="hero-floating-title">Best for</span>
              <p>Beauty brands, local services, auto shops, studios</p>
            </div>

            <div className="hero-floating-card hero-floating-card-two">
              <span className="hero-floating-title">What clients need</span>
              <p>A site that looks credible before anyone even calls</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="featured-work">
        <div className="container">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">
            Real projects built for real businesses
          </h2>
          <p className="section-subtitle">
            A selection of client-focused websites designed to improve clarity,
            presentation, and trust — not just look good.
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
                  A bold, high-impact website for an auto body shop focused on
                  building trust, showcasing services clearly, and driving
                  estimate requests.
                </p>

                <div className="project-tags">
                  <span>Automotive</span>
                  <span>Lead-focused</span>
                  <span>Custom design</span>
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
                  A soft, elegant website designed to reflect a premium beauty
                  brand, improve service presentation, and support online
                  bookings.
                </p>

                <div className="project-tags">
                  <span>Beauty brand</span>
                  <span>Elegant layout</span>
                  <span>Booking-ready</span>
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
          <p className="section-subtitle">
            Clear, modern websites that make your business look more polished
            and make it easier for customers to trust you.
          </p>

          <div className="services-grid">
            <article className="info-card">
              <span className="card-number">01</span>
              <h3>Small Business Websites</h3>
              <p>
                Complete websites designed to give your business a stronger
                online presence and a more professional first impression.
              </p>
              <Link to="/services" className="card-link">
                View Services
              </Link>
            </article>

            <article className="info-card">
              <span className="card-number">02</span>
              <h3>Landing Pages</h3>
              <p>
                Focused pages built around one service, offer, or campaign to
                help turn visitors into real inquiries.
              </p>
              <Link to="/services" className="card-link">
                View Services
              </Link>
            </article>

            <article className="info-card">
              <span className="card-number">03</span>
              <h3>Website Refreshes</h3>
              <p>
                Strategic visual and layout updates for websites that feel
                outdated, cluttered, or underwhelming on mobile.
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
