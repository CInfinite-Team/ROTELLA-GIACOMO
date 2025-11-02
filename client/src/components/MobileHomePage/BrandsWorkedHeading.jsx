import React from 'react'
import { ArrowBigDown } from 'lucide-react'
function BrandsWorkedHeading() {
  return (
    <div className='flex flex-col bg-[#eae0d5] min-h-screen items-center justify-center'>

      <h2 className=" font-bold text-center mb-8 text-gray-800"
      style={{ fontSize: "clamp(25px, 8vw, 57px)" }}>
        Brands I've worked with
      </h2>

       <button> <ArrowBigDown size={150} fill='#911c28' color='#911c28' /></button>

    </div>
  )
}

export default BrandsWorkedHeading
