import { ChevronUp, ChevronDown } from "lucide-react";

export default function SlideNavigation({ swiper, activeIndex, totalSlides }) {
  if (!swiper || activeIndex === 0) return null;

  return (
    <div className="fixed  lg:right-[30.5%] 2xl:right-[31vw] top-[35%] -translate-y-1/2 z-50 flex flex-col gap-4 hidden lg:flex">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={activeIndex === 0}
        className={`p-3 rounded-full cursor-pointer transition-all duration-300  
          ${activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-110"}
        `}
        aria-label="Previous Section"
      >
        <ChevronUp size={30} className="cursor-pointer text-red-800" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={activeIndex >= totalSlides - 1}
        className={`p-3 rounded-full cursor-pointer  transition-all duration-300 
          ${activeIndex >= totalSlides - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-110"}
        `}
        aria-label="Next Section"
      >
        <ChevronDown size={30} className=" cursor-pointer text-red-800" />
      </button>
    </div>
  );
}
