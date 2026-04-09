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
              A curated selection of projects built to improve clarity,
              presentation, trust, and the overall first impression a business
              makes online.
            </p>
          </div>

          <div className="work-hero-side">
            <div className="work-hero-note">
              <span className="work-note-label">What I focus on</span>
              <p>
                Clean design, stronger structure, better service presentation,
                and a more polished online presence for real businesses.
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
                  <span className="editorial-detail-title">Goal</span>
                  <p>
                    Create a stronger online presence that clearly presents
                    services and encourages estimate requests.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Direction</span>
                  <p>
                    Dark, aggressive visual styling balanced with a clean layout
                    and clear structure for trust and readability.
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
                A softer, more refined website designed to give a beauty brand a
                more premium and professional presentation online.
              </p>

              <div className="editorial-project-details">
                <div>
                  <span className="editorial-detail-title">Goal</span>
                  <p>
                    Present services more elegantly, support bookings, and make
                    the brand feel more polished and established.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Direction</span>
                  <p>
                    Calm visuals, better spacing, elegant typography, and a more
                    elevated user experience overall.
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
                  <span className="editorial-detail-title">Goal</span>
                  <p>
                    Build a cleaner, more trustworthy service-business website
                    that feels welcoming and easy to use.
                  </p>
                </div>

                <div>
                  <span className="editorial-detail-title">Direction</span>
                  <p>
                    Soft presentation, structured sections, and a layout
                    designed to guide customers naturally toward booking.
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
              Let’s create a site that makes your business feel more
              established.
            </h2>
            <p className="section-subtitle">
              Whether you need a fresh start or a stronger redesign, I can help
              you build a website that feels clear, modern, and credible.
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
