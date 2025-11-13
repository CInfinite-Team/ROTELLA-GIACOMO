import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'

const Fractional = React.memo(function Fractional() {
  return (
    <div className='flex flex-col bg-[#f5f5f5]  gap-5 min-h-[80vh] lg:min-h-[100vh]  items-center justify-center'>
       <p className='font-bold  slide-up stagger-1  !leading-tight  mt-10 ' ref={useViewportAnimation()}
             style={{ fontSize: "clamp(30px, 6vw, 57px)" }}
>
                      What is a fractional marketing consultant?
                    </p>
      
                    <p className='  font-semibold  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(16px, 5.5vw, 40px)" }}>
                      As a fractional marketing consultant, my team and I work with you on a part-time and long-term basis to provide strategic guidance and hands-on execution.
                    </p>


      
    </div>
  )
})

export default Fractional
