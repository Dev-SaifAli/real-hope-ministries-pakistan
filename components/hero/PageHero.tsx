import Button from '../ui/Button'
import Image from 'next/image'

type PageHeroProps = {
  title: string
  imageSrc: string
  subtitle?: string
}

export default function PageHero ({ title, imageSrc, subtitle }: PageHeroProps) {
  const renderTitle = () => {
    if (title === 'Hope for Communities Across Pakistan') {
      return (
        <>
          Hope for Communities Across <br /> Pakistan
        </>
      )
    }
    return title
  }
  return (
    <section className=' min-h-screen w-full overflow-hidden rounded-2xl md:rounded-3xl flex items-center justify-center'>
      <Image
        src={imageSrc}
        alt='Hero background'
        fill
        className='object-cover object-center -z-20'
        loading='lazy'
      />

      <div className='relative z-10 text-center max-w-5xl mx-auto px-6'>
        {/* Title — Responsive Font and Leading */}
        <h1
          className='
            font-display font-[515] text-white 
            text-2xl leading-[44px]             
            md:text-4xl md:leading-[60px]       
            lg:text-6xl lg:leading-[84px]       
            mb-6 drop-shadow-md mx-auto
          '
        >
          {renderTitle()}
        </h1>

        <p className='font-sans font-normal text-white/90 text-lg md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed'>
          {subtitle}
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button
            href='/donation'
            text='Support Us'
            variant='support'
            key='support'
          />
          <Button
            href='/donation'
            text='Learn More'
            variant='learnMore'
            key='learnMore'
          />
        </div>
      </div>
    </section>
  )
}
