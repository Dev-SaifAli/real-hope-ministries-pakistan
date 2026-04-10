'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import { motion, type Variants } from 'framer-motion'

interface HeroProps {
  title?: string
  subtitle?: string
}

function PlayButton() {
  return (
    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 rounded-full'>
      <div className='w-0 h-0 ml-1 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-navy' />
    </div>
  )
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const playButtonVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
      delay: 0.9,
    },
  },
}

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.6, 1],
    opacity: [0.6, 0, 0.6],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function HomeHero({
  title = 'Hope , Help and Humanity',
  subtitle = 'Working together to uplift lives through meaningful initiatives.',
}: HeroProps) {
  const [playing, setPlaying] = useState(false)

  return (
    // ── Outer wrapper — adds margin + padding like reference image ──
    // px-4 md:px-6 → breathing room from screen edges
    // pt-24 → space so content clears the fixed navbar
    <div className='w-full px-4 md:px-6 pt-4'>

      {/* ── Hero section — rounded corners like reference ── */}
      <section
        aria-label='Homepage hero'
        className='relative w-full overflow-hidden rounded-2xl md:rounded-3xl'
        style={{ height: 'calc(100vh - 1.5rem)' }}  // full height minus top padding
        onClick={() => setPlaying(true)}
      >
        {/* Background image */}
        <img
          src='/home-hero.png'
          alt='Hero background'
          className='absolute inset-0 h-full w-full object-cover'
        />

        {/* Radial gradient overlay */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_25%,rgba(0,0,0,0.8)_100%)]' />

        {/* ── Left Content ── */}
        <motion.div
          className='relative z-10 flex h-full items-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='pl-8 md:pl-16 text-white'>

            <motion.p
              variants={itemVariants}
              className='text-lg md:text-2xl mb-3 italic leading-1.5 underline font-display font-semibold'
            >
              Real Hope Ministries Pakistan
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className='font-display font-semibold text-white text-2xl leading-[44px] md:text-4xl md:leading-[60px] mb-4 drop-shadow-md'
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-lg md:text-lg mb-10'
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex gap-4'
            >
              <Button href='/donation' text='Support Us' variant='support' />
              <Button href='/donation' text='Learn More' variant='learnMore' />
            </motion.div>

          </div>
        </motion.div>

        {/* ── Play Button ── */}
        {!playing && (
          <motion.div
            className='absolute inset-0 flex items-center justify-center z-10'
            variants={playButtonVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              className='absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30'
              variants={pulseVariants}
              animate='animate'
            />
            <div className='group'>
              <PlayButton />
            </div>
          </motion.div>
        )}

      </section>
    </div>
  )
}