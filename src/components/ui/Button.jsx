const variantClasses = {
  primary: 'bg-[#0071E3] text-white hover:opacity-85',
  secondary: 'border border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white',
  ghost: 'text-[#0071E3] hover:opacity-75',
  white: 'bg-white text-[#1D1D1F] hover:opacity-85',
  dark: 'bg-[#1D1D1F] text-white hover:opacity-85',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-full font-medium
        transition-all duration-200 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
