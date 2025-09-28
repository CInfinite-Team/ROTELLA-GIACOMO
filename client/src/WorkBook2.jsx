import React, { useEffect, useState } from 'react'
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
import { ChevronUp } from 'lucide-react'
import Arrow from './assets/Arrow.svg'
import Giacomo from './assets/Giacomo.jpeg'
function WorkBook2() {
  const [showCardPopup, setShowCardPopup] = useState(false)

  // Apply smooth scrolling to the entire page
  useSmoothScroll();
  
  useEffect(() => {
    const cleanup = initParallax()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])
//  useEffect(() => {
//   if (showCardPopup) {
//     if (!document.querySelector('script[src*="calendly"]')) {
//       const script = document.createElement('script');
//       script.src = 'https://assets.calendly.com/assets/external/widget.js';
//       script.async = true;
//       document.body.appendChild(script);
//     } else {
//       window.Calendly && window.Calendly.initInlineWidgets();
//     }
//   }
// }, [showCardPopup]);

 useEffect(() => {
  
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.Calendly && window.Calendly.initInlineWidgets();
    }
  
}, []);



  // Toggle card popup
  const toggleCardPopup = () => {
    setShowCardPopup(!showCardPopup)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className='flex gap-10 bg-[#f4f4f4]   2xl:pl-32  w-full'>
      

        {/* Main Content */}
        <div className='flex flex-col order-2 lg:order-1 w-full lg:w-[50%]  relative'>
          {/* Hero Section */}
          <div className='relative flex flex-col gap-5 mt-5 px-10 lg:px-[35px] xl:px-[70px] min-h-[70vh] overflow-hidden'>   
            
            {/* Hero Content */}
            <div className='relative z-1 flex flex-col gap-5 justify-center mb-10'>
              <h1  className='text-4xl md:text-5xl font-bold mt-16 slide-up !leading-snug' ref={useViewportAnimation()}>
                If you’re a <span className='text-[#911c28] '>small business </span>owner looking to level up your marketing, you’re in the right place.
              </h1>
              <p className='font-semibold text-2xl md:text-4xl slide-up stagger-1 !leading-tight mt-10 ' ref={useViewportAnimation()}>
                What is a fractional marketing consultant?
              </p>

              <p className=' text-lg md:text-3xl  slide-up stagger-2' ref={useViewportAnimation()}>
                As a fractional marketing consultant, my team and I work with you on a part-time and long-term basis to provide strategic guidance and hands-on execution.
              </p>

            </div>

            <div className='relative z-1 flex flex-col gap-5 justify-center mb-10'>
             
              <p className='font-semibold text-2xl md:text-4xl slide-up stagger-1 !leading-tight ' ref={useViewportAnimation()}>
                What does the fractional marketing consultant package include?
              </p>

              <p className=' text-lg md:text-3xl  slide-up stagger-2' ref={useViewportAnimation()}>
                My fractional marketing consulting package includes everything from strategy to execution:
              </p>

                <img src={Arrow} alt="" className='rotate-[240deg] w-20 absolute right-0 -bottom-8 hidden lg:block' />

            </div>

            <p className='font-bold text-2xl text-center'>Website maintenance & optimization</p>
            <p className='font-bold text-2xl text-center'>Search engine optimization</p>
            <p className='font-bold text-2xl text-center'>Social media management</p>
            <p className='font-bold text-2xl text-center'>All other channels that are relevant to your business</p>

          </div>

          {/* Services Section */}
          <div className='flex flex-col relative items-center gap-5 px-10 mt-10'>
            <h2 className='text-lg md:text-4xl text-center font-bold mt-10 fade-in' ref={useViewportAnimation()}>
              What does the [KW] onboarding process look like?
            </h2>

                <img src={Arrow} alt="" className='rotate-[240deg] w-20 absolute right-0 top-28 hidden lg:block' />

          <ol className='list-decimal space-y-5 mb-10'>
            <li className='text-lg md:text-2xl  font-semibold slide-left' ref={useViewportAnimation()}>
              Intro call We learn your goals.
            </li>
            {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' /> */}
            <li className='text-lg md:text-2xl  font-semibold slide-right' ref={useViewportAnimation()}>
              Proposal Scope, timeline, price.
            </li>
            {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' /> */}
            <li className='text-lg md:text-2xl font-semibold slide-left' ref={useViewportAnimation()}>
              Kickoff We start working.
            </li>
           
            </ol>
            {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.07" ref={useViewportAnimation()} alt='' /> */}
          
           <h3 className='text-lg md:text-4xl font-bold mb-3 text-center slide-up !leading-snug' ref={useViewportAnimation()}>
                Why me?
              </h3>
              <h3 className='text-lg w-[60%] md:text-4xl font-bold mb-10 text-center slide-up !leading-snug' ref={useViewportAnimation()}>
                One point of
contact, full team
of specialists.
              </h3>
          
          </div>
          <div className='px-10 lg:px-[35px] xl:pl-[30px] xl:pr-0'>
            <BrandCarousel />
          </div>

             


          {/* Portfolio / Brands Section */}
          <div className='flex flex-col gap-5 px-[35px] xl:px-[70px]'>
{/*            
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
            </ul> */}
          </div>
          
          <FAQ />
          
          {/* Brand Carousel Section - Added after FAQ */}
        
          
          <Footer />
        </div>

        {/* Right Sidebar (Card) */}
        <div className='z-50 flex-col  hidden lg:flex order-1 lg:w-[50%]  lg:order-2 mt-6 lg:mt-0  px-5 pl-5 gap-4 lg:pr-[5px] xl:pr-[20px] '>
          <div className=' mx-auto lg:sticky top-4 mt-4 lg:mr-4 xl:mr-0 rounded-lg shadow-lg border border-gray-200  bg-[#e0d0c2]'>
            {/* Header */}
            <div className='flex items-center flex-wrap gap- justify-between py-[6px]  px-3'>
              <div className='flex items-center w-full justify-center gap-2 p-3'>
                {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                <h2 className='font-semibold text-center text-gray-800'>[KW] Package</h2>
              </div>

              <div className='grid grid-cols-2 items-center'>
              <span className='text-sm text-center w-full font-semibold text-green-600'>
                €1,000 / month
              </span>

              <span className='text-xs'>
                  -Can be adapted to your budget
      <br />
              -50% deposit to start · 50% on
                completion
<br />
              -No Commitment, Cancel at any time
              </span>

              </div>

            </div>

            {/* Body */}
            <div className='space-y-4 px-6 pt-2'>
              <div>
                <h3 className='font-semibold text-center text-gray-800 mb-1'>
                  Why me
                </h3>
                
                <p className='text-sm text-center text-gray-600 mt-2'>
                  One point of contact, full team of specialists.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-center text-red-800 mb-'>
                  BOOK A CALL WITH ME
                </h3>
                
              </div>
            </div>
            
              
              <div className='grid grid-cols-2 mt-4 px-2'>
              
              <div className='h-[250px] col-span-1'>
                <div 
                className="calendly-inline-widget lg:max-w-[240px] 2xl:!max-w-96 2xl:!h-72" 
                data-url="https://calendly.com/rgiacomo/30-min-meeting?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{
                  minWidth: '260px',
                 maxWidth:'260px',
                  height: '250px'
                }}
              />
              </div>
              <div className='w-full  flex items-center justify-end'>
                <div className='w-fit h-fit '>
                  <div className='relative translate-x-16 xl:translate-x-11 w-fit h-fit'>
              <img src={Giacomo} alt="" className='rounded-full w-[70%] xl:w-[80%] aspect-square object-cover' />
               <span className="absolute bottom-8 left-1 xl:left-5 2xl:left-12 flex size-3">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                 <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                </span>
              </div>
              </div>
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
                  Or Write me: {'  '}
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

  <div className={`fixed  ${showCardPopup ? 'translate-x-0' : '-translate-x-full' } inset-0  bg-black/40 lg:hidden backdrop-blur-sm z-50 flex items-center overflow-y-auto sm:items-center justify-center pb-4 sm:p-4`}>
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
       <div className='flex items-center flex-wrap gap- justify-between py-[6px]  px-3'>
              <div className='flex items-center w-full justify-center gap-2 p-3'>
                {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                <h2 className='font-semibold text-center text-gray-800'>[KW] Package</h2>
              </div>

              <div className='grid grid-cols-2 items-center'>
              <span className='text-sm text-center w-full font-semibold text-green-600'>
                €1,000 / month
              </span>

              <span className='text-xs'>
                  -Can be adapted to your budget
      <br />
              -50% deposit to start · 50% on
                completion
<br />
              -No Commitment, Cancel at any time
              </span>

              </div>

            </div>

      {/* Body */}
       <div className='space-y-4 px-6 pt-2'>
              <div>
                <h3 className='font-semibold text-center text-gray-800 mb-1'>
                  Why me
                </h3>
                
                <p className='text-sm text-center text-gray-600 mt-2'>
                  One point of contact, full team of specialists.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-center text-red-800 mb-'>
                  BOOK A CALL WITH ME
                </h3>
                
              </div>
            </div>

            
              <div className='grid grid-cols-1   mt-4 px-2'>
              

       

              <div className='h-[250px] w-full flex justify-center cols-span-full '>
                <div 
                className="calendly-inline-widget lg:max-w-[240px] " 
                data-url="https://calendly.com/rgiacomo/30-min-meeting?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{
                  minWidth: '260px',
                 maxWidth:'260px',
                  height: '250px'
                }}
              />
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
          Or Write me: 
          <a href='mailto:rotellagiacomo@gmail.com' className='underline font-semibold text-black'>Email</a>,
          <a href='https://wa.me/393920034695' className='underline font-semibold text-black'>WhatsApp/Call</a>
        </div>
      </div>
    </div>
  </div>


    <button onClick={scrollToTop} className='fixed bottom-20 lg:bottom-10 z-50 right-6 lg:right-4 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition'>
        <ChevronUp className='w-6 h-6' />
      </button>
    </>
  )
}

export default WorkBook2
