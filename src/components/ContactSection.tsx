export default function ContactSection() {
  return (
    <section className="contact-sec" id="contact">
      <div className="contact-info">
        <div className="sec-eyebrow">Get In Touch</div>
        <h2 className="sec-title">
          Let's Build Something <span className="pill">Together</span>
        </h2>
        <p className="sec-desc">
          Whether you want to enroll, partner with us, or hire trained talent — we'd love to hear from you.
        </p>
        <div className="info-items">
          <div className="info-item">
            <span className="icon">📧</span>
            <div><h4>Email</h4><p>hello@aild.in</p></div>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <div><h4>Location</h4><p>India — Remote &amp; On-site</p></div>
          </div>
          <div className="info-item">
            <span className="icon">🕐</span>
            <div><h4>Response Time</h4><p>Within 24 hours</p></div>
          </div>
        </div>
      </div>

      <div className="contact-form-wrap">
        <div className="form-row-2">
          <div className="fg">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="fg">
            <label>Phone</label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" />
          </div>
        </div>
        <div className="fg">
          <label>Email</label>
          <input type="email" placeholder="you@email.com" />
        </div>
        <div className="fg">
          <label>I'm interested in</label>
          <select>
            <option value="">Select...</option>
            <option>Learning &amp; Development</option>
            <option>Development Services</option>
            <option>Corporate Training</option>
            <option>Partnership</option>
          </select>
        </div>
        <div className="fg">
          <label>Message</label>
          <textarea placeholder="Tell us about your goals..."></textarea>
        </div>
        <button className="btn-submit">Send Message →</button>
      </div>
    </section>
  )
}
