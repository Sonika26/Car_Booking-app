import React from "react";
import {
  FaCog,
  FaUserFriends,
  FaGasPump,
  FaCar,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Car = ({ car,index}) => {
  const navigate = useNavigate();

  return (

    <div className={`list-cars rounded-3xl shadow-md p-5 w-full max-w-sm hover:shadow-xl transition duration-300 ${ (index%2) === 0 ? "bg-blue-100" : "bg-white"}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
        <h2 className="text-xl font-bold">{car.name}</h2>
        <p className="text-gray-500">{car.type}</p>
        </div>

        <div className="text-right">
          <p className="text-sky-500 font-bold">
            ${car.price}
          </p>
          <p className="text-sky-500">
            | ${car.rentPerDay}/day
          </p>
        </div>
      </div>

      {/* Car Image */}
      <div className="flex justify-center my-6">
        <img
        src={car.image}
        alt={car.name}
        className="h-32 object-contain"
        onClick={() => {
          console.log("Navigating to:", `/car/${car.id}`);
          navigate(`/car/${car.id}`);
      }}
      />
    </div>

    {/* Features */}
    <div className="grid grid-cols-4 gap-4 border-y py-4">
      <div className="flex mt-10 flex-col items-center">
        <FaCog className="text-gray-500 mb-2" />
      <p className="text-sm">{car.transmission}</p>
      </div>

      <div className="flex flex-col items-center">
        <FaUserFriends className="text-gray-500 mb-2" />
      <p className="text-sm">{car.seats}</p>
      </div>

      <div className="flex flex-col items-center">
        <FaGasPump className="text-gray-500 mb-2" />
      <p className="text-sm">{car.fuel}</p>
      </div>

      <div className="flex flex-col items-center">
        <FaCar className="text-gray-500 mb-2" />
      <p className="text-sm">{car.mileage}</p>
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-500 text-sm mt-4 line-clamp-2">
      {car.description}
    </p>
  </div>
);
};

export default Car;