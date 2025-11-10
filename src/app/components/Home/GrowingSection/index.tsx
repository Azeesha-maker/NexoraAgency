'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const GrowingSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden py-8 rounded-tr-[150px] rounded-bl-[150px] mx-10 my-4">
      {/* Content */}
      <div className="relative container mx-auto px-8 lg:px-12 max-w-6xl bg-primary rounded-tr-[150px] rounded-bl-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* Left Side - Big Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
              We&apos;re{' '}
              <span className="text-white">
                growing
              </span>
            </h2>
          </div>

          {/* Right Side - Text + Button */}
          <div className="space-y-4 text-center lg:text-left">
            
            <p className="text-gray-300 text-lg md:text-xl leading-normal max-w-2xl">
              Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies. 
              Even though there are no open vacancies at this time, reach out with an <strong>open job application</strong> and we&apos;ll keep in the loop.
            </p>

           <div className="flex justify-center lg:justify-start">
         <Link href="/contact">
         <button className="bg-deep-slate/80 hover:bg-deep-slate/80 text-white mt-8 font-semibold text-lg px-10 py-3 rounded-lg 
                       shadow-2xl transform transition-all duration-300 hover:scale-105 
                       hover:shadow-white-500/50 border border-white">
             Send Open Application
          </button>
         </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Optional: Decorative floating element */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default GrowingSection;