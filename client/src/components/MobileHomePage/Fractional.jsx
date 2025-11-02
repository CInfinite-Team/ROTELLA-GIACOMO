import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'

function Fractional() {
  return (
    <div className='flex flex-col bg-[#eae0d5]  gap-5 min-h-[80vh]  items-center justify-center'>
       <p className='font-semibold  slide-up stagger-1 !leading-tight mt-10 ' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(30px, 8vw, 57px)" }}>
                      What is a fractional marketing consultant?
                    </p>
      
                    <p className='  font-semibold  slide-up stagger-2' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                      As a fractional marketing consultant, my team and I work with you on a part-time and long-term basis to provide strategic guidance and hands-on execution.
                    </p>


      
    </div>
  )
}

export default Fractional
