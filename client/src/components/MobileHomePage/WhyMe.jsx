import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
function WhyMe() {
  return (
    <div className='flex flex-col gap-5 md:gap-10 items-center bg-[#eae0d5]  justify-center min-h-screen'>
       <h3 className=' text-[#911c28] font-bold mb-3 mt-10 text-center slide-up !leading-snug' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(25px, 8vw, 57px)" }}>
                      Why me?
                    </h3>
                    <h3 className=' w-[60%] font-bold mb-10 text-center slide-up !leading-snug' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(25px, 8vw, 57px)" }}>
                      One point of
      contact, full team
      of specialists.
                    </h3>
    </div>
  )
}

export default WhyMe
