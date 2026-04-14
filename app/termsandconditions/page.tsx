'use client'

import React from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Section {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'Welcome to Real Hope Pakistan. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.',
      "The term 'Real Hope Pakistan' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website."
    ]
  },
  {
    id: 'use-of-website',
    title: 'Use of Website',
    paragraphs: [
      'The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.'
    ],
    bullets: [
      'You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.',
      'You must not use this website in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.',
      'You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.'
    ]
  },
  {
    id: 'donations-policy',
    title: 'Donations Policy',
    paragraphs: [
      'Real Hope Pakistan is a registered non-profit organization. All donations made through our website are voluntary and non-refundable. We are committed to ensuring that your donations are used effectively for the causes mentioned on our platform.',
      'In the event that a specific project is fully funded or cancelled, we reserve the right to reallocate your donation to another project where the need is greatest, ensuring your contribution still makes a meaningful impact.'
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    paragraphs: [
      'This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and text. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.',
      'All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.'
    ]
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    paragraphs: [
      'Real Hope Pakistan may revise these terms and conditions from time to time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions. Please check this page regularly to ensure you are familiar with the current version.'
    ]
  }
]

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock ({ section, index }: { section: Section; index: number }) {
  return (
   <div className={`pb-7.5 border-b border-navy ${index !== 0 ? 'mt-8 md:mt-10 lg:mt-14' : ''}`}>
      <h2 className='text-navy text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-6 tracking-tight'>
        {section.title}
      </h2>

      <div className="space-y-4">
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
              className='font-sans text-black impact-para'
            >
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsAndConditions () {
  return (
    <div className='min-h-screen w-full bg-[#EBEBEB] py-12 md:py-24'>
      {/* ── Centered Header ── */}
      <div className='text-center mb-12 md:mb-20 px-4'>
        <h1 className='impact-heading font-semibold mb-5 tracking-tight font-display text-black'>
          Terms &amp; Conditions
        </h1>
        <p className='impact-para font-semibold leading-snug max-w-3xl mx-auto'>
          Please read these terms &amp; conditions before using our website.
        </p>
        <p className='impact-para font-semibold mt-2'>Last Updated: January 2026</p>
      </div>

      {/* ── Left-aligned Sections ── */}
      <div className='max-w-480 mx-auto px-6 sm:px-10 md:pl-20 md:pr-40 lg:pl-30 lg:pr-60'>
        {sections.map((section, index) => (
          <SectionBlock key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  )
}