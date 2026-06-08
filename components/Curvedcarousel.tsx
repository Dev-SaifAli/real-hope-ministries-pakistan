'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import Image from 'next/image'
import { buildImage } from '@/utils/cloudinary'

interface CurvedCarouselProps {
  images: string[]
}

export default function CurvedCarousel ({ images }: CurvedCarouselProps) {
  const CARD_WIDTH = 308
  const CARD_GAP = 20
  const STEP = CARD_WIDTH + CARD_GAP

  // Double the images for seamless loop
  const looped = [...images, ...images, ...images, ...images]
  const totalW = looped.length * STEP
  const startX = -(images.length * STEP)

  const x = useMotionValue(startX)
  const isDragging = useRef(false)

  // Speed: images.length * STEP / duration (old duration was images.length * 3)
  // So speed = STEP / 3 pixels per second
  const SPEED = STEP / 3

  useAnimationFrame((_t, delta) => {
    if (isDragging.current) return

    const moveBy = (SPEED * delta) / 1000
    let newX = x.get() - moveBy

    // Infinite wrap-around
    // If we scroll past the second set, jump back by one set
    const resetPoint = -(images.length * 2 * STEP)
    if (newX < resetPoint) {
      newX += images.length * STEP
    } else if (newX > 0) {
      newX -= images.length * STEP
    }

    x.set(newX)
  })

  return (
    <div
      className='relative w-full overflow-hidden'
      style={{ height: '500px' }}
    >
      {/* ── Image strip ── */}
      <motion.div
        className='absolute top-1/2 -translate-y-1/2 flex items-center cursor-grab active:cursor-grabbing'
        style={{ x, gap: `${CARD_GAP}px`, width: `${totalW}px` }}
        drag='x'
        dragConstraints={{ left: -(images.length * 2 * STEP), right: 0 }}
        dragElastic={0.05}
        onDragStart={() => {
          isDragging.current = true
        }}
        onDragEnd={() => {
          isDragging.current = false
          // Ensure we stay within the loop bounds after drag
          const current = x.get()
          if (current < -(images.length * 2 * STEP) || current > 0) {
            x.set(startX)
          }
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
