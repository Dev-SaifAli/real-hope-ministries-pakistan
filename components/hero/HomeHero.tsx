'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import Button from '../ui/Button'
import { buildImage, buildVideo } from '@/utils/cloudinary'

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
  videoSrc = 'VID-20260425-WA0014_leuotp',
  photoId = 'Gemini_Generated_Image_zckniczckniczckn_pacsn6'
}: HeroProps) {
  const [videoReady, setVideoReady] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [animateHero, setAnimateHero] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  // Animate hero text immediately — don't wait for video
  useEffect(() => {
    const timer = setTimeout(() => setAnimateHero(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleVideoCanPlay = useCallback(() => {
    setVideoReady(true)
    videoRef.current?.play().catch(() => {})
  }, [])

  // Shared gradient applied via a CSS class — always rendered, never toggled
  const gradientStyle =
    'radial-gradient(circle at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 87.02%)'

  return (
    <section
      ref={sectionRef}
      aria-label='Homepage hero'
      className='relative w-full min-h-[60vh] sm:min-h-[100dvh] overflow-hidden'
    >
      {/* ── LCP image fallback — gradient baked in via style ── */}
      <div className='absolute inset-0' style={{ zIndex: 0 }}>
        <Image
          src={buildImage(photoId, 1920)}
          alt='Real Hope Ministries Pakistan'
          fill
          priority
          fetchPriority='high'
          sizes='100vw'
          className={`object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Gradient always present on the image layer */}
        <div
          className='absolute inset-0 transition-opacity duration-700'
          style={{
            background: gradientStyle,
            opacity: videoReady ? 0 : 1
          }}
        />
      </div>

      {/* ── Lazy autoplay video — gradient baked in via style ── */}
      {showVideo && (
        <div className='absolute inset-0' style={{ zIndex: 1 }}>
          <video
            ref={videoRef}
            src={buildVideo(videoSrc)}
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            onCanPlay={handleVideoCanPlay}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Gradient always present on the video layer */}
          <div
            className='absolute inset-0 transition-opacity duration-700'
            style={{
              background: gradientStyle,
              opacity: videoReady ? 1 : 0
            }}
          />
        </div>
      )}

      {/* ── Text content ── */}
      <motion.div
        className='absolute inset-0 flex items-center'
        style={{ zIndex: 10 }}
        variants={containerVariants}
        initial='hidden'
        animate={animateHero ? 'visible' : 'hidden'}
      >
        <div className='main-container'>
          <motion.p
            variants={itemVariants}
            className='relative text-white shadow-black/50 italic text-sm sm:text-sm md:text-base lg:text-2xl mb-2 sm:mb-3 font-display font-semibold leading-snug w-fit group sm:mx-0'
          >
            Real Hope Ministries Pakistan
            <span className='absolute left-0 rounded-full -bottom-2 h-[4px] w-full bg-[linear-gradient(to_right,white_0%,white_50%,transparent_100%)]' />
          </motion.p>


          <motion.h1
            variants={itemVariants}
            className='font-display font-semibold text-white text-[25px] sm:text-3xl md:text-5xl leading-tight mb-4 drop-shadow-md'
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
            <Button href='/support-us' text='Support Us' variant='support' />
            <Button href='#real-hope-pakistan' text='Learn More' variant='learnMore' />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
