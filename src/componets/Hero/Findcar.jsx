import React from 'react'
import './Hero.css'

const Findcar = () => {
  return (
    <div className="FindCar-section w-full py-12 relative top-15">
      {/* Heading */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="md:text-4xl font-bold text-black">
          Find Your Perfect Car
        </h1>
      </div>

      {/* Booking Bar */}
      <section className=" flex justify-center">
        <div className="find-cardiv w-full max-w-6xl bg-white rounded-[18px] shadow-lg p-10 flex flex-col md:flex-row gap-6 items-center">

          {/* Destination */}
          <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-2">Destination</label>
            <input
            type="text"
            placeholder="Enter city"
            className="border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
            <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkout Date */}
          <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-2">Checkout Date</label>
            <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-2">Guests</label>
            <input
            type="number"
            placeholder="Number of guests"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Explore Button */}
          <div className="flex items-end">
            <button className="bg-black text-white font-semibold px-10 py-12 h-8 w-20 rounded-md hover:bg-gray-700 transition">
              Explore
            </button>
          </div>
        </div>
      </section>
    </div>



  )
}

export default Findcar