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
                    
                    <defs>
                        <mask id="rg-mask">
                            <g transform="translate(-5, 0)">
                                {/* Letter R Mask Path */}
                                <motion.path
                                    d="M 50 54 V 86 M 50 54 H 60 C 72 54 72 70 60 70 H 50 M 58 70 L 70 86"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 0.5
                                    }}
                                />
                                
                                {/* Letter G Mask Path */}
                                <motion.path
                                    d="M 102 60 C 98 48 78 48 78 70 C 78 92 98 92 102 80 V 72 H 92"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 0.5
                                    }}
                                />
                            </g>
                        </mask>
                    </defs>

                    {/* Solid Text with Mask */}
                    <text
                        x="50%"
                        y="52%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        fontSize="42" 
                        fontWeight="700"
                        fontFamily="'Montserrat', sans-serif"
                        fill="#911c28"
                        stroke="none"
                        mask="url(#rg-mask)"
                        style={{ letterSpacing: '0.05em' }}
                    >
                        RG
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Loading;


