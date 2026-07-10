import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Car from "./Car";
import "./listing.css";
import cars from "../../Data/cars.json";


const ListingPage = () => {
  const [filteredCars, setFilteredCars] = useState(cars);

  return (
    <div className="listing-container">
      <Sidebar cars={cars} setFilteredCars={setFilteredCars} />

      <div className="cars-grid">
        {filteredCars.map((car ,index ) => (
          <Car key={car.id} car={car} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
