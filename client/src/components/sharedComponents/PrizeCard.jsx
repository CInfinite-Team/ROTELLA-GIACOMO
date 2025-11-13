import React ,{useEffect, useRef, useCallback} from 'react'
import {  useViewportAnimation } from '../animations/ScrollAnimations'
// import Giacomo from '../../assets/Giacomo.webp'
import { useCalendly } from '../../hooks/useCalendly'
import { PopupButton } from "react-calendly";

const PrizeCard = React.memo(function PrizeCard() {
  const calendlyContainerRef = useRef(null)
  const { initCalendlyInlineWidgets } = useCalendly()

  const ensureCalendly = useCallback(() => {
    initCalendlyInlineWidgets()
  }, [initCalendlyInlineWidgets])

  useEffect(() => {
    const node = calendlyContainerRef.current
    if (!node) {
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      ensureCalendly()
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ensureCalendly()
          observer.disconnect()
        }
      })
    }, { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0.1 })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [ensureCalendly])

  return (
    <>
       {/* <div className='z-50 flex-col  flex   mt-6 lg:mt-0  px-5 pl-5 gap-4  '> */}
               {/* Right Sidebar (Card) */}
        <div className='z-50 flex-col hidden lg:flex items-center justify-center  pr-4 gap-4 '>
          <div className='max-w-sm rounded-lg shadow-2xl   bg-[#fdfafa]'>
            {/* Header */}
            <div className='flex items-center flex-wrap w-full justify-between py-[6px] px-3 '>
              <div className='flex items-center gap-2 px-3'>
                {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                <h2 className='font-bold text-lg 2xl:text-xl text-[#911c28] text-center '>[KW] Package</h2>
              </div>
              <span className=' text-center 2xl:text-lg font-bold pr-2 text-green-600'>
                €500 / month
              </span>
            </div>

            {/* Body */}
            <div className='space-y-4 px-6 pt-2'>
              <div>
                <ul className='  pl-4 2xl:text-lg font-semibold tick-list space-y-2'>
                        <li>Can be adapted to your budget</li>
                        <li>50% deposit to start · 50% on completion</li>
                        <li>No Commitment, Cancel at any time</li>
                    </ul>
              </div>

              <div>
                <h3 className='text-xl 2xl:text-2xl text-[#911c28] font-bold mb-1 mt-2 slide-up !leading-snug'
                             data-lazy-animation="fade-up" data-lazy-animation-duration="1100"
                             ref={useViewportAnimation()}>
                               Why me?
                             </h3>
                <h3 className=' font-semibold  slide-up !leading-snug'
                                 data-lazy-animation="fade-up" data-lazy-animation-duration="1100" data-lazy-animation-delay="120"
                                 ref={useViewportAnimation()}>
                               One point of
               contact, full team
               of specialists.
                             </h3>
                         
              </div>
            </div>

            {/* Button */}
            <div className='p-2 px-5 '>
             
              <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="Book a Call"
            className='w-full h-full bg-[#911c28] hover:bg-[#a73535] text-white  text-sm md:text-base mt-4 font-bold py-3 px-5 md:px-20 md:py-3 rounded-full shadow-lg transition-colors duration-300 '
          />
           

              <div className='flex flex-row-reverse mt-4 items-center gap-7 justify-center px-3 '>

                <div className='relative'>
          <div className='relative '>
             <div className="w-14 h-14 md:w-14 md:h-14 rounded-full  overflow-hidden shadow-2xl ">
                        <img 
                          src='/Giacomo.webp'
                          alt="Rotella Giacomo"
                           loading="lazy"
                  decoding="async"
                          className="w-full h-full object-top object-cover"
                        />
                          
              
               </div>
               <span className="absolute bottom-2 right-2 flex size-[65%] z-[-1] ">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6704a0] opacity-100"></span>
                 <span className="relative inline-flex size-[65%] rounded-full bg-[#a29ae9]"></span>
                </span>
                </div>
                <span className="absolute bottom-1 left-[-1]  flex size-3">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                 <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                </span>
                      </div>

                <p className='text-lg font-bold '>I'm available to talk</p>

              </div>

            
            </div>
            
           
          </div>
           <div className='text-sm text-[#911c28]  font-medium whitespace-nowrap flex-wrap leading-relaxed flex justify-center mt-2'> 
                  Or write me at: {'  '}
                  <a
                    href='mailto:rotellagiacomo@gmail.com'
                    className='underline cursor-pointer pl-1 font-semibold text-[#911c28] '
                  >
                    rotellagiacomo@gmail.com
                  </a>
                  , or{' '}
                  <a
                    href='https://wa.me/393920034695'
                    className='underline font-semibold cursor-pointer text-[#911c28] pl-1'
                  >
          +39 3920034695                 
           </a></div>
        </div>
              {/* </div> */}
    </>
  )
})

export default PrizeCard
