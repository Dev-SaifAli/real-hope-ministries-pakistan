export default function MissionVisionSection () {
  return (
    <section className='w-full bg-white py-20 px-6'>
      <div className='max-w-[1400px] mx-auto px-10'>
        {/* ── Two column grid ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
          {/* ── Mission Card ── */}
          <div className='flex flex-col gap-6'>
            {/* Navy top border accent — matching Figma */}
            <div className='w-full h-[6px] bg-navy rounded-full' />

            <h2 className='font-display font-black text-navy text-[36px] md:text-[42px] leading-tight'>
              Our Mission
            </h2>

            <p className='font-sans text-black text-[16px] leading-relaxed'>
              To uplift marginalized communities by providing essential
              resources, quality education, and accessible healthcare. We
              believe in creating sustainable solutions that address the root
              causes of poverty and empower individuals to build better futures
              for themselves and their families.
            </p>
          </div>

          {/* ── Vision Card ── */}
          <div className='flex flex-col gap-6'>
            {/* Green top border accent */}
            <div className='w-full h-[6px] bg-green rounded-full' />

            <h2 className='font-display font-black text-navy text-[36px] md:text-[42px] leading-tight'>
              Our Vision
            </h2>

            <p className='font-sans text-black text-[16px] leading-relaxed'>
              A Pakistan where every individual has the opportunity to thrive,
              free from the burdens of poverty and inequality. We envision
              communities that are self-reliant, educated, and resilient,
              working together towards a prosperous and inclusive society for
              all generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
