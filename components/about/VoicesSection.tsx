'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { buildImage, buildVideo } from '@/utils/cloudinary'

const newIds = [
  'attachment_6_ae47de',
  'photo-3_qxsn4b',
  'IMG_0663_otmahe',
  'DSC_3082_1_lfvubr',
  'df169b1eb39ad8633a7854fa8187ce67bd8bbaa0_vdzfwc',
  '3a4e13c06ca105ec79e46d16ff35adbb764906c4_qk5dhc',
  'food_vzy14n',
  'ac412c10607128cf2363aaf9672f0387b670847d_gfru0h',
  'IMG_0803_g9zy0s',
  'photo-4_racfz6',
  'photo-5_lwvur4',
  'widows_rvnx1s',
  'orphanage_b3ciwu',
  'food_vzy14n',
  'ChatGPT_Image_Apr_29_2026_11_23_01_AM_foyoec',
  '9f9b70fed6ee900561182ee105c7024993851773_x6idlb',
  'DSC_7679_1_hjzlhk',
  'DSC_7690_1_xbcdqr',
  'DSC_7820_1_qda3pj',
]
// ── DATA ──
const ALL_PHOTOS = [
  {
    id: 1,
    src: 'attachment_2_oqex6k',
    alt: 'Blanket distribution to community'
  },
  {
    id: 2,
    src: 'attachment_3_tmiulm',
    alt: 'Community gathering'
  },
  {
    id: 3,
    src: 'attachment_1_gj34mr',
    alt: 'Child holding book'
  },
  {
    id: 4,
    src: 'attachment_b2gu54',
    alt: 'Child holding book'
  },
  {
    id: 5,
    src: '2c935d9d8598fb9b5264ff3413972374581caf98_i23etx',
    alt: 'Large community event'
  },
  // Add additional hidden photos here to increase the "+N" count
  ...newIds.map((id) => ({
    src: id,
    alt: 'Community moments'
  }))
]

const VIDEO_DATA = {
  src: 'Screenshot_1083_jqkuqr',
  videoUrl: 'WhatsApp_Video_2026-04-27_at_11.31.42_PM_jipxh2', // Replace with real ID
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
  const [showGridModal, setShowGridModal] = useState(false)

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

  const handlePhotoClick = (index: number) => {
    if (index === 4 && ALL_PHOTOS.length > 5) {
      setShowGridModal(true)
    } else {
      setPhotoIndex(index)
    }
  }

  return (
    <section className='w-full bg-white mt-20 mb-20 md:mt-16 md:mb-20 px-4 sm:px-6 md:px-10'>
      <div className='max-w-480 mx-auto'>
        {/* ── Header ── */}
        <div className='text-center mb-8 md:mb-12 max-w-225 mx-auto'>
          <h2 className='font-display font-semibold text-navy impact-heading mb-2 sm:mb-4'>
            Voices from the <span className='text-green'>Field</span>
          </h2>
          <p className='text-black impact-para px-2 sm:px-4 xl:px-0'>
            See the real impact of your support. Through these stories and
            moments, we witness the incredible strength of the communities we
            serve.
          </p>
        </div>
        <div className=''>
          {/* ── Main Grid ── */}
          {/* Mobile: 2-col mosaic. Desktop: 3-col layout */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6'>
            {/* VIDEO CARD — spans both cols on mobile, 2-of-3 on desktop */}
            <div
              className='col-span-2 md:col-span-2 relative aspect-[16/10] rounded-[16px] sm:rounded-[20px] md:rounded-[30px] overflow-hidden cursor-pointer group bg-gray-100'
              onClick={() => setPlaying(true)}
            >
              {!playing ? (
                <>
                  <Image
                    src={buildImage(VIDEO_DATA.src, 1600)}
                    alt={VIDEO_DATA.alt}
                    fill
                    className='object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <PlayButton />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 bg-red-600 py-2 md:py-3 px-4 md:px-6'>
                    <p className='text-white font-bold text-sm md:text-xl italic uppercase tracking-wider'>
                      Please watch this video
                    </p>
                  </div>
                </>
              ) : (
                <video
                  className='absolute inset-0 w-full h-full object-cover'
                  src={buildVideo(VIDEO_DATA.videoUrl)}
                  autoPlay
                  controls
                  playsInline
                />
              )}
            </div>

            {/* Photos 0 & 1 — side-by-side on mobile (each col-span-1),
                              stacked in one column on desktop (col-span-1, flex-col) */}
            <div className='col-span-2 md:col-span-1 grid grid-cols-2 md:flex md:flex-col gap-3 sm:gap-4 md:gap-6'>
              {[0, 1].map(idx => (
                <div
                  key={idx}
                  onClick={() => handlePhotoClick(idx)}
                  className='relative aspect-[4/3] rounded-[16px] sm:rounded-[20px] md:rounded-[30px] md:flex-1 overflow-hidden cursor-pointer group'
                >
                  <Image
                    src={buildImage(ALL_PHOTOS[idx].src, 800)}
                    alt={ALL_PHOTOS[idx].alt}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── BOTTOM ROW ── */}
          {/* Mobile: photos 2 & 3 side-by-side, photo 4 (+20) full-width */}
          {/* sm+: all 3 in a row */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
            {[2, 3, 4].map(idx => (
              <div
                key={idx}
                onClick={() => handlePhotoClick(idx)}
                className={`relative aspect-[4/3] rounded-[16px] sm:rounded-[20px] md:rounded-[30px] overflow-hidden cursor-pointer group ${
                  idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <Image
                  src={buildImage(ALL_PHOTOS[idx].src, 800)}
                  alt={ALL_PHOTOS[idx].alt}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
                {idx === 4 && ALL_PHOTOS.length > 5 && (
                  <div className='absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:opacity-60'>
                    <span className='text-white text-4xl md:text-5xl font-bold'>
                      +{ALL_PHOTOS.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ALL PHOTOS GRID MODAL ── */}
      <AnimatePresence>
        {showGridModal && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className='fixed inset-0 z-[80] bg-white overflow-y-auto p-4 md:p-8 flex flex-col'
          >
            <div className='flex justify-between items-center mb-6 max-w-7xl mx-auto w-full sticky top-0 bg-white/90 backdrop-blur-sm z-10 py-4'>
              <h2 className='text-2xl md:text-3xl font-display font-semibold text-navy'>All Photos</h2>
              <button onClick={() => setShowGridModal(false)} className='p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-black'>
                <X size={24} />
              </button>
            </div>
            <div className='max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 pb-20'>
              {ALL_PHOTOS.map((photo, i) => (
                <div key={i} className='relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group' onClick={() => setPhotoIndex(i)}>
                  <Image src={buildImage(photo.src, 800)} alt={photo.alt} fill className='object-cover group-hover:scale-105 transition-transform duration-300' />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                src={buildImage(ALL_PHOTOS[photoIndex].src, 1920)}
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
