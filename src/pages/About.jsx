import { Link } from "react-router-dom";

function About() {
  return (
    <main id="top">
      <section className="page-hero about-hero">
        <div className="container about-hero-layout">
          <div className="about-hero-copy reveal-up">
            <p className="section-kicker">About the Studio</p>

            <h1>
              A personal web studio built around clean design, real business
              needs, and polished online presence.
            </h1>

            <p>
              Onoprichuk Web Studio helps small businesses create websites that
              feel more professional, clear, and trustworthy from the first
              impression.
            </p>
          </div>

          <div className="about-hero-image reveal-up reveal-delay-1">
            <img
              src="/sergey-founder.jpg"
              alt="Sergey from Onoprichuk Web Studio"
            />
          </div>
        </div>
      </section>

      <section className="section about-founder-section">
        <div className="container">
          <div className="about-founder-card reveal-up">
            <div className="about-founder-label">
              <span>Founder / Designer / Developer</span>
            </div>

            <div className="about-founder-content">
              <h2>Hi, I’m Sergey.</h2>

              <p>
                I’m the designer and developer behind Onoprichuk Web Studio. I
                have about three years of hands-on experience working with front
                end development, back end development, APIs, mobile apps, and
                custom website builds.
              </p>

              <p>
                My focus is creating clean, modern websites that help small
                businesses look more established online. I care about structure,
                spacing, mobile polish, clear messaging, and making the final
                site feel aligned with the quality of the business behind it.
              </p>

              <p>
                Instead of using a generic template, I build with the business
                in mind — what they offer, who they serve, and how their website
                should make people feel when they land on it.
              </p>

              <div className="about-founder-actions">
                <Link to="/work" className="btn btn-secondary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt about-skills-section">
        <div className="container">
          <div className="home-section-heading reveal-up">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">
              A mix of design, development, and real project experience
            </h2>
            <p className="section-subtitle">
              I work across the parts of a website that matter most: how it
              looks, how it works, how it feels on mobile, and how clearly it
              presents the business.
            </p>
          </div>

          <div className="about-skills-grid">
            <article className="about-skill-card reveal-up reveal-delay-1">
              <span>01</span>
              <h3>Front End Development</h3>
              <p>
                Building responsive, polished interfaces with clean layouts,
                smooth styling, and strong attention to how the site feels
                across screen sizes.
              </p>
            </article>

            <article className="about-skill-card reveal-up reveal-delay-2">
              <span>02</span>
              <h3>Back End & APIs</h3>
              <p>
                Experience connecting websites to data, routes, forms, external
                services, APIs, and back end logic when a project needs more
                than a static page.
              </p>
            </article>

            <article className="about-skill-card reveal-up reveal-delay-3">
              <span>03</span>
              <h3>Mobile App Experience</h3>
              <p>
                Hands-on experience with mobile app concepts and mobile-first
                thinking, which helps every website feel cleaner and easier to
                use on phones.
              </p>
            </article>

            <article className="about-skill-card reveal-up reveal-delay-1">
              <span>04</span>
              <h3>Business-Focused Design</h3>
              <p>
                Designing pages around clarity, trust, service presentation, and
                the first impression a potential customer gets from the brand.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-approach-section">
        <div className="container">
          <div className="about-approach-grid">
            <div className="about-approach-copy reveal-up">
              <p className="section-kicker">My Approach</p>
              <h2 className="section-title">
                Simple, modern, and built to make your business look stronger.
              </h2>
            </div>

            <div className="about-approach-list reveal-up reveal-delay-1">
              <div>
                <h3>Clean over cluttered</h3>
                <p>
                  I focus on strong spacing, clear sections, and a layout that
                  feels easy to understand.
                </p>
              </div>

              <div>
                <h3>Polished but not overwhelming</h3>
                <p>
                  The goal is not random effects. The goal is a website that
                  feels professional, trustworthy, and intentional.
                </p>
              </div>

              <div>
                <h3>Built around your business</h3>
                <p>
                  Every page should help people understand what you offer and
                  why they should trust you.
                </p>
              </div>
            </div>
          </div>

          <div className="about-final-cta reveal-up">
            <p className="section-kicker">Ready when you are</p>
            <h2>
              If your website does not reflect the quality of your business, I
              can help.
            </h2>

            <div className="about-final-actions">
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

export default About;
