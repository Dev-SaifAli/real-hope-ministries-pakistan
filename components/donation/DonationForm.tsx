'use client'
import React, { useState } from 'react'
import { CircleCheck, Lock, CreditCard, Wallet } from 'lucide-react'
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
    description: 'Your payment information is encrypted and securely processed via Stripe or PayPal.'
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
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe')
  const [selectedAmount, setSelectedAmount] = useState('$500')
  const [customAmount, setCustomAmount] = useState('')
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
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-start'>
        {/* ── Left: Description + Trust Points ── */}
        <div className='space-y-6 md:space-y-8 lg:sticky lg:top-24'>
          <div>
            <h2 className='impact-heading font-semibold font-display text-navy mb-3 md:mb-4'>
              Make a <span className='text-green'>Difference</span> Today
            </h2>
            <p className='font-sans text-black impact-para'>
              Your generosity transforms communities. Every donation, no matter the size, helps bring hope and relief to those in need across Pakistan.
            </p>
          </div>

          <div className='space-y-5 md:space-y-6'>
            {trustPoints.map((point, i) => (
              <div key={i} className='flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-100'>
                <CircleCheck className='w-5 h-5 md:w-6 md:h-6 text-green shrink-0 mt-1' />
                <div className='space-y-1'>
                  <p className='font-sans text-navy font-semibold impact-para'>
                    {point.title}
                  </p>
                  <p className='font-sans text-gray-700 text-sm sm:text-base leading-relaxed'>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Donation Form ── */}
        <div className='bg-white border border-[#00000014] rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl shadow-navy/5 space-y-8'>
          {/* Donation Type Toggle */}
          <div className='space-y-4'>
            <p className='text-[16px] font-semibold font-sans text-black'>
              Donation Type
            </p>
            <div className='flex rounded-xl border border-gray-200 p-1.5 bg-slate-100 overflow-hidden'>
              <button
                type='button'
                onClick={() => setDonationType('one-time')}
                className={`flex-1 py-3 text-sm font-semibold font-sans duration-200 transition-all rounded-lg ${
                  donationType === 'one-time'
                    ? 'bg-white shadow-md text-navy'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                One-time donation
              </button>
              <button
                type='button'
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-3 text-sm font-semibold font-sans duration-200 transition-all rounded-lg ${
                  donationType === 'monthly'
                    ? 'bg-white shadow-md text-navy'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                Monthly support
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className='space-y-4'>
            <p className='text-[16px] font-semibold font-sans text-black'>
              Select Amount
            </p>
            <AmountSelector value={selectedAmount} onChange={setSelectedAmount} />
            
            {selectedAmount === 'Custom' && (
              <div className='relative mt-3'>
                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-sans font-semibold'>$</span>
                <input
                  type='number'
                  placeholder='Enter custom amount'
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className='w-full bg-white border border-[#D9E1EA] rounded-xl pl-8 pr-4 py-3 text-base font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green transition-all'
                />
              </div>
            )}
          </div>

          {/* Personal Details */}
          <div className='space-y-6'>
            <p className='text-[16px] font-semibold font-sans text-black'>
              Your Details
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
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

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
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
                rows={3}
                placeholder='Add a personal note...'
                value={formData.message}
                onChange={handleChange}
                className='w-full resize-none bg-white border border-[#D9E1EA] rounded-xl px-4 py-3 text-base font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green transition-all'
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className='space-y-4'>
            <p className='text-[16px] font-semibold font-sans text-black'>
              Payment Method
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <button
                type='button'
                onClick={() => setPaymentMethod('stripe')}
                className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 transition-all ${
                  paymentMethod === 'stripe'
                    ? 'border-navy bg-navy/5 text-navy'
                    : 'border-gray-100 hover:border-gray-200 text-gray-500'
                }`}
              >
                <CreditCard className='w-6 h-6' />
                <span className='font-semibold text-sm text-center'>Credit Card / Stripe</span>
              </button>
              <button
                type='button'
                onClick={() => setPaymentMethod('paypal')}
                className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 transition-all ${
                  paymentMethod === 'paypal'
                    ? 'border-[#003087] bg-[#003087]/5 text-[#003087]'
                    : 'border-gray-100 hover:border-gray-200 text-gray-500'
                }`}
              >
                <Wallet className='w-6 h-6' />
                <span className='font-semibold text-sm'>PayPal</span>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className='space-y-4'>
            {donationType === 'monthly' && (
              <div className='p-4 rounded-xl bg-green/5 border border-green/20 flex items-start gap-3'>
                <CircleCheck className='w-5 h-5 text-green shrink-0 mt-0.5' />
                <p className='text-sm text-navy font-sans'>
                  By choosing monthly support, you provide steady, long-term relief to families in need. You can cancel at any time.
                </p>
              </div>
            )}
            <button
              type='submit'
              className={`w-full text-white text-[16px] font-bold font-sans py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 ${
                paymentMethod === 'stripe'
                  ? 'bg-navy hover:bg-navy/90 shadow-navy/20'
                  : 'bg-[#003087] hover:bg-[#003087]/90 shadow-[#003087]/20'
              }`}
            >
              <Lock className='w-5 h-5' />
              {donationType === 'one-time' 
                ? (paymentMethod === 'stripe' ? 'Donate with Stripe' : 'Donate with PayPal')
                : (paymentMethod === 'stripe' ? 'Set up Monthly Stripe' : 'Set up Monthly PayPal')
              }
            </button>
            <p className='text-xs text-center text-gray-400 flex items-center justify-center gap-1.5'>
              <Lock className='w-3 h-3' />
              Your transaction is secure and encrypted.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
