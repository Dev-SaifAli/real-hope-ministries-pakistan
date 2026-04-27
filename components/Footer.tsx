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
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Community in Action', href: '/#community' },
  { label: 'Contact Us', href: '/contact' }
]

const ministries: FooterLink[] = [
  { label: 'Orphanage', href: '/#orphanage-ministry' },
  { label: 'Clean Water', href: '/#clean-water-ministry' },
  { label: 'Widow Support', href: '/#free-people-ministry' },
  { label: 'Freedom Slavery', href: '/#prayer-&-relief-ministry' },
  { label: 'Persecution Support', href: '/#freedom-from-slavery' },
  { label: 'Food Support', href: '/#food-ministry' },
  { label: 'Youth Mission', href: '/#bibel-distribution-ministry' }
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
        {/* Grid setup for 12 columns on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 md:gap-12    2xl:gap-12 items-start'>
          {/* Column 1: Wide enough for text (5 out of 12 columns) */}
          <div className='flex flex-col gap-6 md:gap-8 xl:col-span-4'>
            <div className='flex flex-col gap-2'>
              <Image
                src='/nav-logo.png'
                alt='Logo'
                width={65}
                height={65}
                className='w-12 h-12 rounded-full'
              />
              <h3 className='font-sans font-bold text-white  text-lg'>
                Real Hope Ministries Pakistan
              </h3>
              <p className='font-sans font-regular text-white text-base leading-relaxed max-w-[320px]'>
                Bringing sustainable change, emergency relief, and compassionate
                support to communities across Pakistan.
              </p>
            </div>
            <div>
              <p className='italic font-sans font-semibold  text-lg'>
                Founded by:
              </p>
              <p className='font-sans font-bold text-white text-xl lg:text-2xl mt-1'>
                Brother Kyle Schulz
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 out of 12 columns) */}
          <div className='flex flex-col gap-6 xl:col-span-2'>
            <h3 className='font-sans font-bold text-white text-lg'>
              Quick Links
            </h3>
            <ul className='flex flex-col gap-3 md:gap-4'>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-white hover:text-green  text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ministries (2 out of 12 columns) */}
          <div className='flex flex-col gap-6 xl:col-span-3'>
            <h3 className='font-sans font-bold text-white text-lg'>
              Ministries
            </h3>
            <ul className='flex flex-col gap-3 md:gap-4'>
              {ministries.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-white hover:text-green   text-base'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 out of 12 columns, aligned to the end) */}
          <div className='xl:col-span-3 xl:col-start-10 xl:justify-self-end'>
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
      </div>

      {/* Bottom Bar: border constrained inside max-width container */}
      <div className='main-container'>
        <div className='border-t border-white  py-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-base font-sans font-regular text-white '>
            © 2025 Real Hope Pakistan. All rights
            reserved.
          </p>
          <div className='flex items-center gap-8 text-base'>
            <Link href='/privacyandpolicy' className='hover:text-green  '>
              Privacy Policy
            </Link>
            <Link href='/termsandconditions' className='hover:text-green  '>
              Term and Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
