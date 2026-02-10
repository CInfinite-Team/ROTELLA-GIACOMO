import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Hero from "../MobileHomePage/Hero";
import About from "../MobileHomePage/About";
import SmallBusiness from "../MobileHomePage/SmallBusiness";
import Fractional from "../MobileHomePage/Fractional";
import Fractional2 from "../MobileHomePage/Fractional2";
import StickyEle from "../MobileHomePage/StickyEle";
import Services from "../MobileHomePage/Services";
import OnBoarding from "../MobileHomePage/OnBoarding";
import WhyMe from "../MobileHomePage/WhyMe";
import BrandsWorkedHeading from "../MobileHomePage/BrandsWorkedHeading";
import BrandsWorkedWith from "../MobileHomePage/BrandsWorkedWith";
import Faq from "../sharedComponents/Faq";
import Footer from "../sharedComponents/Footer";
import FeaturedIn from "../sharedComponents/FeaturedIn";
import Testimonials from "../sharedComponents/Testimonials";
import BrandCarousel from "../sharedComponents/BrandCarousel";

import { useEffect } from "react";
function HomeMobile({ namespace = "translation" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const totalSlides = 14; // Total number of slides

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

  return (
    <div className="lg:hidden relative">
      <Swiper
        style={{ width: "100%", height: "100dvh" }}
        direction="vertical"
        simulateTouch={true}
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={true}
        speed={1400}
        keyboard={{ enabled: true }}
        effect="creative"
        creativeEffect={{
          prev: { translate: [0, "-100%", -200] },
          next: { translate: [0, "100%", 0] },
        }}
        modules={[Mousewheel, EffectCreative, Keyboard]}
        className="mobile-vertical-swiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={setSwiperInstance}
      >
        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <Hero namespace={namespace} />
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <About namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <BrandsWorkedHeading namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="w-full h-full sm:px-5 md:px-10">
            <div className="block sm:hidden h-full w-full">
              <BrandsWorkedWith namespace={namespace} />
            </div>
            <div className="hidden sm:block h-full w-full">
              <BrandCarousel namespace={namespace} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="">
            <SmallBusiness namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <Fractional namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <Fractional2 namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <Services namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <OnBoarding namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <WhyMe namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <Testimonials namespace={namespace} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden bg-[#F5F5F5] ">
          <div className="px-5 md:px-10 h-full">
            <FeaturedIn namespace={namespace} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <Faq namespace={namespace} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden bg-[#F5F5F5]">
          <div className="px-5 md:px-10">
            <Footer namespace={namespace} />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Show StickyEle on all slides except the first (Hero) */}
      {activeIndex !== 0 && <StickyEle />}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div
          className="h-full bg-[#911c28] transition-all duration-500 ease-out"
          style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* <Hero />
          <div className='px-5 md:px-10'>
           <SmallBusiness />
           <Fractional />
           <Fractional2 />
            <Services />
            <OnBoarding />
             <WhyMe />
             <BrandsWorkedHeading />
             <BrandsWorkedWith />
             <StickyEle />
             </div> */}
    </div>
  );
}

export default HomeMobile;
