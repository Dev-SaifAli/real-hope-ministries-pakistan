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
  text?: string
  href?: string
  onClick?: () => void
}

// components/ui/Button.tsx

const variantStyles: Record<ButtonVariant, string> = {
  // ── Hero buttons ─────────────────────────────────────────────
  support:
    'bg-navy text-white px-6 py-3   rounded-[15px]   sm:rounded-[14px] ' +
    'transition-all duration-200 ' +
    'hover:opacity-90 hover:shadow-md ' +
    'active:scale-95 active:opacity-80 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  supportNav:
    'bg-navy text-white px-6 py-2 rounded-[16px] sm:rounded-[15px] max-sm:px-20 max-sm:py-3 shadow-lg ' +
    'max-sm:bg-white  max-sm:text-green max-sm:font-extrabold max-sm:text-lg max-sm:shadow-[0_0_20px_rgba(255,255,255,0.2)] ' +
    'transition-all duration-200 ease-out ' +
    'hover:brightness-110 hover:shadow-xl ' +
    'active:scale-95 active:brightness-95 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  learnMore:
    'bg-transparent text-white   px-6 py-3 rounded-[15px]    ring-2 ring-inset ring-white  ' +
    'transition-all duration-200 ' +
    'hover:bg-white/10 hover:shadow-md ' +
    'active:scale-95 active:bg-white/20 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  // ── CTA Section buttons ───────────────────────────────────────
  supportMission:
    'bg-navy max-[769px]:px-20 text-white px-6 py-3 rounded-[15px] ' +
    'transition-all duration-200 ' +
    'hover:bg-[#071a33] hover:shadow-md ' +
    'active:scale-95 active:bg-[#050f1f] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  getInvolved:
    'bg-transparent text-navy  py-3 px-16  rounded-[15px] ring-2 ring-inset ring-navy ' +
    'transition-all  duration-200 ' +
    'hover:bg-navy hover:text-white hover:shadow-md ' +
    'active:scale-95 active:bg-[#071a33] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  // ── Watch Story ───────────────────────────────────────────────
  watchStory:
    'bg-[#F59E0B] max-[769px]:px-24 text-white px-6 py-3 rounded-[15px] ' +
    'transition-all duration-200 ' +
    'hover:bg-orange hover:shadow-md ' +
    'active:scale-95 active:bg-orange ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

  // ── Donate ────────────────────────────────────────────────────
  // rounded.
  // donate:
  //   'text-navy w-full h-[50px] rounded-full border-2 border-navy ' +
  //   'font-semibold transition-all duration-200 cursor-pointer select-none ' +
  //   'hover:bg-navy hover:text-white hover:shadow-lg ' +
  //   'active:scale-95 active:shadow-none ' +
  //   'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ' +
  //   'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none'

  donate:
    'bg-orange hover:from-orange-500 hover:to-orange-700 text-white px-6 py-3 rounded-[15px] ' +
    'transition-all duration-200 ' +
    'hover:bg-orange hover:shadow-md ' +
    'active:scale-95 active:bg-orange ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',

}

const Button: React.FC<ButtonProps> = ({ variant, text, href = '', onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap
        text-sm lg:text-base xl:text-base  font-sans font-bold
        transition-all duration-200 active:scale-95
        ${variantStyles[variant]}
      `}
    >
      {text}
    </Link>
  )
}

export default Button
