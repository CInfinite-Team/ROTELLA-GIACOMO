import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/Hide based on custom event from Swiper components
  useEffect(() => {
    const handleVisibilityChange = (e) => {
      setIsVisible(e.detail);
    };

    window.addEventListener('toggleBackToTop', handleVisibilityChange);
    return () => {
      window.removeEventListener('toggleBackToTop', handleVisibilityChange);
    };
  }, []);

  // Dispatch event to tell Swiper to scroll to top
  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent('scrollToTop'));
  };

  return (
    <AnimatePresence className=" cursor-pointer">
      {isVisible && (
        <motion.div
          className="fixed bottom-0 right-1/2 group  z-[90] cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
        >
          <div className="relative !cursor-pointer translate-x-1/2  flex justify-center items-end">
            <svg 
              width="200" 
              viewBox="0 0 7892 1023" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black transition-colors cursor-pointer duration-300 group-hover:text-gray-900 drop-shadow-2xl"
            >
              <g clipPath="url(#clip0_187_6)">
                <path d="M2814.83 229.667C4331.86 -403.133 5585.09 407.713 6232.5 1022.58H159C1091.87 1022.58 1953.87 588.804 2814.83 229.667Z" fill="currentColor"/>
                <path d="M5078.17 229.082C3561.14 -403.718 2307.91 407.128 1660.5 1022H7734C6801.13 1022 5939.13 588.219 5078.17 229.082Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_187_6">
                  <rect width="7892" height="1023" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div className="absolute cursor-pointer  text-white">
              <ChevronUp size={24} className="transition-transform  cursor-pointer group-hover:-translate-y-1 duration-300" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
