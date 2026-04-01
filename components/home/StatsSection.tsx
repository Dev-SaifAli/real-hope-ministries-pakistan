import Image from 'next/image'

interface Stat {
  id: number
  value: string
  label: string
  icon: string
  alt: string
}

const stats: Stat[] = [
  {
    id: 1,
    value: '50,000+',
    label: 'People Helped Annually',
    icon: '/icons/stats/people.svg',
    alt: 'People icon'
  },
  {
    id: 2,
    value: '350',
    label: 'Water Pumps Installed',
    icon: '/icons/stats/water.svg',
    alt: 'Water drop icon'
  },
  {
    id: 3,
    value: '800',
    label: 'Families Supported',
    icon: '/icons/stats/home.svg',
    alt: 'Home icon'
  },
  {
    id: 4,
    value: '45',
    label: 'Communities Reached',
    icon: '/icons/stats/location.svg',
    alt: 'Location pin icon'
  }
]

// StatCard — individual stat item

function StatCard ({ stat }: { stat: Stat }) {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='w-[72px] h-[72px] rounded-full bg-[#1a3a5c] flex items-center justify-center'>
        <Image
          src={stat.icon}
          alt={stat.alt}
          width={32}
          height={32}
          className='opacity-90'
        />
      </div>

      <p className='font-display font-[515] text-white text-[40px] md:text-[48px] leading-none'>
        {stat.value}
      </p>

      <p className='font-sans text-white/80 text-[16px] text-center'>
        {stat.label}
      </p>
    </div>
  )
}

// StatsSection — main component

export default function StatsSection () {
  return (
    <section className='w-full bg-navy py-16 px-6'>
      <div className='max-w-[1400px] mx-auto px-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6'>
          {stats.map((stat: Stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
