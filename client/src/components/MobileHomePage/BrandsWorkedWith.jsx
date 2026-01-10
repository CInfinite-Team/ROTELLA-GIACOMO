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
import ClippedText from '../sharedComponents/ClippedText';

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

      // Play if it's the active slide, in view, and "hovered" (expanded)
      const shouldPlay = index === activeIndex && isInView && isHovered === index;

      if (shouldPlay) {
        video.currentTime = 0; // Start from beginning
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // console.log("Auto-play was prevented:", error);
          });
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex, isInView, isHovered]);

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
              className={`group relative bg-[#00050f] flex flex-col overflow-hidden cursor-pointer transition-all duration-300 h-full w-full sm:h-[75vh] sm:aspect-[9/16] sm:mx-auto rounded-none sm:rounded-2xl`}
            >
              
              {/* Top Media Section (Expands on Hover) */}
              <div 
                className={`w-full relative bg-black transition-all duration-500 ease-in-out ${isHovered === index ? 'h-full' : 'h-[50%]'}`}
                onClick={() => setIsHovered(isHovered === index ? null : index)}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
               {brand.type === 'img' ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
               ) : (
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={brand.logo}
                    playsInline
                    loop 
                    muted
                     preload="metadata"
                    onLoadedMetadata={(e) => e.target.currentTime = 1}
                    className={`w-full h-full object-cover ${brand.name==='BADGER MAPS' ? 'object-center' :'object-top'} bg-black`}
                  />
               )}
              </div>

              {/* Bottom Info Section (Collapses on Hover) */}
              <div className={`w-full bg-[#00050f] p-5 flex flex-col text-left transition-all duration-500 ease-in-out overflow-hidden ${isHovered === index ? 'h-0 opacity-0 p-0' : ' opacity-100'}`}>
                  <h3 className="font-bold text-xl uppercase mb-1 text-white leading-tight" style={{ fontSize: "clamp(12px, min(6.5vw, 2.2vh), 16px)" }}>{brand.name}</h3>
                  <p className="text-gray-400 text-[10px] font-medium tracking-wider uppercase mb-3">{brand.category}</p>
                  
                  <ClippedText 
                    text={brand.work}
                    className="mb-4"
                    textClassName="text-gray-300 leading-relaxed line-clamp-"
                    style={{ fontSize: "clamp(12px, min(8.5vw, 2.2vh), 16px)" }}
                  />

                  <div className="flex gap-3 mt-auto mb-1">
                    <button className="flex-1 py-2.5 rounded-full bg-white text-[#0b1120] font-bold text-[10px] hover:bg-gray-200 transition-colors text-center shadow-lg uppercase tracking-wide">
                        {t('visit_project')}
                    </button>
                    {/* Placeholder click handler for demo */}
                    <button onClick={() => window.open('https://calendly.com/rgiacomo', '_blank')} className="flex-1 py-2.5 rounded-full border border-white text-white font-bold text-[10px] hover:bg-white hover:text-[#0b1120] transition-colors text-center shadow-lg uppercase tracking-wide">
                        {t('hero_btn_book')}
                    </button>
                  </div>
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
