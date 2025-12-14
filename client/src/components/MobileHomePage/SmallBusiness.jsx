import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import Pic1 from '../../assets/pics/3.jpg'
import { useTranslation, Trans } from 'react-i18next';
const SmallBusiness = React.memo(function SmallBusiness() {
  const { t } = useTranslation();
  return (
    <div className='min-h-screen bg-[#f5f5f5] gap-5 flex flex-col  justify-center items-start px-[4vw]'>
       <div>
        <h1  className=' font-bold hidden sm:block slide-up text-center lg:text-left md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        <Trans i18nKey="small_business_text_part1" components={{ 1: <span className='text-[#911c28] ' /> }} />
        </h1>
       <h1  className=' font-bold hidden sm:block  text-center lg:text-left  slide-up md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        {t("small_business_text_part2")}
        </h1>
        </div>
       <div>
        <h1  className=' font-bold sm:hidden slide-up md:whitespace-nowrap !leading-snug  text-center lg:text-left   ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        <Trans i18nKey="small_business_text_full" components={{ 1: <span className='text-[#911c28] ' /> }} />
        </h1>
      
        </div>

          <img src={Pic1} className=' shadow-xl max-h-[500px] xl:max-h-[600px] 2xl:max-h-[50vh] lg:w-[95%] object-cover rounded-lg ' loading='lazy' decoding='async' width='663' height='442' alt='Small business marketing illustration' />

    </div>
  )
})

export default SmallBusiness
