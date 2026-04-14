'use client'

import React from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Section {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  contactDetails?: { label: string; value: string; isLink?: boolean }[]
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'Welcome to Real Hope Pakistan. We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.',
      'If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.'
    ]
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    paragraphs: [
      'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our charitable programs, when you make a donation, when you sign up for our newsletter, or otherwise when you contact us.',
      'The personal information we collect may include:'
    ],
    bullets: [
      'Personal Details: Name, email address, postal address, and phone number.',
      'Financial Information: Payment details when making a donation (processed securely by our third-party payment processors).',
      'Communication Data: Information you provide when communicating with us.'
    ]
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    paragraphs: [
      'We use personal information collected via our website for a variety of organizational purposes. We process your personal information for these purposes in reliance on our legitimate interests, with your consent, and/or for compliance with our legal obligations. We may use your information to:'
    ],
    bullets: [
      'Process donations and send related information, including donation confirmations and receipts.',
      'Send administrative information to you, such as changes to our terms, conditions, and policies.',
      'Send you marketing and promotional communications in accordance with your preferences.'
    ]
  },
  {
    id: 'data-protection',
    title: 'Data Protection',
    paragraphs: [
      'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. We store your personal data on secure servers and restrict access to authorized personnel only.',
      'However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security.'
    ]
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    paragraphs: [
      'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill organizational obligations. We do not sell your personal information to third parties.',
      'We may use third-party service providers to help us operate our activities, such as:'
    ],
    bullets: [
      'Payment processors for secure donation handling.',
      'Email marketing platforms to send out newsletters.',
      'Analytics services to understand how our website is used.'
    ]
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    paragraphs: [
      'If you have questions or comments about this notice, or if you would like to update or remove your personal information from our records, please contact us:'
    ],
    contactDetails: [
      {
        label: 'Real Hope Pakistan Email',
        value: 'privacy@realhopepakistan.org',
        isLink: true
      },
      { label: 'Phone', value: '+92 300 9823626' },
      { label: 'Address', value: 'Madina Green Valley, Faisalabad' }
    ]
  }
]

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock ({ section, index }: { section: Section; index: number }) {
  return (
    <div
      className={`pb-7.5 border-b border-navy ${
        index !== 0 ? 'mt-8 md:mt-10 lg:mt-14' : ''
      }`}
    >
      <h2 className='text-navy text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-6 tracking-tight'>
        {section.title}
      </h2>

      <div className='space-y-4'>
        {section.paragraphs?.map((para, i) => (
          <p
            key={i}
            className='font-sans text-black impact-para'
          >
            {para}
          </p>
        ))}
      </div>

      {section.bullets && (
        <ul className='mt-4 list-disc list-outside pl-5 space-y-3 marker:text-black'>
          {section.bullets.map((bullet, i) => (
            <li
              key={i}
              className='font-sans text-black impact-para leading-relaxed'
            >
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {section.contactDetails && (
        <div className='mt-4 space-y-2'>
          {section.contactDetails.map((item, i) => (
            <p
              key={i}
              className='font-sans text-black impact-para leading-normal'
            >
              <span className='font-semibold text-green'>{item.label}: </span>
              {item.isLink ? (
                <a
                  href={`mailto:${item.value}`}
                  className='text-black hover:underline transition-all'
                >
                  {item.value}
                </a>
              ) : (
                <span className='text-black'>{item.value}</span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyAndPolicy () {
  return (
    <div className='min-h-screen w-full bg-[#EBEBEB] py-12 md:py-24'>
      {/* ── Centered Header ── */}
      <div className='text-center mb-12 md:mb-20 px-4'>
        <h1 className='impact-heading font-semibold mb-5 tracking-tight font-display text-black'>
          Privacy &amp; Policy
        </h1>
        <p className='impact-para font-semibold leading-snug max-w-5xl mx-auto'>
          We are committed to protecting your personal information and personal
          rights.
        </p>
        <p className=' impact-para font-semibold mt-2'>
          Last Updated: January 2026
        </p>
      </div>

      {/* ── Responsive Layout Container ── */}
      <div className='max-w-480 mx-auto px-6 sm:px-10 md:pl-20 md:pr-40 lg:pl-30 lg:pr-60'>
        {sections.map((section, index) => (
          <SectionBlock key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  )
}
