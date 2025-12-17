import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'it' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 text-sm font-bold text-gray-800 transition-transform duration-300 bg-white/80 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:scale-110 active:scale-95"
            aria-label="Switch Language"
        >
            {i18n.language === 'en' ? 'IT' : 'EN'}
        </button>
    );
};

export default LanguageSwitcher;
