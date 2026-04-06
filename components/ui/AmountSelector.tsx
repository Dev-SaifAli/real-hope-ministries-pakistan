'use client'
import { useState } from 'react'

const amounts = ['$10', '$25', '$50', '$100', 'Custom']

export default function AmountSelector () {
  const [selected, setSelected] = useState('$50')

  return (
    <div className='flex flex-row justify-between gap-3'>
      {amounts.map(amount => (
        <button
          key={amount}
          onClick={() => setSelected(amount)}
          className={`
           h-9 w-29 px-2 sm:h-12 sm:w-32.75 sm:px-6 rounded-md text-[15px] sm:text-[17px] font-semibold
            transition-all duration-200 border
            ${
              selected === amount
                ? 'bg-orange text-white border-orange' // active — orange
                : 'bg-pearl text-black border-gray-200 hover:border-orange'
            }
          `}
        >
          {amount}
        </button>
      ))}
    </div>
  )
}
