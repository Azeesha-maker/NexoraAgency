'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Icon } from '@iconify/react'
import Link from 'next/link'

// Service display names
const serviceMap: Record<string, string> = {
  'fyp-development': 'Final Year Project (FYP) Development 🎓',
  'web-development': 'Web Development',
  'mobile-app-development': 'Mobile App Development',
  'ui-ux-design': 'UI/UX Design',
  'maintenance-support': 'Maintenance & Support',
  'pwa-development': 'Progressive Web App (PWA) Development',
  'website-modernization': 'Website & App Modernization',
}

// Form fields per service
const serviceFields: Record<string, string[]> = {
  'fyp-development': ['Project idea', 'Deadline', 'Tech Stack', 'Budget'],
  'web-development': ['Website type', 'Pages required', 'SEO needs', 'CMS'],
  'mobile-app-development': ['App platform', 'Features', 'Deadline', 'Budget'],
  'ui-ux-design': ['Project type', 'Design inspiration', 'Deadline'],
  'maintenance-support': ['Current issues', 'System type', 'Frequency'],
  'pwa-development': ['App type', 'Offline mode needed', 'Features'],
  'website-modernization': ['Current system', 'New tech', 'Deadline'],
}

// Child component to ensure client-side hook works without suspense error
function ContactForm() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('service') || '' // empty if direct visit
  const serviceDisplayName = serviceMap[slug] || 'General Inquiry'
  const fields = serviceFields[slug] || ['Message']

  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Your request has been submitted!')
  }

  return (
    <form className='bg-gray-50 rounded-3xl p-8 shadow-sm' onSubmit={handleSubmit}>
      {fields.map((field, idx) => (
        <div key={idx} className='mb-4'>
          <label className='block font-medium mb-1'>{field}</label>
          <input
            type='text'
            value={formData[field] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            placeholder={field}
            className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
            required
          />
        </div>
      ))}

      {/* Common fields */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
        <input
          type='text'
          placeholder='First name'
          className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
          required
        />
        <input
          type='text'
          placeholder='Last name'
          className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
          required
        />
      </div>
      <input
        type='email'
        placeholder='Email'
        className='border border-gray-300 rounded-xl p-3 w-full mb-6 focus:ring-2 focus:ring-primary focus:outline-none'
        required
      />
      <input
        type='tel'
        placeholder='Phone number'
        className='border border-gray-300 rounded-xl p-3 w-full mb-6 focus:ring-2 focus:ring-primary focus:outline-none'
      />

      <button
        type='submit'
        className='bg-black text-white w-full py-3 rounded-xl font-semibold hover:bg-gray-800 transition'
      >
        Send message
      </button>
    </form>
  )
}

export default function ContactPage() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('service') || ''
  const serviceDisplayName = serviceMap[slug] || 'General Inquiry'

  return (
    <section className='bg-white text-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-4'>Contact our team</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Got any questions about a project or scaling your product? We're here to help.
          </p>
          <p className='text-primary mt-2 font-semibold'>
            {slug
              ? <>You're contacting us about: <span className='text-black'>{serviceDisplayName}</span></>
              : <>Fill out the form below for a general inquiry</>
            }
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left: Contact Form */}
          <ContactForm />

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
                <Icon icon='tabler:map-pin' width='18' /> Hyderabad, Pakistan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
