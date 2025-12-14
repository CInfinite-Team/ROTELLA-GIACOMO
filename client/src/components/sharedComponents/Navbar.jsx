import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = (lang) => {
      const currentPath = location.pathname;
      const pathSegments = currentPath.split('/');
      // Replace language segment (which is index 1 usually: /en/home -> en is 1)
      if (pathSegments.length > 1) {
          pathSegments[1] = lang;
      } else {
        // Fallback if path is just /
        pathSegments[0] = ''; // to make it /
        pathSegments[1] = lang;
      }
      navigate(pathSegments.join('/'));
  };

  const currentLang = i18n.language;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className='grid grid-cols-3 z-10 2xl:pl-36 shadow-sm px-6 py-5 sticky top-0 bg-white/40 backdrop-blur-lg'>
        <div className="w-full col-span-full lg:col-span-2 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            {/* Logo Placeholder (replace with SVG/logo) */}
            <div className="w-6 h-6 bg-black rounded-md"></div>
            <span className="text-xl font-semibold text-gray-700">Giacomo</span>
            <span className="text-xl font-semibold text-gray-700">Rotella</span>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex hidden items-center gap-6">
            <a href="#" className="font-medium text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-black">
              Blogs
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-black">
              Services
            </a>
            <div className="flex items-center gap-2 border-l pl-4 border-gray-300">
                <button 
                    onClick={() => toggleLanguage('en')} 
                    className={`font-semibold text-sm ${currentLang === 'en' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    EN
                </button>
                <span className="text-gray-300">|</span>
                <button 
                    onClick={() => toggleLanguage('it')} 
                    className={`font-semibold text-sm ${currentLang === 'it' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    IT
                </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
        <div></div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-md"></div>
            <span className="text-xl font-semibold text-gray-700">Giacomo Rotella</span>
          </div>
            <div className="flex items-center gap-2 mr-4">
                <button 
                    onClick={() => toggleLanguage('en')} 
                    className={`font-semibold text-sm ${currentLang === 'en' ? 'text-black' : 'text-gray-400'}`}
                >
                    EN
                </button>
                <span className="text-gray-300">|</span>
                <button 
                    onClick={() => toggleLanguage('it')} 
                    className={`font-semibold text-sm ${currentLang === 'it' ? 'text-black' : 'text-gray-400'}`}
                >
                    IT
                </button>
            </div>
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="p-6">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#" 
              className="text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-lg font-medium text-gray-500 hover:text-black transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Blogs
            </a>
            <a 
              href="#" 
              className="text-lg font-medium text-gray-500 hover:text-black transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
          </nav>
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Ready to get started?</p>
            <button className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
