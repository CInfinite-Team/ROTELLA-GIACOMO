import { useEffect, useState } from "react";
import WorkBook from "./WorkBook";
import CustomCursor from "./components/CustomCursor.jsx";
import HeroSection from "./components/sharedComponents/HeroSection.jsx";
import HomeMobile from "./components/Pages/HomeMobile.jsx";
import "./components/animations/animations.css";
import LanguageSwitcher from "./components/sharedComponents/LanguageSwitcher.jsx";
import CookieConsent from "./components/sharedComponents/CookieConsent.jsx";
import BackToTop from "./components/sharedComponents/BackToTop.jsx";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "./hooks/useMediaQuery";

function App() {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if we've already checked location this session
    const hasCheckedLocation = sessionStorage.getItem("hasCheckedLocation");

    if (!hasCheckedLocation) {
      fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
          const code = data.country_code;
          if (code === "IT") {
            i18n.changeLanguage("it");
          } else if (["DE", "AT", "CH"].includes(code)) {
            i18n.changeLanguage("de");
          } else if (["FR", "BE"].includes(code)) {
            i18n.changeLanguage("fr");
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
            i18n.changeLanguage("es");
          }
          sessionStorage.setItem("hasCheckedLocation", "true");
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
          // Mark as checked even on error to prevent constant retries
          sessionStorage.setItem("hasCheckedLocation", "true");
        });
    }

    const videos = document.querySelectorAll(".lazy-video");

    if (videos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          // Load the video when it enters viewport
          video.src = video.dataset.src;
          observer.unobserve(video);
        }
      });
    });

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, [i18n]);

  return (
    <>
      <CookieConsent />
      <BackToTop />
      <LanguageSwitcher />
      {isMobile ? (
        <div className="lg:hidden">
          <HomeMobile />
        </div>
      ) : (
        <div className="hidden max-w-[1920px] lg:block">
          <CustomCursor />
          <WorkBook />
        </div>
      )}
    </>
  );
}

export default App;
