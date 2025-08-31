import React from 'react'

function Navbar() {
  return (
  <nav className="w-full col-span-3 bg-white/40 backdrop-blur-lg lg:pr-[350px] xl:pr-[490px] shadow-sm px-6 py-5 sticky top-0 flex items-center justify-between">
       {/* Left Section */}
       <div className="flex items-center gap-2">
         {/* Logo Placeholder (replace with SVG/logo) */}
         <div className="w-6 h-6 bg-black rounded-md"></div>
         <span className="text-lg font-semibold text-gray-700">ONCE</span>
         <span className="text-gray-400 text-lg">/</span>
         <span className="text-lg font-semibold text-gray-700">Writebook</span>
       </div>
 
       {/* Right Section */}
       <div className="md:flex hidden items-center gap-6">
         <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
           Overview
         </a>
         <a href="#" className="text-sm font-medium text-gray-500 hover:text-black">
           Changelog
         </a>
       </div>
     </nav>
 
  )
}

export default Navbar
