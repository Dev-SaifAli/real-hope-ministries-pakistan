import PageHero from '@/components/hero/PageHero'
import DonationProjects from '@/components/donation/DonationProjects'
import DonationForm from '@/components/donation/DonationForm'
import StatsSection from '@/components/home/StatsSection'
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
        <div className=' w-full bg-white   pt-12 md:pt-28 lg:pt-20  '>
          <DonationForm />
          <StatsSection />
        </div>
      </main>
    </>
  )
}
