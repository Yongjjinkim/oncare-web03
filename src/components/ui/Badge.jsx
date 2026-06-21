const colorClasses = {
  blue: 'bg-[#0071E3] text-white',
  gray: 'bg-[#F5F5F7] text-[#1D1D1F]',
  green: 'bg-[#34C759] text-white',
  dark: 'bg-[#1D1D1F] text-white',
  outline: 'border border-[#0071E3] text-[#0071E3]',
}

export default function Badge({ children, color = 'blue', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${colorClasses[color] || colorClasses.blue}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
