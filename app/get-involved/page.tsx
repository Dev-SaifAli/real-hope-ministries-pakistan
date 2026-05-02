'use client'
import PageHero from '@/components/hero/PageHero'

import { useActionState, useRef, useEffect } from 'react'
import { Users, Shield, Flame, Megaphone } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'
import FormSelect from '@/components/ui/FormSelect'
import Image from 'next/image'
import { buildImage } from '@/utils/cloudinary'
import { sendInvolvementForm, type InvolvementFormState } from './actions'

const involvementCards = [
  {
    icon: <Users className='w-6 h-6 text-white' />,
    title: 'Volunteer With Us',
    description:
      'Help in outreach programs, food distribution and community support directly on the ground.',
    image:
      'Screenshot_1083_jqkuqr'
  },
  {
    icon: <Shield className='w-6 h-6 text-white' />,
    title: 'Partner with Us',
    description:
      'Organizations or churches can partner to support humanitarian missions and scale our impact.',
    image:
      'Mask_group_5_jkvblx'
  },
  {
    icon: <Flame className='w-6 h-6 text-white' />,
    title: 'Sponsor a Cause',
    description:
      "Sponsor a water pump, a child's education, or provide ongoing support for a struggling family.",
    image:
      'Mask_group_6_zg0eyb'
  },
  {
    icon: <Megaphone className='w-6 h-6 text-white' />,
    title: 'Spread Awareness',
    description:
      'Help share our mission through social media, community events, and word of mouth.',
    image:
      'Mask_group_7_aawxky'
  }
]

const areaOptions = [
  'Volunteering',
  'Partnership',
  'Sponsorship',
  'Spreading Awareness',
  'Other'
]

const initialState: InvolvementFormState = {
  success: false,
  message: ''
}

export default function GetInvolved () {
  const [state, formAction, pending] = useActionState(sendInvolvementForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  // Reset form fields after successful submission
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <>
      <PageHero
        primaryButtonText='Become a Volunteer'
        primaryHref='#involved'
        secondaryButtonText='Donate Now'
        href='/support-us#donation-form'
        title='Be a part of the change and help bring hope to communities in need.'
        subtitle='Whether through volunteering, partnerships or advocacy, you can help transform lives in Pakistan.'
        imageSrc='Mask_group_1_qnvxbp'
      />
      {/* // FIX: px-4 mobile → px-8 sm → px-16 md → px-24 lg — prevents content
      touching edges on 320px */}
      <div className='min-h-screen w-full bg-white py-12 md:py-20'>
        <div className='main-container'>
        {/* ── Cards ── */}
        <div
          id='involved'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-20 items-stretch'
        >
          {involvementCards.map((card, i) => (
            <div
              key={i}
              className='group cursor-pointer bg-[#D9D9D9D6] rounded-2xl overflow-hidden flex flex-col h-full w-full'
            >
              <div className='relative overflow-hidden w-full h-52 flex-shrink-0'>
                <Image
                  src={buildImage(card.image,800)}
                  alt={card.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  fill
                  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              {/* ✅ p-4 — padding kam kiya, pb-5 bottom thoda */}
              <div className='p-4 pb-5 flex flex-col flex-1'>
                

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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start pb-8'>
          {/* Left */}
          <div>
            <h2 className='text-[24px] md:text-[32px] font-semibold font-display text-navy mb-4'>
              Start Your <span className='text-green'>Journey</span>
            </h2>
            <p className='font-sans text-black impact-para'>
              Fill out the form below and our team will get back to you with the
              next steps on how you can get involved.
            </p>
          </div>

          <div className='w-full border border-[#0000002B] shadow-[0px_5.38px_32.25px_0px_rgba(0,0,0,0.02)] rounded-2xl p-6 sm:p-10 md:py-10'>
            <form ref={formRef} action={formAction} className='space-y-5'>
              {/* ── Full Name — full width ── */}
              <FormInput
                id='fullName'
                name='fullName'
                label='Full Name'
                type='text'
                placeholder='e.g. Jane Doe'
                required
              />

              {/* ── Email + Phone — 2 columns ── */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <FormInput
                  id='email'
                  name='email'
                  label='Email Address'
                  type='email'
                  placeholder='jane@example.com'
                  required
                />
                <FormInput
                  id='phone'
                  name='phone'
                  label='Phone Number'
                  type='tel'
                  placeholder='+1 (555) 000-0000'
                />
              </div>

              {/* ── Country + Area of Interest — 2 columns ── */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <FormInput
                  id='country'
                  name='country'
                  label='Country'
                  type='text'
                  placeholder='Where are you located?'
                  required
                />
                <FormSelect
                  id='areaOfInterest'
                  name='areaOfInterest'
                  label='Area of Interest'
                  options={areaOptions}
                  required
                />
              </div>

              {/* ── Message — textarea ── */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-[16px] font-bold font-sans text-black mb-1'
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  placeholder='Tell us a bit about why you want to get involved...'
                  className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans placeholder-black text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-navy'
                />
              </div>

              {/* Status Messages */}
              {state.message && (
                <div
                  aria-live='polite'
                  className={`p-4 rounded-md font-sans font-medium ${
                    state.success
                      ? 'bg-green/10 border border-green/30 text-green'
                      : 'bg-red-50 border border-red-200 text-red-600'
                  }`}
                >
                  {state.message}
                </div>
              )}

              {/* ── Submit ── */}
              <button
                type='submit'
                disabled={pending}
                className='max-h-14 w-full bg-navy text-white text-[16px] font-semibold font-sans py-4 rounded-md hover:bg-[#06162b] transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center'
              >
                {pending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
