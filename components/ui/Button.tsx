// components/Button.tsx

import React from 'react'
import Link from 'next/link'

type ButtonVariant =
  | 'support'
  | 'learnMore'
  | 'supportMission'
  | 'getInvolved'
  | 'donate'
  | 'watchStory'
  | 'navyFull'
  | 'tabActive'
  | 'tabInactive'

interface ButtonProps {
  variant: ButtonVariant
  text: string
  href: string
}

const variantStyles: Record<ButtonVariant, string> = {
  // Hero buttons
  support:
    'bg-[#0B2545] text-white w-[160px] h-[50px] rounded-[15px] border-0 hover:opacity-90',
  learnMore:
    'bg-transparent text-white w-[160px] h-[50px] rounded-[15px] border-[1.55px] border-white hover:bg-white/10',

  // CTA Section buttons
  supportMission:
    'bg-[#0B2545] text-white px-8 h-[50px] rounded-lg border-0 hover:bg-[#071a33]',
  getInvolved:
    'bg-transparent text-[#0B2545] px-8 h-[50px] rounded-lg border-2 border-[#0B2545] hover:bg-[#0B2545] hover:text-white',

  // Orange buttons — Donate & Watch Story
 donate: "bg-[#FFA500] text-white rounded-[12px] border-0 hover:bg-[#e69400] transition-colors duration-200 flex items-center justify-center w-full h-[48px] px-4 text-sm sm:w-[180px] sm:h-[50px] sm:px-6 sm:text-base lg:w-[201px] lg:px-8 my-6",
  watchStory:
    'bg-[#FFA500] text-white px-8 h-[50px] rounded-[12px] border-0 hover:bg-[#e69400]',
  // Full width navy — form submit buttons
  navyFull:
    'bg-[#0B2545] text-white w-full h-[56px] rounded-xl border-0 hover:bg-[#071a33] text-[16px]',

  tabActive:
    'bg-[#FFF5E6] text-black h-[52px] flex-1 rounded-l-xl border border-gray-200 font-semibold',
  tabInactive:
    'bg-[#C8C8C8] text-black h-[52px] flex-1 rounded-r-xl border border-gray-200 font-semibold'
}

const Button: React.FC<ButtonProps> = ({ variant, text, href }) => {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap
        text-[15px] font-semibold font-display
        transition-all duration-200 active:scale-95
        ${variantStyles[variant]}
      `}
    >
      {text}
    </Link>
  )
}

export default Button
