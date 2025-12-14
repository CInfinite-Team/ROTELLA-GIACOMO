import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { useTranslation, Trans } from 'react-i18next';
import { Highlight } from '../animations/hero-highlight'
const OnBoarding = React.memo(function OnBoarding() {
  const { t } = useTranslation();
  return (
    <div className='flex bg-[#f5f5f5]  flex-col min-h-screen  justify-center gap-4 md:gap-10'>
       <h2 className='  font-bold  whitespace-nowrap fade-in text-center lg:text-left' ref={useViewportAnimation()}
       style={{ fontSize: "clamp(24px, 3.5vw, 87px)" }}>
                    <Trans i18nKey="onboarding_title" components={{ 1: <Highlight className=' text-white leading-tight ' /> }} />
                  </h2>
      
      
                <ol className=' space-y-1 2xl:space-y-10 font-medium mb-10'>
                  <li className=' font-semibold slide-left  text-center lg:text-left text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(20px, 2.5vw, 40px)" }}>
                    {t('onboarding_step1')}
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' /> */}
                  <li className=' font-semibold slide-right text-center lg:text-left text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(20px, 2.5vw, 40px)" }}>
                    {t('onboarding_step2')}
                  </li>
                  {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' /> */}
                  <li className=' font-semibold slide-left text-center lg:text-left  text-[#181818] ' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(20px, 2.5vw, 40px)" }}>
                    {t('onboarding_step3')}
                  </li>
                 
                  </ol>
    </div>
  )
})

export default OnBoarding
