'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 items-center'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />

          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src='/images/dedicated/man.jpeg'
              alt='team-collaboration'
              width={380}
              height={480}
              className='mx-auto md:mx-0'
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <h2 className='text-center lg:text-start text-2xl lg:text-3xl font-semibold leading-snug'>
              “We craft digital experiences that grow your brand.”
            </h2>

            <p className='text-base text-black/60 mt-4 text-center lg:text-start'>
              From design to deployment, our team brings ideas to life through
              creativity, code, and strategy.
            </p>

            <h5 className='mt-8 text-center lg:text-start font-medium text-black'>
              Muhammad Saqib , CEO
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dedicated
