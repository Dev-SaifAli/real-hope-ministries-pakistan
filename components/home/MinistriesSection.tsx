import ProjectCard from '../ProjectCard'
import { PROJECTS } from '@/utils/constants'

interface MinistriesSectionProps {
  showDonateButton?: boolean
}

export default function MinistriesSection ({ showDonateButton = false }: MinistriesSectionProps) {
  return (
    <section
      id='projects'
      className='w-full bg-white mt-7 md:mt-14 lg:mt-21 px-4  sm:px-6 md:px-10 scroll-mt-28'
    >
      <div className='max-w-360 mx-auto px-4 sm:px-6 lg:px-10'>
        <div className='impact-section mb-7   sm:mb-8 md:mb-10 '>
          <h2 className='font-display font-semibold text-navy impact-heading mb-2 md:mb-3 lg:mb-5'>
            Our Missionary  and <span className='text-green'>Projects</span>
          </h2>
          <p className='font-sans text-black impact-para px-2 sm:px-4'>
            We operate multiple initiatives targeting critical needs across
            Pakistan, from basic survival necessities to human rights advocacy.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-14 lg:gap-y-18  mb-6 sm:mb-8 md:mb-14 lg:mb-18 '>

          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} showDonateButton={showDonateButton} />
          ))}
        </div>
      </div>
    </section>
  )
}
