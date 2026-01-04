import React, { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Giacomo from '../../assets/Giacomo.webp'
// import DoGBay from '../../assets/Brands/DogNBay.svg'
import Badgervid from '../../assets/Brands/BadgerMap.svg'
// import KukrejaVid from '../../assets/Brands/Kukreja.svg'
// import AiSummitVid from '../../assets/Brands/AIXSummit.svg'
// import RadianceVid from '../../assets/Brands/Barde.svg'
// Import brand logos
import GucciImage from '../../assets/Brands/GUCCI.svg'
// import WebSiteSetupImg from '../../assets/Brands/WebSiteSetup.svg'
// import BardeLogo from '../../assets/Brands/Barde.svg'
// import GucciLogo from '../../assets/Brands/GUCCI.svg'
// import KananImg from '../../assets/Brands/Kannan.svg'
// import OffBeattImg from '../../assets/Brands/OffBEATS.svg'
// import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
// import LondonLanesImg from '../../assets/Brands/Lanes.svg'
// import JackWIllsImg from '../../assets/Brands/JackWills.svg'
// import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapniImg from '../../assets/Brands/Sapani.svg'
// import BadgerMap from '../../assets/Brands/BadgerMap.svg'
import { useCalendly } from '../../hooks/useCalendly'
import TestimonialCard from './TestimonialCard'

const Testimonials = React.memo(function BrandCarousel() {
  const [isHovered, setIsHovered] = useState(null)
  const { openCalendlyPopup } = useCalendly()
  const { t } = useTranslation();

  const brands = useMemo(() => [
  {
    logo: Badgervid,
    name: 'BADGER MAPS',
    description: t('brand_badger_review'),
    work: t('brand_badge_work'),
    category: t('brand_badger_cat'),
    type: 'video'
  },
  {
    logo: GucciImage,
    name: 'Gucci',
    description: t('brand_gucci_review'),
    work: t('brand_gucci_work'),
    category: t('brand_gucci_cat'),
    type: 'img'
  },
  {
    logo: Badgervid,
    name: 'BADGER MAPS',
    description: t('brand_badger_ceo_review'),
    work: t('brand_badger_ceo_work'),
    category: t('brand_badger_ceo_cat'),
    type: 'img'
  },
  {
    // logo: RadianceVid,
    // name: 'RADIANCE CLINIC',
    logo: SapniImg,
    name: 'MIKALI SAPANI',
    description: t('brand_mikali_review'),
    work: t('brand_mikali_work'),
    category: t('brand_mikali_cat'),
    type: 'video'
  },
  
], [t])
  const handleCallClick = useCallback(() => {
    openCalendlyPopup('https://calendly.com/rgiacomo')
  }, [openCalendlyPopup])

  return (
    <div className='w-full relative bg-[#F5F5F5] h-screen'>
    <div className="w-full  absolute top-1/2 -translate-y-1/2 max-w-6xl mx-auto py-8" ref={useViewportAnimation()}>
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Some of the brands I've worked with
      </h2> */}
      
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        noSwipingSelector=".select-text"
        simulateTouch={false}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        loop
        autoplay={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          1340: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          1900: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          
        }}
        className="relative pt-10"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            
            <TestimonialCard
           
              Logo={brand.logo}
              Review={brand.description}
              Name={brand.name}
              Position={brand.category}
            />

            </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center !text-black mt-6 space-x-2"></div>
      </Swiper>
    </div>
    </div>
  )
})

export default Testimonials