export default function LogoLight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 140" className={className}>
      <rect x="20" y="20" width="100" height="100" rx="20" fill="#191A2E" />
      <polygon points="70,41 87,64 78,64 78,99 62,99 62,64 53,64" fill="#FFC34E" />
      <text x="122" y="118" fontFamily="'Syne', sans-serif" fontSize="140" fontWeight="800" fill="#191A2E">
        AI L<tspan fill="#FFC34E">&amp;</tspan>D
      </text>
    </svg>
  )
}
