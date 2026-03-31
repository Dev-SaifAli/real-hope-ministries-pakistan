// components/Button.tsx

import React from 'react'
import Link from 'next/link'

// ── 2 naye variants add kiye
type ButtonVariant = 'support' | 'learnMore' | 'supportMission' | 'getInvolved' | 'donate' | 'watchStory'

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
  donate:
    'bg-[#FFA500] text-white px-8 h-[50px] rounded-[12px] border-0 hover:bg-[#e69400]',
  watchStory:
    'bg-[#FFA500] text-white px-8 h-[50px] rounded-[12px] border-0 hover:bg-[#e69400]',
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