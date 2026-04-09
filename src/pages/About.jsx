import { Link } from "react-router-dom";

function About() {
  return (
    <main id="top">
      <section className="page-hero about-page-hero">
        <div className="container about-hero-layout">
          <div className="about-hero-copy">
            <p className="section-kicker">About</p>
            <h1 className="section-title">
              A clean, practical approach to websites that feel more credible
            </h1>
            <p className="section-subtitle">
              I build modern websites for small businesses that want to look
              more professional, present their services clearly, and make a
              stronger first impression online.
            </p>
          </div>

          <div className="about-hero-side">
            <div className="about-hero-note">
              <span className="about-note-label">What I care about</span>
              <p>
                Clear structure, thoughtful design, strong presentation, and a
                site that feels like it matches the quality of the business
                behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-editorial-section">
        <div className="container">
          <article className="about-editorial-block">
            <div className="about-editorial-number">01</div>

            <div className="about-editorial-main">
              <p className="about-editorial-label">Who I am</p>
              <h2>Focused on small business presentation</h2>
              <p className="about-editorial-lead">
                I’m Sergey Onoprichuk, a web developer based in Orlando,
                Florida. I focus on building clean, modern websites for small
                businesses that need a stronger and more professional online
                presence.
              </p>

              <div className="about-editorial-points">
                <div>
                  <span className="about-point-title">What I noticed</span>
                  <p>
                    Many small business websites do not fail because they lack
                    features — they fail because they feel outdated, cluttered,
                    or unclear.
                  </p>
                </div>

                <div>
                  <span className="about-point-title">What I focus on</span>
                  <p>
                    I help fix that through better structure, stronger visual
                    presentation, and a simpler path for customers to understand
                    the business and take action.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="about-editorial-block">
            <div className="about-editorial-number">02</div>

            <div className="about-editorial-main">
              <p className="about-editorial-label">Approach</p>
              <h2>Built around clarity, not unnecessary complexity</h2>
              <p className="about-editorial-lead">
                My goal is to make the process feel simple for clients while
                creating something that looks polished, modern, and easy to
                trust.
              </p>

              <div className="about-editorial-points">
                <div>
                  <span className="about-point-title">How I work</span>
                  <p>
                    I keep communication straightforward, focus on the
                    essentials, and avoid overcomplicating projects with things
                    that do not actually improve the result.
                  </p>
                </div>

                <div>
                  <span className="about-point-title">Why it matters</span>
                  <p>
                    A business website should not just exist — it should make
                    the business feel established, easier to understand, and
                    more credible right away.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <section className="about-editorial-grid">
            <article className="about-feature-card">
              <span className="about-feature-label">Based in</span>
              <h3>Orlando, FL</h3>
              <p>Local understanding with a modern digital-first approach.</p>
            </article>

            <article className="about-feature-card">
              <span className="about-feature-label">Focus</span>
              <h3>Small business websites</h3>
              <p>
                Especially service-based businesses that need stronger
                presentation online.
              </p>
            </article>

            <article className="about-feature-card">
              <span className="about-feature-label">Tools</span>
              <h3>React, JavaScript, HTML, CSS</h3>
              <p>
                Modern front-end development focused on clean, responsive
                builds.
              </p>
            </article>

            <article className="about-feature-card">
              <span className="about-feature-label">Goal</span>
              <h3>Make your business look more established</h3>
              <p>
                Better structure, stronger visuals, and a more polished online
                presence.
              </p>
            </article>
          </section>

          <div className="about-editorial-cta">
            <p className="section-kicker">Next step</p>
            <h2 className="services-cta-title">
              Let’s build something that feels like a better fit for your
              business
            </h2>
            <p className="section-subtitle">
              Whether you need a new website or want to improve the one you
              already have, I can help you create something that feels clearer,
              more modern, and more credible.
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

export default About;
