'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import Button from '../ui/Button'
import { buildImage } from '@/utils/cloudinary'

interface HeroProps {
  title?: string
  subtitle?: string
  videoSrc?: string
  photoId?: string
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function HomeHero({
  title = 'Hope, Help and Humanity',
  subtitle = 'Working together to uplift lives through meaningful initiatives.',
  videoSrc = '/videos/hero-video.mp4',
  photoId = 'Mask_group_1_qnvxbp'
}: HeroProps) {
  const [videoReady, setVideoReady] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [animateHero, setAnimateHero] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Inject video only once hero enters viewport
  useEffect(() => {
    const section = sectionRef.current

    if (!section || typeof IntersectionObserver === 'undefined') {
      setShowVideo(true)
      return
    }

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
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoReady(true)
    }, 60000)

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    if (videoReady || !showVideo) {
      setAnimateHero(true)
    }
  }, [videoReady, showVideo])

  const handleVideoCanPlay = useCallback(() => {
    setVideoReady(true)
    videoRef.current?.play().catch(() => {
      // Autoplay blocked by browser — image fallback stays visible
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label='Homepage hero'
      className='relative w-full min-h-screen overflow-hidden '
    >
      {/* ── LCP image fallback ── */}
      <Image
        src={buildImage(photoId, 1920)}
        alt='Real Hope Ministries Pakistan'
        fill
        priority
        fetchPriority='high'
        sizes='100vw'
        className={`object-cover transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        style={{ zIndex: 0 }}
      />
      {/* ── Lazy autoplay video ── */}
      {showVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload='none'
          onCanPlay={handleVideoCanPlay}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ zIndex: 1 }}
        />
      )}
      {/* Gradient overlay */}
      <div className='absolute   bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)87.02%)] inset-0 flex  items-center z-10' />
      {/* ── Text — bottom-left, padding mirrors hero outer px ── */}
      <motion.div
        className='absolute inset-0 flex items-center'
        style={{ zIndex: 3 }}
        variants={containerVariants}
        initial='hidden'
        animate={animateHero ? 'visible' : 'hidden'}
      >
        <div className='main-container'>
          <motion.p
            variants={itemVariants}
            className='relative text-white italic text-sm sm:text-sm md:text-base lg:text-2xl mb-2 sm:mb-3 font-display font-semibold leading-snug w-fit group sm:mx-0'
          >
            Real Hope Ministries Pakistan
            <span className='absolute left-0 -bottom-1 h-[3px] w-full bg-[linear-gradient(to_right,white_0%,white_50%,transparent_100%)]' />
          </motion.p>


          <motion.h1
            variants={itemVariants}
            className='font-display font-semibold text-white text-[25px] sm:text-3xl md:text-5xl leading-tight  mb-4 drop-shadow-md'
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='impact-para font-semibold mb-7 text-white'
          >
            {subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className='flex flex-wrap gap-3'>
            <Button href='/donation' text='Support Us' variant='support' />
            <Button href='#about' text='Learn More' variant='learnMore' />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
