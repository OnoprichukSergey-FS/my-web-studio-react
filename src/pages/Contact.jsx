import React, { useRef, useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function Contact() {
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

      <main id="top">
        <section className="page-hero contact-page-hero">
          <div className="container contact-hero-layout">
            <div className="contact-hero-copy">
              <p className="section-kicker">Contact</p>
              <h1 className="section-title">
                Let’s build something that works for your business
              </h1>
              <p className="section-subtitle">
                Tell me what you need, and I’ll help you figure out the best
                direction for a site that feels clear, professional, and built
                to create a stronger first impression.
              </p>
            </div>

            <div className="contact-hero-side">
              <div className="contact-hero-note">
                <span className="contact-note-label">Good fit for</span>
                <p>
                  Small businesses, service brands, studios, and businesses that
                  want a cleaner and more credible online presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section-tight">
          <div className="container contact-layout">
            <div className="contact-copy">
              <div className="contact-card">
                <h2>Start a project</h2>
                <p>
                  A simple message is enough. Tell me about your business, what
                  you need, and what feels missing from your current online
                  presence.
                </p>

                <p className="contact-support-text">
                  You do not need to have everything figured out — I can help
                  you decide the best direction.
                </p>

                <div className="contact-links">
                  <a href="mailto:hello@onoprichukwebstudio.com">
                    hello@onoprichukwebstudio.com
                  </a>
                </div>
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
                  placeholder="Tell me about your business, what you need, and what you want your website to improve."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
