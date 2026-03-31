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
    thumbnail: '/videos/video-1.webp',
    alt: 'Real Hope Ministry community gathering'
  },
  {
    id: 2,
    thumbnail: '/videos/video-2.webp',
    alt: 'Widows ministry - Christmas clothes'
  },
  {
    id: 3,
    thumbnail: '/videos/video-3.webp',
    alt: 'Freedom from slavery project'
  },
  { id: 4, thumbnail: '/videos/video-4.webp', alt: 'Clean water project' },
  { id: 5, thumbnail: '/videos/video-5.webp', alt: 'Food distribution' },
  { id: 6, thumbnail: '/videos/video-6.webp', alt: 'Youth mission' },
  { id: 7, thumbnail: '/videos/video-7.webp', alt: 'Orphanage project' }
]

function PlayButton () {
  return (
    <div className='w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200'>
      {/* Triangle play icon */}
      <div className='w-0 h-0 ml-1 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-[#0B2545]' />
    </div>
  )
}

function VideoCard ({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className='flex-shrink-0 relative w-[420px] h-[280px]  overflow-hidden cursor-pointer group'
      onClick={() => setPlaying(true)}
    >
      {/* Thumbnail image */}
      <img
        src={video.thumbnail}
        alt={video.alt}
        className='w-full h-full object-cover'
      />

      {/* Dark overlay on hover */}
      <div className='absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-200' />

      {/* Play button — centered */}
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
  const totalDots = videos.length - visibleCount + 1 // = 5 dots

  const handleDotClick = (index: number) => {
    setActiveSlide(index)
    const slider = document.getElementById('video-slider')
    if (slider) {
      // Each card width (420) + gap (24)
      slider.scrollTo({ left: index * (420 + 24), behavior: 'smooth' })
    }
  }

  return (
    <section className='w-full  bg-white py-20 overflow-hidden'>
      {/* ── Section Header — centered text ── */}
      <div className='text-center px-6 mb-12 max-w-[900px] mx-auto'>
        {/* Green label above heading */}
        <p className='font-display font-[515] text-green   text-[18px] mb-4'>
          About Real Hope Pakistan
        </p>

        {/* Main heading — navy, "Compassion" in green */}
        <h2 className='font-display font-[515] text-navy text-4xl md:text-5xl leading-tight mb-6'>
          A Mission of <span className='text-green'>Compassion</span>,{' '}
          <br className='hidden md:block' />
          Faith and Action
        </h2>

        {/* Description paragraph */}
        <p className='font-sans text-black text-[16px] leading-relaxed max-w-[780px] mx-auto'>
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

      <div className='max-w-[1400px] mx-auto px-10'>
        <div
          id='video-slider'
          className='flex gap-6 overflow-x-auto scroll-smooth pb-4'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={e => {
            const scrollLeft = e.currentTarget.scrollLeft
            const newSlide = Math.round(scrollLeft / (420 + 24))
            setActiveSlide(newSlide)
          }}
        >
          {videos.map((video: Video) => (
            <VideoCard key={video.id} video={video} />
          ))}
          <div className='flex-shrink-0 w-6' />
        </div>
      </div>

      {/* ── Dot Indicators ── */}
      <div className='flex items-center justify-center gap-2 mt-8'>
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              rounded-full transition-all duration-200
              ${
                activeSlide === index
                  ? 'w-3 h-3 bg-[#0B2545]' // active dot — navy, bigger
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400' // inactive dot
              }
            `}
          />
        ))}
      </div>
    </section>
  )
}
