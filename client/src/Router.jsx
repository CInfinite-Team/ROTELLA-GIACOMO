import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import App from "./App";
import i18n from "./i18n";

function LanguageHandler() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract language from valid paths
    const validLangs = ["en", "it", "de", "fr", "es"];
    const pathSegments = pathname.split("/");
    const currentLang = pathSegments[1];

    if (validLangs.includes(currentLang)) {
      if (i18n.language !== currentLang) {
        i18n.changeLanguage(currentLang);
      }
    } else if (currentLang === "") {
      // Root path "/"
      // Logic will be handled by the Root redirect component
    }
  }, [pathname]);

  return null;
}

import Loading from "./components/sharedComponents/Loading";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import CookiePolicy from "./components/Pages/CookiePolicy";
import TermsAndConditions from "./components/Pages/TermsAndConditions";
import MaasPage from "./MaasPage.jsx";
import FractionalPage from "./FractionalPage.jsx";

function RootRedirect() {
  // This component handles the "/" path logic
  const navigate = useNavigate();

  useEffect(() => {
    const checkLocation = async () => {
      // Artificial delay to show loading screen for demo/smoothness if strictly needed,
      // otherwise purely functional.
      await new Promise((r) => setTimeout(r, 1000));

      try {
        // Simple fetch to determine location
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const code = data.country_code;

        if (code === "IT") {
          navigate("/it", { replace: true });
        } else if (["DE", "AT", "CH"].includes(code)) {
          navigate("/de", { replace: true });
        } else if (["FR", "BE"].includes(code)) {
          navigate("/fr", { replace: true });
        } else if (
          [
            "ES",
            "MX",
            "AR",
            "CO",
            "PE",
            "VE",
            "CL",
            "EC",
            "GT",
            "CU",
            "BO",
            "DO",
            "HN",
            "PY",
            "SV",
            "NI",
            "CR",
            "PA",
            "UY",
            "GQ",
          ].includes(code)
        ) {
          navigate("/es", { replace: true });
        } else {
          navigate("/en", { replace: true });
        }
      } catch (error) {
        console.error("Geo-location failed, defaulting to EN", error);
        navigate("/en", { replace: true });
      }
    };

    checkLocation();
  }, [navigate]);

  return <Loading />;
}

export default function AppRouter() {
  return (
    <>
      <LanguageHandler />
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        {/* English routes - specific routes BEFORE wildcard */}
        <Route path="/en/marketing-team-as-a-service" element={<MaasPage />} />
        <Route
          path="/en/fractional-marketing"
          element={<FractionalPage />}
        />
        <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/en/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/en/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/en/*" element={<App />} />

        {/* Italian routes - specific routes BEFORE wildcard */}
        <Route path="/it/marketing-team-as-a-service" element={<MaasPage />} />
        <Route
          path="/it/fractional-marketing"
          element={<FractionalPage />}
        />
        <Route path="/it/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/it/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/it/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/it/*" element={<App />} />

        {/* German routes - specific routes BEFORE wildcard */}
        <Route path="/de/marketing-team-as-a-service" element={<MaasPage />} />
        <Route
          path="/de/fractional-marketing"
          element={<FractionalPage />}
        />
        <Route path="/de/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/de/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/de/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/de/*" element={<App />} />

        {/* French routes - specific routes BEFORE wildcard */}
        <Route path="/fr/marketing-team-as-a-service" element={<MaasPage />} />
        <Route
          path="/fr/fractional-marketing"
          element={<FractionalPage />}
        />
        <Route path="/fr/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/fr/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/fr/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/fr/*" element={<App />} />

        {/* Spanish routes - specific routes BEFORE wildcard */}
        <Route path="/es/marketing-team-as-a-service" element={<MaasPage />} />
        <Route path="/es/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/es/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/es/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/es/marketing-team-as-a-service" element={<MaasPage />} />
        <Route
          path="/es/fractional-marketing"
          element={<FractionalPage />}
        />
        <Route path="/es/*" element={<App />} />
      </Routes>
    </>
  );
}
