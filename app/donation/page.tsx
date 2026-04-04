'use client'

import React, { useState } from 'react'
import { CheckCircle, Lock } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'
import FormSelect from '@/components/ui/FormSelect'
import AmountSelector from '@/components/ui/AmountSelector'
import ProjectCard, { Project } from '@/components/ProjectCard'

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Project',
    description:
      'Installing hand pumps and wells to provide safe, accessible drinking water to remote villages.',
    image: '/projects/clean-water.webp',
    alt: 'Children playing with clean water'
  },
  {
    id: 2,
    title: 'Food Project',
    description:
      'Delivering essential food rations to impoverished families struggling with food insecurity.',
    image: '/projects/food.webp',
    alt: 'Food distribution'
  },
  {
    id: 3,
    title: 'Free People',
    description:
      'Empowering marginalized individuals through education, skill-building, and social support.',
    image: '/projects/free-people.webp',
    alt: 'Family standing together'
  },
  {
    id: 4,
    title: 'Orphanage Project',
    description:
      'Providing a safe home, education, and loving care for orphaned and abandoned children.',
    image: '/projects/orphanage.webp',
    alt: 'Young man holding toys for children'
  },
  {
    id: 5,
    title: 'Persecution Support',
    description:
      'Offering legal, emotional, and financial support to those facing religious persecution.',
    image: '/projects/persecution.webp',
    alt: 'Women sitting together'
  },
  {
    id: 6,
    title: 'Freedom from Slavery',
    description:
      'Rescuing bonded laborers from brick kilns and helping them start independent, free lives.',
    image: '/projects/slavery.webp',
    alt: 'Person working at brick kiln'
  },
  {
    id: 7,
    title: 'Widows Ministry',
    description:
      'Providing monthly stipends, medical care, and vocational training to destitute widows.',
    image: '/projects/widows.webp',
    alt: 'Women and children gathering'
  },
  {
    id: 8,
    title: 'Youth of Mission',
    description:
      'Equipping the next generation with leadership skills, spiritual guidance, and education.',
    image: '/projects/youth.webp',
    alt: 'Hands joined in prayer'
  }
]

const trustPoints = [
  {
    title: 'Tax Deductible',
    description:
      'All donations are 100% tax-deductible in applicable countries.'
  },
  {
    title: 'Secure Process',
    description: 'Your payment information is encrypted and securely processed.'
  }
]

const countryOptions = [
  'United States',
  'Pakistan',
  'United Kingdom',
  'Canada',
  'Australia'
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Donation () {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>(
    'one-time'
  )
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className='min-h-screen w-full bg-white px-5 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24'>
      <div className='max-w-[1920px] mx-auto'>
        {/* ── Section 1: Heading ── */}
        <div className='text-center px-4 sm:px-6 mb-10 md:mb-12 max-w-[900px] mx-auto'>
          <h1 className='font-display font-semibold text-navy text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6'>
            Ways You Can <span className='text-green'>Help</span>
          </h1>
          <p className='font-sans text-black text-base sm:text-lg md:text-xl leading-relaxed'>
            Choose a specific cause to support and make a direct impact on the
            lives of those in need.
          </p>
        </div>

        {/* ── Grid: Projects ── */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-20 md:mb-32'>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              showDonateButton={true}
            />
          ))}
        </div>

        {/* ── Section 2: Make a Difference + Donation Form ── */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start pt-6 md:pt-12 '>
          {/* ── Left: Description + Trust Points ── */}
          <div className='space-y-8 md:space-y-10'>
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold font-display text-navy mb-4'>
                Make a <span className='text-green'>Difference</span> Today
              </h2>
              <p className='font-sans text-black text-base sm:text-lg md:text-xl leading-relaxed'>
                Your generosity transforms communities. Select an amount below
                to contribute.
              </p>
            </div>

            <div className='space-y-6 md:space-y-8'>
              {trustPoints.map((point, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <CheckCircle className='w-6 h-6 text-green flex-shrink-0 mt-1' />
                  <div className='space-y-1'>
                    <p className='font-sans text-navy font-semibold text-base sm:text-lg md:text-xl'>
                      {point.title}
                    </p>
                    <p className='font-sans text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed'>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Donation Form ── */}
          <form className='border border-[#00000014]  rounded-lg 2xl p-6 sm:p-10 space-y-8  '>
            {/* ── One-time / Monthly Toggle ── */}
            <div className='flex rounded-lg border border-gray-200 p-1.5 bg-[#0B25454F] overflow-hidden'>
              <button
                onClick={() => setDonationType('one-time')}
                className={`
                  flex-1 py-3 text-sm font-semibold font-sans
                  duration-200 transition-all rounded-md
                  ${
                    donationType === 'one-time'
                      ? 'bg-[#FFF8F4] shadow-sm text-black'
                      : 'text-black hover:text-black'
                  }
                `}
              >
                One-time donation
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`
                  flex-1 py-3 text-sm font-semibold font-sans
                  duration-200 transition-all rounded-lg
                  ${
                    donationType === 'monthly'
                      ? 'bg-[#FFF8F4] shadow-sm text-black'
                      : 'text-black hover:text-black'
                  }
                `}
              >
                Monthly support
              </button>
            </div>

            {/* ── Amount Selector ── */}
            <div>
              <p className='text-[16px] font-semibold font-sans text-black  mb-4'>
                Select Amount
              </p>
              <AmountSelector />
            </div>

            {/* ── Your Details ── */}
            <div className='space-y-6'>
              <p className='text-[16px] font-semibold font-sans text-black '>
                Your Details
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <FormInput
                  id='firstName'
                  label='First Name'
                  type='text'
                  placeholder='John'
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <FormInput
                  id='lastName'
                  label='Last Name'
                  type='text'
                  placeholder='Doe'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <FormInput
                  id='email'
                  label='Email Address'
                  type='email'
                  placeholder='john.doe@example.com'
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormSelect
                  id='country'
                  label='Country'
                  options={countryOptions}
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-[16px] font-semibold font-sans text-black  mb-2'
                >
                  Message (optional)
                </label>
                <textarea
                  id='message'
                  rows={4}
                  placeholder='Message here'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full resize-none bg-white border border-[#D9E1EA] rounded-lg px-4 py-3 text-base font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all'
                />
              </div>
            </div>

            {/* ── Donate Button ── */}
            <button
              type='submit'
              className=' max-h-14 w-full bg-navy text-white text-[16px] font-semibold font-sans py-4 rounded-md hover:bg-[#06162b] transition-all shadow-sm flex items-center justify-center gap-3 '
            >
              <Lock className='w-5 h-5' />
              Donate Securely with PayPal
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
