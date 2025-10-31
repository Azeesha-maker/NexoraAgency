'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import './styles.css'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'We create fast, scalable, and SEO-friendly websites using modern frameworks like React, Next.js, and Node.js.',
    features: [
      'Responsive & mobile-friendly design',
      'Optimized for performance and SEO',
      'Custom dashboard & CMS integration',
    ],
    link: '/services/web-development',
    cta: 'Build My Website',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      'We design and develop Android and iOS apps that deliver smooth user experiences and high performance.',
    features: [
      'Cross-platform apps (React Native, Flutter)',
      'API integration and cloud sync',
      'App store optimization and support',
    ],
    link: '/services/mobile-apps',
    cta: 'Start My App Project',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'Our UI/UX team crafts user-centered designs that boost engagement, retention, and brand identity.',
    features: [
      'Wireframing & Prototyping',
      'Modern & intuitive design systems',
      'User journey optimization',
    ],
    link: '/services/ui-ux-design',
    cta: 'Design My Interface',
  },
  {
    id: 4,
    title: 'Maintenance & Support',
    description:
      'We ensure your digital products run smoothly with continuous updates, security monitoring, and backups.',
    features: [
      '24/7 technical support',
      'Regular updates & security checks',
      'Backup and data recovery',
    ],
    link: '/services/maintenance',
    cta: 'Get Support',
  },
  {
  id: 5,
  title: 'Progressive Web App (PWA) Development',
  description:
    'We build web apps that act like native apps — installable, offline-ready, and fast on any device.',
  features: [
    'Offline mode & caching',
    'Push notifications',
    'Installable home-screen app',
    'Cross-device responsiveness',
  ],
  link: '/services/pwa-development',
  cta: 'Launch My PWA',
},
 {
    id: 6,
    title: 'Website & App Modernization',
    description:
      'Upgrade outdated systems with new frameworks, improved speed, security, and modern UI/UX.',
    features: [
      'Migration to React/Next.js',
      'Speed & SEO optimization',
      'Responsive redesign',
      'Security patches & maintenance',
    ],
    link: '/services/modernization',
    cta: 'Modernize My Site',
  },
    {
    id: 7,
    title: 'Final Year Project (FYP) Development for Students 🎓',
    description:
      'We help IT, CS, and SE students develop complete Final Year Projects with proper documentation, database setup, and deployment — at student-friendly prices.',
    features: [
      'Custom project ideas',
      'Full development (Frontend + Backend)',
      'Database & documentation support',
      'Free deployment guidance',
    ],
    tag: '50% Off for Students',
    link: '/services/fyp-development',
    cta: 'Build My FYP Now',
  },
]

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most projects take between 2–6 weeks depending on complexity, features, and design revisions.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes, we provide monthly maintenance packages to keep your site or app secure and up to date.',
  },
  {
    question: 'Can I request a custom quote?',
    answer:
      'Absolutely! Use our contact form to describe your project and we’ll send you a tailored proposal.',
  },
]

const testimonials = [
  {
    name: 'Sarah Khan',
    role: 'Startup Founder',
    feedback:
      'They built our entire brand presence from website to mobile app — everything was on time, clean, and perfectly matched our vision.',
  },
  {
    name: 'Ali Raza',
    role: 'Marketing Manager',
    feedback:
      'Our company site loads twice as fast now and ranks higher on Google. The team’s support and communication are top-notch!',
  },
]

const ServicesPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  return (
    <section id='services' className='bg-white text-black py-16'>
      <div className='container mx-auto max-w-7xl px-4 pt-20'>
        {/* Title */}
        <div className='text-center mb-12'>
          <p className='text-primary uppercase tracking-widest text-sm sm:text-base'>
            Our Services
          </p>
          <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>
            Web & App Solutions That Scale With You
          </h2>
          <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
            From concept to launch, we deliver digital products that look great,
            perform fast, and drive business growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service) => (
            <div
  key={service.id}
  className={`group bg-gray-50 hover:bg-darkmode transition-all duration-300 p-8 rounded-3xl shadow-md flex flex-col justify-between hover:shadow-xl ${
    service.id === 7 ? 'fyp-card' : ''
  }`}
>

              <div>
                <h3 className='text-xl font-semibold mb-3 group-hover:text-white transition'>
                  {service.title}
                </h3>
                <p className='mb-5 text-gray-700 group-hover:text-gray-200 transition'>
                  {service.description}
                </p>
                <ul className='mb-5 list-disc pl-5 space-y-1'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='text-gray-700 group-hover:text-gray-300 transition'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-auto flex justify-between items-center'>
                <Link
                  href={service.link}
                  className='text-primary font-semibold hover:text-accent transition flex items-center group-hover:text-white linkA'
                >
                  Learn More
                  <Icon
                    icon='tabler:chevron-right'
                    className='ml-1'
                    width='18'
                    height='18'
                  />
                </Link>
                <button className='bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition'>
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className='mt-20'>
          <h3 className='text-center text-2xl font-semibold mb-8'>
            What Our Clients Say
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className='bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition'
              >
                <p className='italic mb-4 text-gray-700'>
                  “{t.feedback}”
                </p>
                <h5 className='font-semibold text-lg'>{t.name}</h5>
                <p className='text-primary text-sm'>{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-20'>
          <h3 className='text-center text-2xl font-semibold mb-8'>
            Frequently Asked Questions
          </h3>
          <div className='max-w-3xl mx-auto'>
            {faqs.map((faq, i) => (
              <div key={i} className='border-b py-4'>
                <button
                  className='flex justify-between w-full text-left'
                  onClick={() =>
                    setActiveFAQ(activeFAQ === i ? null : i)
                  }
                >
                  <span className='font-semibold text-lg'>
                    {faq.question}
                  </span>
                  <Icon
                    icon={
                      activeFAQ === i
                        ? 'tabler:chevron-up'
                        : 'tabler:chevron-down'
                    }
                    width='22'
                    height='22'
                  />
                </button>
                {activeFAQ === i && (
                  <p className='mt-3 text-gray-600'>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='mt-24 text-center bg-gray-50 p-10 rounded-3xl shadow-inner'>
          <h3 className='text-2xl font-semibold mb-4'>
            Have a project in mind?
          </h3>
          <p className='text-gray-600 mb-6'>
            Let’s discuss your vision and turn it into a digital reality.
          </p>
          <Link
            href='/contact'
            className='bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition'
          >
            Contact Us Now
          </Link>
          <div className='mt-6 text-sm text-gray-600'>
             +92 300 1234567 |  contact@webappagency.com
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
