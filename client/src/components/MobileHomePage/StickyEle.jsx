import React, { useState } from "react";
import PrizeCardPopup from "../sharedComponents/PrizeCardPopup";
import { PopupButton } from "react-calendly";
function StickyEle() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      {openPopup && <PrizeCardPopup onClose={() => setOpenPopup(false)} />}

      <div className='flex fixed bottom-0 left-0 w-full px-5 z-50 bg-[#f5f5f5] justify-between items-center py-2'>
        
        {/* Button can stay or remove */}
       <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="LET'S TALK"
            className=" bg-[#911c28] hover:bg-[#a73535] text-white text-xs md:text-lg font-bold py-2 px-5 md:px-20 w-fit md:py-5 rounded-full shadow-lg transition-colors duration-300"
          />


        {/* Image triggers popup */}
        <div className='relative cursor-pointer' onClick={() => setOpenPopup(true)}>
          <div className='relative'>
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden shadow-2xl">
              <img
                src='/Giacomo.webp'
                alt="Rotella Giacomo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-top object-cover"
              />
            </div>

            <span className="absolute bottom-2 right-2 flex size-[65%] z-[-1] ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a29ae9] opacity-90"></span>
              <span className="relative inline-flex size-[65%] rounded-full bg-[#a29ae9]"></span>
            </span>
          </div>

          <span className="absolute bottom-0 md:bottom-3 left-0 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
          </span>
        </div>

      </div>
    </>
  );
}

export default StickyEle;
