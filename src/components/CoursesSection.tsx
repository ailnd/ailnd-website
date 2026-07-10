import { useState } from 'react'

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<'learning' | 'development'>('learning')

  return (
    <section className="courses-sec" id="courses">
      <div className="courses-header">
        <div>
          <div className="sec-eyebrow">Learning &amp; Development</div>
          <h2 className="sec-title" style={{ marginBottom: '20px' }}>
            What We <span className="pill">Offer</span>
          </h2>
          <div className="tab-switcher" role="tablist">
            <button
              className={`tab-btn${activeTab === 'learning' ? ' active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'learning'}
              onClick={() => setActiveTab('learning')}
            >
              🎓 Learning
            </button>
            <button
              className={`tab-btn${activeTab === 'development' ? ' active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'development'}
              onClick={() => setActiveTab('development')}
            >
              ⚙️ Development
            </button>
          </div>
        </div>
        <a
          href={activeTab === 'development' ? '#contact' : '#'}
          className="tab-view-all"
        >
          {activeTab === 'development' ? 'Discuss a Project →' : 'View All Courses →'}
        </a>
      </div>

      <div className={`tab-panel${activeTab === 'learning' ? ' active' : ''}`} id="panel-learning">
        <div className="courses-grid">
          <div className="course-card">
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#FDE8C0,#FAB831)' }}>
              🤖<span className="course-badge">AI / ML</span>
            </div>
            <div className="course-body">
              <h3>Artificial Intelligence &amp; Machine Learning</h3>
              <p>From fundamentals to neural networks, RAG, and prompt engineering for real-world AI systems.</p>
              <div className="course-meta">
                <div className="course-rating"><span>★</span> 4.9 · <span style={{ color: 'var(--muted)', fontWeight: 400 }}>320 students</span></div>
                <div className="course-cta">Enroll <span>→</span></div>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#D6EAF8,#5DADE2)' }}>
              ⚛️<span className="course-badge">Frontend</span>
            </div>
            <div className="course-body">
              <h3>React + JavaScript Masterclass</h3>
              <p>Build modern web applications with React, hooks, state management and JavaScript ES2025.</p>
              <div className="course-meta">
                <div className="course-rating"><span>★</span> 4.8 · <span style={{ color: 'var(--muted)', fontWeight: 400 }}>480 students</span></div>
                <div className="course-cta">Enroll <span>→</span></div>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#D5F5E3,#27AE60)' }}>
              🌿<span className="course-badge">Backend</span>
            </div>
            <div className="course-body">
              <h3>Node.js + MongoDB Full Stack</h3>
              <p>Server-side development, REST APIs, MongoDB Atlas, GraphQL — the complete backend stack.</p>
              <div className="course-meta">
                <div className="course-rating"><span>★</span> 4.7 · <span style={{ color: 'var(--muted)', fontWeight: 400 }}>290 students</span></div>
                <div className="course-cta">Enroll <span>→</span></div>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#FDEDEC,#E74C3C)' }}>
              🅰️<span className="course-badge">Frontend</span>
            </div>
            <div className="course-body">
              <h3>Angular Enterprise Development</h3>
              <p>TypeScript, RxJS, Angular modules, routing, forms, and state management for enterprise apps.</p>
              <div className="course-meta">
                <div className="course-rating"><span>★</span> 4.6 · <span style={{ color: 'var(--muted)', fontWeight: 400 }}>180 students</span></div>
                <div className="course-cta">Enroll <span>→</span></div>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#F5EEF8,#C39BD3)' }}>
              🔗<span className="course-badge">API</span>
            </div>
            <div className="course-body">
              <h3>GraphQL API Design</h3>
              <p>Schema design, resolvers, mutations, subscriptions — build modern APIs the right way.</p>
              <div className="course-meta">
                <div className="course-rating"><span>★</span> 4.7 · <span style={{ color: 'var(--muted)', fontWeight: 400 }}>150 students</span></div>
                <div className="course-cta">Enroll <span>→</span></div>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#EBF5FB,#3498DB)' }}>
              🐍<span className="course-badge">Data</span>
            </div>
            <div className="course-body">
              <h3>Python for Data Science</h3>
              <p>Pandas, NumPy, Matplotlib, scikit-learn — complete data science pipeline in Python.</p>
              <div className="course-meta">
                <div className="course-rating"><span>★</span> 4.9 · <span style={{ color: 'var(--muted)', fontWeight: 400 }}>410 students</span></div>
                <div className="course-cta">Enroll <span>→</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`tab-panel${activeTab === 'development' ? ' active' : ''}`} id="panel-development">
        <div className="services-grid">
          <div className="svc-card">
            <div className="svc-thumb" style={{ background: 'linear-gradient(135deg,#FDE8C0,#FAB831)' }}>
              🤖<span className="svc-tag">AI / Automation</span>
            </div>
            <div className="svc-body">
              <h3>AI Solutions &amp; Automation</h3>
              <p>We build intelligent systems powered by LLMs — from custom AI chatbots and RAG pipelines to fully automated workflows that save your team hours every day.</p>
              <div className="svc-chips">
                <span className="chip">RAG Pipelines</span>
                <span className="chip">AI Chatbots</span>
                <span className="chip">Prompt Engineering</span>
                <span className="chip">LLM Integration</span>
                <span className="chip">AI Agents</span>
              </div>
              <a href="#contact" className="svc-cta">Let's Talk <span>→</span></a>
            </div>
          </div>

          <div className="svc-card">
            <div className="svc-thumb" style={{ background: 'linear-gradient(135deg,#D5F5E3,#27AE60)' }}>
              💻<span className="svc-tag">Software Dev</span>
            </div>
            <div className="svc-body">
              <h3>Software Development</h3>
              <p>End-to-end product development — scalable backends, REST &amp; GraphQL APIs, database design, and enterprise-grade full-stack applications built to last.</p>
              <div className="svc-chips">
                <span className="chip">Node.js</span>
                <span className="chip">React</span>
                <span className="chip">Angular</span>
                <span className="chip">MongoDB</span>
                <span className="chip">GraphQL</span>
                <span className="chip">REST APIs</span>
              </div>
              <a href="#contact" className="svc-cta">Let's Talk <span>→</span></a>
            </div>
          </div>

          <div className="svc-card">
            <div className="svc-thumb" style={{ background: 'linear-gradient(135deg,#D6EAF8,#5DADE2)' }}>
              🌐<span className="svc-tag">Web Design</span>
            </div>
            <div className="svc-body">
              <h3>Website Design &amp; Development</h3>
              <p>Stunning, conversion-focused websites — landing pages, business portals, and e-commerce stores crafted with pixel-perfect design and blazing performance.</p>
              <div className="svc-chips">
                <span className="chip">Landing Pages</span>
                <span className="chip">Business Sites</span>
                <span className="chip">E-Commerce</span>
                <span className="chip">UI / UX Design</span>
                <span className="chip">Performance</span>
              </div>
              <a href="#contact" className="svc-cta">Let's Talk <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
