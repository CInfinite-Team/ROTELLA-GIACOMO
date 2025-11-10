import React from 'react'
const BrandsWorkedHeading = React.memo(function BrandsWorkedHeading() {
  return (
    <div className='flex flex-col bg-[#eae0d5] min-h-screen items-center justify-center'>

      <h2 className=" font-bold text-center mb-8 text-gray-800"
      style={{ fontSize: "clamp(25px, 8vw, 57px)" }}>
        Brands I've worked with
      </h2>

       <button aria-label="Scroll down">
         <svg width="150" height="150" viewBox="0 0 24 24" fill="#911c28" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
           <path d="M11 3a1 1 0 1 1 2 0v12.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6.001 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 15.586V3z"/>
         </svg>
       </button>

    </div>
  )
})

export default BrandsWorkedHeading
