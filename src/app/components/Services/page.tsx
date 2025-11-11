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
      description: 'We help IT, CS, and SE students build complete Final Year Projects with documentation, database, and free deployment — at student-friendly prices.',
      features: ['Custom project ideas', 'Full development (Frontend + Backend)', 'Database & documentation support', 'Free deployment guidance'],
      tag: '50% Off for Students',
      cta: 'Build My FYP Now',
      icon: 'tabler:school',
    },
    {
      id: 1,
      title: 'Web Development',
      description: 'Fast, scalable, SEO-friendly websites using React, Next.js, and Node.js.',
      features: ['Responsive & mobile-first design', 'Performance & SEO optimized', 'Custom CMS & dashboard', 'E-commerce integration'],
      cta: 'Build My Website',
      icon: 'tabler:world',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native-like Android & iOS apps with smooth UX and high performance.',
      features: ['React Native / Flutter', 'API & cloud integration', 'App store deployment', 'Offline functionality'],
      cta: 'Start My App',
      icon: 'tabler:device-mobile',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered designs that boost engagement and brand identity.',
      features: ['Wireframing & prototyping', 'Modern design systems', 'User journey mapping', 'Interactive prototypes'],
      cta: 'Design My Interface',
      icon: 'tabler:brush',
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description: 'Keep your app or site secure, fast, and always up to date.',
      features: ['24/7 monitoring', 'Monthly updates & backups', 'Bug fixes & support', 'Security patches'],
      cta: 'Get Support',
      icon: 'tabler:settings',
    },
    {
      id: 5,
      title: 'Progressive Web App (PWA)',
      description: 'Web apps that work offline, installable, and fast on any device.',
      features: ['Offline mode', 'Push notifications', 'Home-screen install', 'App-like experience'],
      cta: 'Launch My PWA',
      icon: 'tabler:app-window',
    },
    {
      id: 6,
      title: 'Website & App Modernization',
      description: 'Upgrade legacy systems with modern tech, speed, and design.',
      features: ['Migrate to Next.js', 'Speed & SEO boost', 'Responsive redesign', 'API integration'],
      cta: 'Modernize My Site',
      icon: 'tabler:refresh',
    },
    {
      id: 8,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payments and inventory management.',
      features: ['Shopping cart & checkout', 'Payment gateway integration', 'Inventory management', 'Admin dashboard'],
      cta: 'Build My Store',
      icon: 'tabler:shopping-cart',
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with a new project?',
      answer: 'You can contact us via the form or book a free consultation. We\'ll discuss your goals, budget, and timeline.'
    },
    {
      question: 'What if I already have a website - can you redesign or improve it?',
      answer: 'Absolutely! We specialize in redesigns that modernize your current brand.'
    },
    {
      question: 'Do you also handle SEO optimization?',
      answer: 'Yes, we include on-page SEO best practices and can provide advanced plans if needed.'
    },
    {
      question: 'Can you integrate third-party tools or APIs?',
      answer: 'Definitely! We can integrate payment gateways, forms, analytics, or any specific API you require.'
    },
    {
      question: 'How much does a project cost?',
      answer: 'It depends on scope and features. We provide a detailed quote after the initial consultation.'
    },
    {
      question: 'Can I cancel or pause a project midway?',
      answer: 'We allow flexible terms, but certain stages may have non-refundable costs once work begins.'
    },
    {
      question: 'Why should I choose your agency service?',
      answer: 'Because we focus on creativity, performance, and transparent communication.'
    },
    {
      question: 'Can you handle urgent projects or tight deadlines?',
      answer: 'Yes, we offer express service for time-sensitive projects.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: 'tabler:briefcase' },
    { number: '80+', label: 'Happy Clients', icon: 'tabler:users' },
    { number: '98%', label: 'Client Satisfaction', icon: 'tabler:heart' },
    { number: '24/7', label: 'Support Available', icon: 'tabler:headset' }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 mt-10">
            <Icon icon="tabler:star" width="16" />
            Trusted by 50+ Companies & Students
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mt-3 text-black leading-tight">
            Solutions That Scale With You
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            From idea to launch - fast, reliable, and built to grow. We transform your vision into 
            high-performance digital experiences.
          </p>
          
          {/* Stats - Improved Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon icon={stat.icon} width="28" className="text-white" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards Grid - ALL CARDS WITH SAME BLUE BACKGROUND */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card relative group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-blue-200 flex flex-col h-full min-h-[500px] bg-primary"
            >

              {/* Blue Background Pattern - FOR ALL CARDS */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px'
                }}
              ></div>

              {/* Tag Badge - Only for FYP */}
              {service.tag && (
                <span className="absolute top-3 right-3 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {service.tag}
                </span>
              )}

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Top Content - Flexible */}
                <div className="flex-1">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-2xl mb-4 bg-white/20 text-white border border-white/30">
                    <Icon icon={service.icon} width="24" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-blue-100">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                        <Icon 
                          icon="tabler:check" 
                          className="text-white" 
                          width="16" 
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons - Fixed at Bottom */}
                <div className="mt-auto pt-4 border-t border-white/30">
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => router.push('/contact')}
                      className="w-full px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-md cursor-pointer text-center bg-white text-primary hover:bg-gray-50"
                    >
                      {service.cta}
                    </button>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 text-sm font-medium transition-all py-2 text-blue-100 hover:text-white"
                    >
                      Get Free Consultation
                      <Icon icon="tabler:arrow-right" width="16" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="relative rounded-3xl p-8 sm:p-12 text-white mb-20 overflow-hidden bg-primary">
          
          {/* Circuit Board Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
          ></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Development Process</h2>
              <p className="text-blue-100 text-lg">Simple, transparent, and collaborative</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: 'tabler:message', title: 'Consultation', desc: 'We discuss your requirements and goals' },
                { icon: 'tabler:palette', title: 'Design', desc: 'Create wireframes and prototypes' },
                { icon: 'tabler:code', title: 'Development', desc: 'Build with modern technologies' },
                { icon: 'tabler:rocket', title: 'Launch', desc: 'Deploy and provide support' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 border border-white/30">
                    <Icon icon={step.icon} width="28" />
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
                    <h3 className="font-bold text-lg mb-2 text-white">{step.title}</h3>
                    <p className="text-blue-100 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Get answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-sm hover:shadow-md transition-all border border-primary/20 overflow-hidden group"
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-semibold text-gray-800 hover:text-primary transition-colors group-hover:bg-white/50"
                >
                  <span className="flex items-center gap-3">
                    <Icon 
                      icon="tabler:help" 
                      width="20" 
                      className="text-primary" 
                    />
                    {faq.question}
                  </span>
                  <Icon
                    icon={activeFAQ === i ? 'tabler:chevron-up' : 'tabler:chevron-down'}
                    width="20"
                    className="text-primary transition-transform"
                  />
                </button>
                {activeFAQ === i && (
                  <div className="px-6 pb-6 bg-white/30">
                    <div className="flex gap-3">
                      <Icon icon="tabler:info-circle" width="20" className="text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-primary">
          
          {/* Binary Code Pattern */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          ></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and build something amazing together. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 cursor-pointer hover:bg-gray-50 border-2 border-white"
              >
                Start Your Project Now
              </button>
              <button
                onClick={() => router.push('/projects')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all cursor-pointer backdrop-blur-sm"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}