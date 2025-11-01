import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'

function Fractional() {
  return (
    <div className='flex flex-col bg-[#eae0d5]  gap-8 min-h-[80vh]  items-center justify-center'>
       <p className='font-semibold text-4xl md:text-5xl slide-up stagger-1 !leading-tight mt-10 ' ref={useViewportAnimation()}>
                      What is a fractional marketing consultant?
                    </p>
      
                    <p className=' text-3xl font-semibold md:text-3xl  slide-up stagger-2' ref={useViewportAnimation()}>
                      As a fractional marketing consultant, my team and I work with you on a part-time and long-term basis to provide strategic guidance and hands-on execution.
                    </p>


      
    </div>
  )
}

export default Fractional
