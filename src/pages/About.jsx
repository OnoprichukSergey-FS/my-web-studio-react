import { Link } from "react-router-dom";

function About() {
  return (
    <main id="top">
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">About</p>
          <h1 className="section-title">A clean, practical approach</h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <div className="about-main">
            <p>
              I’m Sergey Onoprichuk, a web developer based in Orlando, Florida.
              I build modern websites with a focus on clarity, responsiveness,
              and polished presentation.
            </p>

            <p>
              My goal is to make the process simple for clients. I like keeping
              communication clear, avoiding unnecessary complexity, and building
              websites that feel professional and easy to use.
            </p>

            <p>
              I focus mainly on small business websites, landing pages, and site
              refreshes for brands that want a stronger online presence without
              overcomplicating things.
            </p>

            <div className="about-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
            </div>
          </div>

          <aside className="about-side">
            <div className="about-box">
              <p>Based in Orlando, FL</p>
              <p>Focused on small business websites</p>
              <p>React, JavaScript, HTML, CSS</p>
              <p>Netlify deployment</p>
              <p>Available for freelance work</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default About;
