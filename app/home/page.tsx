import HomeHero from '@/components/hero/HomeHero'
import MinistriesSection from '@/components/home/MinistriesSection'
import CTASection from '@/components/home/CTASection'
import AboutSection from '@/components/home/AboutSection'
import StatsSection  from '@/components/home/StatsSection'
import CommunitySection from '@/components/home/CommunitySection'
import StorySection from '@/components/home/StorySection'
import ContactInfoSection from '@/components/home/ContactInfoSection'

export const metadata = { title: 'Home' }

export default function HomePage () {
  return (
    <>
      <main>
        <HomeHero photoId='home-hero_hlzazt' />
        <AboutSection />
        <MinistriesSection  showDonateButton={true} />
        <StatsSection />
        <CommunitySection />
        <StorySection/>
        <CTASection />
        <ContactInfoSection />
      </main>
    </>
  )
}
