'use client'
import React, { useState } from 'react'
import { CircleCheck, Lock } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'
import FormSelect from '@/components/ui/FormSelect'
import AmountSelector from '@/components/ui/AmountSelector'

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

export default function DonationForm () {
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
    <>
      {/* ── Section 2: Make a Difference + Donation Form ── */}
      {/* FIX: 1-col mobile/md, 2-col lg+ */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-start'>
        {/* ── Left: Description + Trust Points ── */}
        <div className='space-y-6 md:space-y-8'>
          <div>
            <h2 className='impact-heading font-semibold font-display text-navy mb-3 md:mb-4'>
              Make a <span className='text-green'>Difference</span> Today
            </h2>
            <p className='font-sans text-black impact-para'>
              Your generosity transforms communities. Select an amount below to
              contribute.
            </p>
          </div>

          <div className='space-y-5 md:space-y-6'>
            {trustPoints.map((point, i) => (
              <div key={i} className='flex items-start gap-4'>
                <CircleCheck className='w-5 h-5 md:w-6 md:h-6 text-green flex-shrink-0 mt-1' />
                <div className='space-y-1'>
                  <p className='font-sans text-navy font-semibold impact-para'>
                    {point.title}
                  </p>
                  <p className='font-sans text-gray-700 text-sm sm:text-base md:text-[17px] leading-relaxed'>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Donation Form ── */}
        {/* FIX: p-4 mobile → p-6 sm → p-10 md */}
        <form className='border border-[#00000014] rounded-lg p-4 sm:p-6 md:p-10 space-y-6 md:space-y-8'>
          {/* Toggle */}
          <div className='flex rounded-lg border border-gray-200 p-1.5 bg-[#0B25454F] overflow-hidden'>
            <button
              type='button'
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-2.5 md:py-3 text-sm font-semibold font-sans duration-200 transition-all rounded-md ${
                donationType === 'one-time'
                  ? 'bg-[#FFF8F4] shadow-sm text-black'
                  : 'text-black'
              }`}
            >
              One-time donation
            </button>
            <button
              type='button'
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2.5 md:py-3 text-sm font-semibold font-sans duration-200 transition-all rounded-lg ${
                donationType === 'monthly'
                  ? 'bg-[#FFF8F4] shadow-sm text-black'
                  : 'text-black'
              }`}
            >
              Monthly support
            </button>
          </div>

          {/* Amount */}
          <div>
            <p className='text-[16px] font-semibold font-sans text-black mb-3 md:mb-4'>
              Select Amount
            </p>
            <AmountSelector />
          </div>

          {/* Details */}
          <div className='space-y-4 md:space-y-6'>
            <p className='text-[16px] font-semibold font-sans text-black'>
              Your Details
            </p>

            {/* FIX: grid-cols-1 mobile, grid-cols-2 sm+ */}
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
                className='block text-[16px] font-semibold font-sans text-black mb-2'
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

          {/* Submit */}
          <button
            type='submit'
            className='w-full bg-navy text-white text-[15px] md:text-[16px] font-semibold font-sans py-3 md:py-4 rounded-md hover:bg-[#06162b] transition-all shadow-sm flex items-center justify-center gap-3'
          >
            <Lock className='w-5 h-5' />
            Donate Securely with PayPal
          </button>
        </form>
      </div>
    </>
  )
}
