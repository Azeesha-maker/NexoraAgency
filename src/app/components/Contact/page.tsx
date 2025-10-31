'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Your request has been submitted!')
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  }

  return (
    <section className='bg-white text-gray-900 py-20'>
      <div className='max-w-3xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-4'>Contact Our Team</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Got any questions about your project or requirements? Fill out the form below and we'll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-gray-50 rounded-3xl p-8 shadow-sm flex flex-col gap-6'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <input
              type='text'
              name='firstName'
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
              required
            />
          </div>

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone number'
            value={formData.phone}
            onChange={handleChange}
            className='border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Your requirements or message'
            value={formData.message}
            onChange={handleChange}
            className='border border-gray-300 rounded-xl p-3 w-full h-32 resize-none focus:ring-2 focus:ring-primary focus:outline-none'
            required
          />

          <button
            type='submit'
            className='bg-black text-white w-full py-3 rounded-xl font-semibold hover:bg-gray-800 transition cursor-pointer'
          >
            Send message
          </button>
        </form>

        <div className='mt-12 space-y-6 text-center'>
          <p className='text-gray-600'>Or reach us directly:</p>
          <div className='flex justify-center gap-6'>
            <Link href='mailto:contact@webappagency.com' className='text-primary hover:underline flex items-center gap-1'>
              <Icon icon='tabler:mail' width='18' /> Email
            </Link>
            <Link href='tel:+1559000000' className='text-primary hover:underline flex items-center gap-1'>
              <Icon icon='tabler:phone' width='18' /> Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
