import React, { useState } from "react";

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0];

  // ✅ Define state for pickup and return dates
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="booking-form bg-gray-100 p-4 rounded-md">
      {/* Pickup Date */}
      <label
        htmlFor="pickupDate"
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        Pickup Date
      </label>
      <input
        type="date"
        id="pickupDate"
        min={today}
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        className="border border-gray-400 rounded-md px-3 py-2 w-full mb-4"
      />

      {/* Checkout Date */}
      <label
        htmlFor="checkoutDate"
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        Checkout Date
      </label>
      <input
        type="date"
        id="checkoutDate"
        min={pickup || today} // ✅ ensures checkout is after pickup
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        className="border border-gray-400 rounded-md px-3 py-2 w-full mb-4"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Check Dates
      </button>
    </div>
  );
};

export default BookingForm;
