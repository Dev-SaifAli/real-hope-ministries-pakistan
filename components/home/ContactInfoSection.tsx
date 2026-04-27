'use client'
// Import Icons
import { MapPin, Mail, Phone, LucideIcon } from 'lucide-react'

interface ContactCardData {
  id: number
  title: string
  value: string
  // Ab hum string path ki jagah LucideIcon type use karenge
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

function ContactCardComponent({ card }: { card: ContactCardData }) {
  const Icon = card.icon

  return (
    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow-sm px-6 py-8 md:px-2 lg:px-10 md:py-4 lg:py-10 gap-3 md:gap-4 lg:gap-5 flex-1 transition-transform hover:scale-[1.02]'>
      <div className='w-[42px] h-[42px] md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#EBEBEB] flex items-center justify-center shrink-0'>
         
        <Icon 
          size={26} 
          className="text-navy" 
          strokeWidth={2}
        />
      </div>
      
      <h3 className='font-display font-semibold text-navy text-base sm:text-base md:text-lg lg:text-xl'>
        {card.title}
      </h3>
      
      <p className='font-sans text-black impact-para break-all sm:break-normal px-2'>
        {card.value}
      </p>
    </div>
  )
}

export default function ContactInfoSection() {
  return (
    <section className='w-full bg-[#EFEFEF] '>
      <div className='main-container py-12 md:py-16   '>
        <div className='flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch'>
          {contactCards.map((card) => (
            <ContactCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}