'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { buildImage, buildVideo } from '@/utils/cloudinary'

const newIds = [
  'IMG_0663_otmahe',
  '3b760bfd9fefac72fe9adec50e24c5ec8110c0c8_epgiig',
  'Mask_group_4_drqvat',
  'ac412c10607128cf2363aaf9672f0387b670847d_gfru0h',
  'IMG_0803_g9zy0s',
  'photo-4_racfz6',
  'photo-5_lwvur4',
  'widows_rvnx1s',
  'orphanage_b3ciwu',
  'food_vzy14n',
  'DSC_7676_1_mutgql',
  '9f9b70fed6ee900561182ee105c7024993851773_x6idlb',
  'DSC_7679_1_hjzlhk',
  'DSC_7690_1_xbcdqr',
  'DSC_7820_1_qda3pj',
]
// ── DATA ──
const ALL_PHOTOS = [
  {
    id: 1,
    src: 'photo-3_qxsn4b',
    alt: 'Blanket distribution to community'
  },
  {
    id: 2,
    src: '3b760bfd9fefac72fe9adec50e24c5ec8110c0c8_epgiig',
    alt: 'Community gathering'
  },
  {
    id: 3,
    src: 'df169b1eb39ad8633a7854fa8187ce67bd8bbaa0_vdzfwc',
    alt: 'Child eating food'
  },
  {
    id: 4,
    src: '3a4e13c06ca105ec79e46d16ff35adbb764906c4_qk5dhc',
    alt: 'Children eating together'
  },
  {
    id: 5,
    src: 'c88d8ba9cc368e151485336b1073cdea69270d73_2_cgzaut',
    alt: 'Large community event'
  },
  // Add additional hidden photos here to increase the "+N" count
  ...newIds.map((id) => ({
    src: id,
    alt: 'Community moments'
  }))
]

const VIDEO_DATA = {
  src: 'f7d7478b9ced771bd3d34f972d525e83dc0e1917_kzzx6v',
  videoUrl: 'food-project_supddx', // Replace with real ID
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
          <h2 className='font-display font-semibold text-navy impact-heading mb-2 sm:mb-4'>
            Voices from the <span className='text-green'>Field</span>
          </h2>
          <p className='text-black impact-para'>
            See the real impact of your support. Through these stories and
            moments, we witness the incredible strength of the communities we
            serve.
          </p>
        </div>
        <div className='max-w-360 mx-auto px-4 sm:px-6 lg:px-10'>
          {/* ── Main Grid ── */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
            {/* VIDEO CARD - Desktop pe 2 columns leta hai */}
            <div
              className='md:col-span-2 relative aspect-[1075/799]   rounded-[30px] overflow-hidden cursor-pointer group bg-gray-100'
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
                  {/* <div className='absolute bottom-0 left-0 right-0 bg-red-600 py-3 px-6'>
                    <p className='text-white font-bold text-lg md:text-xl italic uppercase tracking-wider'>
                      Please watch this video
                    </p>
                  </div> */}
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

            <div className='flex flex-col gap-4 md:gap-6 h-full'>
              {[0, 1].map(idx => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className='relative flex-1 aspect-[524/374] rounded-[30px] overflow-hidden cursor-pointer group'
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

          {/* ── BOTTOM ROW (3 Photos) ── */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
            {[2, 3, 4].map(idx => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className='relative aspect-[524/374] rounded-[30px] overflow-hidden cursor-pointer group'
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
