import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Quick conversation",
    text: "You tell me about your business, what you need, what feels missing, and the style direction you like.",
  },
  {
    number: "02",
    title: "Structure and design",
    text: "I plan the layout, content flow, and visual direction so the site feels clear, polished, and easy to follow.",
  },
  {
    number: "03",
    title: "Build and refine",
    text: "The website is built responsively, then refined across desktop, tablet, and mobile so everything feels clean.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Once everything feels aligned with your business, the site is prepared and ready to go live.",
  },
];

const faqs = [
  {
    question: "Do I need to know exactly what I want?",
    answer:
      "No. You can simply explain your business, what feels off, and what you want your website to improve.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. If your current site needs better structure, cleaner mobile design, or a more polished look, a refresh can be a great option.",
  },
  {
    question: "What kinds of businesses are the best fit?",
    answer:
      "Small businesses, service providers, beauty brands, studios, auto businesses, and local brands that want to look more established.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the size of the project. Once I understand what you need, I can give you a realistic timeline.",
  },
  {
    question: "Do you only build new websites?",
    answer:
      "No. I can help with new websites, landing pages, and website refreshes depending on what your business actually needs.",
  },
];

function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    setActiveStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveStep((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) =>
        prev === processSteps.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="process-modern reveal-up reveal-delay-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="process-step-nav">
        <div className="process-progress-track">
          <div
            className="process-progress-fill"
            style={{
              height: `${((activeStep + 1) / processSteps.length) * 100}%`,
            }}
          />
        </div>

        {processSteps.map((step, index) => (
          <button
            key={step.number}
            className={`process-step-button ${
              activeStep === index ? "active" : ""
            }`}
            onClick={() => setActiveStep(index)}
            onMouseEnter={() => setActiveStep(index)}
            type="button"
          >
            <span>{step.number}</span>
            <strong>{step.title}</strong>
          </button>
        ))}
      </div>

      <div className="process-step-panel" key={activeStep}>
        <div className="process-panel-top">
          <span className="process-panel-number">
            {processSteps[activeStep].number}
          </span>

          <div className="process-arrow-controls">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous step"
            >
              ←
            </button>
            <button type="button" onClick={goToNext} aria-label="Next step">
              →
            </button>
          </div>
        </div>

        <h3>{processSteps[activeStep].title}</h3>
        <p>{processSteps[activeStep].text}</p>

        <div className="process-panel-bottom">
          <span>
            Step {activeStep + 1} of {processSteps.length}
          </span>

          <button type="button" onClick={() => setIsPaused((prev) => !prev)}>
            {isPaused ? "Resume auto-play" : "Pause auto-play"}
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-modern reveal-up reveal-delay-1">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className={`faq-modern-item ${openIndex === index ? "open" : ""}`}
        >
          <button
            type="button"
            className="faq-modern-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{faq.question}</span>
            <strong>{openIndex === index ? "–" : "+"}</strong>
          </button>

          <div className="faq-modern-answer">
            <div className="faq-modern-answer-inner">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <main id="top">
      <section className="hero hero-premium">
        <div className="container hero-premium-layout">
          <div className="hero-premium-copy reveal-up">
            <p className="eyebrow">Freelance Web Studio · Orlando, FL</p>

            <h1>
              Websites that make your business feel
              <span className="hero-highlight"> more credible</span>
            </h1>

            <p className="hero-copy">
              I design and build clean, polished websites for small businesses
              that want a stronger first impression and a more professional
              online presence.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>

              <Link to="/work" className="btn btn-secondary">
                View Work
              </Link>
            </div>

            <p className="hero-trust-line">
              Custom websites for service-based businesses, studios, and local
              brands.
            </p>
          </div>

          <div className="hero-premium-visual reveal-up reveal-delay-1">
            <div className="hero-device-frame">
              <div className="hero-device-topbar">
                <span className="hero-window-dot" />
                <span className="hero-window-dot" />
                <span className="hero-window-dot" />
              </div>

              <div className="hero-device-screen">
                <p className="hero-screen-kicker">Studio Preview</p>
                <h3>Clean websites built to elevate your business online</h3>
                <p>
                  Clear structure, polished visuals, and a site that feels easy
                  to trust.
                </p>

                <div className="hero-mini-tags">
                  <span>Custom design</span>
                  <span>Responsive</span>
                  <span>Lead-focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-proof-section" id="featured-work">
        <div className="container">
          <div className="home-section-heading reveal-up">
            <p className="section-kicker">Selected Work</p>
            <h2 className="section-title">
              Real projects built for real businesses
            </h2>
            <p className="section-subtitle">
              A few examples of websites designed to improve clarity,
              presentation, and trust.
            </p>
          </div>

          <div className="work-list">
            <article className="project-card reveal-up reveal-delay-1">
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
                  A bold website for an auto body shop designed to feel
                  credible, capable, and easy to contact.
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

            <article className="project-card reveal-up reveal-delay-2">
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
                  A refined beauty website created to improve presentation,
                  support bookings, and make the brand feel more elevated.
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

          <div className="home-proof-cta reveal-up">
            <Link to="/work" className="btn btn-secondary">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-founder-section">
        <div className="container">
          <div className="founder-card reveal-up">
            <div className="founder-image">
              <img
                src="/sergey-founder.jpg"
                alt="Sergey from Onoprichuk Web Studio"
              />
            </div>

            <div className="founder-copy">
              <p className="section-kicker">About the Studio</p>
              <h2 className="section-title">
                A personal studio for small businesses that need a stronger
                website.
              </h2>
              <p className="section-subtitle">
                I’m Sergey, the designer and developer behind Onoprichuk Web
                Studio. I build clean, modern websites for businesses that want
                to look more professional, trustworthy, and established online.
              </p>

              <div className="founder-actions">
                <Link to="/about" className="btn btn-secondary">
                  More About Me
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt home-process-section">
        <div className="container">
          <div className="home-section-heading reveal-up">
            <p className="section-kicker">Process</p>
            <h2 className="section-title">Simple from start to launch</h2>
            <p className="section-subtitle">
              A clean process that keeps the project clear, organized, and easy
              to follow.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      <section className="section home-trust-section">
        <div className="container">
          <div className="home-section-heading reveal-up">
            <p className="section-kicker">Trust & Fit</p>
            <h2 className="section-title">
              Built for businesses that want to look more established
            </h2>
            <p className="section-subtitle">
              A better website can change how people see your business before
              they ever contact you.
            </p>
          </div>

          <div className="trust-simple-grid">
            <article className="trust-simple-card reveal-up reveal-delay-1">
              <span>Best fit</span>
              <p>
                Service businesses, beauty brands, studios, auto businesses, and
                local brands.
              </p>
            </article>

            <article className="trust-simple-card reveal-up reveal-delay-2">
              <span>What improves</span>
              <p>
                Clarity, mobile polish, visual presentation, and the first
                impression your business makes.
              </p>
            </article>

            <article className="trust-simple-card reveal-up reveal-delay-3">
              <span>What matters</span>
              <p>
                Your website should feel aligned with the quality of your actual
                work.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt home-faq-section">
        <div className="container">
          <div className="home-section-heading reveal-up">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Questions before starting?</h2>
            <p className="section-subtitle">
              A few quick answers before you reach out.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      <section className="section home-final-cta-section">
        <div className="container">
          <div className="home-final-cta reveal-up">
            <p className="section-kicker">Next Step</p>
            <h2 className="services-cta-title">
              Let’s build a website that feels like a better fit for your
              business
            </h2>
            <p className="section-subtitle">
              If your current website feels outdated, unclear, or weaker than
              your business deserves, I can help you create something more
              polished and more credible.
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

export default Home;
