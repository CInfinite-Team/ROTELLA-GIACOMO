import React from 'react'
import { PopupButton } from "react-calendly";
// import Giacomo from '../../assets/Giacomo.webp'

function StickyEle() {
  return (
    <div className='flex fixed bottom-0 left-0 w-full px-5 z-50 bg-[#eae0d5] justify-between items-center py-2 '>
      
       <PopupButton
            url="https://calendly.com/rgiacomo"
            rootElement={document.getElementById("root")}
            text="LET'S TALK"
            className=" bg-[#911c28] hover:bg-[#a73535] text-white text-sm md:text-lg font-bold py-3 px-5 md:px-20 w-fit md:py-5 rounded-full shadow-lg transition-colors duration-300"
          />

<div className='relative'>
          <div className='relative '>
             <div className="w-14 h-14 md:w-20 md:h-20 rounded-full  overflow-hidden shadow-2xl ">
                        <img 
                          src='/Giacomo.webp'
                          alt="Rotella Giacomo"
                          className="w-full h-full object-top object-cover"
                        />
                          
              
               </div>
               <span className="absolute bottom-3 right-3 flex size-[65%] z-[-1] ">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a29ae9] opacity-90"></span>
                 <span className="relative inline-flex size-[65%] rounded-full bg-[#a29ae9]"></span>
                </span>
                </div>
                <span className="absolute bottom-3 left-0  flex size-3">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                 <span className="relative inline-flex size-3 rounded-full bg-[#0add0a]"></span>
                </span>
                      </div>

    </div>
  )
}

export default StickyEle
