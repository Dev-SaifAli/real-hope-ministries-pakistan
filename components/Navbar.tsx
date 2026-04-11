'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
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

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
  },
  exit: {
    x: '100%',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const pillTransition = { type: 'spring' as const, stiffness: 400, damping: 30 }
const ctaHover = { y: -2, scale: 1.03 }
const ctaTransition = { type: 'spring' as const, stiffness: 300 }

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activePath = usePathname()
  const scrolledRef = useRef(false)

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 40
    if (scrolled !== scrolledRef.current) {
      scrolledRef.current = scrolled
      setIsScrolled(scrolled)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const openMenu = useCallback(() => setMenuOpen(true), [])

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4'>
        <motion.div
          className={`
            max-w-7xl mx-auto flex items-center justify-between
            rounded-full px-3 sm:px-6 py-2.5
            bg-white transition-shadow duration-300
            ${
              isScrolled
                ? 'shadow-[0_8px_32px_rgba(0,0,0,0.14)]'
                : 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
            }
          `}
          animate={{ scale: isScrolled ? 0.99 : 1, y: isScrolled ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo — always row, never wraps */}
          <Link
            href='/'
            className='flex flex-row items-center gap-2 shrink-0 min-w-0'
          >
            <Image
              src='/nav-logo.png'
              alt='RHM Pakistan'
              width={40}
              height={40}
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0'
              priority
            />
            <span className='font-semibold font-display text-base md:text-lg text-black whitespace-nowrap'>
              RHM Pakistan
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className='hidden lg:flex items-center gap-1 xl:gap-2 font-display'>
            {navLinks.map(link => {
              const isActive = activePath === link.href
              return (
                <li key={link.href} className='relative'>
                  {isActive && (
                    <motion.div
                      layoutId='nav-pill'
                      className='absolute inset-0 bg-green rounded-full shadow-md'
                      transition={pillTransition}
                    />
                  )}
                  <Link
                    href={link.href}
                    className={`
                      relative z-10 px-3 xl:px-4 py-2 rounded-full
                      md:text-lg font-medium
                      transition-colors duration-200 whitespace-nowrap block
                      ${isActive ? 'text-white' : 'text-black hover:text-green'}
                    `}
                  >
                    {link.label}
                  </Link>
                  {!isActive && (
                    <motion.div
                      className='absolute inset-0 rounded-full pointer-events-none'
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right cluster */}
          <div className='flex flex-row items-center gap-2 shrink-0'>
            {/* Support Us — hidden on xs, shown from sm+ (but hidden on lg since desktop has its own) */}
            <div className='hidden sm:block lg:block'>
              <motion.div whileHover={ctaHover} transition={ctaTransition}>
                <Button
                  variant='supportNav'
                  text='Support Us'
                  href='/donation'
                />
              </motion.div>
            </div>

            {/* Hamburger — below lg only */}
            <button
              className='lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 shrink-0'
              onClick={openMenu}
              aria-label='Open menu'
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map(i => (
                <span key={i} className='block w-5 h-0.5 rounded bg-black' />
              ))}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key='backdrop'
              className='fixed inset-0 z-[60]  bg-black/50 backdrop-blur-sm'
              variants={backdropVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              onClick={closeMenu}
              aria-hidden='true'
            />

            <motion.div
              key='sidebar'
              role='dialog'
              aria-modal='true'
              aria-label='Navigation menu'
              className='fixed top-0 right-0 bottom-0 z-[70]  w-[320px] min-w-[320px] bg-navy/50 flex flex-col px-5 py-10'
              variants={sidebarVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              {/* Close */}
              <button
                onClick={closeMenu}
                aria-label='Close menu'
                className='absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              >
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 16 16'
                  fill='none'
                  aria-hidden='true'
                >
                  <path
                    d='M1 1L15 15M15 1L1 15'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </button>

              {/* Sidebar Logo */}
              <div className='flex flex-col sm:flex-row items-center gap-3 mt-6 mb-10'>
                <Image
                  src='/nav-logo.png'
                  alt='RHM Pakistan'
                  width={45}
                  height={45}
                  className='rounded-full shrink-0 w-14 h-14 sm:w-12 sm:h-12 '
                />
                <span className='text-white font-semibold font-display text-xl sm:text-lg'>
                  RHM Pakistan
                </span>
              </div>

              {/* Nav Links */}
              <ul className='flex flex-col gap-0.5 font-display flex-1'>
                {navLinks.map((link, i) => {
                  const isActive = activePath === link.href
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.08, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`
                          flex items-center w-full px-4 py-3 rounded-xl
                          text-base font-medium transition-colors duration-200 min-h-[44px]
                          ${
                            isActive
                              ? 'bg-green text-white'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Support Us — only shown on xs screens (hidden sm+) */}
              <div className='mt-auto pt-5 border-t border-white/10 sm:hidden'>
                <Link
                  href='/donation'
                  onClick={closeMenu}
                  className='flex items-center justify-center h-11 w-full bg-navy text-white rounded-xl text-base font-semibold font-display hover:opacity-90 transition-opacity'
                >
                  Support Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
