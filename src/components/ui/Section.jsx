const bgClasses = {
  white: 'bg-white',
  gray: 'bg-[#F5F5F7]',
  dark: 'bg-black',
  blue: 'bg-[#0071E3]',
  darkgray: 'bg-[#1D1D1F]',
}

export default function Section({ children, bg = 'white', className = '', id }) {
  return (
    <section
      id={id}
      className={`
        py-20 lg:py-[120px]
        ${bgClasses[bg] || bgClasses.white}
        ${className}
      `}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  )
}
