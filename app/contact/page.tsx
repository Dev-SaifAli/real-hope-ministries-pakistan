'use client'

import React, { useState } from 'react'
import PageHero from '@/components/hero/PageHero'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import FormInput from '@/components/ui/FormInput'

const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-full rounded-xl bg-gray-100 animate-pulse flex items-center justify-center'>
      <span className='text-gray-400 font-sans'>Loading Map...</span>
    </div>
  )
})

const contactDetails = [
  { icon: <Mail className='w-5 h-5' />, value: 'zashan789789@gmail.com' },
  { icon: <Phone className='w-5 h-5' />, value: '+92 300 9823626' },
  {
    icon: <MapPin className='w-5 h-5' />,
    value: 'Madina Green Valley, Faisalabad'
  }
]

const formFields = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Name' },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter Your email'
  },
  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '1 (555) 000-0000' },
  {
    id: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'www.example.com'
  }
]

const OFFICE_LAT = 31.416384318282596
const OFFICE_LNG = 73.14111910817073

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <>
      <PageHero
        showButton={false}
        title='Contact Us'
        subtitle='We’d love to hear from you. Reach out to us for inquiries, partnerships, or support. Your Small Step can change someone’s entire life .'
        imageSrc='Mask_group_8_f9ldyb'
      />

      <div className='min-h-screen w-full bg-white   py-12 md:py-20'>
        <div className='main-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24  '>
          {/* ── Left Column ── */}
          <div className='flex flex-col h-full'>
            <h1 className=' font-semibold text-navy mb-4 impact-heading'>
              Get in <span className='text-green'>Touch</span>
            </h1>

            <p className='font-sans text-black impact-para mb-10 max-w-lg'>
              If you have any questions about our work or would like to support
              our mission, feel free to contact us.
            </p>

            <div>
              <h2 className='text-[20px] md:text-[24px] font-semibold font-display text-navy mb-4'>
                Contact details
              </h2>
              <div className='bg-[#f3f4f6]/90 rounded-2xl px-6 py-8 space-y-6 w-full max-w-sm'>
                {contactDetails.map((item, i) => (
                  <div key={i} className='flex items-center gap-4'>
                    <div className='shrink-0 text-navy'>{item.icon}</div>
                    <span className='text-black text-[15px] md:text-[16px] font-sans'>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Map + Visit Our Office — screenshot jaisa, left column mein */}
            <div className='mt-auto w-full flex flex-col grow'>
              {/* Visit Our Office */}

              <div className='my-4'>
                <h3 className='font-display font-semibold text-navy text-[16px] mb-1'>
                  Visit Our Office
                </h3>
                <div className='flex items-center gap-2 mb-3'>
                  <MapPin className='w-4 h-4 text-navy shrink-0' />
                  <span className='font-sans text-black text-[14px]'>
                    Madina green valley, faisalabad
                  </span>
                </div>

                <a
                  href={`https://www.google.com/maps?q=${OFFICE_LAT},${OFFICE_LNG}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 font-sans font-semibold text-navy text-[14px] hover:text-green transition-colors duration-200'
                >
                  Get a Direction
                  <ArrowRight className='w-4 h-4' />
                </a>
              </div>

              {/* Leaflet Map */}
              <div className='w-full grow min-h-[300px] rounded-2xl overflow-hidden '>
                <MapComponent lat={OFFICE_LAT} lng={OFFICE_LNG} />
              </div>
            </div>
          </div>

          {/* ── Right Column — same as before ── */}
          <div className='lg:mt-[14px]'>
            <h2 className='text-[24px] md:text-[32px] font-semibold font-display text-navy mb-6'>
              Send Us a Message
            </h2>

            <form className='bg-[#f3f4f6]/90 rounded-2xl p-6 sm:p-10 md:py-10 space-y-5'>
              {formFields.map(field => (
                <FormInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                />
              ))}

              <div>
                <label
                  htmlFor='message'
                  className='block text-[16px] font-bold font-sans text-black mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  placeholder='Enter Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans placeholder-black text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-navy'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-navy text-white text-[16px] font-semibold font-sans py-4 rounded-md hover:bg-[#06162b] transition-all shadow-sm'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
