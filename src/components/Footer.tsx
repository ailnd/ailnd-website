import LogoDark from './LogoDark'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo"><LogoDark className="nav-logo-svg" /></div>
          <p>Where Learning Meets Innovation. AI-powered courses, real projects, and career-focused mentorship.</p>
          <div className="footer-social">
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Instagram">ig</a>
            <a href="#" title="GitHub">gh</a>
            <a href="#" title="Twitter">𝕏</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Courses</h4>
          <a href="#">AI &amp; Machine Learning</a>
          <a href="#">React &amp; JavaScript</a>
          <a href="#">Node.js + MongoDB</a>
          <a href="#">Python Data Science</a>
          <a href="#">Angular</a>
          <a href="#">GraphQL</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Our Instructors</a>
          <a href="#">Development Services</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 AIL&amp;D. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
