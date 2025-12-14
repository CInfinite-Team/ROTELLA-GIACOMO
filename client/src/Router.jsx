import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import App from './App';
import i18n from './i18n';

function LanguageHandler() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract language from valid paths
    const validLangs = ['en', 'it'];
    const pathSegments = pathname.split('/');
    const currentLang = pathSegments[1];

    if (validLangs.includes(currentLang)) {
      if (i18n.language !== currentLang) {
        i18n.changeLanguage(currentLang);
      }
    } else if (currentLang === '') {
        // Root path "/"
        // Perform Geo-check or default to /en
        // Logic will be handled by the Root redirect component, but just in case
    }
  }, [pathname]);

  return null;
}

function RootRedirect() {
    // This component handles the "/" path logic
    const navigate = useNavigate();

    useEffect(() => {
        const checkLocation = async () => {
             try {
                // Simple fetch to determine location
                // Using ipapi.co as planned
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                
                if (data.country_code === 'IT') {
                    navigate('/it', { replace: true });
                } else {
                    navigate('/en', { replace: true });
                }

             } catch (error) {
                 console.error("Geo-location failed, defaulting to EN", error);
                 navigate('/en', { replace: true });
             }
        };

        checkLocation();
    }, [navigate]);

    return <div>Loading...</div>; // Or a spinner
}

export default function AppRouter() {
  return (
    <>
      <LanguageHandler />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/en/*" element={<App />} />
        <Route path="/it/*" element={<App />} />
      </Routes>
    </>
  );
}
