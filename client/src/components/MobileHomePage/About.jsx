import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { useTranslation } from 'react-i18next';
import BlurText from '../animations/BlurText'

const About = React.memo(function About() {
  const { t } = useTranslation();
  return (
    <div className='flex bg-[#f5f5f5] h-[90vh] w-full md:px-4 justify-center items-center overflow-hidden relative  '>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 w-full max-w-screen-xl mx-auto items-center h-full justify-center'>
        
         {/* Image Section */}
        <div className='w-full lg:w-5/12 flex justify-center lg:justify-end fade-in lg:pr-8' ref={useViewportAnimation()}>
             <div className="relative hidden lg:block h-[clamp(200px,40vh,500px)] w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                 <img 
                   src='/Giacomo.webp' 
                   alt="Giacomo Rotella" 
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
             </div>
             <div className="relative lg:hidden h-[clamp(100px,30vh,500px)] w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                 <img 
                   src='/Giacomo.webp' 
                   alt="Giacomo Rotella" 
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
             </div>
        </div>

        {/* Content Section */}
        <div className='w-full lg:w-7/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10'>
            {/* Label */}
            <p className='text-[#911c28] font-bold tracking-[0.2em] text-xs md:text-sm mb-3 fade-in' ref={useViewportAnimation()}>
              {t('about_label')}
            </p>

            {/* Headline */}
            <div className='mb-4 lg:mb-6 w-full flex justify-center lg:justify-start'>
              <BlurText
                  text={t('about_headline')}
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="font-bold text-gray-900 leading-[1.1] max-w-lg lg:max-w-xl"
                  style={{ fontSize: "clamp(20px, min(4vw, 5vh), 56px)" }}
              />
            </div>

            {/* Stat & Body */}
            <div className='flex flex-col gap-3 items-center lg:gap-5 w-full'>
                <h3 className='font-bold text-[#911c28] whitespace-nowrap fade-in' ref={useViewportAnimation()}
                style={{ fontSize: "clamp(18px, min(2.5vw, 4vh), 32px)" }}>
                    {t('about_stat')}
                </h3>

                <p className='font-medium text-gray-600 max-w-lg lg:max-w-xl fade-in leading-relaxed' ref={useViewportAnimation()}
                style={{ fontSize: "clamp(13px, min(1.2vw, 2.2vh), 18px)" }}>
                    {t('about_body')}
                </p>
            </div>
        </div>

      </div>
    </div>
  )
})

export default About
