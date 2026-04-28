import { buildImage  } from '@/utils/cloudinary'
import Image from 'next/image'
import Button from './ui/Button'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  alt: string
  date?: string // ← optional date badge e.g. "May 10 to 15"
}

interface ProjectCardProps {
  project: Project
  showDonateButton?: boolean
}

export default function ProjectCard ({
  project,
  showDonateButton = false
}: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-')
   
  return (
    <div
      id={projectSlug}
      className='flex flex-col w-full max-w-102 mx-auto h-full scroll-mt-28
    group bg-white rounded-2xl overflow-hidden
    outline-none
    focus-visible:ring-2 focus-visible:ring-navy/80 focus-visible:ring-offset-4
      '
      tabIndex={0}
    >
      {/* ── Image — rounded top corners (card overflow clips it) ── */}
      <div className='relative w-full h-60 sm:h-64 flex-shrink-0 rounded-2xl overflow-hidden '>
        <Image
          src={buildImage(project.image , 800)}
          alt={project.alt}
          fill
          className='object-cover transition-transform duration-300 ease-in-out 
                 group-hover:scale-110'
        />
      </div>

      {/* ── Card Body ── */}
      <div className='flex flex-col flex-1  pt-5 pb-5 gap-1 sm:gap-3'>
        {/* ── Date Badge — like reference image ── */}
        {project.date && (
          <span className='inline-flex items-center self-start px-3 py-1 rounded-full bg-orange-100 text-[#e8a020] text-[12px] font-semibold font-sans'>
            {project.date}
          </span>
        )}

        {/* ── Title ── */}
        <h3 className='text-navy font-display font-semibold text-[20px] md:text-[22px] xl:text-2xl leading-tight'>
          {project.title}
        </h3>

        {/* ── Description — grows to fill space ── */}
        <p className='font-sans whitespace-pre-line impact-para flex-1 '>{project.description}</p>

        {/* ── Donate Button — full width, at bottom ── */}
        {showDonateButton && (
          <div className='mt-2'>
            <Button variant='donate' text='Donate to this cause' href='/donation' />
          </div>
        )}
      </div>
    </div>
  )
}
