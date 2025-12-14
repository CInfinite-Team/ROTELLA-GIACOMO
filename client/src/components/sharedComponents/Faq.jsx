import { useTranslation } from 'react-i18next';
import React, { useState, useMemo, useCallback } from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { useViewportAnimation } from '../../components/animations/ScrollAnimations';
import {ChevronDown} from 'lucide-react';
const FAQ = React.memo(function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  const items = useMemo(() => [
    {
      question: t('faq_q1'),
      answer: t('faq_a1')
    },
    {
      question: t('faq_q2'),
      answer: t('faq_a2', { price: formatPrice(1000) })
    },
    {
      question: t('faq_q3'),
      answer: t('faq_a3')
    },
    {
      question: t('faq_q4'),
      answer: t('faq_a4')
    },
    {
      question: t('faq_q5'),
      answer: t('faq_a5')
    },
    {
      question: t('faq_q6'),
      answer: t('faq_a6')
    },
  ], [t, formatPrice]);

  const toggleFAQ = useCallback((index) => {
    setActiveIndex((current) => (current === index ? null : index));
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center lg:gap-5 px-[35px] xl:px-[70px] py-10 fade-in" ref={useViewportAnimation()}>
      <h2 className="whitespace-nowrap text-center font-bold mb-2 2xl:mb-4"
      style={{ fontSize: "clamp(16px, 2.5vw, 60px)" }} ref={useViewportAnimation()}>
        {t('faq_title')}
      </h2>
      
      <div className=" space-y-1 md:space-y-2 lg:space-y-4">
        {items.map((faq, index) => (
          <div 
            key={faq.question} 
            className={`border border-gray-200 rounded-lg shadow-lg bg-red-800   overflow-hidden slide-up stagger-${index % 5 + 1}`}
            ref={useViewportAnimation()}
          >
            <button
              className="flex justify-between items-center w-full p-2 xl:p-5 text-left  rounded-sm transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold  text-white"
              style={{ fontSize: "clamp(8px, 1vw, 22px)" }}>{faq.question}</span>
              <span className="text-2xl transition-transform duration-300 text-white" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <ChevronDown/>
              </span>
            </button>
            
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: activeIndex === index ? '500px' : '0px', opacity: activeIndex === index ? 1 : 0 }}
            >
              <div className="p-2 lg:p-5 bg-red-800  text-white"
               style={{ fontSize: "clamp(8px, 1vw, 22px)" }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default FAQ;