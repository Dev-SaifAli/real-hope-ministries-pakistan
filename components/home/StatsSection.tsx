import Image from 'next/image'

// ─────────────────────────────────────────────
// TypeScript interface — shape of each stat
// ─────────────────────────────────────────────
interface Stat {
  id: number
  value: string       // e.g. "50,000+"
  label: string       // e.g. "People Helped Annually"
  icon: string        // icon filename — add to /public/icons/stats/
  alt: string
}

// ─────────────────────────────────────────────
// Data — update values as needed
// ─────────────────────────────────────────────
const stats: Stat[] = [
  {
    id: 1,
    value: '50,000+',
    label: 'People Helped Annually',
    icon: '/icons/stats/people.svg',
    alt: 'People icon',
  },
  {
    id: 2,
    value: '350',
    label: 'Water Pumps Installed',
    icon: '/icons/stats/water.svg',
    alt: 'Water drop icon',
  },
  {
    id: 3,
    value: '800',
    label: 'Families Supported',
    icon: '/icons/stats/home.svg',
    alt: 'Home icon',
  },
  {
    id: 4,
    value: '45',
    label: 'Communities Reached',
    icon: '/icons/stats/location.svg',
    alt: 'Location pin icon',
  },
]

// ─────────────────────────────────────────────
// StatCard — individual stat item
// ─────────────────────────────────────────────
function StatCard({ stat }: { stat: Stat }) {
  return (
    // flex-col — icon on top, number, label below
    // items-center — everything centered horizontally
    <div className="flex flex-col items-center gap-5">

      {/* ── Icon Circle ──
          Grayish circle with icon inside — matching screenshot
          bg-[#1a3a5c] = slightly lighter than navy bg
      ── */}
      <div className="w-[72px] h-[72px] rounded-full bg-[#1a3a5c] flex items-center justify-center">
        <Image
          src={stat.icon}
          alt={stat.alt}
          width={32}
          height={32}
          className="invert opacity-80"  // makes dark SVGs white
        />
      </div>

      {/* ── Number ──
          font-display = Poppins
          font-black   = 900 weight — bold as in screenshot
      ── */}
      <p className="font-display font-black text-white text-[40px] md:text-[48px] leading-none">
        {stat.value}
      </p>

      {/* ── Label ── */}
      <p className="font-sans text-white/80 text-[16px] text-center">
        {stat.label}
      </p>

    </div>
  )
}

// ─────────────────────────────────────────────
// StatsSection — main exported component
// ─────────────────────────────────────────────
export default function StatsSection() {
  return (
    // Navy bg — same as footer
    // py-16 — vertical breathing room
    <section className="w-full bg-[#0B2545] py-16 px-6">

      {/* ── Grid — 4 columns on desktop ──
          same max-w as other sections for alignment
      ── */}
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat: Stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>

    </section>
  )
}