import Image from 'next/image'
import { buildImage } from '@/utils/cloudinary'
export default function FounderSection () {
  const founderImage = 'Gemini_Generated_Image_a92rp6a92rp6a92r1_1_1_jkozj5'
  return (
    <section className='w-full bg-white mt-16 lg:mt-20'>
      <div className='main-container'>
        {/* ── Two column layout ── */}
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
          {/* ── Left: Photo with green gradient bg ── */}
          <div className='relative shrink-0 w-full h-full max-w-165 max-h-160'>
            {/* Green radial gradient background — matching Figma */}
            <div
              className='absolute inset-0 rounded-2xl'
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #2E9E6F 100%)'
              }}
            />

            {/* Founder photo */}
            <div className='relative w-full h-[380px] lg:h-[600px] rounded-2xl overflow-hidden'>
              <Image
                src={buildImage(founderImage,800)}
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
            <p className='font-display font-[550] text-navy text-[14px] sm:text-[16px] '>
              The Visionary Behind the Mission
            </p>

            {/* Name — "Brother" navy, "Kyle Schulz" green */}
            <h2 className='font-display font-semibold text-navy text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl leading-relaxed '>
              Brother <span className='text-green'>Kyle Schulz</span>
            </h2>

            <p className='font-display font-semibold italic text-navy text-[16px] md:text-4xl whitespace-nowrap'>
              Founder &amp; Leader
            </p>

            {/* Description */}
            <p className='font-sans text-black impact-para mt-3 xl:mt-6 2xl:mt-8'>
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
