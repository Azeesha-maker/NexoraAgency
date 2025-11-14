'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setSticky(true)
      else setSticky(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on route change
  useEffect(() => {
    setNavbarOpen(false)
  }, [pathname])

  // Close menu on outside click (uses overlay + ref)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [navbarOpen])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showVideo) {
          setShowVideo(false)
        } else {
          setNavbarOpen(false)
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [showVideo])

  // Lock body scroll when menu open or video open
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (navbarOpen || showVideo) {
      document.documentElement.classList.add('overflow-hidden')
      document.body.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.documentElement.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-hidden')
    }
  }, [navbarOpen, showVideo])

  // Video close function
  const closeVideo = () => {
    setShowVideo(false)
    // Pause video when closing
    const video = document.querySelector('video') as HTMLVideoElement
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <>
      <header
        aria-label="site header"
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          sticky ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        } z-40`}
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className={`duration-300 ${sticky ? 'py-1' : 'py-2 sm:py-3'}`}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-[var(--color-gray-700)]">
            <Link href="/services" className="hover:text-primary transition">Services</Link>
            <Link href="/projects" className="hover:text-primary transition">Projects</Link>
            <Link href="/team" className="hover:text-primary transition">Team</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-darkmode transition flex items-center gap-2"
            >
              <Icon icon="mdi:play-circle" className="text-lg" />
              Watch Our Story
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavbarOpen(prev => !prev)}
            className="lg:hidden text-2xl text-darkmode focus:outline-none"
            type="button"
          >
            <Icon icon={navbarOpen ? 'mdi:close' : 'mdi:menu'} />
          </button>
        </div>
      </header>

      {/* Overlay (dims page) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${
          navbarOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 z-0'
        }`}
        onClick={() => setNavbarOpen(false)}
        aria-hidden={!navbarOpen}
      />

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[70%] transform transition-transform duration-300 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-60 bg-darkmode text-white shadow-xl rounded-l-2xl`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6 pt-20">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setNavbarOpen(false)}
              className="text-2xl focus:outline-none"
            >
              <Icon icon="mdi:close" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 mt-8 text-lg">
            <Link href="/services" onClick={() => setNavbarOpen(false)} className="hover:text-primary transition">Services</Link>
            <Link href="/projects" onClick={() => setNavbarOpen(false)} className="hover:text-primary transition">Projects</Link>
            <Link href="/team" onClick={() => setNavbarOpen(false)} className="hover:text-primary transition">Team</Link>
            <Link href="/contact" onClick={() => setNavbarOpen(false)} className="hover:text-primary transition">Contact</Link>
          </nav>

          <button
            onClick={() => {
              setNavbarOpen(false)
              setShowVideo(true)
            }}
            className="w-full mt-10 bg-primary text-center py-3 rounded-full text-white font-semibold hover:bg-white hover:text-darkmode transition flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:play-circle" className="text-lg" />
            Watch Our Story
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <Icon icon="mdi:close" />
            </button>
            
            {/* Video Player */}
            <video 
              controls 
              autoPlay 
              className="w-full rounded-lg shadow-2xl"
              onEnded={closeVideo}
            >
              <source src="/videos/story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}

export default Header