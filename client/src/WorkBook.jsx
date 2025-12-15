import  { useEffect, useState, lazy, Suspense } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
// import Hero from '../MobileHomePage/Hero'
const SmallBusiness = lazy(() => import('./components/MobileHomePage/SmallBusiness'))
const Fractional = lazy(() => import('./components/MobileHomePage/Fractional'))
const Fractional2 = lazy(() => import('./components/MobileHomePage/Fractional2'))
// import StickyEle from '../MobileHomePage/StickyEle'
const Services = lazy(() => import('./components/MobileHomePage/Services'))
const OnBoarding = lazy(() => import('./components/MobileHomePage/OnBoarding'))
const WhyMe = lazy(() => import('./components/MobileHomePage/WhyMe'))
const BrandsWorkedHeading = lazy(() => import('./components/MobileHomePage/BrandsWorkedHeading'))
// import BrandsWorkedWith from '../MobileHomePage/BrandsWorkedWith'
const HeroSection = lazy(() => import('./components/sharedComponents/HeroSection'))
const PrizeCard = lazy(() => import('./components/sharedComponents/PrizeCard'))
const BrandCarousel = lazy(() => import('./components/sharedComponents/BrandCarousel'))
const Faq = lazy(() => import('./components/sharedComponents/Faq'))
const Footer = lazy(() => import('./components/sharedComponents/Footer'))
const Testimonials = lazy(() => import('./components/sharedComponents/Testimonials'))

function WorkBook() {
  const [activeIndex, setActiveIndex] = useState(0)
  // Delay mounting Swiper to improve FCP/LCP/TBT by rendering only first slide initially
  const [enableSwiper, setEnableSwiper] = useState(false)

  useEffect(() => {
    const enable = () => setEnableSwiper(true)
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(enable, { timeout: 800 })
    } else {
      setTimeout(enable, 300)
    }
  }, [])



  return (
    <div className={` ${activeIndex === 0 ? '' : 'flex 2xl:px-[10vw] lg:px-5 '} relative   w-full h-full`}>
      {!enableSwiper ? (
        <div style={{ width: '100%', height: '100dvh' }} className='overflow-hidden'>
          <Suspense fallback={<div className='w-full h-full' />}>
            <HeroSection />
          </Suspense>
        </div>
      ) : (
        <Swiper
          style={{ width: '100%', height: '100dvh' }}
          direction='vertical'
          simulateTouch={false}
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
          preloadImages={false}
          lazy={true}
          modules={[Mousewheel, EffectCreative, Keyboard]}
          className='mobile-vertical-swiper flex-1'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide className='overflow-hidden'>
            <Suspense fallback={<div className='w-full h-full' />}>
              <HeroSection />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className=''>
              <Suspense fallback={<div className='w-full' />}>
                <SmallBusiness />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <Fractional />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <Fractional2 />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden '>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <Services />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <OnBoarding />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <WhyMe />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <BrandsWorkedHeading />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10 '>
              <Suspense fallback={<div className='w-full' />}>
                <BrandCarousel />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10 '>
              <Suspense fallback={<div className='w-full' />}>
                <Testimonials />
              </Suspense>
            </div>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <Faq />
              </Suspense>
            </div>
          </SwiperSlide>
          <SwiperSlide className='overflow-hidden'>
            <div className='px-5 md:px-10'>
              <Suspense fallback={<div className='w-full' />}>
                <Footer />
              </Suspense>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
      {activeIndex !== 0 && (
        <Suspense fallback={<div className='' />}>
          <PrizeCard/>
        </Suspense>
      )}

      {/* Show StickyEle on all slides except the first (Hero) */}
      {/* {activeIndex !== 0 && <StickyEle />} */}


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

export default WorkBook
