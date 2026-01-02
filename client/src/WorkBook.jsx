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
const FeaturedIn = lazy(() => import('./components/sharedComponents/FeaturedIn'))
const Faq = lazy(() => import('./components/sharedComponents/Faq'))
const Footer = lazy(() => import('./components/sharedComponents/Footer'))
const Testimonials = lazy(() => import('./components/sharedComponents/Testimonials'))

const SlideLayout = ({ children, padding = true }) => (
  <div className='flex w-full h-full  lg:px-5 bg-[#f5f5f5] '>
    <div className={`flex-1 h-full overflow-hidden ${padding ? 'px-5 md:px-10 2xl:pl-[10vw]' : '2xl:px-5 '}`}>
      {children}
    </div>
    <Suspense fallback={<div className='' />}>
      <PrizeCard />
    </Suspense>
  </div>
)

function WorkBook() {
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
    <div className='relative w-full h-full'>
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
        >
          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <Suspense fallback={<div className='w-full h-full' />}>
              <HeroSection />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout padding={false}>
              <Suspense fallback={<div className='w-full' />}>
                <SmallBusiness />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <Fractional />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <Fractional2 />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout padding={false}>
              <Suspense fallback={<div className='w-full ' />}>
                <Services />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <OnBoarding />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <WhyMe />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <BrandsWorkedHeading />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <BrandCarousel />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <Testimonials />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <FeaturedIn />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>

          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <Faq />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>
          <SwiperSlide className='overflow-hidden bg-[#F5F5F5]'>
            <SlideLayout>
              <Suspense fallback={<div className='w-full' />}>
                <Footer />
              </Suspense>
            </SlideLayout>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  )
}

export default WorkBook
