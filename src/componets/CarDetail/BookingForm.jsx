import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const BookingForm = ({ car }) => {
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0]; // ✅ FIXED

  const handleBooking = (e) => {
    e.preventDefault();

    if (!pickup || !returnDate) {
        setMessage("Please select both dates.");
        return;
      }

      if (new Date(returnDate) <= new Date(pickup)) {
          setMessage("Return date must be after pickup date.");
          return;
        }
        const pickupDate = new Date(pickup);
        const returnDateObj = new Date(returnDate);

        // Difference in milliseconds
        const diffTime = returnDateObj - pickupDate;

        // Convert to days
        const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const totalAmount = totalDays * car.rentPerDay;


        const booking = {
          id: Date.now(),
          carId: car.id,
          carName: car.name,
          seats: car.seats,
          carImage: car.image,
          pickup,
          returnDate,
          totalAmount

        };

        const existing = JSON.parse(localStorage.getItem("bookings")) || [];
        existing.push(booking);

        localStorage.setItem("bookings", JSON.stringify(existing));
        console.log("booking succesful")
       setMessage(`Booking successful! Total: ₹${totalAmount}`);

        setPickup("");
        setReturnDate("");


        setTimeout(() => {
          navigate("/MyBooking");
        }, 2000);
      };

      return (
        <div className="bg-gray-100 p-4 rounded-md w-full flex justify-center">

          <form onSubmit={handleBooking} className="flex h-20 items-center gap-10 flex-wrap">

            {/* Pickup Date */}
            <div className="flex flex-col">
              <label className="text-l font-semibold text-gray-700 mb-1">
                Pickup
              </label>
              <input
              type="date"
              min={today}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="border border-gray-300 h-8 w-40 rounded-md px-3 py-2"
              />
            </div>

            {/* Checkout Date */}
            <div className="flex flex-col">
              <label className="text-l font-semibold text-gray-700 mb-1">
                Checkout
              </label>
              <input
              type="date"
              min={pickup || today}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border border-gray-300 h-8 w-40  rounded-md px-3 py-2"
              />
            </div>

            {/* Book Button */}
            <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 h-10 w-30 mt-6">
            Book Now
          </button>

        </form>

        {message && (
        <p className="mt-3 text-green-600 font-medium">{message}</p>
      )}
    </div>

  );
};

export default BookingForm;
