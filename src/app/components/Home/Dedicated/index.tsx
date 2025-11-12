'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
            className='absolute left-0 top-7 hidden lg:block -z-10'
          />

          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center -mt-10'>
            <Image
              src='/images/dedicated/saqib.png'
              alt='team-collaboration'
              width={380}
              height={480}
              className='mx-auto md:mx-0'
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <h2 className='text-center lg:text-start text-2xl lg:text-3xl font-semibold leading-snug'>
              “Your digital success is our ultimate reward”
            </h2>

            <p className='text-base text-black/60 mt-4 text-center lg:text-start'>
              We transform your vision into digital reality through innovative solutions
              that drive growth and engagement. Our team combines cutting edge technology
              with creative strategy to build platforms that not only look exceptional
              but deliver measurable results. From concept to launch, we&apos;re committed
              to making your digital success our greatest achievement.
            </p>

            <div className='text-center lg:text-start mt-8'>
              <Link
                href='/contact'
                className='text-xl py-4 px-10 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode inline-block'>
                Let's Collaborate
              </Link>
            </div>
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
