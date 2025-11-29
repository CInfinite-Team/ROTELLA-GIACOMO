import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import BlurText from '../animations/BlurText'
const WhyMe = React.memo(function WhyMe() {
  return (
    <div className='flex flex-col  bg-[#f5f5f5] gap-5 justify-center min-h-screen'>
       <h3 className=' text-[#911c28] font-bold   slide-up !leading-snug' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(46px, 3.5vw, 87px)" }}>
                      Why me?
                    </h3>
                    <h3 className=' w-[80%] whitespace-nowrap w-full font-bold mb-10  slide-up !leading-snug' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(22px, 3vw, 67px)" }}>
                      One point of
      contact,
      <br /> full team
      of specialists. 
                     <BlurText
  text="I treat my clients as if they"
  delay={150}
  animateBy="words"
  direction="top"
 
  className="text-2xl whitespace-nowrap  !leading-snug"
/>
                     <BlurText
  text="were my only brands."
  delay={150}
  animateBy="words"
  direction="top"
 
  className="text-2xl whitespace-nowrap !leading-snug"
/>
                     
                    </h3>
    </div>
  )
})

export default WhyMe
