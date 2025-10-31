'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import './styles.css'

export default function ServicesPage() {
  const router = useRouter()
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  const services = [
    { id: 1, title: 'Web Development', slug: 'web-development', description: 'Fast, scalable websites', features: ['Responsive', 'SEO-friendly'], cta: 'Build My Website' },
    { id: 2, title: 'Mobile App Development', slug: 'mobile-app-development', description: 'Android & iOS apps', features: ['Cross-platform', 'API integration'], cta: 'Start My App Project' },
    { id: 3, title: 'UI/UX Design', slug: 'ui-ux-design', description: 'User-centered designs', features: ['Wireframes', 'Modern UI'], cta: 'Design My Interface' },
    { id: 4, title: 'Maintenance & Support', slug: 'maintenance-support', description: 'Continuous updates & backups', features: ['24/7 Support'], cta: 'Get Support' },
    { id: 5, title: 'PWA Development', slug: 'pwa-development', description: 'Installable & offline-ready web apps', features: ['Offline mode', 'Push notifications'], cta: 'Launch My PWA' },
    { id: 6, title: 'Website Modernization', slug: 'website-modernization', description: 'Upgrade old systems', features: ['React/Next.js migration'], cta: 'Modernize My Site' },
    { id: 7, title: 'FYP Development 🎓', slug: 'fyp-development', description: 'Final Year Project support', features: ['Full development', 'Database support'], tag: '50% Off', cta: 'Build My FYP Now' },
  ]

  const faqs = [
    { question: 'How long does it take to build a website?', answer: '2–6 weeks depending on complexity.' },
    { question: 'Do you offer ongoing maintenance?', answer: 'Yes, we provide monthly maintenance packages.' },
    { question: 'Can I request a custom quote?', answer: 'Use the contact form to request a proposal.' },
  ]

  const testimonials = [
    { name: 'Sarah Khan', role: 'Startup Founder', feedback: 'They built our brand presence from website to mobile app.' },
    { name: 'Ali Raza', role: 'Marketing Manager', feedback: 'Our site loads faster and ranks higher on Google.' },
  ]

  return (
    <section id='services' className='bg-white text-black py-16'>
      <div className='container mx-auto max-w-7xl px-4 pt-20'>
        <div className='text-center mb-12'>
          <p className='text-primary uppercase tracking-widest text-sm sm:text-base'>Our Services</p>
          <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Web & App Solutions That Scale With You</h2>
          <p className='text-gray-800 mt-3 max-w-2xl mx-auto'>From concept to launch, we deliver digital products that look great, perform fast, and drive business growth.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service) => (
            <div key={service.id} className='group bg-gray-190 hover:bg-darkmode transition-all duration-300 p-8 rounded-3xl shadow-md flex flex-col justify-between hover:shadow-xl relative'>
              {service.tag && <span className='absolute top-0 right-1 bg-red-500 text-white text-xs font-bold px-2 py-2 rounded-full shadow-md animate-pulse'>{service.tag}</span>}
              <div>
                <h3 className='text-xl font-semibold mb-3 group-hover:text-white transition'>{service.title}</h3>
                <p className='mb-5 text-gray-700 group-hover:text-gray-200 transition'>{service.description}</p>
                <ul className='mb-5 list-disc pl-5 space-y-1'>
                  {service.features.map((f, i) => <li key={i} className='text-gray-700 group-hover:text-gray-300 transition'>{f}</li>)}
                </ul>
              </div>
              <div className='mt-auto flex justify-between items-center'>
                <button onClick={() => router.push(`/contact?service=${service.slug}`)} className='bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition'>{service.cta}</button>
                <Link href={`/contact?service=${service.slug}`} className='text-primary font-semibold hover:text-accent transition flex items-center group-hover:text-white'>
                  Click here <Icon icon='tabler:chevron-right' className='ml-1' width='18' height='18' />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-20'>
          <h3 className='text-center text-2xl font-semibold mb-8'>What Our Clients Say</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {testimonials.map((t, i) => (
              <div key={i} className='bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition'>
                <p className='italic mb-4 text-gray-700'>“{t.feedback}”</p>
                <h5 className='font-semibold text-lg'>{t.name}</h5>
                <p className='text-primary text-sm'>{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-20'>
          <h3 className='text-center text-2xl font-semibold mb-8'>Frequently Asked Questions</h3>
          <div className='max-w-3xl mx-auto'>
            {faqs.map((faq, i) => (
              <div key={i} className='border-b py-4'>
                <button className='flex justify-between w-full text-left' onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}>
                  <span className='font-semibold text-lg'>{faq.question}</span>
                  <Icon icon={activeFAQ === i ? 'tabler:chevron-up' : 'tabler:chevron-down'} width='22' height='22' />
                </button>
                {activeFAQ === i && <p className='mt-3 text-gray-600'>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
