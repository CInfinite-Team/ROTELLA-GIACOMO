import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Giacomo from '../../assets/Giacomo.webp'
import { PopupButton } from 'react-calendly'
import RisinVenture from '../../assets/Brands/RisinVenturesMob.png'

import DoGBay from '../../assets/Brands/DoGBay.mp4'
import Badgervid from '../../assets/Brands/Badgervid.mp4'
import KukrejaVid from '../../assets/Brands/KukrejaVid.mp4'
import AiSummitVid from '../../assets/Brands/AiSummitVid.mp4'
import RadianceVid from '../../assets/Brands/RadianceVid.mp4'
// Import brand logos
import GucciImage from '../../assets/Brands/GucciImage.svg'
import WebSetupVid from '../../assets/Brands/WebSetupVid.mp4'
// import BardeLogo from '../../assets/Brands/Barde.svg'
// import GucciLogo from '../../assets/Brands/GUCCI.svg'
import KananVid from '../../assets/Brands/KananVid.mp4'
import OffBeattImg from '../../assets/Brands/OffBeattImg.png'
// import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
import LondonLanesImg from '../../assets/Brands/LondonLanesImg.svg'
import JackWIllsImg from '../../assets/Brands/JackWIllsImg.svg'
// import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapniImg from '../../assets/Brands/SapniImg.svg'
function BrandsWorkedWith() {


     const [isHovered, setIsHovered] = useState(null)
     const [activeIndex, setActiveIndex] = useState(0)
     const [isInView, setIsInView] = useState(false)
     const carouselRef = useRef(null)
     const videoRefs = useRef([])
     const { t } = useTranslation();
    
   const brands = useMemo(() => [
     {
       logo: DoGBay,
       name: 'DOCK & BAY',
       work: t('brand_dock_bay_work'),
       category: t('brand_retail_manufacturing'),
       type: 'video'
     },
     {
       logo: Badgervid,
       name: 'BADGER MAPS',
       work: t('brand_badge_work'),
       category: t('brand_saas'),
       type: 'video'
     },
     {
       logo: GucciImage,
       name: 'GUCCI',
       work: <Trans i18nKey="brand_gucci_specific_work" components={{ 1: <a href="https://www.luxury-method.com/" target='_blank' rel="noopener noreferrer" className='underline ' /> }} />, 
       category: t('brand_luxury_fashion'),
       type: 'img'
     },
     {
       logo: RisinVenture, 
       name: 'RISIN VENTURES',
       work: t('brand_risin_work'),
       category: t('brand_venture_capital'),
       type: 'img'
     },
     {
       logo: KukrejaVid,
       name: 'KUKREJA INFRASTRUCTURES',
       work: t('brand_kukreja_work'),
       category: t('brand_real_estate'),
       type: 'video'
     },
     {
       logo: RadianceVid,
       name: 'RADIANCE CLINIC',
       work: t('brand_radiance_work'),
       category: t('brand_healthcare'),
       type: 'video'
     },
     {
       logo: WebSetupVid,
       name: 'WEBSITESETUP',
       work: t('brand_websitesetup_work'),
       category: t('brand_free_resource'),
       type: 'video'
     },
     {
       logo: AiSummitVid,
       name: 'AIX SUMMIT',
       work: t('brand_ai_summit_work'),
       category: t('brand_technology'),
       type: 'video'
     },
     {
       logo: KananVid,
       name: 'KANAN INTERNATIONAL',
       work: t('brand_kanan_work'),
       category: t('brand_education'),
       type: 'video'
     },
     {
       logo: OffBeattImg,
       name: 'OFFBEAT STUDIOS',
       work: t('brand_offbeat_work'),
       category: t('brand_lifestyle'),
       type: 'img'
     },
     {
       logo: SapniImg,
       name: 'MIKALI SAPANI',
       work: <Trans i18nKey="brand_mikali_work" components={{ 1: <a href="https://www.luxury-method.com/" target='_blank' rel="noopener noreferrer" className='underline ' /> }} />,
       category: t('brand_luxury_fashion'),
       type: 'img'
     },
     {
       logo: LondonLanesImg,
       name: 'LANES LONDON',
       work: t('brand_lanes_work'),
       category: t('brand_streetwear'),
       type: 'img'
     },
     {
       logo: JackWIllsImg,
       name: 'JACK WILLS',
       work: t('brand_jack_wills_work'),
       category: t('brand_retail_apparel'),
       type: 'img'
     }
   ], [t]);

    // Track if carousel is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% visibility required to auto-play
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Manage video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex && isInView) {
        // Play active video if carousel is in view
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Auto-play was prevented:", error);
          });
        }
      } else {
        // Pause all other videos or if carousel out of view
        video.pause();
      }
    });
  }, [activeIndex, isInView]);

  return (
    <div className='h-[100dvh] w-full sm:min-h-[75vh] sm:pt-10 sm:h-auto' ref={carouselRef}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={false}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          1900: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          
        }}
        className="relative h-full sm:h-auto"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} >
            <div
             
              className="group relative bg-[#f4f4f4]  flex flex-col    overflow-hidden cursor-pointer transition-all duration-300  h-full w-full sm:h-[75vh] sm:aspect-[7/16] sm:mx-auto"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => setIsHovered(isHovered === index ? null : index)}
            >
              {/* Card Header */}
              <div className="  p-3 pt-1 pb-6  top-0 w-full  text-center ">
                <h3 className="font-bold text-sm text-gray-800 mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-600">{brand.category}</p>
              </div>

              {/* Card Image/Logo Area */}
              <div className="w-full h-full lg:h-[82%]  flex items-center justify-center  ">
               {brand.type === 'img' ? <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                   loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover sm:object-contain  object-top  transition-all duration-300 "
                />
                :
                <video 
                  ref={el => videoRefs.current[index] = el}
                  src={brand.logo}
                  playsInline
                  loop 
                  muted
                 
                  className={`w-full h-full object-cover sm:object-contain   ${brand.name==='BADGER MAPS' ? 'object-center' :'object-top'}  bg-black transition-all duration-300 `}
                />}
              </div>

          

              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 text-white p-3 flex flex-col justify-center transition-all duration-300 ${
                  isHovered === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-bold text-xl md:text-3xl text-center ">{brand.name}</h3>
                 <p className="font-medium text-blue-200 text-center mb-1.5 md:mb-3 uppercase tracking-wider text-xs md:text-sm">
                   {brand.category}
                 </p>
                 <p className="text-lg md:text-3xl text-center text-blue-100 mb-2 leading-tight">
                   {brand.work}
                 </p>
                {/* <div className="md:text-lg lg:text-xs text-blue-200">
                  <span className="font-semibold">Work:</span> {brand.work}
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom hidden absolute left-0 top-1/2 transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom hidden absolute right-0 top-1/2 transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
    <div className="swiper-pagination-custom flex justify-center !text-black mt-6 space-x-2"></div>
      </Swiper>
    </div>
  )
}

export default BrandsWorkedWith
