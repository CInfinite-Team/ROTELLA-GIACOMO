import React from 'react'
// import Giacomo from '../../assets/Giacomo.webp'

function Prize() {
  return (
    <div>
       <div className=' bg-[#eae0d5]  top-4 mt-4 lg:mr-4 xl:mr-0 rounded-lg shadow-lg border border-gray-200  bg-[#7c1621]'>
                  {/* Header */}
                  <div className='flex items-center flex-wrap gap- justify-between py-[6px]  px-3'>
                    <div className='flex items-center w-full justify-center gap-2 p-3'>
                      {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                      <h2 className='font-semibold text-xl text-center text-white'>[KW] Package</h2>
                    </div>
      
                    <div className='flex flex-col w-full justify-items-center text-white items-center'>
                    <span className='text-xl mb-2 text-center w-full font-bold text-white '>
                      €1000 / month
                    </span>
      
                    <span className='text-sm font-medium'>
                        - Can be adapted to your budget
            <br />
                    - 50% deposit to start · 50% on
                      completion
      <br />
                    -  No Commitment, Cancel at any time
                    </span>
      
                    </div>
      
                  </div>
      
                  {/* Body */}
                  <div className='space-y-4 px-6 pt-2'>
                    <div>
                      <h3 className='font-semibold text-center text-white mb-1'>
                        Why me
                      </h3>
                      
                      <p className='text-sm font-medium text-center text-white mt-2'>
                        One point of contact, full team of specialists.
                      </p>
                    </div>
      
                    <div>
                      <h3 className='font-bold text-lg underline underline-offset-4 text-center text-white '>
                        BOOK A CALL WITH ME
                      </h3>
                      
                    </div>
                  </div>
                  
                    
                    <div className='grid grid-cols-2 mt-8 px-2'>
                    
                    <div className='h-[250px] col-span-1'>
                      <div 
                      className="calendly-inline-widget lg:max-w-[240px] 2xl:!max-w-96 2xl:!h-80" 
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
                    <img src='/Giacomo.webp' alt="Rotella Giacomo"  loading="lazy"
                  decoding="async" className='rounded-full w-[70%] xl:w-[80%] aspect-square object-cover' />
                    
                    <div className='flex items-center  text-center'>
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
      
                  {/* Button */}
                  <div className='p-2'>
                  {/* <button className='mt-2 w-full bg-black hover:bg-[#272727] duration-500 text-white font-semibold py-3 rounded-lg transition-colors scale-in ease-out-back' ref={useViewportAnimation()}>
                   
                    <PopupButton
                  url="https://calendly.com/rgiacomo"
                  rootElement={document.getElementById("root")}
                  text="Book a Call"
                  className='w-full h-full'
                />
                  </button> */}
                   <div className='text-sm text-white whitespace-nowrap flex-wrap leading-relaxed flex justify-center mt-2'> 
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
  )
}

export default Prize
