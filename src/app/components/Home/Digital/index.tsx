'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-32 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24'>
              <p className='text-base sm:text-lg font-normal text-white mb-4 tracking-widest text-center lg:text-start uppercase mt-5'>
                Who we are
              </p>
              <h2 className='text-white mb-8 leading-tight text-center lg:text-start text-2xl sm:text-3xl lg:text-5xl font-semibold lg:w-full'>
                Turning visions into powerful digital realities.
              </h2>
              <p className='text-white/80 text-center lg:text-start mb-8 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0'>
                 Our team combines creativity, technology, and strategy to help brands shine online.
              </p>
              <div className='text-center lg:text-start'>
                <Link
                  href='/services'
                  className='text-lg sm:text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-all'>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute top-11 -right-20 xl:block hidden animate-slideIn'>
        <Image
        src='/images/digital/turnIdea.png'
        alt='idea'
        width={815}
        height={691}
        priority={true}
       />
        </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
