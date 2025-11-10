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
            Take your business to the next level
          </h2>
          <p className='text-black/60 dark:text-white/60 text-base font-normal max-w-3xl mx-auto'>
            Let&apos;s build something remarkable together. Whether you&apaos;re looking to
            launch your first website, create a mobile app, or rebrand your
            business our team is here to make it happen. Join our community of
            forward-thinking brands growing with our digital solutions.
          </p>
        </div>

       <div className='mx-auto max-w-4xl pt-10 flex justify-center items-center'>
  <div className='sm:flex items-center justify-center mx-5 p-5 sm:p-0 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-md sm:rounded-full shadow-md'>
    <Link
      href='/contact'
      className='w-full sm:w-auto inline-block text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300'>
      Join Now
    </Link>
  </div>
</div>


        <div className='text-center mt-8 text-black/60 dark:text-white/60 text-sm'>
          <p>
            Already have a project in mind?{' '}
            <Link
              href='/contact'
              className='text-primary hover:underline font-medium'>
              Let&apos;s talk about it →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Join
