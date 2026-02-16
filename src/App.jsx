import React, { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const year = new Date().getFullYear();

  const handleNavClick = (e) => {
    if (e.target.tagName === "A") {
      setNavOpen(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <div className="logo-wrap">
              <img src="/mylogo.png" alt="AnyTimeGift LLC logo" />
              <span className="logo-text">
                Sergey Onoprichuk <br />
                <small>AnyTimeGift LLC</small>
              </span>
            </div>
          </a>

          <nav className="nav">
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              ☰
            </button>

            <ul
              className={`nav-links ${navOpen ? "show" : ""}`}
              id="navLinks"
              onClick={handleNavClick}
            >
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#stack">Stack</a>
              </li>

              <li>
                <a href="#work">Work</a>
              </li>

              <li>
                <a href="#process">Process</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#contact" className="btn-primary nav-cta">
                  Work With Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">Full-Stack Web Developer • Orlando, FL</p>

              <h1>I build modern, fast websites and web apps.</h1>

              <p className="hero-subtitle">
                Clean UI, responsive layouts, and real-world features — built
                with React, JavaScript, and production-friendly tools like
                Netlify.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  Start a Project
                </a>
                <a href="#work" className="btn-secondary">
                  View My Work
                </a>
              </div>

              <div className="hero-tags">
                <span>Responsive design</span>
                <span>Performance focused</span>
                <span>Netlify &amp; SEO friendly</span>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-photo-wrapper">
                <img
                  src="/portrait.png"
                  alt="Sergey Onoprichuk – Web Developer"
                  className="hero-photo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section" id="stack">
          <div className="container">
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">
              Tools I use to build modern, responsive, production-ready
              projects.
            </p>

            <div className="stack-grid">
              <article className="stack-card">
                <h3>Frontend</h3>
                <p className="stack-note">
                  UI, components, layout, interactivity
                </p>
                <div className="chips">
                  <span className="chip">React</span>
                  <span className="chip">JavaScript</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </article>

              <article className="stack-card">
                <h3>Backend</h3>
                <p className="stack-note">
                  APIs, data, authentication patterns
                </p>
                <div className="chips">
                  <span className="chip">Node.js</span>
                  <span className="chip">Express</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">REST APIs</span>
                </div>
              </article>

              <article className="stack-card">
                <h3>Tools</h3>
                <p className="stack-note">Build, deploy, and ship reliably</p>
                <div className="chips">
                  <span className="chip">Vite</span>
                  <span className="chip">Netlify</span>
                  <span className="chip">GitHub</span>
                  <span className="chip">VS Code</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <h2 className="section-title">What I Can Help You With</h2>
            <p className="section-subtitle">
              Clear, straightforward services for small business owners who want
              a website that just works.
            </p>

            <div className="cards services-grid">
              <article className="card">
                <h3>Custom Small Business Website</h3>
                <p>
                  A clean, modern website tailored to your brand, built to look
                  good on phones, tablets, and desktops.
                </p>
                <ul className="card-list">
                  <li>1–5 pages (Home, Services, About, Contact, etc.)</li>
                  <li>Mobile-friendly design</li>
                  <li>Contact form &amp; basic SEO</li>
                </ul>
                <p className="card-price">Typical projects from $500</p>
              </article>

              <article className="card">
                <h3>Landing Page or Promo Site</h3>
                <p>
                  A single-page website perfect for launching a new service,
                  event, or offer with a clear call-to-action.
                </p>
                <ul className="card-list">
                  <li>One focused page</li>
                  <li>Lead capture or booking button</li>
                  <li>Fast, simple, and easy to update</li>
                </ul>
                <p className="card-price">Typical projects from $250</p>
              </article>

              <article className="card">
                <h3>Website Refresh &amp; Cleanup</h3>
                <p>
                  Already have a website that feels outdated or messy? I can
                  modernize the design and improve performance.
                </p>
                <ul className="card-list">
                  <li>Design clean-up &amp; new layout</li>
                  <li>Speed &amp; mobile improvements</li>
                  <li>Content and structure polish</li>
                </ul>
                <p className="card-price">Hourly or fixed packages</p>
              </article>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="section section-alt" id="work">
          <div className="container">
            <h2 className="section-title">Recent &amp; Sample Projects</h2>
            <p className="section-subtitle">
              A few examples of the type of websites I design and build.
            </p>

            <div className="work-grid">
              <article className="work-item">
                <div className="work-thumb">
                  <img
                    src="/screenshots/screenshot1.png"
                    alt="Pet Grooming Studio website preview"
                  />
                </div>
                <div className="work-body">
                  <div className="work-top">
                    <h3>Pet Grooming Studio</h3>
                    <span className="work-pill">Web</span>
                  </div>

                  <p>
                    One-page website for a local pet groomer with services,
                    pricing, and a simple booking form.
                  </p>

                  <div className="work-tags">
                    <span className="tag">Responsive UI</span>
                    <span className="tag">Netlify</span>
                    <span className="tag">Forms</span>
                  </div>

                  <p className="work-meta">Tech: HTML, CSS, JS, Netlify</p>

                  <div className="work-actions">
                    <a
                      href="/demos/pet/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a href="#contact" className="btn-primary btn-sm">
                      Request Similar
                    </a>
                  </div>
                </div>
              </article>

              <article className="work-item">
                <div className="work-thumb">
                  <img
                    src="/screenshots/screenshot2.png"
                    alt="Local café landing page preview"
                  />
                </div>
                <div className="work-body">
                  <div className="work-top">
                    <h3>Local Café Landing Page</h3>
                    <span className="work-pill">Landing</span>
                  </div>

                  <p>
                    Landing page featuring menu highlights, hours, location, and
                    a simple contact section for catering inquiries.
                  </p>

                  <div className="work-tags">
                    <span className="tag">CTA Focused</span>
                    <span className="tag">Clean Layout</span>
                    <span className="tag">Fast Load</span>
                  </div>

                  <p className="work-meta">Tech: HTML, CSS, JS</p>

                  <div className="work-actions">
                    <a
                      href="/demos/cafe/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a href="#contact" className="btn-primary btn-sm">
                      Request Similar
                    </a>
                  </div>
                </div>
              </article>

              <article className="work-item">
                <div className="work-thumb">
                  <img
                    src="/screenshots/screenshot3.png"
                    alt="Home repair service website preview"
                  />
                </div>
                <div className="work-body">
                  <div className="work-top">
                    <h3>Service Business Portfolio</h3>
                    <span className="work-pill">Business</span>
                  </div>

                  <p>
                    A simple site for a home-service business to showcase
                    services, recent repairs, and an example quote form.
                  </p>

                  <div className="work-tags">
                    <span className="tag">Netlify Forms</span>
                    <span className="tag">Portfolio</span>
                    <span className="tag">SEO Ready</span>
                  </div>

                  <p className="work-meta">Tech: HTML, CSS, Netlify Forms</p>

                  <div className="work-actions">
                    <a
                      href="/demos/service/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a href="#contact" className="btn-primary btn-sm">
                      Request Similar
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section" id="process">
          <div className="container">
            <h2 className="section-title">How Working Together Works</h2>
            <p className="section-subtitle">
              A simple process so you know what to expect from day one.
            </p>

            <div className="process-grid">
              <div className="process-step">
                <span className="step-number">1</span>
                <h3>Quick Call or Email</h3>
                <p>
                  You tell me about your business, your goals, and what you need
                  your website to do.
                </p>
              </div>
              <div className="process-step">
                <span className="step-number">2</span>
                <h3>Plan &amp; Proposal</h3>
                <p>
                  I send a simple plan with pages, features, timeline, and
                  price. No hidden fees or surprise add-ons.
                </p>
              </div>
              <div className="process-step">
                <span className="step-number">3</span>
                <h3>Design &amp; Build</h3>
                <p>
                  I design and build your site, share previews, and make
                  revisions based on your feedback.
                </p>
              </div>
              <div className="process-step">
                <span className="step-number">4</span>
                <h3>Launch &amp; Support</h3>
                <p>
                  We launch your website on your domain and I can provide
                  ongoing updates and maintenance if you’d like.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-alt" id="about">
          <div className="container about-grid">
            <div>
              <h2 className="section-title">About Me</h2>
              <p>
                Hi, I’m Sergey Onoprichuk – a web developer based in Orlando, FL
                and almost graduated from Full Sail University in Web
                Development.
              </p>
              <p>
                I build clean, modern websites and web apps that feel simple to
                use — with performance, responsiveness, and clarity in mind.
              </p>
              <p>
                I enjoy working directly with business owners, explaining things
                in plain language and keeping the process stress-free.
              </p>
            </div>

            <div className="about-card">
              <h3>Quick Details</h3>
              <ul className="checklist">
                <li>Based in Orlando, FL</li>
                <li>Focused on small business &amp; local brands</li>
                <li>React + modern JavaScript</li>
                <li>Deployment with Netlify</li>
                <li>Available for freelance &amp; ongoing work</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <h2 className="section-title">Let’s Talk About Your Website</h2>
              <p className="section-subtitle">
                Tell me a bit about your business and what you’re looking for.
                I’ll get back to you with ideas and next steps.
              </p>

              {/* ✅ Netlify form (redirects to /thanks) */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thanks"
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />

                <p hidden>
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" required />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" required />
                </div>

                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" name="business" />
                </div>

                <div className="form-group">
                  <label>Website</label>
                  <input type="url" name="website" />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" required></textarea>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Details</h3>

              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:anytimegiftllc@gmail.com">
                  anytimegiftllc@gmail.com
                </a>
              </p>

              <p>
                <strong>Based in:</strong>
                <br />
                Orlando, FL
              </p>

              <p>
                <strong>Social:</strong>
                <br />
                <a
                  href="https://www.instagram.com/onoprichuk_/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/sergey-onoprichuk-90b969399/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://github.com/OnoprichukSergey-FS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>

              <p className="small">
                I typically reply within 1–2 business days.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} Sergey Onoprichuk. All rights reserved.</p>
          <p className="footer-links">
            <a href="#top">Back to top</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
