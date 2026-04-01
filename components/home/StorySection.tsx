import Image from 'next/image'
import Button from '@/components/Button'

interface StoryProps {
  title?: string
  titleHighlight?: string
  titleRest?: string
  description?: string
  primaryImage?: string
  secondaryImage?: string
  videoHref?: string
}

export default function StorySection ({
  titleHighlight = 'Bondage to Freedom:',
  titleRest = 'The Story of the Masih Family',
  description = `For three generations, the Masih family worked at a brick kiln to pay off an
    insurmountable debt. Through the 'Freedom from Slavery' initiative, Real
    Hope Pakistan was able to clear their debt and provide them with the
    resources to start a small business.`,
  primaryImage = '/story/primary.png',
  secondaryImage = '/story/secondary.png',
  videoHref = '/stories/masih-family'
}: StoryProps) {
  const renderTitle = () => {
    if (titleRest === 'The Story of the Masih Family') {
      return (
        <>
          The Story of the Masih <br /> Family
        </>
      )
    }
    return titleRest
  }
  return (
    <section className='w-full bg-white py-20 px-6'>
      <div className='mx-auto px-10'>
        {/* ── Two column layout — image left, text right ── */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20'>
          <div className='relative shrink-0 w-95 h-100 md:w-115 md:h-120'>
            {/* Large circle — main family photo */}
            <div className='absolute top-0 left-0 w-[320px] h-80 md:w-95 md:h-95 rounded-full overflow-hidden border-4 border-white shadow-xl z-10'>
              <Image
                src={primaryImage}
                alt='Masih family at brick kiln'
                fill
                className='object-cover object-center'
              />
            </div>

            {/* Small circle — overlapping bottom right */}
            <div className='absolute bottom-0 right-0 w-45 h-45 md:w-52.5 md:h-52.5 rounded-full overflow-hidden border-4 border-white shadow-xl z-20'>
              <Image
                src={secondaryImage}
                alt='Working at brick kiln'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h2 className='font-display font-semibold text-navy text-[32px] md:text-[40px] leading-tight'>
              From <span className='text-green'>{titleHighlight}</span>
              <br />
              {renderTitle()}
            </h2>

            {/* Description */}
            <p className='font-sans text-black text-[21px] leading-relaxed '>
              {description}
            </p>

            {/* Orange Watch Full Story button */}
            <div className='mt-2'>
              <Button
                variant='watchStory'
                text='Watch Full Story'
                href={videoHref}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
