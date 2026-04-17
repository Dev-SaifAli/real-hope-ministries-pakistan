import CurvedCarousel from '../Curvedcarousel'

const communityImages = [
  '/community/photo-1.png',
  '/community/photo-2.png',
  '/community/photo-3.png',
  '/community/photo-4.png',
  '/community/photo-5.png'
]
export default function CommunitySection () {
  return (
    <section id='community' className='w-full bg-white py-14 sm:py-16 md:py-18 lg:py-20 overflow-hidden '>
      {/* ── Header — centered ── */}
      <div className='text-center px-4 sm:px-6 mb-10 md:mb-10 lg:mb-12 max-w-[900px] mx-auto'>
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
