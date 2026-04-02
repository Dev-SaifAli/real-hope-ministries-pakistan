import Image from 'next/image'
import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const quickLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Community in Action', href: '/#community' },
  { label: 'Contact Us', href: '/contact' }
]

const ministries: FooterLink[] = [
  { label: 'Orphanage', href: '/projects/orphanage' },
  { label: 'Clean Water', href: '/projects/clean-water' },
  { label: 'Widow Support', href: '/projects/widows' },
  { label: 'Freedom Slavery', href: '/projects/slavery' },
  { label: 'Persecution Support', href: '/projects/persecution' },
  { label: 'Food Support', href: '/projects/food' },
  { label: 'Youth Mission', href: '/projects/youth' }
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100019001642487',
    icon: '/icons/facebook.svg'
  },
  { label: 'Twitter', href: 'https://twitter.com', icon: '/icons/twitter.svg' },
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

const footerColumns: FooterColumn[] = [
  { title: 'Quick Links', links: quickLinks },
  { title: 'Ministries', links: ministries }
]

export default function Footer () {
  return (
    <footer className='w-full bg-navy text-white'>
      {/* ── Main Footer Content ── */}
      {/* FIX: px-4 mobile → px-6 sm → px-10 md — removed double padding */}
      <div className='max-w-480 mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16'>
        {/* FIX: 2-col on mobile (logo+contact | links), 4-col on md+ */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start'>
          {/* ── Column 1: Logo + Description ── */}
          {/* FIX: col-span-2 on mobile so logo+desc takes full width */}
          <div className='flex flex-col gap-4 md:gap-5 col-span-2 md:col-span-1'>
            <Image
              src='/nav-logo.png'
              alt='Real Hope Ministries Pakistan'
              width={65}
              height={65}
              className='w-12 h-12 sm:w-16.25 sm:h-16.25 rounded-full object-contain'
            />
            <h3 className='font-sans font-bold text-white text-[16px] sm:text-[18px]'>
              Real Hope Ministries Pakistan
            </h3>
            <p className='font-sans text-white text-[14px] sm:text-[16px] leading-relaxed'>
              Bringing sustainable change, emergency relief, and compassionate
              support to communities across Pakistan.
            </p>
          </div>

          {/* ── Columns 2 & 3: Quick Links + Ministries ── */}
          {footerColumns.map((column: FooterColumn) => (
            <div key={column.title} className='flex flex-col gap-4 md:gap-5'>
              <h3 className='font-sans font-bold text-white text-[16px] sm:text-[18px]'>
                {column.title}
              </h3>
              <ul className='flex flex-col gap-2 md:gap-3'>
                {column.links.map((link: FooterLink) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='font-sans text-white text-[14px] sm:text-[16px] hover:text-[#2E9E6F] transition-colors duration-200'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Column 4: Contact + Social Icons ── */}
          {/* FIX: col-span-2 md:col-span-1 — full width on mobile */}
          <div className='flex flex-col gap-3 col-span-2 md:col-span-1'>
            <h3 className='font-sans font-bold text-white text-[16px] sm:text-[18px]'>
              Contact with Us
            </h3>
            {/* FIX: gap-2 sm:gap-3 — icons don't overflow on 320px */}
            <div className='flex items-center gap-2 sm:gap-3'>
              {socialLinks.map(social => (
                <Link
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-white/20 flex items-center justify-center hover:bg-[#2E9E6F] hover:border-[#2E9E6F] transition-all duration-200'
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

      {/* ── Bottom Bar ── */}
      {/* FIX: border constrained inside max-w div — not full bleed across 1920px */}
      <div className='max-w-480 mx-auto px-4 sm:px-6 md:px-10'>
        {/* border-t opacity for a subtler line like the screenshot */}
        <div className='border-t py-5 border-white/py-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Copyright Section */}
          <p className='font-sans text-white text-[14px] sm:text-[16px] opacity-90'>
            © {new Date().getFullYear()} Real Hope Pakistan. All rights
            reserved.
          </p>

          {/* Links Section */}
          <div className='flex items-center gap-8 md:gap-12'>
            <Link
              href='/privacyandpolicy'
              className='font-sans text-white text-[14px] sm:text-[16px] hover:opacity-70 transition-opacity'
            >
              Privacy Policy
            </Link>
            <Link
              href='/termsandconditions'
              className='font-sans text-white text-[14px] sm:text-[16px] hover:opacity-70 transition-opacity'
            >
              Term and Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
