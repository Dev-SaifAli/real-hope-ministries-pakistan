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

  // Replace with: const activePath = usePathname(); in production
  const activePath = usePathname()

  return (
    <nav className='w-full h-20 bg-white shadow-sm flex items-center justify-center relative'>
      {/* Container to handle side padding and spacing */}
      <div className='max-w-[1440px] w-full mx-auto px-6 md:px-10 flex items-center justify-between'>
        {/* —— Logo (Left Side) —— */}
        <Link href='/' className='flex-shrink-0'>
          <Image
            src='/nav-logo.png'
            alt='Real Hope Pakistan'
            width={65}
            height={65}
            className='rounded-full object-contain'
          />
        </Link>

        {/* —— Navigation & CTA (Right Side) —— */}
        <div className='flex items-center gap-10'>
          {/* Desktop Links */}
          <ul className='hidden lg:flex items-center gap-10'>
            {navLinks.map((link: NavLink) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    text-[16px] font-medium transition-colors duration-200 whitespace-nowrap
                    ${
                      activePath === link.href
                        ? 'text-[#2E9E6F] font-semibold  pb-1'
                        : 'text-black hover:text-[#2E9E6F]'
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

          {/* Mobile Menu Toggle */}
          <button
            className='lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            <span
              className={`block w-6 h-0.5 bg-[#0B2545] rounded transition-all ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0B2545] rounded ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0B2545] rounded transition-all ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* —— Mobile Menu Overlay —— */}
        {menuOpen && (
          <div className='absolute top-[97px] left-0 right-0 bg-white shadow-lg flex flex-col gap-4 px-8 py-6 z-50 lg:hidden'>
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  text-base font-medium py-2 border-b border-gray-100 transition-colors
                  ${activePath === link.href ? 'text-[#2E9E6F]' : 'text-black'}
                `}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href='/support'
              className='w-full text-center px-6 py-3 bg-[#0B2545] text-white font-semibold rounded-lg mt-2'
              onClick={() => setMenuOpen(false)}
            >
              Support Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
