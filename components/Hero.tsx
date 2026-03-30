import Image from 'next/image'
import Button from './Button'

interface HeroProps {
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero ({
  title = 'Hope for Communities Across Pakistan',
  subtitle = 'Serving people through care, support, and outreach.',
  primaryCta = { label: 'Support Us', href: '/support' },
  secondaryCta = { label: 'Learn More', href: '/about' }
}: HeroProps) {
  
  // Force "Pakistan" to a new line for the default title
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
    <section className='relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/home-hero.png'
        alt='Hero background'
        fill
        className='object-cover object-center -z-20'
        priority
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/50 -z-10' />

      {/* Content */}
      <div className='relative z-10 text-center max-w-5xl mx-auto px-6'>
        {/* Title — Responsive Font and Leading */}
        <h1
          className='
            font-display font-[520] text-white 
            text-2xl leading-[44px]             /* Mobile */
            md:text-4xl md:leading-[60px]       /* Tablet */
            lg:text-6xl lg:leading-[84px]       /* Desktop */
            mb-6 drop-shadow-md mx-auto
          '
        >
          {renderTitle()}
        </h1>

        <p className='font-sans font-normal text-white/90 text-lg md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed'>
          {subtitle}
        </p>

        {/* Buttons — Support hidden on mobile via parent Navbar logic or local hidden class */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button
            variant='support'
            text={primaryCta.label}
            href={primaryCta.href}
          />
          <Button
            variant='learnMore'
            text={secondaryCta.label}
            href={secondaryCta.href}
          />
        </div>
      </div>
    </section>
  )
}