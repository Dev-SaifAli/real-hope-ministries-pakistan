'use client'
import { useState, useRef, useEffect, useMemo } from 'react'

import { buildImage, buildVideo } from '@/utils/cloudinary'

export interface Video {
  id: number
  thumbnail: string
  alt: string
  mediaSrc?: string | string[]
}


/* ---------------- UI Components ---------------- */

function PlayButton () {
  return (
    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition rounded-full'>
      <div className='w-0 h-0 ml-1 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-navy' />
    </div>
  )
}

function ComingSoonOverlay ({ onClose }: { onClose: () => void }) {
  return (
    <div className='absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 z-10'>
      <span className='text-white text-xl font-bold'>Coming Soon</span>
      <span className='text-white/60 text-sm'>
        This video is being prepared
      </span>
      <button
        onClick={e => {
          e.stopPropagation() // ← parent div ka onClick rok do
          onClose()
        }}
        className='mt-3 bg-navy/80 hover:bg-navy text-white rounded-full px-4 py-1 text-sm'
      >
        ✕ Close
      </button>
    </div>
  )
}

/* ---------------- Video Player ---------------- */

function VideoPlayer ({
  sources,
  poster,
  onClose
}: {
  sources: string[]
  poster: string
  onClose: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [index, setIndex] = useState(0)

  const currentSrc = useMemo(() => buildVideo(sources[index]), [sources, index])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()

    const playPromise = video.play()
    if (playPromise) {
      playPromise.catch(() => {})
    }
  }, [currentSrc])

  const handleEnded = () => {
    if (index < sources.length - 1) {
      setIndex(prev => prev + 1)
    }
  }

  return (
    <div className='absolute inset-0 bg-black'>
      {sources.length > 1 && (
        <div className='absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 z-10'>
          {sources.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}

      <video
        ref={videoRef}
        className='w-full h-full object-cover'
        autoPlay
        muted
        playsInline
        controls
        preload='metadata'
        poster={buildImage(poster, 1920)}
        onEnded={handleEnded}
      >
        <source src={currentSrc} type='video/mp4' />
      </video>

      <button
        onClick={e => {
          e.stopPropagation() // ← parent div ka onClick rok do
          onClose()
        }}
        className='absolute top-2 right-2 z-10 bg-navy/40 flex items-center justify-center hover:bg-green/80 text-white rounded-2xl w-6 h-6 p-1'
      >
        ✕
      </button>
    </div>
  )
}

/* ---------------- Main Component ---------------- */

export default function VideoCard ({ video }: { video: Video }) {
  const [state, setState] = useState<'idle' | 'playing' | 'coming'>('idle')

  const sources = useMemo(() => {
    if (!video.mediaSrc) return []
    return Array.isArray(video.mediaSrc)
      ? video.mediaSrc.filter(Boolean)
      : [video.mediaSrc]
  }, [video.mediaSrc])

  const hasVideo = sources.length > 0

  const handleClick = () => {
    setState(hasVideo ? 'playing' : 'coming')
  }

  const handleClose = () => setState('idle')

  return (
    <div
      className='shrink-0 rounded-2xl relative snap-center w-[92vw] sm:w-90 md:w-95 lg:w-105 h-55 sm:h-65 lg:h-70 overflow-hidden cursor-pointer group will-change-transform transform-gpu'
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <img
        src={buildImage(video.thumbnail, 800)}
        alt={video.alt}
        loading='eager'
        decoding='async'
        className='w-full h-full object-cover transform-gpu'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/20 group-hover:bg-black/35 transition' />

      {/* Idle state */}
      {state === 'idle' && (
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
          <PlayButton />
          {!hasVideo && (
            <span className='text-white/80 text-xs bg-black/40 px-2 py-0.5 rounded-full'>
              Coming Soon
            </span>
          )}
        </div>
      )}

      {/* Coming Soon */}
      {state === 'coming' && <ComingSoonOverlay onClose={handleClose} />}

      {/* Player */}
      {state === 'playing' && hasVideo ? (
        <VideoPlayer
          sources={sources}
          poster={video.thumbnail}
          onClose={handleClose}
        />
      ) : null}
    </div>
  )
}
