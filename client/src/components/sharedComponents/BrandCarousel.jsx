import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Giacomo from '../../assets/Giacomo.webp'
import DoGBay from '../../assets/Brands/DoGBay.mp4'
import BadgervidDesktop from '../../assets/Brands/BadgerMapVidDesktop.mp4'
import KukrejaVidDesktop from '../../assets/Brands/KukrejaVidDesktop.mp4'
import AiSummitVidDesktop from '../../assets/Brands/AiSummitVidDesktop.mp4'
import RadianceVidDesktop from '../../assets/Brands/RadianceVidDesktop.mp4'
// Import brand logos
import GucciImage from '../../assets/Brands/GucciImage.svg'
import WebSetupVidDesktop from '../../assets/Brands/WebSetupVidDesktop.mp4'
// import BardeLogo from '../../assets/Brands/Barde.svg'
// import GucciLogo from '../../assets/Brands/GUCCI.svg'
import KananVidDesktop from '../../assets/Brands/KananVidDesktop.mp4'
import OffBeattImg from '../../assets/Brands/OffBeattImg.svg'
// import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
import LondonLanesImg from '../../assets/Brands/LondonLanesImg.svg'
import JackWillsDesktop from '../../assets/Brands/JackWillsDesktop.png'
// import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapniImg from '../../assets/Brands/SapniImg.svg'
// import BadgerMap from '../../assets/Brands/BadgerMap.svg'
import { useCalendly } from '../../hooks/useCalendly'

const BrandCarousel = React.memo(function BrandCarousel() {
  const [isHovered, setIsHovered] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const carouselRef = useRef(null)
  const videoRefs = useRef([])
  
  const { openCalendlyPopup } = useCalendly()
  const { t } = useTranslation();

  const brands = useMemo(() => [
  {
    logo: DoGBay,
    name: 'Dock & Bay',
    work: t('brand_dock_bay_work'),
    category: t('brand_retail_manufacturing'),
    type: 'video'
  },
  {
    logo: JackWillsDesktop,
    name: 'Jack Wills',
    work: t('brand_jack_wills_work'), 
    category: t('brand_retail_apparel'),
    type: 'img'
  },
  {
    logo: RadianceVidDesktop,
    name: 'RADIANCE CLINIC',
    work: t('brand_radiance_work'), 
    category: t('brand_healthcare'),
    type: 'video'
  },
  {
    logo: GucciImage,
    name: 'Gucci',
    work: t('brand_gucci_specific_work'),
    category: t('brand_luxury_fashion'),
    type: 'img'
  },
  {
    logo: KananVidDesktop,
    name: 'KANAN INTERNATIONAL',
    work: t('brand_kanan_work'), 
    category: t('brand_education'),
    type: 'video'
  },
  {
    logo: KukrejaVidDesktop,
    name: 'Kukreja',
    work: t('brand_kukreja_work'),
    category: t('brand_real_estate'),
    type: 'video'
  },
  {
    logo: WebSetupVidDesktop,
    name: 'WEBSITESETUP',
    work: t('brand_websitesetup_work'),
    category: t('brand_free_resource'),
    type: 'video'
  },
  {
    logo: LondonLanesImg,
    name: 'LANES LONDON',
    work: t('brand_lanes_work'),
    category: t('brand_streetwear'),
    type: 'img'
  },
  {
    logo: OffBeattImg,
    name: 'The OFFBEAT Site',
    work: t('brand_offbeat_work'),
    category: t('brand_lifestyle'),
    type: 'img'
  },
  {
    logo: AiSummitVidDesktop,
    name: 'AI X Summit',
    work: t('brand_ai_summit_work'),
    category: t('brand_technology'),
    type: 'video'
  },
  {
    logo: SapniImg,
    name: 'MIKALI SAPANI',
    work: t('brand_mikali_work'),
    category: t('brand_luxury_fashion'),
    type: 'img'
  },
  {
    logo: BadgervidDesktop,
    name: 'BADGER MAPS',
    work: t('brand_badge_work'),
    category: t('brand_saas'),
    type: 'video'
  }
], [t])

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
        // Optional: Reset time to 0 if you want them to restart when coming back
        // video.currentTime = 0; 
      }
    });
  }, [activeIndex, isInView]);


  const handleCallClick = useCallback(() => {
    openCalendlyPopup('https://calendly.com/rgiacomo')
  }, [openCalendlyPopup])

  return (
    <div className='w-full relative h-screen' ref={carouselRef}>
    <div className="w-full  absolute top-1/2 -translate-y-1/2 max-w-6xl mx-auto py-8" ref={useViewportAnimation()}>
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Some of the brands I've worked with
      </h2> */}
      
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
       
          1900: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          
        }}
        className="relative  xl:mt-auto pt-10"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div
            //  w-[70%] 2xl:w-[65%] 2xl:h-[90vh] h-[450px] md:h-[560px] lg:h-[80vh] lg:w-[400px] lg:
              className="group relative  xl:mt-auto flex flex-col  overflow-hidden cursor-pointer transition-all duration-300 w-auto max-h-[80vh]  mx-auto "
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Card Header */}
              <div className="  p-3 pb-5  top-0 w-full text-center ">
                <h3 className="font-bold text-sm uppercase text-gray-800 mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-600">{brand.category}</p>
              </div>

              {/* Card Image/Logo Area */}
              <div className="w-full relative rounded-2xl shadow-lg overflow-hidden flex items-center justify-center aspect-[9/16] lg:aspect-[14/9] bg-black">
               {brand.type === 'img' ? (
                 <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-cover md:object-contain md:object-center lg:aspect-[9/16] group-hover:scale-150 object-top transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                 />
                ) : (
                <video 
                  ref={el => videoRefs.current[index] = el}
                  src={brand.logo} 
                  playsInline
                  loop 
                  muted
                  preload="none"
                  className={`w-full h-full object-contain lg:object-cover lazy-video group-hover:scale-150 object-center bg-black transition-all duration-300 `}
                />)}
                 {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 text-white p-3 flex flex-col justify-center transition-all duration-300 ${
                  isHovered === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-bold text-sm lg:text-2xl text-center mb-1 xl:mb-5"
                 style={{ fontSize: "clamp(26px, 1.8vw, 37px)" }}>{brand.name}</h3>
                <p className=" font-medium text-blue-100 text-center  mb-2 xl:mb-4 leading-normal "
       style={{ fontSize: "clamp(22px, 2vw, 68px)" }}>
        {/* {t('brand_work_label')} {brand.work} */}
                 Digital marketing strategy and student acquisition campaigns. Digital marketing strategy and student acquisition campaigns.Digital marketing strategy and student acquisition campaigns.Digital marketing strategy and student.
                </p>
                {/* <div className="text-xs lg:text-lg text-blue-200"
                style={{ fontSize: "clamp(20px, 1vw, 30px)" }}>
                  <span className="font-semibold">Work:</span> {brand.work}
                </div> */}
              </div>
              </div>

              {/* Card Footer with CTA */}
              {/* <div className=" bottom-0  flex justify-between items-center gap-2 z-50 left-0 right-0 pt-5 p-3">
                 <button
                           type="button"
                           onClick={handleCallClick}
                           className="w-fit h-fit bg-red-800 hover:bg-red-900 text-white text-xs 2xl:text-xl font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                         >
                           LET'S TALK
                         </button>
                  <div className='relative w-fit h-fit'>
                <img src='/Giacomo.webp'  loading="lazy"
                  decoding="async" className='bg-gray-400 w-14 2xl:w-24 2xl:h-24 object-cover object-top h-14 rounded-full' alt="Rotella Giacomo"  width="96" height="96" />
                <span className="absolute bottom-2 left-0 flex size-3">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                 <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                </span>
                </div>
              </div> */}

             
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default BrandCarousel
