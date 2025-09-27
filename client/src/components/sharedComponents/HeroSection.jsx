import React from 'react';
import Giacomo from '../../assets/Giacomo.jpeg'
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
import { PopupButton } from "react-calendly";

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

export default function HeroSection() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen lg:max-h-[860px] flex items-center justify-center">
      <div className="relative w-full   p-8 lg:p-12 overflow-hidden">
        
    

        <div className="flex flex-col w-full lg:flex-row justify-between items-center lg:items-start relative z-10">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center flex flex-col items-center lg:items-start lg:text-left">
            <p className="text-sm tracking-widest text-gray-600 mb-4">ROTELLA GIACOMO</p>
            <h1 className="text-xl md:text-5xl font-bold text-gray-800 !leading-tight ">
              Fractional Marketing Consultant{' '}
              <br />
              <span >for <span className="text-[#911c28]">Small Businesses</span></span>
            </h1>

            <p className="mt-4 md:mt-8 text-lg md:text-4xl  text-gray-700 max-w-[500px] ">
              The power of a full-service marketing agency at a{' '}
              <span className="text-[##911c28] font-semibold">fraction of the cost.</span>
            </p>

           
             <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="BOOK A CALL WITH ME"
            className="mt-8 bg-[#911c28] hover:bg-[#a73535] text-white text-sm md:text-base font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300"
          />
            
          

          </div>

          {/* Right Content Section */}
          <div className="w-fit mt-5 md:mt-0 order-1 lg:order-2 pb-4 lg:pb-0 flex flex-col items-center ">
            <p className="text-2xl font-bold text-[#911c28] mb-8">$1000/month</p>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={Giacomo}
                alt="Rotella Giacomo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          

        </div>


      
<div className="mt-16 w-full overflow-hidden ">
  <div className="flex items-center  space-x-10  animate-scroll">
    {brands.concat(brands).map((brand, index) => (
      <div key={index} className="rounded-full flex-shrink-0">
        <img
          className="w-28 h-28 p-3 object-contain rounded-full"
          src={brand.logo}
          alt={brand.name}
        />
      </div>
    ))}
  </div>
</div>



      </div>
    </div>
  );
}
