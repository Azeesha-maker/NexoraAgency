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
  },
  {
    heading: 'What We Do',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'We specialize in web design, web app development, branding, and digital marketing  everything your brand needs to shine online and stand out from the crowd.',
    link: 'Explore Services',
  },
  {
    heading: 'Why Choose Us',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Our team blends creativity, technology, and strategy to deliver custom solutions that are fast, responsive, and result-driven  making your online presence unforgettable.',
    link: 'Get Started',
  },
]


// work-data
const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Modern Business Website for a Tech Startup',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'E-Commerce Platform with Secure Payment Gateway',
    imgSrc: '/images/featured/feat5.png',
  },
  {
    heading: 'Custom Portfolio Website for a Creative Designer',
    imgSrc: '/images/featured/feat6.png',
  },
  {
    heading: 'Mobile App UI/UX Design for a Food Delivery Service',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Real-Time Dashboard for Data Analytics Platform',
    imgSrc: '/images/featured/feat4.png',
  },
  {
    heading: 'Landing Page Optimization for Marketing Campaign',
    imgSrc: '/images/featured/feat7.png',
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
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'About Us', href: '#About' },
      { label: 'Team', href: '#Team' },
      { label: 'FAQ', href: '#FAQ' },
      { label: 'Blog', href: '#Blog' },
    ],
  },
  {
    section: 'Category',
    links: [
      { label: 'Design', href: '/' },
      { label: 'Mockup', href: '/' },
      { label: 'View all', href: '/' },
      { label: 'Log In', href: '/' },
    ],
  },
  {
    section: 'Pages',
    links: [
      { label: '404', href: '/' },
      { label: 'Instructions', href: '/' },
      { label: 'License', href: '/' },
    ],
  },
  {
    section: 'Others',
    links: [
      { label: 'Styleguide', href: '/' },
      { label: 'Changelog', href: '/' },
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
