'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import Logo from './Logo'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setSticky(true)
      else setSticky(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setNavbarOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className='container mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* 🔹 Logo */}
        <div
          className={`duration-300 ${sticky ? 'py-1' : 'py-2 sm:py-3'}`}
        >
          <Logo />
        </div>

        {/* 🔹 Desktop Nav Links */}
        <nav className='hidden lg:flex items-center space-x-8 font-medium text-gray-700'>
          <Link href="/services" className="hover:text-primary transition">
  Services
</Link>

          <Link href='#projects' className='hover:text-primary transition'>
            Projects
          </Link>
          <Link href='#team' className='hover:text-primary transition'>
            Team
          </Link>
          <Link href='#contact' className='hover:text-primary transition'>
            Contact
          </Link>
        </nav>

        {/* 🔹 CTA Button (Desktop) */}
        <div className='hidden lg:block'>
          <Link
            href='#contact'
            className='bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-darkmode transition'
          >
            Get a Quote
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className='lg:hidden text-3xl text-darkmode focus:outline-none'
        >
          <Icon icon={navbarOpen ? 'mdi:close' : 'mdi:menu'} />
        </button>
      </div>

      {/* 🔹 Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] sm:w-[70%] bg-darkmode text-white shadow-lg transform transition-transform duration-300 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 rounded-l-2xl`}
      >
        <div className='p-6'>
          <Logo />
          <nav className='flex flex-col space-y-6 mt-10 text-lg'>
           <Link href="/site/services" className="hover:text-primary transition">
  Services
</Link>

            <Link href='#projects' onClick={() => setNavbarOpen(false)}>Projects</Link>
            <Link href='#team' onClick={() => setNavbarOpen(false)}>Team</Link>
            <Link href='#contact' onClick={() => setNavbarOpen(false)}>Contact</Link>
          </nav>
          <Link
            href='#contact'
            onClick={() => setNavbarOpen(false)}
            className='block mt-10 bg-primary text-center py-3 rounded-full text-white font-semibold hover:bg-white hover:text-darkmode transition'
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
