import React from 'react'
import PrizeCard from './PrizeCard'

function PrizeCardPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-[#ffece173] backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
 <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-xl font-bold cursor-pointer"
        >
          ×
        </button>
      {/* Clickable close area */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Popup content */}
      <div
        className="relative  max-h-[90vh] overflow-y-auto w-full max-w-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
       

        <PrizeCard />
      </div>
    </div>
  )
}

export default PrizeCardPopup
