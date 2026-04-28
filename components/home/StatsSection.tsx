'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Droplet, House, MapPin } from 'lucide-react'
import Button from '../ui/Button'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Stat {
  id: number
  numeric: number
  suffix: string
  label: string
  icon: React.ReactNode
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats: Stat[] = [
  {
    id: 1,
    numeric: 50000,
    suffix: '+',
    label: 'People Helped Annually',
    icon: <Users size={24} strokeWidth={1.5} className='text-slate-600' />
  },
  {
    id: 2,
    numeric: 350,
    suffix: '',
    label: 'Water Pumps Installed',
    icon: <Droplet size={24} strokeWidth={1.5} className='text-slate-600' />
  },
  {
    id: 3,
    numeric: 800,
    suffix: '',
    label: 'Families Supported',
    icon: <House size={24} strokeWidth={1.5} className='text-slate-600' />
  },
  {
    id: 4,
    numeric: 450,
    suffix: '',
    label: 'Communities Reached',
    icon: <MapPin size={24} strokeWidth={1.5} className='text-slate-600' />
  }
]

// ─── useCountUp hook ──────────────────────────────────────────────────────────
// Starts ONLY when element enters viewport — then counts 0 → target
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Watch for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  // Count up with easeOutQuart
  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)  // easeOutQuart
      setCount(Math.floor(target * eased))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(target)
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target, duration])

  return { count, ref }
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.numeric)

  return (
    <div
      ref={ref}
      className='
        flex flex-col gap-3
        bg-white rounded-2xl
        items-center w-full max-w-[180px] sm:max-w-[240px] justify-center mx-auto py-6 px-4
        shadow-[0_2px_16px_rgba(0,0,0,0.06)]
        border border-gray-100
        transition-shadow duration-300
        hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]
      '

    >
      {/* Icon */}
      <div className='w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0'>
        {stat.icon}
      </div>

      {/* Animated number */}
      <p className='font-display font-bold text-navy text-2xl sm:text-3xl leading-none tracking-tight'>
        {count.toLocaleString('en-US')}{stat.suffix}
      </p>

      {/* Label */}
      <p className='font-sans text-sm sm:text-[15px] text-center leading-snug'>
        {stat.label}
      </p>
    </div>
  )
}

// ─── StatsSection ─────────────────────────────────────────────────────────────
export default function StatsSection() {
  return (
    <section className='main-container bg-white   mt-12 mb-12 sm:mb-16 lg:mb-20 xl:mb-28 sm:mt-17.5  '>
      <div className='mx-auto flex justify-center'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

          {/* ── Left: Heading + Para + Button ── */}
          <div className='flex flex-col'>
            <h2 className='font-display font-semibold text-navy impact-heading mb-5'>
              Creating{' '}
              <span className='text-green'>Lasting Impact</span>
              <br />
              Across Communities in <span className='text-green'>Pakistan</span>
            </h2>

            {/* ✅ max-w-md — para on lg won't stretch too wide */}
            <p className='font-sans text-black impact-para  mb-8 md:mb-10 max-w-150 '>
              Through our ongoing efforts across Pakistan, we have been able to
              support vulnerable communities, provide essential resources, and
              create opportunities for a better future. Our work is focused on
              delivering real, measurable impact by addressing immediate needs
              while also building long-term support systems. Every initiative we
              undertake is driven by compassion, transparency, and a commitment
              to meaningful change.
            </p>

            <div>
              <Button href='/contact' text='Contact Us' variant='supportMission' />
            </div>
          </div>

          {/* ── Right: 2x2 stat cards ── */}
          <div className='grid grid-cols-2 gap-4 sm:gap-5'>
            {stats.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}