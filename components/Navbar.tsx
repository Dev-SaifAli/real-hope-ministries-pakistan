'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from './ui/Button'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Donate', href: '/donation' },
  { label: 'Contact Us', href: '/contact' }
]

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activePath = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className='fixed top-2 left-0 right-0 z-50 px-6 md:px-10 pt-4'>
      {/* ── Pill container — morphs from transparent to white ── */}
      <motion.div
        className='mx-auto flex items-center justify-between'
        animate={{
          backgroundColor: isScrolled
            ? 'rgba(255,255,255,0.95)'
            : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          borderRadius: isScrolled ? '9999px' : '0px',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.10)' : 'none',
          paddingLeft: isScrolled ? '20px' : '0px',
          paddingRight: isScrolled ? '20px' : '0px',
          paddingTop: isScrolled ? '8px' : '0px',
          paddingBottom: isScrolled ? '8px' : '0px'
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <Link href='/' className='shrink-0 flex items-center gap-3'>
          <Image
            src='/nav-logo.png'
            alt='RHM Pakistan'
            width={50}
            height={50}
            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain'
          />

          <span
            className={`
      font-semibold font-display text-lg tracking-tight transition-colors duration-300
      ${isScrolled ? 'text-black' : 'text-white'}
    `}
          >
            RHM Pakistan
          </span>
        </Link>

        {/* Right side */}
        <div className='flex items-center gap-6 xl:gap-8'>
          {/* Desktop links */}
          <ul className='hidden font-display lg:flex items-center gap-1'>
            {navLinks.map(link => {
              const isActive = activePath === link.href
              return (
                <li key={link.href} className='relative'>
                  <Link
                    href={link.href}
                    className={`
                      relative z-10 px-4 py-2 rounded-full
                      text-[15px] xl:text-[16px] font-medium
                      transition-colors duration-300
                      ${
                        isActive
                          ? 'text-white'
                          : isScrolled
                          ? 'text-black hover:text-navy'
                          : 'text-white hover:text-white/80'
                      }
                    `}
                  >
                    {link.label}
                  </Link>

                  {/* Animated green active pill */}
                  {isActive && (
                    <motion.div
                      layoutId='nav-pill'
                      className='absolute inset-0 rounded-full bg-green'
                      style={{ zIndex: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}

                  {/* Hover bg layer */}
                  {!isActive && (
                    <motion.div
                      className='absolute inset-0 rounded-full'
                      whileHover={{
                        backgroundColor: isScrolled
                          ? 'rgba(0,0,0,0.05)'
                          : 'rgba(255,255,255,0.15)'
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className='hidden lg:block'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Button variant='supportNav' text='Support Us' href='/donation' />
            </motion.div>
          </div>

          {/* Hamburger */}
          <button
            className='lg:hidden flex flex-col justify-center items-center gap-1.5 min-w-11 min-h-11'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`
                  block w-6 h-0.5 rounded transition-all duration-300
                  ${isScrolled ? 'bg-black' : 'bg-white'}
                  ${i === 0 && menuOpen ? 'rotate-45 translate-y-2' : ''}
                  ${i === 1 && menuOpen ? 'opacity-0 scale-x-0' : ''}
                  ${i === 2 && menuOpen ? '-rotate-45 -translate-y-2' : ''}
                `}
              />
            ))}
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown — animated height */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? 'auto' : 0,
          opacity: menuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='overflow-hidden bg-white rounded-2xl shadow-xl mt-2 lg:hidden'
      >
        <div className='font-display flex flex-col px-5 py-4'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                py-3 text-base font-medium border-b border-gray-100
                ${
                  activePath === link.href
                    ? 'text-green'
                    : 'text-black hover:text-green'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/donation'
            onClick={() => setMenuOpen(false)}
            className='mt-4 text-center py-3 bg-navy text-white rounded-lg font-semibold'
          >
            Support Us
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}
