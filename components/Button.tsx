import React from 'react'
import Link from 'next/link'

type ButtonVariant = 'support' | 'learnMore'

interface ButtonProps {
  variant: ButtonVariant
  text: string
  href: string
}

const Button: React.FC<ButtonProps> = ({ variant, text, href }) => {
  const isSupport = variant === 'support'

  return (
    <Link
      href={href}
      className={` 
        inline-flex items-center justify-center
        
        w-[160px] h-[50px]
        rounded-[15px]
        
        whitespace-nowrap
        text-[15px] font-semibold font-display
        text-white transition-all duration-200 active:scale-95
        
        ${
          isSupport
            ? 'bg-navy hover:opacity-90'
            : 'bg-transparent border-[1.55px] border-white hover:bg-white/10'
        }
      `}
    >
      {text}
    </Link>
  )
}

export default Button
