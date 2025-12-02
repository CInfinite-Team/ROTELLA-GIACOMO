import React, { useState, useMemo, useCallback } from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Giacomo from '../../assets/Giacomo.webp'
import DoGBay from '../../assets/Brands/DoGBay.mp4'
import Badgervid from '../../assets/Brands/Badgervid.mp4'
import KukrejaVid from '../../assets/Brands/KukrejaVid.mp4'
import AiSummitVid from '../../assets/Brands/AiSummitVid.mp4'
import RadianceVid from '../../assets/Brands/RadianceVid.mp4'
// Import brand logos
import GucciImage from '../../assets/Brands/GucciImage.svg'
import WebSiteSetupImg from '../../assets/Brands/WebSiteSetupImg.svg'
// import BardeLogo from '../../assets/Brands/Barde.svg'
// import GucciLogo from '../../assets/Brands/GUCCI.svg'
import KananImg from '../../assets/Brands/KananImg.svg'
import OffBeattImg from '../../assets/Brands/OffBeattImg.svg'
// import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
import LondonLanesImg from '../../assets/Brands/LondonLanesImg.svg'
import JackWIllsImg from '../../assets/Brands/JackWIllsImg.svg'
// import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapniImg from '../../assets/Brands/SapniImg.svg'
// import BadgerMap from '../../assets/Brands/BadgerMap.svg'
import { useCalendly } from '../../hooks/useCalendly'
const BRAND_ITEMS = [
  {
    logo: DoGBay,
    name: 'Dock & Bay',
    // description: 'I developed a brand strategy for the eco-friendly quick-dry towels company, performing market research and leading marketing campaigns to build awareness and foster engagement.',
    work: 'Brand strategy, social media management, and digital marketing campaigns.',
    category: 'Retail and Manufacturing',
    type: 'video'
  },
  {
    logo: JackWIllsImg,
    name: 'Jack Wills',
    // description: 'British heritage clothing brand known for its casual and stylish apparel.',
    work: 'Social media marketing and influencer collaborations.',
    category: 'Retail Apparel',
    type: 'img'
  },
  {
    logo: RadianceVid,
    name: 'RADIANCE CLINIC',
    // description: 'Luxury fashion brand specializing in premium accessories and lifestyle products.',
    work: 'Brand strategy, social media management, and digital marketing campaigns.',
    category: 'Healthcare',
    type: 'video'
  },
  {
    logo: GucciImage,
    name: 'Gucci',
    // description: 'Italian luxury fashion house known for high-end fashion and accessories.',
    work: 'Part of the Gucci Media team in 2023–2024, managing digital marketing initiatives.',
    category: 'Luxury Fashion',
    type: 'img'
  },
  {
    logo: KananImg,
    name: 'KANAN INTERNATIONAL',
    // description: 'Professional services company focused on business optimization.',
    work: 'Website optimization, PPC campaigns, and comprehensive social media strategy.',
    category: 'Education',
    type: 'img'
  },
  {
    logo: KukrejaVid,
    name: 'Kukreja',
    // description: 'Premium real estate development and property management services.',
    work: 'Social media content creation and website development for property marketing.',
    category: 'Real Estate',
    type: 'video'
  },
  {
    logo: WebSiteSetupImg,
    name: 'WEBSITESETUP',
    // description: 'Premium real estate development and property management services.',
    work: 'Social media content creation and website development for property marketing.',
    category: 'Free Online Resource',
    type: 'img'
  },
  {
    logo: LondonLanesImg,
    name: 'LANES LONDON',
    // description: 'Modern lifestyle brand offering contemporary products and services.',
    work: 'Digital marketing strategy and brand positioning in competitive markets.',
    category: 'Streetwear Fashion',
    type: 'img'
  },
  {
    logo: OffBeattImg,
    name: 'The OFFBEAT Site',
    // description: 'Alternative lifestyle brand promoting unique and unconventional living.',
    work: 'SEO strategy, content writing, and social media content development.',
    category: 'Lifestyle',
    type: 'img'
  },
  {
    logo: AiSummitVid,
    name: 'AI X Summit',
    // description: 'Annual conference showcasing the latest advancements in artificial intelligence.',
    work: 'Event promotion, social media strategy, and content creation.',
    category: 'Technology',
    type: 'video'
  },
  {
    logo: SapniImg,
    name: 'MIKALI SAPANI',
    // description: 'Innovative technology solutions and digital transformation services.',
    work: 'Brand development and digital marketing for tech-forward audiences.',
    category: 'Luxury Fashion',
    type: 'img'
  },
  {
    logo: Badgervid,
    name: 'BADGER MAPS',
    // description: 'Innovative technology solutions and digital transformation services.',
    work: 'Brand development and digital marketing for tech-forward audiences.',
    category: 'Saas',
    type: 'video'
  }
]

const BrandCarousel = React.memo(function BrandCarousel() {
  const [isHovered, setIsHovered] = useState(null)
  const { openCalendlyPopup } = useCalendly()
  const brands = useMemo(() => BRAND_ITEMS, [])
  const handleCallClick = useCallback(() => {
    openCalendlyPopup('https://calendly.com/rgiacomo')
  }, [openCalendlyPopup])

  return (
    <div className='w-full relative h-screen'>
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
            slidesPerView: 2,
            spaceBetween: 14,
          },
          1900: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          
        }}
        className="relative pt-10"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div
            //  w-[70%] 2xl:w-[65%] 2xl:h-[90vh] h-[450px] md:h-[560px] lg:h-[80vh] lg:w-[400px] lg:
              className="group relative  flex flex-col  overflow-hidden cursor-pointer transition-all duration-300 w-auto max-h-[80vh] aspect-[7/16] mx-auto "
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Card Header */}
              <div className="  p-3 pb-5  top-0 w-full text-center ">
                <h3 className="font-bold text-sm uppercase text-gray-800 mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-600">{brand.category}</p>
              </div>

              {/* Card Image/Logo Area */}
              <div className="w-full h-full relative rounded-2xl shadow-lg overflow-hidden flex items-center justify-center ">
               {brand.type === 'img' ? (
                 <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-cover group-hover:scale-150 object-top  transition-all duration-300 "
                  loading="lazy"
                  decoding="async"
                 />
                ) : (
                <video 
                  src={brand.logo} 
                  autoPlay
                  playsInline
                  loop 
                  muted
                  preload="none"
                  className={`w-full h-full object-cover lazy-video group-hover:scale-150 ${brand.name==='BADGER MAPS' ? 'object-center' :'object-top'}  bg-black transition-all duration-300 `}
                />)}
                 {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 text-white p-3 flex flex-col justify-center transition-all duration-300 ${
                  isHovered === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-bold text-sm lg:text-2xl text-center mb-1 xl:mb-5"
                 style={{ fontSize: "clamp(26px, 1.8vw, 37px)" }}>{brand.name}</h3>
                <p className="text-xs font-medium text-blue-100 text-center lg:text-xl mb-2 xl:mb-4 leading-"
       style={{ fontSize: "clamp(22px, 1.8vw, 30px)" }}>
                  Work: {brand.work}
                </p>
                {/* <div className="text-xs lg:text-lg text-blue-200"
                style={{ fontSize: "clamp(20px, 1vw, 30px)" }}>
                  <span className="font-semibold">Work:</span> {brand.work}
                </div> */}
              </div>
              </div>

              {/* Card Footer with CTA */}
              <div className=" bottom-0  flex justify-between items-center gap-2 z-50 left-0 right-0 pt-5 p-3">
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
              </div>

             
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-10 cursor-pointer">
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