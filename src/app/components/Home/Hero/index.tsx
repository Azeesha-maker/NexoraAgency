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
    <section className='relative overflow-hidden z-1 mt-0'>
      {/* 🔹 Continuous Scrolling Line */}
      <div className="sticky top-[18px] z-30 bg-primary text-white py-2 overflow-hidden whitespace-nowrap shadow-md ">
  <div className="animate-marquee text-sm md:text-base font-medium flex gap-16 px-4">
    <span>
      Empowering brands with next-level web solutions  trusted by startups,
      students, and growing businesses  | 🎉 Get 20% OFF on all projects till 1st December 
    </span>
    <span>
     Empowering brands with next-level web solutions  trusted by startups,
      students, and growing businesses | 🎉 Get 20% OFF on all projects till 1st December 
    </span>
    <span>
     Empowering brands with next-level web solutions  trusted by startups,
      students, and growing businesses | 🎉 Get 20% OFF on all projects till 1st December 
    </span>
  </div>
</div>


      {/* 🔹 Hero Section */}
      <div className='container mx-auto pt-16 max-w-7xl px-4 '>
        <div className='grid grid-cols-12 justify-center items-center mt-0'>
          {/* Left Content */}
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 text-center lg:text-left'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto lg:mx-0'>
              <p className='text-primary text-lg font-bold'>CREATIVE WEB AGENCY</p>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mt-6 leading-tight'>
              We Build Stunning & Scalable Websites
            </h1>
            <p className='text-gray-600 text-lg mt-4 max-w-xl mx-auto lg:mx-0'>
              From sleek business sites to powerful web apps  we turn your vision into a digital experience that stands out.
            </p>
            <Link href={'/services'}>
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

      {/* 🔹 Smooth Marquee Animation CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
