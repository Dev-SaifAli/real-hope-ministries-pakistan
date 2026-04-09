import PageHero from '@/components/hero/PageHero'
import MinistriesSection from '@/components/home/MinistriesSection'
import CTASection from '@/components/home/CTASection'
export default function HomePage () {
  return (
    <>
      <main>
        <PageHero
          title='Hope for Communities Across Pakistan'
          subtitle='Serving people through care, support, and outreach.'
          imageSrc='/home-hero.png'
        />

        <MinistriesSection />
        <CTASection />
      </main>
    </>
  )
}
