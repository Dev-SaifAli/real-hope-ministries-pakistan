'use client'

import { MapPin, Mail, Phone, LucideIcon } from 'lucide-react'

interface ContactCardData {
  id: number
  title: string
  value: string
  icon: LucideIcon
}

const contactCards: ContactCardData[] = [
  {
    id: 1,
    title: 'Headquarters',
    value: 'Madina Green Valley, Faisalabad',
    icon: MapPin
  },
  {
    id: 2,
    title: 'Email Us',
    value: 'zashan789789@gmail.com',
    icon: Mail
  },
  {
    id: 3,
    title: 'Call Us',
    value: '+923009823626',
    icon: Phone
  }
]

function ContactCardComponent ({ card }: { card: ContactCardData }) {
  const Icon = card.icon

  return (
    <div className='flex flex-col items-center justify-items-start flex-1 min-w-0 bg-white rounded-2xl shadow-sm px-8 py-6 md:px-6 lg:px-10 md:py-6 lg:py-10 gap-3 md:gap-4 lg:gap-5 transition-transform hover:scale-[1.02]'>
      <div className=' rounded-full bg-[#EBEBEB] flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12  shrink-0'>
        <Icon size={26} className='text-navy' strokeWidth={2} />
      </div>

      <h3 className='font-display font-semibold text-navy text-base sm:text-base md:text-lg lg:text-xl'>
        {card.title}
      </h3>

      <p className='font-sans text-black impact-para text-sm sm:text-xs md:text-base text-center  wrap-normal lg:whitespace-nowrap'>
        {card.value}
      </p>
    </div>
  )
}

export default function ContactInfoSection () {
  return (
    <section className='w-full bg-[#EFEFEF] '>
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
