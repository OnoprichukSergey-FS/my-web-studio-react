import React, { useMemo, useRef, useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState("success");
  const toastTimerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    help: "new-site",
    message: "",
    "bot-field": "",
  });

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleNavClick = (e) => {
    if (e.target.tagName === "A") {
      setNavOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (text, type = "success") => {
    setToastText(text);
    setToastType(type);
    setToastOpen(true);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastOpen(false);
    }, 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData["bot-field"]) return;

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      showToast(
        "Message sent. I’ll get back to you in 1–2 business days.",
        "success"
      );

      setFormData({
        name: "",
        email: "",
        business: "",
        website: "",
        help: "new-site",
        message: "",
        "bot-field": "",
      });
    } catch (error) {
      console.error(error);
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <>
      <div
        className={`toast ${toastOpen ? "show" : ""} ${toastType}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="toast-inner">
          <span className="toast-title">{toastText}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToastOpen(false)}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <div className="logo-mark">S</div>
            <div className="logo-text">
              <span>Sergey Onoprichuk</span>
              <small>Onoprichuk Web Studio</small>
            </div>
          </a>

          <nav className="nav">
            <button
              className="nav-toggle"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              ☰
            </button>

            <ul
              className={`nav-links ${navOpen ? "show" : ""}`}
              onClick={handleNavClick}
            >
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact" className="nav-cta">
                  Start a Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                </a>
                <a href="#work" className="btn btn-secondary">
                  View Work
                </a>
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

        <section className="section" id="work">
          <div className="container">
            <p className="section-kicker">Selected Work</p>
            <h2 className="section-title">Portfolio and sample builds</h2>
            <p className="section-subtitle">
              Keep your demos for now, but present them as polished sample work.
              As you complete real client projects, place those first.
            </p>

            <div className="work-list">
              <article className="project-card">
                <div className="project-image">
                  <img
                    src="/screenshots/screenshot1.png"
                    alt="Pet grooming website preview"
                  />
                </div>

                <div className="project-content">
                  <p className="project-type">Sample Project</p>
                  <h3>Pet Grooming Studio</h3>
                  <p>
                    A clean small business site concept with service sections,
                    pricing, and a booking-focused layout.
                  </p>

                  <div className="project-tags">
                    <span>Responsive</span>
                    <span>Service Business</span>
                    <span>Lead Focused</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="/demos/pet/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a href="#contact" className="btn btn-primary btn-sm">
                      Request Similar
                    </a>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image">
                  <img
                    src="/screenshots/screenshot2.png"
                    alt="Cafe landing page preview"
                  />
                </div>

                <div className="project-content">
                  <p className="project-type">Sample Project</p>
                  <h3>Local Café Landing Page</h3>
                  <p>
                    A simple landing page concept built to showcase menu
                    highlights, location, and local business branding.
                  </p>

                  <div className="project-tags">
                    <span>Landing Page</span>
                    <span>Clean Layout</span>
                    <span>Fast Load</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="/demos/cafe/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a href="#contact" className="btn btn-primary btn-sm">
                      Request Similar
                    </a>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image">
                  <img
                    src="/screenshots/screenshot3.png"
                    alt="Service business website preview"
                  />
                </div>

                <div className="project-content">
                  <p className="project-type">Sample Project</p>
                  <h3>Service Business Portfolio</h3>
                  <p>
                    A modern website concept for a service-based business with
                    trust-building sections and a clean inquiry path.
                  </p>

                  <div className="project-tags">
                    <span>Business Site</span>
                    <span>Portfolio Style</span>
                    <span>Contact Ready</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="/demos/service/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a href="#contact" className="btn btn-primary btn-sm">
                      Request Similar
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="services">
          <div className="container">
            <p className="section-kicker">Services</p>
            <h2 className="section-title">What I can help you with</h2>

            <div className="services-grid">
              <article className="info-card">
                <span className="card-number">01</span>
                <h3>Small Business Websites</h3>
                <p>
                  Custom websites for businesses that need a professional online
                  presence and a clear place for customers to learn more or
                  reach out.
                </p>
              </article>

              <article className="info-card">
                <span className="card-number">02</span>
                <h3>Landing Pages</h3>
                <p>
                  Focused single-page websites for new offers, services,
                  promotions, or personal brands.
                </p>
              </article>

              <article className="info-card">
                <span className="card-number">03</span>
                <h3>Website Refreshes</h3>
                <p>
                  Design cleanups and layout improvements for websites that feel
                  outdated, cluttered, or weak on mobile.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <p className="section-kicker">Process</p>
            <h2 className="section-title">Simple and client-friendly</h2>

            <div className="process-list">
              <div className="process-item">
                <span>01</span>
                <div>
                  <h3>Quick conversation</h3>
                  <p>
                    You tell me what your business needs, what style you like,
                    and what pages or features you want.
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

        <section className="section section-alt" id="about">
          <div className="container about-layout">
            <div className="about-main">
              <p className="section-kicker">About</p>
              <h2 className="section-title">A clean, practical approach</h2>
              <p>
                I’m Sergey Onoprichuk, a web developer based in Orlando,
                Florida. I build modern websites with a focus on clarity,
                responsiveness, and a polished presentation.
              </p>
              <p>
                My goal is to make the process simple for clients. I like
                keeping communication clear, avoiding unnecessary complexity,
                and building websites that feel professional and easy to use.
              </p>
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

        <section className="section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let’s talk about your website</h2>
              <p className="section-subtitle">
                Tell me about your business, your timeline, and what you want
                your website to do.
              </p>

              <div className="contact-links">
                <a href="mailto:hello@onoprichukwebstudio.com">
                  hello@onoprichukwebstudio.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sergey-onoprichuk-90b969399/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/OnoprichukSergey-FS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/onoprichuk_/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <p hidden>
                <label>
                  Don’t fill this out:
                  <input
                    name="bot-field"
                    value={formData["bot-field"]}
                    onChange={handleChange}
                  />
                </label>
              </p>

              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="business">Business Name</label>
                <input
                  id="business"
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Current Website</label>
                <input
                  id="website"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="help">What do you need help with?</label>
                <select
                  id="help"
                  name="help"
                  value={formData.help}
                  onChange={handleChange}
                >
                  <option value="new-site">New website</option>
                  <option value="redesign">Website redesign</option>
                  <option value="landing-page">Landing page</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business, the pages you need, and your goals."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} Onoprichuk Web Studio</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}

export default App;
