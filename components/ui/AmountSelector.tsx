'use client'
import { useState } from 'react'

const amounts = ['$500', '$1000', '$2000', '$5000', 'Custom']

interface AmountSelectorProps {
  value: string
  onChange: (amount: string) => void
}

export default function AmountSelector ({ value, onChange }: AmountSelectorProps) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3'>

      {amounts.map(amount => (
        <button
          type='button'
          key={amount}
          onClick={() => onChange(amount)}
          className={`
            h-10 sm:h-12 w-full px-1 sm:px-2 rounded-xl text-[14px] sm:text-[16px] font-bold
            transition-all duration-200 border-2
            ${
              value === amount
                ? 'bg-navy text-white border-navy shadow-lg shadow-navy/20'
                : 'bg-white text-gray-600 border-gray-100 hover:border-navy/30'
            }
          `}

        >
          {amount}
        </button>
      ))}
    </div>
  )
}

