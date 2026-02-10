import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useTranslation, Trans } from "react-i18next";
import { useViewportAnimation } from "../animations/ScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DoGBay from "../../assets/Brands/DoGBay.mp4";
import RisinVenture from "../../assets/Brands/RisinVenture.png";
import RisinVentureMob from "../../assets/Brands/RisinVenturesMob.png";
import BadgervidDesktop from "../../assets/Brands/BadgerMapVidDesktop.mp4";
import Badgervid from "../../assets/Brands/Badgervid.mp4";
import KukrejaVidDesktop from "../../assets/Brands/KukrejaVidDesktop.mp4";
import KukrejaVid from "../../assets/Brands/KukrejaVid.mp4";
import AiSummitVidDesktop from "../../assets/Brands/AiSummitVidDesktop.mp4";
import AiSummitVid from "../../assets/Brands/AiSummitVid.mp4";
import RadianceVidDesktop from "../../assets/Brands/RadianceVidDesktop.mp4";
import RadianceVid from "../../assets/Brands/RadianceVid.mp4";
import GucciImage from "../../assets/Brands/GucciImage.svg";
import WebSetupVidDesktop from "../../assets/Brands/WebSetupVidDesktop.mp4";
import WebSetupVid from "../../assets/Brands/WebSetupVid.mp4";
import KananVidDesktop from "../../assets/Brands/KananVidDesktop.mp4";
import KananVid from "../../assets/Brands/KananVid.mp4";
import OffBeattImg from "../../assets/Brands/OffBeattImg.png";
import LondonLanesImg from "../../assets/Brands/LondonLanesImg.svg";
import JackWillsDesktop from "../../assets/Brands/JackWillsDesktop.png";
import SapniImg from "../../assets/Brands/SapniImg.svg";
import pitchbookDesktop from "../../assets/Brands/pitchbookDesktop.png";
import pitchbook from "../../assets/Brands/pitchbookImage.png";
import { useCalendly } from "../../hooks/useCalendly";
import ClippedText from "./ClippedText";
import { useIsMobile } from "../../hooks/useMediaQuery";

const BrandCarousel = React.memo(function BrandCarousel({
  namespace = "translation",
}) {
  const [isHovered, setIsHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);
  const mobileVideoRefs = useRef([]);
  const isMobile = useIsMobile();

  const { openCalendlyPopup } = useCalendly();
  const { t } = useTranslation(namespace);

  const brands = useMemo(
    () => [
      {
        logo: DoGBay,
        mobileLogo: DoGBay,
        name: "DOCK & BAY",
        work: t("brand_dock_bay_work"),
        category: t("brand_retail_manufacturing"),
        type: "video",
      },
      {
        logo: BadgervidDesktop,
        mobileLogo: Badgervid,
        name: "BADGER MAPS",
        work: t("brand_badge_work"),
        category: t("brand_saas"),
        type: "video",
      },
      {
        logo: GucciImage,
        mobileLogo: GucciImage,
        name: "GUCCI",
        work: (
          <Trans
            i18nKey="brand_gucci_specific_work"
            t={t}
            components={{
              1: (
                <a
                  href="https://www.luxury-method.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline "
                />
              ),
            }}
          />
        ),
        category: t("brand_luxury_fashion"),
        type: "img",
      },
      {
        logo: RisinVenture,
        mobileLogo: RisinVentureMob,
        name: "RISIN VENTURES",
        work: t("brand_risin_work"),
        category: t("brand_venture_capital"),
        type: "img",
      },
      {
        logo: KukrejaVidDesktop,
        mobileLogo: KukrejaVid,
        name: "KUKREJA INFRASTRUCTURES",
        work: t("brand_kukreja_work"),
        category: t("brand_real_estate"),
        type: "video",
      },
      {
        logo: RadianceVidDesktop,
        mobileLogo: RadianceVid,
        name: "RADIANCE CLINIC",
        work: t("brand_radiance_work"),
        category: t("brand_healthcare"),
        type: "video",
      },
      {
        logo: WebSetupVidDesktop,
        mobileLogo: WebSetupVid,
        name: "WEBSITESETUP",
        work: t("brand_websitesetup_work"),
        category: t("brand_free_resource"),
        type: "video",
      },
      {
        logo: AiSummitVidDesktop,
        mobileLogo: AiSummitVid,
        name: "AIX SUMMIT",
        work: t("brand_ai_summit_work"),
        category: t("brand_technology"),
        type: "video",
      },
      {
        logo: KananVidDesktop,
        mobileLogo: KananVid,
        name: "KANAN INTERNATIONAL",
        work: t("brand_kanan_work"),
        category: t("brand_education"),
        type: "video",
      },
      {
        logo: OffBeattImg,
        mobileLogo: OffBeattImg,
        name: "OFFBEAT STUDIOS",
        work: t("brand_offbeat_work"),
        category: t("brand_lifestyle"),
        type: "img",
      },
      {
        logo: SapniImg,
        mobileLogo: SapniImg,
        name: "MIKALI SAPANI",
        work: (
          <Trans
            i18nKey="brand_mikali_work"
            components={{
              1: (
                <a
                  href="https://www.luxury-method.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                />
              ),
            }}
          />
        ),
        category: t("brand_luxury_fashion"),
        type: "img",
      },
      {
        logo: LondonLanesImg,
        mobileLogo: LondonLanesImg,
        name: "LANES LONDON",
        work: t("brand_lanes_work"),
        category: t("brand_streetwear"),
        type: "img",
      },
      {
        logo: JackWillsDesktop,
        mobileLogo: JackWillsDesktop,
        name: "JACK WILLS",
        work: t("brand_jack_wills_work"),
        category: t("brand_retail_apparel"),
        type: "img",
      },
      {
        logo: pitchbookDesktop,
        mobileLogo: pitchbook,
        name: "PITCHBOOK",
        work: t("brand_pitchbook_work"),
        category: t("brand_financial_saas"),
        type: "img",
      },
    ],
    [t],
  );

  // Track if carousel is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }, // 50% visibility required to auto-play
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Manage video playback
  useEffect(() => {
    const managePlayback = () => {
      // Handle Desktop Videos
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        const shouldPlay =
          index === activeIndex && isInView && isHovered === index;

        if (shouldPlay) {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      });

      // Handle Mobile Videos
      mobileVideoRefs.current.forEach((video) => {
        if (!video) return;
        video.pause();
      });
    };

    managePlayback();
  }, [activeIndex, isInView, isHovered]);

  const handleCallClick = useCallback(() => {
    openCalendlyPopup("https://calendly.com/rgiacomo");
  }, [openCalendlyPopup]);

  return (
    <div className="w-full relative h-screen" ref={carouselRef}>
      <div
        className="w-full  absolute top-1/2 -translate-y-1/2 max-w-6xl mx-auto py-8 md:px-14"
        ref={useViewportAnimation()}
      >
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={false}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 14,
            },

            1900: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
          className="relative  xl:mt-auto pt-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="group relative  xl:mt-auto flex flex-col  overflow-hidden cursor-pointer transition-all duration-300 w-auto max-h-[80vh]  mx-auto ">
                {/* Card Image/Logo Area */}
                <div className="w-full relative rounded-2xl shadow-lg overflow-hidden h-full flex flex-row bg-[#00050f] aspect-[9/16] lg:aspect-[14/9]">
                  {/* Left Panel (Info) - Visible on Hover (Desktop) */}
                  {!isMobile && (
                    <div
                      className={`hidden lg:flex flex-col justify-center p-8 lg:p-12 text-white h-full transition-all duration-500 ease-in-out absolute left-0 top-0 z-20 ${
                        isHovered !== index
                          ? "w-[65%] opacity-100 translate-x-0"
                          : "w-[65%] opacity-0 -translate-x-10 pointer-events-none"
                      }`}
                    >
                      <h3
                        className="font-bold uppercase mb-2 leading-tight"
                        style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
                      >
                        {brand.name}
                      </h3>
                      <p
                        className="text-gray-400 font-medium tracking-wider uppercase mb-4"
                        style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}
                      >
                        {brand.category}
                      </p>

                      <ClippedText
                        text={brand.work}
                        className="mb-6"
                        textClassName="text-gray-300 leading-relaxed line-clamp-4 xl:line-clamp-6 2xl:line-clamp-[8] "
                        style={{
                          fontSize: "clamp(14px, min(1.6vw, 5vh), 56px)",
                        }}
                      />
                    </div>
                  )}

                  {/* Right Panel (Media) */}
                  <div
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`relative w-full h-full transition-all duration-500 ease-in-out ${
                      isHovered !== index
                        ? "lg:w-[35%] lg:translate-x-[185.71%]"
                        : "lg:w-full lg:translate-x-0"
                    }`}
                  >
                    {/* DESKTOP MEDIA (Visible on HOVER) */}
                    {(!isMobile || isHovered === index) && (
                      <div
                        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isHovered === index ? "opacity-100" : "opacity-0"}`}
                      >
                        {brand.type === "img" ? (
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={brand.logo}
                            playsInline
                            loop
                            autoPlay
                            muted
                            preload="metadata"
                            className="w-full h-full object-cover object-center bg-black"
                          />
                        )}
                      </div>
                    )}

                    {/* MOBILE MEDIA (Visible on DEFAULT / NO HOVER) */}
                    {(isMobile || isHovered !== index) && (
                      <div
                        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isHovered !== index ? "opacity-100" : "opacity-0"}`}
                      >
                        {brand.type === "img" ? (
                          <img
                            src={brand.mobileLogo}
                            alt={`${brand.name} mobile logo`}
                            className="w-full h-full object-cover object-top scale-110"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <video
                            ref={(el) => (mobileVideoRefs.current[index] = el)}
                            src={brand.mobileLogo}
                            playsInline
                            muted
                            autoPlay={false}
                            preload="metadata"
                            onLoadedMetadata={(e) => (e.target.currentTime = 2)}
                            className="w-full h-full object-cover object-top bg-black scale-110"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Mobile Overlay (kept for smaller screens) */}
                  {isMobile && (
                    <div
                      className={`lg:hidden absolute inset-0 bg-black/80 text-white p-6 flex flex-col justify-center text-center transition-opacity duration-300 ${isHovered === index ? "opacity-100" : "opacity-0"}`}
                    >
                      <h3 className="font-bold text-xl mb-1">{brand.name}</h3>
                      <p className="text-blue-200 text-xs mb-3 uppercase">
                        {brand.category}
                      </p>
                      <div className="text-sm text-gray-200">{brand.work}</div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center !text-black mt-6 space-x-2"></div>
        </Swiper>

        {/* Custom Navigation Buttons */}
        {!isMobile && (
          <>
            <div className="swiper-button-prev-custom hidden md:block absolute left-4 xl:left-0 top-1/2 transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-50 cursor-pointer border border-gray-200">
              <svg
                className="w-5 h-5 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>

            <div className="swiper-button-next-custom hidden md:block absolute right-4 xl:right-0 top-1/2 transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-50 cursor-pointer border border-gray-200">
              <svg
                className="w-5 h-5 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default BrandCarousel;
