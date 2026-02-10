import React, { useState } from "react";
import PrizeCardPopup from "../sharedComponents/PrizeCardPopup";
import { PopupButton } from "react-calendly";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

function StickyEle() {
  const [openPopup, setOpenPopup] = useState(false);
  
  // Language Logic
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
      { code: 'en', label: 'EN' },
      { code: 'it', label: 'IT' },
      { code: 'de', label: 'DE' },
      { code: 'fr', label: 'FR' },
      { code: 'es', label: 'ES' },
  ];

  const changeLanguage = (langCode) => {
      i18n.changeLanguage(langCode);
      const pathSegments = pathname.split('/');
      if (languages.some(l => l.code === pathSegments[1])) {
          pathSegments[1] = langCode;
          navigate(pathSegments.join('/'));
      } else {
          navigate(`/${langCode}`);
      }
      setIsLangOpen(false);
  };

  const whatsappNumber = '+393920034695';
  const whatsappMessage = "Ciao Giacomo! I'm interested in your services."; 

  return (
    <>
      {openPopup && <PrizeCardPopup onClose={() => setOpenPopup(false)} />}

      <div className='flex fixed bottom-0 left-0 w-full px-5 z-50 bg-[#f5f5f5] justify-between items-center py-2 safe-area-bottom'>
        
        {/* Button can stay or remove */}
       <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="LET'S TALK"
            className=" bg-[#911c28] hover:bg-[#a73535] text-white text-xs md:text-lg font-bold py-2 px-5 md:px-20 w-[116px] md:w-fit md:py-5 rounded-full shadow-lg transition-colors duration-300"
          />

        {/* WhatsApp Button */}
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#25d366] text-white rounded-full shadow-md active:scale-95 transition-transform"
            aria-label="Contact on WhatsApp"
        >
            <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        </a>

        {/* Language Switcher */}
        <div className="relative">
            <AnimatePresence>
            {isLangOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-3  bg-white text-black border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col items-center"
                >
                    {languages.map((lang) => (
                        (lang.code !== i18n.language) && (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className="w-10 h-10 text-xs font-bold hover:bg-gray-100 flex items-center justify-center tracking-wider"
                            >
                                {lang.label}
                            </button>
                        )
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-center w-10 h-10 text-xs font-bold rounded-full border border-gray-300 bg-white text-black shadow-sm active:scale-95 transition-all"
            >
                    {i18n.language.toUpperCase()}
            </button>
        </div>


        {/* Image triggers popup */}
        <div className='relative cursor-pointer' onClick={() => setOpenPopup(true)}>
          <div className='relative'>
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden shadow-2xl">
              <img
                src='/Giacomo.webp'
                alt="Rotella Giacomo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-top object-cover"
              />
            </div>

            <span className="absolute bottom-2 right-2 flex size-[65%] z-[-1] ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a29ae9] opacity-90"></span>
              <span className="relative inline-flex size-[65%] rounded-full bg-[#a29ae9]"></span>
            </span>
          </div>

          <span className="absolute bottom-0 md:bottom-3 left-0 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
          </span>
        </div>

      </div>
    </>
  );
}

export default StickyEle;
