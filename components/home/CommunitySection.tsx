import CurvedCarousel from '../Curvedcarousel'

const communityImages = [
  'photo-1_fr8dcx',
  'photo-2_qiipek',
  'photo-3_qxsn4b',
  'photo-4_racfz6',
  'photo-5_lwvur4'
]
export default function CommunitySection () {
  return (
    <section id='community' className='w-full bg-white   overflow-hidden '>
      {/* ── Header — centered ── */}
      <div className='impact-section'>
        <h2 className='font-display font-semibold text-navy text-3xl sm:text-4xl md:text-5xl  leading-tight mb-2 md:mb-6'>
          Community In <span className='text-green'>Action</span>
        </h2>

        <p className='font-sans text-black impact-para'>
          Real stories and meaningful moments captured during our fieldwork
          across Pakistan, highlighting the communities we serve and the impact
          of compassion, support, and hope in everyday lives.
        </p>
      </div>

      <CurvedCarousel images={communityImages} />
    </section>
  )
}
