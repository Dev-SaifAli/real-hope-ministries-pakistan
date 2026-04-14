'use client'
import PageHero from '@/components/hero/PageHero'

import React, { useState } from 'react'
import { Users, Shield, Flame, Megaphone } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'
import FormSelect from '@/components/ui/FormSelect'
import Image from 'next/image'

const involvementCards = [
  {
    icon: <Users className='w-6 h-6 text-white' />,
    title: 'Volunteer With Us',
    description:
      'Help in outreach programs, food distribution and community support directly on the ground.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop'
  },
  {
    icon: <Shield className='w-6 h-6 text-white' />,
    title: 'Partner with Us',
    description:
      'Organizations or churches can partner to support humanitarian missions and scale our impact.',
    image:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop'
  },
  {
    icon: <Flame className='w-6 h-6 text-white' />,
    title: 'Sponsor a Cause',
    description:
      "Sponsor a water pump, a child's education, or provide ongoing support for a struggling family.",
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop'
  },
  {
    icon: <Megaphone className='w-6 h-6 text-white' />,
    title: 'Spread Awareness',
    description:
      'Help share our mission through social media, community events, and word of mouth.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop'
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
    <>
      <PageHero
        title='Be a part of the change and help bring hope to communities in need.'
        subtitle='Whether through volunteering, partnerships or advocacy, you can help transform lives in Pakistan.'
        imageSrc='/home-hero.png'
        href='#involved'
      />
      {/* // FIX: px-4 mobile → px-8 sm → px-16 md → px-24 lg — prevents content
      touching edges on 320px */}
      <div className='min-h-screen w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 mt-20'>
        {/* ── Section 1: Header ── */}
        {/* FIX: mb-10 mobile, mb-32 md+ — too much gap on small screens */}
        <div id='involved'
         className='text-center px-4 sm:px-6 mb-10 md:mb-16 max-w-[900px] mx-auto'>
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
              className='group cursor-pointer bg-[#DDEBFFD4] rounded-2xl overflow-hidden flex flex-col h-full w-full'
            >
              <div className='relative overflow-hidden w-full h-48 flex-shrink-0'>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              {/* ✅ p-4 — padding kam kiya, pb-5 bottom thoda */}
              <div className='p-4 pb-5 flex flex-col flex-1'>
                <div className='w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0 mb-4'>
                  {card.icon}
                </div>

                {/* ✅ text-[18px] fixed — responsive hata diya */}
                <h3 className='text-navy font-display font-semibold  text-[20px] md:text-[22px]  leading-tight mb-2'>
                  {card.title}
                </h3>

                {/* ✅ line-clamp-3 — sab cards same 3 lines pe end */}
                <p className='font-sans text-black text-[14px] sm:text-[15px] leading-relaxed line-clamp-3'>
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

          <div className='bg-[#f3f4f6]/90 rounded-2xl p-6 sm:p-10 md:py-10 max-w-[860px] mx-auto'>
            <form className='space-y-5' onSubmit={handleSubmit}>
              {/* ── Full Name — full width ── */}
              <FormInput
                id='fullName'
                label='Full Name'
                type='text'
                placeholder='e.g. Jane Doe'
                value={formData.fullName}
                onChange={handleChange}
              />

              {/* ── Email + Phone — 2 columns ── */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <FormInput
                  id='email'
                  label='Email Address'
                  type='email'
                  placeholder='jane@example.com'
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormInput
                  id='phone'
                  label='Phone Number'
                  type='tel'
                  placeholder='+1 (555) 000-0000'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* ── Country + Area of Interest — 2 columns ── */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <FormInput
                  id='country'
                  label='Country'
                  type='text'
                  placeholder='Where are you located?'
                  value={formData.country}
                  onChange={handleChange}
                />
                <FormSelect
                  id='areaOfInterest'
                  label='Area of Interest'
                  options={areaOptions}
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                />
              </div>

              {/* ── Message — textarea ── */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-[16px] font-bold font-sans text-black mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={5}
                  placeholder='Tell us a bit about why you want to get involved...'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans placeholder-black text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-navy'
                />
              </div>

              {/* ── Submit ── */}
              <button
                type='submit'
                className='max-h-14 w-full bg-navy text-white text-[16px] font-semibold font-sans py-4 rounded-md hover:bg-[#06162b] transition-all shadow-sm'
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
