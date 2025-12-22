import React from 'react';
import { motion } from 'motion/react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f5]">
            <motion.div
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ 
                    opacity: [0.5, 1, 0.5], 
                    scale: [0.8, 1, 0.8] 
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex flex-col items-center gap-4"
            >
                {/* Minimal animated circle/logo placeholder */}
                <div className="relative">
                     <div className="w-16 h-16 border-2 border-gray-300 rounded-full"></div>
                     <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-[#911c28] rounded-full"
                     />
                </div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 font-semibold tracking-[0.2em] text-sm uppercase"
                >
                    Loading
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Loading;
