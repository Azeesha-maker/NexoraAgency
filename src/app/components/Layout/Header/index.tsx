'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
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
      if (e.key === 'Escape') setNavbarOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (navbarOpen) {
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
  }, [navbarOpen])

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
            <Link
              href="/video"
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-darkmode transition flex items-center gap-2"
            >
              <Icon icon="mdi:play-circle" className="text-lg" />
              Watch Our Story
            </Link>
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
        <div className="p-6 pt-20"> {/* pt-20 so header doesn't overlap visual */}
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

          <Link
            href="/video"
            onClick={() => setNavbarOpen(false)}
            className="block mt-10 bg-primary text-center py-3 rounded-full text-white font-semibold hover:bg-white hover:text-darkmode transition flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:play-circle" className="text-lg" />
            Watch Our Story
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
