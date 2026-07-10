import { useEffect, useRef, useState } from 'react'

export default function Preloader() {
  const [removed, setRemoved] = useState(false)
  const preloaderRef  = useRef<HTMLDivElement>(null)
  const flipCardRef   = useRef<HTMLDivElement>(null)
  const logoSvgRef    = useRef<SVGSVGElement>(null)
  const loaderDotsRef = useRef<HTMLDivElement>(null)
  const techBurstRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('loading')

    const t1 = setTimeout(() => loaderDotsRef.current?.classList.add('show'), 400)
    const t2 = setTimeout(() => logoSvgRef.current?.classList.add('show-inner'), 2700)
    const t3 = setTimeout(() => {
      loaderDotsRef.current?.classList.remove('show')
      flipCardRef.current?.classList.add('flipped')
    }, 4500)
    const t4 = setTimeout(() => techBurstRef.current?.classList.add('burst'), 6000)
    const t5 = setTimeout(() => {
      preloaderRef.current?.classList.add('hide')
      document.body.classList.remove('loading')
      document.body.classList.add('loaded')
    }, 7800)
    const t6 = setTimeout(() => setRemoved(true), 8600)

    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout)
  }, [])

  if (removed) return null

  return (
    <div id="preloader" ref={preloaderRef}>
      <div className="flip-scene">
        <div className="flip-card" ref={flipCardRef}>
          <div className="flip-front">
            <svg
              ref={logoSvgRef}
              viewBox="0 0 100 100"
              width="160"
              height="160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="drawCircle"
                cx="50" cy="50" r="44"
                stroke="#1A1A2E" strokeWidth="3.2" fill="none" strokeLinecap="round"
              />
              <circle className="logo-line ll1" cx="50" cy="24" r="8"
                stroke="#1A1A2E" strokeWidth="2.8" fill="none" />
              <path className="logo-line ll2"
                d="M38,36 Q38,32 44,32 Q50,31 56,32 Q62,32 62,36"
                stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path className="logo-line ll3"
                d="M38,40 L40,40 L60,40 L62,40"
                stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <line className="logo-line ll4" x1="38" y1="40" x2="34" y2="60"
                stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
              <line className="logo-line ll5" x1="62" y1="40" x2="66" y2="60"
                stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
              <line className="logo-line ll6" x1="34" y1="60" x2="66" y2="60"
                stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
              <rect className="logo-line ll7"
                x="29" y="60" width="42" height="6" rx="3"
                stroke="#1A1A2E" strokeWidth="2.5" fill="none" />
              <line className="logo-node ln1" x1="40" y1="46" x2="60" y2="46"
                stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" opacity="0" />
              <line className="logo-node ln2" x1="40" y1="51" x2="56" y2="51"
                stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" opacity="0" />
              <line className="logo-node ln3" x1="40" y1="56" x2="52" y2="56"
                stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" opacity="0" />
              <circle className="logo-node ln4" cx="50" cy="24" r="3.5" fill="#FFC34E" />
              <circle className="logo-node ln5" cx="50" cy="60" r="2" fill="#1A1A2E" />
            </svg>
          </div>
          <div className="flip-back">
            <div className="brand-text">AI<span>L&amp;D</span></div>
            <div className="brand-tagline">Learn · Build · Grow</div>
          </div>
        </div>
      </div>

      <div className="loader-dots" ref={loaderDotsRef}>
        <span></span><span></span><span></span>
      </div>

      <div className="tech-burst" ref={techBurstRef}>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /></div>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" /></div>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></div>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" /></div>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" /></div>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" alt="Angular" /></div>
        <div className="tl"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" /></div>
        <div className="tl"><span className="tl-txt" style={{ color: '#FFC34E' }}>AI</span></div>
        <div className="tl"><span className="tl-txt" style={{ color: '#E74C3C' }}>RAG</span></div>
        <div className="tl"><span className="tl-txt" style={{ color: '#2980B9', fontSize: '9px' }}>Prompt</span></div>
      </div>
    </div>
  )
}
