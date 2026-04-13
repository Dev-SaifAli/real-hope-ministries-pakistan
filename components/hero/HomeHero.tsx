'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import Button from '../ui/Button'

interface HeroProps {
  title?: string
  subtitle?: string
  videoSrc?: string
  photoId?:string
}

// Defined outside — never recreated on render
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const playBtnVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 18, delay: 0.9 }
  }
}

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.6, 1],
    opacity: [0.5, 0, 0.5],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
  }
}

function PlayIcon () {
  return (
    <div
      className=' w-12 h-12 sm:w-16 sm:h-16  md:w-20 md:h-20  bg-white/90 rounded-full flex items-center justify-center shadow-xl 
  group-hover:scale-110 transition-transform duration-300'
    >
      <div className='w-0 h-0 ml-1 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-navy sm:border-t-[10px] sm:border-b-[10px] sm:border-l-[18px] md:border-t-[12px] md:border-b-[12px] md:border-l-[22px]' />
    </div>
  )
}

export default function HomeHero ({
  title = 'Hope , Help and Humanity',
  subtitle = 'Working together to uplift lives through meaningful initiatives.',
  videoSrc = '/videos/hero-video.mp4',
  photoId='/home-hero.png'
}: HeroProps) {
  const renderTitle = function (title: string) {
    if (title === 'Hope , Help and Humanity') {
      return <>Hope , Help and <br/> Humanity</>
    }
  }
  const [videoReady, setVideoReady] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Lazy-load video only when hero enters viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleVideoCanPlay = useCallback(() => {
    setVideoReady(true)
    videoRef.current?.play().catch(() => {
      // Autoplay blocked — silently keep image visible
    })
  }, [])

  const handlePlayClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.play()
      setVideoPlaying(true)
    }
  }, [])

  return (
    <div className='w-full  px-3 sm:px-4 md:px-6 pt-24'>
      <section
        ref={sectionRef}
        aria-label='Homepage hero'
        className='relative w-full  overflow-hidden rounded-3xl lg:rounded-5xl'
        // // 100svh = safe viewport height on mobile (excludes browser chrome)
        style={{ height: 'calc(100svh - 7rem)' }}
      >
        {/* ── LCP image — loads immediately, priority flag ── */}
        <Image
          src={`https://res.cloudinary.com/dq6gu9ghf/image/upload/q_auto,f_auto/${photoId}`}
          alt='Children at a water pump — Real Hope Ministries Pakistan'
          fill
          priority
          fetchPriority='high'
          sizes='100vw'
          className={`object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ zIndex: 0 }}
        />

        {/* ── Lazy video — injected only after hero is in viewport ── */}
        {showVideo && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload='none'
            onCanPlay={handleVideoCanPlay}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 1 }}
          />
        )}

        {/* Gradient overlay */}
        <div
          className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_25%,rgba(0,0,0,0.8)_100%)]'
          style={{ zIndex: 2 }}
        />

        {/* ── Text content — constrained to left half ── */}
        <motion.div
          className='relative flex h-full  sm:items-center'
          style={{ zIndex: 3 }}
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div
            className='py-12 px-4 sm:pl-8 md:pl-12 lg:pl-16 text-white w-full 
               
                max-w-[95%] 
                /* sm and up: Left-aligned and narrower */
                sm:max-w-[55%] sm:mx-0 sm:text-left 
                lg:max-w-[50%]'
          >
            <motion.p
              variants={itemVariants}
              className='relative text-sm sm:text-sm md:text-base lg:text-xl mb-2 sm:mb-3   font-display font-medium leading-snug w-fit group  sm:mx-0 '
            >
              Real Hope Ministries Pakistan
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full' />
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className='font-display font-semibold text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-3 sm:mb-4 drop-shadow-md'
            >
              {renderTitle(title)}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-xs font-sans sm:text-sm md:text-base lg:text-lg mb-5 sm:mb-7 md:mb-10 leading-relaxed text-white/90'
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-3 justify-center sm:justify-start'
            >
              <Button href='/donation' text='Support Us' variant='support' />
              <Button href='#about' text='Learn More' variant='learnMore' />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Play button — right-center, never overlaps text ── */}
        {!videoPlaying && (
          <motion.button
            className='absolute 
           /* Mobile: Top Right */
           top-6 right-4 
           /* sm and up: Vertically Centered Right */
           sm:top-1/2 sm:-translate-y-1/2 sm:right-8 
           md:right-12 
           flex items-center justify-center group focus:outline-none 
           transition-transform hover:scale-110 active:scale-95'
            style={{ zIndex: 4 }}
            variants={playBtnVariants}
            initial='hidden'
            animate='visible'
            onClick={handlePlayClick}
            aria-label='Play video'
          >
            <motion.div
              className='absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 pointer-events-none'
              variants={pulseVariants}
              animate='animate'
            />
            <PlayIcon />
          </motion.button>
        )}
      </section>
    </div>
  )
}
