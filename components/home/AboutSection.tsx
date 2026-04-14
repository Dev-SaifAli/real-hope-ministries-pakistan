'use client'
import { useState } from 'react'
import VideoSection from '@/components/VideoSection'

const SLIDE_COUNT = 7

export default function AboutSection () {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleDotClick = (index: number) => {
    setActiveSlide(index)
    const slider = document.getElementById('video-slider')
    if (!slider) return
    const totalWidth = slider.scrollWidth - slider.clientWidth
    const perSlide = totalWidth / (SLIDE_COUNT - 1)
    slider.scrollTo({ left: index * perSlide, behavior: 'smooth' })
  }

  return (
    <section
      id='about'
      className='w-full bg-white mt-11 md:mt-20 overflow-hidden'
    >
      {/* Section Header */}
      <div className='text-center px-4 sm:px-6 mb-10 md:mb-12 max-w-[900px] mx-auto'>
        <p className='font-display font-semibold text-green text-[14px] sm:text-[16px] md:text-[18px] mb-3 sm:mb-5 md:mb-8'>
          About Real Hope Pakistan
        </p>
        <h2 className='font-display font-semibold text-navy impact-heading mb-2 sm:mb-4 md:mb-6'>
          A Mission of <span className='text-green'>Compassion</span>,{' '}
          <br className='hidden md:block' />
          Faith and Action
        </h2>
        <p className='font-sans text-black impact-para'>
          Real Hope Pakistan is committed to serving the most vulnerable
          communities across the nation. Guided by a spirit of humanitarianism,
          we work tirelessly to address immediate needs while fostering
          long-term empowerment. From providing clean water and food to
          advocating for freedom and supporting widows and orphans, our mission
          is rooted in the belief that every life is valuable. Together, we are
          building a foundation of real hope, transforming lives one community
          at a time.
        </p>
      </div>

      {/* Video Slider */}
      <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
        <div
          id='video-slider'
          onScroll={e => {
            const slider = e.currentTarget
            const totalWidth = slider.scrollWidth - slider.clientWidth
            const perSlide = totalWidth / (SLIDE_COUNT - 1)
            setActiveSlide(Math.round(slider.scrollLeft / perSlide))
          }}
        >
          <VideoSection />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className='flex items-center justify-center gap-2 mt-6 md:mt-8'>
        {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-200 ${
              activeSlide === index
                ? 'w-3 h-3 bg-navy'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
