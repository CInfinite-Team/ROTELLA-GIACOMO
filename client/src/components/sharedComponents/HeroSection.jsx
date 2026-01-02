import React, { useCallback, useMemo } from 'react';
// import Giacomo from '../../assets/Giacomo.webp'
// Import brand logos
import BardeLogo from '../../assets/Brands/Barde.svg'
import Risin from '../../assets/Brands/Risin.png'
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
import CountUp from 'react-countup';
import { useTranslation, Trans } from 'react-i18next';
import { useCurrency } from '../../context/CurrencyContext';


// A simple placeholder for the brand logos.
const LogoPlaceholder = ({ className = '', children }) => (
  <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 ${className}`}>
    {children}
  </div>
);


  const brands = [
    {
      logo: DogNBay,
      name: 'DOCK & BAY',
    },
    {
      logo: BadgerMap,
      name: 'BADGER MAPS',
    },
    {
      logo: GucciLogo,
      name: 'GUCCI',
    },
    {
      logo: Risin, 
      name: 'RISIN VENTURES',
    },
    {
      logo: KukrejaLogo,
      name: 'KUKREJA INFRASTRUCTURES',
    },
    {
      logo: BardeLogo, 
      name: 'RADIANCE CLINIC',
    },
    {
      logo: WebSiteSetup,
      name: 'WEBSITESETUP',
    },
    {
      logo: AIXSummit,
      name: 'AIX SUMMIT',
    },
    {
      logo: KannanLogo,
      name: 'KANAN INTERNATIONAL',
    },
    {
      logo: OffbeatsLogo,
      name: 'OFFBEAT STUDIOS',
    },
    {
      logo: SapaniLogo,
      name: 'MIKALI SAPANI',
    },
    {
      logo: LanesLogo,
      name: 'LANES LONDON',
    },
    {
      logo: JackWills,
      name: 'JACK WILLS',
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


  const { t } = useTranslation();
  const { currentPrice, discountPrice, symbol } = useCurrency(); 

  return (
    <div className="bg-[#f5f5f5] min-h-screen lg:max-h-[860px] flex items-center justify-center">
      <div className="relative w-full   p-8 lg:p-12 overflow-hidden">
        
    

        <div className="flex flex-col w-full lg:flex-row justify-between items-center lg:items-start relative z-10">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-[60%] 2xl:gap-5 order-2 lg:order-1 text-center flex flex-col items-center lg:items-start lg:text-left">
            <p 
              ref={nameRef}
              className="text-sm 2xl:text-lg tracking-widest text-gray-600 mb-3 ml-1 font-medium slide-up"
            >
              ROTELLA GIACOMO
            </p>
              <h1 
                ref={headingRef}
                className="text-xl md:text-5xl 2xl:text-6xl font-bold text-gray-800 !leading-tight slide-up"
             style={{ fontSize: "clamp(32px, min(3.5vw, 7.5vh), 65px)" }} >
                {t('hero_role')}{' '}
                <br />
                <span >{t('hero_for')} <span className="text-[#911c28]">{t('hero_target')}</span></span>
              </h1>

              <p 
                ref={descriptionRef}
                className="mt-2 md:mt-3 text-lg md:text-2xl 2xl:text-4xl whitespace-nowrap text-gray-700 max-w-[500px] 2xl:max-w-[700px] slide-up"
            style={{ fontSize: "clamp(18px, min(2vw, 4.5vh), 40px)" }}  >
                {t('hero_multiline_1')}
                <br /> {t('hero_multiline_2')}{' '}
                <span className="text-[#911c28] font-semibold">{t('hero_multiline_3')}</span>
              </p>

<span 
  ref={priceRef}
  className='text-xl 2xl:text-3xl 2xl:mt-6 text-[#911c28] font-bold items-center flex gap-1 mt-2 xl:mt-4 slide-up'
>
  <p className="font-bold text-2xl 2xl:text-4xl text-[#911c28]">
    {symbol}
    <CountUp
      start={discountPrice}
      end={currentPrice}
      duration={6}
      separator=","
      enableScrollSpy
      scrollSpyOnce
    />
    
  </p>
  {t('hero_price_suffix')}
</span>


            <div ref={buttonRef} className="slide-up cursor-pointer">
              <button
                type="button"
                onClick={handleBookCall}
                className="mt-2 xl:mt-4 cursor-pointer 2xl:mt-8 bg-[#911c28] hover:bg-[#a73535] text-white text-sm md:text-base 2xl:text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300"
              >
                {t('hero_btn_book')}
              </button>
            </div>
            
          

          </div>

          {/* Right Content Section */}
          <div className="w-fit mt-5 md:mt-0 order-1 lg:order-2 pb-4 lg:pb-0 flex flex-col items-center ">
            <div 
              ref={imageRef}
              className="w-[min(400px,90vw,50vh)] h-[min(400px,90vw,50vh)] 2xl:w-[min(600px,90vw,55vh)] 2xl:h-[min(600px,90vw,55vh)] rounded-full overflow-hidden shadow-2xl border-4 border-[#911c28] slide-right"
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


      
<div className="mt-3 xl:mt-[clamp(12px,4vh,40px)] w-full relative overflow-hidden" 
     style={{ 
       WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
       maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
     }}>
  <div className="flex items-center space-x-10 animate-scroll">
    {brandItems.map((brand, index) => (
      <div key={index} className=" flex-shrink-0">
        <img
          className="w-[min(144px,25vw,18vh)] 2xl:w-[min(174px,30vw,25vh)] p-3 object-center object-contain "
          src={brand.logo}
          alt={brand.name}
          decoding="async"
  fetchPriority="high"
  loading="eager"
        
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
