import React,{useState} from "react";
// import MagnifyxLogo from '../../assets/Testimonials/MagnifyxLogo.svg'
// import Client from '../../assets/Testimonials/client.svg'
import Comma from '../../assets/Comma.svg'
const TestimonialCard = ({Client,Logo,Review,Name,Position}) => {

  const [hover, setHover] = useState(false);

  return (
        <>
          <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex flex-col rounded-lg bg-[#fdf9f5] p-4 sm:p-8 w-full max-w-[320px] md:min-h-[400px] h-full justify-between mx-auto transition-transform duration-500 ${hover ? "lg:scale-105" : ""}`}
          >
            <div className="flex items-start justify-between mb-2 lg:mb-5">
            <img loading="lazy" decoding="async" width='auto' height='auto' src={Logo} alt="" className="w-24 h-[80px] md:w-28 md:h-[120px]" />
            <div></div>
            {/* <img loading="lazy" decoding="async" width='auto' height='auto' src={Client} alt="" className="w-28 rounded-md" /> */}
            </div>

            {/* <img loading="lazy" decoding="async" width='auto' height='auto' src={Comma} alt="" className="w-14 mb-5 rounded-md" /> */}
            <div className="flex flex-col gap-4 mb-4 lg:mb-10">
              <p className={`select-text cursor-text max-w-[260px] text-sm md:text-base ${hover ? "" : "lg:line-clamp-4"} `}>“{Review}”</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold md:text-lg select-text cursor-text">{Name}</p>
              <p className="text-xs md:text-sm select-text cursor-text">{Position}</p>
            </div>
              
          </div>
        </>
  );
};

export default TestimonialCard;
