import LogoLight from './LogoLight'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <LogoLight className="nav-logo-svg" />
      </div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
