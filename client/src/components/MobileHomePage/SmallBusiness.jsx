import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import Pic1 from '../../assets/pics/3.jpg'
const SmallBusiness = React.memo(function SmallBusiness() {
  return (
    <div className='min-h-screen bg-[#f5f5f5] gap-5 flex flex-col  justify-center items-start px-[4vw]'>
       <div>
        <h1  className=' font-bold hidden sm:block slide-up md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        If you’re a <span className='text-[#911c28] '>small business </span>owner looking to level up 
        </h1>
       <h1  className=' font-bold hidden sm:block  slide-up md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        your marketing, you’re in the right place.
        </h1>
        </div>
       <div>
        <h1  className=' font-bold sm:hidden slide-up md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        If you’re a <span className='text-[#911c28] '>small business </span>owner looking to level up your marketing, you’re in the right place.
        </h1>
      
        </div>

          <img src={Pic1} className=' shadow-xl max-h-[500px] xl:max-h-[600px] 2xl:max-h-[50vh] lg:w-[95%] object-cover rounded-lg ' alt='Small business marketing illustration' />

    </div>
  )
})

export default SmallBusiness
