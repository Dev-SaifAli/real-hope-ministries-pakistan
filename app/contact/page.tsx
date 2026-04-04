'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'

// ─── Data ────────────────────────────────────────────────────────────────────

const contactDetails = [
  { icon: <Mail className='w-5 h-5 text-navy' />, value: 'absd@gmail.com' },
  { icon: <Phone className='w-5 h-5 text-navy' />, value: '+1 (555) 000-0000' },
  {
    icon: <MapPin className='w-5 h-5 text-navy' />,
    value: '123 Hope Street, Lahore, Pakistan'
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

export default function ContactUs () {
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
    <div className='min-h-screen w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start'>
        {/* ── Left Column ── */}
        <div className='flex flex-col'>
          <h1 className='text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-navy mb-4 leading-tight'>
            Get in <span className='text-green'>Touch</span>
          </h1>

          <p className='font-sans text-black text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-md'>
            If you have any questions about our work or would like to support
            our mission, feel free to contact us.
          </p>

          <div>
            <h2 className='text-[20px] md:text-[24px] font-semibold font-display text-navy mb-4'>
              Contact details
            </h2>
            <div className='bg-[#0B2545]/10 px-6 py-8 space-y-6 w-full max-w-sm'>
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
        </div>

        {/* ── Right Column ── */}
        <div className='lg:mt-[14px]'>
          <h2 className='text-[24px] md:text-[32px] font-semibold font-display text-navy mb-6'>
            Send Us a Message
          </h2>

          <form className='bg-[#0B2545]/10 p-6 sm:p-10 md:py-10 space-y-5'>
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

            {/* ── Textarea — FormInput mein nahi hai, yahan raha ── */}
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
  )
}
