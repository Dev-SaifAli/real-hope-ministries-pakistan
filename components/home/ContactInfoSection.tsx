import Image from 'next/image'

interface ContactCard {
  id: number
  title: string
  value: string
  icon: string
  alt: string
}

const contactCards: ContactCard[] = [
  { id: 1, title: 'Headquarters', value: '123 Hope Street, Lahore, Pakistan', icon: '/icons/contact/location.svg', alt: 'Location pin icon' },
  { id: 2, title: 'Email Us', value: 'absd@gmail.com', icon: '/icons/contact/email.svg', alt: 'Email envelope icon' },
  { id: 3, title: 'Call Us', value: '0000000000000', icon: '/icons/contact/phone.svg', alt: 'Phone icon' }
]

function ContactCard ({ card }: { card: ContactCard }) {
  return (
    // px-6 mobile, px-10 sm+ — prevents card content from touching edges on small screens
    <div className='flex flex-col items-center  text-center bg-white rounded-2xl shadow-sm px-6 py-8 md:px-2 lg:px-10 md:py-4 lg:py-10 gap-3 md:gap-4 lg:gap-5 flex-1'>
      <div className='sm:w-[42px] sm:h-[42px] md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#EBEBEB] flex items-center justify-center shrink-0'>
        <Image src={card.icon} alt={card.alt} width={26} height={26} />
      </div>
      <h3 className='font-display font-semibold text-navy text-base sm:text-base md:text-lg lg:text-2xl'>
        {card.title}
      </h3>
      {/* break-all prevents long email/phone values from overflowing on mobile */}
      <p className='font-sans text-black text-base sm:text-sm md:text-base lg:text-xl break-all sm:break-normal'>
        {card.value}
      </p>
    </div>
  )
}

export default function ContactInfoSection () {
  return (
    // Removed double padding — outer px-4/px-6 handles gutters, inner px-10 removed
    <section className='w-full bg-[#EFEFEF] py-12 md:py-16 px-4 sm:px-6 md:px-10'>
      <div className='max-w-[1400px] mx-auto'>
        {/* Stack on mobile, row on md+ */}
        <div className='flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch'>
          {contactCards.map((card: ContactCard) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}