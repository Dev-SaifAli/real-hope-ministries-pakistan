import Image from 'next/image'
import Button from '@/components/ui/Button'

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
  titleHighlight = 'Bondage to Freedom',
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
          The Story of the Masih <br className='hidden sm:block' /> Family
        </>
      )
    }
    return titleRest
  }

  return (
    <section className='w-full bg-white sm:mt-3 mb-12 sm:mb-18 px-4 sm:px-6 md:px-10'>
      <div className='mx-auto flex justify-center'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-6 md:gap-4 lg:gap-14 w-full max-w-[1100px]'>
          {/* Image Block */}
          <div className='relative shrink-0 mx-auto w-[320px] h-[380px] sm:w-[340px] sm:h-[380px] md:w-[420px] md:h-[450px]'>
            <div className='absolute top-0 left-0 w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10'>
              <Image
                src={primaryImage}
                alt='Masih family at brick kiln'
                fill
                className='object-cover object-center'
              />
            </div>
            <div className='absolute top-[160px] left-[120px] sm:top-[170px] sm:left-[130px] md:top-[200px] md:left-[160px] w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] rounded-full overflow-hidden border-4 border-white shadow-xl z-20'>
              <Image
                src={secondaryImage}
                alt='Working at brick kiln'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>

          {/* Text Block */}
          <div className='flex flex-col gap-2 sm:gap-4 md:gap-6 max-w-[560px] text-center md:text-left'>
            <h2 className='font-display font-semibold text-navy text-[26px] sm:text-[32px] md:text-[40px] leading-tight'>
              From <span className='text-green'>{titleHighlight}</span><span className='text-navy'>:</span>
              <br />
              {renderTitle()}
            </h2>
            <p className='font-sans text-black impact-para mb-8 md:mb-8'>
              {description}
            </p>
            <div className=' flex justify-center md:justify-start'>
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
