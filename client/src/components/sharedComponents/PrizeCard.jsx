import React ,{useEffect,useState} from 'react'
import {  useViewportAnimation } from '../animations/ScrollAnimations'
import Giacomo from '../../assets/Giacomo.jpeg'


function PrizeCard() {
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
  return (
    <>
       <div className='z-50 flex-col  flex bg-[#7c1621]   mt-6 lg:mt-0  px-5 pl-5 gap-4 lg:pr-[5px] xl:pr-[20px] '>
                <div 
                  className=' mx-auto lg:sticky top-4 mt-4 lg:mr-4 xl:mr-0 rounded-lg    bg-[#7c1621] slide-right'
                  data-lazy-animation="fade-right" 
                  data-lazy-animation-duration="1200" 
                  data-lazy-animation-easing="ease-out-quart"
                  ref={useViewportAnimation({ animationClass: 'animate-in', once: false })}
                >
                  {/* Header */}
                  <div className='flex items-center flex-wrap 2xl:pl-10 justify-between py-[6px]  px-3'>
                   
      
                   <div className='flex justify-center w-full items-center'>
                    <div 
                      className='flex flex-col w-full h-fit text-white items-start fade-in'
                      ref={useViewportAnimation({ animationClass: 'animate-in stagger-2', once: false })}
                    >
                      
                       <div 
                      className='flex items-center w-full gap-2 mb-4 fade-in'
                      ref={useViewportAnimation({ animationClass: 'animate-in stagger-1', once: false })}
                    >
                      {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                      <h2 className='font-semibold text-xl 2xl:text-3xl  text-white'>[KW] Package</h2>
                    </div>

                    <span className='text-xl 2xl:text-3xl mb-4  w-full font-bold text-white '>
                      €1000 / month
                    </span>
      
                    <ul className=' 2xl:text-2xl font-medium list-disc '>
                        <li>Can be adapted to your budget</li>
                        <li>50% deposit to start · 50% on completion</li>
                        <li>No Commitment, Cancel at any time</li>
                    </ul>
      
                    </div>

                       <div className='w-fit h-fit '>
                        <div className='relative translate-x-16 xl:translate-x-11 w-fit h-fit'>
                    <img src={Giacomo} alt="" className='rounded-full w-[70%] xl:w-[60%] aspect-square object-cover' />
                    
                    <div className='flex items-center   text-center'>
                     <span className="relative  flex size-3">
                       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                       <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                      </span>
                      <span className='text-lg font-semibold pl-2 2xl:text-3xl text-white'>I'm available to talk</span>
                      </div>
      
                    </div>
                    </div>

                    </div>
      
                  </div>
      
                  {/* Body */}
                  <div className='space-y-2 px-6 pt-2'>
                    <div
                      className='fade-in'
                      ref={useViewportAnimation({ animationClass: 'animate-in stagger-3', once: false })}
                    >
                      <h3 className='font-semibold text-center text-xl 2xl:text-3xl text-white mb-1'>
                        Why me
                      </h3>
                      
                      <p className='text-sm font-medium  text-center 2xl:text-xl text-white mt-2'>
                        One point of contact, full team of specialists.
                      </p>
                    </div>
      
                    <div
                      className='fade-in'
                      ref={useViewportAnimation({ animationClass: 'animate-in stagger-4', once: false })}
                    >
                      <h3 className='font-bold text-lg text-center 2xl:text-2xl underline underline-offset-4  text-white '>
                        BOOK A CALL WITH ME
                      </h3>
                      
                    </div>
                  </div>
                  
                    
                    <div className='flex justify-center mt-4 px-2'>
                    
                    <div className='h-[250px] col-span-1'>
                      <div 
                      className="calendly-inline-widget lg:max-w-[240px] 2xl:!max-w-96 2xl:!h-80" 
                      data-url="https://calendly.com/rgiacomo/30-min-meeting?hide_event_type_details=1&hide_gdpr_banner=1" 
                      style={{
                        minWidth: '560px',
                       maxWidth:'600px',
                        height: '250px'
                      }}
                    />
                    </div>
                    {/* <div 
                      className='w-full  flex items-center justify-end fade-in'
                      ref={useViewportAnimation({ animationClass: 'animate-in stagger-5', once: false })}
                    >
                      <div className='w-fit h-fit '>
                        <div className='relative translate-x-16 xl:translate-x-11 w-fit h-fit'>
                    <img src={Giacomo} alt="" className='rounded-full w-[70%] xl:w-[80%] aspect-square object-cover' />
                    
                    <div className='flex items-center pl-4  text-center'>
                     <span className="relative  flex size-3">
                       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                       <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                      </span>
                      <span className='text-lg font-semibold pl-2 2xl:text-3xl text-white'>I'm available to talk</span>
                      </div>
      
                    </div>
                    </div>
      </div> */}
                    </div>
      
                  {/* Button */}
                  <div 
                    className='p-2 fade-in'
                    ref={useViewportAnimation({ animationClass: 'animate-in stagger-6', once: false })}
                  >
                  {/* <button className='mt-2 w-full bg-black hover:bg-[#272727] duration-500 text-white font-semibold py-3 rounded-lg transition-colors scale-in ease-out-back' ref={useViewportAnimation()}>
                   
                    <PopupButton
                  url="https://calendly.com/rgiacomo"
                  rootElement={document.getElementById("root")}
                  text="Book a Call"
                  className='w-full h-full'
                />
                  </button> */}
                   <div className='text-sm 2xl:text-lg text-white whitespace-nowrap flex-wrap leading-relaxed flex justify-center mt-2 '> 
                        Or Write me at: {'  '}
                        <a
                          href='mailto:rotellagiacomo@gmail.com'
                          className='underline pl-1 font-semibold text-white'
                        >
                          giacomo@rotellagiacomo.com
                        </a>
                        
                        <a
                          href='https://wa.me/393920034695'
                          className='underline font-semibold text-white'
                        >
                         <span className='font-normal'>, or {' '}</span>  +39 3920034695
                        </a></div>
                  </div>
                 
                </div>
              </div>
    </>
  )
}

export default PrizeCard
