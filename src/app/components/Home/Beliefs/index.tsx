'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

          {/* LEFT CARD */}
          <div className="bg-purple pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              VALUES
            </p>
            <h3 className='text-white mb-5 text-center sm:text-start'>
              Creativity <span className='text-white/60'>drives everything we do.</span>
            </h3>
            <p className='text-lg text-white/75 pt-2 mb-16 text-center sm:text-start'>
              We believe in honest communication, bold ideas, and building digital experiences that stand out.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='#'
                className='text-xl py-4 px-10 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                Get Started
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div>
            <div className="bg-[var(--color-light-teal)] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                MISSION
              </p>
              <h3 className='text-black mb-5 text-center sm:text-start'>
                <span className='text-primary'>We build</span> brands that grow online.
              </h3>
              <p className='pt-2 mb-16 text-center sm:text-start text-black/75 text-lg'>
                Our team blends design, strategy, and technology to help businesses achieve digital success.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='#'
                  className='text-xl py-4 px-10 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Beliefs
