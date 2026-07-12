export default function FeatureSection() {
  return (
    <section className="feature-sec" id="about">
      <div className="feature-illus">
        <div className="fi-row">
          <span className="icon">🤖</span>
          <div>
            <h4>AI-Powered Learning Paths</h4>
            <p>Personalized curriculum based on your skill level and goals</p>
          </div>
        </div>
        <div className="fi-row">
          <span className="icon">🎓</span>
          <div>
            <h4>Industry Certifications</h4>
            <p>Get recognized credentials that employers actually value</p>
          </div>
        </div>
        <div className="fi-row">
          <span className="icon">👥</span>
          <div>
            <h4>Live Mentorship Sessions</h4>
            <p>Direct interactions with expert mentors every week</p>
          </div>
        </div>
        <div className="fi-row">
          <span className="icon">💻</span>
          <div>
            <h4>Hands-On Projects</h4>
            <p>Build real portfolio projects alongside every course</p>
          </div>
        </div>
      </div>

      <div className="feature-right">
        <div className="sec-eyebrow">Why Choose Us</div>
        <h2 className="sec-title">
          We Provide<br />
          <span className="pill" style={{ fontSize: 'inherit' }}>Smart</span> Online<br />
          Education
        </h2>
        <p className="sec-desc">
          Our courses come with assigned projects, direct interactions with mentors, relevant resources, and tools that help you dive into in-depth learning from anywhere.
        </p>
        <div className="check-list">
          <div className="check-item"><span className="chk">✓</span>Learn at your own pace, anytime anywhere</div>
          <div className="check-item"><span className="chk">✓</span>Industry-aligned curriculum updated quarterly</div>
          <div className="check-item"><span className="chk">✓</span>1-on-1 career guidance and placement support</div>
        </div>
      </div>
    </section>
  )
}
