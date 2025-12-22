import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'it', label: 'IT' },
        { code: 'de', label: 'DE' },
        { code: 'fr', label: 'FR' },
        { code: 'es', label: 'ES' },
    ];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        // Navigate to the same path but with the new language prefix
        // Paths are like /en/services or /it/services
        const pathSegments = pathname.split('/');
        // pathSegments[1] is the language code
        if (languages.some(l => l.code === pathSegments[1])) {
            pathSegments[1] = langCode;
            navigate(pathSegments.join('/'));
        } else {
             // Fallback if structure is unexpected, though Router handles it
            navigate(`/${langCode}`);
        }
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
             {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mb-3 bg-black text-white border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center origin-bottom"
                >
                    {languages.map((lang) => (
                         (lang.code !== i18n.language) && (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className="w-12 h-10 text-xs font-bold hover:bg-white/20 transition-colors flex items-center justify-center tracking-wider"
                            >
                                {lang.label}
                            </button>
                         )
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-12 h-12 text-xs font-bold transition-all duration-300 rounded-full shadow-2xl tracking-wider
                    ${isOpen ? 'bg-white text-black scale-110' : 'bg-black text-white hover:scale-110 active:scale-95 border border-gray-800'}
                `}
                aria-label="Switch Language"
            >
                {i18n.language.toUpperCase()}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
