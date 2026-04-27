'use client'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { buildImage } from '@/utils/cloudinary'
import VideoModal from '../ui/VideoModal'
interface StoryProps {
  title?: string
  titleHighlight?: string
  titleRest?: string
  description?: string
  primaryImage?: string
  secondaryImage?: string
  videoHref?: string
}

export default function StorySection({
  titleHighlight = 'Bondage to Freedom',
  titleRest = 'The Story of the Masih Family',
  description = `For three generations, the Masih family worked at a brick kiln to pay off an
  insurmountable debt. Through the 'Freedom from Slavery' initiative, Real
  Hope Pakistan was able to clear their debt and provide them with the
  resources to start a small business.`,
  primaryImage = 'primary_d1yylj',
  secondaryImage = 'secondary_xrlf1c',
  videoHref = 'lv_0_20230621192724_jvm4jt'
}: StoryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    <section className='w-full bg-white  '>
      <div className='  main-container flex justify-between  mb-12 sm:mb-18 2xl:mb-40 '>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-10 md:gap-10 lg:gap-20 2xl:gap-52 w-full'>
          {/* Image Block — fixed container height to contain both circles */}
          <div className='relative shrink-0 mx-auto md:mx-0 w-[320px] h-[380px] sm:w-[340px] sm:h-[380px] md:w-[500px] md:h-[480px]'>
            <div className='absolute top-0 left-0 w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] 2xl:w-[480px] 2xl:h-[480px] rounded-full overflow-hidden border-4 border-white z-10'>
              <Image
                src={buildImage(primaryImage, 800)}
                alt='Masih family at brick kiln'
                fill
                className='object-cover object-center'
              />
            </div>
            <div className='absolute top-[160px] left-[120px] sm:top-[170px] sm:left-[130px] md:top-[250px] md:left-[230px] 2xl:top-[290px] 2xl:left-[240px] w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px] 2xl:w-[270px] 2xl:h-[270px] rounded-full overflow-hidden border-4 border-white   z-20'>
              <Image
                src={buildImage(secondaryImage, 800)}
                alt='Working at brick kiln'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>
          {/* Text Block */}
          <div className='flex flex-col gap-2 sm:gap-4 md:gap-6 max-w-[560px] text-center md:text-left'>
            <h2 className='font-display font-semibold text-navy text-[26px] sm:text-[32px] md:text-[40px] leading-tight'>
              From <span className='text-green'>{titleHighlight}</span>
              <span className='text-navy'>:</span>
              <br />
              {renderTitle()}
            </h2>
            <p className='font-sans text-black impact-para mb-6 md:mb-6'>
              {description}
            </p>
            <div
              onClick={() => setIsModalOpen(true)}
              className=' flex justify-center md:justify-start'
            >
              <Button variant='watchStory' text='Watch Full Story' />
            </div>
            {/* Modal component */}
            <VideoModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              publicId={videoHref}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
