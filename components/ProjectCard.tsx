import Image from 'next/image'
import Button from './ui/Button'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  alt: string
}

interface ProjectCardProps {
  project: Project
  showDonateButton?: boolean // ← optional prop, default false
}

export default function ProjectCard ({
  project,
  showDonateButton = false
}: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
  return (
    /* Card Container: Strict Figma width */
    <div id={projectSlug} className='flex flex-col w-full max-w-102 mx-auto h-full scroll-mt-20'>
      {/* Image: Strict aspect ratio based on 408px width */}
      <div className='relative w-full h-60 sm:h-72 md:h-80 overflow-hidden rounded-none'>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className='object-cover'
        />
      </div>

      {/* The 28px Gap requested */}
      <div className='mt-5 sm:mt-7 flex flex-col items-start sm:flex-1'>
        <h3 className='text-navy font-display font-semibold  text-[22px] md:text-[26px] leading-tight mb-1'>
          {project.title}
        </h3>
        <p className=' font-sans text-black text-[15px] sm:text-lg md:text-xl leading-normal sm:leading-relaxed grow'>
          {project.description}
        </p>
        {showDonateButton && (
          <Button variant='donate' text='Donate to this Cause' href='/donate' />
        )}
      </div>
    </div>
  )
}
