import React, { useCallback, useMemo } from 'react';
// import Giacomo from '../../assets/Giacomo.webp'
// Import brand logos
import BardeLogo from '../../assets/Brands/Barde.svg'
import GucciLogo from '../../assets/Brands/GUCCI.svg'
import KannanLogo from '../../assets/Brands/Kannan.svg'
import KukrejaLogo from '../../assets/Brands/Kukreja.svg'
import LanesLogo from '../../assets/Brands/Lanes.svg'
import OffbeatsLogo from '../../assets/Brands/OFFBEATS.svg'
import SapaniLogo from '../../assets/Brands/Sapani.svg'
import BadgerMap from '../../assets/Brands/BadgerMap.svg'
import WebSiteSetup from '../../assets/Brands/WebSiteSetup.svg'
import AIXSummit from '../../assets/Brands/AIXSummit.svg'
import DogNBay from '../../assets/Brands/DogNBay.svg'
import JackWills from '../../assets/Brands/JackWills.svg'
import { useViewportAnimation, useParallax } from '../animations/ScrollAnimations';
import { useCalendly } from '../../hooks/useCalendly';

// A simple placeholder for the brand logos.
const LogoPlaceholder = ({ className = '', children }) => (
  <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 ${className}`}>
    {children}
  </div>
);


  const brands = [
    {
      logo: BardeLogo,
      name: 'Barde',
      description: 'Luxury fashion brand specializing in premium accessories and lifestyle products.',
      work: 'Brand strategy, social media management, and digital marketing campaigns.'
    },
    {
      logo: GucciLogo,
      name: 'Gucci',
      description: 'Italian luxury fashion house known for high-end fashion and accessories.',
      work: 'Part of the Gucci Media team in 2023–2024, managing digital marketing initiatives.'
    },
    {
      logo: KannanLogo,
      name: 'Kannan',
      description: 'Professional services company focused on business optimization.',
      work: 'Website optimization, PPC campaigns, and comprehensive social media strategy.'
    },
    {
      logo: KukrejaLogo,
      name: 'Kukreja Real Estate',
      description: 'Premium real estate development and property management services.',
      work: 'Social media content creation and website development for property marketing.'
    },
    {
      logo: LanesLogo,
      name: 'LANES LONDON',
      description: 'Modern lifestyle brand offering contemporary products and services.',
      work: 'Digital marketing strategy and brand positioning in competitive markets.'
    },
    {
      logo: OffbeatsLogo,
      name: 'Offbeat Lifestyle',
      description: 'Alternative lifestyle brand promoting unique and unconventional living.',
      work: 'SEO strategy, content writing, and social media content development.'
    },
    {
      logo: SapaniLogo,
      name: 'MIKALI SAPANI',
      description: 'Innovative technology solutions and digital transformation services.',
      work: 'Brand development and digital marketing for tech-forward audiences.'
    },
    {
      logo: BadgerMap,
      name: 'BADGER MAPS',
      description: 'Innovative technology solutions and digital transformation services.',
      work: 'Brand development and digital marketing for tech-forward audiences.'
    },
    {
      logo: WebSiteSetup,
      name: 'WEBSITE SETUP',
      description: 'Comprehensive website development and digital presence solutions.',
      work: 'Website design, development, and digital marketing integration.'
    },
    {
      logo: AIXSummit,
      name: 'AIX SUMMIT',
      description: 'Leading conference on AI and digital transformation.',
      work: 'Event promotion, speaker coordination, and digital marketing.'
    },
    {
      logo: DogNBay,
      name: 'DOG N BAY',
      description: 'Pet care and grooming services with a focus on quality and convenience.',
      work: 'Brand development, social media marketing, and customer engagement strategies.'
    },
    {
      logo: JackWills,
      name: 'Jack Wills',
      description: 'British fashion retailer known for its casualwear and accessories.',
      work: 'Brand development, social media marketing, and customer engagement strategies.'
    }

  ]

const duplicatedBrands = [...brands, ...brands];

const HeroSection = React.memo(function HeroSection() {
  const nameRef = useViewportAnimation({ 
    animationClass: 'animate-in',
    once: false 
  });
  const headingRef = useViewportAnimation({ 
    animationClass: 'animate-in stagger-1',
    once: false 
  });
  const descriptionRef = useViewportAnimation({ 
    animationClass: 'animate-in stagger-2',
    once: false 
  });
  const priceRef = useViewportAnimation({ 
    animationClass: 'animate-in stagger-3',
    once: false 
  });
  const buttonRef = useViewportAnimation({ 
    animationClass: 'animate-in stagger-4',
    once: false 
  });
  const imageRef = useViewportAnimation({ 
    animationClass: 'animate-in stagger-1',
    once: false 
  });
  const imageParallaxRef = useParallax({ speed: 0.15, axis: 'y', maxTranslate: 30 });
  const { openCalendlyPopup } = useCalendly();

  const handleBookCall = useCallback(() => {
    openCalendlyPopup('https://calendly.com/rgiacomo');
  }, [openCalendlyPopup]);

  const brandItems = useMemo(() => duplicatedBrands, []);


  return (
    <div className="bg-[#f4f4f4] min-h-screen lg:max-h-[860px] flex items-center justify-center">
      <div className="relative w-full   p-8 lg:p-12 overflow-hidden">
        
    

        <div className="flex flex-col w-full lg:flex-row justify-between items-center lg:items-start relative z-10">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-[60%] 2xl:gap-5]4 order-2 lg:order-1 text-center flex flex-col items-center lg:items-start lg:text-left">
            <p 
              ref={nameRef}
              className="text-sm 2xl:text-lg tracking-widest text-gray-600 mb-3 ml-1 font-medium slide-up"
            >
              ROTELLA GIACOMO
            </p>
            <h1 
              ref={headingRef}
              className="text-xl md:text-5xl 2xl:text-6xl  font-bold text-gray-800 !leading-tight slide-up"
            >
              Fractional Marketing Consultant{' '}
              <br />
              <span >for <span className="text-[#911c28]">Small Businesses</span></span>
            </h1>

            <p 
              ref={descriptionRef}
              className="mt-4 md:mt-5 text-lg md:text-2xl 2xl:text-4xl  text-gray-700 max-w-[500px] 2xl:max-w-[700px] slide-up"
            >
              The power of a full-service marketing agency at a{' '}
              <span className="text-[##911c28] font-semibold">fraction of the cost.</span>
            </p>

            <span 
              ref={priceRef}
              className='text-xl 2xl:text-3xl 2xl:mt-6 text-gray-700 font-medium flex gap-2 mt-4 slide-up'
            >
              Starting from <p className="font-bold text-[#911c28]">$1000/month</p>
            </span>

            <div ref={buttonRef} className="slide-up">
              <button
                type="button"
                onClick={handleBookCall}
                className="mt-4 2xl:mt-8 bg-[#911c28] hover:bg-[#a73535] text-white text-sm md:text-base 2xl:text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300"
              >
                BOOK A CALL WITH ME
              </button>
            </div>
            
          

          </div>

          {/* Right Content Section */}
          <div className="w-fit mt-5 md:mt-0 order-1 lg:order-2 pb-4 lg:pb-0 flex flex-col items-center ">
            <div 
              ref={imageRef}
              className="w-64 h-64 md:w-96 md:h-96 xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-full overflow-hidden shadow-2xl border-4 border-white slide-right"
            >
              <div ref={imageParallaxRef}>
               <img
  src='/Giacomo.webp'
  srcSet='/Giacomo.webp 300w, /Giacomo.webp 400w, /Giacomo.webp 500w'
  sizes="(max-width: 768px) 300px, (max-width: 1280px) 400px, 500px"
  alt="Rotella Giacomo"
  className="w-full h-full object-cover object-top"
  loading="eager"
  decoding="async"
   fetchPriority="high"
  width="500"
  height="500"
/>

              </div>
            </div>
          </div>

          

        </div>


      
<div className="mt-10 w-full overflow-hidden ">
  <div className="flex items-center  space-x-10  animate-scroll">
    {brandItems.map((brand, index) => (
      <div key={index} className="rounded-full flex-shrink-0">
        <img
          className="w-44 h-44 2xl:h-56 2xl:mt-8 2xl:w-56 p-3 object-contain rounded-full"
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          width="176"
          height="176"
        />
      </div>
    ))}
  </div>
</div>



      </div>
    </div>
  );
});

export default HeroSection;
