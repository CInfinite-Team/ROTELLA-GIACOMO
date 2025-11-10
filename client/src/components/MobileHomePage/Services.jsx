import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
const Services = React.memo(function Services() {
  return (
    <div className='flex flex-col bg-[#eae0d5]  min-h-screen gap-4 md:gap-8   items-center justify- pt-[10vh] '>
      
                  <p className='font-bold  text-center slide-left text-[#181818] 2xl:mt-4 2xl:!text-7xl' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 6.5vw, 42px)" }}>Website maintenance & optimization</p>
                  <p className='font-bold text-center slide-right text-[#181818] 2xl:mt-4 2xl:!text-7xl' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 6.5vw, 42px)" }}>Search engine optimization</p>
                  <p className='font-bold text-center slide-left text-[#181818] 2xl:mt-4 2xl:!text-7xl' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 6.5vw, 42px)" }}>Social media management</p>
                  <p className='font-bold  text-center slide-right text-[#181818] 2xl:mt-4 2xl:!text-7xl' ref={useViewportAnimation()} 
                  style={{ fontSize: "clamp(20px, 6.5vw, 42px)" }}>All other channels that are relevant to your business</p>
    </div>
  )
})

export default Services
