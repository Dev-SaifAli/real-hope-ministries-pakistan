import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
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
  { label: 'Orphanage', href: '#orphanage-ministry' },
  { label: 'Clean Water', href: '#clean-water-ministry' },
  { label: 'Widow Support', href: '#free-people-ministry' },
  { label: 'Freedom Slavery', href: '#prayer-&-relief-ministry' },
  { label: 'Persecution Support', href: '#freedom-from-slavery' },
  { label: 'Food Support', href: '#food-ministry' },
  { label: 'Youth Mission', href: '#bibel-distribution-ministry' } 
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
      <div className='max-w-480 mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 items-start'>
          <div className='flex flex-col gap-10 col-span-2 lg:col-span-1'>
            <div className='flex flex-col gap-4 md:gap-5 '>
              <Image
                src='/nav-logo.png'
                alt='Real Hope Ministries Pakistan'
                width={65}
                height={65}
                className='w-12 h-12 sm:w-16.25 sm:h-16.25 md:w-12 md:h-12 rounded-full object-contain'
              />
              <h3 className='font-sans font-bold text-white text-[16px] sm:text-[18px]'>
                Real Hope Ministries Pakistan
              </h3>
              <p className='font-sans text-white text-[16px] sm:text-[16px] leading-relaxed'>
                Bringing sustainable change, emergency relief, and compassionate
                support to communities across Pakistan.
              </p>
            </div>

            <div>
              <p className='italic font-sans font-semibold  text-white text-base sm:text-lg'>
                Founded by:
              </p>
              <p className='font-sans font-bold text-white text-base md:text-lg lg:text-xl'>Brother Kyle Schulz</p>
            </div>
          </div>

          {/* ── Columns 2 & 3: Quick Links + Ministries ── */}
          {footerColumns.map((column: FooterColumn) => (
            <div key={column.title} className='flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 col-span-2 lg:col-span-1'>
              <h3 className='font-sans font-bold text-white text-[16px] sm:text-[18px]'>
                {column.title}
              </h3>
              <ul className='flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
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
          <div className='flex flex-col gap-6 col-span-2 md:col-span-1'>
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
          <p className='font-sans text-white text-[14px] sm:text-[15px] opacity-90'>
            © {new Date().getFullYear()} Real Hope Pakistan. All rights
            reserved.
          </p>

          {/* Links Section */}
          <div className='flex items-center gap-8 md:gap-12'>
            <Link
              href='/privacyandpolicy'
              className='font-sans text-white text-[14px] sm:text-[15px] hover:opacity-70 transition-opacity'
            >
              Privacy Policy
            </Link>
            <Link
              href='/termsandconditions'
              className='font-sans text-white text-[14px] sm:text-[15px] hover:opacity-70 transition-opacity'
            >
              Term and Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
