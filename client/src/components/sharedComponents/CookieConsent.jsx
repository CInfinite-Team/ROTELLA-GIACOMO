import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Activity, 
  Megaphone, 
  Settings2, 
  X, 
  ChevronRight, 
  Check, 
  ListChecks 
} from 'lucide-react';

const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1500); // Delayed appearance for better UX
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      applyConsent(savedPreferences);
    }
  }, []);

  const applyConsent = (prefs) => {
    window.cookieConsent = prefs;
    if (!prefs.analytics) {
      window['ga-disable-GA_MEASUREMENT_ID'] = true;
    }
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyNecessary);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    applyConsent(prefs);
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleToggle = (category) => {
    if (category === 'necessary') return;
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop when showing details */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
            />
          )}

          {/* Main Container */}
          <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-2xl z-[151]">
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden"
            >
              {!showDetails ? (
                // --- Simple Banner View ---
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                      <div className="p-2 bg-[#911c28]/10 rounded-xl">
                        <Cookie className="w-5 h-5 text-[#911c28]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {t('cookie_title', 'Cookie Preferences')}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {t('cookie_description', 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Your privacy is our priority.')}
                    </p>
                    
                     <button
                        onClick={() => setShowDetails(true)}
                        className="mt-3 text-sm font-semibold text-gray-500 hover:text-[#911c28] transition-colors inline-flex items-center gap-1"
                      >
                       <Shield className="w-3 h-3" />
                        {t('cookie_learn_more', 'Privacy & Legal Details')}
                      </button>
                  </div>

                  <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[280px]">
                    <button
                      onClick={handleAcceptAll}
                      className="w-full px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#911c28] to-[#b42d3b] hover:shadow-lg hover:shadow-[#911c28]/20 rounded-xl transition-all duration-300 transform active:scale-[0.98]"
                    >
                      {t('cookie_accept_all', 'Accept All Cookies')}
                    </button>
                    
                    <div className="grid grid-cols-2 gap-3">
                       <button
                        onClick={handleRejectAll}
                        className="px-4 py-3 text-sm font-bold text-[#911c28] bg-[#911c28]/5 hover:bg-[#911c28]/10 rounded-xl transition-all duration-300 active:scale-95"
                      >
                        {t('cookie_reject_all', 'Reject')}
                      </button>
                      <button
                        onClick={() => setShowDetails(true)}
                        className="px-4 py-3 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 flex items-center justify-center gap-1 active:scale-95"
                      >
                        <Settings2 className="w-4 h-4" />
                        {t('cookie_customize', 'Manage')}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // --- Detailed Settings View ---
                <div className="flex flex-col max-h-[85vh]">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <ListChecks className="w-5 h-5 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {t('cookie_settings_title', 'Preference Center')}
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="p-6 overflow-y-auto space-y-4">
                    <p className="text-sm text-gray-500 mb-6">
                      {t('cookie_settings_description', 'Choose which cookies you allow us to use. You can change these settings at any time.')}
                    </p>

                    {[
                      {
                        key: 'necessary',
                        title: t('cookie_necessary_title', 'Technical & Necessary'),
                        desc: t('cookie_necessary_desc', 'Essential for the website to function correctly.'),
                        icon: Shield,
                        mandatory: true
                      },
                      {
                        key: 'functional',
                        title: t('cookie_functional_title', 'Personalization'),
                        desc: t('cookie_functional_desc', 'Remembering your preferences like language or theme.'),
                        icon: Settings2
                      },
                      {
                        key: 'analytics',
                        title: t('cookie_analytics_title', 'Analytics & Speed'),
                        desc: t('cookie_analytics_desc', 'Helping us understand visitor behavior to optimize performance.'),
                        icon: Activity
                      },
                      {
                        key: 'marketing',
                        title: t('cookie_marketing_title', 'Marketing'),
                        desc: t('cookie_marketing_desc', 'Used to deliver relevant advertisements to you.'),
                        icon: Megaphone
                      }
                    ].map((item) => (
                      <div
                        key={item.key}
                        className={`p-4 rounded-2xl border transition-all duration-300 ${
                          preferences[item.key]
                            ? 'bg-[#911c28]/[0.02] border-[#911c28]/20'
                            : 'bg-white border-gray-100'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex gap-3">
                            <div className={`p-2 rounded-lg mt-0.5 ${preferences[item.key] ? 'bg-[#911c28]/10' : 'bg-gray-100'}`}>
                              <item.icon className={`w-4 h-4 ${preferences[item.key] ? 'text-[#911c28]' : 'text-gray-500'}`} />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-500 leading-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          
                          <button
                            disabled={item.mandatory}
                            onClick={() => handleToggle(item.key)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                              preferences[item.key] ? 'bg-[#911c28]' : 'bg-gray-200'
                            } ${item.mandatory ? 'opacity-40 cursor-not-allowed' : ''}`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                preferences[item.key] ? 'translate-x-5' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-[11px] text-gray-500 leading-relaxed text-center">
                        {t('cookie_privacy_text', 'By clicking save, you agree to our policies.')}{' '}
                        <Link to={`/${currentLang}/privacy-policy`} className="text-[#911c28] hover:underline font-semibold">
                          {t('privacy_policy', 'Privacy Policy')}
                        </Link>
                        {' & '}
                        <Link to={`/${currentLang}/cookie-policy`} className="text-[#911c28] hover:underline font-semibold">
                          {t('cookie_policy', 'Cookie Policy')}
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-2 pb-8 border-t border-gray-100 bg-white">
                    <button
                      onClick={handleSavePreferences}
                      className="w-full px-4 py-4 text-sm font-bold text-white bg-gray-900 hover:bg-black rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      <Check className="w-4 h-4" />
                      {t('cookie_save_preferences', 'Save My Preferences')}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
