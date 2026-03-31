import Image from 'next/image'

interface ContactCard {
  id: number
  title: string
  value: string
  icon: string
  alt: string
}


const contactCards: ContactCard[] = [
  {
    id: 1,
    title: 'Headquarters',
    value: '123 Hope Street, Lahore, Pakistan',
    icon: '/icons/contact/location.svg',
    alt: 'Location pin icon',
  },
  {
    id: 2,
    title: 'Email Us',
    value: 'absd@gmail.com',
    icon: '/icons/contact/email.svg',
    alt: 'Email envelope icon',
  },
  {
    id: 3,
    title: 'Call Us',
    value: '0000000000000',
    icon: '/icons/contact/phone.svg',
    alt: 'Phone icon',
  },
]


function ContactCard({ card }: { card: ContactCard }) {
  return (
    // white card, rounded, shadow, flex column centered
    <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm px-10 py-10 gap-5 flex-1">

     
      <div className="w-[60px] h-[60px] rounded-full bg-[#EBEBEB] flex items-center justify-center flex-shrink-0">
        <Image
          src={card.icon}
          alt={card.alt}
          width={26}
          height={26}
        />
      </div>

      {/* ── Title ── */}
      <h3 className="font-display font-bold text-[#0B2545] text-[18px]">
        {card.title}
      </h3>

      {/* ── Value ── */}
      <p className="font-sans text-black text-[15px] leading-relaxed">
        {card.value}
      </p>

    </div>
  )
}


export default function ContactInfoSection() {
  return (
    // Light gray bg — matching screenshot (#F0F0F0 approx)
    <section className="w-full bg-[#EFEFEF] py-16 px-6">
      <div className="max-w-[1400px] mx-auto px-10">

        
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {contactCards.map((card: ContactCard) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  )
}