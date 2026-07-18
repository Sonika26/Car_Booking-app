import "./CardCards.css";
import React, { useState } from "react";  // ✅ fixed import

const CarCards = ({ car }) => {
  const [liked, setLiked] = useState(false); // ✅ consistent naming

  return (
    <div className="car-card relative group"> {/* ✅ added group for hover */}
      {/* Car image */}
      <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />

      {/* Like button - hidden until hover */}
      <div
        className={`absolute top-2 right-2 rounded-full p-2 w-8 h-8 flex items-center justify-center text-xl cursor-pointer 
          ${liked ? "bg-red-500 text-white" : "bg-black/50 text-white"} 
          opacity-0 group-hover:opacity-100 transition`}
        onClick={() => setLiked(!liked)} // ✅ correct setter
      >
        ♥
      </div>

      {/* Car info */}
      <div className="car-info">
        <h3>{car.year} {car.make} {car.model}</h3>
        <p>{car.trim}</p>
        <h4>${car.price}</h4>

        {/* Extra details */}
        <ul className="car-details">
          <li>Mileage: {car.mileage} miles</li>
          <li>Transmission: {car.transmission}</li>
          <li>Fuel: {car.fuel}</li>
          <li>Location: {car.location}</li>
        </ul>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default CarCards;
