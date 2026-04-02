import Button from '@/components/Button'

export default function CTASection() {
  return (
    // py-12 mobile, py-20 md+ — px-4 mobile se start
    <section className='w-full bg-white py-12 md:py-20 px-4 sm:px-6'>
      <div className='max-w-[925px] mx-auto text-center'>
        <h2 className='font-display font-semibold text-navy text-[26px] sm:text-[32px] md:text-[40px] leading-tight mb-4 md:mb-6'>
          Be a Part of the <span className='text-green'>Change</span>
        </h2>
        {/* mb-8 mobile, mb-10 md+ */}
        <p className='font-sans text-black text-[16px] sm:text-[18px] md:text-[21px] leading-relaxed mx-auto mb-8 md:mb-10'>
          Your support makes our mission possible. Whether through prayer,
          volunteering, or financial giving, you can bring real hope to
          communities in need.
        </p>
        {/* gap-3 mobile, gap-5 sm+ — buttons stack on very small screens */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5'>
          <Button variant='supportMission' text='Support our mission' href='/support' />
          <Button variant='getInvolved' text='Get Involved' href='/get-involved' />
        </div>
      </div>
    </section>
  )
}