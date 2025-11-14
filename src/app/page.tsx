import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import GrowingSection from './components/Home/GrowingSection'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nexora Agency',
  description: 'Nexora Agency - Digital Solutions & Services',
  icons: {
    icon: '/images/bg.png',      // favicon in browser tab
    shortcut: '/images/bg.png',  // shortcut icon
    apple: '/images/bg.png',     // iOS devices
  },
  openGraph: {
    title: 'Nexora Agency',
    description: 'Nexora Agency - Digital Solutions & Services',
    url: 'https://yourdomain.com',
    siteName: 'Nexora Agency',
    images: [
      {
        url: '/images/bg.png',
        width: 800,
        height: 600,
        alt: 'Nexora Agency Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Agency',
    description: 'Nexora Agency - Digital Solutions & Services',
    images: ['/images/logo.png'],
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <GrowingSection />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
    </main>
  )
}
