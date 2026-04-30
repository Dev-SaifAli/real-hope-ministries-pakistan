import Button from '../ui/Button'
import Image from 'next/image'
import { buildImage } from '@/utils/cloudinary'
type PageHeroProps = {
  title: string
  imageSrc: string
  subtitle?: string
  href?: string
  showButton?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryHref?: string
}

export default function PageHero({
  title,
  imageSrc,
  subtitle,
  href = '#',
  showButton = true,
  primaryButtonText = 'Support Us ',
  secondaryButtonText = 'Learn More',
  primaryHref = '/support-us#donation-form'
}: PageHeroProps) {
  const renderTitle = () => {
    return title
  }
  return (
    <section className='min-h-[60vh] sm:min-h-[100dvh] w-full overflow-hidden rounded-2xl md:rounded-3xl flex items-center justify-center'>
      <Image
        src={buildImage(imageSrc, 1920)}
        alt='Hero background'
        fill
        className='object-cover object-center -z-20'
        loading='lazy'
      />
      {/* <div className='absolute inset-0 bg-black/20 -z-10' /> */}

      <div className='relative z-10 text-center  mx-auto px-6'>
        {/* Title — Responsive Font and Leading */}
        <h1
          className='
            font-display max-w-5xl font-semibold text-white 
            impact-heading       
            mb-4 drop-shadow-md mx-auto 
          '
        >
          {renderTitle()}
        </h1>

        <p className='font-sans max-w-2xl impact-para font-semibold text-white mb-7  mx-auto leading-relaxed'>
          {subtitle}
        </p>
        {showButton && (
          <div className='flex flex-col sm:flex-row gap-8 justify-center  items-center'>
            <Button
              href={primaryHref}
              text={primaryButtonText}
              variant='support'
              key='support'
            />
            <Button
              href={href}
              text={secondaryButtonText}
              variant='learnMore'
              key='learnMore'
            />
          </div>
        )}
      </div>
    </section>
  )
}
