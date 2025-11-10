'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-10 sm:p-12 bg-grey rounded-3xl relative'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20 hidden sm:block'
          />

          {/* Section Title */}
          <p className='text-center text-primary text-base sm:text-lg tracking-widest uppercase mt-6'>
            about us
          </p>
          <h2 className='text-center pb-8 sm:pb-12 text-2xl sm:text-3xl font-semibold'>
            Know more about us.
          </h2>

          {/* Responsive Grid */}
          <div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-8'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                  className='hover:bg-darkmode bg-white rounded-3xl p-6 sm:p-8 
                   shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] 
                   hover:scale-[1.03] group w-[90%] sm:w-[95%] mx-auto transition-all duration-500 ease-in-out'>
                    <h5 className='group-hover:text-white mb-4 text-lg sm:text-xl font-semibold text-center sm:text-left'>
                      {item.heading}
                    </h5>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={100}
                      height={100}
                      className='mb-5 mx-auto sm:mx-0'
                    />
                    <p className='text-sm sm:text-base font-normal text-black group-hover:text-white mb-5 text-center sm:text-left leading-relaxed'>
                      {item.paragraph}
                    </p>
                    <Link
                      href={item.href}
                      className='text-[15px] sm:text-[16px] font-semibold text-black group-hover:text-white flex items-center justify-center sm:justify-start'>
                      {item.link}
                      <Icon
                        icon='tabler:chevron-right'
                        width='18'
                        height='18'
                        className='ml-1'
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
