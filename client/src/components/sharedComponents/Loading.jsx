import React from 'react';
import { motion } from 'motion/react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f5]">
            <div className="relative flex flex-col items-center justify-center">
                <svg
                    width="140"
                    height="140"
                    viewBox="0 0 140 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                >
                    {/* Rotating Circle Ring */}
                    <motion.circle
                        cx="70"
                        cy="70"
                        r="60"
                        stroke="#911c28"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeOpacity="0.2"
                        initial={{ pathLength: 1 }} // Static faint ring
                    />
                    
                    <motion.circle
                        cx="70"
                        cy="70"
                        r="60"
                        stroke="#911c28"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, rotate: -90 }}
                        animate={{ pathLength: 1, rotate: -90 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    
                    {/* Text Drawing Effect */}
                    <motion.text
                        x="50%"
                        y="52%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        fontSize="42" 
                        fontWeight="700"
                        fontFamily="'Montserrat', sans-serif"
                        fill="transparent"
                        stroke="#911c28"
                        strokeWidth="1.5"
                        initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse", 
                            repeatDelay: 0.5
                        }}
                        style={{ letterSpacing: '0.05em' }}
                    >
                        RG
                    </motion.text>
                    
                    {/* Text Fill Fading In (Optional: uncomment if solid fill preferred after draw) */}
                    {/* 
                    <motion.text
                        x="50%"
                        y="52%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        fontSize="42" 
                        fontWeight="700"
                        fontFamily="'Montserrat', sans-serif"
                        fill="#911c28"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.5
                        }}
                        style={{ letterSpacing: '0.05em' }}
                    >
                        RG
                    </motion.text>
                    */}
                </svg>
            </div>
        </div>
    );
};

export default Loading;
