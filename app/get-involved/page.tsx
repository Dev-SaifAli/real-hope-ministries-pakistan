'use client'

import React, { useState } from 'react'
import { Users, Shield, Flame, Megaphone } from 'lucide-react'

const involvementCards = [
  {
    icon: <Users className='w-6 h-6 text-white' />,
    title: 'Volunteer With Us',
    description:
      'Help in outreach programs, food distribution and community support directly on the ground.'
  },
  {
    icon: <Shield className='w-6 h-6 text-white' />,
    title: 'Partner with Us',
    description:
      'Organizations or churches can partner to support humanitarian missions and scale our impact.'
  },
  {
    icon: <Flame className='w-6 h-6 text-white' />,
    title: 'Sponsor a Cause',
    description:
      "Sponsor a water pump, a child's education, or provide ongoing support for a struggling family."
  },
  {
    icon: <Megaphone className='w-6 h-6 text-white' />,
    title: 'Spread Awareness',
    description:
      'Help share our mission through social media, community events, and word of mouth.'
  }
]

const areaOptions = [
  'Volunteering',
  'Partnership',
  'Sponsorship',
  'Spreading Awareness',
  'Other'
]

export default function GetInvolved () {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    areaOfInterest: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = () => {
    console.log('Application submitted:', formData)
  }

  return (
    // FIX: px-4 mobile → px-8 sm → px-16 md → px-24 lg — prevents content touching edges on 320px
    <div className='min-h-screen w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 mt-20'>
      {/* ── Section 1: Header ── */}
      {/* FIX: mb-10 mobile, mb-32 md+ — too much gap on small screens */}
      <div className='text-center px-4 sm:px-6 mb-10 md:mb-16 max-w-[900px] mx-auto'>
        <h1 className='font-display font-semibold text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 md:mb-6'>
          Ways to <span className='text-green'>Get Involve</span>
        </h1>
        <p className='font-sans text-black text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed'>
          There are many ways you can contribute to our cause. Find the path
          that best fits your passion and resources.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-16 items-stretch'>
        {involvementCards.map((card, i) => (
          <div
            key={i}
            className='bg-[#DDEBFFD4] rounded-2xl p-6 flex flex-col h-full w-full'
          >
            <div className='w-14 h-14 bg-navy rounded-md flex items-center justify-center shrink-0 mb-8'>
              {card.icon}
            </div>
            <div className='flex flex-col flex-1'>
              <h3 className='text-navy font-display font-semibold text-[22px] md:text-[26px] leading-tight mb-3'>
                {card.title}
              </h3>
              <p className='font-sans text-black text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Section 2: Start Your Journey ── */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start pb-16'>
        {/* Left */}
        <div>
          <h2 className='text-[24px] md:text-[32px] font-semibold font-display text-navy mb-4'>
            Start Your <span className='text-green'>Journey</span>
          </h2>
          <p className='font-sans text-black text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed'>
            Fill out the form below and our team will get back to you with the
            next steps on how you can get involved.
          </p>
        </div>

        {/* Right — Form */}
        {/* FIX: px-4 sm:px-8 — px-8 was too tight on 320px */}
        <form className='border border-gray-200 rounded-md px-4 sm:px-8 py-8 space-y-5 mt-4'>
          {/* Full Name */}
          <div>
            <label
              htmlFor='fullName'
              className='block text-[16px] font-semibold font-sans text-black mb-2'
            >
              Full Name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='e.g. Jane Doe'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy'
            />
          </div>

          {/* FIX: Email + Phone — grid-cols-1 on mobile, grid-cols-2 on sm+ */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-[16px] font-semibold font-sans text-black mb-2'
              >
                Email Address
              </label>
              <input
                id='email'
                type='email'
                placeholder='jane@example.com'
                value={formData.email}
                onChange={handleChange}
                className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy'
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block text-[16px] font-semibold font-sans text-black mb-2'
              >
                Phone Number
              </label>
              <input
                id='phone'
                type='tel'
                placeholder='+1 (555) 000-0000'
                value={formData.phone}
                onChange={handleChange}
                className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy'
              />
            </div>
          </div>

          {/* FIX: Country + Area — grid-cols-1 on mobile, grid-cols-2 on sm+ */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='country'
                className='block text-[16px] font-semibold font-sans text-black mb-2'
              >
                Country
              </label>
              <input
                id='country'
                type='text'
                placeholder='Where are you located?'
                value={formData.country}
                onChange={handleChange}
                className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy'
              />
            </div>
            <div>
              <label
                htmlFor='areaOfInterest'
                className='block text-[16px] font-semibold font-sans text-black mb-2'
              >
                Area of Interest
              </label>
              <select
                id='areaOfInterest'
                name='areaOfInterest'
                value={formData.areaOfInterest}
                onChange={handleChange}
                className={`w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-navy bg-white ${
                  formData.areaOfInterest === ''
                    ? 'text-black'
                    : 'text-gray-700'
                }`}
              >
                <option value='' disabled>
                  Select an option
                </option>
                {areaOptions.map(opt => (
                  <option key={opt} value={opt} className='text-gray-700'>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor='message'
              className='block text-[16px] font-semibold font-sans text-black mb-2'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={5}
              placeholder='Tell us a bit about why you want to get involved...'
              value={formData.message}
              onChange={handleChange}
              className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans text-gray-700 placeholder-black focus:outline-none focus:ring-1 focus:ring-navy resize-none'
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className='w-full bg-navy text-white text-[16px] font-semibold font-sans py-3 rounded-md hover:bg-[#0d2e56] transition-colors duration-200'
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}
