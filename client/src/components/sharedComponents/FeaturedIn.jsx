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
import MMN from '../../assets/FeaturedIn/MMN.svg'
import MSN from '../../assets/FeaturedIn/MSN.svg'
import Libero from '../../assets/FeaturedIn/Libero.svg'
import ForCreators from '../../assets/FeaturedIn/ForCreators.svg'
import AWS from '../../assets/FeaturedIn/AWS.svg'
import Notion from '../../assets/FeaturedIn/Notion.svg'
import SSM from '../../assets/FeaturedIn/SSM.svg'

const FeaturedIn = () => {
  const logos = [
    { name: 'Notion', src: Notion },
    { name: 'SSM', src: SSM },
    { name: 'Libero', src: Libero },
    { name: 'MSN', src: MSN },
    { name: 'MMN', src: MMN },
    { name: 'For Creators', src: ForCreators },
    { name: 'AWS', src: AWS },
    { name: 'Business Insiders', src: BuisnessInsights },
    { name: 'Startup Nation', src: StartupNation },
      { name: 'IFP', src: IFP },
      { name: 'WWS', src: WWS },
    { name: 'CIG', src: CIG },
    { name: 'Digital Pudding', src: DigitalPudding },
    { name: 'Level343', src: Level343 },
    { name: 'Lobster', src: Lobster },
    
    
  ]

  return (
    <div className='w-full bg-[#F5F5F5] h-full flex flex-col justify-center items-center py-[clamp(16px,5vh,80px)]'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center '
      >
        <h2 className='text-[clamp(24px,min(4vw,5vh),48px)] font-bold text-gray-800 mb-[clamp(8px,2vh,16px)]'>Featured In</h2>
        {/* <div className='w-20 h-1 bg-black mx-auto'></div> */}
      </motion.div>
      
      <div className='w-full max-w-7xl mx-auto px-5'>
        <div className='grid grid-cols-3 xl:grid-cols-4 gap-[clamp(5px,min(3vw,3vh),48px)] items-center justify-items-center'>
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-full h-[clamp(30px,min(15vw,10vh),150px)] flex items-center justify-center p-[clamp(8px,1vh,16px)]  transition-all duration-300 opacity-70 hover:opacity-100'
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
