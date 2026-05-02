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
    <section className='min-h-[450px] sm:min-h-[550px] lg:min-h-[600px] w-full overflow-hidden flex items-center justify-center relative'>
      <Image
        src={buildImage(imageSrc, 1920)}
        alt='Hero background'
        fill
        className='object-cover object-center -z-20'
        priority
      />
      
      {/* Professional Dark Overlay for Text Readability */}
      <div className='absolute inset-0 bg-black/40 z-0' />

      <div className='relative z-10 text-center mx-auto px-6 flex items-center justify-center flex-col max-sm:pt-24 pt-16'>
        {/* Title — Responsive Font and Leading */}
        <h1
          className='
            font-display w-full max-sm:max-w-4xl sm:max-w-5xl impact-heading font-semibold text-white 
          
            mb-4 lg:mb-3 drop-shadow-md mx-auto leading-[1.5] sm:leading-[1.1]
          '
        >
          {renderTitle()}
        </h1>

        <p className='font-sans max-w-[316px] sm:max-w-md md:max-w-xl lg:max-w-2xl impact-para font-semibold text-white/90 mb-8 sm:mb-10 mx-auto leading-relaxed'>
          {subtitle}
        </p>
        {showButton && (
          <div className='flex flex-row sm:flex-row gap-4 sm:gap-8 justify-center items-center'>
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
