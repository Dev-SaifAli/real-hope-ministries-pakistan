import Image from 'next/image'
import Button from '@/components/Button'


interface StoryProps {
  label?: string
  title?: string
  titleHighlight?: string
  titleRest?: string
  description?: string
  primaryImage?: string
  secondaryImage?: string
  videoHref?: string
}

export default function StorySection({
  label = 'Real Stories',
  titleHighlight = 'Bondage to Freedom:',
  titleRest = 'The Story of the Masih Family',
  description = `For three generations, the Masih family worked at a brick kiln to pay off an
    insurmountable debt. Through the 'Freedom from Slavery' initiative, Real
    Hope Pakistan was able to clear their debt and provide them with the
    resources to start a small business.`,
  primaryImage = '/stories/masih-family.webp',
  secondaryImage = '/stories/masih-work.webp',
  videoHref = '/stories/masih-family',
}: StoryProps) {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto px-10">

        {/* ── Two column layout — image left, text right ── */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">

         
          <div className="relative flex-shrink-0 w-[380px] h-[400px] md:w-[460px] md:h-[480px]">

            {/* Large circle — main family photo */}
            <div className="absolute top-0 left-0 w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
              <Image
                src='/story/primary.png'
                alt="Masih family at brick kiln"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Small circle — overlapping bottom right */}
            <div className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[210px] md:h-[210px] rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
              <Image
                src='/story/secondary.png'
                alt="Working at brick kiln"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="flex flex-col gap-6 flex-1">

            {/* Optional small label above heading */}
            {label && (
              <p className="font-display font-semibold text-green text-[16px]">
                {label}
              </p>
            )}

            {/* Heading — "From" plain, highlight in green, rest in navy */}
            <h2 className="font-display font-black text-[#0B2545] text-[32px] md:text-[40px] leading-tight">
              From{' '}
              <span className="text-green">{titleHighlight}</span>
              <br />
              {titleRest}
            </h2>

            {/* Description */}
            <p className="font-sans text-black text-[16px] leading-relaxed max-w-[520px]">
              {description}
            </p>

            {/* Orange Watch Full Story button */}
            <div className="mt-2">
              <Button
                variant="watchStory"
                text="Watch Full Story"
                href={videoHref}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}