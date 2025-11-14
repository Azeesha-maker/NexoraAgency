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
    <div className='fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[999]'>
      {isVisible && (
        <div className='flex flex-col sm:flex-row items-center gap-3'>
          {/* ✅ WhatsApp Button - now visible on all screens */}
          <Link
            href='https://wa.me/923003523661' // <-- your WhatsApp number
            target='_blank'
            className='flex items-center justify-center bg-[var(--color-green-500)] hover:bg-[var(--color-green-600)] text-white rounded-full w-12 h-12 shadow-lg transition duration-300'
            aria-label='Chat on WhatsApp'>
            <Icon icon='mdi:whatsapp' width={28} height={28} />
          </Link>

          {/* ✅ Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label='scroll to top'
            className='back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-primary/60'>
            <span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white'></span>
          </button>
        </div>
      )}
    </div>
  )
}
