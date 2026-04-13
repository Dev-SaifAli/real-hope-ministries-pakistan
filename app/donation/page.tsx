import PageHero from '@/components/hero/PageHero'
import DonationProjects from '@/components/donation/DonationProjects'
import DonationForm from '@/components/donation/DonationForm'
export default function HomePage () {
  return (
    <>
      <main>
        <PageHero
        href="#donation"
          title='Support Our Mission Bring Hope to Communities in Pakistan'
          subtitle='We are dedicated to uplifting the marginalized, providing essential aid, and building sustainable futures through compassion and action.'
          imageSrc='/home-hero.png'
        />
        <div className='min-h-screen w-full bg-white px-4 sm:px-8 md:px-16 lg:px-20 pt-12 md:pt-28 lg:pt-20 pb-16 md:pb-20'>
          <div className='max-w-360 mx-auto'>
            <div className='text-center px-4 sm:px-6 mb-10 md:mb-14 max-w-[900px] mx-auto'>
              <h1 className='font-display font-semibold text-navy text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-3  sm:mb-6'>
                Ways You Can <span className='text-green'>Help</span>
              </h1>
              <p className='font-sans text-black text-[15px] sm:text-lg md:text-xl'>
                Choose a specific cause to support and make a direct impact on
                the lives of those in need.
              </p>
            </div>
            <DonationProjects />
            <DonationForm />
          </div>
        </div>
      </main>
    </>
  )
}
