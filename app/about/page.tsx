import Hero from '@/components/Hero'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import CTASection from '@/components/home/CTASection'
import AboutSection from '@/components/home/AboutSection'
import StatsSection  from '@/components/home/StatsSection'
import VoicesSection from '@/components/about/VoicesSection'

export default function AboutPage () {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <MissionVisionSection/>
        <StatsSection />
        <VoicesSection/>
        <CTASection />
      </main>
    </>
  )
}
