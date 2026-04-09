import { Link } from "react-router-dom";

function Work() {
  return (
    <main id="top">
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Selected Work</p>
          <h1 className="section-title">Real projects and recent builds</h1>
          <p className="section-subtitle">
            A selection of small business websites built with a focus on
            clarity, strong presentation, and client-friendly design.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
                  A bold auto body and collision repair website built to feel
                  strong, modern, and trustworthy, with clear service sections
                  and lead-focused calls to action.
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
                  A soft, elegant beauty website designed to feel calm and
                  refined, with service pages, booking access, and a more
                  premium small-business presentation.
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

            <article className="project-card">
              <div className="project-image">
                <img
                  src="/screenshots/pawfect-home.png"
                  alt="Pawfect Grooming website preview"
                />
              </div>

              <div className="project-content">
                <p className="project-type">Project Build</p>
                <h3>Pawfect Grooming</h3>
                <p>
                  A friendly grooming website with a clean booking-focused
                  layout, designed to feel approachable, easy to use, and ideal
                  for a local pet service business.
                </p>

                <div className="project-tags">
                  <span>Pet Business</span>
                  <span>Clean UI</span>
                  <span>Booking Focused</span>
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;
