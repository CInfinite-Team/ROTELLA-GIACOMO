import React, { useState, useRef, useEffect } from 'react';

const ClippedText = ({ text, className = "", textClassName = "", style = {}, tooltipClassName = "" }) => {
  const [isClipped, setIsClipped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const checkClipped = () => {
      if (textRef.current) {
        // We use scrollHeight vs clientHeight to detect clipping
        // For line-clamp to work, it must be on the element with the ref
        setIsClipped(textRef.current.scrollHeight > textRef.current.clientHeight);
      }
    };

    checkClipped();
    const observer = new ResizeObserver(checkClipped);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [text]);

  return (
    <div className={`relative group/text ${className}`}>
      <div 
        ref={textRef}
        className={`w-full ${textClassName}`} 
        style={style}
      >
        {text}
      </div>
      
      {isClipped && (
        <div className={`absolute left-0 -top-5 mb-2 w-full max-w-[420px] bg-black/95 backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow-2xl opacity-0 translate-y-2 group-hover/text:opacity-100 group-hover/text:translate-y-0 transition-all duration-300 pointer-events-none z-50 ${tooltipClassName}`}>
          <div className="text-sm leading-relaxed text-gray-200">
            {text}
          </div>
          <div className="absolute top-full left-6 -mt-px border-8 border-transparent border-t-black/95"></div>
        </div>
      )}
    </div>
  );
};

export default ClippedText;
