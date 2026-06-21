export default function Card({ children, className = '', dark = false, hover = true }) {
  return (
    <div
      className={`
        rounded-[18px] p-8
        ${dark
          ? 'bg-[#1A1A1A] border border-[#333333]'
          : 'bg-white border border-[#D2D2D7] shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
        }
        ${hover ? 'transition-transform duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
