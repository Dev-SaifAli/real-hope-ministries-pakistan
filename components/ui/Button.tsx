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
  | 'supportNav'

interface ButtonProps {
  variant: ButtonVariant
  text: string
  href: string
}

// components/ui/Button.tsx

const variantStyles: Record<ButtonVariant, string> = {
  // ── Hero buttons ─────────────────────────────────────────────
  support:
    'bg-navy text-white px-6 py-2 w-[150px] h-[40px] rounded-[12px] sm:w-[160px] sm:h-[50px] sm:rounded-[14px] ' +
    'transition-all duration-200 ' +
    'hover:opacity-90 hover:shadow-md ' +
    'active:scale-95 active:opacity-80 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  supportNav:
    'bg-navy text-white w-[160px] h-[50px] rounded-[14px] shadow-lg' +
    'transition-all duration-200 ' +
    'hover:opacity-90 hover:shadow-xl ' +
    'active:scale-95 active:shadow-md ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  learnMore:
    'bg-transparent text-white e px-6 py-2 w-[150px] h-[40px] rounded-[12px] sm:w-[160px] sm:h-[50px] sm:rounded-[14px] border-[1.55px] border-white ' +
    'transition-all duration-200 ' +
    'hover:bg-white/10 hover:shadow-md ' +
    'active:scale-95 active:bg-white/20 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  // ── CTA Section buttons ───────────────────────────────────────
  supportMission:
    'bg-navy text-white px-8 h-[50px] rounded-[14px] ' +
    'transition-all duration-200 ' +
    'hover:bg-[#071a33] hover:shadow-md ' +
    'active:scale-95 active:bg-[#050f1f] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  getInvolved:
    'bg-transparent text-navy px-8 h-[50px] rounded-[14px] border-2 border-navy ' +
    'transition-all duration-200 ' +
    'hover:bg-navy hover:text-white hover:shadow-md ' +
    'active:scale-95 active:bg-[#071a33] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  // ── Watch Story ───────────────────────────────────────────────
  watchStory:
    'bg-orange text-white px-8 h-[50px] rounded-[14px] ' +
    'transition-all duration-200 ' +
    'hover:bg-[#226e4d] hover:shadow-md ' +
    'active:scale-95 active:bg-[#1a5a3e] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  // ── Donate ────────────────────────────────────────────────────
  donate:
    'text-navy w-full h-[50px] rounded-full border-2 border-navy ' +
    'font-semibold transition-all duration-200 cursor-pointer select-none ' +
    'hover:bg-navy hover:text-white hover:shadow-lg ' +
    'active:scale-95 active:shadow-none ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none'
}

const Button: React.FC<ButtonProps> = ({ variant, text, href }) => {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap
        text-sm sm:text-base xl:text-lg  font-display font-medium
        transition-all duration-200 active:scale-95
        ${variantStyles[variant]}
      `}
    >
      {text}
    </Link>
  )
}

export default Button
