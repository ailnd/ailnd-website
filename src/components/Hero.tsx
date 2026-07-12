export default function Hero() {
  return (
    <section className="hero" id="hero">
      <span className="doodle d1">✳</span>
      <span className="doodle d2">✦</span>
      <span className="doodle d3">*</span>
      <span className="doodle d4">◯</span>
      <svg className="doodle-wave" width="120" height="30" viewBox="0 0 120 30" fill="none">
        <path d="M0 15 Q15 5 30 15 Q45 25 60 15 Q75 5 90 15 Q105 25 120 15"
          stroke="#1A1A2E" strokeWidth="2.5" fill="none" />
      </svg>

      <div className="hero-left">
        <div className="hero-tag"><span className="blink"></span>AI-Powered L&amp;D Platform</div>
        <h1>
          Improve your<br />
          <span className="pill">Skills</span> Faster<br />
          with AI
        </h1>
        <p className="hero-desc">
          Speed up the skill acquisition process by finding unlimited courses that match your niche — from AI to full-stack development.
        </p>
      </div>

      <div className="hero-right">
        <div className="vid-grid">
          <div className="vid-card">
            <div className="vid-avatar" style={{ background: '#FDE8C8' }}>👨‍🏫</div>
            <div className="vid-name">Parshad Doshi</div>
            <div className="vid-sub">20+ yr Corporate Training</div>
          </div>
          <div className="vid-card">
            <div className="vid-avatar" style={{ background: '#D6EAF8' }}>👨‍💻</div>
            <div className="vid-name">Kathak Dabhi</div>
            <div className="vid-sub">10+ yr Software Dev</div>
          </div>
          <div className="vid-card">
            <div className="vid-avatar" style={{ background: '#E8F8E8' }}>🧑‍💼</div>
            <div className="vid-name">Shalin Doshi</div>
            <div className="vid-sub">Associate</div>
          </div>
          <div className="vid-card">
            <div className="vid-avatar" style={{ background: '#F8E8F8' }}>👩‍💼</div>
            <div className="vid-name">Dhara Patel</div>
            <div className="vid-sub">Associate</div>
          </div>
        </div>

        <div className="hero-badge b1">
          <span className="badge-icon">🏆</span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A2E' }}>Certificate Earned</div>
            <div className="badge-label">React Developer</div>
          </div>
        </div>
        <div className="hero-badge b2">
          <span className="badge-icon">🔥</span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A2E' }}>1,200 Learners</div>
            <div className="badge-label">Enrolled this week</div>
          </div>
        </div>

        <span className="plant">🌿</span>
      </div>
    </section>
  )
}
