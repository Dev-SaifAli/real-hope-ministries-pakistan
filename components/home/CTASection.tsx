import Button from '@/components/ui/Button'

export default function CTASection () {
  return (
    // py-12 mobile, py-20 md+ — px-4 mobile se start
    <section className='w-full bg-white mb-12 sm:mb-18 md:mb-23 px-4 sm:px-6'>
      <div className='impact-section'>
        <h2 className='font-display font-semibold text-navy impact-heading leading-tight mb-2 md:mb-6'>
          Be a Part of the <span className='text-green'>Change</span>
        </h2>
        {/* mb-8 mobile, mb-10 md+ */}
        <p className='font-sans text-black impact-para mx-auto mb-8 md:mb-10'>
          Your support makes our mission possible. Whether through prayer,
          volunteering, or financial giving, you can bring real hope to
          communities in need.
        </p>
        {/* gap-3 mobile, gap-5 sm+ — buttons stack on very small screens */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10'>
          <Button
            variant='supportMission'
            text='Support our mission'
            href='/donation#donation-form'
          />
          <Button
            variant='getInvolved'
            text='Get Involved'
            href='/get-involved'
          />
        </div>
      </div>
    </section>
  )
}
