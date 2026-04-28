import PageHero from '@/components/hero/PageHero'
import MinistriesSection from '@/components/home/MinistriesSection'
import CTASection from '@/components/home/CTASection'
export default function AboutPage () {
  return (
    <>
      <main>
        <PageHero
          href='#projects'
          secondaryButtonText='Get Involve'
          title='Hope for Communities Across Pakistan'
          subtitle='Serving people through care, support, and outreach.'
          imageSrc='Mask_group_1_qnvxbp'
        />

        <MinistriesSection showDonateButton={true} />
        <CTASection />
      </main>
    </>
  )
}
