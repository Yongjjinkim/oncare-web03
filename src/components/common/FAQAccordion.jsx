'use client'

import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="flex flex-col divide-y divide-[#D2D2D7]">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-center justify-between gap-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-base font-medium text-[#1D1D1F]">{item.q}</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className={`shrink-0 text-[#6E6E73] transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <p className="mt-4 text-[#6E6E73] text-sm leading-relaxed pr-8">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
