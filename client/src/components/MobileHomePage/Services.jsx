import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
function Services() {
  return (
    <div className='flex flex-col bg-[#eae0d5]  min-h-screen gap-8   items-center justify-center'>
      
                  <p className='font-bold text-3xl md:text-5xl text-center slide-left' ref={useViewportAnimation()} >Website maintenance & optimization</p>
                  <p className='font-bold text-3xl md:text-5xl text-center slide-right' ref={useViewportAnimation()}>Search engine optimization</p>
                  <p className='font-bold text-3xl md:text-5xl text-center slide-left' ref={useViewportAnimation()}>Social media management</p>
                  <p className='font-bold text-3xl md:text-5xl text-center slide-right' ref={useViewportAnimation()}>All other channels that are relevant to your business</p>
    </div>
  )
}

export default Services
