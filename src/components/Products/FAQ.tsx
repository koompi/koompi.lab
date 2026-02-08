import { useState } from 'react'
import type { FAQItem } from '../../types'

interface FAQProps {
  title?: string
  items: FAQItem[]
  columns?: 1 | 2
}

const FAQ = ({ title = 'Frequently Asked Questions', items, columns = 2 }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const midpoint = Math.ceil(items.length / 2)
  const col1 = columns === 2 ? items.slice(0, midpoint) : items
  const col2 = columns === 2 ? items.slice(midpoint) : []

  const renderItem = (item: FAQItem, index: number) => (
    <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-koompi-primary pr-4">
          {item.question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            openIndex === index ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          openIndex === index ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )

  return (
    <div>
      <h2 className="text-3xl font-bold text-koompi-primary text-center mb-10">
        {title}
      </h2>
      {columns === 2 ? (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {col1.map((item, i) => renderItem(item, i))}
          </div>
          <div className="space-y-4">
            {col2.map((item, i) => renderItem(item, i + midpoint))}
          </div>
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {col1.map((item, i) => renderItem(item, i))}
        </div>
      )}
    </div>
  )
}

export default FAQ
