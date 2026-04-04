export default function MissionVisionSection () {
  return (
    <section className='w-full bg-white  mt-12 md:mt-32 px-4 sm:px-6 md:px-10'>
      <div className='max-w-480 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 md:items-stretch'>
          {/* ── Mission Card ── */}
          <div className='flex flex-col items-center'>
            <div className='w-full h-2.75 bg-navy' />
            <div className='flex flex-col gap-6 pt-8 md:pt-12 w-full max-w-[75%] flex-1'>
              <h2 className='font-display font-semibold text-black text-3xl sm:text-4xl md:text-5xl'>
                Our Mission
              </h2>
              <p className='font-sans text-black text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed'>
                To uplift marginalized communities by providing essential
                resources, quality education, and accessible healthcare. We
                believe in creating sustainable solutions that address the root
                causes of poverty and empower individuals to build better
                futures for themselves and their families.
              </p>
            </div>
          </div>

          {/* ── Vision Card ── */}
          <div className='flex flex-col items-center'>
            <div className='w-full h-2.75 bg-green' />
            <div className='flex flex-col gap-6 pt-8 md:pt-12 w-full max-w-[75%] flex-1'>
              <h2 className='font-display font-semibold text-black text-3xl sm:text-4xl md:text-5xl'>
                Our Vision
              </h2>
              <p className='font-sans text-black text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed'>
                A Pakistan where every individual has the opportunity to thrive,
                free from the burdens of poverty and inequality. We envision
                communities that are self-reliant, educated, and resilient,
                working together towards a prosperous and inclusive society for
                all generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
