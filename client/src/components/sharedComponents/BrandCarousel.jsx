import React, { useState } from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Giacomo from '../../assets/Giacomo.jpeg'
import { PopupButton } from 'react-calendly'
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

const BrandCarousel = () => {
  const [isHovered, setIsHovered] = useState(null)

  const brands = [
    {
      logo: DoGBay,
      name: 'Dog & Bay',
      description: 'I developed a brand strategy for the eco-friendly quick-dry towels company, performing market research and leading marketing campaigns to build awareness and foster engagement.',
      work: 'Brand strategy, social media management, and digital marketing campaigns.',
      category: 'Luxury Fashion',
      type: 'video'
    },
    {
      logo: JackWIllsImg,
      name: 'Jack Wills',
      description: 'British heritage clothing brand known for its casual and stylish apparel.',
      work: 'Social media marketing and influencer collaborations.',
      category: 'Fashion',
      type: 'img'
    },
    {
      logo: RadianceVid,
      name: 'Barde',
      description: 'Luxury fashion brand specializing in premium accessories and lifestyle products.',
      work: 'Brand strategy, social media management, and digital marketing campaigns.',
      category: 'Luxury Fashion',
      type: 'video'
    },
    {
      logo: GucciImage,
      name: 'Gucci',
      description: 'Italian luxury fashion house known for high-end fashion and accessories.',
      work: 'Part of the Gucci Media team in 2023–2024, managing digital marketing initiatives.',
      category: 'Luxury Fashion',
      type: 'img'
    },
    {
      logo: KananImg,
      name: 'Kannan',
      description: 'Professional services company focused on business optimization.',
      work: 'Website optimization, PPC campaigns, and comprehensive social media strategy.',
      category: 'Professional Services',
      type: 'img'
    },
    {
      logo: KukrejaVid,
      name: 'Kukreja Real Estate',
      description: 'Premium real estate development and property management services.',
      work: 'Social media content creation and website development for property marketing.',
      category: 'Real Estate',
      type: 'video'
    },
    {
      logo: WebSiteSetupImg,
      name: 'Kukreja Real Estate',
      description: 'Premium real estate development and property management services.',
      work: 'Social media content creation and website development for property marketing.',
      category: 'Real Estate',
      type: 'img'
    },
    {
      logo: LondonLanesImg,
      name: 'LANES LONDON',
      description: 'Modern lifestyle brand offering contemporary products and services.',
      work: 'Digital marketing strategy and brand positioning in competitive markets.',
      category: 'Lifestyle',
      type: 'img'
    },
    {
      logo: OffBeattImg,
      name: 'Offbeat Lifestyle',
      description: 'Alternative lifestyle brand promoting unique and unconventional living.',
      work: 'SEO strategy, content writing, and social media content development.',
      category: 'Lifestyle',
      type: 'img'
    },
    {
      logo: AiSummitVid,
      name: 'AI Summit',
      description: 'Annual conference showcasing the latest advancements in artificial intelligence.',
      work: 'Event promotion, social media strategy, and content creation.',
      category: 'Technology',
      type: 'video'
    },
    {
      logo: SapniImg,
      name: 'MIKALI SAPANI',
      description: 'Innovative technology solutions and digital transformation services.',
      work: 'Brand development and digital marketing for tech-forward audiences.',
      category: 'Technology',
      type: 'img'
    },
    {
      logo: Badgervid,
      name: 'BADGER MAPS',
      description: 'Innovative technology solutions and digital transformation services.',
      work: 'Brand development and digital marketing for tech-forward audiences.',
      category: 'Technology',
      type: 'video'
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto py-8" ref={useViewportAnimation()}>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Some of the brands I've worked with
      </h2>
      
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
            slidesPerView: 3,
            spaceBetween: 16,
          },
          
        }}
        className="relative"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div
             
              className="group relative bg-[#f4f4f4]  flex flex-col rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl  w-60 h-[450px] mx-auto border border-gray-200"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Card Header */}
              <div className="bg-[#f4f4f4] p-3 text-center ">
                <h3 className="font-bold text-sm text-gray-800 mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-600">{brand.category}</p>
              </div>

              {/* Card Image/Logo Area */}
              <div className="w-full h-80  flex items-center justify-center px-4 ">
               {brand.type === 'img' ? <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-cover object-top  transition-all duration-300 "
                />
                :
                <video 
                  src={brand.logo} 
                  autoPlay
                  playsInline
                  loop 
                  muted
                  className="w-full h-full object-cover object-top bg-black transition-all duration-300 "
                />}
              </div>

              {/* Card Footer with CTA */}
              <div className="absolute bottom-0 flex justify-between gap-2 z-50 bg-[#f4f4f4] left-0 right-0 p-3">
                 <PopupButton
                           url="https://calendly.com/rgiacomo"
                           rootElement={document.getElementById("root")}
                           text=" LET'S TALK"
                           className="w-fit bg-red-800 hover:bg-red-900 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200"
                         />
                  <div className='relative w-fit h-fit'>
                <img src={Giacomo} className='bg-gray-400 w-10 h-10 rounded-full' alt="" />
                <span className="absolute bottom-0 left-0 flex size-3">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                 <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 text-white p-3 flex flex-col justify-center transition-all duration-300 ${
                  isHovered === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-bold text-sm mb-1">{brand.name}</h3>
                <p className="text-xs text-blue-100 mb-2 leading-tight">
                  {brand.description}
                </p>
                <div className="text-xs text-blue-200">
                  <span className="font-semibold">Work:</span> {brand.work}
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
  )
}

export default BrandCarousel