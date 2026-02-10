import React from 'react'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import Pic1 from '../../assets/pics/3.jpg'
import { useTranslation, Trans } from 'react-i18next';
const SmallBusiness = React.memo(function SmallBusiness() {
  const { t } = useTranslation();
  const part3Ref = useViewportAnimation();
  return (
    <div className='min-h-screen bg-[#f5f5f5] gap-5 flex flex-col  justify-center items-center lg:items-start px-[4vw]'>
       <h2>
        <p  className=' font-bold hidden xl:block slide-up text-center lg:text-left md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 2vw, 67px)" }}
  >
        <Trans i18nKey="small_business_text_part1" components={{ 1: <span className='text-[#911c28] ' /> }} />
        </p>
       <p className=' font-bold hidden xl:block  text-center lg:text-left  slide-up md:whitespace-nowrap !leading-snug  ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 2vw, 67px)" }}
  >
        {t("small_business_text_part2")}
        </p>
       {t("small_business_text_part3", { defaultValue: "" }) && <p  className=' font-bold hidden xl:block  text-center lg:text-left  slide-up md:whitespace-nowrap !leading-snug  ' ref={part3Ref}
        style={{ fontSize: "clamp(17px, 2vw, 67px)" }}
  >
        {t("small_business_text_part3")}
        </p>}
        </h2>
       <h2>
        <p  className=' font-bold xl:hidden slide-up !leading-snug  text-center lg:text-left   ' ref={useViewportAnimation()}
        style={{ fontSize: "clamp(17px, 1.7vw, 67px)" }}
  >
        <Trans i18nKey="small_business_text_full" components={{ 1: <span className='text-[#911c28] ' /> }} />
        </p>
      
        </h2>

          <img src={Pic1} className=' shadow-xl max-h-[500px] xl:max-h-[600px] 2xl:max-h-[50vh] lg:w-[95%] object-cover rounded-lg ' loading='lazy' decoding='async' width='663' height='442' alt='Small business marketing illustration' />

    </div>
  )
})

export default SmallBusiness
