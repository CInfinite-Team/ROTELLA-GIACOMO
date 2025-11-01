import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Highlight } from '../animations/hero-highlight'
function OnBoarding() {
  return (
    <div className='flex bg-[#eae0d5]  flex-col min-h-screen items-center justify-center gap-10'>
       <h2 className='text-4xl md:text-4xl text-center font-bold mt-10 fade-in' ref={useViewportAnimation()}>
                    What does the <Highlight  className=' text-white leading-tight '>[KW] onboarding process look like?</Highlight>
                  </h2>
      
      
                <ol className='text-center space-y-5 font-medium mb-10'>
                  <li className='text-2xl md:text-3xl  font-semibold slide-left' ref={useViewportAnimation()}>
                    1. Intro call <br /> We learn your goals.
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' /> */}
                  <li className='text-2xl md:text-3xl  font-semibold slide-right' ref={useViewportAnimation()}>
                    2. Proposal <br/> Scope, timeline, price.
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' /> */}
                  <li className='text-2xl md:text-3xl font-semibold slide-left' ref={useViewportAnimation()}>
                    3. Kickoff <br /> We start working.
                  </li>
                 
                  </ol>
    </div>
  )
}

export default OnBoarding
