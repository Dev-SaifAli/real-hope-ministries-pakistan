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
  { label: 'Home', href: '/home' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' }
]

const sidebarVariants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
  },
  exit: {
    x: '-100%',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const pillTransition = { type: 'spring' as const, stiffness: 400, damping: 30 }

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const activePath = usePathname()
  // const scrolledRef = useRef(false)
  const lastScrollY = useRef(0)
  const pathName = usePathname()
  
  // Pages that HAVE a hero section and need a transparent Navbar
  const heroPages = ['/', '/home', '/about', '/contact', '/projects', '/get-involved', '/support-us']
  
  // Navbar should be white ONLY on legal pages or 404 pages (any page not in heroPages)
  const isLightPage = !heroPages.includes(pathName)
  
  const isScrolled = !isAtTop
  const isLegalPage = isLightPage
  const isNotFound = isLightPage && pathName !== '/terms-and-conditions' && pathName !== '/privacy-policy'

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    if (currentY < lastScrollY.current || currentY < 50) {
      setIsVisible(true)
    } else if (currentY > 100 && currentY > lastScrollY.current) {
      setIsVisible(false)
    }

    setIsAtTop(currentY < 50)
    lastScrollY.current = currentY
  }, [])

  useEffect(() => {
    handleScroll()
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
      <nav className={`fixed top-1 left-0 right-0 z-50 `}>
        <motion.div
          className={`
    flex items-center justify-between
 mx-auto 
transition-all duration-300
    
   

   ${isScrolled
              ? '   mt-4 px-6  2xl:px-8 py-3 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.14)] rounded-full max-w-[95%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[92%] xl:max-w-280 2xl:max-w-350 lg:w-auto'
              : isLegalPage
                ? 'w-full bg-white  px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-3 rounded-none'
                : 'w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-16 py-3 bg-transparent rounded-none max-w-480'
            }
  `}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,

            // FIX: Only scale down if it's NOT a legal page or if it IS scrolled
            scale: isLegalPage && !isScrolled ? 1 : isVisible ? 0.99 : 1
          }}
          transition={{
            duration: 0.35,
            ease: 'easeInOut'
          }}
        >
          {/* Logo */}
          <Link
            href='/home'
            className='flex flex-row items-center gap-3 xl:gap-4 shrink-0 min-w-0'
          >
            <Image
              src='/nav-logo.png'
              alt='RHM Pakistan'
              width={40}
              height={40}
              className='w-8 h-8 lg:w-10 lg:h-10 sm:w-12 sm:h-12 xl:w-12 xl:h-12 rounded-full shrink-0'
              priority
            />
            <span
              className={`
              font-semibold font-display text-lg xl:text-xl whitespace-nowrap
              transition-colors duration-300
             
            ${isScrolled || isLegalPage ? 'text-navy' : 'text-white'}
            `}
            >
              RHM Pakistan
            </span>
          </Link>
          <div className='flex items-center gap-8 xl:gap-12 min-w-0 justify-end'>
            {/* Desktop links */}
            <ul className='hidden lg:flex items-center gap-2 xl:gap-4 font-display'>
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
                      relative z-10 px-3 md:px-4 xl:px-6 py-1.5 rounded-full
                      transition-colors duration-200 whitespace-nowrap block  text-base  font-sans font-semibold
                      ${isActive
                          ? 'text-white'
                          : isScrolled || isLegalPage
                            ? 'text-navy hover:text-green'
                            : 'text-white hover:text-green'
                        }
                    `}
                    >
                      {link.label}
                    </Link>
                    {!isActive && (
                      <motion.div
                        className='absolute inset-0 rounded-full pointer-events-none'
                        whileHover={{
                          backgroundColor: isAtTop
                            ? 'rgba(0,0,0,0.05)'
                            : 'rgba(255,255,255,0.1)'
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Right cluster */}
            <div className='flex flex-row items-center gap-3 shrink-0'>
              <div className='hidden sm:block lg:block'>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Button
                    variant='supportNav'
                    text='Support Us'
                    href='/support-us'
                  />
                </motion.div>
              </div>

              {/* Hamburger */}
              <button
                className='lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 shrink-0'
                onClick={openMenu}
                aria-label='Open menu'
                aria-expanded={menuOpen}
              >
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className={`block w-6 h-1 rounded transition-colors duration-300 ${isScrolled || isLegalPage ? 'bg-navy' : 'bg-white'
                      }`}
                  />
                ))}
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile sidebar — unchanged */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key='backdrop'
              className='fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm'
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
              className='fixed inset-0 z-[70] w-full h-dvh bg-gradient-to-b from-navy via-green/80  
               to-navy flex flex-col px-6 py-8'
              variants={sidebarVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              {/* Header: Branding (Left) & Close (Right) */}
              <div className="flex items-center justify-between mb-12">
                <div className='flex items-center gap-3'>
                  <Image
                    src='/nav-logo.png'
                    alt='RHM Pakistan'
                    width={50}
                    height={50}
                    unoptimized
                     
                    className='rounded-full border border-white/20'
                  />
                  <span className='text-white font-semibold font-display text-lg whitespace-nowrap'>
                    RHM Pakistan
                  </span>
                </div>

                <button
                  onClick={closeMenu}
                  aria-label='Close menu'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all active:scale-90'
                >
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                    <path d='M1 1L15 15M15 1L1 15' stroke='white' strokeWidth='2.5' strokeLinecap='round'/>
                  </svg>
                </button>
              </div>

              {/* Navigation Links - Left Aligned */}
              <ul className='flex flex-col flex-1 overflow-y-auto'>
                {navLinks.map((link, i) => {
                  const isActive = activePath === link.href
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      className="group border-b border-white/50 hover:border-green/80 transition-colors duration-300"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`
                          flex items-center w-full py-3
                            font-semibold font-sans transition-all duration-300
                          ${isActive ? 'text-green' : 'text-white/90 hover:text-white'}
                        `}
                      >
                        <span className="   text-xl">{link.label}</span>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Bottom Section - Centered Button */}
              <div className='mt-auto pt-8 flex justify-center sm:hidden'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full"
                >
                  <div className="flex justify-center">
                    <Button
                      variant='supportNav'
                      text='Support Us'
                      href='/support-us'
                      onClick={closeMenu}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
