import CurvedCarousel from '../Curvedcarousel'

const communityImages = [
  'IMG_0803_g9zy0s.jpg',
  'c88d8ba9cc368e151485336b1073cdea69270d73_2_cgzaut',
  'Mask_group_4_drqvat',
  'IMG_0663_otmahe',
  'DSC_7820_1_qda3pj'
]
export default function CommunitySection () {
  return (
    <section id='community' className='w-full bg-white   overflow-hidden scroll-mt-28'>
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
