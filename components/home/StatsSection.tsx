import Image from 'next/image'

interface Stat {
  id: number
  value: string
  label: string
  icon: string
  alt: string
}

const stats: Stat[] = [
  { id: 1, value: '50,000+', label: 'People Helped Annually', icon: '/icons/stats/people.svg', alt: 'People icon' },
  { id: 2, value: '350', label: 'Water Pumps Installed', icon: '/icons/stats/water.svg', alt: 'Water drop icon' },
  { id: 3, value: '800', label: 'Families Supported', icon: '/icons/stats/home.svg', alt: 'Home icon' },
  { id: 4, value: '45', label: 'Communities Reached', icon: '/icons/stats/location.svg', alt: 'Location pin icon' }
]

function StatCard ({ stat }: { stat: Stat }) {
  return (
    // gap-3 on mobile, gap-5 on sm+ — tighter vertical rhythm on small screens
    <div className='flex flex-col items-center gap-3 sm:gap-5'>
      {/* Icon circle: slightly smaller on mobile to preserve whitespace */}
      <div className='w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full bg-[#1a3a5c] flex items-center justify-center'>
        <Image
          src={stat.icon}
          alt={stat.alt}
          width={32}
          height={32}
          className='opacity-90'
        />
      </div>
      {/* Stat value: 32px mobile → 40px sm → 48px md — prevents overflow at 320px */}
      <p className='font-display font-[680] text-white text-[32px] sm:text-[40px] md:text-[38px] lg:text-[48px] sm:tracking-wide leading-none'>
        {stat.value}
      </p>
      {/* Label: 14px on mobile, 16px on sm+ */}
      <p className='font-sans text-white text-[14px] sm:text-[16px] md:text-[14px] lg:text-[20px] text-center'>
        {stat.label}
      </p>
    </div>
  )
}

export default function StatsSection () {
  return (
    <section className='w-full bg-navy mt-11 sm:mt-14 md:mt-16 py-12 md:py-16 px-4 sm:px-6'>
      <div className='max-w-[1920px] mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6'>
          {stats.map((stat: Stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}