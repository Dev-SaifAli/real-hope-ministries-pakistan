import PageHero from '@/components/hero/PageHero'

import MissionVisionSection from '@/components/about/MissionVisionSection'
import FounderSection from '@/components/about/FounderSection'
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
          title='Our Mission for Hope and Services'
          subtitle='Empowering Vulnerable communities across Pakistan through compassionate aid, Sustainable Development , and unwavering supports'
          imageSrc='/home-hero.png'
        />
        <AboutSection />
        <MissionVisionSection />
        <FounderSection/>
        <StatsSection />
        <VoicesSection />
        <CTASection />
      </main>
    </>
  )
}
