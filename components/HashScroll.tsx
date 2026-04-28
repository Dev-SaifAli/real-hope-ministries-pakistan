'use client'

import { useEffect, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function HashScroll() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleHashScroll = useCallback((targetHash?: string) => {
    const hash = targetHash || window.location.hash
    if (hash) {
      // Remove the # from the beginning
      const targetId = hash.replace('#', '').split('?')[0] // Handle cases with search params
      const element = document.getElementById(targetId)
      if (element) {
        // Add a small delay to ensure DOM is ready and any transitions finished
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  useEffect(() => {
    // Initial scroll on mount or pathname change
    handleHashScroll()
    
    // Listen for hash changes manually
    window.addEventListener('hashchange', () => handleHashScroll())

    // Intercept clicks on links that point to a hash on the current page
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      // Handle internal hash links (#section)
      if (href.startsWith('#')) {
        handleHashScroll(href)
        return
      }

      // Handle relative/absolute links with hash (/path#section or #section)
      if (href.includes('#')) {
        const [url, hash] = href.split('#')
        // If URL part matches current pathname (or is empty for same page)
        // Note: handles both '/' and '/home' as root
        const isSamePage = url === '' || 
                           url === '/' || 
                           url === pathname || 
                           (url === '/home' && (pathname === '/' || pathname === '/home'))
        
        if (isSamePage) {
          handleHashScroll('#' + hash)
        }
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('hashchange', () => handleHashScroll())
      window.removeEventListener('click', handleClick)
    }
  }, [pathname, searchParams, handleHashScroll])

  return null
}

