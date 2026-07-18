import React ,{useState ,useContext}from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import './Hero.css'

const Findcar = () => {
  const [destination, setDestination] = useState("");
  const [pickup, setPickup] = useState("");
  const [checkout, setCheckout] = useState("");
  const [seats, setSeats] = useState("");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login"); // 🔑 force login
      return;
    }

    // ✅ pass filters to Listing page
    navigate("/listing", {
      state: { destination, pickup, checkout, seats },
    });
  };

  return (
    <form className="FindCar-section w-full py-12 relative top-15" onSubmit={handleSearch}>
      <div className="flex justify-center items-center mb-6">
        <h1 className="md:text-4xl font-bold text-black">Find Your Perfect Car</h1>
      </div>

      <section className="flex justify-center">
        <div className="find-cardiv w-full max-w-6xl bg-white rounded-[18px] shadow-lg p-10 flex flex-col md:flex-row gap-6 items-center">

          {/* Destination */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold text-gray-700 mb-2">Destination</label>
            <input
              type="text"
              placeholder="Enter city"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
            <input
              type="date"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkout Date */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold text-gray-700 mb-2">Checkout Date</label>
            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold text-gray-700 mb-2">Guests</label>
            <input
              type="number"
              placeholder="Number of guests"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Explore Button */}
          <div className="flex items-end">
            <button type="submit" className="bg-black text-white w-20 h-10 font-semibold px-10 py-2 rounded-md hover:bg-gray-700 transition">
              Explore
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Findcar;
