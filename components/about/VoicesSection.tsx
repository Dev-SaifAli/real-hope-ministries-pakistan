'use client'

import { useState } from 'react'
import Image from 'next/image'

// ─────────────────────────────────────────────
// TypeScript interfaces
// ─────────────────────────────────────────────
interface MediaItem {
  id: number
  src: string
  alt: string
  type: 'video' | 'image'
  youtubeId?: string
}

interface BottomPhoto {
  id: number
  src: string
  alt: string
  isLast?: boolean   // last photo shows +16 overlay
}

// ─────────────────────────────────────────────
// Data — replace with your actual image names
// ─────────────────────────────────────────────

// Left big video + right 2 stacked images
const mainMedia: MediaItem[] = [
  {
    id: 1,
    src: '/voices/video-thumb.webp',
    alt: 'Real Hope Ministry community video',
    type: 'video',
    youtubeId: '',   // add YouTube ID when available
  },
  {
    id: 2,
    src: '/voices/side-1.webp',
    alt: 'Blanket distribution to community',
    type: 'image',
  },
  {
    id: 3,
    src: '/voices/side-2.webp',
    alt: 'Community gathering on red mat',
    type: 'image',
  },
]

// Bottom row — 3 photos, last one has +16 overlay
const bottomPhotos: BottomPhoto[] = [
  { id: 1, src: '/voices/bottom-1.webp', alt: 'Child eating food' },
  { id: 2, src: '/voices/bottom-2.webp', alt: 'Children eating together' },
  { id: 3, src: '/voices/bottom-3.webp', alt: 'Large community event', isLast: true },
]

// ─────────────────────────────────────────────
// Play Button component
// ─────────────────────────────────────────────
function PlayButton() {
  return (
    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
      <div className="w-0 h-0 ml-1.5 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent border-l-[20px] border-l-navy" />
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function VoicesSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto px-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-12 max-w-[760px] mx-auto">
          <h2 className="font-display font-black text-navy text-4xl md:text-5xl leading-tight mb-5">
            Voices from the{' '}
            <span className="text-green">Field</span>
          </h2>
          <p className="font-sans text-black text-[16px] leading-relaxed">
            See the real impact of your support. Through these stories and moments, we witness the incredible
            strength of the communities we serve.
          </p>
        </div>

        {/* ── Top Row: Big video left + 2 stacked images right ──
            grid-cols-[3fr_2fr] → video takes 60%, images take 40%
            matching Figma proportions from screenshot
        ── */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 mb-4">

          {/* ── Big Video ── */}
          <div
            className="relative h-[420px] md:h-[500px]  overflow-hidden cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            <Image
              src={mainMedia[0].src}
              alt={mainMedia[0].alt}
              fill
              className="object-cover object-center"
            />
            {/* overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-200" />

            {/* Play button — centered */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
            )}

            {/* YouTube embed when playing */}
            {playing && mainMedia[0].youtubeId && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${mainMedia[0].youtubeId}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* ── Right: 2 stacked images ── */}
          <div className="grid grid-rows-2 gap-4">
            {/* Top right image */}
            <div className="relative  overflow-hidden">
              <Image
                src={mainMedia[1].src}
                alt={mainMedia[1].alt}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Bottom right image */}
            <div className="relative  overflow-hidden">
              <Image
                src={mainMedia[2].src}
                alt={mainMedia[2].alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Row: 3 equal photos ──
            Last photo has +16 overlay (more photos indicator)
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bottomPhotos.map((photo: BottomPhoto) => (
            <div
              key={photo.id}
              className="relative h-[260px]  overflow-hidden cursor-pointer group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />

              {/* +16 overlay on last photo */}
              {photo.isLast && (
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                  <span className="font-display font-black text-white text-[42px]">
                    +16
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}