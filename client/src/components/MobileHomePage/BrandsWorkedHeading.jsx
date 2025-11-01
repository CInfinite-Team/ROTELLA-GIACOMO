import React from 'react'
import { ArrowBigDown } from 'lucide-react'
function BrandsWorkedHeading() {
  return (
    <div className='flex flex-col bg-[#eae0d5] min-h-screen items-center justify-center'>

      <h2 className="text-4xl md:text-7xl font-bold text-center mb-8 text-gray-800">
        Brands I've worked with
      </h2>

       <button> <ArrowBigDown size={200} fill='#911c28' color='#911c28' /></button>

    </div>
  )
}

export default BrandsWorkedHeading
