import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase"; // adjust path if needed
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthContext";// useAuth hook from your AuthContext

const BookingForm = ({ car }) => {
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // get logged-in user

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = async (e) => {
    e.preventDefault();

    // ✅ Check if user is logged in
    if (!user) {
      navigate("/login");
      return;
    }

    // ✅ Validate dates
    if (!pickup || !returnDate) {
      setMessage("Please select both dates.");
      return;
    }
    if (new Date(returnDate) <= new Date(pickup)) {
      setMessage("Return date must be after pickup date.");
      return;
    }

    // ✅ Calculate total days & amount
    const diffTime = new Date(returnDate) - new Date(pickup);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalAmount = totalDays * car.rentPerDay;

    try {
      // ✅ Save booking in Firestore
      await addDoc(collection(db, "bookings"), {
        userId: user.uid,
        userName: user?.name || user.email,
        carId: car.id,
        carName: car.name,
        seats: car.seats,
        carImage: car.image,
        pickupDate: pickup,
        returnDate,
        totalAmount,
        status: "Paid", // or "UnPaid" if you want to handle payments later
        createdAt: Timestamp.now(),
      });

      setMessage(`Booking successful! Total: ₹${totalAmount}`);
      setPickup("");
      setReturnDate("");

      // ✅ Redirect after success
      setTimeout(() => {
        navigate("/my-bookings");
      }, 2000);
    } catch (err) {
      console.error("Error saving booking:", err);
      setMessage("Error saving booking. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md w-full flex justify-center">
      <form
        onSubmit={handleBooking}
        className="flex h-20 items-center gap-10 flex-wrap"
      >
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
            className="border border-gray-300 h-8 w-40 rounded-md px-3 py-2"
          />
        </div>

        {/* Book Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 h-10 w-30 mt-6"
        >
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
