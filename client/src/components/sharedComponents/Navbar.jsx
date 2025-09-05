import React from 'react'

function Navbar() {
  return (
  < nav className='grid grid-cols-3 z-10 2xl:pl-36 shadow-sm px-6 py-5 sticky top-0 bg-white/40 backdrop-blur-lg'>
  <div className="w-full col-span-full lg:col-span-2   flex items-center justify-between">
       {/* Left Section */}
       <div className="flex items-center gap-2">
         {/* Logo Placeholder (replace with SVG/logo) */}
         <div className="w-6 h-6 bg-black rounded-md"></div>
         <span className="text-xl font-semibold text-gray-700">Giacomo</span>
         {/* <span className="text-gray-400 text-lg">/</span> */}
         <span className="text-xl font-semibold text-gray-700">Rotella</span>
       </div>
 
       {/* Right Section */}
       <div className="md:flex hidden items-center gap-6">
         <a href="#" className=" font-medium text-gray-700 hover:text-black">
           Home
         </a>
         <a href="#" className=" font-medium text-gray-500 hover:text-black">
           Blogs
         </a>
         {/* <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
           Italia 
         </a> */}
         <a href="#" className=" font-medium text-gray-500 hover:text-black">
           Services
         </a>
       </div>
       </div>
       <div></div>
     </nav>
 
  )
}

export default Navbar
