'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true)
      else setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-[999]'>
      {isVisible && (
        <div className='flex items-center gap-3'>
          {/* ✅ WhatsApp Button */}
          <Link
            href='https://wa.me/923236989128' // <-- replace with your WhatsApp number (format: 92 + number)
            target='_blank'
            className='hidden lg:flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 shadow-lg transition duration-300'
            aria-label='Chat on WhatsApp'>
            <Icon icon='mdi:whatsapp' width={26} height={26} />
          </Link>

          {/* ✅ Scroll to Top Button */}
          <div
            onClick={scrollToTop}
            aria-label='scroll to top'
            className='back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-primary/60'>
            <span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white'></span>
          </div>
        </div>
      )}
    </div>
  )
}
