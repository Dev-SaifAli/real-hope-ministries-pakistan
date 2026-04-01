'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { usePathname } from 'next/navigation'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact Us', href: '/contact' }
]

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const activePath = usePathname()

  return (
    // FIX: Use `relative` + ref-based positioning instead of hardcoded top offset
    <nav className='w-full bg-white shadow-sm relative'>
      <div className='max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between'>
        {/* —— Logo —— */}
        <Link href='/' className='flex-shrink-0'>
          <Image
            src='/nav-logo.png'
            alt='Real Hope Pakistan'
            // FIX: Slightly smaller on mobile, normal on sm+
            width={65}
            height={65}
            className='w-12 h-12 sm:w-[65px] sm:h-[65px] rounded-full object-contain'
          />
        </Link>

        {/* —— Right Side: Desktop Links + CTA + Hamburger —— */}
        {/* FIX: gap-6 at lg edge, gap-10 at xl+ */}
        <div className='flex items-center gap-6 xl:gap-10'>
          {/* Desktop Links */}
          {/* FIX: gap-6 at lg, gap-8 at xl to avoid crowding at 1024px */}
          <ul className='hidden lg:flex items-center gap-6 xl:gap-8'>
            {navLinks.map((link: NavLink) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    text-[15px] xl:text-[16px] font-medium transition-colors duration-200 whitespace-nowrap
                    ${
                      activePath === link.href
                        ? 'text-green font-semibold pb-1'
                        : 'text-black hover:text-green'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className='hidden lg:block'>
            <Button variant='support' text='Support Us' href='/support' />
          </div>

          {/* Hamburger Button */}
          {/* FIX: min-w/min-h ensures ≥44px touch target */}
          <button
            className='lg:hidden flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer min-w-[44px] min-h-[44px]'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-navy rounded transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy rounded transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* —— Mobile Menu —— */}
      {/* FIX: Position relative to nav via `top-full` instead of hardcoded top-[97px] */}
      {/* FIX: Added transition for smooth open/close feel */}
      <div
        className={`
          absolute top-full left-0 right-0 bg-white shadow-lg z-50 lg:hidden
          overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className='flex flex-col gap-1 px-4 sm:px-8 py-4'>
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              // FIX: min-h-[44px] for touch target compliance
              className={`
                text-base font-medium py-3 min-h-[44px] flex items-center
                border-b border-gray-100 transition-colors
                ${
                  activePath === link.href
                    ? 'text-green'
                    : 'text-black hover:text-green'
                }
              `}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/support'
            className='w-full text-center px-6 py-3 min-h-[44px] bg-navy text-white font-semibold rounded-lg mt-3 flex items-center justify-center'
            onClick={() => setMenuOpen(false)}
          >
            Support Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
