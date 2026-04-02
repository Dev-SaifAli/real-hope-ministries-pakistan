import Hero from '@/components/Hero'
import MinistriesSection from '@/components/home/MinistriesSection'
import CTASection from '@/components/home/CTASection'
export default function HomePage () {
  return (
    <>
      <main>
        <Hero />
        <MinistriesSection />
        <CTASection />
      </main>
    </>
  )
}
