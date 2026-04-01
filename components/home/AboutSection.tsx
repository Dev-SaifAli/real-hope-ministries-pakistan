'use client'

import { useState } from 'react'

interface Video {
  id: number
  thumbnail: string
  alt: string
  youtubeId?: string
}

const videos: Video[] = [
  {
    id: 1,
    thumbnail: '/videos/video-1.png',
    alt: 'Real Hope Ministry community gathering'
  },
  {
    id: 2,
    thumbnail: '/videos/video-2.png',
    alt: 'Widows ministry - Christmas clothes'
  },
  {
    id: 3,
    thumbnail: '/videos/video-3.png',
    alt: 'Freedom from slavery project'
  },
  { id: 4, thumbnail: '/videos/video-4.png', alt: 'Clean water project' },
  { id: 5, thumbnail: '/videos/video-5.png', alt: 'Food distribution' },
  { id: 6, thumbnail: '/videos/video-6.png', alt: 'Youth mission' },
  { id: 7, thumbnail: '/videos/video-7.png', alt: 'Orphanage project' }
]

function PlayButton () {
  return (
    <div className='w-12 h-12 sm:w-14 sm:h-14  bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 rounded-full'>
      <div className='w-0 h-0 ml-1 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-16 border-l-navy' />
    </div>
  )
}

function VideoCard ({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      // FIX: Responsive card width using CSS clamp via w-[80vw] on mobile,
      // fixed width on larger screens
      className='flex-shrink-0 relative w-[80vw] sm:w-[360px] md:w-[380px] lg:w-[420px] h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden cursor-pointer group '
      onClick={() => setPlaying(true)}
    >
      <img
        src={video.thumbnail}
        alt={video.alt}
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-200' />
      {!playing && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <PlayButton />
        </div>
      )}
      {playing && video.youtubeId && (
        <iframe
          className='absolute inset-0 w-full h-full'
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      )}
    </div>
  )
}

export default function AboutSection () {
  const [activeSlide, setActiveSlide] = useState(0)

  const visibleCount = 3
  const totalDots = videos.length - visibleCount + 1

  const handleDotClick = (index: number) => {
    setActiveSlide(index)
    const slider = document.getElementById('video-slider')
    if (slider) {
      // FIX: Read actual card width from DOM instead of hardcoding 420+24
      const firstCard = slider.firstElementChild as HTMLElement
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 444
      slider.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className='w-full bg-white py-12 md:py-20 overflow-hidden'>
      {/* ── Section Header ── */}
      <div className='text-center px-4 sm:px-6 mb-10 md:mb-12 max-w-[900px] mx-auto'>
        <p className='font-display font-semibold text-green text-[16px] sm:text-[18px] mb-3 md:mb-4'>
          About Real Hope Pakistan
        </p>

        {/* FIX: smoother type scale — 3xl → 4xl → 5xl */}
        <h2 className='font-display font-semibold text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 md:mb-6'>
          A Mission of <span className='text-green'>Compassion</span>,{' '}
          <br className='hidden md:block' />
          Faith and Action
        </h2>

        <p className='font-sans text-black md:text-[16px] sm:text-[16px] leading-relaxed  mx-auto'>
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

      {/* FIX: px-4 on mobile, px-6 on sm, px-10 on lg */}
      <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
        <div
          id='video-slider'
          className='flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={e => {
            const slider = e.currentTarget
            const firstCard = slider.firstElementChild as HTMLElement
            const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 444
            const newSlide = Math.round(slider.scrollLeft / cardWidth)
            setActiveSlide(newSlide)
          }}
        >
          {videos.map((video: Video) => (
            <VideoCard key={video.id} video={video} />
          ))}
          {/* FIX: Larger trailing spacer so last card doesn't get clipped on mobile */}
          <div className='flex-shrink-0 w-4 sm:w-6' />
        </div>
      </div>

      {/* ── Dot Indicators ── */}
      <div className='flex items-center justify-center gap-2 mt-6 md:mt-8'>
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              rounded-full transition-all duration-200
              ${
                activeSlide === index
                  ? 'w-3 h-3 bg-navy'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>
    </section>
  )
}
