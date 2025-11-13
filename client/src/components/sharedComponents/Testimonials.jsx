import React, { useState, useMemo, useCallback } from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Giacomo from '../../assets/Giacomo.webp'
import DoGBay from '../../assets/Brands/DogNBay.svg'
import Badgervid from '../../assets/Brands/BadgerMap.svg'
import KukrejaVid from '../../assets/Brands/Kukreja.svg'
import AiSummitVid from '../../assets/Brands/AIXSummit.svg'
import RadianceVid from '../../assets/Brands/Barde.svg'
// Import brand logos
import GucciImage from '../../assets/Brands/GUCCI.svg'
import WebSiteSetupImg from '../../assets/Brands/WebSiteSetup.svg'
// import BardeLogo from '../../assets/Brands/Barde.svg'
// import GucciLogo from '../../assets/Brands/GUCCI.svg'
import KananImg from '../../assets/Brands/Kannan.svg'
import OffBeattImg from '../../assets/Brands/OffBEATS.svg'
// import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
import LondonLanesImg from '../../assets/Brands/Lanes.svg'
import JackWIllsImg from '../../assets/Brands/JackWills.svg'
// import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapniImg from '../../assets/Brands/Sapani.svg'
// import BadgerMap from '../../assets/Brands/BadgerMap.svg'
import { useCalendly } from '../../hooks/useCalendly'
import TestimonialCard from './TestimonialCard'

const BRAND_ITEMS = [
  {
    logo: DoGBay,
    name: 'Dock & Bay',
    description: 'When Giacomo gets involved in a project, you can instantly envision a fast outcome with the highest quality standards.',
    work: 'Brand strategy, social media management, and digital marketing campaigns.',
    category: 'Senior Marketing Associate & Operations Lead, Badger Maps',
    type: 'video'
  },
  {
    logo: JackWIllsImg,
    name: 'Jack Wills',
    description: 'Giacomo’s excellent coordination with teams and partners has streamlined processes and delivered major successes, including a Burj Khalifa projection and metro campaigns across Europe.',
    work: 'Social media marketing and influencer collaborations.',
    category: 'EMEA Media Strategist, Guccio Gucci S.P.A.',
    type: 'img'
  },
  {
    logo: RadianceVid,
    name: 'RADIANCE CLINIC',
    description: 'Working with Giacomo is such a joy, experiencing his immense creativity in bring your luxury brand to life in a  way that surpasses all your expectations.',
    work: 'Brand strategy, social media management, and digital marketing campaigns.',
    category: 'Founder, MIKALI SAPANI LIMITED',
    type: 'video'
  },
  {
    logo: GucciImage,
    name: 'Gucci',
    description: 'Giacomo Rotella did a fantastic job as a member of the Marketing team at Badger with his in-depth knowledge of content marketing, strategic messaging and branding.',
    work: 'Part of the Gucci Media team in 2023-2024, managing digital marketing initiatives.',
    category: 'CEO, Badger Maps',
    type: 'img'
  },
  // {
  //   logo: KananImg,
  //   name: 'KANAN INTERNATIONAL',
  //   description: 'Professional services company focused on business optimization.',
  //   work: 'Website optimization, PPC campaigns, and comprehensive social media strategy.',
  //   category: 'Education',
  //   type: 'img'
  // },
  // {
  //   logo: KukrejaVid,
  //   name: 'Kukreja',
  //   description: 'Premium real estate development and property management services.',
  //   work: 'Social media content creation and website development for property marketing.',
  //   category: 'Real Estate',
  //   type: 'video'
  // },
  // {
  //   logo: WebSiteSetupImg,
  //   name: 'WEBSITESETUP',
  //   description: 'Premium real estate development and property management services.',
  //   work: 'Social media content creation and website development for property marketing.',
  //   category: 'Free Online Resource',
  //   type: 'img'
  // },
  // {
  //   logo: LondonLanesImg,
  //   name: 'LANES LONDON',
  //   description: 'Modern lifestyle brand offering contemporary products and services.',
  //   work: 'Digital marketing strategy and brand positioning in competitive markets.',
  //   category: 'Streetwear Fashion',
  //   type: 'img'
  // },
  // {
  //   logo: OffBeattImg,
  //   name: 'The OFFBEAT Site',
  //   description: 'Alternative lifestyle brand promoting unique and unconventional living.',
  //   work: 'SEO strategy, content writing, and social media content development.',
  //   category: 'Lifestyle',
  //   type: 'img'
  // },
  // {
  //   logo: AiSummitVid,
  //   name: 'AI X Summit',
  //   description: 'Annual conference showcasing the latest advancements in artificial intelligence.',
  //   work: 'Event promotion, social media strategy, and content creation.',
  //   category: 'Technology',
  //   type: 'video'
  // },
  // {
  //   logo: SapniImg,
  //   name: 'MIKALI SAPANI',
  //   description: 'Innovative technology solutions and digital transformation services.',
  //   work: 'Brand development and digital marketing for tech-forward audiences.',
  //   category: 'Luxury Fashion',
  //   type: 'img'
  // },
  // {
  //   logo: Badgervid,
  //   name: 'BADGER MAPS',
  //   description: 'Innovative technology solutions and digital transformation services.',
  //   work: 'Brand development and digital marketing for tech-forward audiences.',
  //   category: 'Saas',
  //   type: 'video'
  // }
]

const Testimonials = React.memo(function BrandCarousel() {
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

export default Testimonials