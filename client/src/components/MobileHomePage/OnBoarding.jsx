import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Highlight } from '../animations/hero-highlight'
const OnBoarding = React.memo(function OnBoarding() {
  return (
    <div className='flex bg-[#f5f5f5]  flex-col min-h-screen  justify-center gap-4 md:gap-10'>
       <h2 className='  font-bold mt-10  fade-in' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(30px, 5vw, 57px)" }}>
                    What does the <Highlight  className=' text-white leading-tight '>[KW] onboarding process look like?</Highlight>
                  </h2>
      
      
                <ol className=' space-y-1 2xl:space-y-10 font-medium mb-10'>
                  <li className=' font-semibold slide-left  text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                    1. Intro call <br /> We learn your goals.
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' /> */}
                  <li className=' font-semibold slide-right  text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                    2. Proposal <br/> Scope, timeline, price.
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' /> */}
                  <li className=' font-semibold slide-left  text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                    3. Kickoff <br /> We start working.
                  </li>
                 
                  </ol>
    </div>
  )
})

export default OnBoarding
