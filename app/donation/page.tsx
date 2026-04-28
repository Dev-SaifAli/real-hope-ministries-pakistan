import PageHero from '@/components/hero/PageHero'
import DonationProjects from '@/components/donation/DonationProjects'
import DonationForm from '@/components/donation/DonationForm'
import StatsSection from '@/components/home/StatsSection'
import CTASection from '@/components/home/CTASection'
export default function HomePage () {
  return (
    <>
      <main>
        <PageHero
          href='#donation'
          primaryHref='#donation-form'
          secondaryButtonText='Get Involve'
          title='Support Our Mission Bring Hope to Communities in Pakistan'
          subtitle='We are dedicated to uplifting the marginalized, providing essential aid, and building sustainable futures through compassion and action.'
          imageSrc='Mask_group_1_qnvxbp'
        />
        <div className=' w-full bg-white px-4 sm:px-8 md:px-16 lg:px-20 pt-12 md:pt-28 lg:pt-20 pb-16 md:pb-20'>
          <div className='max-w-360 mx-auto'>
            <div className='text-center px-4 sm:px-6 mb-10 md:mb-14 max-w-[900px] mx-auto'>
              <h1 className='font-display font-semibold text-navy impact-heading mb-3  sm:mb-6'>
                Ways You Can <span className='text-green'>Help</span>
              </h1>
              <p className='font-sans text-black impact-para'>
                Choose a specific cause to support and make a direct impact on
                the lives of those in need.
              </p>
            </div>
          </div>
        </div>
        <DonationProjects />
        <DonationForm />
        <StatsSection />
        <CTASection />
      </main>
    </>
  )
}
