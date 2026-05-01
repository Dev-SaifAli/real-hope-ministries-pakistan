'use client'

import { useState } from 'react'
import { buildImage } from '@/utils/cloudinary'
import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/Button'
import { Project } from '@/utils/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  showDonateButton?: boolean
  showProgress?: boolean
  showUrgent?: boolean
}

export default function ProjectCard({
  project,
  showDonateButton = false,
  showProgress = true,
  showUrgent = true
}: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-')
  
  // Resolve images array
  const images = project.images && project.images.length > 0 ? project.images : [project.image]
  const [currentIdx, setCurrentIdx] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const hasProgress = !project.isOngoing && project.goal !== undefined && project.raised !== undefined
  const progressPercent = hasProgress
    ? Math.min((project.raised! / project.goal!) * 100, 100)
    : 0

  return (
    <div
      id={projectSlug}
      className='flex flex-col w-full max-w-102 mx-auto h-full scroll-mt-28
    group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]
    border border-gray-100 transition-all duration-300 hover:shadow-xl
    outline-none focus-visible:ring-2 focus-visible:ring-navy/80 focus-visible:ring-offset-4
      '
      tabIndex={0}
    >
      {/* ── Image Carousel ── */}
      <div className='relative w-full h-60 sm:h-64 flex-shrink-0 bg-gray-100 overflow-hidden'>
        {/* Urgent Badge */}
        {showUrgent && project.isUrgent && (
          <div className='absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-20'>
            <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
            Urgent Need
          </div>
        )}

        {/* Images */}
        <div 
          className='flex h-full transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className='relative w-full h-full flex-shrink-0'>
              <Image
                src={buildImage(img, 800)}
                alt={`${project.alt} - image ${idx + 1}`}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className='absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all z-20'
              aria-label='Previous image'
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className='absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all z-20'
              aria-label='Next image'
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className='absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20'>
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIdx ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className='flex flex-col flex-1 p-5 sm:p-6 gap-3'>
        {/* Date Badge */}
        {project.date && (
          <span className='inline-flex items-center self-start px-3 py-1 rounded-full bg-orange-100 text-[#e8a020] text-[12px] font-semibold font-sans mb-1'>
            {project.date}
          </span>
        )}

        {/* Title */}
        <h3 className='text-navy font-display font-semibold text-[20px] md:text-[22px]  leading-tight'>
          {project.title}
        </h3>

        {/* Description */}
        <p className='font-sans text-gray-600 whitespace-pre-line text-[15px] leading-relaxed flex-1'>
          {project.description}
        </p>
 {/* ── Progress Bar ── */}
{showProgress && hasProgress && (
  <div className='mt-2'>
    <div className='flex justify-between text-[13px] font-semibold mb-1.5'>
      <span className='text-navy font-sans'>Raised: ${project.raised!.toLocaleString()}</span>
      <span className='text-gray-400 font-sans'>Goal: ${project.goal!.toLocaleString()}</span>
    </div>
    <div className='w-full h-2.5 bg-gray-100 rounded-full overflow-hidden'>
      <div
        className='h-full bg-gradient-to-r  from-orange-300 to-orange-500 rounded-full transition-all duration-700'
        style={{ width: `${progressPercent}%` }}
      />
    </div>
    <p className='text-right text-[12px] text-gray-400 mt-1'>
      {Math.round(progressPercent)}% funded
    </p>
  </div>
)}
        {/* Donate Controls */}
        {showDonateButton && (
          <div className='mt-4 flex flex-col gap-3'>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
              {(project.suggestedAmounts || [500, 1000, 2000, 5000]).map((amount) => (
                <Link
                  key={amount}
                  href={`/support-us?amount=${amount}#donation-form`}
                  className='py-2 px-1  text-center text-xs lg:text-sm font-bold text-navy border-2 border-navy/10 rounded-xl hover:border-navy hover:bg-navy hover:text-white transition-all duration-200'
                >
                  ${amount}
                </Link>
              ))}
            </div>
            <Button variant='donate' text='Donate Other Amount' href='/support-us#donation-form' />
          </div>
        )}
      </div>
    </div>
  )
}
