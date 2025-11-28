import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Highlight } from '../animations/hero-highlight'

const Fractional2 = React.memo(function Fractional2() {
  return (
    
                <div className='relative bg-[#f5f5f5]  z-1 min-h-[80vh] lg:min-h-[100vh] flex flex-col gap-5 md:gap-8 items-center justify-center'>
                 
                  <p className='font-bold text-4xl md:text-4xl  slide-up stagger-1 !leading-tight ' ref={useViewportAnimation()}
                          style={{ fontSize: "clamp(30px, 4vw, 57px)" }}
>
                    What does the fractional marketing consultant package include?
                  </p>
    
                  <p className=' text-3xl font-semibold md:text-3xl   text-[#181818] slide-up stagger-2' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(18px, 4vw, 40px)" }}>
                    My <Highlight className=' text-white leading-tight '> fractional marketing consulting package </Highlight> includes everything from strategy to execution:
                  </p>
                               {/* <button> <ArrowBigDown size={40} fill='#911c28' color='#911c28' /></button> */}

    
                </div>
  )
})

export default Fractional2
