import { useEffect, useState, lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import "swiper/css/pagination";
import { useIsMobile } from "./hooks/useMediaQuery";
import BackToTop from "./components/sharedComponents/BackToTop";

const SmallBusiness = lazy(
  () => import("./components/MobileHomePage/SmallBusiness"),
);
const HomeMobile = lazy(() => import("./components/Pages/HomeMobile"));
const Fractional = lazy(() => import("./components/MobileHomePage/Fractional"));
const Fractional2 = lazy(
  () => import("./components/MobileHomePage/Fractional2"),
);
const Services = lazy(() => import("./components/MobileHomePage/Services"));
const OnBoarding = lazy(() => import("./components/MobileHomePage/OnBoarding"));
const About = lazy(() => import("./components/MobileHomePage/About"));
const WhyMe = lazy(() => import("./components/MobileHomePage/WhyMe"));
const BrandsWorkedHeading = lazy(
  () => import("./components/MobileHomePage/BrandsWorkedHeading"),
);
const HeroSection = lazy(
  () => import("./components/sharedComponents/HeroSection"),
);
const PrizeCard = lazy(() => import("./components/sharedComponents/PrizeCard"));
const BrandCarousel = lazy(
  () => import("./components/sharedComponents/BrandCarousel"),
);
const FeaturedIn = lazy(
  () => import("./components/sharedComponents/FeaturedIn"),
);
const Faq = lazy(() => import("./components/sharedComponents/Faq"));
const Footer = lazy(() => import("./components/sharedComponents/Footer"));
const Testimonials = lazy(
  () => import("./components/sharedComponents/Testimonials"),
);

const SlideNavigation = lazy(
  () => import("./components/sharedComponents/SlideNavigation"),
);

const SlideLayout = ({ children, padding = true }) => (
  <div
    className={`flex-1 h-full overflow-hidden lg:pr-[35%] xl:pr-[32%] 2xl:pr-[30vw] ${padding ? "px-5 md:px-10 2xl:pl-[10vw]" : "2xl:px-5 "}`}
  >
    {children}
  </div>
);

function FractionalPage() {
  // Delay mounting Swiper to improve FCP/LCP/TBT by rendering only first slide initially
  const [enableSwiper, setEnableSwiper] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 14; // Total number of slides
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleScrollToTop = () => {
      if (swiperInstance) {
        swiperInstance.slideTo(0);
      }
    };

    window.addEventListener("scrollToTop", handleScrollToTop);
    return () => {
      window.removeEventListener("scrollToTop", handleScrollToTop);
    };
  }, [swiperInstance]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("toggleBackToTop", { detail: activeIndex > 0 }),
    );
  }, [activeIndex]);

  useEffect(() => {
    const enable = () => setEnableSwiper(true);
    if ("requestIdleCallback" in window) {
      // @ts-ignore
      requestIdleCallback(enable, { timeout: 800 });
    } else {
      setTimeout(enable, 300);
    }
  }, []);

  const isMobile = useIsMobile();

  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      {/* React 19 Native Metadata Hoisting */}
      <title>Fractional Marketing Consultant | Rotella Giacomo</title>
      <meta
        name="description"
        content="Expert Fractional Marketing Consultant services. Get senior marketing leadership and execution without the full-time cost. Strategy, growth, and results."
      />
      <link
        rel="canonical"
        href={`https://rotella-giacomo.vercel.app/${currentLang}/fractional-marketing-consultant`}
      />

      {isMobile ? (
        <div className="w-full h-full bg-[#f5f5f5]">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center"></div>
            }
          >
            <HomeMobile namespace="fractional" page="Fractional Marketing" />
          </Suspense>
        </div>
      ) : (
        <div className="relative w-full h-full  bg-[#f5f5f5]">
          <div className="flex-1 h-full overflow-hidden">
            {!enableSwiper ? (
              <div
                style={{ width: "100%", height: "100dvh" }}
                className={`overflow-hidden  `}
              >
                <Suspense fallback={<div className="w-full h-full" />}>
                  <HeroSection namespace="fractional" />
                </Suspense>
              </div>
            ) : (
              <Swiper
                style={{ width: "100%", height: "100dvh" }}
                direction="vertical"
                simulateTouch={false}
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={{
                  sensitivity: 1,
                  releaseOnEdges: true,
                }}
                speed={1200}
                keyboard={{ enabled: true }}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [0, "-100%", -200],
                  },
                  next: {
                    translate: [0, "100%", 0],
                  },
                }}
                preloadImages={false}
                lazy={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={setSwiperInstance}
                modules={[Mousewheel, EffectCreative, Keyboard]}
                className="mobile-vertical-swiper flex-1"
              >
                <SwiperSlide
                  className={`overflow-hidden bg-[#F5F5F5]  ${activeIndex !== 0 ? "w-0 !opacity-0 transition-all duration-500  pointer-events-none" : " opacity-100"} `}
                >
                  <Suspense fallback={<div className="w-full h-full" />}>
                    <HeroSection namespace="fractional" />
                  </Suspense>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <About namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <BrandsWorkedHeading namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <BrandCarousel namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout padding={false}>
                    <Suspense fallback={<div className="w-full" />}>
                      <SmallBusiness namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <Fractional namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <Fractional2 namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout padding={false}>
                    <Suspense fallback={<div className="w-full " />}>
                      <Services namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <OnBoarding namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <WhyMe namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <Testimonials namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <FeaturedIn namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>

                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <Faq namespace="fractional" page="Fractional Marketing" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
                  <SlideLayout>
                    <Suspense fallback={<div className="w-full" />}>
                      <Footer namespace="fractional" />
                    </Suspense>
                  </SlideLayout>
                </SwiperSlide>
                <SlideNavigation
                  swiper={swiperInstance}
                  activeIndex={activeIndex}
                  totalSlides={totalSlides}
                />
              </Swiper>
            )}
            <BackToTop />
          </div>

          <div
            className={`hidden lg:flex items-center justify-center absolute right-0 top-0 h-full w-[35%] xl:w-[32%] 2xl:w-[30vw] min-w-[320px] max-w-[500px] z-50 transition-opacity ease-in ${activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="w-full h-full flex items-center justify-center p-4">
              <Suspense fallback={<div className="" />}>
                <PrizeCard namespace="fractional" />
              </Suspense>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
            <div
              className="h-full bg-[#911c28] transition-all duration-1000 ease-out"
              style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FractionalPage;
