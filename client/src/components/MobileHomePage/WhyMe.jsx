import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import BlurText from '../animations/BlurText'
const WhyMe = React.memo(function WhyMe() {
  return (
    <div className='flex flex-col gap-5 md:gap-10 bg-[#f5f5f5]  justify-center min-h-screen'>
       <h3 className=' text-[#911c28] font-bold mb-3 mt-10 slide-up !leading-snug' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(25px, 5vw, 57px)" }}>
                      Why me?
                    </h3>
                    <h3 className=' w-[80%] font-bold mb-10  slide-up !leading-snug' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(25px, 4.5vw, 47px)" }}>
                      One point of
      contact, full team
      of specialists. 
                     <BlurText
  text="I treat my clients as if they were my only brands."
  delay={150}
  animateBy="words"
  direction="top"
 
  className="text-2xl mb-8 !leading-snug"
/>
                     
                    </h3>
    </div>
  )
})

export default WhyMe
