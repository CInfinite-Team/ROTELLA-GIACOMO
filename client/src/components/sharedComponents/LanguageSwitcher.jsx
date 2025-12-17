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
             {isOpen && (
                <div className="mb-2 bg-white/80 backdrop-blur-md border border-white/40 rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                    {languages.map((lang) => (
                         (lang.code !== i18n.language) && (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className="w-12 h-10 text-sm font-bold text-gray-800 hover:bg-white/50 transition-colors"
                            >
                                {lang.label}
                            </button>
                         )
                    ))}
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 text-sm font-bold text-gray-800 transition-transform duration-300 bg-white/80 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:scale-110 active:scale-95"
                aria-label="Switch Language"
            >
                {i18n.language.toUpperCase()}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
