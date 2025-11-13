import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'

const SmallBusiness = React.memo(function SmallBusiness() {
  return (
    <div className='min-h-screen bg-[#f5f5f5]  flex flex-col  justify-center items-center px-[4vw]'>
       <h1  className=' font-bold  slide-up !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(30px, 7vw, 57px)" }}
  >
        If you’re a <span className='text-[#911c28] '>small business </span>owner looking to level up your marketing, you’re in the right place.
        </h1>
    </div>
  )
})

export default SmallBusiness
