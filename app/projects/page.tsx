import PageHero from '@/components/hero/PageHero'
import MinistriesSection from '@/components/home/MinistriesSection'
import CTASection from '@/components/home/CTASection'
export const metadata = { title: 'Projects' }

export default function ProjectsPage () {
  return (
    <>
      <main>
        <PageHero
          href='#projects'
          secondaryButtonText='See Projects'
          title='Our Missionary Work Across Pakistan'
          subtitle='Serving people through care, support, and outreach.'
          imageSrc='Gemini_Generated_Image_zckniczckniczckn_pacsn6'
        />

        <MinistriesSection 
          showDonateButton={false} 
          showProgress={false} 
          showUrgent={false} 
        />
        <CTASection />
      </main>
    </>
  )
}
