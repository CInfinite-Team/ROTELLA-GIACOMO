import React from 'react'
import Image1 from './assets/writebook-01.webp'
import Navbar from './components/sharedComponents/Navbar'
import Footer from './components/sharedComponents/Footer'
function WorkBook() {
  return (
    <>
      <Navbar />
    <div className='grid grid-cols-3 w-full  '>
      
      

      <div className='flex flex-col col-span-full lg:col-span-2 gap-10 '>
     
      <div className='flex flex-col gap-5 px-10  lg:px-[35px] xl:px-[70px]'>
        <h1 className='text-4xl md:text-6xl font-bold mt-16'>Writebook</h1>
        <p className='font-semibold text-2xl md:text-4xl'>Instantly publish your own books on the web for free, no publisher required.</p>
        <p className='font-medium text-lg md:text-2xl text-gray-600'>Blogging and posting on social is easy. But why is it so hard to publish a whole book on the web? It’s not anymore. Writebook is remarkably simple software that allows you to publish text and pictures in a simple, browsable online book format.</p>
        <span className='text-lg md:text-2xl text-gray-600 font-medium'>Here’s <a href="" className='font-semibold text-black underline'>an example.</a> And <a href="" className='font-semibold text-black underline'>another.</a> And <a href="" className='font-semibold text-black underline'>one more.</a></span>
     
      </div>

      <div className='flex flex-col gap-5 px-10 '>
        <h2 className=' text-lg md:text-3xl text-center font-bold mt-16'>Make a book, give it a title, upload a cover.</h2>
        <img src={Image1} className='object-cover w-full shadow-xl' alt="" />
                <h2 className=' text-lg md:text-3xl text-center font-bold mt-16'>Add text, images, and sections to your book.</h2>
                <img src={Image1} className='object-cover w-full shadow-xl' alt="" />
                <img src={Image1} className='object-cover w-full shadow-xl' alt="" />
        <h2 className='text-lg md:text-3xl text-center font-bold mt-16'>Drag pages to reorganize as you flesh things out.</h2>

                <img src={Image1} className='object-cover w-full shadow-xl' alt="" />
                        <h2 className='text-lg md:text-3xl text-center font-bold mt-16'>Invite as many co-authors as you’d like. Let some just read, let others write too.</h2>

                <img src={Image1} className='object-cover w-full shadow-xl' alt="" />
                        <h2 className='text-lg md:text-3xl text-center font-bold mt-16'>When done, just flip the switch and instantly publish your book live on the web for everyone.</h2>
                <img src={Image1} className='object-cover w-full shadow-xl' alt="" />
                        <h2 className=' text-lg md:text-3xl text-center font-bold mt-16'>All your Writebooks show up together in your library. Make as many as you’d like.</h2>
                <img src={Image1} className='object-cover w-full shadow-xl' alt="" />

      
      </div>
     
     <div className='flex flex-col gap-5  px-[35px] xl:px-[70px]'>
        <h2 className='text-3xl text-center font-bold mt-16'>What kind of books can I publish?</h2>

        <p className='font-medium text-2xl text-gray-600'>Whatever you’ve written is ready for Writebook. No publisher, no gatekeeper, no permission necessary. Just write it.</p>

        <ul className=' list-disc space-y-7'>

      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>
      <li className='text-2xl  font-medium'><span className='text-black font-bold'>Instruction manuals.</span> <span className='text-gray-600'>Publish a manual to go along with a piece of software, hardware, or a process that needs simple, clear documentation. Like the Writebook Manual itself.</span></li>


        </ul>

      </div>

     <Footer/>
     
      </div>

      <div className='flex flex-col col-span-full lg:col-span-1 px-5 lg:px-0 gap-4 lg:pr-[20px] xl:pr-[80px] '>
      
     <div className="max-w-sm mx-auto sticky top-0 rounded-lg shadow-lg border border-gray-200 p-3 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-3">
        <div className="flex items-center gap-2">
          {/* Icon (placeholder, replace with your logo) */}
          <div className="w-8 h-8 bg-black rounded-md"></div>
          <h2 className="font-semibold text-gray-800">Writebook</h2>
        </div>
        <span className="text-sm font-semibold text-green-600">
          100% Free
        </span>
      </div>

      {/* Body */}
      <div className="space-y-4 px-3">
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Includes everything you need
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            You’ll get the software (including the Rails code), free updates to
            any 1.x version, and <span className="font-semibold">instructions for installing it on your own server.</span> 
            We’ve made it super easy, even for non-technical people.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">How do I get it?</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Click the button below, enter your email, and we’ll send you a private
            download link to get it set up. It just takes a minute.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 w-full  bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
        Get it for free
      </button>
    </div>
      </div>

    
    </div>
    </>
  )
}

export default WorkBook
