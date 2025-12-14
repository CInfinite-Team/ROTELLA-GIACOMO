import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Giacomo from '../../assets/Giacomo.webp'
import { PopupButton } from 'react-calendly'
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
import OffBeattImg from '../../assets/Brands/OffBeattImg.svg'
// import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
import LondonLanesImg from '../../assets/Brands/LondonLanesImg.svg'
import JackWIllsImg from '../../assets/Brands/JackWIllsImg.svg'
// import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapniImg from '../../assets/Brands/SapniImg.svg'
function BrandsWorkedWith() {


     const [isHovered, setIsHovered] = useState(null)
     const { t } = useTranslation();
    
   const brands = useMemo(() => [
     {
       logo: DoGBay,
       name: 'Dock & Bay',
      //  description: 'I developed a brand strategy for the eco-friendly quick-dry towels company, performing market research and leading marketing campaigns to build awareness and foster engagement.',
       work: t('brand_badge_work'), // Reusing similar work desc if matches, or use generic
       category: t('brand_retail_manufacturing'),
       type: 'video'
     },
     {
       logo: JackWIllsImg,
       name: 'Jack Wills',
      //  description: 'British heritage clothing brand known for its casual and stylish apparel.',
       work: t('brand_jackwills_work'), // New key for Jack Wills specific work
       category: t('brand_retail_apparel'),
       type: 'img'
     },
     {
       logo: RadianceVid,
       name: 'RADIANCE CLINIC',
      //  description: 'Luxury fashion brand specializing in premium accessories and lifestyle products.',
       work: t('brand_mikali_work'),
       category: t('brand_healthcare'),
       type: 'video'
     },
     {
       logo: GucciImage,
       name: 'Gucci',
      //  description: 'Italian luxury fashion house known for high-end fashion and accessories.',
       work: t('brand_gucci_work'), // "Part of Gucci Media team..."
       category: t('brand_luxury_fashion'),
       type: 'img'
     },
     {
       logo: KananVid,
       name: 'KANAN INTERNATIONAL',
      //  description: 'Professional services company focused on business optimization.',
       work: t('brand_kanan_work'), // New key for Kanan specific work
       category: t('brand_education'),
       type: 'video'
     },
     // ... I will cut short the list to the ones needing translation or map all.
     // To be exhaustive, I should map all.
     // { ... Kukreja ... }
     {
       logo: KukrejaVid,
       name: 'Kukreja',
      //  description: 'Premium real estate development and property management services.',
       work: t('brand_social_website_creation'), // New key
       category: t('brand_real_estate'),
       type: 'video'
     },
     {
       logo: WebSetupVid,
       name: 'WEBSITESETUP',
      //  description: 'Premium real estate development and property management services.',
       work: t('brand_social_website_creation'),
       category: t('brand_free_resource'),
       type: 'video'
     },
     // ... LANES LONDON
     {
       logo: LondonLanesImg,
       name: 'LANES LONDON',
      //  description: 'Modern lifestyle brand offering contemporary products and services.',
       work: t('brand_digital_strategy'), // New Key
       category: t('brand_streetwear'),
       type: 'img'
     },
     {
       logo: OffBeattImg,
       name: 'The OFFBEAT Site',
      //  description: 'Alternative lifestyle brand promoting unique and unconventional living.',
       work: t('brand_seo_content'), // New Key
       category: t('brand_lifestyle'),
       type: 'img'
     },
     {
       logo: AiSummitVid,
       name: 'AI X Summit',
      //  description: 'Annual conference showcasing the latest advancements in artificial intelligence.',
       work: t('brand_event_promo'), // New Key
       category: t('brand_technology'),
       type: 'video'
     },
     {
       logo: SapniImg,
       name: 'MIKALI SAPANI',
      //  description: 'Innovative technology solutions and digital transformation services.',
       work: t('brand_mikali_work'),
       category: t('brand_luxury_fashion'),
       type: 'img'
     },
     {
       logo: Badgervid,
       name: 'BADGER MAPS',
      //  description: 'Innovative technology solutions and digital transformation services.',
       work: t('brand_badge_work'),
       category: t('brand_saas'),
       type: 'video'
     }
   ], [t]);

  return (
    <div className='min-h-[75vh]  pt-10'>
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
            slidesPerView: 1,
            spaceBetween: 14,
          },
          1900: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          
        }}
        className="relative"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} >
            <div
             
              className="group relative bg-[#f4f4f4]  flex flex-col    overflow-hidden cursor-pointer transition-all duration-300  h-[75vh] aspect-[7/16]  mx-auto "
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
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
                  className="w-full h-full object-cover group-hover:scale-150 object-top  transition-all duration-300 "
                />
                :
                <video 
                  src={brand.logo} 
                  autoPlay
                  playsInline
                  loop 
                  muted
                 
                  className={`w-full h-full object-cover  group-hover:scale-150 ${brand.name==='BADGER MAPS' ? 'object-center' :'object-top'}  bg-black transition-all duration-300 `}
                />}
              </div>

          

              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 text-white p-3 flex flex-col justify-center transition-all duration-300 ${
                  isHovered === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* <h3 className="font-bold text-xl md:text-3xl text-center mb-1">{brand.name}</h3> */}
                 <p className="text-2xl md:text-3xl text-center text-blue-100 mb-2 leading-tight">
                  {t('brand_work_label')} {brand.work}
                 </p>
                {/* <div className="md:text-lg lg:text-xs text-blue-200">
                  <span className="font-semibold">Work:</span> {brand.work}
                </div> */}
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

export default BrandsWorkedWith
