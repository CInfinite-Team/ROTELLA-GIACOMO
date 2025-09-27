import React, { useEffect, useState } from 'react'
import Image1 from './assets/Service1.jpg'
import Image2 from './assets/Service2.jpg'
import Image3 from './assets/Service3.jpg'
import Image4 from './assets/Service4.jpg'

import HeroVideo from './assets/heroVideo.mp4'
import Navbar from './components/sharedComponents/Navbar'
import Footer from './components/sharedComponents/Footer'
import { useSmoothScroll, useViewportAnimation, useTextSplitting } from './components/animations/ScrollAnimations'
import { initParallax } from './components/animations/Parallax'
import './components/animations/animations.css'
import { PopupButton } from "react-calendly";
import FAQ from './components/sharedComponents/Faq'
import BrandCarousel from './components/sharedComponents/BrandCarousel'
import { ChevronUp } from 'lucide-react'

function WorkBook() {
  const [showCardPopup, setShowCardPopup] = useState(false)

  // Apply smooth scrolling to the entire page
  useSmoothScroll();
  
  useEffect(() => {
    const cleanup = initParallax()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  // Toggle card popup
  const toggleCardPopup = () => {
    setShowCardPopup(!showCardPopup)
  }

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCardPopup && !event.target.closest('.card-popup') && !event.target.closest('.card-popup-button')) {
        setShowCardPopup(false)
      }
    }

    if (showCardPopup) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCardPopup])
  return (
    <>
      {/* <Navbar /> */}
      <div className='grid grid-cols-3 2xl:pl-32 gap-4 w-full'>
      

        {/* Main Content */}
        <div className='flex flex-col order-2 lg:order-1 col-span-full lg:col-span-2  relative'>
          {/* Hero Section */}
          <div className='relative flex flex-col gap-5 mt-5 px-10 lg:px-[35px] xl:px-[70px] min-h-[70vh] overflow-hidden'>
            {/* Video Background */}
            <div className='absolute left-1 right-0 md:left-3 lg:left-4 inset-0 w-[97%] h-full -z-10 overflow-hidden max-w-full'>
              <video
                autoPlay
                muted
                loop
                playsInline
                className='w-full h-full object-cover'
              >
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Dark overlay for better text readability */}
              <div className='absolute inset-0 bg-black/60'></div>
            </div>
            
            {/* Hero Content */}
            <div className='relative z-1 flex flex-col gap-5 justify-center min-h-[70vh]'>
              <h1 className='text-4xl md:text-6xl font-bold mt-16 slide-up text-white' ref={useViewportAnimation()}>
                Your Outsourced Marketing Solution
              </h1>
              <p className='font-semibold text-2xl md:text-4xl slide-up stagger-1 text-white' ref={useViewportAnimation()}>
                I help small business owners…
              </p>
              <p className='font-medium text-lg md:text-2xl text-white/90 slide-up stagger-2' ref={useViewportAnimation()}>
                I have experience in Luxury, Fashion, SaaS, Tech, Fitness,
                Lifestyle, and Real Estate.
              </p>
            </div>
          </div>

          {/* Services Section - Premium Grid Layout */}
          <div className='px-10 lg:px-[35px] xl:px-[70px] mt-16'>
            <h2 className='text-3xl md:text-5xl text-center font-bold mb-16 fade-in' ref={useViewportAnimation()}>
              These are some of my services
            </h2>
            
            {/* Premium Grid Layout */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
              {/* Service 1 - SEO */}
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <div className='aspect-[4/3] overflow-hidden relative'>
                  <img 
                    src={Image1} 
                    className='absolute inset-0 w-full h-full object-cover' 
                    data-parallax="0.06" 
                    ref={useViewportAnimation()} 
                    alt='SEO Service' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className='text-2xl font-bold mb-2'>SEO</h3>
                  <p className='text-sm opacity-90'>Search Engine Optimization</p>
                </div>
              </div>

              {/* Service 2 - Branding Strategy */}
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <div className='aspect-[4/3] overflow-hidden relative'>
                  <img 
                    src={Image2} 
                    className='absolute inset-0 w-full h-full object-cover' 
                    data-parallax="0.08" 
                    ref={useViewportAnimation()} 
                    alt='Branding Strategy Service' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className='text-2xl font-bold mb-2'>Branding Strategy</h3>
                  <p className='text-sm opacity-90'>Strategic Brand Development</p>
                </div>
              </div>

              {/* Service 3 - Influencer Marketing */}
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <div className='aspect-[4/3] overflow-hidden relative'>
                  <img 
                    src={Image3} 
                    className='absolute inset-0 w-full h-full object-cover' 
                    data-parallax="0.05" 
                    ref={useViewportAnimation()} 
                    alt='Influencer Marketing Service' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className='text-2xl font-bold mb-2'>Influencer Marketing</h3>
                  <p className='text-sm opacity-90'>Strategic Influencer Partnerships</p>
                </div>
              </div>

              {/* Service 4 - Content Writing */}
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <div className='aspect-[4/3] overflow-hidden relative'>
                  <img 
                    src={Image4} 
                    className='absolute inset-0 w-full h-full object-cover' 
                    data-parallax="0.07" 
                    ref={useViewportAnimation()} 
                    alt='Content Writing Service' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className='text-2xl font-bold mb-2'>Content Writing</h3>
                  <p className='text-sm opacity-90'>Strategic Content Creation</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-10 lg:px-[35px] xl:px-[60px]'>
            <BrandCarousel />
          </div>
          {/* Portfolio / Brands Section */}
          <div className='flex flex-col gap-5 px-[35px] xl:px-[70px]'>
           
            <ul className='list-disc space-y-7'>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>WebsiteSetup</span>{' '}
                <span className='text-gray-600'>
                  SEO strategy, keyword research, link building, and top 10 Google rankings.
                </span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>Badger Maps</span>{' '}
                <span className='text-gray-600'>
                  Website optimization, SEO, content writing, PPC, email marketing.
                </span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>Gucci</span>{' '}
                <span className='text-gray-600'>
                  Part of the Gucci Media team in 2023–2024.
                </span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>Kukreja Real Estate</span>{' '}
                <span className='text-gray-600'>
                  Social media content and website development.
                </span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>AIX Summit</span>{' '}
                <span className='text-gray-600'>
                  Branding and website development.
                </span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>Kanan</span>{' '}
                <span className='text-gray-600'>
                  Website optimization, PPC, social media.
                </span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>Radiance Clinic</span>{' '}
                <span className='text-gray-600'>Healthcare marketing projects.</span>
              </li>
              <li className='text-2xl font-medium'>
                <span className='text-black font-bold'>Offbeat Lifestyle</span>{' '}
                <span className='text-gray-600'>
                  SEO strategy, content writing, and social media content.
                </span>
              </li>
            </ul>
          </div>
          
          <FAQ />
          
          {/* Brand Carousel Section - Added after FAQ */}
        
          
          <Footer />
        </div>

        {/* Right Sidebar (Card) */}
        <div className='z-50 flex-col hidden lg:flex order-1 lg:order-2 mt-6 lg:mt-0 col-span-full lg:col-span-1 px-5 lg:px-0 gap-4 lg:pr-[20px] xl:pr-[80px]'>
          <div className='max-w-sm mx-auto lg:sticky top-4 mt-4 lg:mr-4 xl:mr-0 rounded-lg shadow-lg border border-gray-200  bg-[#f3efea]'>
            {/* Header */}
            <div className='flex items-center flex-wrap gap- justify-between py-[6px]  px-3'>
              <div className='flex items-center gap-2 p-3'>
                {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                <h2 className='font-semibold text-center text-gray-800'>YOUR OUTSOURCED MARKETING SOLUTION</h2>
              </div>
              <span className='text-sm text-center w-full font-semibold text-green-600'>
                €1,000 / month
              </span>
            </div>

            {/* Body */}
            <div className='space-y-4 px-6 pt-2'>
              <div>
                <h3 className='font-semibold text-gray-800 mb-1'>
                  Includes end-to-end execution and strategy:
                </h3>
                <ul className='text-sm text-gray-600 leading-relaxed list-disc pl-4'>
                  <li>
                   <span className='font-semibold text-black'>Social media:</span> Social media: content creation, posting & ad management
                  </li>
                  <li>
                    <span className='font-semibold text-black'>Website maintenance & optimization</span> (SEO, geo-targeting, performance)
                  </li>
                  <li>All other channels relevant to your business</li>
                </ul>
                <p className='text-sm text-gray-600 mt-2'>
                  Payment: 50% deposit to start · 50% on completion
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-800 mb-'>
                  How do I get it?
                </h3>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  Book a 30-minutes call with me :
                  <br />
                </p>
              </div>
            </div>

            {/* Button */}
            <div className='p-2'>
            <button className='mt-2 w-full bg-black hover:bg-[#272727] duration-500 text-white font-semibold py-3 rounded-lg transition-colors scale-in ease-out-back' ref={useViewportAnimation()}>
             
              <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="Book a Call"
            className='w-full h-full'
          />
            </button>
             <div className='text-sm text-gray-600 whitespace-nowrap flex-wrap leading-relaxed flex justify-center mt-2'> 
                  Or Connect via: {'  '}
                  <a
                    href='mailto:rotellagiacomo@gmail.com'
                    className='underline pl-1 font-semibold text-black'
                  >
                    Email
                  </a>
                  , or{' '}
                  <a
                    href='https://wa.me/393920034695'
                    className='underline font-semibold text-black'
                  >
                    WhatsApp/Call
                  </a></div>
            </div>
           
          </div>
        </div>
        
      </div>

      {/* Card Popup Button - Only visible on small to medium screens */}
      <button
        onClick={toggleCardPopup}
        className="fixed bottom-6 right-6 z-50 bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 lg:hidden sm:block card-popup-button"
        aria-label="Show pricing card"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      </button>

      {/* Card Popup Modal */}
    {showCardPopup && (
  <div className="fixed inset-0 bg-black/40 lg:hidden backdrop-blur-sm z-50 flex items-end overflow-y-auto sm:items-center justify-center pb-4 sm:p-4">
    <div 
      className="card-popup bg-white shadow-xl rounded-2xl overflow-hidden  max-w-sm w-full relative mx-2 scrollbar-hide animate-slideUp"
    >
      {/* Close Button */}
      <button
        onClick={() => setShowCardPopup(false)}
        className="absolute top-3 right-3 z-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-1 transition-colors duration-200"
        aria-label="Close popup"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Header */}
      <div className='flex flex-col items-center text-center py-4 px-6 border-b'>
        <h2 className='font-bold text-gray-800 text-sm md:text-lg '>YOUR OUTSOURCED MARKETING SOLUTION</h2>
        <span className='text-sm font-semibold text-green-600 mt-1'>€1,000 / month</span>
      </div>

      {/* Body */}
      <div className='space-y-4 px-6 py-4'>
        <div>
          <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1'>
            Includes end-to-end execution and strategy:
          </h3>
          <ul className='text-sm text-gray-600 leading-relaxed list-disc pl-4'>
            <li><span className='font-semibold text-black'>Social media:</span> content creation, posting & ad management</li>
            <li><span className='font-semibold text-black'>Website maintenance & optimization</span> (SEO, geo-targeting, performance)</li>
            <li>All other channels relevant to your business</li>
          </ul>
          <p className='text-sm text-gray-600 mt-2'>
            Payment: 50% deposit to start · 50% on completion
          </p>
        </div>

        <div>
          <h3 className='font-semibold text-gray-800 mb-1'>How do I get it?</h3>
          <p className='text-sm text-gray-600'>
            Book a 30-minutes call with me:
          </p>
        </div>
      </div>

      {/* Button */}
      <div className='p-4 border-t'>
        <button className='w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all'>
          <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="Book a Call"
            className='w-full text-sm md:text-base h-4'
          />
        </button>
        <div className='text-xs text-gray-600 flex justify-center gap-1 mt-2 flex-wrap'> 
          Or Connect via: 
          <a href='mailto:rotellagiacomo@gmail.com' className='underline font-semibold text-black'>Email</a>,
          <a href='https://wa.me/393920034695' className='underline font-semibold text-black'>WhatsApp/Call</a>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  )
}

export default WorkBook
