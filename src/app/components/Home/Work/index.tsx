'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { workdata } from '@/app/types/workdata'
import WorkSkeleton from '../../Skeleton/Work'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1536, // xl
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280, // lg
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // md
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // sm
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Work = () => {
  // fetch work data
  const [work, setWork] = useState<workdata[]>([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='Team'
      className="relative dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center overflow-hidden mb-8'>
          <h3 className='text-black my-5 text-3xl md:text-4xl font-bold'>
            We work in several verticals.
          </h3>
        </div>
      </div>

      <div className='px-4 sm:px-6 lg:px-8'>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => <WorkSkeleton key={i} />)
            : work.map((items, i) => (
                <div key={i} className='px-2'>
                  <div className='bg-white dark:bg-darkHeroBg m-2 py-8 md:py-10 my-6 md:my-8 text-center shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[280px] flex flex-col justify-center'>
                    
                    {/* Image Container */}
                    <div className='relative mx-auto w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4'>
                      <Image
                        src={items.imgSrc}
                        alt={items.name}
                        fill
                        className='rounded-full object-cover'
                      />
                      
                      {/* LinkedIn Icon */}
                      <div className='absolute right-0 bottom-0 bg-white shadow-lg p-2 md:p-2 rounded-full border'>
                        <Image
                          src={'/images/wework/linkedin.svg'}
                          alt='linkedin'
                          width={16}
                          height={16}
                          className='w-4 h-4 md:w-5 md:h-5'
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className='px-4'>
                      <h6 className='text-base md:text-lg lg:text-xl text-black dark:text-white font-bold leading-tight mb-2'>
                        {items.name}
                      </h6>
                      <p className='text-xs md:text-sm dark:text-white font-normal text-gray-600 dark:text-gray-300 leading-tight'>
                        {items.profession}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Work