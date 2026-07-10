export default function WhySection() {
  return (
    <section className="why-sec">
      <div className="why-header">
        <div className="sec-eyebrow" style={{ margin: '0 auto 16px' }}>Our Features</div>
        <h2 className="sec-title" style={{ textAlign: 'center' }}>
          Our Features <span className="pill">Special</span> for You
        </h2>
      </div>
      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon">🏅</div>
          <h4>Get Certified</h4>
          <p>Earn industry-recognized certificates on completion that boost your resume.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">🕐</div>
          <h4>Lifetime Access</h4>
          <p>Once enrolled, access all course material and updates forever at no extra cost.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">📚</div>
          <h4>Rich Resources</h4>
          <p>Downloadable notes, project files, cheat sheets and supplementary readings.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">🎯</div>
          <h4>Job-Ready Projects</h4>
          <p>Real-world capstone projects reviewed by industry mentors for your portfolio.</p>
        </div>
      </div>
    </section>
  )
}
