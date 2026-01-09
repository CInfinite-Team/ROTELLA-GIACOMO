import React ,{useEffect, useRef, useCallback} from 'react'
import {  useViewportAnimation } from '../animations/ScrollAnimations'
// import Giacomo from '../../assets/Giacomo.webp'
import { useCalendly } from '../../hooks/useCalendly'
import { PopupButton } from "react-calendly";

import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../context/CurrencyContext';

const PrizeCard = React.memo(function PrizeCard() {
  const { t } = useTranslation();
  const { formatPrice, currentPrice } = useCurrency();
  const calendlyContainerRef = useRef(null)
  const { initCalendlyInlineWidgets } = useCalendly()

  const ensureCalendly = useCallback(() => {
    initCalendlyInlineWidgets()
  }, [initCalendlyInlineWidgets])

  useEffect(() => {
    const node = calendlyContainerRef.current
    if (!node) {
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      ensureCalendly()
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ensureCalendly()
          observer.disconnect()
        }
      })
    }, { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0.1 })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [ensureCalendly])

  return (
    <>
       {/* <div className='z-50 flex-col  flex   mt-6 lg:mt-0  px-5 pl-5 gap-4  '> */}
               {/* Right Sidebar (Card) */}
        <div className='z-50 flex-col flex items-center justify-center  pr-4 gap-4 '>
          <div className='max-w-sm w-full rounded-2xl shadow-xl bg-white p-4 md:p-6 border border-gray-100'>
            {/* Header / Price Section */}
            <div className='flex flex-col items-start w-full mb-3'>
              <div className='flex items-baseline gap-1'>
                <h2 className='font-extrabold text-gray-900 tracking-tight' style={{ fontSize: "clamp(24px, min(4vw, 5vh), 40px)" }}>
                  {formatPrice(currentPrice)}<span className='text-gray-500 font-medium' style={{ fontSize: "clamp(12px, min(1.5vw, 2vh), 14px)" }}>{t('hero_price_suffix')}</span>
                </h2>
              </div>
              <span className='text-gray-500 font-medium my-2' style={{ fontSize: "clamp(12px, min(1.5vw, 2vh), 13px)" }}> {t('hero_price_comparison')}</span>
              
              <p className='text-gray-600 leading-snug font-medium' style={{ fontSize: "clamp(12px, min(1.5vw, 2vh), 16px)" }}>
                {t('prize_card_description')} <span className='font-bold text-[#911c28]'>{t('hero_target')}</span>
              </p>
            </div>

            {/* List Points */}
            <div className='space-y-3 mb-4'>
              <ul className='space-y-2'>
                {[1, 2, 3, 4, 5].map((num) => (
                  <li key={num} className='flex items-start gap-2 text-gray-700' style={{ fontSize: "clamp(12px, min(1.5vw, 2vh), 16px)" }}>
                    <div className='flex-shrink-0 w-4 h-4 rounded-full bg-[#f3e6e8] flex items-center justify-center mt-0.5'>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#911c28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="leading-tight">{t(`prize_point_${num}`)}</span>
                  </li>
                ))}
              </ul>
              
              {/* Comparison Text */}
              <div className='pt-1'>
                 {/* <p className="text-[10px] md:text-xs text-gray-400 font-medium italic leading-tight">
                    {t('hero_price_comparison')}
                  </p> */}
              </div>
            </div>

            {/* Button */}
            <div className='w-full'>
              <PopupButton
                url="https://calendly.com/rgiacomo"
                rootElement={document.getElementById("root")}
                text={t("hero_btn_book")}
                className='w-full bg-[#911c28] hover:bg-[#a73535] text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300'
                styles={{ fontSize: "clamp(14px, min(2vw, 2.5vh), 18px)" }}
              />
            </div>
          </div>
           <div className='text-sm text-[#911c28]  font-medium whitespace-nowrap flex-wrap leading-relaxed flex justify-center mt-2'> 
                  {t('or_write_me')} {'  '}
                  <a
                    href='mailto:rotellagiacomo@gmail.com'
                    className='underline cursor-pointer pl-1 font-semibold text-[#911c28] '
                  >
                    rotellagiacomo@gmail.com
                  </a>
                  , or{' '}
                  <a
                    href='https://wa.me/393920034695'
                    className='underline font-semibold cursor-pointer text-[#911c28] pl-1'
                  >
          +39 3920034695                 
           </a></div>
        </div>
              {/* </div> */}
    </>
  )
})

export default PrizeCard
