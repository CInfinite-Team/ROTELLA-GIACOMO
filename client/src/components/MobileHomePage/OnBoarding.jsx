import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Highlight } from '../animations/hero-highlight'
function OnBoarding() {
  return (
    <div className='flex bg-[#eae0d5]  flex-col min-h-screen items-center justify-center gap-4 md:gap-10'>
       <h2 className=' text-center font-bold mt-10 2xl:!text-7xl fade-in' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(25px, 8vw, 57px)" }}>
                    What does the <Highlight  className=' text-white leading-tight '>[KW] onboarding process look like?</Highlight>
                  </h2>
      
      
                <ol className='text-center space-y-1 2xl:space-y-10 font-medium mb-10'>
                  <li className=' font-semibold slide-left 2xl:!text-6xl text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                    1. Intro call <br /> We learn your goals.
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' /> */}
                  <li className=' font-semibold slide-right 2xl:!text-6xl text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                    2. Proposal <br/> Scope, timeline, price.
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' /> */}
                  <li className=' font-semibold slide-left 2xl:!text-6xl text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(16px, 5.5vw, 30px)" }}>
                    3. Kickoff <br /> We start working.
                  </li>
                 
                  </ol>
    </div>
  )
}

export default OnBoarding
