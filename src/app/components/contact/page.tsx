'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className='bg-white text-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-4'>Contact our team</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Got any questions about a project or scaling your product? We're here to help. 
            Chat with our friendly team 24/7 — we’ll get back to you in less than 5 minutes.
          </p>
        </div>

        {/* Two-column layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          
          {/* Left: Contact Form */}
          <form className='bg-gray-50 rounded-3xl p-8 shadow-sm'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
              <input
                type='text'
                placeholder='First name'
                className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
              />
              <input
                type='text'
                placeholder='Last name'
                className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
              />
            </div>
            <input
              type='email'
              placeholder='Email'
              className='border border-gray-300 rounded-xl p-3 w-full mb-6 focus:ring-2 focus:ring-primary focus:outline-none'
            />
            <input
              type='tel'
              placeholder='Phone number'
              className='border border-gray-300 rounded-xl p-3 w-full mb-6 focus:ring-2 focus:ring-primary focus:outline-none'
            />
            <textarea
              placeholder='Leave us a message...'
              rows={4}
              className='border border-gray-300 rounded-xl p-3 w-full mb-6 focus:ring-2 focus:ring-primary focus:outline-none'
            ></textarea>

            <div className='mb-6'>
              <p className='font-medium mb-3'>Services</p>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {['Website design', 'UX design', 'User research', 'Content creation', 'Strategy & consulting', 'Other'].map(
                  (item, idx) => (
                    <label key={idx} className='flex items-center gap-2 text-gray-600'>
                      <input type='checkbox' className='accent-primary w-4 h-4' />
                      {item}
                    </label>
                  )
                )}
              </div>
            </div>

            <button
              type='submit'
              className='bg-black text-white w-full py-3 rounded-xl font-semibold hover:bg-gray-800 transition'
            >
              Send message
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className='space-y-10'>
            <div>
              <h3 className='text-xl font-semibold mb-3'>Chat with us</h3>
              <p className='text-gray-600 mb-2'>Speak to our team via live chat.</p>
              <div className='space-y-1'>
                <Link href='#' className='text-primary hover:underline flex items-center gap-1'>
                  <Icon icon='tabler:message-circle' width='18' /> Start a live chat
                </Link>
                <Link href='mailto:contact@webappagency.com' className='text-primary hover:underline flex items-center gap-1'>
                  <Icon icon='tabler:mail' width='18' /> Shoot us an email
                </Link>
                <Link href='#' className='text-primary hover:underline flex items-center gap-1'>
                  <Icon icon='tabler:brand-x' width='18' /> Message us on X
                </Link>
              </div>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-3'>Call us</h3>
              <p className='text-gray-600 mb-2'>Mon–Fri from 8am to 5pm.</p>
              <Link href='tel:+1559000000' className='text-primary hover:underline flex items-center gap-1'>
                <Icon icon='tabler:phone' width='18' /> +1 (559) 000-0000
              </Link>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-3'>Visit us</h3>
              <p className='text-gray-600 mb-2'>Come by our office:</p>
              <Link
                href='https://maps.google.com'
                target='_blank'
                className='text-primary hover:underline flex items-center gap-1'
              >
                <Icon icon='tabler:map-pin' width='18' /> 100 Smith Street, Collingwood VIC 3066
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
