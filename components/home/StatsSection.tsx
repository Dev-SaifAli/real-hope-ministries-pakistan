'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Droplet, House, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'
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
    icon: <Users size={24} strokeWidth={2} className='text-navy' />
  },
  {
    id: 2,
    numeric: 350,
    suffix: '',
    label: 'Water Pumps Installed',
    icon: <Droplet size={24} strokeWidth={2} className='text-navy' />
  },
  {
    id: 3,
    numeric: 800,
    suffix: '',
    label: 'Families Supported',
    icon: <House size={24} strokeWidth={2} className='text-navy' />
  },
  {
    id: 4,
    numeric: 450,
    suffix: '',
    label: 'Communities Reached',
    icon: <MapPin size={24} strokeWidth={2} className='text-navy' />
  }
]

// ─── useCountUp hook ──────────────────────────────────────────────────────────
// Starts ONLY when element enters viewport — then counts 0 → target
function useCountUp (target: number, duration: number = 2000) {
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
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
      setCount(Math.floor(target * eased))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(target)
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target, duration])

  return { count, ref }
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard ({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.numeric)

  return (
    <div
      ref={ref}
      className='
        flex flex-col gap-3
        bg-white rounded-3xl
        items-center w-full justify-center mx-auto
        aspect-square p-4

        shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]
        border border-gray-100
        transition-shadow duration-300
        hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]
      '
    >
      {/* Icon */}
      <div className='2xl:w-16 2xl:h-16 md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#0B25450D] flex items-center justify-center shrink-0 mb-2'>
        {stat.icon}
      </div>

      {/* Animated number */}
      <p className='font-display font-extrabold text-navy text-2xl lg:text-3xl 2xl:text-4xl leading-none tracking-tight'>
        {count.toLocaleString('en-US')}
        {stat.suffix}
      </p>

      {/* Label */}
      <p className='font-sans text-black text-xs xl:text-sm 2xl:text-base whitespace-nowrap text-center  '>
        {stat.label}
      </p>
    </div>
  )
}

// ─── StatsSection ─────────────────────────────────────────────────────────────
export default function StatsSection () {
  const pathName = usePathname()

  const buttonHref =
    pathName === '/support-us'
      ? '/contact#contact-form'
      : '/support-us#donation-form'
  const buttonText =
    pathName === '/support-us' ? 'Contact Us' : 'Support Our Mission'
  return (
    <section className='main-container bg-white   mt-8 mb-8 sm:mb-16 lg:mb-20 xl:mb-28 sm:mt-17.5  '>
      
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center'>
          {/* ── Left: Heading + Para + Button ── */}
          <div className='lg:col-span-7 col-span-12 flex flex-col'>
            <h2 className='font-display font-semibold text-navy  max-[769px]:text-center impact-heading mb-3 xl:mb-5'>
              Creating <span className='text-green'>Lasting Impact</span> <br />
              <span className='lg:whitespace-nowrap'>
                Across Communities in <br className='lg:block hidden' />
                <span className='text-green'>Pakistan</span>
              </span>
            </h2>

            <p className='font-sans text-black impact-para max-[769px]:text-center px-2 sm:px-4 mb-8 xl:mb-10 w-full whitespace-normal lg:max-w-[500px] xl:max-w-2xl'>
              Through our ongoing efforts across Pakistan, we have been able to support vulnerable communities, provide essential resources, and create opportunities for a better future. Our work is focused on    delivering real, measurable impact by addressing immediate needs
              while also building long-term support systems. Every initiative we
              undertake is driven by compassion, transparency, and a commitment
              to meaningful change.
            </p>

            <div className='pb-2 max-[769px]:text-center '>
              <Button
                href={buttonHref}
                text={buttonText}
                variant='supportMission'
              />
            </div>
          </div>

          {/* ── Right: 2x2 stat cards ── */}
          <div className='lg:col-span-5 col-span-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 xl:gap-8 max-w-[480px] sm:max-w-full lg:max-w-[400px] 2xl:max-w-[480px] w-full mx-auto lg:ml-auto self-start py-4'>
            {stats.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
       
    </section>
  )
}
