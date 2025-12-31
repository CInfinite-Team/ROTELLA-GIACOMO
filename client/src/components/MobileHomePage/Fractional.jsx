import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'

import { useTranslation } from 'react-i18next';

const Fractional = React.memo(function Fractional() {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col bg-[#f5f5f5]  gap-5 min-h-[80vh] lg:min-h-[100vh]  items-center justify-center'>
      
       <div className='w-full '><p className='font-bold whitespace-nowrap slide-up stagger-1  text-center lg:text-left !leading-tight ' ref={useViewportAnimation()}
             style={{ fontSize: "clamp(22px, 3vw, 57px)" }}
>
                      {t('fractional_title_part1')}
                    </p>
       <p className='font-bold whitespace-nowrap  slide-up stagger-1 text-center lg:text-left  !leading-tight   ' ref={useViewportAnimation()}
             style={{ fontSize: "clamp(22px, 3vw, 57px)" }}
>
                      {t('fractional_title_part2')}
                    </p>
      </div>

      <div className='w-full hidden lg:block'>
                    <p className=' whitespace-nowrap font-semibold text-center lg:text-left  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                      {t('fractional_desc_part1')} 
                    </p>

                    <p className=' whitespace-nowrap  font-semibold  text-center lg:text-left slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    {t('fractional_desc_part2')}           
                     </p>
                    <p className=' whitespace-nowrap  font-semibold  text-center lg:text-left slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    {t('fractional_desc_part3')}
                        </p>
                    <p className=' whitespace-nowrap  font-semibold text-center lg:text-left slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    {t('fractional_desc_part4')} 
                        </p>
                    {t('fractional_desc_part5') && <p className=' whitespace-normal lg:max-w-[88%] xl:max-w-[70%] font-semibold text-center lg:text-left slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(12px, 2vw, 40px)" }}>
                    {t('fractional_desc_part5')} 
                        </p>}
                    </div>

      <div className='w-full lg:hidden'>
                    <p className='  font-semibold text-center lg:text-left  slide-up stagger-2 text-[#981818] 2xl:mt-4 ' ref={useViewportAnimation()}
                    style={{ fontSize: "clamp(20px, 2vw, 40px)" }}>
                      {t('fractional_desc_full')}
                        </p>
                    </div>


      
    </div>
  )
})

export default Fractional
