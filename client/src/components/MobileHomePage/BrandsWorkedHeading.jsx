import React from 'react';
import { motion } from 'framer-motion';
import { ArrowBigDown } from 'lucide-react';

const BrandsWorkedHeading = React.memo(function BrandsWorkedHeading() {
  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-screen items-center justify-center">
      <h2
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(25px, 8vw, 57px)' }}
      >
        Brands I've worked with
      </h2>

      <motion.button
        aria-label="Scroll down"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <ArrowBigDown size={150} fill="#911c28" color="#911c28" />
      </motion.button>
    </div>
  );
});

export default BrandsWorkedHeading;
