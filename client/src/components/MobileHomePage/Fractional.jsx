import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'

const Fractional = React.memo(function Fractional() {
  return (
    <div className='flex flex-col bg-[#f5f5f5]  gap-5 min-h-[80vh] lg:min-h-[100vh]  items-center justify-center'>
      
       <div className='w-full '><p className='font-bold whitespace-nowrap slide-up stagger-1  !leading-tight ' ref={useViewportAnimation()}
             style={{ fontSize: "clamp(20px, 3vw, 57px)" }}
>
                      What is a fractional
                    </p>
       <p className='font-bold whitespace-nowrap  slide-up stagger-1  !leading-tight   ' ref={useViewportAnimation()}
             style={{ fontSize: "clamp(20px, 3vw, 57px)" }}
>
                      marketing consultant?
                    </p>
      </div>

      <div className='w-full'>
                    <p className=' whitespace-nowrap font-semibold  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                      As a fractional marketing consultant, 
                    </p>

                    <p className=' whitespace-nowrap  font-semibold  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    my team and I work with you on a part-time           
                     </p>
                    <p className=' whitespace-nowrap  font-semibold  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    and long-term basis to provide strategic
                        </p>
                    <p className=' whitespace-nowrap  font-semibold  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    guidance and hands-on execution.
                        </p>
                    </div>


      
    </div>
  )
})

export default Fractional
