'use client'

import { useState, useEffect, useRef } from 'react'

const stats = [
  { value: 5, suffix: '건', label: '발명특허출원' },
  { value: 6, suffix: '건', label: '상표출원' },
  { value: 61, suffix: '%', label: '건강검진 유소견자 비율' },
  { value: 42, suffix: '%', label: '사후관리 하지 않는 유소견자 비율' },
]

function Counter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-bold text-[#1D1D1F] mb-2">
        {count.toLocaleString()}
        <span className="text-[#0071E3]">{suffix}</span>
      </div>
      <div className="text-[#6E6E73] text-base">{label}</div>
    </div>
  )
}

export default function CounterSection() {
  return (
    <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight">
            숫자로 보는 온케어
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
