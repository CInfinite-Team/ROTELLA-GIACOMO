import { useTranslation } from 'react-i18next';
import React, { useState, useMemo, useCallback } from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { useViewportAnimation } from '../../components/animations/ScrollAnimations';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const FAQ = React.memo(function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  const categories = ['All', 'Fractional Marketing'];

  const allItems = useMemo(() => [
    {
      category: 'Fractional Marketing',
      question: t('faq_q1'),
      answer: t('faq_a1')
    },
    {
      category: 'Fractional Marketing',
      question: t('faq_q2'),
      answer: t('faq_a2', { price: formatPrice(1000) })
    },
    {
      category: 'Fractional Marketing',
      question: t('faq_q3'),
      answer: t('faq_a3')
    },
    {
      category: 'Fractional Marketing',
      question: t('faq_q4'),
      answer: t('faq_a4')
    },
    {
      category: 'Fractional Marketing',
      question: t('faq_q5'),
      answer: t('faq_a5')
    },
    {
      category: 'Fractional Marketing',
      question: t('faq_q6'),
      answer: t('faq_a6')
    },
  ], [t, formatPrice]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return allItems;
    return allItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory, allItems]);

  const itemsPerView = 4; // Show 4 items at a time

  const toggleFAQ = useCallback((index) => {
    setActiveIndex((current) => (current === index ? null : index));
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerView < filteredItems.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  // Reset startIndex when category changes
  React.useEffect(() => {
    setStartIndex(0);
    setActiveIndex(null);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen items-center justify-center lg:gap-5 sm:px-[15px] xl:px-[70px] py-4 sm:py-10 fade-in" ref={useViewportAnimation()}>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="whitespace-nowrap text-center font-bold mb-4 sm:mb-6"
        style={{ fontSize: "clamp(20px, 3vw, 60px)" }} ref={useViewportAnimation()}>
          {t('faq_title')}
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-3 sm:mb-6 xl:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-red-800 text-white shadow-lg scale-105'
                  : 'border-2 border-red-800 text-red-800 hover:bg-red-50'
              }`}
              style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full flex items-center gap-2 sm:gap-6">
          {/* Up Arrow */}
          <div className='flex flex-col -translate-y-1/2 gap-2'>
            <button 
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 rounded-full w-fit border-2 border-red-800 text-red-800 transition-all ${
              startIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-red-800 hover:text-white cursor-pointer'
            }`}
          >
            <ChevronUp  className=' w-4 h-4 sm:w-6 sm:h-6' />
          </button>

           <button 
            onClick={handleNext}
            disabled={startIndex + itemsPerView >= filteredItems.length}
            className={`p-2 rounded-full w-fit border-2 border-red-800 text-red-800 transition-all ${
              startIndex + itemsPerView >= filteredItems.length ? 'opacity-20 cursor-not-allowed' : 'hover:bg-red-800 hover:text-white cursor-pointer'
            }`}
          >
            <ChevronDown className=' w-4 h-4 sm:w-6 sm:h-6' />
          </button>
          </div>

          <div className="flex-1 overflow-hidden min-h-[300px] sm:min-h-[400px]">
            <motion.div 
              className="space-y-1 md:space-y-2 lg:space-y-4"
              initial={false}
              animate={{ y: 0 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.slice(startIndex, startIndex + itemsPerView).map((faq, index) => (
                  <motion.div 
                    key={faq.question}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`border border-gray-200 rounded-lg shadow-lg bg-red-800 overflow-hidden`}
                  >
                    <button
                      className="flex justify-between items-center w-full p-3 sm:p-4 xl:p-5 text-left rounded-sm transition-colors"
                      onClick={() => toggleFAQ(startIndex + index)}
                    >
                      <span className="font-semibold text-white pr-4"
                      style={{ fontSize: "clamp(12px, 1.2vw, 22px)" }}>{faq.question}</span>
                      <span className="text-2xl transition-transform duration-300 text-white flex-shrink-0" 
                        style={{ transform: activeIndex === (startIndex + index) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <ChevronDown size={20} />
                      </span>
                    </button>
                    
                    <motion.div 
                      initial={false}
                      animate={{ 
                        height: activeIndex === (startIndex + index) ? 'auto' : 0,
                        opacity: activeIndex === (startIndex + index) ? 1 : 0
                      }}
                      className="overflow-hidden bg-red-800 text-white"
                    >
                      <div className="p-3 sm:p-4 lg:p-5 border-t border-red-700/50"
                       style={{ fontSize: "clamp(11px, 1.1vw, 20px)" }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Down Arrow */}
         
        </div>

        {/* Page Indicator */}
        <div className="mt-4 text-gray-500 font-medium text-sm">
          {Math.min(startIndex + 1, filteredItems.length)} - {Math.min(startIndex + itemsPerView, filteredItems.length)} of {filteredItems.length}
        </div>
      </div>
    </div>
  );
});

export default FAQ;