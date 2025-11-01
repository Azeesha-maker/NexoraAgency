'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  const faqs = [
    {
      question: 'Do you design and develop websites from scratch?',
      answer:
        'Yes! We handle everything from planning and UI/UX design to full-stack development. Whether you need a simple portfolio or a complex business platform, we build it fully custom to match your brand and goals.',
    },
    {
      question: 'Can you also build mobile apps?',
      answer:
        'Absolutely. Our team develops both Android and iOS apps using modern frameworks like React Native and Flutter, ensuring fast performance and beautiful design on all devices.',
    },
    {
      question: 'How long will it take to complete my project?',
      answer:
        'The timeline depends on your project’s complexity. A basic website can take around 2–3 weeks, while a custom web app or e-commerce site may take 4–8 weeks. We’ll share a detailed timeline after understanding your requirements.',
    },
    {
      question: 'How much does a website or app cost?',
      answer:
        'We offer flexible pricing based on your goals and project scale. Starter websites begin around $300–$800, while custom solutions vary. After a quick consultation, we’ll provide a transparent, fixed quote — no hidden fees.',
    },
    {
      question: 'Do you provide maintenance after launch?',
      answer:
        'Yes, we offer monthly or on-demand maintenance packages to keep your site or app secure, updated, and running smoothly. We can also help with content updates and performance optimization.',
    },
    {
      question: 'Will my website be mobile-friendly and SEO-optimized?',
      answer:
        'Definitely. Every website we create is fully responsive, optimized for speed, and built with SEO best practices so it performs well on all devices and search engines.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer:
        'Yes! We can refresh your current website with a modern look, improved functionality, and better user experience  without losing your existing content or SEO value.',
    },
    {
      question: 'Do you integrate third-party tools or APIs?',
      answer:
        'Of course. We can connect your website or app with CRM systems, payment gateways, analytics tools, social media APIs, or any service that improves your workflow.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We use modern technologies like React, Next.js, Node.js, Express, and WordPress for websites, and Flutter or React Native for mobile apps — depending on what suits your project best.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Simply reach out through our contact form or schedule a free consultation. We’ll discuss your goals, share ideas, and prepare a personalized plan to bring your vision to life.',
    },
  ]

  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidden dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>
            FAQ
          </p>
          <h2 className='text-white text-center max-w-3xl mx-auto text-4xl font-semibold'>
            Frequently Asked Questions
          </h2>

          <div className='w-full px-4 pt-16'>
            {faqs.map((item, index) => (
              <div
                key={index}
                className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
                <Disclosure as='div'>
  {({ open }) => (
    <div>
      <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden cursor-pointer'>
        <span className='text-black'>{item.question}</span>
        <div
          className={`h-5 w-5 transform transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}>
          <Icon icon='lucide:chevron-up' width='20' height='20' />
        </div>
      </DisclosureButton>
      <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
        <div className='lg:max-w-[70%]'>{item.answer}</div>
      </DisclosurePanel>
    </div>
  )}
</Disclosure>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
