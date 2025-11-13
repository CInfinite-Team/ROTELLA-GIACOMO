import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
const Services = React.memo(function Services() {
  return (
    <div className='flex flex-col bg-[#f5f5f5]  min-h-screen gap-4 md:gap-8  justify-center  '>
      
                  <p className='font-bold   slide-left text-[#181818] 2xl:mt-4 ' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 4vw, 47px)" }}>Website maintenance & optimization</p>
                  <p className='font-bold  slide-right text-[#181818] 2xl:mt-4 ' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 4vw, 47px)" }}>Search engine optimization</p>
                  <p className='font-bold  slide-left text-[#181818] 2xl:mt-4 ' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 4vw, 47px)" }}>Social media management</p>
                  <p className='font-bold   slide-right text-[#181818] 2xl:mt-4 ' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 4vw, 47px)" }}>All other channels that are relevant to your business</p>
    </div>
  )
})

export default Services
