import Image from 'next/image'
import Link from 'next/link'
interface FooterLink {
  label: string
  href: string
}

// interface FooterColumn {
//   title: string
//   links: FooterLink[]
// }

const quickLinks: FooterLink[] = [
  { label: 'Home', href: '/home' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects#projects' },
  { label: 'Community in Action', href: '/home#community' },
  { label: 'Contact Us', href: '/contact#contact-form' }
]

const ministries: FooterLink[] = [
  { label: 'Orphanage', href: '/home#orphanage-ministry' },
  { label: 'Clean Water', href: '/home#clean-water-ministry' },
  { label: 'Free People', href: '/home#free-people-ministry' },
  { label: 'Prayer Center', href: '/home#prayer-center' },
  { label: 'Freedom from Slavery', href: '/home#freedom-from-slavery' },
  { label: 'Food Ministry', href: '/home#food-ministry' },
  { label: 'Bibel Distribution', href: '/home#bibel-distribution-ministry' }
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100019001642487',
    icon: '/icons/facebook.svg'
  },
  {
    label: 'Twitter',
    href: 'https://x.com/MmDillshan',
    icon: '/icons/twitter.svg'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pastor_zeeshan_mm/',
    icon: '/icons/instagram.svg'
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@RHMpakistan',
    icon: '/icons/youtube.svg'
  }
]

// const footerColumns: FooterColumn[] = [
//   { title: 'Quick Links', links: quickLinks },
//   { title: 'Ministries', links: ministries }
// ]

export default function Footer() {
  return (
    <footer className='w-full bg-navy text-white'>
      <div className='main-container py-12'>
        {/* Flex setup for consistent distribution on desktop */}
        <div className='flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row xl:justify-between gap-10 md:gap-12 items-start'>
          {/* Column 1: Info */}
          <div className='flex flex-col gap-6 md:gap-8 xl:max-w-[350px]'>
            <div className='flex flex-col gap-2'>
              <Image
                src='/nav-logo.png'
                alt='Logo'
                width={65}
                height={65}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='font-sans font-bold text-white text-lg'>
                Real Hope Ministries Pakistan
              </h3>
              <p className='font-sans font-regular text-white text-base leading-relaxed'>
                Bringing sustainable change, emergency relief, and compassionate
                support to communities across Pakistan.
              </p>
            </div>
            <div>
              <p className='italic font-sans font-semibold text-lg'>
                Founded by:
              </p>
              <p className='font-sans font-bold text-white text-xl lg:text-2xl mt-1'>
                Brother Kyle Schulz
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className='flex flex-col gap-6'>
            <h3 className='font-sans font-bold text-white text-lg'>
              Quick Links
            </h3>
            <ul className='flex flex-col gap-3 md:gap-4'>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-white hover:text-green text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ministries */}
          <div className='flex flex-col gap-6'>
            <h3 className='font-sans font-bold text-white text-lg'>
              Ministries
            </h3>
            <ul className='flex flex-col gap-3 md:gap-4'>
              {ministries.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-white hover:text-green text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className='flex flex-col gap-6 items-start'>

            <h3 className='font-sans font-bold text-white text-lg whitespace-nowrap'>
              Contact with Us
            </h3>

            <div className='flex items-center gap-3'>
              {socialLinks.map(social => (
                <Link
                  key={social.label}
                  href={social.href}
                  className='w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform'
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={18}
                    height={18}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: border constrained inside max-width container */}
      <div className='main-container'>
        <div className='border-t border-white  py-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-base font-sans font-regular text-white '>
            © 2025 Real Hope Pakistan. All rights
            reserved.
          </p>
          <div className='flex items-center gap-8 text-base'>
            <Link href='/privacy-policy' className='hover:text-green  '>
              Privacy Policy
            </Link>
            <Link href='/terms-and-conditions' className='hover:text-green  '>
              Term and Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
