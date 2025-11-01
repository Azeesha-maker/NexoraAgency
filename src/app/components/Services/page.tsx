'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';

export default function ServicesPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const router = useRouter();

  const services = [
    {
      id: 7,
      title: 'Final Year Project (FYP) Development for Students',
      description:
        'We help IT, CS, and SE students build complete Final Year Projects with documentation, database, and free deployment — at student-friendly prices.',
      features: [
        'Custom project ideas',
        'Full development (Frontend + Backend)',
        'Database & documentation support',
        'Free deployment guidance',
      ],
      tag: '50% Off for Students',
      cta: 'Build My FYP Now',
      isFYP: true,
    },
    {
      id: 1,
      title: 'Web Development',
      description:
        'Fast, scalable, SEO-friendly websites using React, Next.js, and Node.js.',
      features: [
        'Responsive & mobile-first design',
        'Performance & SEO optimized',
        'Custom CMS & dashboard',
      ],
      cta: 'Build My Website',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description:
        'Native-like Android & iOS apps with smooth UX and high performance.',
      features: [
        'React Native / Flutter',
        'API & cloud integration',
        'App store deployment',
      ],
      cta: 'Start My App',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description:
        'User-centered designs that boost engagement and brand identity.',
      features: [
        'Wireframing & prototyping',
        'Modern design systems',
        'User journey mapping',
      ],
      cta: 'Design My Interface',
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description:
        'Keep your app or site secure, fast, and always up to date.',
      features: [
        '24/7 monitoring',
        'Monthly updates & backups',
        'Bug fixes & support',
      ],
      cta: 'Get Support',
    },
    {
      id: 5,
      title: 'Progressive Web App (PWA)',
      description:
        'Web apps that work offline, installable, and fast on any device.',
      features: [
        'Offline mode',
        'Push notifications',
        'Home-screen install',
      ],
      cta: 'Launch My PWA',
    },
    {
      id: 6,
      title: 'Website & App Modernization',
      description:
        'Upgrade legacy systems with modern tech, speed, and design.',
      features: [
        'Migrate to Next.js',
        'Speed & SEO boost',
        'Responsive redesign',
      ],
      cta: 'Modernize My Site',
    },
  ];

  const faqs = [
    {
      question: 'How long does a project take?',
      answer: '2–6 weeks depending on scope and features.',
    },
    {
      question: 'Do you offer maintenance?',
      answer: 'Yes, monthly packages with updates and support.',
    },
    {
      question: 'Can I get a custom quote?',
      answer: 'Yes! Contact us with your idea.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Khan',
      role: 'Startup Founder',
      feedback:
        'They delivered our full brand — website, app, and design — on time and beyond expectations.',
    },
    {
      name: 'Ali Raza',
      role: 'Marketing Lead',
      feedback:
        'Site speed doubled. Google ranking improved. Support is excellent!',
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-[var(--color-gray-50)] to-white py-20">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Hero Title */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-blue-600)] uppercase tracking-widest text-sm font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-800)]">
            Solutions That Scale With You
          </h2>
          <p className="mt-4 text-[var(--color-gray-600)] max-w-3xl mx-auto text-lg">
            From idea to launch — fast, reliable, and built to grow.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden
                ${service.isFYP ? 'fyp-card' : 'bg-white border border-[var(--color-gray-100)]'}`}
            >

              {/* FYP Animated Border */}
              {service.isFYP && (
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blue-600)] to-[var(--color-blue-800)] opacity-95"></div>
                  <div className="absolute inset-0 border-4 border-transparent rounded-3xl animate-spin-slow-blue"></div>
                </div>
              )}

              {/* Tag Badge */}
              {service.tag && (
                <span className="absolute top-1 right-4 bg-white text-[var(--color-blue-600)] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse z-10">
                  {service.tag}
                </span>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                <h3
                  className={`text-2xl font-bold mb-3 transition-transform duration-300 group-hover:scale-105
                    ${service.isFYP ? 'text-white' : 'text-[var(--color-gray-900)]'}`}
                >
                  {service.title}
                </h3>

                <p className={`mb-6 text-sm leading-relaxed ${service.isFYP ? 'text-[var(--color-blue-100)]' : 'text-[var(--color-gray-600)]'}`}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${service.isFYP ? 'text-[var(--color-blue-100)]' : 'text-[var(--color-gray-700)]'}`}>
                      <Icon icon="tabler:check" className="text-[var(--color-blue-500)]" width="18" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <button
                    onClick={() => router.push('/contact')}
                    className={`w-full sm:w-auto px-5 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md cursor-pointer
                      ${service.isFYP
                        ? 'bg-white text-[var(--color-blue-700)] hover:bg-[var(--color-gray-50)]'
                        : 'bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-700)] text-white hover:from-[var(--color-blue-700)] hover:to-[var(--color-blue-800)]'
                      }`}
                  >
                    {service.cta}
                  </button>

                  <Link
                    href="/contact"
                    className={`flex items-center gap-1 text-sm font-medium transition-all hover:gap-2
                      ${service.isFYP ? 'text-[var(--color-blue-100)] hover:text-white' : 'text-[var(--color-blue-600)] hover:text-[var(--color-blue-800)]'}`}
                  >
                    Click here
                    <Icon icon="tabler:chevron-right" width="18" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-800)]">
            What Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-[var(--color-blue-50)]">
                <Icon icon="tabler:quote" className="text-[var(--color-blue-600)] mb-4" width="32" />
                <p className="italic text-[var(--color-gray-700)] mb-6 leading-relaxed">"{t.feedback}"</p>
                <h5 className="font-bold text-lg">{t.name}</h5>
                <p className="text-[var(--color-blue-600)] text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-800)]">
            FAQs
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[var(--color-gray-100)] overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-lg text-[var(--color-gray-800)]"
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  aria-expanded={activeFAQ === i}
                >
                  {faq.question}
                  <Icon
                    icon={activeFAQ === i ? 'tabler:chevron-up' : 'tabler:chevron-down'}
                    width="24"
                    className="text-[var(--color-blue-600)] transition-transform"
                  />
                </button>
                {activeFAQ === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[var(--color-gray-600)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}