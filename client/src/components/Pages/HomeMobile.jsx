import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Hero from '../MobileHomePage/Hero'
import SmallBusiness from '../MobileHomePage/SmallBusiness'
import Fractional from '../MobileHomePage/Fractional'
import Fractional2 from '../MobileHomePage/Fractional2'
import StickyEle from '../MobileHomePage/StickyEle'
import Services from '../MobileHomePage/Services'
import OnBoarding from '../MobileHomePage/OnBoarding'
import WhyMe from '../MobileHomePage/WhyMe'
import BrandsWorkedHeading from '../MobileHomePage/BrandsWorkedHeading'
import BrandsWorkedWith from '../MobileHomePage/BrandsWorkedWith'
import Faq from '../sharedComponents/Faq' 
import Footer from '../sharedComponents/Footer'
import FeaturedIn from '../sharedComponents/FeaturedIn'
import Testimonials from '../sharedComponents/Testimonials'

function HomeMobile() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='lg:hidden relative'>
      <Swiper
        style={{ width: '100%', height: '100dvh' }}
        direction='vertical'
        simulateTouch={true}
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={true}
        speed={2000}
        keyboard={{ enabled: true }}
        effect='creative'
        creativeEffect={{
          prev: { translate: [0, '-100%', -200] },
          next: { translate: [0, '100%', 0] },
        }}
        modules={[Mousewheel, EffectCreative, Keyboard]}
        className='mobile-vertical-swiper'
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide className='overflow-hidden'>
          <Hero />
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className=''>
            <SmallBusiness />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <Fractional />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <Fractional2 />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <Services />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <OnBoarding />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <WhyMe />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <BrandsWorkedHeading />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <BrandsWorkedWith />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <Testimonials />
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10 h-full'>
            <FeaturedIn />
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <Faq />
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <div className='px-5 md:px-10'>
            <Footer />
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Show StickyEle on all slides except the first (Hero) */}
      {activeIndex !== 0 && <StickyEle />}


          {/* <Hero />
          <div className='px-5 md:px-10'>
           <SmallBusiness />
           <Fractional />
           <Fractional2 />
            <Services />
            <OnBoarding />
             <WhyMe />
             <BrandsWorkedHeading />
             <BrandsWorkedWith />
             <StickyEle />
             </div> */}


    </div>
  )
}

export default HomeMobile
