import Image from 'next/image'
import Link from 'next/link'

// ─────────────────────────────────────────────
// TypeScript interfaces
// ─────────────────────────────────────────────
interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const quickLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Community in Action', href: '/community' },
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
  { label: 'YouTube', href: 'https://www.youtube.com/@RHMpakistan', icon: '/icons/youtube.svg' }
]

const footerColumns: FooterColumn[] = [
  { title: 'Quick Links', links: quickLinks },
  { title: 'Ministries', links: ministries }
]

export default function Footer () {
  return (
    <footer className='w-full bg-[#0B2545] text-white'>
      {/* ── Main Footer Content ── */}
      <div className='max-w-[1400px] mx-auto px-10 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 items-start'>
          {/* ── Column 1: Logo + Description ── */}
          <div className='flex flex-col gap-5'>
            <Image
              src='/nav-logo.png'
              alt='Real Hope Ministries Pakistan'
              width={65}
              height={65}
              className='rounded-full object-contain'
            />

            <h3 className='font-sans font-bold text-white text-[18px]'>
              Real Hope Ministries Pakistan
            </h3>

            <p className='font-sans text-white text-[14px] leading-relaxed'>
              Bringing sustainable change, emergency relief, and compassionate
              support to communities across Pakistan.
            </p>
          </div>

          {/* ── Columns 2 & 3: Quick Links + Ministries ── */}
          {footerColumns.map((column: FooterColumn) => (
            <div key={column.title} className='flex flex-col gap-5'>
              <h3 className='font-sans font-bold text-white text-[18px]'>
                {column.title}
              </h3>

              <ul className='flex flex-col gap-3'>
                {column.links.map((link: FooterLink) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='font-sans text-white text-[14px] hover:text-white transition-colors duration-200'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Column 4: Contact with Us + Social Icons ── */}
          <div className='flex flex-col gap-3'>
            <h3 className='font-sans font-bold text-white text-[18px]'>
              Contact with Us
            </h3>

            <div className='flex items-center  gap-3'>
              {socialLinks.map(social => (
                <Link
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='w-10 h-10 rounded-full bg-white border border-white/20 flex items-center justify-center hover:bg-[#2E9E6F] hover:border-[#2E9E6F] transition-all duration-200'
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      {/* ── Bottom Bar ── */}
      <div className='border-t border-white/15'>
        <div className='max-w-[1400px] mx-auto px-10 py-5 flex items-center justify-between'>
          <p className='font-sans text-white/60 text-[14px]'>
          {new Date().getFullYear()} Real Hope Ministries Pakistan. All rights reserved.
          </p>
          <Link
            href='/terms'
            className='font-sans text-white/60 text-[14px] hover:text-white transition-colors'
          >
            Term and Services
          </Link>
        </div>
      </div>
    </footer>
  )
}
