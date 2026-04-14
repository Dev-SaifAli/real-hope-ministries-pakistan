export default function MissionVisionSection () {
  return (
    <section className='w-full bg-white mt-12 md:mt-20  lg:mt-28 px-4 sm:px-6 md:px-10'>
      <div className='max-w-480 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-26 md:items-stretch'>

          {/* ── Mission Card ── */}
          <div className='flex flex-col items-center mb-8 md:mb-0'>
            <div className='w-full h-2 sm:h-2.75 bg-navy' />
            <div className='flex flex-col gap-2 sm:gap-4 md:gap-6 pt-6 md:pt-10 w-full max-w-[90%] sm:max-w-[85%] flex-1'>
              <h2 className='font-display font-semibold text-black impact-heading'>
                Our Mission
              </h2>
              <p className='font-sans text-black impact-para h-auto md:h-48  overflow-hidden'>
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
            <div className='w-full h-2 sm:h-2.75 bg-green' />
            <div className='flex flex-col gap-2 sm:gap-4 md:gap-6 pt-6 md:pt-10 w-full max-w-[90%] sm:max-w-[85%] flex-1'>
              <h2 className='font-display font-semibold text-black impact-heading'>
                Our Vision
              </h2>
              <p className='font-sans text-black impact-para h-auto md:h-48 overflow-hidden'>
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