import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Highlight } from '../animations/hero-highlight'
import { ArrowBigDown } from 'lucide-react'

function Fractional2() {
  return (
    
                <div className='relative bg-[#eae0d5]  z-1 min-h-[80vh] flex flex-col gap-16  justify-center mb-10'>
                 
                  <p className='font-semibold text-4xl md:text-4xl slide-up stagger-1 !leading-tight ' ref={useViewportAnimation()}>
                    What does the fractional marketing consultant package include?
                  </p>
    
                  <p className=' text-3xl font-semibold md:text-3xl  slide-up stagger-2' ref={useViewportAnimation()}>
                    My <Highlight className=' text-white leading-tight '> fractional marketing consulting package </Highlight> includes everything from strategy to execution:
                  </p>
                               {/* <button> <ArrowBigDown size={40} fill='#911c28' color='#911c28' /></button> */}

    
                </div>
  )
}

export default Fractional2
