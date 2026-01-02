import React from 'react'
import { motion } from 'motion/react'
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
    <div className='w-full bg-[#F5F5F5] h-full flex flex-col justify-center items-center py-4 md:py-20'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-4 md:mb-16'
      >
        <h2 className='text-3xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4'>Featured In</h2>
        <div className='w-20 h-1 bg-black mx-auto'></div>
      </motion.div>
      
      <div className='w-full max-w-7xl mx-auto px-5 md:px-10'>
        <div className='grid grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-12 items-center justify-items-center'>
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-full h-20 md:h-76 flex items-center justify-center p-2 md:p-4  transition-all duration-300 opacity-70 hover:opacity-100'
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className='w-full h-full object-contain'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedIn
