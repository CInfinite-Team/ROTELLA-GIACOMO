import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { useTranslation, Trans } from 'react-i18next';
import { Highlight } from '../animations/hero-highlight'

const Fractional2 = React.memo(function Fractional2() {
  const { t } = useTranslation();
  return (
    
                <div className='relative bg-[#f5f5f5]  z-1 min-h-[80vh] lg:min-h-[100vh] flex flex-col gap-5 md:gap-8 items-center justify-center'>
                 
                  <p className='font-bold whitespace-nowrap w-full text-center lg:text-left text-4xl md:text-4xl  slide-up stagger-1 !leading-tight ' ref={useViewportAnimation()}
                          style={{ fontSize: "clamp(22px, 3vw, 107px)" }}
>
                    {t('fractional2_title_part1')}
                    <br /> {t('fractional2_title_part2')}
                    <br /> {t('fractional2_title_part3')}
                  </p>
    
                  <p className=' w-full xl:block hidden font-semibold whitespace-nowrap text-center lg:text-left text-[#181818] slide-up stagger-2' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(14px, 2.5vw, 40px)" }}>
                    <Trans i18nKey="fractional2_desc_full" components={{ 1: <Highlight className=' text-white leading-tight ' /> }} />
                  </p>
                             
                  <p className=' xl:hidden w-full font-semibold  text-center lg:text-left text-[#181818] slide-up stagger-2' ref={useViewportAnimation()}
                   style={{ fontSize: "clamp(20px, 2.5vw, 40px)" }}>
                    <Trans i18nKey="fractional2_desc_mobile" components={{ 1: <Highlight className=' text-white leading-tight ' /> }} />
                  </p>
                             

    
                </div>
  )
})

export default Fractional2
