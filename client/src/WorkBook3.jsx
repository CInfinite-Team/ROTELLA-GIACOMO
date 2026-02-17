import React, { useEffect, useState } from "react";
// import Image1 from './assets/writebook-01.webp'
// import HeroVideo from './assets/heroVideo.mp4'
// import Navbar from './components/sharedComponents/Navbar'
import Footer from "./components/sharedComponents/Footer";
import {
  useSmoothScroll,
  useViewportAnimation,
  initLazyAnimationsObserver,
} from "./components/animations/ScrollAnimations";
import { initParallax } from "./components/animations/Parallax";
import "./components/animations/animations.css";
import { PopupButton } from "react-calendly";
import FAQ from "./components/sharedComponents/Faq";
import BrandCarousel from "./components/sharedComponents/BrandCarousel";
import { ChevronUp } from "lucide-react";
// import Arrow from './assets/Arrow.svg'
// import Giacomo from './assets/Giacomo.webp'
import { Highlight } from "./components/animations/hero-highlight";
function WorkBook2() {
  const [showCardPopup, setShowCardPopup] = useState(false);

  // Apply smooth scrolling to the entire page
  useSmoothScroll();

  useEffect(() => {
    const cleanupParallax = initParallax();
    const cleanupLazy = initLazyAnimationsObserver({
      threshold: 0.15,
      rootMargin: "0px 0px -12% 0px",
      once: false,
    });
    return () => {
      if (typeof cleanupParallax === "function") cleanupParallax();
      if (typeof cleanupLazy === "function") cleanupLazy();
    };
  }, []);
  //  useEffect(() => {
  //   if (showCardPopup) {
  //     if (!document.querySelector('script[src*="calendly"]')) {
  //       const script = document.createElement('script');
  //       script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //       script.async = true;
  //       document.body.appendChild(script);
  //     } else {
  //       window.Calendly && window.Calendly.initInlineWidgets();
  //     }
  //   }
  // }, [showCardPopup]);

  useEffect(() => {
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.Calendly && window.Calendly.initInlineWidgets();
    }
  }, []);

  // Toggle card popup
  const toggleCardPopup = () => {
    setShowCardPopup(!showCardPopup);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCardPopup &&
        !event.target.closest(".card-popup") &&
        !event.target.closest(".card-popup-button")
      ) {
        setShowCardPopup(false);
      }
    };

    if (showCardPopup) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showCardPopup]);
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex gap-5 bg-[#f4f4f4]   2xl:pl-32  w-full">
        {/* Main Content */}
        <div className="flex flex-col order-2 lg:order-1 w-full lg:w-[60%]  relative">
          {/* <div className='flex items-end w-full sticky translate-x-9  xl:translate-x-10  top-1/2'>
           <img src={Arrow} alt="" className='rotate-[30deg] w-16 xl:w-24 absolute right-0  hidden lg:block' />
        </div> */}
          {/* Hero Section */}
          <div className="relative flex flex-col gap-5 mt-5 px-10 lg:px-[35px] xl:px-[64px] min-h-[70vh] overflow-hidden">
            {/* Hero Content */}
            <div className="  relative z-1 flex flex-col gap-5 justify-center mb-10">
              <h1
                className="text-3xl md:text-5xl font-bold mt-16 slide-up !leading-snug"
                data-lazy-animation="fade-up"
                data-lazy-animation-duration="1200"
                data-lazy-animation-easing="ease-out-quart"
                ref={useViewportAnimation()}
              >
                If you’re a{" "}
                <span className="text-[#911c28] ">small business </span>owner
                looking to level up your marketing, you’re in the right place.
              </h1>
              <p
                className="font-semibold text-2xl md:text-4xl slide-up stagger-1 !leading-tight mt-10 "
                data-lazy-animation="fade-up"
                data-lazy-animation-delay="150"
                data-lazy-animation-duration="1200"
                data-lazy-animation-easing="ease-out-quart"
                ref={useViewportAnimation()}
              >
                What is a fractional marketing consultant?
              </p>

              <p
                className=" text-lg md:text-3xl  slide-up stagger-2"
                data-lazy-animation="fade-up"
                data-lazy-animation-delay="250"
                data-lazy-animation-duration="1200"
                data-lazy-animation-easing="ease-out-quart"
                ref={useViewportAnimation()}
              >
                As a fractional marketing consultant, my team and I work with
                you on a part-time and long-term basis to provide strategic
                guidance and hands-on execution.
              </p>
            </div>

            <div className="relative z-1 flex flex-col gap-5 justify-center mb-10">
              <p
                className="font-semibold text-2xl md:text-4xl slide-up stagger-1 !leading-tight "
                data-lazy-animation="fade-up"
                data-lazy-animation-delay="150"
                data-lazy-animation-duration="1200"
                ref={useViewportAnimation()}
              >
                What does the fractional marketing consultant package include?
              </p>

              <p
                className=" text-lg md:text-3xl  slide-up stagger-2"
                data-lazy-animation="fade-up"
                data-lazy-animation-delay="250"
                data-lazy-animation-duration="1200"
                ref={useViewportAnimation()}
              >
                My{" "}
                <Highlight className=" text-white leading-tight ">
                  {" "}
                  fractional marketing consulting package{" "}
                </Highlight>{" "}
                includes everything from strategy to execution:
              </p>
            </div>

            <p
              className="font-bold text-4xl mt-4 text-center slide-left"
              data-lazy-animation="fade-left"
              data-lazy-animation-delay="100"
              data-lazy-animation-duration="1200"
              ref={useViewportAnimation()}
            >
              Website maintenance & optimization
            </p>
            <p
              className="font-bold text-4xl text-center slide-right"
              data-lazy-animation="fade-right"
              data-lazy-animation-delay="150"
              data-lazy-animation-duration="1200"
              ref={useViewportAnimation()}
            >
              Search engine optimization
            </p>
            <p
              className="font-bold text-4xl text-center slide-left"
              data-lazy-animation="fade-left"
              data-lazy-animation-delay="200"
              data-lazy-animation-duration="1200"
              ref={useViewportAnimation()}
            >
              Social media management
            </p>
            <p
              className="font-bold text-4xl mb-4 text-center slide-right"
              data-lazy-animation="fade-right"
              data-lazy-animation-delay="250"
              data-lazy-animation-duration="1200"
              ref={useViewportAnimation()}
            >
              All other channels that are relevant to your business
            </p>
          </div>

          {/* Services Section */}
          <div className="flex flex-col relative items-center gap-5  px-10 mt-10">
            <h2
              className="text-lg md:text-4xl text-center font-bold mt-10 fade-in"
              data-lazy-animation="fade-up"
              data-lazy-animation-duration="1300"
              data-lazy-animation-easing="ease-out-quart"
              ref={useViewportAnimation()}
            >
              What does the{" "}
              <Highlight className=" text-white leading-tight ">
                [KW] onboarding process look like?
              </Highlight>
            </h2>

            <ol className="text-center space-y-5 font-medium mb-10">
              <li
                className="text-lg md:text-2xl  font-semibold slide-left"
                data-lazy-animation="zoom-in-left"
                data-lazy-animation-duration="1200"
                ref={useViewportAnimation()}
              >
                1. Intro call <br /> We learn your goals.
              </li>
              {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.06" ref={useViewportAnimation()} alt='' /> */}
              <li
                className="text-lg md:text-2xl  font-semibold slide-right"
                data-lazy-animation="zoom-in-right"
                data-lazy-animation-duration="1200"
                data-lazy-animation-delay="150"
                ref={useViewportAnimation()}
              >
                2. Proposal <br /> Scope, timeline, price.
              </li>
              {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.08" ref={useViewportAnimation()} alt='' /> */}
              <li
                className="text-lg md:text-2xl font-semibold slide-left"
                data-lazy-animation="zoom-in-up"
                data-lazy-animation-duration="1200"
                data-lazy-animation-delay="250"
                ref={useViewportAnimation()}
              >
                3. Kickoff <br /> We start working.
              </li>
            </ol>
            {/* <img src={Image1} className='object-cover w-full shadow-xl scale-in' data-parallax="0.07" ref={useViewportAnimation()} alt='' /> */}

            <h3
              className="text-lg md:text-4xl text-[#911c28] font-bold mb-3 mt-10 text-center slide-up !leading-snug"
              data-lazy-animation="fade-up"
              data-lazy-animation-duration="1100"
              ref={useViewportAnimation()}
            >
              Why me?
            </h3>
            <h3
              className="text-lg w-[60%] md:text-4xl font-bold mb-10 text-center slide-up !leading-snug"
              data-lazy-animation="fade-up"
              data-lazy-animation-duration="1100"
              data-lazy-animation-delay="120"
              ref={useViewportAnimation()}
            >
              One point of contact, full team of specialists.
            </h3>
          </div>
          <div className="px-2 mt-10 lg:ml-[35px] md:px-20 lg:px-0 xl:ml-[30px] lg:w-[85%] xl:pr-0">
            <BrandCarousel />
          </div>

          <FAQ page="Home" />

          <Footer />
        </div>
        {/* Right Sidebar (Card) */}
        <div className="z-50 flex-col hidden lg:flex order-1 lg:order-2 mt-6 lg:mt-0 col-span-full lg:col-span-1 px-5 lg:px-20 gap-4 ">
          <div className="max-w-sm mx-auto lg:fixed top-0 lg:mr-4 xl:mr-0 rounded-lg shadow-lg border border-gray-200  bg-[#f3efea]">
            {/* Header */}
            <div className="flex items-center flex-wrap gap- justify-between py-[6px]  px-3">
              <div className="flex items-center gap-2 p-3">
                {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
                <h2 className="font-semibold text-center text-gray-800">
                  YOUR OUTSOURCED MARKETING SOLUTION
                </h2>
              </div>
              <span className="text-sm text-center w-full font-semibold text-green-600">
                €1,000 / month
              </span>
            </div>

            {/* Body */}
            <div className="space-y-4 px-6 pt-2">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Includes end-to-end execution and strategy:
                </h3>
                <ul className="text-sm text-gray-600 leading-relaxed list-disc pl-4">
                  <li>
                    <span className="font-semibold text-black">
                      Social media:
                    </span>{" "}
                    Social media: content creation, posting & ad management
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      Website maintenance & optimization
                    </span>{" "}
                    (SEO, geo-targeting, performance)
                  </li>
                  <li>All other channels relevant to your business</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  Payment: 50% deposit to start · 50% on completion
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-">
                  How do I get it?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Book a 30-minutes call with me :
                  <br />
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="p-2">
              <button
                className="mt-2 w-full bg-black hover:bg-[#272727] duration-500 text-white font-semibold py-3 rounded-lg transition-colors scale-in ease-out-back"
                ref={useViewportAnimation()}
              >
                <PopupButton
                  url="https://calendly.com/rgiacomo"
                  rootElement={document.getElementById("root")}
                  text="Book a Call"
                  className="w-full h-full"
                />
              </button>
              <div className="text-sm text-gray-600 whitespace-nowrap flex-wrap leading-relaxed flex justify-center mt-2">
                Or Connect via: {"  "}
                <a
                  href="mailto:rotellagiacomo@gmail.com"
                  className="underline pl-1 font-semibold text-black"
                >
                  Email
                </a>
                , or{" "}
                <a
                  href="https://wa.me/393920034695"
                  className="underline font-semibold text-black"
                >
                  WhatsApp/Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Popup Button - Only visible on small to medium screens */}
      <button
        onClick={toggleCardPopup}
        className="fixed bottom-6 right-6 z-50 bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 lg:hidden sm:block card-popup-button"
        aria-label="Show pricing card"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      </button>

      {/* Card Popup Modal */}

      <div
        className={`fixed  ${showCardPopup ? "translate-x-0" : "-translate-x-full"} inset-0  bg-black/40 lg:hidden backdrop-blur-sm z-50 flex items-center overflow-y-auto sm:items-center justify-center pb-4 sm:p-4`}
      >
        <div className="card-popup bg-[#911c28] shadow-xl rounded-2xl overflow-hidden  max-w-sm w-full relative mx-2 scrollbar-hide animate-slideUp">
          {/* Close Button */}
          <button
            onClick={() => setShowCardPopup(false)}
            className="absolute top-3 right-3 z-10  hover:bg-red-600 text-white rounded-full p-1 transition-colors duration-200"
            aria-label="Close popup"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="flex items-center flex-wrap  justify-between py-[6px]  px-3">
            <div className="flex items-center w-full justify-center gap-2 p-3">
              {/* <div className='w-8 h-8 bg-black rounded-md'></div> */}
              <h2 className="font-semibold text-center text-white">
                [KW] Package
              </h2>
            </div>

            <div className="flex flex-col justify-center w-full gap-3 text-white items-center">
              <span className="text-center text-xl w-full font-bold text-green-600">
                €1000 / month
              </span>

              <span className="text-xs">
                -Can be adapted to your budget
                <br />
                -50% deposit to start · 50% on completion
                <br />
                -No Commitment, Cancel at any time
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-5  mt-2 px-6 pt-2">
            <div>
              <h3 className="font-semibold text-center text-white mb-1">
                Why me
              </h3>

              <p className="text-sm text-center text-white mt-2">
                One point of contact, full team of specialists.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-center text-white ">
                BOOK A CALL WITH ME
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1   mt-4 px-2">
            <div className="h-[250px] w-full flex justify-center cols-span-full ">
              <div
                className="calendly-inline-widget lg:max-w-[240px] "
                data-url="https://calendly.com/rgiacomo/30-min-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{
                  minWidth: "260px",
                  maxWidth: "260px",
                  height: "250px",
                }}
              />
            </div>
          </div>
          <div className="relative w-full my-2 flex justify-center h-fit">
            <div className="flex items-center justify-center text-center">
              <div className="relative w-16">
                <img
                  src="/Giacomo.webp"
                  alt="Giacomo"
                  loading="lazy"
                  decoding="async"
                  className="rounded-full  aspect-square object-cover"
                />

                <span className="absolute -left-1 bottom-2  flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                </span>
              </div>
              <span className="text-xl w-full  font-semibold pl-2 2xl:text-3xl text-white">
                I'm available to talk
              </span>
            </div>
          </div>

          {/* Button */}
          <div className="p-4 border-t">
            {/* <button className='w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all'>
          <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="Book a Call"
            className='w-full text-sm md:text-base h-4'
          />
        </button> */}
            <div className="text- text-white flex flex-col items-center gap- mt-1 flex-wrap">
              Or Write me
              <a
                href="mailto:rotellagiacomo@gmail.com"
                className="underline font-semibold text-white"
              >
                giacomo@rotellagiacomo.com
              </a>
              or
              <a
                href="https://wa.me/393920034695"
                className="underline font-semibold text-white"
              >
                +39 3920034695
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-20 lg:bottom-10 z-40 lg:z-50 right-6 lg:right-4 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
}

export default WorkBook2;
