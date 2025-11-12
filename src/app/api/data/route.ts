 import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Team', href: '#Team' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Blog', href: '#Blog' },
  { label: 'Docs', href: '/documentation' },
]

// about data
// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Who We Are',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'We are a modern web agency passionate about building creative and functional digital experiences. Our mission is to help businesses grow through clean design, strong development, and smart strategy.',
    link: 'Discover More',
     href: '/projects',
  },
  {
    heading: 'What We Do',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'We specialize in web design, web app development, branding, and digital marketing  everything your brand needs to shine online and stand out from the crowd.',
    link: 'Explore Services',
    href: '/services'
  },
  {
    heading: 'Why Choose Us',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Our team blends creativity, technology, and strategy to deliver custom solutions that are fast, responsive, and result-driven  making your online presence unforgettable.',
    link: 'Get Started',
    href: '/contact',
  },
]


// work-data
const WorkData: workdata[] = [
  {
    profession: 'Full Stack developer',
    name: 'Azeesha Ali',
    imgSrc: '/images/team/Azeesha.png',
  },
  {
    profession: 'UI/UX Designer & SEO Specialist',
    name: 'Anzalna Ansari',
    imgSrc: '/images/team/Anzalna.png',
  },
  {
    profession: 'Full Stack & AI Developer',
    name: 'Aniqa Khan',
    imgSrc: '/images/team/Aniqa.png',
  },
  {
    profession: 'Full Stack Developer',
    name: 'Simra Malik',
    imgSrc: '/images/team/Simra.png',
  },
  {
    profession: 'Full Stack Developer',
    name: 'Muhammad Saqib',
    imgSrc: '/images/team/Saqib.png',
  },
  {
    profession: 'Full Stack Developer',
    name: 'Muhammad Mursaleen',
    imgSrc: '/images/team/Mursaleen.png',
  },
];

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Modern Business Website for a Tech Startup',
    imgSrc: '/images/featured/img1.jpeg',
  },
  {
    heading: 'E-Commerce Platform with Secure Payment Gateway',
    imgSrc: '/images/featured/img2.jpeg',
  },
  {
    heading: 'Custom Portfolio Website for a Creative Designer',
    imgSrc: '/images/featured/img3.jpeg',
  },
  {
    heading: 'Mobile App UI/UX Design for a Food Delivery Service',
    imgSrc: '/images/featured/img4.jpeg',
  },
  {
    heading: 'Real-Time Dashboard for Data Analytics Platform',
    imgSrc: '/images/featured/img5.jpeg',
  },
  {
    heading: 'Landing Page Optimization for Marketing Campaign',
    imgSrc: '/images/featured/img6.jpeg',
  },
]


// plans data

const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 199,
      yearly: 200,
    },
    user: 'per project',
    features: {
      pages: 'Up to 5 Pages Website',
      design: 'Modern & Responsive Design',
      hosting: '1 Year Free Domain & Hosting Setup',
      seo: 'Basic SEO Optimization',
      support: 'Email Support',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 399,
      yearly: 300,
    },
    user: 'per project',
    features: {
      pages: 'Up to 10 Pages Website',
      design: 'Custom Design with Animations',
      hosting: 'Free Domain & Hosting Setup',
      seo: 'Advanced SEO + Google Analytics',
      support: '24/7 VIP Support',
    },
  },
  {
    heading: 'Agency',
    price: {
      monthly: 699,
      yearly: 500,
    },
    user: 'per project',
    features: {
      pages: 'Unlimited Pages + eCommerce Support',
      design: 'Custom UI/UX + Figma to Code',
      hosting: 'Premium Cloud Hosting + SSL',
      seo: 'Full SEO Strategy + Speed Optimization',
      support: 'Dedicated Project Manager',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Sarah Mitchell',
    profession: 'Founder, Bloom Digital',
    comment:
      'The team completely transformed our outdated website into a sleek, high-performing platform. Their attention to detail and ability to understand our brand vision was outstanding. Our conversion rate has doubled since launch!',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'James Carter',
    profession: 'Marketing Director, NexaTech',
    comment:
      'We needed a fast, modern web app for our SaaS product — and they delivered beyond expectations. Clean code, responsive UI, and an incredibly smooth user experience. Highly recommended!',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    profession: 'Owner, Urban Bakes Café',
    comment:
      'From the first call to the final handover, their process was seamless. The new website has given our bakery a real digital presence — customers love it, and it’s easy to manage too.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
 
]


const ArticlesData: articles[] = [
  {
    time: '4 min',
    heading: 'Redesigning Brand',
    heading2: 'Our Creative Process Unveiled',
    name: 'Published by CreativeWave Agency',
    date: 'November 9, 2025',
    imgSrc: '/images/articles/article1.jpeg',
  },
  {
    time: '5 min',
    heading: 'Website Launch Success',
    heading2: 'How We Built a High-Converting Site',
    name: 'Written by Alex & Sarah - UI/UX Designers',
    date: 'November 8, 2025',
    imgSrc: '/images/articles/article2.jpeg',
  },
  {
    time: '3 min',
    heading: 'Team Collaboration',
    heading2: 'Creative Meetings That Spark Ideas',
    name: 'Published by CreativeWave Agency',
    date: 'November 7, 2025',
    imgSrc: '/images/articles/article3.jpeg',
  },
  {
    time: '4 min',
    heading: 'Crafting Modern UI',
    heading2: 'From Concept to Pixel Perfect',
    name: 'Written by Mia & John - UI Designers',
    date: 'November 6, 2025',
    imgSrc: '/images/articles/article4.jpeg',
  },
  {
    time: '6 min',
    heading: 'Boosting Brand Visit',
    heading2: 'Digital Marketing Strategies That Work',
    name: 'Published by CreativeWave Agency',
    date: 'November 5, 2025',
    imgSrc: '/images/articles/article5.jpeg',
  },
  {
    time: '5 min',
    heading: 'Product Launch',
    heading2: 'How Our Team Delivered Excellence',
    name: 'Written by Sarah & Alex - Project Managers',
    date: 'November 4, 2025',
    imgSrc: '/images/articles/article6.jpeg',
  },
];




// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Web Design', href: '/' },
      { label: 'Web Development', href: '/' },
      { label: 'Branding & UI/UX', href: '/' },
      { label: 'SEO & Marketing', href: '/' },
    ],
  },
  {
    section: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '/' },
      { label: 'Client Reviews', href: '/' },
      { label: 'FAQs', href: '#faq' },
    ],
  },
  {
    section: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms & Conditions', href: '/' },
      { label: 'License', href: '/' },
    ],
  },
]


export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}