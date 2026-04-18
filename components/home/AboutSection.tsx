'use client'

import { useRef, useState, useCallback } from 'react'
import VideoSection from '@/components/VideoSection'

const SLIDE_COUNT = 7

export default function AboutSection () {
  const [activeSlide, setActiveSlide] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null) // ✅ video-track pe ref
  const sliderRef = useRef<HTMLDivElement>(null) // scroll container pe ref
  const isAutoScrolling = useRef(false)

  // ── Dot click ────────────────────────────────────────────────
  const handleDotClick = useCallback((index: number) => {
    const track = trackRef.current // video-track div
    const slider = sliderRef.current // scroll container

    if (!track || !slider) return

    // ✅ slides are direct children of video-track
    const child = track.children[index] as HTMLElement
    if (!child) return

    setActiveSlide(index)
    isAutoScrolling.current = true

    // ✅ offsetLeft of child relative to track
    // track itself has px-4 padding — child.offsetLeft accounts for this
    const scrollTo =
      child.offsetLeft - slider.offsetWidth / 2 + child.offsetWidth / 2

    slider.scrollTo({ left: scrollTo, behavior: 'smooth' })

    setTimeout(() => {
      isAutoScrolling.current = false
    }, 900)
  }, [])

  // ── Manual scroll ─────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (isAutoScrolling.current) return

    const track = trackRef.current
    const slider = sliderRef.current
    if (!track || !slider) return

    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2

    let closestIndex = 0
    let closestDistance = Infinity

    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement
      // ✅ offsetLeft relative to track (scroll container)
      const childCenter = el.offsetLeft + el.offsetWidth / 2
      const distance = Math.abs(sliderCenter - childCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveSlide(closestIndex)
  }, [])

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
          A Mission of <span className='text-green'>Compassion</span>,
          <br className='hidden md:block' /> Faith and Action
        </h2>
        <p className='font-sans text-black impact-para'>
          Real Hope Pakistan is committed to serving the most vulnerable
          communities across the nation...
        </p>
      </div>

      {/* Video Slider */}
      <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
        <div
          ref={sliderRef} // ✅ scroll container ref
          className='flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar'
          onScroll={handleScroll}
        >
          {/* ✅ trackRef pass karo VideoSection ko */}
          <VideoSection
            trackRef={trackRef}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
        </div>
      </div>

      {/* Dots */}
      <div className='flex items-center justify-center gap-2 mt-6 md:mt-8'>
        {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
          <button
            type='button'
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
