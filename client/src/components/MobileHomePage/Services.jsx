import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

import { useViewportAnimation } from '../animations/ScrollAnimations'

const Services = React.memo(function Services() {

  const services = [
    {
      title: "Website maintenance & optimization",
      img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=870&auto=format&fit=crop"
    },
    {
      title: "Search engine optimization",
      img: "https://images.unsplash.com/photo-1709281847780-2b34c28853c0?q=80&w=870&auto=format&fit=crop"
    },
    {
      title: "Social media management",
      img: "https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "All other channels that are relevant to your business",
      img: "https://images.unsplash.com/photo-1557167668-6eb71e76b603?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex items-center justify-center md:py-10">

      <Swiper
        modules={[Autoplay]}
         spaceBetween={16}
        slidesPerView={1}
       
      
  autoplay={{
    delay: 2000,
    pauseOnMouseEnter: true,
  }}
        speed={900}
        loop
        className="w-full"
      >
        {services.map((s, i) => (
          <SwiperSlide key={i}>
            <div className='flex flex-col items-center gap-5 '>
              <p
                className='font-bold text-center text-[#181818]'
                ref={useViewportAnimation()}
                style={{ fontSize: "clamp(16px, 3vw, 30px)" }}
              >
                {s.title}
                <p className={`opacity-0 select-none sm:hidden ${s.title === 'All other channels that are relevant to your business' ? 'hidden' : ''} `}>{s.title}</p>
              </p>
            <div className='max-h-[500px]  xl:max-h-[600px] 2xl:max-h-[50vh] shadow-lg lg:w-[95%] '>
              <img
                src={s.img}
                loading='lazy'
                decoding='async'
                width='651' height='434'
                className='object-cover w-full rounded-lg '
                alt={s.title}
              />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
})

export default Services
