import React, { useEffect } from 'react'
import Image1 from './assets/writebook-01.webp'
import HeroVideo from './assets/heroVideo.mp4'
import Navbar from './components/sharedComponents/Navbar'
import Footer from './components/sharedComponents/Footer'
import { useSmoothScroll, useViewportAnimation, useTextSplitting } from './components/animations/ScrollAnimations'
import { initParallax } from './components/animations/Parallax'
import './components/animations/animations.css'
import { PopupButton } from "react-calendly";
import FAQ from './components/sharedComponents/Faq'
import BrandCarousel from './components/sharedComponents/BrandCarousel'

function WorkBook() {
  // Apply smooth scrolling to the entire page
  useSmoothScroll();
  useEffect(() => {
    const cleanup = initParallax()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])
  return (
    <>
      <Navbar />
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
            <div className='relative z-10 flex flex-col gap-5 justify-center min-h-[70vh]'>
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

          {/* Services Section */}
          <div className='flex flex-col gap-5 px-10'>
            <h2 className='text-lg md:text-3xl text-center font-bold mt-10 fade-in' ref={useViewportAnimation()}>
              These are some of my services:
            </h2>
            <h3 className='text-lg md:text-2xl text-center font-semibold slide-left' ref={useViewportAnimation()}>
              Service 1
            </h3>
            <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' />
            <h3 className='text-lg md:text-2xl text-center font-semibold slide-right' ref={useViewportAnimation()}>
              Service 2
            </h3>
            <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' />
            <h3 className='text-lg md:text-2xl text-center font-semibold slide-left' ref={useViewportAnimation()}>
              Service 3
            </h3>
            <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.05" ref={useViewportAnimation()} alt='' />
            <h3 className='text-lg md:text-2xl text-center font-semibold slide-right' ref={useViewportAnimation()}>
              Service 4
            </h3>
            <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.07" ref={useViewportAnimation()} alt='' />
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
        <div className='flex z-50 flex-col order-1 lg:order-2 mt-6 lg:mt-0 col-span-full lg:col-span-1 px-5 lg:px-0 gap-4 lg:pr-[20px] xl:pr-[80px]'>
          <div className='max-w-sm mx-auto lg:fixed top-0 lg:mr-4 xl:mr-0 rounded-lg shadow-lg border border-gray-200  bg-[#f3efea]'>
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
             <div className='text-sm text-gray-600 leading-relaxed flex justify-center mt-2'> 
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
    </>
  )
}

export default WorkBook
