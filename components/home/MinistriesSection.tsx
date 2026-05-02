'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import ProjectCard from '../ProjectCard'
import { PROJECTS } from '@/utils/constants'

interface MinistriesSectionProps {
  showDonateButton?: boolean
  showProgress?: boolean
  showUrgent?: boolean
}

export default function MinistriesSection ({ 
  showDonateButton = false,
  showProgress = true,
  showUrgent = true 
}: MinistriesSectionProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === '/home'
  
  const [hasScrolled, setHasScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100
        setScrollProgress(progress)
        
        if (scrollLeft > 50) {
          setHasScrolled(true)
        }
      }
    }

    const container = scrollRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <section
      id='projects'
      className={`w-full bg-white main-container scroll-mt-28 ${
        isHomePage ? 'mt-7 md:mt-14 lg:mt-21' : 'py-12 md:py-20'
      }`}
    >
      
        <div className='impact-section mb-7   sm:mb-8 md:mb-10 '>
          <h2 className='font-display font-semibold text-navy text-[22px] sm:text-2xl md:text-3xl lg:text-4xl impact-heading mb-2 md:mb-3 lg:mb-5'>
            Our Missionary and <span className='text-green'>Projects</span>
          </h2>
          <p className='font-sans text-black impact-para px-2 sm:px-4'>
            We operate multiple initiatives targeting critical needs across
            Pakistan, from basic survival necessities to human rights advocacy.
          </p>
        </div>
        <div 
          ref={scrollRef}
          className='
  flex overflow-x-auto gap-4 py-4 snap-x snap-mandatory
  sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0
  lg:grid-cols-3 xl:grid-cols-3
  sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-14
  mb-6 sm:mb-8 md:mb-14 lg:mb-18
  no-scrollbar
'>
  {PROJECTS.map(project => (
    <div key={project.id} className='snap-start shrink-0 w-full sm:w-auto'>
      <ProjectCard 
        project={project} 
        showDonateButton={showDonateButton} 
        showProgress={showProgress}
        showUrgent={showUrgent}
      />
    </div>
  ))}
</div>

{/* Segmented Progress Steps (Mobile Only) */}
<div className='flex sm:hidden items-center justify-center gap-1.5 mb-6'>
  {PROJECTS.map((_, idx) => {
    const isPast = scrollProgress >= (idx / PROJECTS.length) * 100;
    const isActive = Math.round((scrollProgress / 100) * (PROJECTS.length - 1)) === idx;
    
    return (
      <div 
        key={idx}
        className={`h-1 rounded-full transition-all duration-300 ${
          isActive ? 'w-6 bg-navy' : isPast ? 'w-2 bg-navy/60' : 'w-2 bg-gray-200'
        }`}
      />
    );
  })}
</div>

{/* Swipe Trigger Hint (Mobile Only) - Hides on scroll */}
{!hasScrolled && (
  <div className='flex sm:hidden items-center justify-center gap-2 text-gray-400 font-sans text-sm animate-pulse mb-8 transition-opacity duration-500'>
    <span>Swipe to explore</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-x">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </div>
)}
    
    </section>
  )
}
