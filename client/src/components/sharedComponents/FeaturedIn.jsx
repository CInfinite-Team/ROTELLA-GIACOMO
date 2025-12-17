import React from 'react'
import BuisnessInsights from '../../assets/FeaturedIn/BuisnessInsights.svg'
import CIG from '../../assets/FeaturedIn/CIG.svg'
import DigitalPudding from '../../assets/FeaturedIn/DigitalPudding.svg'
import IFP from '../../assets/FeaturedIn/IFP.svg'
import Level343 from '../../assets/FeaturedIn/Level343.svg'
import Lobster from '../../assets/FeaturedIn/Lobster.svg'
import StartupNation from '../../assets/FeaturedIn/StartupNation.svg'
import WWS from '../../assets/FeaturedIn/WWS.svg'

const FeaturedIn = () => {
  const logos = [
    { name: 'Business Insights', src: BuisnessInsights },
    { name: 'Startup Nation', src: StartupNation },
      { name: 'IFP', src: IFP },
      { name: 'WWS', src: WWS },
    { name: 'CIG', src: CIG },
    { name: 'Digital Pudding', src: DigitalPudding },
  
    { name: 'Level343', src: Level343 },
    { name: 'Lobster', src: Lobster },
    
    
  ]

  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-10 md:py-20'>
      <div className='text-center mb-10 md:mb-16'>
        <h2 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4'>Featured In</h2>
        <div className='w-20 h-1 bg-black mx-auto'></div>
      </div>
      
      <div className='w-full max-w-7xl mx-auto px-5 md:px-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center'>
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className='w-full h-32 md:h-76 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100'
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className=' object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedIn
