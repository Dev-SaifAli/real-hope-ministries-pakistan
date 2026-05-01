'use client'
import { usePathname } from 'next/navigation'
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
  return (
    <section
      id='projects'
      className={`w-full bg-white px-4 sm:px-6 md:px-10 scroll-mt-28 ${
        isHomePage ? 'mt-7 md:mt-14 lg:mt-21' : 'py-12 md:py-20'
      }`}
    >
      
        <div className='impact-section mb-7   sm:mb-8 md:mb-10 '>
          <h2 className='font-display font-semibold text-navy impact-heading mb-2 md:mb-3 lg:mb-5'>
            Our Missionary  and <span className='text-green'>Projects</span>
          </h2>
          <p className='font-sans text-black impact-para px-2 sm:px-4'>
            We operate multiple initiatives targeting critical needs across
            Pakistan, from basic survival necessities to human rights advocacy.
          </p>
        </div>
        <div className='
  flex overflow-x-auto gap-4 py-4 snap-x snap-mandatory
  sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0
  lg:grid-cols-3 xl:grid-cols-4
  sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-14
  mb-6 sm:mb-8 md:mb-14 lg:mb-18
  no-scrollbar
'>
  {PROJECTS.map(project => (
    <div key={project.id} className='snap-start flex-shrink-0 w-[80vw] sm:w-auto'>
      <ProjectCard 
        project={project} 
        showDonateButton={showDonateButton} 
        showProgress={showProgress}
        showUrgent={showUrgent}
      />
    </div>
  ))}
</div>
    
    </section>
  )
}
