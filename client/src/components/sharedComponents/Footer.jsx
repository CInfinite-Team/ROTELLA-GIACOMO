import React from 'react'
import { Phone,Mail } from 'lucide-react'
function Footer() {
  return (
     <footer className='text-sm md:text-xl pb-10 h-screen flex flex-col items-start gap-5 justify-center lg:px-[100px]'>
       <p className='text-center lg:text-left'>If you are a luxury business owner, go to my business <a href="https://www.luxury-method.com/" target='_blank' className='underline font-semibold pl-1'>Luxury Method</a>.</p>
        <div className='flex justify-center lg:justify-start  w-full flex-col'>
       <p className='font-bold mb-2 text-center lg:text-left'>or Contact me at:</p>
        <a href='tel:+393920034695' className='underline mb-2 text-center lg:text-left flex items-center w-full justify-center lg:justify-start gap-2 font-semibold'><Phone size={20}/> +39 3920034695</a> 
        <a href='mailto:rotellagiacomo@gmail.com' className='underline text-center lg:text-left flex w-full items-center justify-center lg:justify-start gap-2 font-semibold'><Mail size={20}/>  rotellagiacomo@gmail.com</a> 
</div>

      </footer>
  )
}

export default Footer
