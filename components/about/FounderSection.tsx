import Image from 'next/image'

export default function FounderSection () {
  // const founderImage = cloudinary copilot

  return (
    <section className='w-full bg-white px-4 sm:px-6 md:px-10  lg:mt-19'>
      <div className='max-w-480 mx-auto'>
        {/* ── Two column layout ── */}
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
          {/* ── Left: Photo with green gradient bg ── */}
          <div className='relative shrink-0 w-full h-full max-w-165 max-h-160'>
            {/* Green radial gradient background — matching Figma */}
            <div
              className='absolute inset-0 rounded-2xl'
              style={{
                background:
                  'radial-gradient(ellipse at 60% 40%, #2E9E6F55 0%, #ffffff00 70%)'
              }}
            />

            {/* Founder photo */}
            <div className='relative w-full h-[380px] lg:h-[460px] rounded-2xl overflow-hidden'>
              <Image
                src='https://res.cloudinary.com/<your-cloud-name>/image/upload/f_auto,q_auto,w_600/about/founder.png'
                alt='Brother Kyle Schulz — Founder & Leader'
                fill
                className='object-cover object-top'
                priority
              />
            </div>
          </div>

          {/* ── Right: Text content ── */}
          <div className='flex flex-col flex-1'>
            {/* Small label */}
            <p className='font-display font-semibold text-navy text-[14px] sm:text-[16px] '>
              The Visionary Behind the Mission
            </p>

            {/* Name — "Brother" navy, "Kyle Schulz" green */}
            <h2 className='font-display font-semibold text-navy text-3xl md:text-4xl lg:text-5xl leading-relaxed '>
              Brother <span className='text-green'>Kyle Schulz</span>
            </h2>

            <p className='font-display font-semibold italic text-navy text-[16px] md:text-4xl whitespace-nowrap'>
              Founder &amp; Leader
            </p>

            {/* Description */}
            <p className='font-sans text-black text-[15px] md:text-[16px] leading-relaxed  mt-2'>
              With a deep commitment to serving communities, Brother Kyle Schulz
              leads the mission with compassion, purpose, and a vision for
              lasting impact. His leadership continues to inspire meaningful
              change, bringing hope, support, and essential resources to those
              in need across Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
