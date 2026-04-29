import CurvedCarousel from '../Curvedcarousel'

const communityImages = [
  'food_vzy14n',
  'orphanage_b3ciwu',
  'photo-4_racfz6',
  'photo-3_qxsn4b',
  'photo-5_lwvur4',
  '2c935d9d8598fb9b5264ff3413972374581caf98_i23etx',
  'primary_d1yylj',
  'widows_rvnx1s',
  'DSC_7820_1_qda3pj',
  'DSC_7679_1_hjzlhk',
  'DSC_3082_1_lfvubr'
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
