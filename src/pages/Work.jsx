import { Link } from "react-router-dom";

function Work() {
  return (
    <main id="top">
      <section className="page-hero work-page-hero">
        <div className="container work-hero-layout">
          <div className="work-hero-copy">
            <p className="section-kicker">Selected Work</p>
            <h1 className="section-title">
              Websites designed to elevate how businesses are seen online
            </h1>
            <p className="section-subtitle">
              A curated selection of projects built to improve presentation,
              strengthen trust, and give each business a clearer and more
              professional online presence.
            </p>
          </div>

          <div className="work-hero-side">
            <div className="work-hero-note">
              <span className="work-note-label">What I focus on</span>
              <p>
                Better structure, stronger messaging, cleaner presentation, and
                a site that feels more aligned with the quality of the business
                behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-editorial-section">
        <div className="container">
          <article className="editorial-project">
            <div className="editorial-project-media">
              <img
                src="/screenshots/torqueforge-home.png"
                alt="TorqueForge Auto website preview"
              />
            </div>

            <div className="editorial-project-content">
              <p className="editorial-project-label">Client Project</p>
              <h2>TorqueForge Auto</h2>

              <p className="editorial-project-lead">
                A bold, high-impact website built for an auto body shop that
                needed to look credible, capable, and easy to contact.
              </p>

              <div className="editorial-project-details">
                <div>
                  <span className="editorial-detail-title">Challenge</span>
                  <p>
                    The business needed a stronger online presence that made its
                    services feel clear, trustworthy, and professional from the
                    first impression.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Direction</span>
                  <p>
                    Dark, aggressive styling balanced with cleaner layout
                    structure, stronger hierarchy, and clear paths toward
                    estimate requests.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Outcome</span>
                  <p>
                    A more polished presentation that helps the business feel
                    more established and easier to trust online.
                  </p>
                </div>
              </div>

              <div className="project-tags editorial-tags">
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

          <article className="editorial-project editorial-project-reverse">
            <div className="editorial-project-media">
              <img
                src="/screenshots/orlando-beauty-home.png"
                alt="Orlando Beauty Studio website preview"
              />
            </div>

            <div className="editorial-project-content">
              <p className="editorial-project-label">Client Project</p>
              <h2>Orlando Beauty Studio</h2>

              <p className="editorial-project-lead">
                A refined beauty website designed to give the brand a more
                elevated, elegant, and booking-friendly online presence.
              </p>

              <div className="editorial-project-details">
                <div>
                  <span className="editorial-detail-title">Challenge</span>
                  <p>
                    The brand needed a site that presented services more
                    beautifully and reflected the premium quality of the
                    business.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Direction</span>
                  <p>
                    Softer visuals, better spacing, elegant typography, and a
                    calmer overall experience built around trust and beauty
                    brand presentation.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Outcome</span>
                  <p>
                    A more polished digital presence that supports bookings and
                    makes the business feel more established right away.
                  </p>
                </div>
              </div>

              <div className="project-tags editorial-tags">
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

          <article className="editorial-project">
            <div className="editorial-project-media">
              <img
                src="/screenshots/pawfect-home.png"
                alt="Pawfect Grooming website preview"
              />
            </div>

            <div className="editorial-project-content">
              <p className="editorial-project-label">Project Build</p>
              <h2>Pawfect Grooming</h2>

              <p className="editorial-project-lead">
                A friendly grooming website concept focused on clarity,
                approachability, and a booking-friendly customer experience.
              </p>

              <div className="editorial-project-details">
                <div>
                  <span className="editorial-detail-title">Challenge</span>
                  <p>
                    Build a service-business website that felt more trustworthy,
                    more welcoming, and easier for customers to understand.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Direction</span>
                  <p>
                    Softer presentation, structured sections, and cleaner visual
                    flow designed to guide customers naturally toward booking.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Outcome</span>
                  <p>
                    A concept that shows how stronger structure and more
                    polished presentation can instantly improve perceived
                    business quality.
                  </p>
                </div>
              </div>

              <div className="project-tags editorial-tags">
                <span>Pet business</span>
                <span>Clean UI</span>
                <span>Booking-focused</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://pawfectgrooming.netlify.app/"
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

          <div className="work-bottom-cta">
            <p className="section-kicker">Need something similar?</p>
            <h2 className="services-cta-title">
              Let’s create a site that makes your business feel more established
            </h2>
            <p className="section-subtitle">
              If your current website feels outdated, unclear, or weaker than
              your business deserves, I can help you build something more
              polished and more credible.
            </p>

            <div className="services-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;
