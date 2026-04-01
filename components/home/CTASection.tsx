// components/CTASection.tsx
import Button from '@/components/Button'

export default function CTASection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[925px] mx-auto text-center">

        <h2 className="font-display font-semibold text-navy text-4xl md:text-5xl leading-tight mb-6">
          Be a Part of the{' '}
          <span className="text-green">Change</span>
        </h2>

        <p className="font-sans text-black text-[18px] leading-relaxed max-w-[600px] mx-auto mb-10">
          Your support makes our mission possible. Whether through prayer,
          volunteering, or financial giving, you can bring real hope to
          communities in need.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button variant="supportMission" text="Support our mission" href="/support" />
          <Button variant="getInvolved" text="Get Involved" href="/get-involved" />
        </div>

      </div>
    </section>
  )
}