'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section className='overflow-hidden bg-joinus py-24'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Join Us
          </p>
          <h2 className='my-6 text-4xl md:text-5xl font-semibold leading-tight text-black dark:text-white'>
            Take your business to the next level 🚀
          </h2>
          <p className='text-black/60 dark:text-white/60 text-base font-normal max-w-3xl mx-auto'>
            Let’s build something remarkable together. Whether you’re looking to
            launch your first website, create a mobile app, or rebrand your
            business — our team is here to make it happen. Join our community of
            forward-thinking brands growing with our digital solutions.
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-10'>
          <div className='sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-white/80 dark:bg-white/10 backdrop-blur-md sm:rounded-full shadow-md'>
            <div className='flex-1'>
              <input
                type='text'
                className='my-4 py-4 sm:pl-6 lg:text-xl text-black dark:text-white sm:rounded-full bg-transparent pl-1 focus:outline-hidden placeholder:text-black/40 dark:placeholder:text-white/50'
                placeholder='Your name'
                autoComplete='off'
              />
            </div>
            <div className='flex-1 border-t sm:border-t-0 sm:border-l border-gray-300/50 dark:border-white/10'>
              <input
                type='email'
                className='my-4 py-4 sm:pl-6 lg:text-xl text-black dark:text-white sm:rounded-full bg-transparent pl-1 focus:outline-hidden placeholder:text-black/40 dark:placeholder:text-white/50'
                placeholder='Your email'
                autoComplete='off'
              />
            </div>
            <div className='sm:mr-3 text-center'>
              <Link
                href='#contact'
                className='w-full sm:w-auto inline-block text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300'>
                Join Now
              </Link>
            </div>
          </div>
        </div>

        <div className='text-center mt-8 text-black/60 dark:text-white/60 text-sm'>
          <p>
            Already have a project in mind?{' '}
            <Link
              href='#contact'
              className='text-primary hover:underline font-medium'>
              Let’s talk about it →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Join
