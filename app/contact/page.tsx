'use client'

import { useActionState, useRef, useEffect } from 'react'
import PageHero from '@/components/hero/PageHero'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { sendContactForm, type ContactFormState } from './actions'

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
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Name', required: true },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter Your email',
    required: true
  },
  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '1 (555) 000-0000', required: false },
  {
    id: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'www.example.com',
    required: false
  }
]

const OFFICE_LAT = 31.416384318282596
const OFFICE_LNG = 73.14111910817073

const initialState: ContactFormState = {
  success: false,
  message: ''
}

export default function ContactUs() {
  const [state, formAction, pending] = useActionState(sendContactForm, initialState)
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
        showButton={false}
        title='Contact Us'
        subtitle={`We'd love to hear from you. Reach out to us for inquiries, partnerships, or support. Your Small Step can change someone's entire life.`}
        imageSrc='ChatGPT_Image_Apr_29_2026_10_38_32_AM_ts7enp'
      />

      <div className='min-h-screen w-full bg-white   py-12 '>
        <div className='main-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24  '>
          {/* ── Left Column ── */}
          <div className='flex flex-col h-full '>
            <h1 className=' font-semibold text-navy mb-4 impact-heading'>
              Get in <span className='text-green'>Touch</span>
            </h1>

            <p className='font-sans text-black impact-para mb-10 max-w-lg  '>
              If you have any questions about our work or would like to support
              our mission, feel free to contact us.
            </p>

            <div>
              <h2 className='text-[20px] md:text-[24px] font-semibold font-display text-navy mb-4'>
                Contact details
              </h2>
              <div className='bg-[#f3f4f6]/90 rounded-2xl px-6 py-8 space-y-6 w-full max-w-sm  '>
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

              <div className='my-4  '>
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

          {/* ── Right Column ── */}
          <div className='lg:mt-[14px] scroll-mt-28' id='contact-form'>
            <h2 className='text-[24px] md:text-[32px] font-semibold font-display text-navy mb-6'>
              Send Us a Message
            </h2>

            <form ref={formRef} action={formAction} className='bg-[#f3f4f6]/90 rounded-2xl p-6 sm:p-10 md:py-10 space-y-5'>
              {formFields.map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className='block text-[16px] font-bold font-sans text-black mb-2'>
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className='w-full bg-white border border-[#D9E1EA] rounded-md px-4 py-3 text-[16px] font-sans placeholder-black text-gray-700 focus:outline-none focus:ring-1 focus:ring-navy'
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor='message'
                  className='block text-[16px] font-bold font-sans text-black mb-2'
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  placeholder='Enter Your Message'
                  required
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

              <button
                type='submit'
                disabled={pending}
                className='w-full bg-navy text-white text-[16px] font-semibold font-sans py-4 rounded-md hover:bg-[#06162b] transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center'
              >
                {pending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
