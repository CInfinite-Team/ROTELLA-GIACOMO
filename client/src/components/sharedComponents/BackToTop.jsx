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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 lg:bottom-6 left-1/2  z-[90] cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
        >
          <div className="bg-black/80 -translate-x-1/2 hover:bg-black backdrop-blur-sm text-white px-6 py-1 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 border border-white/10 group">
            <span className="text-sm font-medium tracking-wide">Back to Top</span>
            <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
