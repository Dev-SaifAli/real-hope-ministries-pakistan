'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// ── DATA ──
const ALL_PHOTOS = [
  {
    id: 1,
    src: '/voices/side-1.webp',
    alt: 'Blanket distribution to community'
  },
  { id: 2, src: '/voices/side-2.webp', alt: 'Community gathering' },
  { id: 3, src: '/voices/bottom-1.webp', alt: 'Child eating food' },
  { id: 4, src: '/voices/bottom-2.webp', alt: 'Children eating together' },
  { id: 5, src: '/voices/bottom-3.webp', alt: 'Large community event' },
  // Add additional hidden photos here to increase the "+N" count
  ...Array(15).fill({
    src: '/voices/bottom-3.webp',
    alt: 'More community moments'
  })
]

const VIDEO_DATA = {
  src: '/voices/video-thumb.webp',
  youtubeId: 'YOUR_YOUTUBE_ID_HERE', // Replace with real ID
  alt: 'Real Hope Ministry video'
}

// ── HELPER COMPONENTS ──
function PlayButton () {
  return (
    <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200'>
      <div className='w-0 h-0 ml-1.5 border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-18 border-l-navy' />
    </div>
  )
}

export default function VoicesSection () {
  const [playing, setPlaying] = useState(false)
  const [photoIndex, setPhotoIndex] = useState<number | null>(null)

  // Keyboard controls for Lightbox
  useEffect(() => {
    if (photoIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPhotoIndex(null)
      if (e.key === 'ArrowRight')
        setPhotoIndex(prev => (prev! + 1) % ALL_PHOTOS.length)
      if (e.key === 'ArrowLeft')
        setPhotoIndex(
          prev => (prev! - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length
        )
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [photoIndex])

  const openLightbox = (index: number) => setPhotoIndex(index)

  return (
    <section className='w-full bg-white mt-12 mb-20 md:mt-16 md:mb-24 px-4 sm:px-6 md:px-10'>
      <div className='max-w-480 mx-auto'>
        {/* ── Header ── */}
        <div className='text-center mb-8 md:mb-12 max-w-225 mx-auto'>
          <h2 className='font-display font-semibold text-navy text-3xl sm:text-4xl md:text-5xl mb-4'>
            Voices from the <span className='text-green'>Field</span>
          </h2>
          <p className='text-black text-[15px] sm:text-[18px] leading-relaxed'>
            See the real impact of your support. Through these stories and
            moments, we witness the incredible strength of the communities we
            serve.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4'>
          {/* VIDEO FEATURE */}
          <div
            className='relative h-65 sm:h-90 md:h-120  overflow-hidden cursor-pointer group bg-gray-100'
            onClick={() => setPlaying(true)}
          >
            {!playing ? (
              <>
                <Image
                  src={VIDEO_DATA.src}
                  alt={VIDEO_DATA.alt}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <PlayButton />
                </div>
              </>
            ) : (
              <iframe
                title='youtube-video'
                className='absolute inset-0 w-full h-full'
                src={`https://www.youtube.com/embed/${VIDEO_DATA.youtubeId}?autoplay=1`}
                allow='autoplay; encrypted-media'
                allowFullScreen
              />
            )}
          </div>

          {/* SIDE IMAGES STACK */}
          <div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
            {[0, 1].map(idx => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className='relative h-40 md:h-full  overflow-hidden cursor-pointer group'
              >
                <Image
                  src={ALL_PHOTOS[idx].src}
                  alt={ALL_PHOTOS[idx].alt}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW (3 Photos) */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {[2, 3, 4].map(idx => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className='relative h-55 sm:h-50 md:h-65  overflow-hidden cursor-pointer group'
            >
              <Image
                src={ALL_PHOTOS[idx].src}
                alt={ALL_PHOTOS[idx].alt}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              {/* +N Overlay Logic on the last visible card */}
              {idx === 4 && ALL_PHOTOS.length > 5 && (
                <div className='absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity group-hover:opacity-90'>
                  <span className='text-white text-4xl md:text-5xl font-black'>
                    +{ALL_PHOTOS.length - 4}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {photoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm'
          >
            {/* Close Button */}
            <button
              title='close'
              onClick={() => setPhotoIndex(null)}
              className='absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-110'
            >
              <X size={40} />
            </button>

            {/* Prev Button */}
            <button
              title='previous'
              className='absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-all hidden md:block'
              onClick={() =>
                setPhotoIndex(
                  prev => (prev! - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length
                )
              }
            >
              <ChevronLeft size={48} />
            </button>

            {/* Main Content */}
            <motion.div
              key={photoIndex}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                // Agar user left swipe kare (Next)
                if (info.offset.x < -50) {
                  setPhotoIndex(prev => (prev! + 1) % ALL_PHOTOS.length)
                }
                // Agar user right swipe kare (Prev)
                else if (info.offset.x > 50) {
                  setPhotoIndex(
                    prev => (prev! - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length
                  )
                }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='relative w-full max-w-5xl aspect-square md:aspect-video'
            >
              <Image
                src={ALL_PHOTOS[photoIndex].src}
                alt='Gallery view'
                fill
                className='object-contain'
                priority
              />
              <div className='absolute -bottom-12 left-0 right-0 text-center text-white/70 text-sm'>
                {photoIndex + 1} / {ALL_PHOTOS.length} —{' '}
                {ALL_PHOTOS[photoIndex].alt}
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              title='next'
              className='absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-all hidden md:block'
              onClick={() =>
                setPhotoIndex(prev => (prev! + 1) % ALL_PHOTOS.length)
              }
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
