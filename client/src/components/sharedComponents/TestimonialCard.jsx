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
            className={`flex flex-col rounded-lg bg-[#fdf9f5] p-6 sm:p-8 w-full max-w-[320px] min-h-[400px] h-full justify-between mx-auto transition-transform duration-500 ${hover ? "scale-105" : ""}`}
          >
            <div className="flex items-start justify-between mb-5">
            <img loading="lazy" decoding="async" width='auto' height='auto' src={Logo} alt="" className="w-28 h-[120px]" />
            <div></div>
            {/* <img loading="lazy" decoding="async" width='auto' height='auto' src={Client} alt="" className="w-28 rounded-md" /> */}
            </div>

            {/* <img loading="lazy" decoding="async" width='auto' height='auto' src={Comma} alt="" className="w-14 mb-5 rounded-md" /> */}
            <div className="flex flex-col gap-4 mb-10">
              <p className={`max-w-[260px] ${hover ? "" : "Threeline"} `}>“{Review}”</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-lg">{Name}</p>
              <p className="text-sm">{Position}</p>
            </div>
              
          </div>
        </>
  );
};

export default TestimonialCard;
