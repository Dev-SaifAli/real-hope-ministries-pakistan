'use client'

import { MapPin, Mail, Phone, LucideIcon } from 'lucide-react'

interface ContactCardData {
  id: number
  title: string
  value: string
  icon: LucideIcon
  href?:string
}

const contactCards: ContactCardData[] = [
  {
    id: 1,
    title: 'Headquarters',
    value: 'Madina Green Valley, Faisalabad',
    icon: MapPin,
    href: 'https://maps.google.com/?q=Madina+Green+Valley,+Faisalabad,+Pakistan'
  },
  {
    id: 2,
    title: 'Email Us',
    value: 'zashan789789@gmail.com',
    icon: Mail,
    href: 'mailto:zashan789789@gmail.com'
  },
  {
    id: 3,
    title: 'Call Us',
    value: '+923009823626',
    icon: Phone,
    href:'tel:+923009823626'
  }
]

function ContactCardComponent ({ card }: { card: ContactCardData }) {
  const Icon = card.icon

  return (
    <div className='flex flex-col items-center justify-items-start flex-1 min-w-0 bg-white rounded-2xl shadow-sm px-6 py-4 md:px-6 lg:px-10 md:py-6 lg:py-10 gap-3 md:gap-4 lg:gap-5 transition-transform hover:scale-[1.02]'>
      <div className='2xl:w-16 2xl:h-16 md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#0B25450D] flex items-center justify-center'>
        <Icon   className='text-navy' strokeWidth={2} />
      </div>

      <h3 className='font-display font-semibold text-navy text-lg sm:text-base md:text-lg lg:text-xl'>
        {card.title}
      </h3>

      { card.href ? <a href={card.href} target='_blank' rel='noopener noreferrer'>
        <p className='font-sans text-black impact-para text-base sm:text-xs md:text-base text-center  wrap-normal lg:whitespace-nowrap'>
        {card.value}
      </p>
      </a> 
        : 
        <p className='font-sans text-black impact-para text-base sm:text-xs md:text-base text-center  wrap-normal lg:whitespace-nowrap'>
        {card.value}
      </p>}
    </div>
  )
}

export default function ContactInfoSection () {
  return (
    <section id='contact' className='w-full bg-[#EFEFEF] scroll-mt-28'>
      <div className='main-container py-12 md:py-16   '>
        <div className='flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-10 justify-center items-stretch  *: mx-auto w-full'>
          {contactCards.map(card => (
            <ContactCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
