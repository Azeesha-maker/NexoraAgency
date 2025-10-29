'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          {/* Left Content */}
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 text-center lg:text-left'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto lg:mx-0'>
              <p className='text-primary text-lg font-bold'>CREATIVE WEB AGENCY</p>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mt-6 leading-tight'>
              We Build Stunning & Scalable Websites
            </h1>
            <p className='text-gray-600 text-lg mt-4 max-w-xl mx-auto lg:mx-0'>
              From sleek business sites to powerful web apps — we turn your vision into a digital experience that stands out.
            </p>
            <Link href={'#'}>
              <button className='bg-primary text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-darkmode transition-all mt-10'>
                Get Started
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className='xl:col-span-7 lg:col-span-6 lg:block hidden'>
            <Image
              src='/images/hero/banner-image.png'
              alt='Creative web agency banner'
              width={600}
              height={600}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
