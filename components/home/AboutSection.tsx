'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import VideoSection, { videos } from '@/components/VideoSection'

const SLIDE_COUNT = videos.length

export default function AboutSection () {
  const totalVideos = videos.length
  const extendedVideos = [...videos, ...videos, ...videos]

  // Start in the middle set
  const [activeSlide, setActiveSlide] = useState(totalVideos)
  const trackRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isAutoScrolling = useRef(false)

  // ── Initial Scroll ──────────────────────────────────────────
  useEffect(() => {
    const slider = sliderRef.current
    const track = trackRef.current
    if (!slider || !track) return

    // Scroll to the first video of the middle set (Set B)
    const middleSetStartChild = track.children[totalVideos] as HTMLElement
    if (middleSetStartChild) {
      const scrollTo =
        middleSetStartChild.offsetLeft -
        slider.offsetWidth / 2 +
        middleSetStartChild.offsetWidth / 2
      slider.scrollLeft = scrollTo
    }
  }, [totalVideos])

  // ── Dot click ────────────────────────────────────────────────
  const handleDotClick = useCallback(
    (index: number) => {
      const track = trackRef.current
      const slider = sliderRef.current

      if (!track || !slider) return

      // Always scroll to the middle set (Set B)
      const targetIndex = index + totalVideos
      const child = track.children[targetIndex] as HTMLElement
      if (!child) return

      setActiveSlide(targetIndex)
      isAutoScrolling.current = true

      const scrollTo =
        child.offsetLeft - slider.offsetWidth / 2 + child.offsetWidth / 2

      slider.scrollTo({ left: scrollTo, behavior: 'smooth' })

      setTimeout(() => {
        isAutoScrolling.current = false
      }, 900)
    },
    [totalVideos]
  )

  // ── Manual scroll ─────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (isAutoScrolling.current) return

    const track = trackRef.current
    const slider = sliderRef.current
    if (!track || !slider) return

    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2

    let closestIndex = totalVideos
    let closestDistance = Infinity

    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement
      const childCenter = el.offsetLeft + el.offsetWidth / 2
      const distance = Math.abs(sliderCenter - childCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    // Infinite Jump Logic
    // If we are in Set A (index < totalVideos)
    if (closestIndex < totalVideos) {
      const jumpTo = closestIndex + totalVideos
      const targetChild = track.children[jumpTo] as HTMLElement
      const scrollTo =
        targetChild.offsetLeft -
        slider.offsetWidth / 2 +
        targetChild.offsetWidth / 2

      // Instant jump
      slider.scrollTo({ left: scrollTo, behavior: 'auto' })
      setActiveSlide(jumpTo)
    }
    // If we are in Set C (index >= 2 * totalVideos)
    else if (closestIndex >= 2 * totalVideos) {
      const jumpTo = closestIndex - totalVideos
      const targetChild = track.children[jumpTo] as HTMLElement
      const scrollTo =
        targetChild.offsetLeft -
        slider.offsetWidth / 2 +
        targetChild.offsetWidth / 2

      // Instant jump
      slider.scrollTo({ left: scrollTo, behavior: 'auto' })
      setActiveSlide(jumpTo)
    } else {
      setActiveSlide(closestIndex)
    }
  }, [totalVideos])

  return (
    <section
      id='about'
      className='w-full bg-white mt-11 md:mt-16 overflow-hidden scroll-mt-28'
    >
      {/* Section Header */}
      <div className='text-center px-4 sm:px-6 mb-10 md:mb-12 max-w-[900px] mx-auto'>
        <p className='font-display font-semibold text-green text-[16px] sm:text-[16px] md:text-2xl mb-3 sm:mb-5 md:mb-6'>
          About Real Hope Pakistan
        </p>
        <h2 className='font-display font-semibold text-navy impact-heading mb-2 sm:mb-4 md:mb-6'>
          A Mission of <span className='text-green'>Compassion</span>,
          <br className='hidden md:block' /> Faith and Action
        </h2>
        <p className='font-sans text-black impact-para  '>
          Real Hope Pakistan is committed to serving the most vulnerable
          communities across the nation. Guided by a spirit of humanitarianism,
          we work tirelessly to address immediate needs while fostering
          long-term empowerment. From providing clean water and food to
          advocating for freedom and supporting widows and orphans, our mission
          is rooted in the belief that every life is valuable. Together, we are
          building a foundation of real hope, transforming lives one community
          at atime.
        </p>
      </div>

      {/* Video Slider */}
      <div className=' main-container'>
        <div
          ref={sliderRef}
          className='flex overflow-x-auto snap-x snap-mandatory no-scrollbar'
          onScroll={handleScroll}
        >
          <VideoSection
            trackRef={trackRef}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            videosList={extendedVideos}
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
              activeSlide % totalVideos === index
                ? 'w-3 h-3 bg-navy'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
