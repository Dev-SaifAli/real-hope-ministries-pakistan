'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { buildImage} from '@/utils/cloudinary'


interface CurvedCarouselProps {
  images: string[]
}

export default function CurvedCarousel ({ images }: CurvedCarouselProps) {
  const CARD_WIDTH = 308
  const CARD_GAP = 20
  const STEP = CARD_WIDTH + CARD_GAP

  const looped = [...images, ...images, ...images, ...images]
  const totalW = looped.length * STEP
  const startX = -(images.length * STEP)

  const x = useMotionValue(startX)
  const controls = useAnimation()
  const isDragging = useRef(false)

  const startAutoScroll = () => {
    if (isDragging.current) return
    controls.start({
      x: [x.get(), x.get() - images.length * STEP],
      transition: {
        duration: images.length * 3,
        ease: 'linear',
        repeat: Infinity
      }
    })
  }

  useEffect(() => {
    startAutoScroll()
  }, [])

  return (
    <div
      className='relative w-full overflow-hidden'
      style={{ height: '500px' }}
    >
      {/* ── Image strip ── */}
      <motion.div
        className='absolute top-1/2 -translate-y-1/2 flex items-center cursor-grab active:cursor-grabbing'
        style={{ x, gap: `${CARD_GAP}px`, width: `${totalW}px` }}
        animate={controls}
        drag='x'
        dragConstraints={{ left: -(images.length * 2 * STEP), right: 0 }}
        dragElastic={0.05}
        onDragStart={() => {
          isDragging.current = true
          controls.stop()
        }}
        onDragEnd={() => {
          isDragging.current = false
          const current = x.get()
          if (current < -(images.length * 2 * STEP) || current > 0) {
            x.set(startX)
          }
          setTimeout(() => startAutoScroll(), 800)
        }}
      >
        {looped.map((src, index) => (
          <div
            key={index}
            className='relative  shrink-0 overflow-hidden'
            style={{
              width: `${CARD_WIDTH}px`,
              height: '260px',
              // ─── NO rotateY, NO scale, NO borderRadius ───
              // Cards stay full size and rectangular always
              // borderRadius: '12px',
              flexShrink: 0
            }}
          >
            <Image
              src={buildImage(src,800)}
              alt={`Slide ${index + 1}`}
              fill
              draggable={false}
              className='object-cover object-center select-none'
            />
          </div>
        ))}
      </motion.div>

      {/* TOP ELLIPSE MASK */}
      <div
        className='absolute top-[-150px] left-1/2 -translate-x-1/2 bg-white'
        style={{
          width: '160%',
          height: '300px',
          borderRadius: '50%',
          zIndex: 20
        }}
      />

      {/* ── Bottom white ellipse ── */}
      <div
        className='absolute bottom-[-150px] left-1/2 -translate-x-1/2 bg-white'
        style={{
          width: '160%',
          height: '300px',
          borderRadius: '50%',
          zIndex: 20
        }}
      />
    </div>
  )
}
