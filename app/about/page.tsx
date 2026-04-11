import PageHero from '@/components/hero/PageHero'

import MissionVisionSection from '@/components/about/MissionVisionSection'
import CTASection from '@/components/home/CTASection'
import AboutSection from '@/components/home/AboutSection'
import StatsSection from '@/components/home/StatsSection'
import VoicesSection from '@/components/about/VoicesSection'

export default function AboutPage () {
  return (
    <>
      <main>
        <PageHero
          href='#about'
          title='About Our Mission'
          subtitle='We are committed to bringing hope and support to communities in need.'
          imageSrc='/home-hero.png'
        />
        <AboutSection />
        <MissionVisionSection />
        <StatsSection />
        <VoicesSection />
        <CTASection />
      </main>
    </>
  )
}
